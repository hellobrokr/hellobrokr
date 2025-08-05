"use client"

import { BrokrHeader } from "@/components/brokr/header"
import { NotificationPill } from "@/components/brokr/notification-pill"
import { useState, useEffect } from "react"

export default function OnboardingPage() {
  const [showNotification, setShowNotification] = useState(false)

  const handleWaitlistSuccess = () => {
    setShowNotification(true)
  }

  useEffect(() => {
    // Load Stripe pricing table script
    const script = document.createElement("script")
    script.src = "https://js.stripe.com/v3/pricing-table.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <BrokrHeader onWaitlistSuccess={handleWaitlistSuccess} />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Choose Your Plan</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start your free trial today. No credit card required.
            </p>
          </div>

          <div className="rounded-2xl bg-white shadow-neumorphic-card p-8">
            <stripe-pricing-table
              pricing-table-id="prctbl_1RpGXVE43xWZCXH3UQFbpmSn"
              publishable-key="pk_live_51QX5gGE43xWZCXH3ivdyoCspjeEUT2TVUCeNyAvwykKpSw95ZayoUndnephVBzkySNaqtjvJ0JVjTU4KEW7GLdN100uKErd8KG"
            />
          </div>
        </div>
      </main>
      <NotificationPill isVisible={showNotification} onClose={() => setShowNotification(false)} />
    </div>
  )
}
