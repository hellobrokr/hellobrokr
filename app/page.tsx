"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BrokrHeader } from "@/components/brokr/header"
import { ScrollAnimator } from "@/components/brokr/scroll-animator"
import { NotificationPill } from "@/components/brokr/notification-pill"
import { WaitlistModal } from "@/components/brokr/waitlist-modal"
import { DataroomSteps } from "@/components/brokr/dataroom-steps"
import { PeopleSection } from "@/components/brokr/people-section"
import { FinalCta } from "@/components/brokr/final-cta"
import { BrokrFooter } from "@/components/brokr/footer"
import { SquaredDemo } from "@/components/brokr/squared-demo"
import { ArrowRight, Users, FileSignature, Square, Megaphone, Vault } from "lucide-react"
import { PricingPage } from "@/components/brokr/pricing-page"
import { SignSection } from "@/components/brokr/sign-section"
import Image from "next/image"

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
    heightClass: "h-24 md:h-24",
  },
  {
    name: "Barclays",
    logo: "/barclays-logo-new.png",
    heightClass: "h-24",
    mobileHidden: true,
  },
  {
    name: "CBRE",
    logo: "/cbre-logo-new.png",
    heightClass: "h-20 md:h-24",
  },
  {
    name: "Knight Frank",
    logo: "/knight-frank-logo-new.png",
    heightClass: "h-16 md:h-24",
  },
  {
    name: "Century 21",
    logo: "/century21-logo-new.png",
    heightClass: "h-24",
    mobileHidden: true,
  },
]

const testimonials = [
  {
    quote:
      "The brokr platform is as intuitive as it is powerful. It's clean, modern design makes deal management simple and even enjoyable—I actually look forward to logging in.",
    name: "Sarah",
    role: "Real Estate Broker",
  },
  {
    quote:
      "Our firm still maintains a subscription to another dataroom, but I honestly refuse to use it. brokr is the only tool I trust to handle all my deals from start to finish.",
    name: "Marcus",
    role: "Financial Advisor",
  },
  {
    quote:
      "What impresses me most about brokr isn’t just the technology—it’s how seamless and user-friendly it feels. Every step, from diligence to closing, is smooth and hassle-free.",
    name: "Jennifer",
    role: "Venture Capital",
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
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32 bg-white">
          <div className="container relative z-10">
            <ScrollAnimator>
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-10 inline-flex items-center rounded-full bg-white p-1 text-sm font-medium text-foreground shadow-neumorphic-subtle">
                  <span className="mr-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground flex items-center gap-1">
                    <Megaphone className="h-4 w-4" />
                  </span>
                  <span className="pr-2">Be the first to get access to brokr V3</span>
                </div>
                <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight">
                  <span className="block md:inline">Where Deals </span>
                  <span className="relative inline-block align-middle">
                    <span className="absolute inset-x-[-10px] inset-y-[-6px] bg-primary/20 rounded-[28px] shadow-neumorphic-card transform blur-lg opacity-80 -z-10 skew-y-[-1.5deg]"></span>
                    <span className="relative z-10 inline-block px-6 py-2 bg-primary text-primary-foreground rounded-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] border border-white/30 sm:px-4 sm:py-2.5">
                      Happen
                    </span>
                  </span>
                </h1>
                <p className="mt-8 max-w-4xl mx-auto text-center text-xl leading-relaxed text-muted-foreground">
                  The comprehensive transaction platform streamlining dealmaking. Secure document sharing, intelligent
                  CRM, AI-powered workflows, and compliance-grade e-signatures in one unified ecosystem.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-4">
                  <Button size="lg" className={waitlistButtonClasses} onClick={() => setShowWaitlistModal(true)}>
                    Join the waitlist
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-12 bg-white md:py-0">
          <div className="container max-w-6xl">
            <ScrollAnimator>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
                {metrics.map((metric) => (
                  <div
                    key={metric.value}
                    className="p-4 rounded-2xl bg-white shadow-neumorphic-card transition-shadow duration-200 hover:shadow-neumorphic-card-hover"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] flex-shrink-0">
                        <metric.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="text-lg font-bold text-foreground">{metric.value}</div>
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{metric.description}</div>
                  </div>
                ))}
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* New Metrics Section 1 */}
        <section className="py-12 bg-white md:py-0 mt-10">
          <div className="container max-w-6xl">
            <ScrollAnimator>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
                {metrics.map((metric) => (
                  <CustomCard1
                    key={metric.value}
                    imageSrc={"/card-images/datarooms.png"}
                    imageAlt={metric.value}
                    title={metric.value}
                    content={metric.description}
                  />
                ))}
              </div>
            </ScrollAnimator>
          </div>
        </section>
        {/* New Metrics Section 2 */}
        <section className="py-12 bg-white md:py-0 mt-10">
          <div className="container max-w-6xl">
            <ScrollAnimator>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
                {metrics.map((metric) => (
                  <CustomCard2
                    key={metric.value}
                    imageSrc={"/card-images/datarooms.png"}
                    imageAlt={metric.value}
                    title={metric.value}
                    content={metric.description}
                  />
                ))}
              </div>
            </ScrollAnimator>
          </div>
        </section>
        {/* New Metrics Section 3 */}
        <section className="py-12 bg-white md:py-0 mt-10">
          <div className="container max-w-6xl">
            <ScrollAnimator>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
                {metrics.map((metric) => (
                  <CustomCard3
                    key={metric.value}
                    imageSrc={"/card-images/datarooms.png"}
                    imageAlt={metric.value}
                    title={metric.value}
                    content={metric.description}
                  />
                ))}
              </div>
            </ScrollAnimator>
          </div>
        </section>

        <DataroomSteps onSetupDataroom={() => setShowWaitlistModal(true)} />
        <PeopleSection />
        <SignSection />
        <SquaredDemo />

        {/* Customer Stories Section with Company Logos */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container max-w-7xl">
            <ScrollAnimator>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Trusted by the world's top dealmakers
                </h2>
                <p className="text-xl text-muted-foreground max-w2xl mx-auto mb-12">
                  Leading professionals choose brokr to accelerate their transactions
                </p>

                {/* Company Logos */}
                <div className="grid grid-cols-3 gap-8 md:grid-cols-5 items-center md:gap-12 mb-16">
                  {companies.map((company) => (
                    <div
                      key={company.name}
                      className={`items-center justify-center p-2 rounded-2xl bg-white shadow-neumorphic-subtle transition-shadow duration-200 hover:shadow-neumorphic-card h-28 md:h-28 ${
                        company.mobileHidden ? "hidden md:flex" : "flex"
                      }`}
                    >
                      <img
                        src={company.logo || "/placeholder.svg"}
                        alt={company.name}
                        className={`${company.heightClass} w-auto opacity-60 hover:opacity-100 transition-opacity duration-200`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimator>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <ScrollAnimator key={testimonial.name} delay={`delay-${index * 200}`}>
                  <div className="relative rounded-3xl bg-white/90 backdrop-blur-md p-8 shadow-neumorphic-card border border-white/20 overflow-hidden">
                    <div className="text-6xl text-slate-300 font-serif mb-4">"</div>
                    <blockquote className="text-lg font-medium text-foreground mb-6 leading-relaxed relative z-10">
                      {testimonial.quote}
                    </blockquote>
                    <div className="relative z-10">
                      <div className="text-foreground font-semibold">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="bg-white">
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
                      src="/zapier-logo-new.png"
                      alt="Zapier"
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

        <PricingPage />
        <FinalCta onGetStarted={() => setShowWaitlistModal(true)} />
      </main>

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

interface CustomCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  content: string;
}

const CustomCard1: React.FC<CustomCardProps> = ({
    imageSrc,
    imageAlt,
    title,
    content,
}) => {
    return (
        <div className="group relative bg-white/25 backdrop-blur-xl rounded-3xl p-4 shadow-[0_8px_32px_rgba(31,38,135,0.15),inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.05)] border border-white/20 transition-all duration-500 ease-out hover:transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(31,38,135,0.2),inset_0_1px_0_rgba(255,255,255,0.5),0_4px_8px_rgba(0,0,0,0.08)] animate-float">
            <div
                className={`relative w-full aspect-square rounded-2xl flex items-center justify-center mb-6 overflow-hidden`}
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={40}
                    height={40}
                    className="w-full aspect-square object-cover drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#a3e63525]"></div>
            </div>

            <h3 className="text-center text-2xl font-bold text-gray-800 mb-4 tracking-tight leading-tight">
                {title}
            </h3>

            <p className="text-center text-gray-600 text-base leading-relaxed font-normal">
                {content}
            </p>
        </div>
    );
};


const CustomCard2: React.FC<CustomCardProps> = ({
    imageSrc,
    imageAlt,
    title,
    content,
}) => {
    return (
        <div className="group relative overflow-clip bg-white rounded-2xl shadow-[0_8px_32px_rgba(31,38,135,0.15),inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgba(31,38,135,0.2),inset_0_1px_0_rgba(255,255,255,0.5),0_4px_8px_rgba(0,0,0,0.08)] animate-float">
            <div>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 relative">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight leading-tight">
                    {title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed font-normal">
                    {content}
                </p>
                {/* Gradient overlay  */}
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#00000015,transparent),radial-gradient(circle_at_top_right,#a3e63540,transparent)] opacity-100 group-hover:opacity-0 transition-all duration-500 ease-out"
                ></div>
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00000015,transparent),radial-gradient(circle_at_bottom_right,#a3e63540,transparent)] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                ></div>
            </div>
        </div>
    );
};

const CustomCard3: React.FC<CustomCardProps> = ({
    imageSrc,
    imageAlt,
    title,
    content,
}) => {
    return (
        <div className="group relative aspect-square overflow-clip bg-white rounded-2xl shadow-[0_8px_32px_rgba(31,38,135,0.15),inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgba(31,38,135,0.2),inset_0_1px_0_rgba(255,255,255,0.5),0_4px_8px_rgba(0,0,0,0.08)] animate-float">
            <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:-inset-2 pb-10">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-white/75 backdrop-blur transition-all duration-500 ease-out lg:translate-y-[calc(100%-65px)] group-hover:translate-y-0">
                <h3 className="text-center text-2xl font-bold text-gray-800 mb-4 tracking-tight leading-tight">
                    {title}
                </h3>

                <p className="text-center text-gray-600 text-base leading-relaxed font-normal">
                    {content}
                </p>
            </div>
        </div>
    );
};
