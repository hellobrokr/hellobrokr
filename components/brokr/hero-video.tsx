"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"

export function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative w-full max-w-md mx-auto h-[200px] rounded-xl overflow-hidden shadow-neumorphic-card">
      {/* Video Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <img
          src="/placeholder.svg?height=200&width=400&text=brokr+Demo"
          alt="brokr Platform Demo"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-slate-900 transition-transform duration-200 group-hover:scale-110" />
          ) : (
            <Play className="h-5 w-5 text-slate-900 ml-0.5 transition-transform duration-200 group-hover:scale-110" />
          )}
        </button>
      </div>

      {/* Video Stats Overlay */}
      <div className="absolute bottom-3 left-3 right-3">
        <div className="flex justify-center">
          <div className="rounded-md bg-white/90 backdrop-blur-sm px-3 py-1">
            <div className="text-xs font-semibold text-slate-900">60-second demo</div>
          </div>
        </div>
      </div>
    </div>
  )
}
