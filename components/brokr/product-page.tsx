"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ScrollAnimator } from "./scroll-animator"
import {
  FolderLock,
  Users,
  FileSignature,
  Wrench,
  Square,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Globe,
} from "lucide-react"

const productFeatures = [
  {
    id: "datarooms",
    icon: FolderLock,
    name: "Datarooms",
    tagline: "The most secure dataroom you've ever seen",
    description:
      "Bank-grade security meets intuitive design. Create secure datarooms in seconds, control access with precision, and track engagement in real-time.",
    features: [
      "Secure document sharing with granular permissions",
      "Real-time analytics and engagement tracking",
      "Built-in Q&A management system",
      "Automated NDA workflows",
      "Unlimited storage and bandwidth",
    ],
    mockup: "/placeholder.svg?height=400&width=600&text=Datarooms+Interface",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "people",
    icon: Users,
    name: "People",
    tagline: "The future of CRM for dealmakers",
    description:
      "Intelligent relationship management that captures every interaction, scores every lead, and predicts your next move.",
    features: [
      "Auto-capture contacts from every interaction",
      "AI-powered lead scoring and prioritization",
      "Visual deal pipeline management",
      "Automated follow-up reminders",
      "Team collaboration and sharing",
    ],
    mockup: "/placeholder.svg?height=400&width=600&text=CRM+Dashboard",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "sign",
    icon: FileSignature,
    name: "Sign",
    tagline: "Signatures made simple",
    description:
      "Unlimited e-signatures with enterprise-grade security. One-click signing with bulletproof audit trails.",
    features: [
      "Unlimited signatures with no per-document fees",
      "Advanced workflow automation",
      "Legally binding with full audit trails",
      "Mobile-optimized signing experience",
      "Integration with all major document types",
    ],
    mockup: "/placeholder.svg?height=400&width=600&text=E-Signature+Flow",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "tools",
    icon: Wrench,
    name: "Tools",
    tagline: "Workflow automation at its finest",
    description:
      "Turn any moment into momentum with instant task creation, financial modeling, and seamless integrations.",
    features: [
      "One-click task and note creation",
      "Built-in financial modeling tools",
      "API integrations with popular platforms",
      "Automated workflow triggers",
      "Custom reporting and analytics",
    ],
    mockup: "/placeholder.svg?height=400&width=600&text=Tools+Dashboard",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "squared",
    icon: Square,
    name: "Squared",
    tagline: "Your AI dealmaking partner",
    description:
      "Meet your 24/7 AI assistant that drafts documents, analyzes deals, and manages follow-ups like a top-tier associate.",
    features: [
      "Document drafting and analysis",
      "Deal intelligence and insights",
      "Automated follow-up management",
      "Natural language query interface",
      "Continuous learning from your deals",
    ],
    mockup: "/placeholder.svg?height=400&width=600&text=AI+Assistant+Chat",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "validate",
    icon: CheckCircle,
    name: "Validate",
    tagline: "Due diligence at light speed",
    description:
      "AI-powered due diligence that turns weeks of work into hours. Automated analysis, instant red flags, seamless collaboration.",
    features: [
      "Automated document analysis",
      "Real-time risk assessment",
      "Collaborative review workflows",
      "Instant compliance checking",
      "Comprehensive audit trails",
    ],
    mockup: "/placeholder.svg?height=400&width=600&text=Due+Diligence+Analysis",
    color: "from-teal-500 to-blue-500",
  },
]

const techSpecs = [
  {
    category: "Security",
    icon: Shield,
    specs: [
      "SOC 2 Type II Certified",
      "256-bit AES encryption",
      "Multi-factor authentication",
      "GDPR & CCPA compliant",
      "99.9% uptime SLA",
    ],
  },
  {
    category: "Performance",
    icon: Zap,
    specs: [
      "Sub-second load times",
      "Real-time collaboration",
      "Unlimited file storage",
      "Global CDN delivery",
      "Auto-scaling infrastructure",
    ],
  },
  {
    category: "Integration",
    icon: Globe,
    specs: [
      "REST API access",
      "Webhook support",
      "SSO integration",
      "Custom white-labeling",
      "Third-party app ecosystem",
    ],
  },
]

export function ProductPage() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % productFeatures.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const activeFeatureName = productFeatures[activeFeature].name

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-lime-50/30 -z-10"></div>

        <div className="container max-w-6xl relative z-10">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md px-6 py-3 text-sm font-medium text-foreground shadow-neumorphic-subtle mb-8">
                <Sparkles className="h-4 w-4 text-primary" />
                Introducing brokr v3
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
                The Complete
                <br />
                <span className="relative inline-block">
                  <span className="absolute inset-x-[-12px] inset-y-[-8px] bg-primary/20 rounded-3xl transform blur-lg opacity-80 -z-10"></span>
                  <span className="relative z-10 text-primary">Transaction</span>
                </span>
                <br />
                Platform
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                Six powerful tools working as one. Secure datarooms, intelligent CRM, unlimited e-signatures, workflow
                automation, AI assistance, and lightning-fast due diligence.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground rounded-xl px-8 py-4 text-lg shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] hover:bg-primary-hover transition-all duration-200"
                  onClick={() => window.open("https://www.brokr.app", "_blank")}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/80 backdrop-blur-md border-slate-200 rounded-xl px-8 py-4 text-lg shadow-neumorphic-subtle hover:shadow-neumorphic-card transition-all duration-200"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </ScrollAnimator>

          {/* Hero Product Showcase */}
          <ScrollAnimator delay="delay-200">
            <div className="relative max-w-5xl mx-auto">
              <div className="rounded-3xl bg-white/60 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/20">
                <img
                  src="/placeholder.svg?height=600&width=1000&text=brokr+Platform+Overview"
                  alt="brokr Platform Overview"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Interactive Feature Showcase */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container max-w-7xl">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Six Tools.
                <br />
                <span className="text-primary">One Platform.</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to close deals faster, all working together seamlessly.
              </p>
            </div>
          </ScrollAnimator>

          {/* Feature Navigation */}
          <ScrollAnimator delay="delay-200">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
              {productFeatures.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => {
                    setActiveFeature(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`p-6 rounded-2xl text-center transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-white shadow-neumorphic-card scale-105 border-2 border-primary/20"
                      : "bg-white/80 backdrop-blur-md shadow-neumorphic-subtle hover:shadow-neumorphic-card hover:scale-102"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl mx-auto mb-3 transition-all duration-300 ${
                      activeFeature === index ? "bg-primary shadow-[0_4px_12px_rgba(163,230,53,0.25)]" : "bg-slate-100"
                    }`}
                  >
                    <feature.icon
                      className={`h-6 w-6 transition-colors duration-300 ${
                        activeFeature === index ? "text-primary-foreground" : "text-slate-600"
                      }`}
                    />
                  </div>
                  <div className="font-semibold text-foreground text-sm">{feature.name}</div>
                </button>
              ))}
            </div>
          </ScrollAnimator>

          {/* Active Feature Display */}
          <ScrollAnimator delay="delay-400">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Feature Content */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
                    {(() => {
                      const ActiveFeatureIcon = productFeatures[activeFeature].icon
                      return ActiveFeatureIcon ? <ActiveFeatureIcon className="h-4 w-4" /> : null
                    })()}
                    {activeFeatureName}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {productFeatures[activeFeature].tagline}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {productFeatures[activeFeature].description}
                  </p>
                </div>

                <div className="space-y-4">
                  {productFeatures[activeFeature].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="bg-primary text-primary-foreground rounded-xl px-6 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] hover:bg-primary-hover transition-all duration-200"
                  onClick={() => window.open("https://www.brokr.app", "_blank")}
                >
                  Try {activeFeatureName}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Feature Mockup */}
              <div className="relative">
                <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/20">
                  <img
                    src={productFeatures[activeFeature].mockup || "/placeholder.svg"}
                    alt={`${productFeatures[activeFeature].name} Interface`}
                    className="w-full h-auto rounded-2xl shadow-lg transition-all duration-500"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-lime-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-6xl">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Built for
                <span className="text-primary"> Enterprise</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade security, performance, and reliability that scales with your business.
              </p>
            </div>
          </ScrollAnimator>

          <div className="grid gap-8 md:grid-cols-3">
            {techSpecs.map((spec, index) => (
              <ScrollAnimator key={spec.category} delay={`delay-${index * 200}`}>
                <div className="rounded-3xl bg-white p-8 shadow-neumorphic-card border border-slate-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)]">
                      <spec.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{spec.category}</h3>
                  </div>

                  <div className="space-y-3">
                    {spec.specs.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container max-w-4xl">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Simple,
                <span className="text-primary"> Transparent</span> Pricing
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                All features included. No hidden fees. Cancel anytime.
              </p>
            </div>
          </ScrollAnimator>

          <ScrollAnimator delay="delay-200">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Free Tier */}
              <div className="rounded-3xl bg-white/80 backdrop-blur-md p-8 shadow-neumorphic-card border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Free</h3>
                  <div className="text-4xl font-bold text-foreground mb-1">$0</div>
                  <div className="text-sm text-muted-foreground">Forever</div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">5GB Storage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">2 Datarooms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">10 Signatures/month</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-slate-100 text-slate-700 rounded-xl py-3 shadow-neumorphic-subtle hover:shadow-neumorphic-card transition-all duration-200"
                  onClick={() => window.open("https://www.brokr.app", "_blank")}
                >
                  Get Started
                </Button>
              </div>

              {/* Core Tier */}
              <div className="rounded-3xl bg-white p-8 shadow-neumorphic-card border-2 border-primary/20 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Core</h3>
                  <div className="text-4xl font-bold text-foreground mb-1">$100</div>
                  <div className="text-sm text-muted-foreground">per user/month</div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">1TB Storage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">Unlimited Datarooms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">Unlimited Signatures</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-primary text-primary-foreground rounded-xl py-3 shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] hover:bg-primary-hover transition-all duration-200"
                  onClick={() => window.open("https://www.brokr.app", "_blank")}
                >
                  Start Free Trial
                </Button>
              </div>

              {/* Premium Tier */}
              <div className="rounded-3xl bg-white/80 backdrop-blur-md p-8 shadow-neumorphic-card border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Premium</h3>
                  <div className="text-4xl font-bold text-foreground mb-1">$500</div>
                  <div className="text-sm text-muted-foreground">per user/month</div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">5TB Storage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">Everything in Core</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">Validate Access</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-slate-100 text-slate-700 rounded-xl py-3 shadow-neumorphic-subtle hover:shadow-neumorphic-card transition-all duration-200"
                  onClick={() => window.open("https://www.brokr.app", "_blank")}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-4xl">
          <ScrollAnimator>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to revolutionize
                <br />
                your <span className="text-primary">dealmaking</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join thousands of professionals who've already transformed their workflow with brokr.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground rounded-xl px-8 py-4 text-lg shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] hover:bg-primary-hover transition-all duration-200"
                  onClick={() => window.open("https://www.brokr.app", "_blank")}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border-slate-200 rounded-xl px-8 py-4 text-lg shadow-neumorphic-subtle hover:shadow-neumorphic-card transition-all duration-200"
                >
                  Schedule Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </div>
  )
}
