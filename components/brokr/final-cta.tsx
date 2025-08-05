"use client"

import { Button } from "@/components/ui/button"
import { ScrollAnimator } from "./scroll-animator"
import { ArrowRight, MessageCircle } from "lucide-react"

interface FinalCtaProps {
  onGetStarted: () => void
}

export function FinalCta({ onGetStarted }: FinalCtaProps) {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container max-w-4xl">
        <ScrollAnimator>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Ready to upgrade your{" "}
              <span className="relative inline-block align-middle">
                <span className="absolute inset-x-[-10px] inset-y-[-6px] bg-primary/20 rounded-[28px] shadow-neumorphic-card transform blur-lg opacity-80 -z-10 skew-y-[-1.5deg]"></span>
                <span className="relative z-10 inline-block px-4 py-1 sm:px-6 sm:py-2 bg-primary text-primary-foreground rounded-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] border border-white/30">
                  workflow
                </span>
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of dealmakers who've already transformed their workflow with brokr. Start closing more
              deals today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="group w-full sm:w-auto bg-slate-100 text-slate-700 rounded-xl px-8 py-4 text-lg shadow-[0_4px_12px_rgba(0,0,0,0.08),_inset_0_1px_2px_rgba(255,255,255,0.8),_inset_0_-1px_1px_rgba(0,0,0,0.05)] hover:bg-slate-200 hover:shadow-[0_6px_16px_rgba(0,0,0,0.12),_inset_0_1px_2px_rgba(255,255,255,0.85),_inset_0_-1px_1px_rgba(0,0,0,0.08)] transition-all duration-200 ease-in-out"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Speak to the team
              </Button>
              <Button
                size="lg"
                onClick={onGetStarted}
                className="group w-full sm:w-auto bg-primary text-primary-foreground rounded-xl px-8 py-3 text-lg shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] hover:bg-primary-hover hover:shadow-[0_6px_16px_rgba(0,0,0,0.18),_inset_0_1px_2px_rgba(255,255,255,0.65),_inset_0_-1px_1px_rgba(0,0,0,0.12)] transition-all duration-200 ease-in-out"
              >
                Join the waitlist
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
