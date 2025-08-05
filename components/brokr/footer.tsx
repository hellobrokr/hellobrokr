"use client"

import Link from "next/link"
import { ScrollAnimator } from "./scroll-animator"
import { useState } from "react"
import { LegalModal } from "./legal-modal"

export function BrokrFooter() {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false)

  return (
    <>
      <footer className="bg-white border-t border-slate-200 py-8">
        <ScrollAnimator>
          <div className="container max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left side: Brand */}
              <div className="text-center md:text-left">
                <Link href="/" className="text-2xl font-bold text-foreground mb-2 block">
                  brokr
                </Link>
              </div>

              {/* Right side: Copyright and Legal links */}
              <div className="text-center md:text-right text-sm text-muted-foreground">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-x-4 gap-y-2">
                  <p>&copy; {new Date().getFullYear()} brokr Technologies Inc. All rights reserved.</p>
                  <button
                    onClick={() => setIsLegalModalOpen(true)}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Privacy & Terms
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </footer>
      <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />
    </>
  )
}
