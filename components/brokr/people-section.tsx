"use client"

import {
  Users,
  MessageSquare,
  Phone,
  Mail,
  Brain,
  Inbox,
  TrendingUp,
  CheckSquare,
  Database,
  FolderSyncIcon as Sync,
} from "lucide-react"
import { ScrollAnimator } from "./scroll-animator"

const contacts = [
  {
    name: "Sarah Chen",
    company: "Andreessen Horowitz",
    role: "Partner",
    status: "hot",
    tag: "Partner",
  },
  {
    name: "Marcus Rodriguez",
    company: "Sequoia Capital",
    role: "Principal",
    status: "warm",
    tag: "Partner",
  },
  {
    name: "Jennifer Kim",
    company: "Kleiner Perkins",
    role: "Partner",
    status: "cold",
    tag: "Prospect",
  },
  {
    name: "David Thompson",
    company: "Accel Partners",
    role: "Managing Director",
    status: "hot",
  },
]

const peopleFeatures = [
  {
    icon: Inbox,
    title: "Automated Sync",
    description: "Capture every contact and interaction from your email and calendar automatically.",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Surface your warmest leads and get AI-driven suggestions for your next move.",
  },
  {
    icon: TrendingUp,
    title: "Visual Pipeline",
    description: "Manage your entire deal flow with an intuitive, drag-and-drop pipeline view.",
  },
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Create, assign, and track deal-related tasks directly within your CRM.",
  },
]

export function PeopleSection() {
  return (
    <section id="people" className="py-24 md:py-32 bg-white">
      <div className="container max-w-7xl">
        {/* Hero Content */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16 md:mb-24">
          {/* Left Column - Content */}
          <ScrollAnimator>
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-xl p-1 text-sm font-medium text-foreground shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20">
                <span className="mr-2 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  People
                </span>
                <span className="pr-3">The CRM that works for dealmakers</span>
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-black">A deal-centric,</span>
                  <br />
                  <span className="relative inline-block align-middle">
                    <span className="absolute inset-x-[-10px] inset-y-[-6px] bg-primary/20 rounded-[28px] shadow-neumorphic-card transform blur-lg opacity-80 -z-10 skew-y-[-1.5deg]"></span>
                    <span className="relative z-10 inline-block px-6 py-2 bg-primary text-primary-foreground rounded-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] border border-white/30 sm:px-2.5 sm:py-px">
                      intelligent
                    </span>
                  </span>{" "}
                  <span className="text-black">CRM</span>
                </h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Finally, a CRM built for dealmakers. Auto-captures every contact, tracks all interactions, and turns
                your entire network into your competitive advantage.
              </p>
            </div>
          </ScrollAnimator>

          {/* Right Column - People Tiles */}
          <ScrollAnimator delay="delay-200">
            <div className="relative lg:min-h-[400px]">
              <div className="relative space-y-2 lg:space-y-0 lg:absolute lg:inset-0 flex lg:block flex-col items-center">
                {contacts.map((contact, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-3xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.02] w-full max-w-md lg:max-w-none lg:w-full"
                    style={{
                      zIndex: 20 - index,
                      transform: `translateX(${index * 4}px) lg:translateX(${index * 12}px) rotate(${index % 2 === 0 ? "-" : ""}${Math.random() * 1.5 + 0.5}deg)`,
                      marginTop: index > 0 ? "-8px" : "0",
                    }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold text-base sm:text-lg shadow-[0_1px_4px_rgba(163,230,53,0.1)]">
                          {contact.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div
                          className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                            contact.status === "hot"
                              ? "bg-primary"
                              : contact.status === "warm"
                                ? "bg-yellow-500"
                                : "bg-gray-400"
                          } shadow-[0_1px_4px_rgba(0,0,0,0.1)]`}
                        ></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-black text-sm sm:text-base">{contact.name}</h4>
                          {contact.tag && (
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-semibold ${contact.tag === "Partner" ? "bg-primary text-primary-foreground" : "bg-gray-100 text-gray-600"}`}
                            >
                              {contact.tag}
                            </span>
                          )}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium truncate pr-2">
                          {contact.role}, {contact.company}
                        </div>
                      </div>
                      <div className="flex gap-1 flex-shrink-0">
                        <button className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                          <Mail className="h-3 w-3 text-black" />
                        </button>
                        <button className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                          <Phone className="h-3 w-3 text-black" />
                        </button>
                        <button className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                          <MessageSquare className="h-3 w-3 text-black" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Floating Feature Tiles */}
                <div className="absolute inset-0 pointer-events-none hidden lg:block">
                  <div
                    className="absolute -top-8 -right-16 w-56 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/30 pointer-events-auto hover:shadow-[0_12px_48px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105"
                    style={{ zIndex: 30 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(163,230,53,0.3)]">
                        <Database className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-black text-sm">Contact Enrichment</h4>
                        <p className="text-xs text-gray-600">Auto-complete profiles</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute top-64 -left-12 w-56 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/30 pointer-events-auto hover:shadow-[0_12px_48px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105"
                    style={{ zIndex: 29 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(163,230,53,0.3)]">
                        <Inbox className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-black text-sm">Email Sync</h4>
                        <p className="text-xs text-gray-600">Never miss a thread</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-48 -right-8 w-56 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/30 pointer-events-auto hover:shadow-[0_12px_48px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105"
                    style={{ zIndex: 28 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(163,230,53,0.3)]">
                        <Sync className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-black text-sm">CRM Sync</h4>
                        <p className="text-xs text-gray-600">Bidirectional sync</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>

        {/* Feature Tiles */}
        <ScrollAnimator>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {peopleFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-4 sm:p-6 rounded-2xl bg-white shadow-neumorphic-card transition-shadow duration-200 hover:shadow-neumorphic-card-hover"
              >
                <div className="flex items-center gap-4 mb-3 sm:flex-col sm:items-center sm:text-center">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] flex-shrink-0 sm:mb-4">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-foreground sm:mb-2">{feature.title}</div>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed text-left sm:text-center">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
