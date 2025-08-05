"use client"

import { ScrollAnimator } from "./scroll-animator"
import { Button } from "@/components/ui/button"
import { FileSignature, Shield, Smartphone, Zap, Send, FileText } from "lucide-react"

const signFeatures = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Legally binding with a tamper-proof audit trail.",
  },
  {
    icon: Smartphone,
    title: "Sign Anywhere",
    description: "Fully responsive for desktop, tablet, and mobile.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate reminders and track document status.",
  },
  {
    icon: Send,
    title: "Bulk Sending",
    description: "Send to multiple recipients for signature at once.",
  },
]

export function SignSection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container max-w-7xl">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Hero Text */}
          <ScrollAnimator>
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-xl p-1 text-sm font-medium text-foreground shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 mb-6">
                <span className="mr-2 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center gap-2">
                  <FileSignature className="h-4 w-4" />
                  Sign
                </span>
                <span className="pr-3">Unlimited e-signatures, built-in</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight whitespace-nowrap">
                Signatures,{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-x-[-8px] inset-y-[-4px] bg-primary/20 rounded-2xl shadow-[0_8px_32px_rgba(163,230,53,0.3)] transform blur-sm opacity-80 -z-10"></span>
                  <span className="relative z-10 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-xl shadow-[0_8px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)]">
                    simplified.
                  </span>
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                The most intuitive and reliable e-signature platform, built for speed and security. Get your documents
                signed in minutes, not days.
              </p>
            </div>
          </ScrollAnimator>

          {/* Right Column: Document Mockup */}
          <ScrollAnimator delay="delay-200" className="relative z-10">
            <div className="relative max-w-xs mx-auto w-full">
              {/* Main Document */}
              <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-6">
                <div className="relative h-full flex flex-col">
                  {/* Document Header */}
                  <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-4 flex-shrink-0">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-black">Term Sheet: Project Titan</h4>
                        <p className="text-sm text-slate-500">Waiting for your signature</p>
                      </div>
                    </div>
                  </div>

                  {/* Document Body Content */}
                  <div className="space-y-6 flex-1 text-sm text-slate-500 leading-relaxed">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="space-y-2">
                        <div className="h-2 w-1/3 bg-slate-200 rounded-full"></div>
                        <div className="h-2 w-full bg-slate-200 rounded-full"></div>
                        <div className="h-2 w-5/6 bg-slate-200 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Signature Tile */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 z-20">
                <div className="bg-white rounded-2xl p-3 pr-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-slate-200/50 flex items-center justify-between gap-4">
                  <img
                    src="/signature-graphic.png"
                    alt="Handwritten signature"
                    className="h-12 w-auto object-contain"
                  />
                  <Button className="bg-primary text-primary-foreground rounded-lg px-5 py-2.5 text-sm font-semibold shadow-[0_4px_12px_rgba(163,230,53,0.3)] hover:bg-primary/90 transition-all duration-200">
                    Sign
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>

        {/* Features Section */}
        <div className="mt-16 md:mt-24">
          <ScrollAnimator>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
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
      </div>
    </section>
  )
}
