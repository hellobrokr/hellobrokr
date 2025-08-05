"use client"

import { ScrollAnimator } from "./scroll-animator"
import { Button } from "@/components/ui/button"
import { FileText, FolderOpen, Video, ArrowRight, Vault, UserCheck, Shield, BarChart3, User } from "lucide-react"

const dataroomFeatures = [
  {
    icon: UserCheck,
    title: "Permissions",
    subtitle: "Granular control",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    subtitle: "Enterprise ready",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    subtitle: "Live insights",
  },
  {
    icon: User,
    title: "Team Collaboration",
    subtitle: "Work together",
  },
]

interface DataroomHeroProps {
  onSetupDataroom: () => void
}

export function DataroomHero({ onSetupDataroom }: DataroomHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 bg-white">
      <div className="container max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column - Content */}
          <ScrollAnimator>
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-xl p-1 text-sm font-medium text-foreground shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 mb-6">
                <span className="mr-2 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center gap-2">
                  <Vault className="h-4 w-4" />
                  Datarooms
                </span>
                <span className="pr-3">The transaction hub</span>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-black">Work smarter,</span>
                  <br />
                  <span className="text-black">close deals </span>
                  <span className="relative inline-block align-middle">
                    <span className="absolute inset-x-[-10px] inset-y-[-6px] bg-primary/20 rounded-[28px] shadow-neumorphic-card transform blur-lg opacity-80 -z-10 skew-y-[-1.5deg]"></span>
                    <span className="relative z-10 inline-block px-6 py-2 sm:px-8 sm:py-3 bg-primary text-primary-foreground rounded-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] border border-white/30">
                      faster.
                    </span>
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                The most secure dataroom ever built. Bank-grade encryption meets intuitive design for deals that close
                73% faster.
              </p>

              {/* CTA Section */}
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-4 shadow-neumorphic-card border border-white/40 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-black">Setup your first dataroom now</div>
                  <Button
                    size="icon"
                    className="bg-primary text-primary-foreground rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6)] hover:bg-primary-hover transition-all duration-200"
                    onClick={onSetupDataroom}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimator>

          {/* Right Column - 3D Mockup */}
          <ScrollAnimator delay="delay-200">
            <div className="relative mt-12 lg:mt-0">
              {/* Main Device/Platform */}
              <div className="relative mx-auto max-w-lg">
                {/* Base Platform */}
                <div className="relative bg-white rounded-3xl p-4 shadow-neumorphic-card-hover transform lg:perspective-1000 lg:rotate-y-[5deg] lg:rotate-x-[5deg]">
                  {/* Screen/Interface */}
                  <div className="bg-white rounded-2xl p-4 min-h-[400px] relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 left-4 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
                      <div className="absolute bottom-4 right-4 w-24 h-24 bg-primary rounded-full blur-2xl"></div>
                    </div>

                    {/* Interface Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <Vault className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-semibold text-black text-sm">TechCorp Series B</div>
                          <div className="text-xs text-gray-500">Secure Dataroom</div>
                        </div>
                      </div>

                      {/* Mock File List */}
                      <div className="space-y-2 flex-1">
                        {[...Array(8)].map((_, i) => {
                          const items = [
                            { icon: FileText, name: "Pitch_Deck_Final.pdf" },
                            { icon: FileText, name: "Financials_Q3.xlsx" },
                            { icon: FolderOpen, name: "Legal_Documents" },
                            { icon: FileText, name: "Business_Plan_2024.docx" },
                            { icon: Video, name: "Demo_Video.mp4" },
                            { icon: FileText, name: "Market_Analysis.pdf" },
                            { icon: FileText, name: "Cap_Table.xlsx" },
                            { icon: FileText, name: "Term_Sheet_Draft.docx" },
                          ]
                          const item = items[i % items.length]
                          return (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-3 hover:bg-slate-50/50 rounded-lg transition-colors"
                            >
                              <item.icon className="h-5 w-5 text-black flex-shrink-0" />
                              <span className="text-sm text-gray-700 flex-1 truncate">{item.name}</span>
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Feature Cards */}
                {dataroomFeatures.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`absolute bg-white rounded-2xl p-3 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/40 transition-all duration-300 hover:scale-105 w-44 sm:w-56 ${
                      [
                        "top-16 -left-4 lg:top-24 lg:-left-16",
                        "top-24 -right-4 lg:top-36 lg:-right-12",
                        "bottom-24 -left-4 lg:bottom-12 lg:-left-16",
                        "bottom-16 -right-4 lg:bottom-8 lg:-right-16",
                      ][index]
                    }`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-black text-xs sm:text-sm mb-1">{feature.title}</div>
                        <div className="text-xs text-gray-600 hidden sm:block">{feature.subtitle}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  )
}
