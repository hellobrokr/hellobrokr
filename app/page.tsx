"use client"

import { useState } from "react"
import { BrokrHeader } from "@/components/brokr/header"
import { ScrollAnimator } from "@/components/brokr/scroll-animator"
import { NotificationPill } from "@/components/brokr/notification-pill"
import { WaitlistModal } from "@/components/brokr/waitlist-modal"
import { DataroomSteps } from "@/components/brokr/dataroom-steps"
import { PeopleSection } from "@/components/brokr/people-section"
import { FinalCta } from "@/components/brokr/final-cta"
import { BrokrFooter } from "@/components/brokr/footer"
import { SquaredDemo } from "@/components/brokr/squared-demo"
import { FolderLock, Users, FileSignature, Square, Vault } from "lucide-react"
import { PricingPage } from "@/components/brokr/pricing-page"
import { SignSection } from "@/components/brokr/sign-section"

const features = [
  {
    icon: FolderLock,
    title: "Datarooms",
    subtitle: "Secure document sharing with real-time analytics",
    description:
      "Bank-grade security meets intuitive design. Create secure datarooms in seconds, control access with precision, and track engagement in real-time.",
  },
  {
    icon: Users,
    title: "People",
    subtitle: "Smart CRM that captures every interaction",
    description:
      "Auto-captures every contact, tracks all interactions, predicts next moves. Your entire network becomes your competitive advantage.",
  },
  {
    icon: FileSignature,
    title: "Sign",
    subtitle: "Unlimited e-signatures with audit trails",
    description:
      "Bank-grade security meets one-click simplicity. Unlimited signatures, bulletproof audit trails, instant execution.",
  },
  {
    icon: Square,
    title: "Squared",
    subtitle: "Your AI dealmaking partner",
    description:
      "AI assistant that never takes a day off. Drafts term sheets, analyzes deals, manages follow-ups, answers questions.",
  },
]

const metrics = [
  {
    icon: Vault,
    value: "Datarooms",
    description: "Securely store, manage, and share confidential documents for your deals.",
  },
  {
    icon: Users,
    value: "People",
    description: "Manage your network with a smart CRM built for dealmakers.",
  },
  {
    icon: FileSignature,
    value: "Sign",
    description: "Execute agreements with legally-binding e-signatures built for speed.",
  },
  {
    icon: Square,
    value: "Squared",
    description: "Leverage AI to analyze deals, draft documents, and automate workflows.",
  },
]

const companies = [
  {
    name: "Douglas Elliman",
    logo: "/douglas-elliman-logo.png",
  },
  {
    name: "Barclays",
    logo: "/barclays-logo-new.png",
  },
  {
    name: "CBRE",
    logo: "/cbre-logo-new.png",
  },
  {
    name: "Knight Frank",
    logo: "/knight-frank-logo-new.png",
  },
  {
    name: "Century 21",
    logo: "/century21-logo-new.png",
  },
]

export default function HomePage() {
  const [showNotification, setShowNotification] = useState(false)
  const [showWaitlistModal, setShowWaitlistModal] = useState(false)

  const handleWaitlistSuccess = () => {
    setShowNotification(true)
    setShowWaitlistModal(false)
  }

  // Consistent styling for Join Waitlist button (neumorphic lime)
  const waitlistButtonClasses =
    "group w-full sm:w-auto bg-primary text-primary-foreground rounded-xl px-8 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] hover:bg-primary-hover hover:shadow-[0_6px_16px_rgba(0,0,0,0.18),_inset_0_1px_2px_rgba(255,255,255,0.65),_inset_0_-1px_1px_rgba(0,0,0,0.12)] transition-all duration-200 ease-in-out"

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <BrokrHeader onWaitlistSuccess={handleWaitlistSuccess} />
      <main className="flex-1">
        {/* Metrics Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-6xl">
            <ScrollAnimator>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                {metrics.map((metric) => (
                  <div
                    key={metric.value}
                    className="text-center p-6 rounded-2xl bg-white shadow-neumorphic-card transition-shadow duration-200 hover:shadow-neumorphic-card-hover"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)]">
                        <metric.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{metric.description}</div>
                  </div>
                ))}
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* Enhanced Dataroom Steps Section */}
        <section id="datarooms">
          <DataroomSteps onSetupDataroom={() => setShowWaitlistModal(true)} />
        </section>

        {/* People/CRM Section */}
        <PeopleSection />

        {/* Sign Section */}
        <section id="sign">
          <SignSection />
        </section>

        {/* Enhanced Squared AI Demo */}
        <section id="squared">
          <SquaredDemo />
        </section>

        {/* Customer Stories Section with Company Logos */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container max-w-7xl">
            <ScrollAnimator>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Trusted by the world's top dealmakers
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                  Leading professionals choose brokr to accelerate their transactions
                </p>

                {/* Company Logos */}
                <div className="grid grid-cols-3 gap-8 md:grid-cols-5 md:gap-12 mb-16">
                  {companies.map((company) => (
                    <div
                      key={company.name}
                      className="flex items-center justify-center p-2 rounded-2xl bg-white shadow-neumorphic-subtle transition-shadow duration-200 hover:shadow-neumorphic-card h-24"
                    >
                      <img
                        src={company.logo || "/placeholder.svg"}
                        alt={company.name}
                        className="h-32 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimator>

            <div className="grid gap-8 md:grid-cols-3">
              <ScrollAnimator>
                <div className="relative rounded-3xl bg-white/90 backdrop-blur-md p-8 shadow-neumorphic-card border border-white/20 overflow-hidden">
                  {/* Quote Marks */}
                  <div className="text-6xl text-slate-300 font-serif mb-4">"</div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg font-medium text-foreground mb-6 leading-relaxed relative z-10">
                    brokr transformed our deal velocity. We're closing transactions
                    <span className="text-primary font-bold"> 60% faster</span> than before.
                  </blockquote>

                  {/* Attribution */}
                  <div className="relative z-10">
                    <div className="text-foreground font-semibold">Sarah</div>
                    <div className="text-muted-foreground text-sm">Real Estate Broker</div>
                  </div>
                </div>
              </ScrollAnimator>

              <ScrollAnimator delay="delay-200">
                <div className="relative rounded-3xl bg-white/90 backdrop-blur-md p-8 shadow-neumorphic-card border border-white/20 overflow-hidden">
                  {/* Quote Marks */}
                  <div className="text-6xl text-slate-300 font-serif mb-4">"</div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg font-medium text-foreground mb-6 leading-relaxed relative z-10">
                    The AI insights are incredible. brokr predicted which deals would close
                    <span className="text-primary font-bold"> before we knew</span> ourselves.
                  </blockquote>

                  {/* Attribution */}
                  <div className="relative z-10">
                    <div className="text-foreground font-semibold">Marcus</div>
                    <div className="text-muted-foreground text-sm">Financial Advisor</div>
                  </div>
                </div>
              </ScrollAnimator>

              <ScrollAnimator delay="delay-400">
                <div className="relative rounded-3xl bg-white/90 backdrop-blur-md p-8 shadow-neumorphic-card border border-white/20 overflow-hidden">
                  {/* Quote Marks */}
                  <div className="text-6xl text-slate-300 font-serif mb-4">"</div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg font-medium text-foreground mb-6 leading-relaxed relative z-10">
                    Our due diligence process went from weeks to days. We're processing
                    <span className="text-primary font-bold"> 3x more deals</span> with the same team size.
                  </blockquote>

                  {/* Attribution */}
                  <div className="relative z-10">
                    <div className="text-foreground font-semibold">Jennifer</div>
                    <div className="text-muted-foreground text-sm">Venture Capital</div>
                  </div>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* Tools Demo Section */}

        {/* Integrations Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container max-w-6xl">
            <ScrollAnimator>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Seamlessly integrates with your existing tools
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                  Connect brokr with the platforms you already use to create a unified workflow
                </p>
                <div className="grid grid-cols-3 gap-8 md:grid-cols-6 md:gap-12 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-white shadow-neumorphic-subtle transition-shadow duration-200 hover:shadow-neumorphic-card h-20">
                    <img
                      src="/google-drive-logo-new.png"
                      alt="Google Drive"
                      className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-white shadow-neumorphic-subtle transition-shadow duration-200 hover:shadow-neumorphic-card h-20">
                    <img
                      src="/dropbox-logo-new.png"
                      alt="Dropbox"
                      className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-white shadow-neumorphic-subtle transition-shadow duration-200 hover:shadow-neumorphic-card h-20">
                    <img
                      src="/salesforce-logo.webp"
                      alt="Salesforce"
                      className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-white shadow-neumorphic-subtle transition-shadow duration-200 hover:shadow-neumorphic-card h-20">
                    <img
                      src="/hubspot-logo.webp"
                      alt="HubSpot"
                      className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-white shadow-neumorphic-subtle transition-shadow duration-200 hover:shadow-neumorphic-card h-20">
                    <img
                      src="/gmail-logo.png"
                      alt="Gmail"
                      className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-2xl bg-white shadow-neumorphic-subtle transition-shadow duration-200 hover:shadow-neumorphic-card h-20">
                    <img
                      src="/icloud-drive-logo.webp"
                      alt="iCloud Drive"
                      className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* Final CTA Section */}
        <PricingPage />
        <FinalCta onGetStarted={() => setShowWaitlistModal(true)} />
      </main>

      {/* Footer */}
      <BrokrFooter />

      <WaitlistModal
        isOpen={showWaitlistModal}
        onClose={() => setShowWaitlistModal(false)}
        onSuccess={handleWaitlistSuccess}
      />

      <NotificationPill isVisible={showNotification} onClose={() => setShowNotification(false)} />
    </div>
  )
}
