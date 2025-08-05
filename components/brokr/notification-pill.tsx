"use client"

import { useState, useEffect } from "react"
import { Send, X } from "lucide-react"

interface NotificationPillProps {
  isVisible: boolean
  onClose: () => void
}

export function NotificationPill({ isVisible, onClose }: NotificationPillProps) {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true)
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    } else {
      // Delay unmounting to allow exit animation
      const timer = setTimeout(() => setShouldRender(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:transform sm:-translate-x-1/2 sm:max-w-md z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-2xl bg-white/90 px-6 py-4 shadow-floating-pill backdrop-blur-md">
        <Send className="h-5 w-5 text-primary flex-shrink-0" />
        <div className="flex-1">
          <div className="text-sm font-medium text-foreground">You've joined the waitlist</div>
          <div className="text-sm text-muted-foreground font-normal">your invite will be sent soon.</div>
        </div>
        <button
          onClick={onClose}
          className="ml-2 rounded-full p-1 text-muted-foreground hover:bg-slate-100 hover:text-foreground transition-colors flex-shrink-0"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
