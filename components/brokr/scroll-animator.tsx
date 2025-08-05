"use client"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type ScrollAnimatorProps = {
  children: ReactNode
  className?: string
  animationClassName?: string
  delay?: string // e.g. 'delay-100', 'delay-200'
  threshold?: number
  triggerOnce?: boolean
}

export function ScrollAnimator({
  children,
  className,
  animationClassName = "animate-fade-in-scale-up",
  delay = "",
  threshold = 0.1,
  triggerOnce = true,
}: ScrollAnimatorProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0", // Start hidden
        inView && animationClassName,
        inView && delay,
        className,
      )}
    >
      {children}
    </div>
  )
}
