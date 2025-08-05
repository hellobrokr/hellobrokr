"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ScrollAnimator } from "./scroll-animator"
import { Clock, Users, Zap, ArrowRight, Star } from "lucide-react"

export function UrgencyScarcity() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30,
  })
  const [recentSignups, setRecentSignups] = useState(47)
  const [waitlistPosition, setWaitlistPosition] = useState(1247)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRecentSignups((prev) => prev + Math.floor(Math.random() * 2) + 1)
      setWaitlistPosition((prev) => Math.max(1, prev - Math.floor(Math.random() * 3) - 1))
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-4xl">
        <ScrollAnimator>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 mb-4">
              <Zap className="h-4 w-4" />
              Limited Time Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Founder's Pricing Ends Soon</h2>
            <p className="text-xl text-muted-foreground">
              Lock in 50% off for life. Only available to the first 2,000 customers.
            </p>
          </div>
        </ScrollAnimator>

        {/* Countdown Timer */}
        <ScrollAnimator delay="delay-100">
          <div className="rounded-2xl bg-white p-8 shadow-neumorphic-card mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Offer expires in:</h3>
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <div className="bg-slate-900 text-white rounded-lg p-4 mb-2">
                      <div className="text-2xl font-bold">{value.toString().padStart(2, "0")}</div>
                    </div>
                    <div className="text-sm text-muted-foreground capitalize">{unit}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Pricing Comparison */}
              <div className="rounded-xl bg-slate-50 p-6">
                <h4 className="font-semibold text-foreground mb-4">Founder's Pricing</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Regular Price</span>
                    <span className="text-muted-foreground line-through">$199/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Your Price</span>
                    <span className="text-2xl font-bold text-primary">$99/month</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-green-600">You Save</span>
                    <span className="text-green-600 font-semibold">$1,200/year</span>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Star className="h-4 w-4" />
                    <span className="font-medium">Locked in for life - price never increases</span>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="rounded-xl bg-slate-50 p-6">
                <h4 className="font-semibold text-foreground mb-4">Join the Movement</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{recentSignups} people</div>
                      <div className="text-sm text-muted-foreground">signed up in the last 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Position #{waitlistPosition.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">in the beta access queue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground rounded-xl px-12 py-4 text-lg shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] hover:bg-primary-hover hover:shadow-[0_6px_16px_rgba(0,0,0,0.18),_inset_0_1px_2px_rgba(255,255,255,0.65),_inset_0_-1px_1px_rgba(0,0,0,0.12)] transition-all duration-200 ease-in-out"
              >
                Claim Your Founder's Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </ScrollAnimator>

        {/* Exclusive Benefits */}
        <ScrollAnimator delay="delay-200">
          <div className="rounded-2xl bg-white p-6 shadow-neumorphic-card">
            <h3 className="font-semibold text-foreground mb-4 text-center">Founder's Edition Exclusive Benefits</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Priority Support</h4>
                <p className="text-sm text-muted-foreground">Direct line to our founding team</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Early Access</h4>
                <p className="text-sm text-muted-foreground">First to get new features</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Founder's Community</h4>
                <p className="text-sm text-muted-foreground">Exclusive network access</p>
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
