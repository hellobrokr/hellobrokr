import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider" // Assuming you have this for shadcn

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "brokr",
  description: "",
  openGraph: {
    title: "brokr",
    description: "",
    url: "https://hellobrokr.com",
    siteName: "brokr",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "brokr",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "brokr",
    description: "",
    images: ["/og-image-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-background text-foreground antialiased")}>
        {/* ThemeProvider might not be strictly needed if only light mode, but good for shadcn */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
