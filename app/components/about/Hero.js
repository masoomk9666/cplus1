"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Counter from "../layout/Counter";
import SkShadeBtn from "../layout/SkShadeBtn";

export default function Hero() {
  const MILESTONES = [
    {
      value: 10,
      suffix: "+",
      title: "Years of Experience",
      increment: 1,
    },
    {
      value: 800,
      suffix: "+",
      title: "Projects Delivered",
      increment: 5,
    },
    {
      value: 500,
      suffix: "+",
      title: "Worldwide Clients",
      increment: 10,
    },
    {
      value: 98,
      suffix: "+",
      title: "Positive Feedback",
      increment: 1,
    },
  ];

  /* Typing animation */
  const text =
    "To empower organizations with intelligent, end-to-end digital and AI solutions that streamline operations, accelerate growth, and enable innovation at scale. We aim to turn complex challenges into simple, powerful, and future-ready systems that drive real business impact.";

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div>
      <section className="w-full bg-[#061c1f] text-white py-30">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center ">
          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-[48px] font-semibold"
          >
            About{" "}
            <span className="bg-gradient-to-b from-[#D0F94A] to-[#3CDB9D] bg-clip-text text-transparent">
              Cplus soft
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-4xl mx-auto  md:[18px] text-white"
          >
            Cplus Soft is a Global Technology Partner specializing in AI-Driven
            Software Development, Creative Design, and Digital Transformation
            Solutions. We help startups and enterprises build secure, scalable,
            and intelligent Web and Mobile Products, Advanced Automation Tools,
            and Digital Experiences that drive growth and innovation worldwide.
          </motion.p>
        </div>
      </section>
      <section>
        {/* <div className="max-w-5xl mx-auto -mt-40">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-xs tracking-widest text-gray-400 uppercase text-center"
        >
          Our Milestones
        </motion.h4>

        <div className="mt-6 rounded-xl border border-transparent bg-gradient-to-r from-green-400 to-emerald-500 p-[1px]">
          <div className="bg-[#041417] rounded-xl grid grid-cols-2 md:grid-cols-4 gap-6 py-8">

            {[
              { value: "10+", label: "Years of experience" },
              { value: "800+", label: "Projects Delivered" },
              { value: "500+", label: "Worldwide Clients" },
              { value: "98+", label: "Positive Feedback" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white"
              >
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {item.value}
                </h3>
                <p className="mt-1 text-xs text-gray-400">{item.label}</p>
              </motion.div>
            ))}

          </div>
        </div>
        </div> */}

        <div className="max-w-7xl mx-auto -mt-40">
          {/* Our Milestones */}
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-14 text-[16px] tracking-widest text-white uppercase text-center"
          >
            Our Milestones
          </motion.h4>

          {/* Counters Box */}
          <div className="mt-6 rounded-xl border border-transparent bg-gradient-to-r from-green-400 to-emerald-500 p-[1px]">
            <div className="bg-[#041417] rounded-xl grid grid-cols-2 md:grid-cols-4 gap-1 py-8">
              {MILESTONES.map((item, i) => (
                <Counter
                  key={i}
                  value={item.value}
                  suffix={item.suffix}
                  title={item.title}
                  increment={item.increment}
                  /* Tailwind customization */
                  numberClass="text-2xl md:text-[48px] font-medium text-white"
                  suffixClass="text-white text-[48px]"
                  titleClass="mt-1 text-[16px] text-white"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-white text-black py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[16px] tracking-widest uppercase text-black"
            >
              Our Vision
            </motion.h4>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-[36px] font-normal mb-4"
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </motion.p>

            {/* <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 px-6 py-2 rounded-full bg-[#1f2933] text-white text-sm hover:bg-black transition"
            >
              Access Our Code Of Business Conduct
            </motion.button> */}
            <SkShadeBtn text="Access Our Code Of Business Conduct" shadeWidth="70" />
          </div>
        </div>
      </section>
    </div>
  );
}
