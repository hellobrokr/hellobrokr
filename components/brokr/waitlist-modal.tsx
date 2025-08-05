"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, ArrowRight } from "lucide-react"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export function WaitlistModal({ isOpen, onClose, onSuccess }: WaitlistModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist")
      }

      setIsSubmitting(false)
      onSuccess()
      onClose()
      setEmail("")
    } catch (error) {
      setIsSubmitting(false)
      setError(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  if (!isOpen) return null

  // Shared input styling for perfect consistency
  const inputClasses =
    "w-full rounded-xl bg-white shadow-neumorphic-inset border-0 focus:ring-2 focus:ring-primary text-lg py-4 px-3"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-md rounded-2xl bg-white/90 p-8 shadow-floating-pill backdrop-blur-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputClasses}
          />
          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
          <div className="flex gap-2">
            <Button
              type="button"
              onClick={onClose}
              className="flex-1 bg-slate-100 text-slate-600 rounded-xl px-4 py-4 text-lg hover:bg-slate-200 transition-all duration-200 ease-in-out"
            >
              <X className="h-5 w-5" />
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-[5] bg-primary text-primary-foreground rounded-xl px-6 py-4 text-lg shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] hover:bg-primary-hover hover:shadow-[0_6px_16px_rgba(0,0,0,0.18),_inset_0_1px_2px_rgba(255,255,255,0.65),_inset_0_-1px_1px_rgba(0,0,0,0.12)] transition-all duration-200 ease-in-out"
            >
              {isSubmitting ? "Joining..." : "Join the waitlist"}
              {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
