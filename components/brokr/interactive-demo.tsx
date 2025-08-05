"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollAnimator } from "./scroll-animator"
import { FolderPlus, Users, FileSignature, BarChart3, ArrowRight, CheckCircle } from "lucide-react"

const demoSteps = [
  {
    id: "create",
    title: "Create Dataroom",
    description: "Set up a secure dataroom in seconds",
    icon: FolderPlus,
    action: "Create Dataroom",
    result: "✅ Dataroom 'Series B - TechCorp' created",
  },
  {
    id: "invite",
    title: "Invite Investors",
    description: "Add investors and set permissions",
    icon: Users,
    action: "Invite Investors",
    result: "✅ 12 investors invited with view permissions",
  },
  {
    id: "track",
    title: "Track Engagement",
    description: "See who's viewing what in real-time",
    icon: BarChart3,
    action: "View Analytics",
    result: "✅ 8 investors active, 47 documents viewed",
  },
  {
    id: "sign",
    title: "Get Signatures",
    description: "Send documents for e-signature",
    icon: FileSignature,
    action: "Send for Signature",
    result: "✅ Term sheet signed by 3 lead investors",
  },
]

export function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const handleStepAction = (stepIndex: number) => {
    setIsRunning(true)
    setTimeout(() => {
      setCompletedSteps([...completedSteps, stepIndex])
      setIsRunning(false)
      if (stepIndex < demoSteps.length - 1) {
        setCurrentStep(stepIndex + 1)
      }
    }, 1500)
  }

  const resetDemo = () => {
    setCurrentStep(0)
    setCompletedSteps([])
    setIsRunning(false)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl">
        <ScrollAnimator>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Try brokr Interactive Demo</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of brokr firsthand. Click through a real deal workflow.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Demo Interface */}
          <ScrollAnimator>
            <div className="rounded-2xl bg-white p-8 shadow-neumorphic-card">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm text-muted-foreground">brokr.com/demo</span>
                </div>
                <div className="h-px bg-slate-200"></div>
              </div>

              {/* Demo Content */}
              <div className="space-y-6">
                {demoSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      index === currentStep
                        ? "border-primary bg-primary/5"
                        : completedSteps.includes(index)
                          ? "border-green-500 bg-green-50"
                          : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                          completedSteps.includes(index)
                            ? "bg-green-500 text-white"
                            : index === currentStep
                              ? "bg-primary text-primary-foreground"
                              : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {completedSteps.includes(index) ? (
                          <CheckCircle className="h-6 w-6" />
                        ) : (
                          <step.icon className="h-6 w-6" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      {index === currentStep && !completedSteps.includes(index) && (
                        <Button
                          onClick={() => handleStepAction(index)}
                          disabled={isRunning}
                          className="bg-primary text-primary-foreground rounded-lg px-4 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] hover:bg-primary-hover transition-all duration-200"
                        >
                          {isRunning ? "Processing..." : step.action}
                        </Button>
                      )}
                    </div>
                    {completedSteps.includes(index) && (
                      <div className="mt-3 ml-16 text-sm text-green-600 font-medium">{step.result}</div>
                    )}
                  </div>
                ))}
              </div>

              {completedSteps.length === demoSteps.length && (
                <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200">
                  <div className="text-center">
                    <h3 className="font-semibold text-green-800 mb-2">🎉 Demo Complete!</h3>
                    <p className="text-sm text-green-600 mb-4">You've successfully completed a full deal workflow.</p>
                    <div className="flex gap-3 justify-center">
                      <Button onClick={resetDemo} variant="outline" size="sm">
                        Try Again
                      </Button>
                      <Button size="sm" className="bg-primary text-primary-foreground">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollAnimator>

          {/* Demo Benefits */}
          <ScrollAnimator delay="delay-200">
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-neumorphic-card">
                <h3 className="font-semibold text-foreground mb-4">What you just experienced:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">10x faster setup</strong> - Create datarooms in seconds, not
                      hours
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Real-time insights</strong> - Know exactly who's engaged
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Seamless signatures</strong> - Close deals without friction
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Complete workflow</strong> - Everything in one platform
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-neumorphic-card border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Ready to transform your deals?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Join 500+ dealmakers who've already accelerated their workflow with brokr.
                </p>
                <Button className="w-full bg-primary text-primary-foreground rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] hover:bg-primary-hover transition-all duration-200">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  )
}
