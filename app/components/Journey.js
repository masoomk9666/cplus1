"use client";
import { motion } from "framer-motion";

const logos = [
  "Logo Text",
  "Brand Name",
  "Logo Ipsum",
  "Dummy Logo",
  "Digital Dummy",
  "Logo Text",
  "Brand",
];

export default function Journey() {
  return (
    <section className="w-full bg-gradient-to-r from-[#F4FFFB] to-[#F3F8FF] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <p className="text-sm tracking-widest text-gray-500 mb-3">
          JOURNEY OF TRUST AND EXCELLENCE
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-12">
          A Journey of 8 years with 550+ projects <br className="hidden md:block" />
          and 100+ tech partnerships
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#E9FFF7] rounded-xl py-8 shadow-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-[#00B894]">800+</h3>
            <p className="text-gray-600 mt-2">Projects Delivered</p>
          </div>

          <div className="bg-[#EAF4FF] rounded-xl py-8 shadow-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0984E3]">500+</h3>
            <p className="text-gray-600 mt-2">Worldwide Partners</p>
          </div>

          <div className="bg-[#FFF4E6] rounded-xl py-8 shadow-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-[#E17055]">2.5m</h3>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>

          <div className="bg-[#F0EEFF] rounded-xl py-8 shadow-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-[#6C5CE7]">98%</h3>
            <p className="text-gray-600 mt-2">Positive Feedback</p>
          </div>
        </div>
      </div>

      {/* Logo Marquee */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-14 px-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-500 text-lg whitespace-nowrap"
            >
              <span className="text-xl">⬤</span>
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
