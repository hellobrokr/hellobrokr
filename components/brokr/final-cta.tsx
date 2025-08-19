"use client"

import { Button } from "@/components/ui/button"
import { ScrollAnimator } from "./scroll-animator"
import { ArrowRight } from "lucide-react"

interface FinalCtaProps {
  onGetStarted: () => void
}

export function FinalCta({ onGetStarted }: FinalCtaProps) {
  return (
      <section className="py-24 bg-white md:py-10">
          <div className="container relative w-full">
              <ScrollAnimator delay="delay-200">
                  {/* Main Card with Neumorphic/Glass Style */}
                  <div className="relative rounded-[2rem] p-12 shadow-2xl">
                      {/* Background Decorative Elements */}
                      <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                          {/* Curved Gradient Bands - mimicking the reference image */}
                          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[150%] lg:h-[200%] opacity-80">
                              <div className="absolute inset-0 bg-gradient-to-br from-[#a3e635] via-[#a2e6357e] to-[#00000000] rounded-full transform rotate-45 scale-150"></div>
                          </div>
                          <div className="absolute -top-1/3 -left-1/3 w-[166%] h-[125%] lg:h-[166%] opacity-70">
                              <div className="absolute inset-0 bg-gradient-to-br from-[#a3e635] via-[#a2e6357e] to-[#00000000] rounded-full transform rotate-45 scale-125"></div>
                          </div>
                          <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[100%] lg:h-[150%] opacity-80">
                              <div className="absolute inset-0 bg-gradient-to-br from-[#a3e635] via-[#a2e6357e] to-[#00000000] rounded-full transform rotate-45 scale-110"></div>
                          </div>
                      </div>

                      {/* Content Container */}
                      <div className="relative z-10 text-center">
                          {/* Main Heading */}
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 !leading-[1.25] max-w-4xl mx-auto">
                              <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent drop-shadow-sm">
                                  Ready to upgrade your workflow?
                              </span>
                          </h1>

                          {/* Subheading */}
                          <p className="text-xl text-gray-800 mb-12 max-w-4xl mx-auto leading-relaxed font-normal">
                              Join thousands of dealmakers who've already
                              transformed their
                              <br />
                              workflow with brokr. Start closing more deals
                              today.
                          </p>

                          {/* CTA Button */}
                          <Button
                              size="xl"
                              onClick={onGetStarted}
                              className="group relative px-8 py-4 text-lg font-medium overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                          >
                              {/* Light Background */}
                              <div className="absolute inset-0 bg-white/90 backdrop-blur-lg border border-gray-200/50"></div>

                              {/* Hover Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 via-lime-300/20 to-lime-400/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                              {/* Subtle Glow on Hover */}
                              <div className="absolute -inset-1 bg-gradient-to-r from-lime-400/20 to-lime-400/20 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-all duration-300"></div>

                              {/* Content */}
                              <span className="relative z-10 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                                  Join the waitlist
                              </span>
                              <span className="relative z-10 text-lg text-gray-600 group-hover:text-gray-800 group-hover:translate-x-0.5 transition-all duration-300">
                                  <ArrowRight />
                              </span>
                          </Button>
                          <div className="inline-block ml-2 space-x-2">
                            <Button
                                size="xl"
                                onClick={onGetStarted}
                                className="group relative px-8 py-4 text-lg font-medium overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-[1.02] bg-white/90 hover:bg-white/90 active:scale-[0.98] shadow-[8px_8px_16px_rgba(0,0,0,0.25),-8px_-8px_16px_rgba(255,255,255,0.1)] hover:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.25),inset_-8px_-8px_16px_rgba(255,255,255,0.1)]"
                            >
                                {/* Content */}
                                <span className="relative z-10 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                                    Join the waitlist
                                </span>
                                <span className="relative z-10 text-lg text-gray-600 group-hover:text-gray-800 group-hover:translate-x-0.5 transition-all duration-300">
                                    <ArrowRight />
                                </span>
                            </Button>
                            <Button
                                size="xl"
                                onClick={onGetStarted}
                                className="group relative px-8 py-4 text-lg font-medium overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[4px_4px_8px_rgba(0,0,0,0.25),-4px_-4px_8px_rgba(255,255,255,0.1)]"
                            >
                                {/* Light Background */}
                                <div className="absolute inset-0 bg-white/90 backdrop-blur-lg border border-gray-200/50"></div>

                                {/* Shining stripes */}
                                <div className="absolute -top-1/3 -left-1/3 w-[166%] h-[45%] opacity-0 group-hover:opacity-30 translate-y-36 group-hover:-translate-y-12 transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#a3e635] via-[#a2e6357e] to-[#00000000] rounded-full transform rotate-45 scale-125"></div>
                                </div>
                                <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[40%] opacity-0 group-hover:opacity-30 translate-y-36 group-hover:-translate-y-12 transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#a3e635] via-[#a2e6357e] to-[#00000000] rounded-full transform rotate-45 scale-110"></div>
                                </div>
                                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[30%] opacity-0 group-hover:opacity-30 translate-y-36 group-hover:-translate-y-12 transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#a3e635] via-[#a2e6357e] to-[#00000000] rounded-full transform rotate-45 scale-150"></div>
                                </div>

                                <span className="relative z-10 text-gray-700">
                                    Join the waitlist
                                </span>
                                <span className="relative z-10 text-lg text-gray-600 group-hover:text-gray-800 group-hover:translate-x-0.5 transition-all duration-300">
                                    <ArrowRight />
                                </span>
                            </Button>
                          </div>
                      </div>
                  </div>

                  {/* Additional Floating Elements */}
                  <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-lime-200/60 to-green-200/10 rounded-2xl border border-white/10 rotate-12 shadow-xl"></div>
                  <div className="absolute bottom-20 right-16 w-24 h-24 bg-gradient-to-br from-lime-200/40 to-lime-200/15 rounded-xl border border-white/10 -rotate-6 shadow-lg"></div>
              </ScrollAnimator>
          </div>
      </section>
  );
}
