"use client"

import React, { useEffect, useRef, useState } from "react"
import { CircleChevronRight } from "lucide-react"
import * as THREE from "three"

const Hero = () => {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    if (!vantaEffect.current) {
      import("vanta/dist/vanta.halo.min").then((VANTA) => {
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0x35ff79,
          // backgroundColor: 0x051c24,
          backgroundColor: 0x051c20,
          amplitudeFactor: 1.1,
          xOffset: 0.30,
        })
      })
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
      }
    }
  }, [])

  return (
    <section
      ref={vantaRef}
      className="relative w-full min-h-screen px-30 overflow-hidden bg-[#051C24]"
    >
      {/* Optional Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_left,_#1e5a66_0%,_transparent_25%)]"></div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto pt-40">
        {/* Heading */}
        <h1 className="text-white text-[64px] font-extrabold tracking-wide mb-5">
          THE FUTURE IS HERE
        </h1>

        {/* Sub Heading */}
        <h2 className="text-gray-200 text-[32px] uppercase tracking-wider mb-6">
          YOUR GLOBAL PARTNER IN SOFTWARE DESIGN
        </h2>

        {/* Description */}
        <div className="flex items-center gap-6 max-w-4xl mb-10">
          <p className="text-gray-300 text-[16px] leading-relaxed w-[85%]">
            In a world of constant change, reinvention is a continuous strategy.
            That’s why we work with organizations to rewrite the rules of growth,
            innovation and resilience.
          </p>
        </div>

        {/* Button */}
        <button className="flex items-center gap-3 bg-white/15 border border-gray-300 text-white px-6 py-2 rounded-full text-[18px] font-[400] hover:bg-[#D0F94A] hover:text-[#051C24] hover:border-[#D0F94A] transition">
          Learn More
          <CircleChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Hero
