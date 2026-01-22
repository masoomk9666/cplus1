"use client";
import SkShadeBtn from "../layout/SkShadeBtn";

export default function StartupSection() {
  // const cardsData = [
  //   {
  //     id: 1,
  //     title: "1. DISCOVER",
  //     description:
  //       "We help you turn raw ideas into a clear startup blueprint with problem validation, competitor research, roadmap planning, and feature prioritization.",
  //     points: [
  //       "Startup discovery workshops",
  //       "Market and competitor analysis",
  //       "User personas and journey mapping",
  //       "MVP scope and roadmap planning",
  //     ],
  //     bgImage: "/images/startup/01.png",
  //   },
  //   {
  //     id: 2,
  //     title: "2. DESIGN",
  //     description:
  //       "We craft UI/UX, product flows, and clickable prototypes that feel real so you can pitch, test, and iterate before development starts.",
  //     points: [
  //       "UI/UX design (web and mobile)",
  //       "Interactive prototypes (Figma)",
  //       "Product experience mapping",
  //       "AI use-case identification",
  //     ],
  //     bgImage: "/images/startup/02.png",
  //   },
  //   {
  //     id: 3,
  //     title: "3. DEVELOP",
  //     description:
  //       "From MVP development to enterprise-grade systems, our teams engineer your product with modern architecture, automation, and AI capabilities.",
  //     points: [
  //       "MVP to full product development",
  //       "AI solutions (LLMs, chatbots)",
  //       "Cloud, DevOps, security-ready builds",
  //       "QA & performance optimization",
  //     ],
  //     bgImage: "/images/startup/03.png",
  //   },
  //   {
  //     id: 4,
  //     title: "4. LAUNCH & FUND",
  //     description:
  //       "We support startups with marketing execution, traction strategy, pitch readiness, and introductions to funding networks.",
  //     points: [
  //       "Go-to-market strategy",
  //       "Marketing assets and positioning",
  //       "Pitch deck refinement",
  //       "Connections to Angels & VCs",
  //     ],
  //     bgImage: "/images/startup/04.png",
  //   },
  // ];
  return (
    <section className="w-full max-w-7xl  py-25">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <h1 className="text-4xl md:text-[48px] font-[500] text-black max-w-3xl">
          From Idea to Seed Funding — We Build Startups End-to-End
        </h1>

        <SkShadeBtn text="Let's Connect" />
      </div>
      <div className="mt-30">
        <img src="images/startup/01.gif" alt="Startup Discovery" className="w-full h-full object-cover rounded-2xl" /> 
      </div>
    </section>
  );
}
