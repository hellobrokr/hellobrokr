"use client"

import { ScrollAnimator } from "./scroll-animator"
import { FileSignature, Zap, Clock, ShieldCheck, PenSquare } from "lucide-react"

const signFeatures = [
  {
    icon: Zap,
    title: "One-Click Signing",
    description: "Sign and send documents with a single click. No lengthy processes.",
  },
  {
    icon: Clock,
    title: "Instant Execution",
    description: "Close deals in minutes, not days, with legally-binding e-signatures.",
  },
  {
    icon: ShieldCheck,
    title: "Bulletproof Audit Trail",
    description: "Every action is logged, timestamped, and secure for full compliance.",
  },
  {
    icon: PenSquare,
    title: "Unlimited Signatures",
    description: "Never worry about limits. Send as many documents as you need.",
  },
]

export function SignSection() {
  return (
    <section id="sign" className="py-24 md:py-32 bg-white">
      <div className="container max-w-7xl">
        {/* Hero Content */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16 md:mb-24">
          {/* Left Column - Content */}
          <ScrollAnimator>
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-xl p-1 text-sm font-medium text-foreground shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20">
                <span className="mr-2 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center gap-2">
                  <FileSignature className="h-4 w-4" />
                  Sign
                </span>
                <span className="pr-3">Execute deals instantly</span>
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-black">The final step,</span>
                  <br />
                  <span className="text-black">made </span>
                  <span className="relative inline-block align-middle">
                    <span className="absolute inset-x-[-10px] inset-y-[-6px] bg-primary/20 rounded-[28px] shadow-neumorphic-card transform blur-lg opacity-80 -z-10 skew-y-[-1.5deg]"></span>
                    <span className="relative z-10 inline-block px-6 py-2 sm:px-8 sm:py-3 bg-primary text-primary-foreground rounded-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] border border-white/30">
                      effortless.
                    </span>
                  </span>
                </h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Unlimited, compliance-grade e-signatures built directly into your workflow. Bank-grade security meets
                one-click simplicity to get deals over the line faster.
              </p>
            </div>
          </ScrollAnimator>

          {/* Right Column - Visual */}
          <ScrollAnimator delay="delay-200">
            <div className="relative">
              <img
                src="/signature-graphic.png"
                alt="A person signing a document on a tablet, with security icons floating around."
                className="rounded-3xl shadow-neumorphic-card-hover"
              />
            </div>
          </ScrollAnimator>
        </div>

        {/* Feature Tiles */}
        <ScrollAnimator>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {signFeatures.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-white shadow-neumorphic-card transition-shadow duration-200 hover:shadow-neumorphic-card-hover"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)]">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-xl font-bold text-foreground mb-2">{feature.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{feature.description}</div>
              </div>
            ))}
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
