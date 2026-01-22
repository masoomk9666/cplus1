"use client";
import { motion } from "framer-motion";
import CultureCarousel from "../layout/CultureCarousel";

export default function CultureSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-widest text-[16px] text-black"
        >
          Our Culture
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-[48px] font-medium mt-4"
        >
          Life At Cplusoft
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="mt-6 max-w-3xl mx-auto text-black text-[18px] "
        >
          At Cplusoft, Life isn’t just about work — it’s about innovation,
          growth, and community. We are a global team of creative thinkers,
          problem-solvers, and technology enthusiasts united by a shared passion
          for building AI-driven products.
        </motion.p>

        {/* Carousel */}
        <CultureCarousel />
      </div>
    </section>
  );
}
