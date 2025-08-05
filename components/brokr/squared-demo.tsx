"use client"

import { ScrollAnimator } from "./scroll-animator"
import { Brain, FileText, TrendingUp, Shield, Zap } from "lucide-react"

const squaredFeatures = [
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast deal outcomes and identify key engagement signals with 95% accuracy.",
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description: "Instantly analyze, summarize, and extract key terms from complex legal and financial documents.",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Automatically flag potential risks, compliance issues, and negotiation points in your dataroom.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Draft communications, schedule follow-ups, and manage your pipeline on autopilot.",
  },
]

export function SquaredDemo() {
  return (
    <section id="squared" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container max-w-7xl">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Hero Text */}
          <ScrollAnimator>
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-xl p-1 text-sm font-medium text-foreground shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 mb-6">
                <span className="mr-2 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  Squared
                </span>
                <span className="pr-3">Your AI Deal Partner</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">
                The intelligence
                <br />
                behind every{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-x-[-8px] inset-y-[-4px] bg-primary/20 rounded-2xl shadow-[0_8px_32px_rgba(163,230,53,0.3)] transform blur-sm opacity-80 -z-10"></span>
                  <span className="relative z-10 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-xl shadow-[0_8px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)]">
                    great deal.
                  </span>
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Meet Squared, the world's first AI agent for dealmakers. It understands context, drafts documents, and
                automates workflows so you can focus on what matters most: closing.
              </p>
            </div>
          </ScrollAnimator>

          {/* Right Column: Visual Mockup */}
          <ScrollAnimator delay="delay-200" className="relative">
            <div className="relative w-full min-h-[450px] md:h-[500px] flex items-center justify-center">
              {/* Main AI Interface */}
              <div className="relative w-full max-w-md lg:max-w-lg h-auto bg-white/70 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 shadow-[0_24px_80px_rgba(0,0,0,0.1)] border border-white/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-black">Squared AI: Analyzing 'Project Titan'</p>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-white/80 rounded-xl shadow-sm">
                    <p className="text-xs text-gray-500 mb-1">User Prompt</p>
                    <p className="text-sm text-black font-medium">Summarize key risks in the term sheet.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-md">
                    <p className="text-xs text-primary font-semibold mb-2">AI Response</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        <strong className="text-black">1. Valuation:</strong> 25% above market average for SaaS.
                      </p>
                      <p>
                        <strong className="text-black">2. Liquidation Preference:</strong> 2x participating preferred is
                        aggressive.
                      </p>
                      <p>
                        <strong className="text-black">3. Exclusivity Period:</strong> 90 days is longer than the
                        standard 45-60 days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 left-0 lg:-top-8 lg:left-0 w-40 lg:w-48 p-3 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 animate-float-1">
                <p className="text-xs font-semibold text-black">Draft LOI</p>
                <p className="text-xs text-gray-500">Based on market standards</p>
              </div>
              <div className="absolute top-12 -right-4 lg:top-16 lg:-right-12 w-44 lg:w-52 p-3 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 animate-float-2">
                <p className="text-xs font-semibold text-black">Investor Engagement Score</p>
                <p className="text-xs text-gray-500">
                  Sequoia: <span className="text-primary font-bold">9.2/10</span>
                </p>
              </div>
              <div className="absolute -bottom-8 right-0 lg:-bottom-12 lg:right-0 w-40 lg:w-48 p-3 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 animate-float-3">
                <p className="text-xs font-semibold text-black">Automate Follow-up</p>
                <p className="text-xs text-gray-500">For all disengaged parties</p>
              </div>
            </div>
          </ScrollAnimator>
        </div>

        {/* Features Section */}
        <div className="mt-16 md:mt-24">
          <ScrollAnimator>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
              {squaredFeatures.map((feature) => (
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
