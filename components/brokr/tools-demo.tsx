"use client"

import { ScrollAnimator } from "./scroll-animator"
import { Wrench, FileText, CheckSquare, Send, StickyNote, BarChart3, Link } from "lucide-react"

const toolsFeatures = [
  {
    icon: StickyNote,
    title: "Dynamic Notes",
    description: "Capture insights from anywhere and link them directly to deals, contacts, or documents.",
  },
  {
    icon: CheckSquare,
    title: "Actionable Tasks",
    description: "Create and assign tasks in context, ensuring nothing falls through the cracks.",
  },
  {
    icon: BarChart3,
    title: "Instant Financials",
    description: "Generate quick models and cap tables without ever leaving your workflow.",
  },
  {
    icon: Link,
    title: "Seamless Integrations",
    description: "Connect your favorite apps to create a single, unified dealmaking environment.",
  },
]

export function ToolsDemo() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container max-w-7xl">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Hero Text */}
          <ScrollAnimator>
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-xl p-1 text-sm font-medium text-foreground shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 mb-6">
                <span className="mr-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center gap-1">
                  <Wrench className="h-3 w-3" />
                  Tools
                </span>
                <span className="pr-3">Your workflow, supercharged</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">
                Remove friction
                <br />
                from every{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-x-[-8px] inset-y-[-4px] bg-primary/20 rounded-2xl shadow-[0_8px_32px_rgba(163,230,53,0.3)] transform blur-sm opacity-80 -z-10"></span>
                  <span className="relative z-10 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-xl shadow-[0_8px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)]">
                    interaction.
                  </span>
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Dynamic notes, tasks, and messaging that connect your entire workflow. Turn any moment into momentum
                with tools that work as fast as you do.
              </p>
            </div>
          </ScrollAnimator>

          {/* Right Column: Visual Mockup */}
          <ScrollAnimator delay="delay-200" className="relative">
            <div className="relative w-full min-h-[450px] md:h-[500px] flex items-center justify-center">
              {/* Main Document View */}
              <div className="relative w-full max-w-sm lg:max-w-md bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-6">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                  <FileText className="h-5 w-5 text-black" />
                  <span className="text-sm font-medium text-black">M&A_Analysis_TechCorp.pdf</span>
                </div>
                <div className="space-y-4 text-sm text-gray-600">
                  <p>
                    <strong className="text-black">Executive Summary:</strong> TechCorp represents a compelling
                    acquisition opportunity...
                  </p>
                  <p className="bg-primary/20 rounded p-2">
                    The target company's EBITDA has grown 45% year-over-year, indicating strong operational performance.
                  </p>
                  <p>Market position is strong with 23% market share...</p>
                </div>
              </div>

              {/* Floating Action Menu */}
              <div className="absolute bottom-4 right-4 lg:top-1/2 lg:-right-12 lg:-translate-y-1/2 w-48 bg-white/80 backdrop-blur-xl rounded-2xl p-3 shadow-lg border border-white/50 space-y-2 animate-float-medium">
                <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                  <StickyNote className="h-4 w-4 text-black" />
                  <span className="text-sm font-medium text-black">Save as Note</span>
                </button>
                <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                  <CheckSquare className="h-4 w-4 text-black" />
                  <span className="text-sm font-medium text-black">Create Task</span>
                </button>
                <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                  <Send className="h-4 w-4 text-black" />
                  <span className="text-sm font-medium text-black">Send to Team</span>
                </button>
              </div>
            </div>
          </ScrollAnimator>
        </div>

        {/* Features Section */}
        <div className="mt-16 md:mt-24">
          <ScrollAnimator>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
              {toolsFeatures.map((feature) => (
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
