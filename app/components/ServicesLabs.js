"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SkShadeBtn from "./layout/SkShadeBtn";
import { LuArrowUpRight } from "react-icons/lu";

const LABS = [
  {
    id: 1,
    tab: "FAASIL",
    title: "AI-Powered KSA Excise Compliance",
    icon: "/images/lab/01.svg",
    desc: "Get instant, easy-to-understand answers, compliance clarity, and decision support without spending hours on legal documents or costly consultants.",
    col2Box1Text:
      "A smart legal assistant built for businesses operating under Saudi excise regulations.",
    // col2Box2Img: "/images/lab/col2Box2bg1.png",
    col2Box2Video: "/videos/lab/01.mp4",
    col3Box1Img: "/images/lab/image2.png",
    col3Box2Logo: "/images/lab/logo1.png",
    innerTabs: [
      "Compliance clarity in seconds",
      "Built on the latest law updates",
      "Prevent fines before they happen",
    ],
    innerTabActiveColor: "#3CDB9D59",
    innerFeatures: [
      [
        "Workflow automation",
        "AI-powered bots",
        "Process optimization",
        "Smart decision systems",
      ],
      [
        "Predictive analytics",
        "Recommendation engines",
        "Forecasting models",
        "Risk analysis",
      ],
      [
        "Chatbots & copilots",
        "Text & image generation",
        "LLM fine-tuning",
        "AI content engines",
      ],
    ],
  },
  {
    id: 2,
    tab: "Healix",
    title: "Intelligent Healthcare Operations Assistant",
    icon: "/images/lab/02.svg",
    desc: "Run your clinic on autopilot. Healix handles scheduling, patient communication, billing, reminders, and workflow automation 24/7 to reduce no-shows, cut admin workload, and deliver a seamless patient experience.",
    col2Box1Text:
      "An always-on clinic operations assistant built to automate healthcare administration with speed, accuracy, and seamless integration into your existing systems.",
    // col2Box2Img: "/images/lab/col2Box2bg2.png",
    col2Box2Video: "/videos/lab/02.mp4",
    col3Box1Img: "/images/lab/image3.png",
    col3Box2Logo: "/images/lab/logo2.png",
    innerTabs: [
      "Clinic operations, simplified",
      "24/7 patient coordination",
      "Reduce no-shows. Reduce burnout",
    ],
    innerTabActiveColor: "#95E1E1",
    innerFeatures: [
      [
        "Firewall protection",
        "Threat monitoring",
        "IDS / IPS systems",
        "Secure networking",
      ],
      ["Cloud audits", "IAM security", "Data encryption", "Compliance checks"],
      [
        "Identity verification",
        "Access controls",
        "Continuous validation",
        "Policy enforcement",
      ],
    ],
  },
  {
    id: 3,
    tab: "NUREXA",
    title: "Conversational AI That Connects, Converts & Scales",
    icon: "/images/lab/03.svg",
    desc: "Nurexa is an always-on AI virtual front desk that handles calls, messages, inquiries, and appointment bookings automatically, ensuring you never miss a lead or support request. It integrates seamlessly with your tools and delivers warm, human-like responses that feel personal and trusted.",
    col2Box1Text:
      "A human-like conversational AI assistant built to automate customer communication across calls, chat, website, and apps with memory, intent, and conversion in every interaction.",
    // col2Box2Img: "/images/lab/col2Box2bg3.png",
    col2Box2Video: "/videos/lab/01.mp4",
    col3Box1Img: "/images/lab/image4.png",
    col3Box2Logo: "/images/lab/logo3.png",
    innerTabs: [
      "Never miss a lead",
      "Always-on customer support",
      "Convert conversations into growth",
    ],
    innerTabActiveColor: "#D0F94A",
    innerFeatures: [
      [
        "AR product previews",
        "Mobile AR apps",
        "Interactive overlays",
        "AR marketing",
      ],
      [
        "VR simulations",
        "Training environments",
        "Virtual tours",
        "3D experiences",
      ],
      [
        "NFT platforms",
        "Blockchain apps",
        "Smart contracts",
        "Decentralized systems",
      ],
    ],
  },
  {
    id: 4,
    tab: "Logis AI",
    title: "Optimize Logistics Costs Instantly",
    icon: "/images/lab/04.svg",
    desc: "A smart transport quotation system that generates accurate trucking prices in seconds, streamlines request management, and provides real-time shipment tracking with full transparency across every move.",
    col2Box1Text:
      "An automated pricing and shipment coordination platform built for the speed of the logistics market, eliminating manual follow-ups and reducing delays.",
    // col2Box2Img: "/images/lab/col2Box2bg4.png",
    col2Box2Video: "/videos/lab/02.mp4",
    col3Box1Img: "/images/lab/image5.png",
    col3Box2Logo: "/images/lab/logo4.png",
    innerTabs: [
      "Compliance clarity in seconds",
      "Built on the latest law updates",
      "Prevent fines before they happen",
    ],
    innerTabActiveColor: "#95E1E1",
    innerFeatures: [
      [
        "Next.js & React apps",
        "Scalable backends",
        "API integrations",
        "Modern UI/UX",
      ],
      [
        "Android & iOS apps",
        "Cross-platform builds",
        "App optimization",
        "Store deployment",
      ],
      [
        "ERP systems",
        "CRM solutions",
        "Large-scale systems",
        "Cloud architecture",
      ],
    ],
  },
  {
    id: 5,
    tab: "ALIFOCR",
    title: "Arabic Handwriting to Digital Text",
    icon: "/images/lab/04.svg",
    desc: "Instant AI-powered Arabic handwriting digitization for Saudi students, professionals, and organizations. Convert handwritten notes into clean, editable documents in seconds to boost productivity across education, business, and government.",
    col2Box1Text:
      "A Mena-ready OCR engine built for complex Arabic script, enabling fast digitization of handwritten notes, records, and archives to support paperless workflows.",
    // col2Box2Img: "/images/lab/col2Box2bg5.png",
    col2Box2Video: "/videos/lab/01.mp4",
    col3Box1Img: "/images/lab/image6.png",
    col3Box2Logo: "/images/lab/logo5.png",
    innerTabs: [
      "Handwritten Arabic, digitized instantly",
      "Clean, editable documents in seconds",
      "Built for governments and enterprises",
    ],
    innerTabActiveColor: "#3CDB9D59",
    innerFeatures: [
      [
        "Next.js & React apps",
        "Scalable backends",
        "API integrations",
        "Modern UI/UX",
      ],
      [
        "Android & iOS apps",
        "Cross-platform builds",
        "App optimization",
        "Store deployment",
      ],
      [
        "ERP systems",
        "CRM solutions",
        "Large-scale systems",
        "Cloud architecture",
      ],
    ],
  },
  {
    id: 6,
    tab: "AI LAB",
    title: "Innovating Intelligence. Powering the Future.",
    icon: "/images/lab/04.svg",
    desc: "An advanced AI innovation hub where ideas turn into intelligent digital solutions.Our AI Lab designs, trains, and deploys custom AI models that solve real business problems across industries.Built for enterprises, startups, and governments, we specialize in Machine Learning, Generative AI, NLP, and Computer Vision.From experimentation to production-ready systems, we help organizations scale with confidence. Accelerate digital transformation with responsible, secure, and scalable AI—engineered for real-world impact.",
    col2Box1Text:
      "A future-ready AI Lab focused on research, prototyping, and deployment of intelligent systems. We help businesses automate decisions, extract insights from data, and build AI-driven products faster and smarter.",
    // col2Box2Img: "/images/lab/col2Box2bg5.png",
    col2Box2Video: "/videos/lab/03.mp4",
    col3Box1Img: "/images/lab/image6.png",
    col3Box2Logo: "/images/lab/logo5.png",
    innerTabs: [
      "Handwritten Arabic, digitized instantly",
      "Clean, editable documents in seconds",
      "Built for governments and enterprises",
    ],
    innerTabActiveColor: "#D0F94A",
  },
];

const EXPLORE_MORE_URL = "/services";

export default function ServicesLabs() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(0);
  const [innerTab, setInnerTab] = useState(0);
  const [progress, setProgress] = useState(0);

  // const LAST_DATA_INDEX = LABS.length - 1;

  /* Parent Tab Auto Change */
  useEffect(() => {
    const interval = setInterval(() => {
      // setActiveTab((prev) => (prev >= LAST_DATA_INDEX ? 0 : prev + 1));
      setActiveTab((prev) => (prev + 1) % LABS.length);
      setInnerTab(0);
      setProgress(0);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* Inner Tabs Auto Loop */
  useEffect(() => {
    const current = LABS[activeTab];
    if (!current?.innerTabs?.length) return;

    const innerInterval = setInterval(() => {
      setInnerTab((prev) => (prev + 1) % current.innerTabs.length);
    }, 2000);

    return () => clearInterval(innerInterval);
  }, [activeTab]);

  /* Progress Line */
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1.2));
    }, 50);

    return () => clearInterval(timer);
  }, [activeTab]);

  const lab = LABS[activeTab];
  const isLastItem = Array.isArray(LABS) && activeTab === LABS.length - 1;

  return (
    <section className="max-w-7xl mx-auto py-20">
      <p className="text-[16.3px] uppercase tracking-widest text-black text-center">
        Built In-House. Scaled for the Future
      </p>

      <h2 className="text-[45px] font-[500] text-center mt-2">
        Our In-House Digital Innovations
      </h2>

      {/* Tabs */}
      {/* <div className="flex justify-center gap-2 mt-6 flex-wrap">
        {LABS.map((item, index) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(index);
              setInnerTab(0);
              setProgress(0);
            }}
            className={`px-7 py-2 rounded-lg border border-gray-200 text-[18px] uppercase transition
              ${
                activeTab === index
                  ? "bg-[#D0F94A] text-black"
                  : "bg-white text-black"
              }`}
          >
            {item.tab}
          </button>
        ))}
        <button
          onClick={() => router.push(EXPLORE_MORE_URL)}
          className="relative px-7 py-2 rounded-lg border border-gray-200 text-[18px] uppercase bg-white text-black overflow-hidden"
        >
          Explore More
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-40 h-4 bg-green-400 blur-xl opacity-90 rounded-full"></span>
        </button>
      </div> */}
      <div className="flex justify-center gap-2 mt-6 flex-wrap">
        {LABS.map((item, index) => {
          const isLastTab = index === LABS.length - 1;

          if (isLastTab) {
            return (
              <div
                key={item.id}
                className="p-[1px] rounded-lg"
                style={{
                  background: "linear-gradient(90deg, #D0F94A, #00687B)",
                }}
              >
                <button
                  onClick={() => {
                    setActiveTab(index);
                    setInnerTab(0);
                    setProgress(0);
                  }}
                  className={`px-7 py-[10px] rounded-lg  text-[16px] uppercase cursor-pointer transition
          ${
            activeTab === index
              ? "bg-[#D0F94A] text-black"
              : "bg-white text-black"
          }`}
                >
                  {item.tab}
                </button>
              </div>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(index);
                setInnerTab(0);
                setProgress(0);
              }}
              className={`px-7 py-2 rounded-lg border border-gray-200 text-[16px] uppercase cursor-pointer transition
          ${
            activeTab === index
              ? "bg-[#D0F94A] text-black"
              : "bg-white text-black"
          }`}
            >
              {item.tab}
            </button>
          );
        })}

        <button
          onClick={() => router.push(EXPLORE_MORE_URL)}
          className="relative px-4 py-2 rounded-lg border border-gray-200 text-[18px] uppercase bg-black text-white overflow-hidden cursor-pointer"
        >
          <LuArrowUpRight size={25} />
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-40 h-4 bg-white blur-sm opacity-100 rounded-full"></span>
        </button>
      </div>

      {/* Main Grid */}

      {isLastItem ? (
        /* ✅ LAST ITEM VIEW (ONLY H1) */
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.2fr_1fr] gap-3 mt-6">
          {/* Column 1 */}
          <div className="bg-gradient-to-b from-[#3CDB9D] to-[#D0F94A] p-[2px] rounded-lg">
            
            <div
              className="relative bg-white border border-gray-200 rounded-lg p-10 flex flex-col justify-start gap-6 h-full bg-cover bg-center"
              style={{ backgroundImage: `url(images/lab/lastItemCol1bg.png)` }}
            >
              <div className="flex flex-col gap-4 items-start">
                <h3 className="text-[26px] font-semibold">{lab.title}</h3>
              </div>

              <p className="text-[16px] text-black">{lab.desc}</p>
              <SkShadeBtn text="Learn More" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="grid gap-3">
            <div className="relative bg-gradient-to-b from-[#051C24] to-[#D0F94A] rounded-2xl p-10 text-center h-[300px] overflow-hidden">
              <div className="absolute bg-black/20" />
              <span className="text-[16px] text-white z-10">{lab.col2Box1Text}</span>
              <img
                className="absolute w-90 -bottom-1 right-6"
                src="/images/lab/lastItemCol2Box1Icon.png"
                alt="AI"
              />
            </div>

            {/* INNER TABS */}
            <div
              className="relative flex flex-col justify-center items-center border border-gray-200 rounded-lg p-6 h-[300px] overflow-hidden space-y-3"
              // style={{
              //   backgroundImage: `url(images/lab/lastItemCol2Box2bg.png)`,
              // }}
            >
              <video
                key={lab.col2Box2Video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={lab.col2Box2Video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/20 h-full" />

              <div className="relative z-10 w-full flex flex-col space-y-3">
                {(() => {
                  const total = lab.innerTabs.length;
                  const prev = (innerTab - 1 + total) % total;
                  const next = (innerTab + 1) % total;

                  const visibleTabs = [
                    { label: lab.innerTabs[prev], index: prev },
                    { label: lab.innerTabs[innerTab], index: innerTab },
                    { label: lab.innerTabs[next], index: next },
                  ];

                  return visibleTabs.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => setInnerTab(item.index)}
                      className={`px-4 py-3 rounded-lg text-[18px] text-center cursor-pointer
                ${item.index === innerTab ? "opacity-100" : "opacity-60"}`}
                      style={{
                        backgroundColor:
                          item.index === innerTab
                            ? lab.innerTabActiveColor
                            : "#EFF7EB",
                      }}
                    >
                      {item.label}
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="relative grid gap-3 w-full h-full rounded-2xl overflow-hidden">
            <video
              key={lab.col2Box2Video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={lab.col2Box2Video} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      ) : (
        /* ✅ NORMAL ITEMS VIEW (FULL GRID) */
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.2fr_1fr] gap-3 mt-6">
          {/* Column 1 */}
          <div className="bg-gradient-to-b from-[#3CDB9D] to-[#D0F94A] p-[2px] rounded-lg">
            <div className="bg-white border border-gray-200 rounded-lg p-10 flex flex-col justify-start gap-6 h-full">
              <div className="flex flex-col gap-4 items-start">
                <h3 className="text-[26px] font-semibold">{lab.title}</h3>
              </div>

              <p className="text-[16px] text-black">{lab.desc}</p>
              <SkShadeBtn text="Learn More" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="grid gap-3">
            <div className="relative bg-[#EFF7EB] rounded-2xl p-10 text-center h-[300px] overflow-hidden">
              <span className="text-[16px] text-black">{lab.col2Box1Text}</span>
              <img
                className="absolute w-90 -bottom-1 right-6"
                src="/images/lab/col2Box1Icon.png"
                alt="AI"
              />
            </div>

            {/* INNER TABS */}
            <div className="relative flex flex-col justify-center items-center border border-gray-200 rounded-lg p-6 h-[300px] overflow-hidden space-y-3">
              <video
                key={lab.col2Box2Video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={lab.col2Box2Video} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-white/30 h-full" />

              <div className="relative z-10 w-full flex flex-col space-y-3">
                {(() => {
                  const total = lab.innerTabs.length;
                  const prev = (innerTab - 1 + total) % total;
                  const next = (innerTab + 1) % total;

                  const visibleTabs = [
                    { label: lab.innerTabs[prev], index: prev },
                    { label: lab.innerTabs[innerTab], index: innerTab },
                    { label: lab.innerTabs[next], index: next },
                  ];

                  return visibleTabs.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => setInnerTab(item.index)}
                      className={`px-4 py-3 rounded-lg text-[18px] text-center cursor-pointer
                ${item.index === innerTab ? "opacity-100" : "opacity-60"}`}
                      style={{
                        backgroundColor:
                          item.index === innerTab
                            ? lab.innerTabActiveColor
                            : "#EFF7EB",
                      }}
                    >
                      {item.label}
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="grid gap-3">
            <div
              className="rounded-2xl h-[300px] bg-cover bg-center"
              style={{ backgroundImage: `url(${lab.col3Box1Img})` }}
            />

            <div className="bg-[#EFF7EB] rounded-2xl p-8 h-[300px] flex items-center">
              <img src={lab.col3Box2Logo} alt="Logo" className="mx-auto" />
            </div>
          </div>
        </div>
      )}

      {/* <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.2fr_1fr] gap-3 mt-6">
        <div className="bg-gradient-to-b from-[#3CDB9D] to-[#D0F94A] p-[2px] rounded-lg">
          <div className="bg-white border border-gray-200 rounded-lg p-10 flex flex-col justify-start gap-6 h-full">
            <div className="flex flex-col gap-4 items-start">
              <h3 className="text-[26px] font-semibold">{lab.title}</h3>
            </div>

            <p className="text-[16px] text-black">{lab.desc}</p>
            <SkShadeBtn text="Learn More" />
          </div>
        </div>
        <div className="grid gap-3">
          <div className="relative bg-[#EFF7EB] rounded-2xl p-10 text-center h-[300px] overflow-hidden">
            <span className="text-[16px] text-black text-center">
              {lab.col2Box1Text}
            </span>
            <img
              className="absolute w-90 -bottom-1 right-6"
              src="/images/lab/col2Box1Icon.png"
              alt="AI"
            />
          </div>

          <div className="relative flex flex-col justify-center items-center border border-gray-200 rounded-lg p-6 h-[300px] overflow-hidden space-y-3">
            
            <video
            key={lab.col2Box2Video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={lab.col2Box2Video} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-white/30 h-full"
 />

            <div className="relative z-10 w-full flex flex-col space-y-3">
              {(() => {
                const total = lab.innerTabs.length;
                const prev = (innerTab - 1 + total) % total;
                const next = (innerTab + 1) % total;

                const visibleTabs = [
                  { label: lab.innerTabs[prev], index: prev, position: "top" },
                  {
                    label: lab.innerTabs[innerTab],
                    index: innerTab,
                    position: "center",
                  },
                  {
                    label: lab.innerTabs[next],
                    index: next,
                    position: "bottom",
                  },
                ];

                return visibleTabs.map((item) => (
                  <div
                    key={item.index}
                    onClick={() => setInnerTab(item.index)}
                    className={`px-4 py-3 rounded-lg text-[18px] text-center cursor-pointer transition-all duration-700
            ${
              item.position === "center"
                ? "text-black w-full scale-100 opacity-100"
                : "text-black w-full scale-95 opacity-60"
            }`}
                    style={{
                      backgroundColor:
                        item.position === "center"
                          ? lab.innerTabActiveColor
                          : "#EFF7EB",
                    }}
                  >
                    {item.label}
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          <div
            className="rounded-2xl h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${lab.col3Box1Img})` }}
          />

          <div className="bg-[#EFF7EB] rounded-2xl p-8 h-[300px] flex items-center">
            <img
              src={lab.col3Box2Logo}
              alt="Logo"
              className="mx-auto w-[fit-content] "
            />
          </div>
        </div>
      </div> */}

      {/* Progress Line */}
      <div className="mt-10 h-[4px] bg-gray-200 relative overflow-hidden">
        <span
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#D0F94A] to-[#3CDB9D]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}
