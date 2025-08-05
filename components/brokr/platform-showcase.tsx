"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { FolderLock, Users, FileSignature, Square } from "lucide-react"

const showcaseFeatures = [
  {
    id: "datarooms",
    icon: FolderLock,
    title: "Secure Datarooms",
    description: "Bank-grade security with real-time analytics. See exactly who's viewing what and when.",
    position: { top: "20%", left: "15%" },
    arrows: [
      { type: "arrow", from: { x: 25, y: 30 }, to: { x: 45, y: 25 }, curve: "M25,30 Q35,20 45,25" },
      { type: "circle", center: { x: 50, y: 30 }, radius: 8 },
    ],
  },
  {
    id: "crm",
    icon: Users,
    title: "Smart CRM",
    description: "Auto-capture contacts and track every interaction. Your network becomes your advantage.",
    position: { top: "15%", right: "10%" },
    arrows: [
      { type: "arrow", from: { x: 75, y: 20 }, to: { x: 60, y: 35 }, curve: "M75,20 Q65,25 60,35" },
      { type: "circle", center: { x: 55, y: 40 }, radius: 6 },
    ],
  },
  {
    id: "signatures",
    icon: FileSignature,
    title: "E-Signatures",
    description: "One-click signing with bulletproof audit trails. Close deals faster than ever.",
    position: { bottom: "25%", left: "20%" },
    arrows: [
      { type: "arrow", from: { x: 30, y: 70 }, to: { x: 45, y: 60 }, curve: "M30,70 Q40,65 45,60" },
      { type: "circle", center: { x: 50, y: 55 }, radius: 7 },
    ],
  },
  {
    id: "ai",
    icon: Square,
    title: "AI Assistant",
    description: "Your 24/7 dealmaking partner. Drafts terms, analyzes deals, manages follow-ups.",
    position: { bottom: "20%", right: "15%" },
    arrows: [
      { type: "arrow", from: { x: 70, y: 75 }, to: { x: 55, y: 65 }, curve: "M70,75 Q60,70 55,65" },
      { type: "circle", center: { x: 50, y: 60 }, radius: 9 },
    ],
  },
]

export function PlatformShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView && !isInView) {
      setIsInView(true)
      // Start cycling through features
      intervalRef.current = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % showcaseFeatures.length)
      }, 3000) // Change every 3 seconds
    } else if (!inView && isInView) {
      setIsInView(false)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [inView, isInView])

  const currentFeature = showcaseFeatures[activeFeature]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">See brokr in action</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to close deals faster, all in one powerful platform
          </p>
        </div>

        <div className="relative">
          {/* Main Platform Screenshot */}
          <div className="relative mx-auto max-w-5xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
              <img
                src="/placeholder.svg?height=600&width=1000&text=brokr+Platform+Dashboard"
                alt="brokr Platform Dashboard"
                className="w-full h-auto"
              />

              {/* Animated Arrows and Circles Overlay */}
              {isInView && (
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {currentFeature.arrows.map((arrow, index) => (
                    <g key={index}>
                      {arrow.type === "arrow" && (
                        <>
                          <defs>
                            <marker
                              id={`arrowhead-${activeFeature}-${index}`}
                              markerWidth="10"
                              markerHeight="7"
                              refX="9"
                              refY="3.5"
                              orient="auto"
                            >
                              <polygon points="0 0, 10 3.5, 0 7" fill="#a3e635" className="animate-pulse" />
                            </marker>
                          </defs>
                          <path
                            d={arrow.curve}
                            stroke="#a3e635"
                            strokeWidth="3"
                            fill="none"
                            markerEnd={`url(#arrowhead-${activeFeature}-${index})`}
                            className="animate-pulse"
                            style={{
                              strokeDasharray: "10,5",
                              animation: "dash 2s linear infinite, pulse 2s ease-in-out infinite",
                            }}
                          />
                        </>
                      )}
                      {arrow.type === "circle" && (
                        <circle
                          cx={arrow.center.x}
                          cy={arrow.center.y}
                          r={arrow.radius}
                          stroke="#a3e635"
                          strokeWidth="3"
                          fill="none"
                          className="animate-pulse"
                          style={{
                            strokeDasharray: "5,3",
                            animation: "dash 1.5s linear infinite, pulse 2s ease-in-out infinite",
                          }}
                        />
                      )}
                    </g>
                  ))}
                </svg>
              )}
            </div>

            {/* Floating Feature Tiles */}
            {showcaseFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className={`absolute transition-all duration-500 ${
                  index === activeFeature ? "opacity-100 scale-100 z-20" : "opacity-60 scale-95 z-10"
                }`}
                style={{
                  top: feature.position.top,
                  left: feature.position.left,
                  right: feature.position.right,
                  bottom: feature.position.bottom,
                }}
              >
                <div
                  className={`p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border transition-all duration-500 max-w-xs ${
                    index === activeFeature
                      ? "border-primary shadow-[0_0_30px_rgba(163,230,53,0.3)] scale-105"
                      : "border-white/20"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                        index === activeFeature
                          ? "bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)]"
                          : "bg-slate-100"
                      }`}
                    >
                      <feature.icon
                        className={`h-6 w-6 transition-colors duration-300 ${
                          index === activeFeature ? "text-primary-foreground" : "text-slate-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-12 gap-3">
            {showcaseFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeFeature ? "bg-primary scale-125" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -15;
          }
        }
      `}</style>
    </section>
  )
}
