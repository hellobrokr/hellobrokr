"use client"

import { useState } from "react"
import { ScrollAnimator } from "./scroll-animator"
import { Button } from "@/components/ui/button"
import {
  FolderLock,
  Users,
  FileSignature,
  Square,
  Wrench,
  Plus,
  MessageCircle,
  Download,
  Bell,
  BarChart3,
  Settings,
  Upload,
} from "lucide-react"

const platformTabs = [
  {
    id: "datarooms",
    name: "Datarooms",
    icon: FolderLock,
    description: "Secure document sharing with real-time analytics",
  },
  {
    id: "sign",
    name: "Sign",
    icon: FileSignature,
    description: "Unlimited e-signatures with audit trails",
  },
  {
    id: "people",
    name: "People",
    icon: Users,
    description: "Smart CRM that captures every interaction",
  },
  {
    id: "squared",
    name: "Squared",
    icon: Square,
    description: "Your AI dealmaking partner",
  },
  {
    id: "tools",
    name: "Tools",
    icon: Wrench,
    description: "Workflow automation at its finest",
  },
]

export function InteractivePlatformGrid() {
  const [activeTab, setActiveTab] = useState("datarooms")

  const renderMockup = () => {
    switch (activeTab) {
      case "datarooms":
        return (
          <div className="flex items-center justify-center h-full">
            <div className="rounded-2xl bg-white p-6 text-foreground shadow-2xl border border-slate-200 w-full max-w-4xl">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-200">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm text-muted-foreground">brokr.app/dataroom</span>
              </div>

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">TechCorp Series B Dataroom</h3>
                <p className="text-sm text-muted-foreground">Secure document sharing with real-time analytics</p>
              </div>

              {/* 5 Action Tiles in One Row */}
              <div className="grid grid-cols-5 gap-3 mb-6">
                {/* Create Dataroom */}
                <div className="text-center p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary/50 transition-all duration-200">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-3">
                    <FolderLock className="h-5 w-5 text-slate-600" />
                  </div>
                  <Button
                    size="sm"
                    className="mb-2 bg-primary text-primary-foreground rounded-lg px-3 py-1 text-xs shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-primary-hover transition-all duration-200"
                  >
                    Create
                  </Button>
                  <div className="text-xs font-medium text-foreground">Dataroom</div>
                </div>

                {/* Upload Contents */}
                <div className="text-center p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary/50 transition-all duration-200">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-3">
                    <Upload className="h-5 w-5 text-slate-600" />
                  </div>
                  <Button
                    size="sm"
                    className="mb-2 bg-primary text-primary-foreground rounded-lg px-3 py-1 text-xs shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-primary-hover transition-all duration-200"
                  >
                    Upload
                  </Button>
                  <div className="text-xs font-medium text-foreground">Contents</div>
                </div>

                {/* Add Contents */}
                <div className="text-center p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary/50 transition-all duration-200">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-3">
                    <Plus className="h-5 w-5 text-slate-600" />
                  </div>
                  <Button
                    size="sm"
                    className="mb-2 bg-primary text-primary-foreground rounded-lg px-3 py-1 text-xs shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-primary-hover transition-all duration-200"
                  >
                    Add
                  </Button>
                  <div className="text-xs font-medium text-foreground">Contents</div>
                </div>

                {/* Users Management */}
                <div className="text-center p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary/50 transition-all duration-200">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-3">
                    <Settings className="h-5 w-5 text-slate-600" />
                  </div>
                  <Button
                    size="sm"
                    className="mb-2 bg-primary text-primary-foreground rounded-lg px-3 py-1 text-xs shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-primary-hover transition-all duration-200"
                  >
                    Manage
                  </Button>
                  <div className="text-xs font-medium text-foreground">Users</div>
                </div>

                {/* Invite Users */}
                <div className="text-center p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary/50 transition-all duration-200">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-3">
                    <Users className="h-5 w-5 text-slate-600" />
                  </div>
                  <Button
                    size="sm"
                    className="mb-2 bg-primary text-primary-foreground rounded-lg px-3 py-1 text-xs shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-primary-hover transition-all duration-200"
                  >
                    Invite
                  </Button>
                  <div className="text-xs font-medium text-foreground">Users</div>
                </div>
              </div>

              {/* Content Area */}
              <div className="min-h-[200px] rounded-xl bg-slate-50 p-6">
                <div className="flex items-center justify-center h-full text-slate-400">
                  <div className="text-center">
                    <FolderLock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-sm">Your secure dataroom interface</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "sign":
        return (
          <div className="rounded-2xl bg-white p-6 shadow-2xl border border-slate-200 h-full">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-foreground">Document Signing</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs text-muted-foreground">Secure</span>
              </div>
            </div>

            <div className="flex items-center justify-center h-48 text-slate-400">
              <div className="text-center">
                <FileSignature className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-sm">E-signature interface</p>
              </div>
            </div>
          </div>
        )

      case "people":
        return (
          <div className="rounded-2xl bg-white p-6 shadow-2xl border border-slate-200 h-full">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-foreground">Deal Pipeline</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs text-muted-foreground">Live updates</span>
              </div>
            </div>

            <div className="flex items-center justify-center h-48 text-slate-400">
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-sm">CRM and pipeline management</p>
              </div>
            </div>
          </div>
        )

      case "squared":
        return (
          <div className="rounded-2xl bg-white p-6 shadow-2xl border border-slate-200 h-full">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Square className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-foreground">Squared AI Assistant</span>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>

            <div className="flex items-center justify-center h-32 text-slate-400">
              <div className="text-center">
                <Square className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-sm">AI assistant interface</p>
              </div>
            </div>
          </div>
        )

      case "tools":
        return (
          <div className="rounded-2xl bg-white p-6 shadow-2xl border border-slate-200 h-full">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-foreground">Workflow Tools</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs text-muted-foreground">Active</span>
              </div>
            </div>

            <div className="flex items-center justify-center h-48 text-slate-400">
              <div className="text-center">
                <Wrench className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-sm">Workflow automation tools</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const renderExplainers = () => {
    return (
      <div className="space-y-8">
        {/* Notifications Explainer */}
        <div className="rounded-2xl bg-white p-6 shadow-neumorphic-card border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)]">
              <Bell className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground">Smart Notifications</h4>
              <p className="text-sm text-muted-foreground">Stay informed without the noise</p>
            </div>
          </div>

          {/* Notification Examples */}
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] border border-primary/10">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-3 w-3 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground">New message from user in dataroom</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] border border-primary/10">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Download className="h-3 w-3 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground">CapTable.xlsx downloaded 12 times</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            Get contextual alerts that matter. brokr filters noise and surfaces the insights that drive deals forward.
          </p>
        </div>

        {/* Chat Explainer */}
        <div className="rounded-2xl bg-white p-6 shadow-neumorphic-card border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)]">
              <MessageCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground">Contextual Chat</h4>
              <p className="text-sm text-muted-foreground">Discuss deals in real-time</p>
            </div>
          </div>

          {/* Chat Example */}
          <div className="space-y-3 mb-4">
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl px-4 py-2 text-sm bg-slate-100 text-foreground">
                Can you explain the Q4 change in gross margin?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-2xl px-4 py-2 text-sm bg-primary text-primary-foreground">
                The Q4 gross margin increased by 3.2% due to improved operational efficiency...
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Built-in messaging keeps all deal discussions organized and searchable. No more scattered email threads.
          </p>
        </div>

        {/* Analytics Explainer */}
        <div className="rounded-2xl bg-white p-6 shadow-neumorphic-card border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)]">
              <BarChart3 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground">Deal Analytics</h4>
              <p className="text-sm text-muted-foreground">Data-driven deal insights</p>
            </div>
          </div>

          {/* Analytics Visual */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
              <span className="text-sm font-medium text-foreground">Document Views</span>
              <span className="text-sm font-bold text-primary">87%</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
              <span className="text-sm font-medium text-foreground">Engagement Score</span>
              <span className="text-sm font-bold text-primary">9.2/10</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
              <span className="text-sm font-medium text-foreground">Time to Close</span>
              <span className="text-sm font-bold text-primary">12 days</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Track every interaction, predict deal outcomes, and identify bottlenecks before they slow you down.
          </p>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl">
        <ScrollAnimator>
          <div className="text-center mb-12">
            <div className="mb-6 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground shadow-neumorphic-subtle">
              INTERACTIVE DEMO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience brokr in Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Click through our interactive demo to see how brokr transforms your dealmaking workflow
            </p>
          </div>
        </ScrollAnimator>

        {/* Tab Navigation */}
        <ScrollAnimator delay="delay-200">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {platformTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)]"
                    : "bg-white text-muted-foreground hover:text-foreground shadow-neumorphic-subtle hover:shadow-neumorphic-card"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.name}
              </button>
            ))}
          </div>
        </ScrollAnimator>

        {/* Demo Content */}
        <ScrollAnimator delay="delay-400">
          <div className="grid gap-8 lg:grid-cols-2 relative">
            {/* Left Column - Mockup Interface */}
            <div className="h-96 relative overflow-visible">{renderMockup()}</div>

            {/* Right Column - Three Explainers (only for datarooms) */}
            <div className="relative overflow-visible">
              {activeTab === "datarooms" ? (
                renderExplainers()
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-8">
                    {(() => {
                      const currentTab = platformTabs.find((tab) => tab.id === activeTab)
                      const IconComponent = currentTab?.icon
                      return IconComponent ? (
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] mx-auto mb-4">
                          <IconComponent className="h-8 w-8 text-primary-foreground" />
                        </div>
                      ) : null
                    })()}
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {platformTabs.find((tab) => tab.id === activeTab)?.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {platformTabs.find((tab) => tab.id === activeTab)?.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
