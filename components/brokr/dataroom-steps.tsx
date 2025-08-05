"use client"

import { ScrollAnimator } from "./scroll-animator"
import { DataroomHero } from "./dataroom-hero"
import { FolderLock, FilePlus, UserPlus, BarChart3 } from "lucide-react"

const dataroomFeatures = [
  {
    icon: FolderLock,
    title: "Create Dataroom",
    description: "Set up a secure, compliant dataroom for your next deal in just a few clicks.",
  },
  {
    icon: FilePlus,
    title: "Add Contents",
    description: "Easily upload documents or import from Google Drive, Dropbox, and more.",
  },
  {
    icon: UserPlus,
    title: "Add Users",
    description: "Invite investors, team members, or sync contacts from HubSpot and Salesforce.",
  },
  {
    icon: BarChart3,
    title: "Deal Manager",
    description: "Track activity, manage Q&A, and monitor deal progress from a central dashboard.",
  },
]

interface DataroomStepsProps {
  onSetupDataroom: () => void
}

export function DataroomSteps({ onSetupDataroom }: DataroomStepsProps) {
  return (
    <>
      {/* Hero Section */}
      <DataroomHero onSetupDataroom={onSetupDataroom} />

      {/* Features Section */}
      <section className="pt-16 md:pt-24 pb-24 bg-white md:pb-10">
        <div className="container max-w-6xl">
          <ScrollAnimator>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
              {dataroomFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="text-center p-6 rounded-2xl bg-white shadow-neumorphic-card transition-shadow duration-200 hover:shadow-neumorphic-card-hover"
                >
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)]">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-foreground mb-2">{feature.title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{feature.description}</div>
                </div>
              ))}
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </>
  )
}
