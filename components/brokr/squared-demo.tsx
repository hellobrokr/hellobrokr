"use client"
import { ScrollAnimator } from "./scroll-animator"
import { Square, FileText, Send, CheckSquare, PenSquare, Paperclip, Globe, Mic } from "lucide-react"

export function SquaredDemo() {
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
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-6">
              {/* User Message 1 - Right Aligned */}
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-none p-4 text-sm shadow-md max-w-[85%] sm:max-w-md">
                  create new dataroom called StellarCorp LLC and invite the same users that are in{" "}
                  <strong className="font-semibold">@SparkHoldings</strong>
                </div>
              </div>

              {/* AI Response 1 - Left Aligned */}
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-none p-4 text-sm text-foreground shadow-md border border-slate-100 max-w-[85%] sm:max-w-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Square className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        New dataroom created.
                        <span className="block sm:inline sm:ml-2 font-normal text-muted-foreground">
                          27 users have been invited.
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">StellarCorp LLC has been created using your default settings.</p>
                </div>
              </div>

              {/* User Message 2 - Right Aligned */}
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-none p-4 text-sm shadow-md max-w-[85%] sm:max-w-md">
                  send <strong className="font-semibold">@JohnRichards</strong> a summary of{" "}
                  <strong className="font-semibold">@StellarCorpLLC</strong> and invite him to the dataroom also.
                </div>
              </div>

              {/* AI Response 2 - Left Aligned */}
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-none p-4 text-sm text-foreground shadow-md border border-slate-100 max-w-[85%] sm:max-w-xl">
                  <p className="mb-3 text-muted-foreground">
                    Here is the summary for John Richards. Let me know if you want to make changes or to send it.
                  </p>
                  <div className="border border-slate-200 rounded-xl p-3 bg-slate-50/50">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <p className="font-semibold text-foreground">StellarCorp LLC - Summary</p>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      StellarCorp LLC is a leading provider of next-generation satellite communication solutions,
                      specializing in low-latency, high-bandwidth data transmission for enterprise clients...
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="mt-8 bg-white rounded-2xl p-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-2 border border-slate-100">
                <button className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-md transition-transform hover:scale-105">
                  <Send className="h-4 w-4 text-primary-foreground -ml-0.5" />
                </button>
                <button className="hidden sm:block p-2 text-gray-500 hover:text-black transition-colors">
                  <CheckSquare className="h-5 w-5" />
                </button>
                <button className="hidden sm:block p-2 text-gray-500 hover:text-black transition-colors">
                  <PenSquare className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none px-2"
                />
                <button className="p-2 text-gray-500 hover:text-black transition-colors">
                  <Paperclip className="h-5 w-5" />
                </button>
                <button className="hidden sm:block p-2 text-gray-500 hover:text-black transition-colors">
                  <Globe className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-500 hover:text-black transition-colors">
                  <Mic className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
