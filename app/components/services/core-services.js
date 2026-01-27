"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Cpu,
  Bot,
  Sparkles,
  MessageSquare,
  Workflow,
  Shield,
  ArrowRight,
} from "lucide-react";

/* =======================
   Tabs & Services Data
======================= */
const tabs = [
  { label: "AI & Intelligent Systems", key: "ai" },
  { label: "Data & Cloud Engineering", key: "cloud" },
  { label: "Software Development", key: "software" },
  { label: "IT & Security", key: "security" },
];

const services = [
  {
    title: "AI Development Services",
    description: "Est similique tenetur molestiae sit. Repellat et maxime ad alias. Deserunt excepturi aliquam aperiam. Inventore quo sunt.",
    categories: ["Chatbots", "Automation", "Machine Learning", "Neural Networks"],
    icon: Cpu,
    tab: "ai",
  },
  {
    title: "AI Chatbot Development",
    description: "Est similique tenetur molestiae sit. Repellat et maxime ad alias. Deserunt excepturi aliquam aperiam. Inventore quo sunt.",
    categories: ["NLP", "Customer Support", "Voice AI", "24/7 Support"],
    icon: Bot,
    tab: "ai",
  },
  {
    title: "Generative AI Development",
    description: "Est similique tenetur molestiae sit. Repellat et maxime ad alias. Deserunt excepturi aliquam aperiam.",
    categories: ["GenAI", "Content AI", "Creative Models", "DALL-E"],
    icon: Sparkles,
    tab: "ai",
  },
  {
    title: "Cloud Architecture",
    description: "Scalable and secure cloud infrastructure design with high availability.",
    categories: ["AWS", "Azure", "GCP", "DevOps"],
    icon: Workflow,
    tab: "cloud",
  },
  {
    title: "Web Applications",
    description: "High-performance web applications built with modern frameworks.",
    categories: ["React", "Next.js", "Node.js", "Tailwind"],
    icon: MessageSquare,
    tab: "software",
  },
  {
    title: "Cyber Security",
    description: "Advanced threat protection and security compliance for your data.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "security",
  },
];

export default function CoreServices() {
  const [activeTab, setActiveTab] = useState(0);

  const filteredServices = services.filter(
    (service) => service.tab === tabs[activeTab].key
  );

  return (
    <section className="relative py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Our Core Services
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive solutions to power your digital transformation.
          </p>
        </div>

        {/* Tabs - Scrolling enabled for mobile */}
        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 mb-10 md:mb-14 overflow-x-auto pb-4 md:pb-0 scrollbar-hide px-2">
          {tabs.map((tab, index) => (
            <div
              key={tab.key}
              className={`flex-shrink-0 rounded-[10px] p-[2px] transition-all duration-300 ${
                activeTab === index ? "bg-gradient-to-b from-[#D0F94A] to-[#00879F]" : "bg-transparent"
              }`}
            >
              <button
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2 md:px-6 md:py-2.5 rounded-[10px] w-full transition-all duration-300 font-medium text-sm md:text-base whitespace-nowrap ${
                  activeTab === index ? "bg-black text-white" : "bg-[#E3E3E3] text-[#051C24]"
                }`}
              >
                {tab.label}
              </button>
            </div>
          ))}
        </div>

        {/* Cards Grid - Professionally Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 justify-items-center">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-2xl p-[1.5px] overflow-hidden w-full max-w-[416px] h-[325px]"
                style={{ background: 'linear-gradient(to bottom right, #E8FAAA, #3FDC9B)' }}
              >
                <div className="relative w-full h-full bg-white rounded-[calc(1rem-1.5px)] p-6 md:p-8 flex flex-col z-10 overflow-hidden">
                  
                  {/* Hover BG Image */}
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-0 scale-110 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
                    style={{ backgroundImage: "url('/images/cards-bg.png')" }}
                  />

                  <div className="relative z-20 flex flex-col h-full">
                    {/* Icon Box */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#D0F94A] to-[#3CDB9D] mb-5 md:mb-6 transition-all duration-500 group-hover:bg-none group-hover:bg-black">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-white transition-all duration-500" />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 group-hover:text-black">{service.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 flex-grow line-clamp-4 group-hover:text-gray-700">{service.description}</p>

                    {/* Infinite Carousel / Contact Button Toggle */}
                    <div className="relative h-10 mt-auto flex items-center overflow-hidden">
                      
                      {/* 1. SEAMLESS Infinite Carousel */}
                      <div className="flex w-full group-hover:hidden overflow-hidden">
                         <motion.div 
                          className="flex gap-2 whitespace-nowrap"
                          animate={{ x: ["0%", "-50%"] }} // This ensures a perfect seamless loop
                          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                        >
                          {/* We double the list to make it look infinite */}
                          {[...service.categories, ...service.categories].map((cat, i) => (
                            <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-medium rounded-lg bg-[#E2F7F5] text-gray-600">
                              {cat}
                            </span>
                          ))}
                        </motion.div>
                      </div>

                      {/* 2. Contact Us Button */}
                      <div className="absolute inset-0 flex items-center opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        <button className="flex items-center gap-2 bg-black text-white px-5 py-2 md:px-6 md:py-2 rounded-lg text-xs md:text-sm font-semibold ">
                          Contact Us <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}