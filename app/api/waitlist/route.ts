import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with API key from environment variables
// Note: You will need to add RESEND_API_KEY to your project's environment variables.
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    console.log("Received email:", email)

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    // Check if BLOB_READ_WRITE_TOKEN exists
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.error("BLOB_READ_WRITE_TOKEN not found")
      return NextResponse.json({ error: "Storage not configured" }, { status: 500 })
    }

    // Create CSV entry with timestamp
    const timestamp = new Date().toISOString()
    const csvEntry = `${email},${timestamp}\n`

    console.log("Creating CSV entry:", csvEntry)

    // Try to get existing file first
    let existingContent = ""
    try {
      const response = await fetch(
        `https://blob.vercel-storage.com/waitlist-emails.csv?token=${process.env.BLOB_READ_WRITE_TOKEN}`,
      )
      if (response.ok) {
        existingContent = await response.text()
        console.log("Found existing content, length:", existingContent.length)
      }
    } catch (error) {
      console.log("No existing file found, creating new one")
    }

    // Check if email already exists
    if (existingContent.includes(email)) {
      console.log("Email already exists:", email)
      return NextResponse.json({ error: "Email already registered" }, { status: 400 })
    }

    // Add header if this is the first entry
    const content = existingContent || "email,timestamp\n"
    const updatedContent = content + csvEntry

    console.log("Storing content to blob...")

    // Store updated CSV in Vercel Blob with allowOverwrite: true
    const blob = await put("waitlist-emails.csv", updatedContent, {
      access: "public",
      contentType: "text/csv",
      allowOverwrite: true,
    })

    console.log("Successfully stored to blob:", blob.url)

    // Send notification email using Resend
    try {
      if (process.env.RESEND_API_KEY) {
        await resend.emails.send({
          from: "waitlist@brokr.app", // Note: This domain must be verified with Resend.
          to: "contact@hellobrokr.com",
          subject: "🎉 New Waitlist Signup!",
          html: `<p>A new user has joined the waitlist: <strong>${email}</strong></p><p>Timestamp: ${timestamp}</p>`,
        })
        console.log("Notification email sent successfully.")
      } else {
        console.log("RESEND_API_KEY not configured, skipping email notification.")
      }
    } catch (emailError) {
      console.error("Error sending notification email:", emailError)
      // Do not block the response for email failure
    }

    // Forward to Make webhook
    const webhookUrl = process.env.MAKE_WEBHOOK_URL || "https://hook.us2.make.com/d44xnr5pc3l0917ld4a31s19qzn39c1e"
    if (webhookUrl) {
      try {
        const forwardedFor = request.headers.get("x-forwarded-for") || ""
        const ip = forwardedFor.split(",")[0]?.trim() || "unknown"
        const userAgent = request.headers.get("user-agent") || "unknown"
        const referer = request.headers.get("referer") || "unknown"
        const pathname = new URL(request.url).pathname

        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Optional: use this header in Make to verify origin
            ...(process.env.MAKE_WEBHOOK_SECRET ? { "X-Webhook-Secret": process.env.MAKE_WEBHOOK_SECRET } : {}),
          },
          body: JSON.stringify({
            source: "brokr-waitlist",
            email,
            timestamp,
            context: {
              ip,
              userAgent,
              referer,
              pathname,
            },
          }),
        })
        console.log("Forwarded to Make webhook")
      } catch (err) {
        console.error("Failed to forward to Make webhook:", err)
        // Do not block the main response on webhook failure
      }
    }

    return NextResponse.json({
      success: true,
      message: "Email added to waitlist",
      url: blob.url,
    })
  } catch (error) {
    console.error("Error storing email:", error)
    return NextResponse.json(
      {
        error: "Failed to store email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

// Optional: GET endpoint to retrieve the CSV file URL
export async function GET() {
  try {
    return NextResponse.json({
      message: "Waitlist CSV stored in Vercel Blob",
      note: "Check your Vercel dashboard for the blob storage files",
      hasToken: !!process.env.BLOB_READ_WRITE_TOKEN,
    })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Failed to get waitlist info" }, { status: 500 })
  }
}
