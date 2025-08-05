"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, ArrowLeft, Users, TrendingUp, Clock, Shield } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: 0,
    features: ["5GB Storage", "2 Datarooms", "10 Sign per month", "10 Squared AI Credits/month", "No Validate"],
  },
  {
    name: "Core",
    price: 100,
    features: ["1TB Storage", "Unlimited Datarooms", "Unlimited Sign", "250 Squared AI Credits/month", "No Validate"],
  },
  {
    name: "Premium",
    price: 500,
    features: [
      "5TB Storage",
      "Unlimited Datarooms",
      "Unlimited Sign",
      "500 Squared AI Credits/month",
      "Basic Validate",
    ],
  },
]

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    email: "",
    selectedPlan: "Core",
    billingCycle: "monthly" as "monthly" | "annual",
    teamSize: 5,
    teamEmails: [""],
  })

  const steps = [
    {
      title: "What's your email?",
      subtitle: "We'll use this to create your account",
    },
    {
      title: "Choose your plan",
      subtitle: "",
    },
    {
      title: "Invite your team",
      subtitle: "Add team members to start collaborating",
    },
    {
      title: "You're all set!",
      subtitle: "brokr partners with Stripe for simplified billing",
    },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const addTeamMember = () => {
    setFormData({
      ...formData,
      teamEmails: [...formData.teamEmails, ""],
    })
  }

  const updateTeamEmail = (index: number, email: string) => {
    const newEmails = [...formData.teamEmails]
    newEmails[index] = email
    setFormData({
      ...formData,
      teamEmails: newEmails,
    })
  }

  const selectedPlanData = plans.find((plan) => plan.name === formData.selectedPlan)
  const monthlyPrice = selectedPlanData?.price || 0
  const annualPricePerMonth = Math.round(monthlyPrice * 0.7)
  const totalMonthlyPrice =
    (formData.billingCycle === "annual" ? annualPricePerMonth : monthlyPrice) * formData.teamSize
  const totalAnnualPrice = annualPricePerMonth * formData.teamSize * 12
  const annualSavings = monthlyPrice * formData.teamSize * 12 - totalAnnualPrice

  const renderRightColumn = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Join thousands of dealmakers</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-neumorphic-subtle">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-gray-700 font-medium">Close deals 73% faster</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-neumorphic-subtle">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-gray-700 font-medium">Secure datarooms in seconds</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-neumorphic-subtle">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-gray-700 font-medium">AI-powered deal insights</span>
              </div>
            </div>
          </div>
        )
      case 1:
        return (
          <div className="flex flex-col justify-start h-full">
            <div className="space-y-3">
              {/* Total at the top */}
              <div className="p-3 rounded-2xl bg-white shadow-neumorphic-card border border-primary/20">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-semibold text-lg">Total</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      $
                      {formData.billingCycle === "annual"
                        ? totalAnnualPrice.toLocaleString()
                        : totalMonthlyPrice.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      per {formData.billingCycle === "annual" ? "year" : "month"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white shadow-neumorphic-card">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 font-medium">Plan</span>
                  <span className="font-semibold text-gray-900">{formData.selectedPlan}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 font-medium">Billing</span>
                  <span className="font-semibold text-gray-900 capitalize">{formData.billingCycle}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600 font-medium">Team size</span>
                  <span className="font-semibold text-gray-900">{formData.teamSize} users</span>
                </div>

                {/* Plan Features */}
                <div className="border-t border-gray-200 pt-3">
                  <div className="text-sm font-medium text-gray-900 mb-2">Included features:</div>
                  <div className="space-y-0.5">
                    {selectedPlanData?.features.map((feature, index) => (
                      <div key={index} className="text-sm text-gray-600">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {formData.billingCycle === "annual" && annualSavings > 0 && (
                <div className="p-2 rounded-xl bg-white shadow-neumorphic-subtle border border-green-200 text-center">
                  <span className="text-sm font-semibold text-green-700">
                    🎉 You're saving ${annualSavings.toLocaleString()} per year!
                  </span>
                </div>
              )}

              {/* Need Help Section */}
              <div className="p-3 rounded-xl bg-white shadow-neumorphic-subtle">
                <div className="text-center">
                  <div className="font-semibold text-gray-900 mb-1">Need help choosing?</div>
                  <div className="text-sm text-gray-600 mb-2">Speak with our team</div>
                  <button className="text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                    Book a call →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Your Team</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-neumorphic-card border border-primary/20">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">You</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{formData.email}</div>
                  <div className="text-sm text-gray-600">Admin</div>
                </div>
              </div>
              {formData.teamEmails
                .filter((email) => email)
                .slice(0, 3)
                .map((email, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-neumorphic-subtle">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <Users className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{email}</div>
                      <div className="text-sm text-gray-600">Member</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )
      case 3:
        return (
          <div className="flex flex-col justify-center h-full text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ready to start closing deals faster?</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-neumorphic-subtle">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-gray-700 font-medium">Your workspace is ready</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-neumorphic-subtle">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-gray-700 font-medium">Start creating datarooms</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-neumorphic-subtle">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-gray-700 font-medium">Secure and compliant</span>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="h-screen bg-white flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 w-full">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-primary h-1.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-12 items-center h-[400px]">
          {/* Left Column - Form */}
          <div className="space-y-4">
            {currentStep === 1 ? (
              <div className="pt-4">
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">{steps[currentStep].title}</h1>
                {steps[currentStep].subtitle && (
                  <p className="text-base text-gray-600">{steps[currentStep].subtitle}</p>
                )}
              </div>
            ) : (
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">{steps[currentStep].title}</h1>
                {steps[currentStep].subtitle && (
                  <p className="text-base text-gray-600">{steps[currentStep].subtitle}</p>
                )}
              </div>
            )}

            {/* Step Content */}
            <div className="space-y-4">
              {/* Step 0: Email */}
              {currentStep === 0 && (
                <div className="max-w-sm">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-base py-3 px-4 bg-white shadow-neumorphic-inset border-0 focus:ring-2 focus:ring-primary rounded-xl transition-all"
                  />
                </div>
              )}

              {/* Step 1: Plan Selection */}
              {currentStep === 1 && (
                <div className="space-y-3">
                  {/* Billing Toggle and Team Size Row */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex rounded-xl bg-white shadow-neumorphic-inset p-1">
                      <button
                        onClick={() => setFormData({ ...formData, billingCycle: "monthly" })}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          formData.billingCycle === "monthly"
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setFormData({ ...formData, billingCycle: "annual" })}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          formData.billingCycle === "annual"
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        Annual
                      </button>
                    </div>

                    {/* Team Size */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-900">Team size:</span>
                      <button
                        onClick={() => setFormData({ ...formData, teamSize: Math.max(1, formData.teamSize - 1) })}
                        className="w-8 h-8 rounded-full bg-white shadow-neumorphic-inset hover:shadow-neumorphic-card flex items-center justify-center transition-all text-base font-medium text-gray-700"
                      >
                        −
                      </button>
                      <div className="text-xl font-semibold text-gray-900 w-10 text-center">{formData.teamSize}</div>
                      <button
                        onClick={() => setFormData({ ...formData, teamSize: formData.teamSize + 1 })}
                        className="w-8 h-8 rounded-full bg-white shadow-neumorphic-inset hover:shadow-neumorphic-card flex items-center justify-center transition-all text-base font-medium text-gray-700"
                      >
                        +
                      </button>
                      <span className="text-gray-500 ml-1 text-sm">users</span>
                    </div>
                  </div>

                  {/* Plan Options */}
                  <div className="space-y-2">
                    {plans.map((plan) => (
                      <div
                        key={plan.name}
                        onClick={() => setFormData({ ...formData, selectedPlan: plan.name })}
                        className={`p-2.5 rounded-xl cursor-pointer transition-all duration-200 ${
                          formData.selectedPlan === plan.name
                            ? "bg-white shadow-neumorphic-card border border-primary/20"
                            : "bg-white shadow-neumorphic-subtle hover:shadow-neumorphic-card"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-gray-900">{plan.name}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-900">
                              $
                              {plan.price === 0
                                ? "0"
                                : formData.billingCycle === "annual"
                                  ? Math.round(plan.price * 0.7)
                                  : plan.price}
                            </div>
                            <div className="text-xs text-gray-500">{plan.price === 0 ? "" : "per user/month"}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="mt-6 p-4 rounded-xl bg-white shadow-neumorphic-card">
                  <h4 className="font-semibold text-gray-900 mb-3">Complete Feature Comparison</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 font-medium text-gray-900">Feature</th>
                          <th className="text-center py-2 font-medium text-gray-900">Free</th>
                          <th className="text-center py-2 font-medium text-gray-900">Core</th>
                          <th className="text-center py-2 font-medium text-gray-900">Premium</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs">
                        <tr className="border-b border-gray-100">
                          <td className="py-2 text-gray-700">Storage</td>
                          <td className="py-2 text-center text-gray-700">5GB</td>
                          <td className="py-2 text-center text-gray-700">1TB</td>
                          <td className="py-2 text-center text-gray-700">5TB</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 text-gray-700">Datarooms</td>
                          <td className="py-2 text-center text-gray-700">2</td>
                          <td className="py-2 text-center text-gray-700">Unlimited</td>
                          <td className="py-2 text-center text-gray-700">Unlimited</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 text-gray-700">People (CRM)</td>
                          <td className="py-2 text-center text-gray-700">Unlimited</td>
                          <td className="py-2 text-center text-gray-700">Unlimited</td>
                          <td className="py-2 text-center text-gray-700">Unlimited</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 text-gray-700">Sign</td>
                          <td className="py-2 text-center text-gray-700">10/month</td>
                          <td className="py-2 text-center text-gray-700">Unlimited</td>
                          <td className="py-2 text-center text-gray-700">Unlimited</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 text-gray-700">Tools Access</td>
                          <td className="py-2 text-center text-gray-700">Basic</td>
                          <td className="py-2 text-center text-gray-700">Basic</td>
                          <td className="py-2 text-center text-gray-700">Unlimited</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 text-gray-700">Squared AI Credits</td>
                          <td className="py-2 text-center text-gray-700">10/month</td>
                          <td className="py-2 text-center text-gray-700">250/month</td>
                          <td className="py-2 text-center text-gray-700">500/month</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 text-gray-700">API Access</td>
                          <td className="py-2 text-center text-red-500">✗</td>
                          <td className="py-2 text-center text-red-500">✗</td>
                          <td className="py-2 text-center text-green-500">✓</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 text-gray-700">Custom Integration</td>
                          <td className="py-2 text-center text-red-500">✗</td>
                          <td className="py-2 text-center text-red-500">✗</td>
                          <td className="py-2 text-center text-gray-700">Limited</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-700">Validate</td>
                          <td className="py-2 text-center text-red-500">✗</td>
                          <td className="py-2 text-center text-red-500">✗</td>
                          <td className="py-2 text-center text-gray-700">Basic</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Step 2: Team Invitation */}
              {currentStep === 2 && (
                <div className="space-y-4 max-w-sm">
                  {formData.teamEmails.slice(0, 3).map((email, index) => (
                    <Input
                      key={index}
                      type="email"
                      placeholder={`Team member ${index + 1} email`}
                      value={email}
                      onChange={(e) => updateTeamEmail(index, e.target.value)}
                      className="w-full py-3 px-4 bg-white shadow-neumorphic-inset border-0 focus:ring-2 focus:ring-primary rounded-xl transition-all"
                    />
                  ))}

                  <Button
                    onClick={addTeamMember}
                    variant="outline"
                    className="w-full py-3 bg-white shadow-neumorphic-subtle hover:shadow-neumorphic-card border-0 text-gray-600 hover:text-primary font-medium rounded-xl transition-all duration-200"
                  >
                    + Add another team member
                  </Button>

                  <div className="text-sm text-gray-500 mt-4">You can always invite more team members later</div>
                </div>
              )}

              {/* Step 3: Success */}
              {currentStep === 3 && (
                <div className="space-y-6 max-w-sm">
                  <div className="p-4 rounded-xl bg-white shadow-neumorphic-card">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{formData.selectedPlan} Plan</span>
                      <span className="font-semibold text-gray-900 text-lg">
                        $
                        {formData.billingCycle === "annual"
                          ? totalAnnualPrice.toLocaleString()
                          : totalMonthlyPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {formData.teamSize} users • {formData.billingCycle} billing
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-2">
              <Button
                onClick={handleBack}
                disabled={currentStep === 0}
                variant="ghost"
                className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentStep === 0 && !formData.email}
                className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentStep === steps.length - 1 ? "Get Started" : "Continue"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Graphics/Explainer */}
          <div className="h-full">{renderRightColumn()}</div>
        </div>
      </div>
    </div>
  )
}
