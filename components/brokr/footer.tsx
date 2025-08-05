import Link from "next/link"
import { ScrollAnimator } from "./scroll-animator"

export function BrokrFooter() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <ScrollAnimator>
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side: Brand and description */}
            <div className="text-center md:text-left">
              <Link href="/" className="text-2xl font-bold text-foreground mb-2 block">
                brokr
              </Link>
              <p className="text-muted-foreground text-sm max-w-sm">
                The comprehensive transaction platform streamlining dealmaking for modern teams.
              </p>
            </div>

            {/* Right side: Copyright and Legal links */}
            <div className="text-center md:text-right text-sm text-muted-foreground space-y-2">
              <div className="flex items-center justify-center md:justify-end gap-4">
                <Link href="#privacy" className="hover:text-primary transition-colors duration-200">
                  Privacy
                </Link>
                <Link href="#terms" className="hover:text-primary transition-colors duration-200">
                  Terms
                </Link>
              </div>
              <p>&copy; {new Date().getFullYear()} brokr Technologies Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </ScrollAnimator>
    </footer>
  )
}
