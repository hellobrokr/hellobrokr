"use client"

import { ScrollAnimator } from "./scroll-animator"
import { FileSignature, Zap, Clock, ShieldCheck, PenSquare, ClipboardCopy, MapPin, History } from "lucide-react"

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

const signHeroFeatures = [
  {
    icon: ClipboardCopy,
    title: "Templates",
    subtitle: "Reusable documents",
  },
  {
    icon: MapPin,
    title: "IP Tracking",
    subtitle: "Secure location data",
  },
  {
    icon: History,
    title: "Audit Trail",
    subtitle: "Immutable logs",
  },
  {
    icon: Zap,
    title: "Workflows",
    subtitle: "Automate sequences",
  },
]

export function SignSection() {
  return (
    <section id="sign" className="py-24 bg-white md:py-3">
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
                  <span className="text-black">Signed, Sealed,</span>
                  <br />
                  <span className="relative inline-block align-middle">
                    <span className="absolute inset-x-[-10px] inset-y-[-6px] bg-primary/20 rounded-[28px] shadow-neumorphic-card transform blur-lg opacity-80 -z-10 skew-y-[-1.5deg]"></span>
                    <span className="relative z-10 inline-block px-6 py-2 bg-primary text-primary-foreground rounded-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] border border-white/30 sm:py-0.5 sm:px-3">
                      Delivered.
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
            <div className="relative max-w-sm mx-auto h-[480px]">
              {/* Base Document Mockup */}
              <div className="absolute top-8 left-0 right-0 w-full h-[440px] bg-white rounded-2xl p-6 shadow-neumorphic-card border border-slate-100 space-y-4">
                <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                <div className="h-4 bg-slate-100 rounded w-full"></div>
                <div className="h-4 bg-slate-100 rounded w-full"></div>
                <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                <div className="h-4 bg-slate-100 rounded w-full"></div>
                <div className="h-4 bg-slate-100 rounded w-full"></div>
              </div>

              {/* Floating Tiles - positioned based on the image */}
              {/* Templates Tile */}
              <div className="absolute top-12 left-0 lg:-left-12 bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/40 w-56 z-10">
                <div className="flex items-center sm:items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <ClipboardCopy className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-black text-xs sm:text-sm mb-1">Templates</div>
                    <div className="text-xs text-gray-600 hidden sm:block">Reusable documents</div>
                  </div>
                </div>
              </div>

              {/* IP Tracking Tile */}
              <div className="absolute top-28 right-0 lg:-right-8 bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/40 w-56 z-10">
                <div className="flex items-center sm:items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-black text-xs sm:text-sm mb-1">IP Tracking</div>
                    <div className="text-xs text-gray-600 hidden sm:block">Secure location data</div>
                  </div>
                </div>
              </div>

              {/* Audit Trail Tile */}
              <div className="absolute top-56 left-0 lg:-left-12 bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/40 w-56 z-10">
                <div className="flex items-center sm:items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <History className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-black text-xs sm:text-sm mb-1">Audit Trail</div>
                    <div className="text-xs text-gray-600 hidden sm:block">Immutable logs</div>
                  </div>
                </div>
              </div>

              {/* Workflows Tile */}
              <div className="absolute top-64 right-0 lg:-right-8 bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/40 w-56 z-10">
                <div className="flex items-center sm:items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-black text-xs sm:text-sm mb-1">Workflows</div>
                    <div className="text-xs text-gray-600 hidden sm:block">Automate sequences</div>
                  </div>
                </div>
              </div>

              {/* Signed Confirmation */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-neumorphic-card-hover border border-white/50 text-center w-36 z-20">
                <div className="inline-flex items-center gap-1 mb-1 px-2 py-1 rounded-full bg-primary text-primary-foreground shadow-sm">
                  <FileSignature className="w-3 h-3 text-primary-foreground" />
                  <h3 className="text-xs font-bold">Signed</h3>
                </div>
                <img src="/signature-graphic.png" alt="E-signature" className="mx-auto h-10 my-1.5" />
                <p className="text-xs text-muted-foreground">Aug 5, 2025</p>
              </div>
            </div>
          </ScrollAnimator>
        </div>

        {/* Feature Tiles */}
        <ScrollAnimator>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {signFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-4 sm:p-6 rounded-2xl bg-white shadow-neumorphic-card transition-shadow duration-200 hover:shadow-neumorphic-card-hover"
              >
                <div className="flex items-center gap-4 mb-3 sm:flex-col sm:items-center sm:text-center">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] flex-shrink-0 sm:mb-4">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-foreground sm:mb-2">{feature.title}</div>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed text-left sm:text-center">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
