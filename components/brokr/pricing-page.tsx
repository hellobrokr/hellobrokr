"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollAnimator } from "./scroll-animator"
import { Check, X, Star, Zap, Crown, Building } from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"
import { NotificationPill } from "./notification-pill"

const pricingTiers = [
  {
    name: "Free",
    price: 0,
    annualPrice: 0,
    icon: Star,
    features: {
      Storage: "5GB",
      Datarooms: "2",
      Sign: "10 per month",
      "Squared AI Credits": "10/month",
      Validate: false,
    },
    cta: "Free Forever",
    popular: false,
  },
  {
    name: "Core",
    price: 100,
    annualPrice: 70,
    icon: Zap,
    features: {
      Storage: "1TB",
      Datarooms: "Unlimited",
      Sign: "Unlimited",
      "Squared AI Credits": "250/month",
      Validate: false,
    },
    cta: "Join the waitlist",
    popular: false,
  },
  {
    name: "Premium",
    price: 500,
    annualPrice: 350,
    icon: Crown,
    features: {
      Storage: "5TB",
      Datarooms: "Unlimited",
      Sign: "Unlimited",
      "Squared AI Credits": "500/month",
      Validate: "Basic",
    },
    cta: "Join the waitlist",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 2000,
    annualPrice: 1400,
    icon: Building,
    features: {
      Storage: "Unlimited",
      Datarooms: "Unlimited",
      Sign: "Unlimited",
      "Squared AI Credits": "Unlimited",
      Validate: "Full",
    },
    cta: "Join the waitlist",
    popular: false,
  },
]

const allFeatures = [
  "Storage",
  "Datarooms",
  "People (CRM)",
  "Sign",
  "Tools Access",
  "Squared AI Credits",
  "API Access",
  "Custom Integration",
  "Validate",
]

const comprehensiveFeatures = {
  Free: {
    Storage: "5GB",
    Datarooms: "2",
    "People (CRM)": "Unlimited",
    Sign: "10 per month",
    "Tools Access": "Basic",
    "Squared AI Credits": "10/month",
    "API Access": false,
    "Custom Integration": false,
    Validate: false,
  },
  Core: {
    Storage: "1TB",
    Datarooms: "Unlimited",
    "People (CRM)": "Unlimited",
    Sign: "Unlimited",
    "Tools Access": "Basic",
    "Squared AI Credits": "250/month",
    "API Access": false,
    "Custom Integration": false,
    Validate: false,
  },
  Premium: {
    Storage: "5TB",
    Datarooms: "Unlimited",
    "People (CRM)": "Unlimited",
    Sign: "Unlimited",
    "Tools Access": "Unlimited",
    "Squared AI Credits": "500/month",
    "API Access": "Full",
    "Custom Integration": "Limited",
    Validate: "Basic",
  },
  Enterprise: {
    Storage: "Unlimited",
    Datarooms: "Unlimited",
    "People (CRM)": "Unlimited",
    Sign: "Unlimited",
    "Tools Access": "Unlimited",
    "Squared AI Credits": "Unlimited",
    "API Access": "Custom",
    "Custom Integration": "Enhanced",
    Validate: "Full",
  },
}

const competitors = [
  {
    name: "Traditional Methods",
    features: {
      "Secure Datarooms": false,
      "Real-time Analytics": false,
      "AI-Powered Insights": false,
      "E-Signatures": false,
      "CRM Integration": false,
      "Mobile Access": false,
      "24/7 Support": false,
      "Compliance Ready": false,
    },
    price: "Free",
    setup: "Weeks",
    security: "Basic",
  },
  {
    name: "Generic Tools",
    features: {
      "Secure Datarooms": true,
      "Real-time Analytics": false,
      "AI-Powered Insights": false,
      "E-Signatures": true,
      "CRM Integration": false,
      "Mobile Access": true,
      "24/7 Support": false,
      "Compliance Ready": true,
    },
    price: "$150/mo",
    setup: "Days",
    security: "Standard",
  },
  {
    name: "brokr",
    features: {
      "Secure Datarooms": true,
      "Real-time Analytics": true,
      "AI-Powered Insights": true,
      "E-Signatures": true,
      "CRM Integration": true,
      "Mobile Access": true,
      "24/7 Support": true,
      "Compliance Ready": true,
    },
    price: "$99/mo",
    setup: "Minutes",
    security: "Enterprise",
    highlighted: true,
  },
]

const features = [
  "Secure Datarooms",
  "Real-time Analytics",
  "AI-Powered Insights",
  "E-Signatures",
  "CRM Integration",
  "Mobile Access",
  "24/7 Support",
  "Compliance Ready",
]

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  const [showWaitlistModal, setShowWaitlistModal] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const handleWaitlistSuccess = () => {
    setShowWaitlistModal(false)
    setShowNotification(true)
  }

  const handleOpenModal = () => {
    setShowWaitlistModal(true)
  }

  const getFeatureValue = (feature: any) => {
    if (typeof feature === "boolean") {
      return feature
    }
    return feature
  }

  const renderFeatureValue = (value: any) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-500 mx-auto" />
      )
    }
    return <span className="text-sm font-medium text-foreground">{value}</span>
  }

  return (
    <>
      <section id="pricing" className="py-24 md:py-32 bg-white">
        <div className="container max-w-7xl">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Pricing</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Choose the perfect plan for your dealmaking needs. All plans include our core features with no hidden
                fees.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex rounded-xl bg-white p-1 shadow-neumorphic-subtle">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`rounded-lg px-6 py-2 text-sm font-medium transition-all duration-200 ${
                    billingCycle === "monthly"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("annual")}
                  className={`rounded-lg px-6 py-2 text-sm font-medium transition-all duration-200 ${
                    billingCycle === "annual"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Annual
                </button>
              </div>
            </div>
          </ScrollAnimator>

          {/* Pricing Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16 items-stretch">
            {pricingTiers.map((tier, index) => (
              <ScrollAnimator key={tier.name} delay={`delay-${index * 100}`}>
                <div
                  className={`relative rounded-3xl p-6 transition-all duration-200 flex flex-col h-full ${
                    tier.name === "Enterprise"
                      ? "bg-black text-white border border-gray-800"
                      : "bg-white text-slate-900 border border-slate-200"
                  } shadow-neumorphic-card`}
                >
                  {/* Badges */}
                  {billingCycle === "annual" && tier.price > tier.annualPrice && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="bg-primary text-slate-900 px-4 py-1 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
                        Save ${((tier.price - tier.annualPrice) * 12).toLocaleString()}
                      </div>
                    </div>
                  )}

                  {/* Price Section */}
                  <div className="h-40 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3
                        className={`text-2xl font-bold ${tier.name === "Enterprise" ? "text-white" : "text-slate-900"}`}
                      >
                        {tier.name}
                      </h3>
                      {tier.popular && (
                        <div className="bg-primary text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </div>
                      )}
                    </div>

                    <div className="mb-2">
                      <div className="flex items-baseline mb-1">
                        <span
                          className={`text-4xl sm:text-5xl font-bold ${
                            tier.name === "Enterprise" ? "text-white" : "text-slate-900"
                          }`}
                        >
                          $
                          {tier.price === 0
                            ? "0"
                            : (billingCycle === "annual" ? tier.annualPrice : tier.price).toLocaleString()}
                        </span>
                      </div>
                      <p className={`text-sm ${tier.name === "Enterprise" ? "text-gray-400" : "text-slate-600"}`}>
                        {tier.price === 0 ? "" : "per user per month"}
                      </p>
                      <p className={`text-xs h-4 ${tier.name === "Enterprise" ? "text-gray-500" : "text-slate-500"}`}>
                        {billingCycle === "annual" && tier.price > 0
                          ? `Billed as $${(tier.annualPrice * 12).toLocaleString()} yearly`
                          : ""}
                      </p>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="flex-1 mb-1">
                    {Object.entries(tier.features).map(([feature, value]) => (
                      <div key={feature} className="flex items-center justify-between mb-3">
                        <span className={`text-sm ${tier.name === "Enterprise" ? "text-gray-300" : "text-slate-700"}`}>
                          {feature}
                        </span>
                        <div className="flex items-center">
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <X
                                className={`h-4 w-4 ${tier.name === "Enterprise" ? "text-gray-600" : "text-slate-400"}`}
                              />
                            )
                          ) : (
                            <span
                              className={`text-sm font-medium ${
                                tier.name === "Enterprise" ? "text-white" : "text-slate-900"
                              }`}
                            >
                              {value}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button Section */}
                  <div className="mt-auto pt-4">
                    {tier.name === "Free" ? (
                      <div className="h-[42px]" />
                    ) : (
                      <Button
                        onClick={handleOpenModal}
                        className="w-full bg-primary text-primary-foreground rounded-xl px-6 py-3 text-sm font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] hover:bg-primary-hover hover:shadow-[0_6px_16px_rgba(0,0,0,0.18),_inset_0_1px_2px_rgba(255,255,255,0.65),_inset_0_-1px_1px_rgba(0,0,0,0.12)] transition-all duration-200 ease-in-out"
                      >
                        {tier.cta}
                      </Button>
                    )}
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <ScrollAnimator>
            <div className="rounded-2xl bg-white p-6 shadow-neumorphic-card mb-16">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-3 font-semibold text-foreground text-sm">Features</th>
                      {pricingTiers.map((tier) => (
                        <th key={tier.name} className="text-center py-3 px-3">
                          <div className="font-semibold text-foreground text-sm">{tier.name}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {allFeatures.map((feature, index) => (
                      <tr key={feature} className="">
                        <td className="py-3 px-3 font-medium text-foreground text-sm">{feature}</td>
                        {pricingTiers.map((tier) => (
                          <td key={`${tier.name}-${feature}`} className="py-3 px-3 text-center">
                            {renderFeatureValue(
                              comprehensiveFeatures[tier.name as keyof typeof comprehensiveFeatures][
                                feature as keyof typeof comprehensiveFeatures.Free
                              ],
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollAnimator>

          {/* FAQ Section */}
          <ScrollAnimator>
            <div className="mt-24 text-center">
              <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                <div className="rounded-xl bg-white p-6 shadow-neumorphic-subtle text-left">
                  <h4 className="font-semibold text-foreground mb-2">Can I change plans anytime?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing
                    adjusts accordingly.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-neumorphic-subtle text-left">
                  <h4 className="font-semibold text-foreground mb-2">Is there a free trial?</h4>
                  <p className="text-sm text-muted-foreground">
                    You can trial the Core version for 14 days with no credit card required. After trial, opt in or
                    automatically downgrade to Free.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-neumorphic-subtle text-left">
                  <h4 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h4>
                  <p className="text-sm text-muted-foreground">
                    brokr partners with Stripe for simplified billing and accepts all major credit cards, PayPal, and
                    bank transfers.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-neumorphic-subtle text-left">
                  <h4 className="font-semibold text-foreground mb-2">What are Squared Credits?</h4>
                  <p className="text-sm text-muted-foreground">
                    Squared Credits power your AI assistant for document analysis, contract drafting, and automated
                    insights. Credits refresh monthly.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>
      <WaitlistModal
        isOpen={showWaitlistModal}
        onClose={() => setShowWaitlistModal(false)}
        onSuccess={handleWaitlistSuccess}
      />
      <NotificationPill isVisible={showNotification} onClose={() => setShowNotification(false)} />
    </>
  )
}
