"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { WaitlistModal } from "./waitlist-modal"
import { useState } from "react"
import { Menu } from "lucide-react"

interface BrokrHeaderProps {
  onWaitlistSuccess: () => void
}

const navLinks = [
  { href: "/#datarooms", label: "Datarooms" },
  { href: "/#people", label: "People" },
  { href: "/#sign", label: "Sign" },
  { href: "/#squared", label: "Squared" },
  { href: "/#pricing", label: "Pricing" },
]

export function BrokrHeader({ onWaitlistSuccess }: BrokrHeaderProps) {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false)

  const waitlistButtonClasses =
    "bg-primary text-primary-foreground rounded-xl px-6 py-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.1)] hover:bg-primary-hover hover:shadow-[0_6px_16px_rgba(0,0,0,0.18),_inset_0_1px_2px_rgba(255,255,255,0.65),_inset_0_-1px_1px_rgba(0,0,0,0.12)] transition-all duration-200 ease-in-out"

  const handleWaitlistSuccess = () => {
    setShowWaitlistModal(false)
    onWaitlistSuccess()
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full transition-all duration-200">
        <div className="container">
          <div className="mt-4 max-w-6xl mx-auto flex h-[72px] items-center justify-between rounded-2xl bg-white/80 px-4 sm:px-6 shadow-floating-pill backdrop-blur-md">
            <Link href="/" className="text-xl font-bold text-foreground">
              brokr
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <Button className={waitlistButtonClasses} onClick={() => setShowWaitlistModal(true)}>
                  Join the waitlist
                </Button>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6 text-foreground" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[280px] bg-white/95 backdrop-blur-md">
                    <nav className="flex flex-col gap-y-6 pt-8">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200"
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                      <div className="pt-4 border-t border-slate-200">
                        <Button className={waitlistButtonClasses} onClick={() => setShowWaitlistModal(true)}>
                          Join the waitlist
                        </Button>
                      </div>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>

      <WaitlistModal
        isOpen={showWaitlistModal}
        onClose={() => setShowWaitlistModal(false)}
        onSuccess={handleWaitlistSuccess}
      />
    </>
  )
}
