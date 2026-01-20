"use client";
import { ArrowUpRight } from "lucide-react";
import SkShadeBtn from "./layout/SkShadeBtn";

export default function Labs() {
  return (
    <section className="w-full bg-white pt-35 pb-20">
      <div className="max-w-7xl mx-auto ">
        {/* Sub Heading */}
        <p className="text-center text-[16px] tracking-widest text-black mb-3">
          REDEFINING DIGITAL POSSIBILITIES
        </p>

        {/* Main Heading */}
        <h2 className="text-center text-[48px] font-medium mb-12">
          Our Software Development Departments & AI Lab
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.3fr_1fr] gap-4">
          {/* ================= COLUMN 1 ================= */}

          <div className="group relative rounded-2xl p-10 min-h-[600px] bg-gradient-to-r from-[#AEDBC9] to-[#DDF6E4] overflow-hidden">
            <div
              className="absolute inset-0 bg-white/25 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 z-[1]"
            />

            {/* Text Content */}
            <div className="relative z-10">
              <h3 className="text-[20px] uppercase font-medium">Artificial intelligence Lab</h3>

              <p className="text-[16px] text-black mt-3">
                Our Artificial Intelligence Lab is where innovation meets real-world impact. We design, train, and deploy intelligent systems that transform data into actionable insights. From machine learning models to advanced automation and predictive analytics, we help businesses unlock smarter decision-making, optimize operations, and build future-ready digital products powered by AI.
              </p>

              {/* Hover Button */}
              <button className="relative mt-6 opacity-0 group-hover:opacity-100 transition-all duration-900 ease-in-out bg-black text-white p-3 rounded-full">
                <ArrowUpRight size={25} />
                <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-5 h-3 rounded-full bg-white opacity-100 blur-sm pointer-events-none"></span>
              </button>
            </div>

            {/* Background Image */}
            <img
              src="/images/newlab/brain.png"
              className="absolute bottom-0 right-0 w-full group-hover:scale-120 group-hover:bottom-8 z-0 pointer-events-none transition-all duration-600 ease-in-out"
              alt="Brain"
            />
          </div>

          {/* ================= COLUMN 2 ================= */}
          <div className="flex flex-col gap-4">
            {/* Box 1 */}
            <div
              className="group relative rounded-2xl p-10 min-h-[300px] bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: "url('/images/newlab/bg1.png')" }}
            >
              <div
                className="absolute inset-0 bg-white/25 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 z-[1]"
              />
              <h3 className="text-[20px] uppercase font-medium">Automation</h3>

              <div className="relative z-10 opacity-0 group-hover:opacity-100  transition mt-3 transition-all duration-900 ease-in-out">
                <p className="text-[16px] mb-3">
                  Build powerful no-code and low-code automation. Streamline operations, integrate systems, and move faster with smart workflows.
                </p>
                <button className="relative mt-3 opacity-0 group-hover:opacity-100 transition-all duration-900 ease-in-out bg-black text-white p-3 rounded-full">
                <ArrowUpRight size={25} />
                <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-5 h-3 rounded-full bg-white opacity-100 blur-sm pointer-events-none"></span>
              </button>
              </div>

              <img
                src="/images/newlab/automation.png"
                className="absolute -bottom-15 -right-10 w-70 z-0 group-hover:scale-120 group-hover:-right-8 group-hover:-bottom-10  transition-all duration-900 ease-in-out"
                alt=""
              />
            </div>

            {/* Box 2 */}
            <div
              className="group relative rounded-2xl p-10 min-h-[300px] bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: "url('/images/newlab/bg2.png')" }}
            >
              <div
                className="absolute inset-0 bg-white/25 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 z-[1]"
              />
              <h3 className="text-[20px] uppercase font-medium">
                Custom Software Development LAB
              </h3>

              <div className="relative z-10 opacity-0 group-hover:opacity-100  transition mt-3 transition-all duration-900 ease-in-out">
                <p className="text-[16px] mb-3">
                  Tailored software solutions designed to fit your business needs, workflows, and long-term growth.
                </p>
                <button className="relative mt-3 opacity-0 group-hover:opacity-100 transition-all duration-900 ease-in-out bg-black text-white p-3 rounded-full">
                <ArrowUpRight size={25} />
                <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-5 h-3 rounded-full bg-white opacity-100 blur-sm pointer-events-none"></span>
              </button>
              </div>

              <img
                src="/images/newlab/laptop.png"
                className="absolute -bottom-10 -right-10 w-55 z-0 group-hover:scale-120 group-hover:-right-5 transition-all duration-900 ease-in-out"
                alt=""
              />
            </div>
          </div>

          {/* ================= COLUMN 3 ================= */}
          <div className="flex flex-col gap-4">
            {/* Box 1 */}
            <div
              className="group relative rounded-2xl p-10 min-h-[300px] bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: "url('/images/newlab/bg1.png')" }}
            >
              <div
                className="absolute inset-0 bg-white/25 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 z-[1]"
              />
              <h3 className="text-[20px] uppercase font-medium">
                Cyber Security
              </h3>

              <div className="relative z-10 opacity-0 group-hover:opacity-100  transition mt-3 transition-all duration-900 ease-in-out">
                <p className="text-[16px] mb-3">
                  Protect what matters most with real-time threat detection, encrypted access, and proactive security.
                </p>
                <button className="relative mt-3 opacity-0 group-hover:opacity-100 transition-all duration-900 ease-in-out bg-black text-white p-3 rounded-full">
                <ArrowUpRight size={25} />
                <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-5 h-3 rounded-full bg-white opacity-100 blur-sm pointer-events-none"></span>
              </button>
              </div>

              <img
                src="/images/newlab/lock.png"
                className="absolute -bottom-15 -right-12 w-70 z-0 group-hover:scale-120 group-hover:-right-5 transition-all duration-900 ease-in-out"
                alt=""
              />
            </div>

            {/* Box 2 */}
            <div
              className="rounded-2xl p-10 bg-teal-100 min-h-[300px] flex flex-col justify-between bg-cover bg-center"
              style={{ backgroundImage: "url('/images/newlab/bg4.png')" }}
            >
              <p className="text-[16px]">
                Turn complex ideas into powerful digital products. We combine strategy, engineering, and design to create custom software that’s secure, scalable, and built for real-world performance.
              </p>
              <SkShadeBtn text="Lets Connect" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
