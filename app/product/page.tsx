"use client"

import { BrokrHeader } from "@/components/brokr/header"
import { ProductPage } from "@/components/brokr/product-page"
import { BrokrFooter } from "@/components/brokr/footer"
import { NotificationPill } from "@/components/brokr/notification-pill"
import { useState } from "react"

export default function Product() {
  const [showNotification, setShowNotification] = useState(false)

  const handleWaitlistSuccess = () => {
    setShowNotification(true)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <BrokrHeader onWaitlistSuccess={handleWaitlistSuccess} />
      <main className="flex-1">
        <ProductPage />
      </main>
      <BrokrFooter />
      <NotificationPill isVisible={showNotification} onClose={() => setShowNotification(false)} />
    </div>
  )
}
