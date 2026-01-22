"use client"
import React from 'react'
import { motion } from "framer-motion";
import SkShadeBtn from '../layout/SkShadeBtn';

const Cta = () => {
  return (
    <div>
       <section className="w-full  py-10">
      <div
        className="
          relative max-w-7xl mx-auto rounded-3xl overflow-hidden
          bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-cover
        "
        style={{
            backgroundImage: "url(images/about/ctaBg.png)",
            backgroundPosition: "30% 20%"
        }}
      >
        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-lg" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-15">
          
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-[48px] font-medium text-black"
          >
            Let’s Create What’s Next
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="my-6 max-w-3xl text-sm md:text-base lg:text-[18px] text-black"
          >
            Have an idea, a challenge, or a vision to explore? We’re ready to
            collaborate and turn it into something impactful. Let’s start the
            conversation.
          </motion.p>

          {/* Button */}
          <SkShadeBtn title="Connect Now" shadeWidth='20' />

        </div>
      </div>
    </section> 
    </div>
  )
}

export default Cta