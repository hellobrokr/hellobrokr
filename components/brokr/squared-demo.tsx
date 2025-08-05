"use client"

import { useState } from "react"
import { ScrollAnimator } from "./scroll-animator"
import { Square, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

const aiPrompts = [
  "Summarize the key risks in the pitch deck.",
  "Draft a term sheet based on our standard template.",
  "What is the current valuation of similar companies?",
  "Analyze the Q3 financials and highlight anomalies.",
]

export function SquaredDemo() {
  const [currentPrompt, setCurrentPrompt] = useState("Summarize the key risks in the pitch deck.")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handlePromptClick = (prompt: string) => {
    setCurrentPrompt(prompt)
    setIsLoading(true)
    setResponse("") // Clear previous response

    setTimeout(() => {
      // Simulate AI response
      let simulatedResponse = ""
      if (prompt.includes("risks")) {
        simulatedResponse =
          "Key risks identified: 1) Market competition from established players. 2) Dependency on a single supplier for core components. 3) Regulatory hurdles in the European market."
      } else if (prompt.includes("term sheet")) {
        simulatedResponse =
          "Term sheet draft generated. Key terms include a $10M pre-money valuation, 20% option pool, and standard investor rights. Please review in the documents tab."
      } else if (prompt.includes("valuation")) {
        simulatedResponse =
          "Based on recent transactions, similar companies are valued at a 12-15x revenue multiple. The average valuation is approximately $120M."
      } else {
        simulatedResponse =
          "Anomaly detected in Q3 financials: a 35% increase in R&D spending compared to Q2, which is significantly above the projected 10%."
      }
      setResponse(simulatedResponse)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <section id="squared" className="py-24 md:py-32 bg-white">
      <div className="container max-w-7xl">
        {/* Hero Content */}
        <div className="text-center mb-16 md:mb-24">
          <ScrollAnimator>
            <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-xl p-1 text-sm font-medium text-foreground shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 mb-6">
              <span className="mr-2 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center gap-2">
                <Square className="h-4 w-4" />
                Squared
              </span>
              <span className="pr-3">Your AI dealmaking partner</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black">
              An AI that works
              <br />
              as hard as you do.
            </h2>
            <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
              Squared is your 24/7 analyst that never sleeps. It drafts documents, analyzes data, and surfaces insights
              so you can focus on what matters: closing the deal.
            </p>
          </ScrollAnimator>
        </div>

        {/* Interactive Demo */}
        <ScrollAnimator>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white p-4 sm:p-6 shadow-neumorphic-card-hover border border-slate-100">
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 min-h-[300px] flex flex-col">
                <div className="flex-1 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bot className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="bg-white rounded-xl p-3 text-sm text-foreground shadow-sm">{currentPrompt}</div>
                  </div>
                  {isLoading && (
                    <div className="flex items-start gap-3 mt-4">
                      <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse"></div>
                      <div className="bg-white rounded-xl p-3 text-sm text-foreground shadow-sm w-full">
                        <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse"></div>
                        <div className="h-4 bg-slate-200 rounded w-1/2 mt-2 animate-pulse"></div>
                      </div>
                    </div>
                  )}
                  {response && (
                    <div className="flex items-start gap-3 mt-4">
                      <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Bot className="h-5 w-5 text-slate-600" />
                      </div>
                      <div className="bg-white rounded-xl p-3 text-sm text-foreground shadow-sm">{response}</div>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                  {aiPrompts.map((prompt) => (
                    <Button
                      key={prompt}
                      variant="outline"
                      size="sm"
                      className="bg-white/80 hover:bg-white text-xs sm:text-sm h-auto py-2 text-left justify-start shadow-neumorphic-subtle"
                      onClick={() => handlePromptClick(prompt)}
                    >
                      {prompt}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
