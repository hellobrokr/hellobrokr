"use client"

import { useState, useEffect } from "react"
import { ScrollAnimator } from "./scroll-animator"
import { Star, Award, Shield, Zap } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Partner",
    company: "Sequoia Capital",
    avatar: "/placeholder.svg?height=60&width=60&text=SC",
    video: "/placeholder.svg?height=300&width=400&text=Sarah+Video",
    quote:
      "brokr transformed how we manage our deal flow. We're closing 40% more deals and our LPs love the transparency.",
    metrics: { deals: "127", value: "$2.1B", time: "65%" },
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "TechFlow Ventures",
    avatar: "/placeholder.svg?height=60&width=60&text=MR",
    video: "/placeholder.svg?height=300&width=400&text=Marcus+Video",
    quote: "The AI insights are incredible. brokr predicted which deals would close before we even knew ourselves.",
    metrics: { deals: "89", value: "$450M", time: "58%" },
  },
  {
    id: 3,
    name: "Jennifer Park",
    role: "Managing Director",
    company: "Innovation Partners",
    avatar: "/placeholder.svg?height=60&width=60&text=JP",
    video: "/placeholder.svg?height=300&width=400&text=Jennifer+Video",
    quote: "Our due diligence process went from weeks to days. The ROI was immediate and substantial.",
    metrics: { deals: "156", value: "$890M", time: "71%" },
  },
]

const realtimeActivities = [
  "John from Andreessen Horowitz just created a dataroom",
  "Sarah from Sequoia uploaded 47 documents",
  "Marcus from Kleiner Perkins signed a term sheet",
  "Jennifer from Benchmark invited 12 investors",
  "David from Accel completed due diligence",
  "Lisa from GV closed a $50M Series B",
]

const pressLogos = [
  { name: "TechCrunch", logo: "/placeholder.svg?height=40&width=120&text=TechCrunch" },
  { name: "Forbes", logo: "/placeholder.svg?height=40&width=120&text=Forbes" },
  { name: "WSJ", logo: "/placeholder.svg?height=40&width=120&text=WSJ" },
  { name: "Bloomberg", logo: "/placeholder.svg?height=40&width=120&text=Bloomberg" },
]

const certifications = [
  { name: "SOC 2", icon: Shield },
  { name: "GDPR", icon: Shield },
  { name: "ISO 27001", icon: Award },
  { name: "Enterprise", icon: Zap },
]

export function SocialProofAdvanced() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [currentActivity, setCurrentActivity] = useState(0)
  const [signupCount, setSignupCount] = useState(1247)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % realtimeActivities.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSignupCount((prev) => prev + Math.floor(Math.random() * 3) + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl">
        {/* Press Mentions */}
        <ScrollAnimator>
          <div className="text-center mb-16">
            <p className="text-sm text-muted-foreground mb-6">Featured in</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              {pressLogos.map((press) => (
                <img
                  key={press.name}
                  src={press.logo || "/placeholder.svg"}
                  alt={press.name}
                  className="h-8 grayscale hover:grayscale-0 transition-all duration-200"
                />
              ))}
            </div>
          </div>
        </ScrollAnimator>

        {/* Video Testimonials */}
        <ScrollAnimator>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Trusted by the world's top dealmakers
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`rounded-2xl bg-white p-6 shadow-neumorphic-card transition-all duration-300 cursor-pointer ${
                    index === activeTestimonial ? "ring-2 ring-primary shadow-neumorphic-card-hover" : ""
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  {/* Video Thumbnail */}
                  <div className="relative mb-4 rounded-xl overflow-hidden">
                    <img
                      src={testimonial.video || "/placeholder.svg"}
                      alt={`${testimonial.name} testimonial`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <svg className="w-5 h-5 text-slate-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">{testimonial.metrics.deals}</div>
                      <div className="text-xs text-muted-foreground">Deals</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">{testimonial.metrics.value}</div>
                      <div className="text-xs text-muted-foreground">Value</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">{testimonial.metrics.time}%</div>
                      <div className="text-xs text-muted-foreground">Faster</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimator>

        {/* Real-time Activity & Trust Signals */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Live Activity Feed */}
          <ScrollAnimator>
            <div className="rounded-2xl bg-white p-6 shadow-neumorphic-card">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Live Activity
              </h3>
              <div className="space-y-3">
                {realtimeActivities.slice(currentActivity, currentActivity + 3).map((activity, index) => (
                  <div
                    key={index}
                    className={`text-sm text-muted-foreground transition-all duration-500 ${
                      index === 0 ? "opacity-100 font-medium" : "opacity-60"
                    }`}
                  >
                    {activity}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="text-sm font-semibold text-primary">
                  {signupCount.toLocaleString()} people joined this week
                </div>
              </div>
            </div>
          </ScrollAnimator>

          {/* Trust Badges */}
          <ScrollAnimator>
            <div className="rounded-2xl bg-white p-6 shadow-neumorphic-card">
              <h3 className="font-semibold text-foreground mb-4">Enterprise Security & Compliance</h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <cert.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{cert.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9/5 from 500+ reviews</span>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  )
}
