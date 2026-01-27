// "use client";

// import { useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import SkShadeBtn from "../layout/SkShadeBtn";
// import { LuArrowUpRight } from "react-icons/lu";

// const LABS = [
//   {
//     id: 1,
//     tab: "FAASIL",
//     title: "AI-Powered KSA Excise Compliance",
//     icon: "/images/lab/01.svg",
//     desc: "Get instant, easy-to-understand answers, compliance clarity, and decision support without spending hours on legal documents or costly consultants.",
//     col2Box1Text:
//       "A smart legal assistant built for businesses operating under Saudi excise regulations.",
//     col2Box2Video: "/videos/lab/01.mp4",
//     col3Box1Img: "/images/lab/image2.png",
//     col3Box2Logo: "/images/lab/logo1.png",
//     innerTabs: [
//       "Compliance clarity in seconds",
//       "Built on the latest law updates",
//       "Prevent fines before they happen",
//     ],
//     innerTabActiveColor: "#3CDB9D59",
//     innerFeatures: [
//       [
//         "Workflow automation",
//         "AI-powered bots",
//         "Process optimization",
//         "Smart decision systems",
//       ],
//       [
//         "Predictive analytics",
//         "Recommendation engines",
//         "Forecasting models",
//         "Risk analysis",
//       ],
//       [
//         "Chatbots & copilots",
//         "Text & image generation",
//         "LLM fine-tuning",
//         "AI content engines",
//       ],
//     ],
//   },
//   {
//     id: 2,
//     tab: "Healix",
//     title: "Intelligent Healthcare Operations Assistant",
//     icon: "/images/lab/02.svg",
//     desc: "Run your clinic on autopilot. Healix handles scheduling, patient communication, billing, reminders, and workflow automation 24/7 to reduce no-shows, cut admin workload, and deliver a seamless patient experience.",
//     col2Box1Text:
//       "An always-on clinic operations assistant built to automate healthcare administration with speed, accuracy, and seamless integration into your existing systems.",
//     col2Box2Video: "/videos/lab/02.mp4",
//     col3Box1Img: "/images/lab/image3.png",
//     col3Box2Logo: "/images/lab/logo2.png",
//     innerTabs: [
//       "Clinic operations, simplified",
//       "24/7 patient coordination",
//       "Reduce no-shows. Reduce burnout",
//     ],
//     innerTabActiveColor: "#95E1E1",
//     innerFeatures: [
//       [
//         "Firewall protection",
//         "Threat monitoring",
//         "IDS / IPS systems",
//         "Secure networking",
//       ],
//       ["Cloud audits", "IAM security", "Data encryption", "Compliance checks"],
//       [
//         "Identity verification",
//         "Access controls",
//         "Continuous validation",
//         "Policy enforcement",
//       ],
//     ],
//   },
//   {
//     id: 3,
//     tab: "NUREXA",
//     title: "Conversational AI That Connects, Converts & Scales",
//     icon: "/images/lab/03.svg",
//     desc: "Nurexa is an always-on AI virtual front desk that handles calls, messages, inquiries, and appointment bookings automatically, ensuring you never miss a lead or support request. It integrates seamlessly with your tools and delivers warm, human-like responses that feel personal and trusted.",
//     col2Box1Text:
//       "A human-like conversational AI assistant built to automate customer communication across calls, chat, website, and apps with memory, intent, and conversion in every interaction.",
//     col2Box2Video: "/videos/lab/01.mp4",
//     col3Box1Img: "/images/lab/image4.png",
//     col3Box2Logo: "/images/lab/logo3.png",
//     innerTabs: [
//       "Never miss a lead",
//       "Always-on customer support",
//       "Convert conversations into growth",
//     ],
//     innerTabActiveColor: "#D0F94A",
//     innerFeatures: [
//       [
//         "AR product previews",
//         "Mobile AR apps",
//         "Interactive overlays",
//         "AR marketing",
//       ],
//       [
//         "VR simulations",
//         "Training environments",
//         "Virtual tours",
//         "3D experiences",
//       ],
//       [
//         "NFT platforms",
//         "Blockchain apps",
//         "Smart contracts",
//         "Decentralized systems",
//       ],
//     ],
//   },
//   {
//     id: 4,
//     tab: "Logis AI",
//     title: "Optimize Logistics Costs Instantly",
//     icon: "/images/lab/04.svg",
//     desc: "A smart transport quotation system that generates accurate trucking prices in seconds, streamlines request management, and provides real-time shipment tracking with full transparency across every move.",
//     col2Box1Text:
//       "An automated pricing and shipment coordination platform built for the speed of the logistics market, eliminating manual follow-ups and reducing delays.",
//     col2Box2Video: "/videos/lab/02.mp4",
//     col3Box1Img: "/images/lab/image5.png",
//     col3Box2Logo: "/images/lab/logo4.png",
//     innerTabs: [
//       "Compliance clarity in seconds",
//       "Built on the latest law updates",
//       "Prevent fines before they happen",
//     ],
//     innerTabActiveColor: "#95E1E1",
//     innerFeatures: [
//       [
//         "Next.js & React apps",
//         "Scalable backends",
//         "API integrations",
//         "Modern UI/UX",
//       ],
//       [
//         "Android & iOS apps",
//         "Cross-platform builds",
//         "App optimization",
//         "Store deployment",
//       ],
//       [
//         "ERP systems",
//         "CRM solutions",
//         "Large-scale systems",
//         "Cloud architecture",
//       ],
//     ],
//   },
//   {
//     id: 5,
//     tab: "ALIFOCR",
//     title: "Arabic Handwriting to Digital Text",
//     icon: "/images/lab/04.svg",
//     desc: "Instant AI-powered Arabic handwriting digitization for Saudi students, professionals, and organizations. Convert handwritten notes into clean, editable documents in seconds to boost productivity across education, business, and government.",
//     col2Box1Text:
//       "A Mena-ready OCR engine built for complex Arabic script, enabling fast digitization of handwritten notes, records, and archives to support paperless workflows.",
//     col2Box2Video: "/videos/lab/01.mp4",
//     col3Box1Img: "/images/lab/image6.png",
//     col3Box2Logo: "/images/lab/logo5.png",
//     innerTabs: [
//       "Handwritten Arabic, digitized instantly",
//       "Clean, editable documents in seconds",
//       "Built for governments and enterprises",
//     ],
//     innerTabActiveColor: "#3CDB9D59",
//     innerFeatures: [
//       [
//         "Next.js & React apps",
//         "Scalable backends",
//         "API integrations",
//         "Modern UI/UX",
//       ],
//       [
//         "Android & iOS apps",
//         "Cross-platform builds",
//         "App optimization",
//         "Store deployment",
//       ],
//       [
//         "ERP systems",
//         "CRM solutions",
//         "Large-scale systems",
//         "Cloud architecture",
//       ],
//     ],
//   },
//   {
//     id: 6,
//     tab: "AI LAB",
//     title: "Innovating Intelligence. Powering the Future.",
//     icon: "/images/lab/04.svg",
//     desc: "An advanced AI innovation hub where ideas turn into intelligent digital solutions.Our AI Lab designs, trains, and deploys custom AI models that solve real business problems across industries.Built for enterprises, startups, and governments, we specialize in Machine Learning, Generative AI, NLP, and Computer Vision.From experimentation to production-ready systems, we help organizations scale with confidence. Accelerate digital transformation with responsible, secure, and scalable AI—engineered for real-world impact.",
//     col2Box1Text:
//       "A future-ready AI Lab focused on research, prototyping, and deployment of intelligent systems. We help businesses automate decisions, extract insights from data, and build AI-driven products faster and smarter.",
//     col2Box2Video: "/videos/lab/04.mov",
//     col3Box1Img: "/images/lab/image6.png",
//     col3Box2Logo: "/images/lab/logo5.png",
//     col3Video: "/videos/lab/05.mp4",
//     innerTabs: [
//       "Handwritten Arabic, digitized instantly",
//       "Clean, editable documents in seconds",
//       "Built for governments and enterprises",
//     ],
//     innerTabActiveColor: "#3CDB9D",
//   },
// ];

// const EXPLORE_MORE_URL = "/services";

// export default function ServicesLabs() {
//   const router = useRouter();

//   const [activeTab, setActiveTab] = useState(0);
//   const [innerTab, setInnerTab] = useState(0);
//   const [progress, setProgress] = useState(0);
  
//   // Use refs to store interval IDs
//   const parentTabIntervalRef = useRef(null);
//   const innerTabIntervalRef = useRef(null);
//   const progressIntervalRef = useRef(null);

//   // Function to clear all intervals
//   const clearAllIntervals = () => {
//     if (parentTabIntervalRef.current) {
//       clearInterval(parentTabIntervalRef.current);
//       parentTabIntervalRef.current = null;
//     }
//     if (innerTabIntervalRef.current) {
//       clearInterval(innerTabIntervalRef.current);
//       innerTabIntervalRef.current = null;
//     }
//     if (progressIntervalRef.current) {
//       clearInterval(progressIntervalRef.current);
//       progressIntervalRef.current = null;
//     }
//   };

//   // Function to start all intervals from scratch
//   const startAllIntervals = () => {
//     // Clear existing intervals first
//     clearAllIntervals();
    
//     // Reset progress
//     setProgress(0);
    
//     // Start parent tab interval (5 seconds)
//     parentTabIntervalRef.current = setInterval(() => {
//       setActiveTab((prev) => (prev + 1) % LABS.length);
//       setInnerTab(0);
//     }, 5000);

//     // Start inner tabs interval (2 seconds)
//     const current = LABS[activeTab];
//     if (current?.innerTabs?.length) {
//       innerTabIntervalRef.current = setInterval(() => {
//         setInnerTab((prev) => (prev + 1) % current.innerTabs.length);
//       }, 2000);
//     }

//     // Start progress line interval (resets every 5 seconds)
//     progressIntervalRef.current = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           return 0; // Reset when reaches 100%
//         }
//         return prev + (100 / (5000 / 50)); // Calculate increment for 5 seconds
//       });
//     }, 50);
//   };

//   // Initialize intervals on mount
//   useEffect(() => {
//     startAllIntervals();
    
//     // Cleanup on unmount
//     return () => clearAllIntervals();
//   }, []);

//   // Restart intervals when activeTab changes (except when triggered by interval itself)
//   useEffect(() => {
//     // Restart inner tab interval for new active tab
//     if (innerTabIntervalRef.current) {
//       clearInterval(innerTabIntervalRef.current);
//     }
    
//     const current = LABS[activeTab];
//     if (current?.innerTabs?.length) {
//       innerTabIntervalRef.current = setInterval(() => {
//         setInnerTab((prev) => (prev + 1) % current.innerTabs.length);
//       }, 2000);
//     }
//   }, [activeTab]);

//   // Handle tab click with interval reset
//   const handleTabClick = (index) => {
//     setActiveTab(index);
//     setInnerTab(0);
//     setProgress(0);
//     startAllIntervals(); // Restart all intervals from scratch
//   };

//   const lab = LABS[activeTab];
//   const isLastItem = Array.isArray(LABS) && activeTab === LABS.length - 1;

//   return (
//     <section className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-0">
//       <p className="text-[12px] sm:text-[14px] md:text-[16.3px] uppercase tracking-widest text-black text-center">
//         Built In-House. Scaled for the Future
//       </p>

//       <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[500] text-center mt-2 leading-tight md:leading-normal">
//         Our In-House Digital Innovations
//       </h2>

//       {/* Tabs - Responsive */}
//       <div className="flex justify-center gap-2 mt-4 sm:mt-6 flex-wrap px-2">
//         {LABS.map((item, index) => {
//           const isLastTab = index === LABS.length - 1;

//           if (isLastTab) {
//             return (
//               <div
//                 key={item.id}
//                 className="p-[1px] rounded-lg"
//                 style={{
//                   background: "linear-gradient(90deg, #D0F94A, #00687B)",
//                 }}
//               >
//                 <button
//                   onClick={() => handleTabClick(index)}
//                   className={`px-4 sm:px-5 md:px-7 py-[8px] sm:py-[10px] rounded-lg text-[12px] sm:text-[14px] md:text-[16px] uppercase cursor-pointer transition
//                     ${
//                       activeTab === index
//                         ? "bg-black text-white"
//                         : "bg-white text-black"
//                     }`}
//                 >
//                   {item.tab}
//                 </button>
//               </div>
//             );
//           }

//           return (
//             <button
//               key={item.id}
//               onClick={() => handleTabClick(index)}
//               className={`px-4 sm:px-5 md:px-7 py-1.5 sm:py-2 rounded-lg border border-gray-200 text-[12px] sm:text-[14px] md:text-[16px] uppercase cursor-pointer transition
//                 ${
//                   activeTab === index
//                     ? "bg-[#D0F94A] text-black"
//                     : "bg-white text-black"
//                 }`}
//             >
//               {item.tab}
//             </button>
//           );
//         })}

//         <button
//           onClick={() => router.push(EXPLORE_MORE_URL)}
//           className="relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-200 text-[14px] sm:text-[16px] md:text-[18px] uppercase bg-black text-white overflow-hidden cursor-pointer flex items-center justify-center"
//         >
//           {/* Icon with wrapper for responsive sizing */}
//           <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center">
//             <LuArrowUpRight className="w-full h-full" />
//           </div>
//           <span className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-20 sm:w-32 md:w-40 h-2 sm:h-3 md:h-4 bg-white blur-sm opacity-100 rounded-full"></span>
//         </button>
//       </div>

//       {/* Main Grid - Responsive */}
//       {isLastItem ? (
//         /* ✅ LAST ITEM VIEW (ONLY H1) - Responsive */
//         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.5fr_1.2fr_1fr] gap-3 sm:gap-4 mt-4 sm:mt-6">
//           {/* Column 1 */}
//           <div className="bg-gradient-to-b from-[#3CDB9D] to-[#D0F94A] p-[1px] sm:p-[2px] rounded-lg col-span-1 lg:col-span-2 xl:col-span-1">
//             <div
//               className="relative bg-white border border-gray-200 rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-start gap-4 sm:gap-6 h-full bg-cover bg-center"
//               style={{ backgroundImage: `url(images/lab/lastItemCol1bg1.png)` }}
//             >
//               <div className="flex flex-col gap-3 sm:gap-4 items-start">
//                 <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-semibold">
//                   {lab.title}
//                 </h3>
//               </div>

//               <p className="text-[14px] sm:text-[15px] md:text-[16px] text-black">
//                 {lab.desc}
//               </p>
//               <div className="mt-2 sm:mt-4">
//                 <SkShadeBtn text="Learn More" />
//               </div>
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-1 lg:col-span-1">
//             <div className="relative bg-gradient-to-b from-[#6FD2CB] to-[#B2F1BA] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center h-[250px] sm:h-[250px] md:h-[300px] overflow-hidden">
//               <div className="absolute bg-black/20" />
//               <span className="text-[14px] sm:text-[15px] md:text-[16px]  z-10">
//                 {lab.col2Box1Text}
//               </span>
//               <img
//                 className="absolute w-80 sm:w-60 md:w-full lg:w-80 xl:w-90 -bottom-1 right-2 sm:right-4 md:right-6"
//                 src="/images/lab/lastItemCol2Box1Icon.png"
//                 alt="AI"
//               />
//             </div>

//             {/* INNER TABS */}
//             <div className="relative flex flex-col justify-center items-center border border-gray-200 rounded-xl sm:rounded-lg p-4 sm:p-6 h-[250px] sm:h-[250px] md:h-[300px] overflow-hidden space-y-2 sm:space-y-3">
//               {/* Background Video */}
//               <video
//                 key={lab.col2Box2Video}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="absolute inset-0 w-full h-full object-cover"
//               >
//                 <source src={lab.col2Box2Video} type="video/mp4" />
//               </video>

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-white/30 h-full" />

//               {/* Tabs */}
//               <div className="relative z-10 w-full flex flex-col space-y-2 sm:space-y-3">
//                 {lab.innerTabs.map((label, index) => (
//                   <div
//                     key={index}
//                     onClick={() => setInnerTab(index)}
//                     className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-[14px] sm:text-[16px] md:text-[16px] text-center cursor-pointer transition-all duration-300
//               ${index === innerTab ? "opacity-100" : "opacity-60"}`}
//                     style={{
//                       backgroundColor:
//                         index === innerTab
//                           ? lab.innerTabActiveColor
//                           : "#EFF7EB",
//                     }}
//                   >
//                     {label}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Column 3 */}
//           <div className="relative grid gap-3  sm:gap-4 w-full h-[250px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[calc(300px+300px+15px)] rounded-xl sm:rounded-2xl overflow-hidden lg:col-span-1 xl:col-span-1">
//             <video
//               key={lab.col2Box2Video}
//               autoPlay
//               muted
//               loop
//               playsInline
//               preload="auto"
//               className="absolute inset-0 w-full h-full object-cover"
//             >
//               <source src={lab.col3Video} type="video/mp4" />
//             </video>

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/20" />
//           </div>
//         </div>
//       ) : (
//         /* ✅ NORMAL ITEMS VIEW (FULL GRID) - Responsive */
//         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.5fr_1.2fr_1fr] gap-3 sm:gap-4 mt-4 sm:mt-6">
//           {/* Column 1 */}
//           <div className="bg-gradient-to-b from-[#3CDB9D] to-[#D0F94A] p-[1px] sm:p-[2px] rounded-lg col-span-1 lg:col-span-2 xl:col-span-1">
//             <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-start gap-4 sm:gap-6 h-full">
//               <div className="flex flex-col gap-3 sm:gap-4 items-start">
//                 <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-semibold">
//                   {lab.title}
//                 </h3>
//               </div>

//               <p className="text-[14px] sm:text-[15px] md:text-[16px] text-black">
//                 {lab.desc}
//               </p>
//               <div className="mt-2 sm:mt-4">
//                 <SkShadeBtn text="Learn More" />
//               </div>
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-1 lg:col-span-1">
//             <div className="relative bg-[#EFF7EB] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center h-[250px] sm:h-[250px] md:h-[300px] overflow-hidden">
//               <span className="text-[14px] sm:text-[15px] md:text-[16px] text-black">
//                 {lab.col2Box1Text}
//               </span>
//               <img
//                 className="absolute w-80 sm:w-60 md:w-full lg:w-80 xl:w-90 -bottom-1 right-2 sm:right-4 md:right-6"
//                 src="/images/lab/col2Box1Icon.png"
//                 alt="AI"
//               />
//             </div>

//             {/* INNER TABS */}
//             <div className="relative flex flex-col justify-center items-center border border-gray-200 rounded-xl sm:rounded-lg p-4 sm:p-6 h-[250px] sm:h-[250px] md:h-[300px] overflow-hidden space-y-2 sm:space-y-3">
//               {/* Background Video */}
//               <video
//                 key={lab.col2Box2Video}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="absolute inset-0 w-full h-full object-cover"
//               >
//                 <source src={lab.col2Box2Video} type="video/mp4" />
//               </video>

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-white/30 h-full" />

//               {/* Tabs */}
//               <div className="relative z-10 w-full flex flex-col space-y-2 sm:space-y-3">
//                 {lab.innerTabs.map((label, index) => (
//                   <div
//                     key={index}
//                     onClick={() => setInnerTab(index)}
//                     className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-[14px] sm:text-[16px] md:text-[16px] text-center cursor-pointer transition-all duration-300
//               ${index === innerTab ? "opacity-100" : "opacity-60"}`}
//                     style={{
//                       backgroundColor:
//                         index === innerTab
//                           ? lab.innerTabActiveColor
//                           : "#EFF7EB",
//                     }}
//                   >
//                     {label}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Column 3 */}
//           <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-1 lg:col-span-1">
//             <div
//               className="rounded-xl sm:rounded-2xl h-[250px] sm:h-[250px] md:h-[300px] bg-cover bg-center"
//               style={{ backgroundImage: `url(${lab.col3Box1Img})` }}
//             />

//             <div className="bg-[#EFF7EB] rounded-xl sm:rounded-2xl p-6 sm:p-8 h-[250px] sm:h-[250px] md:h-[300px] flex items-center">
//               <img
//                 src={lab.col3Box2Logo}
//                 alt="Logo"
//                 className="mx-auto w-32 sm:w-40 md:w-48 lg:w-auto"
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Progress Line */}
//       <div className="mt-6 sm:mt-8 md:mt-10 h-[3px] sm:h-[4px] bg-gray-200 relative overflow-hidden">
//         <span
//           className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#D0F94A] to-[#3CDB9D]"
//           style={{ width: `${progress}%` }}
//         />
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import SkShadeBtn from "../layout/SkShadeBtn";
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
    col2Box2Video: "/videos/lab/04.mov",
    col3Box1Img: "/images/lab/image6.png",
    col3Box2Logo: "/images/lab/logo5.png",
    col3Video: "/videos/lab/05.mp4",
    innerTabs: [
      "Handwritten Arabic, digitized instantly",
      "Clean, editable documents in seconds",
      "Built for governments and enterprises",
    ],
    innerTabActiveColor: "#3CDB9D",
  },
];

const EXPLORE_MORE_URL = "/services";

export default function ServicesLabs() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(0);
  const [innerTab, setInnerTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Use refs to store interval IDs
  const parentTabIntervalRef = useRef(null);
  const innerTabIntervalRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const remainingTimeRef = useRef(5000); // 5 seconds total

  // Function to clear all intervals
  const clearAllIntervals = () => {
    if (parentTabIntervalRef.current) {
      clearInterval(parentTabIntervalRef.current);
      parentTabIntervalRef.current = null;
    }
    if (innerTabIntervalRef.current) {
      clearInterval(innerTabIntervalRef.current);
      innerTabIntervalRef.current = null;
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  // Calculate progress based on elapsed time
  const calculateProgress = () => {
    if (!startTimeRef.current) return 0;
    
    const elapsedTime = Date.now() - startTimeRef.current;
    const newProgress = Math.min((elapsedTime / 5000) * 100, 100);
    return newProgress;
  };

  // Function to start all intervals from scratch
  const startAllIntervals = () => {
    // Clear existing intervals first
    clearAllIntervals();
    
    // Set start time for progress calculation
    startTimeRef.current = Date.now() - ((progress / 100) * 5000);
    
    // Start parent tab interval (5 seconds)
    parentTabIntervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % LABS.length);
      setInnerTab(0);
      setProgress(0);
      startTimeRef.current = Date.now();
    }, 5000);

    // Start inner tabs interval (2 seconds)
    const current = LABS[activeTab];
    if (current?.innerTabs?.length) {
      innerTabIntervalRef.current = setInterval(() => {
        setInnerTab((prev) => (prev + 1) % current.innerTabs.length);
      }, 2000);
    }

    // Start progress line interval
    progressIntervalRef.current = setInterval(() => {
      const newProgress = calculateProgress();
      setProgress(newProgress);
    }, 50);
  };

  // Initialize intervals on mount
  useEffect(() => {
    startAllIntervals();
    
    // Cleanup on unmount
    return () => clearAllIntervals();
  }, []);

  // Handle pause/unpause based on isPaused state
  useEffect(() => {
    if (isPaused) {
      // Store remaining time when pausing
      if (startTimeRef.current) {
        const elapsedTime = Date.now() - startTimeRef.current;
        remainingTimeRef.current = 5000 - elapsedTime;
      }
      clearAllIntervals();
    } else {
      // Resume from where we left off
      if (remainingTimeRef.current > 0) {
        startTimeRef.current = Date.now() - (5000 - remainingTimeRef.current);
      }
      startAllIntervals();
    }
  }, [isPaused]);

  // Restart intervals when activeTab changes
  useEffect(() => {
    // Don't restart if paused
    if (isPaused) return;
    
    // Restart inner tab interval for new active tab
    if (innerTabIntervalRef.current) {
      clearInterval(innerTabIntervalRef.current);
    }
    
    const current = LABS[activeTab];
    if (current?.innerTabs?.length) {
      innerTabIntervalRef.current = setInterval(() => {
        setInnerTab((prev) => (prev + 1) % current.innerTabs.length);
      }, 2000);
    }
  }, [activeTab, isPaused]);

  // Handle tab click with interval reset
  const handleTabClick = (index) => {
    setActiveTab(index);
    setInnerTab(0);
    setProgress(0);
    startTimeRef.current = Date.now();
    remainingTimeRef.current = 5000;
    
    // Resume animations if they were paused
    if (isPaused) {
      setIsPaused(false);
    }
    
    // Restart intervals
    clearAllIntervals();
    setTimeout(() => {
      startAllIntervals();
    }, 10);
  };

  // Handle hover events - only on content area, not tabs
  const handleContentMouseEnter = () => {
    setIsPaused(true);
  };

  const handleContentMouseLeave = () => {
    setIsPaused(false);
  };

  const lab = LABS[activeTab];
  const isLastItem = Array.isArray(LABS) && activeTab === LABS.length - 1;

  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-0">
      <p className="text-[12px] sm:text-[14px] md:text-[16.3px] uppercase tracking-widest text-black text-center">
        Built In-House. Scaled for the Future
      </p>

      <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[500] text-center mt-2 leading-tight md:leading-normal">
        Our In-House Digital Innovations
      </h2>

      {/* Tabs - Responsive - Hover does NOT pause here */}
      <div className="flex justify-center gap-2 mt-4 sm:mt-6 flex-wrap px-2">
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
                  onClick={() => handleTabClick(index)}
                  className={`px-4 sm:px-5 md:px-7 py-[8px] sm:py-[10px] rounded-lg text-[12px] sm:text-[14px] md:text-[16px] uppercase cursor-pointer transition
                    ${
                      activeTab === index
                        ? "bg-black text-white"
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
              onClick={() => handleTabClick(index)}
              className={`px-4 sm:px-5 md:px-7 py-1.5 sm:py-2 rounded-lg border border-gray-200 text-[12px] sm:text-[14px] md:text-[16px] uppercase cursor-pointer transition
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
          className="relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-200 text-[14px] sm:text-[16px] md:text-[18px] uppercase bg-black text-white overflow-hidden cursor-pointer flex items-center justify-center"
        >
          {/* Icon with wrapper for responsive sizing */}
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center">
            <LuArrowUpRight className="w-full h-full" />
          </div>
          <span className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-20 sm:w-32 md:w-40 h-2 sm:h-3 md:h-4 bg-white blur-sm opacity-100 rounded-full"></span>
        </button>
      </div>

      {/* Main Grid - Responsive - Hover DOES pause here */}
      <div 
        onMouseEnter={handleContentMouseEnter}
        onMouseLeave={handleContentMouseLeave}
      >
        {isLastItem ? (
          /* ✅ LAST ITEM VIEW (ONLY H1) - Responsive */
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.5fr_1.2fr_1fr] gap-3 sm:gap-4 mt-4 sm:mt-6">
            {/* Column 1 */}
            <div className="bg-gradient-to-b from-[#3CDB9D] to-[#D0F94A] p-[1px] sm:p-[2px] rounded-lg col-span-1 lg:col-span-2 xl:col-span-1">
              <div
                className="relative bg-white border border-gray-200 rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-start gap-4 sm:gap-6 h-full bg-cover bg-center"
                style={{ backgroundImage: `url(images/lab/lastItemCol1bg1.png)` }}
              >
                <div className="flex flex-col gap-3 sm:gap-4 items-start">
                  <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-semibold">
                    {lab.title}
                  </h3>
                </div>

                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-black">
                  {lab.desc}
                </p>
                <div className="mt-2 sm:mt-4">
                  <SkShadeBtn text="Learn More" />
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-1 lg:col-span-1">
              <div className="relative bg-gradient-to-b from-[#6FD2CB] to-[#B2F1BA] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center h-[250px] sm:h-[250px] md:h-[300px] overflow-hidden">
                <div className="absolute bg-black/20" />
                <span className="text-[14px] sm:text-[15px] md:text-[16px]  z-10">
                  {lab.col2Box1Text}
                </span>
                <img
                  className="absolute w-80 sm:w-60 md:w-full lg:w-80 xl:w-90 -bottom-1 right-2 sm:right-4 md:right-6"
                  src="/images/lab/lastItemCol2Box1Icon.png"
                  alt="AI"
                />
              </div>

              {/* INNER TABS */}
              <div className="relative flex flex-col justify-center items-center border border-gray-200 rounded-xl sm:rounded-lg p-4 sm:p-6 h-[250px] sm:h-[250px] md:h-[300px] overflow-hidden space-y-2 sm:space-y-3">
                {/* Background Video */}
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-white/30 h-full" />

                {/* Tabs */}
                <div className="relative z-10 w-full flex flex-col space-y-2 sm:space-y-3">
                  {lab.innerTabs.map((label, index) => (
                    <div
                      key={index}
                      onClick={() => setInnerTab(index)}
                      className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-[14px] sm:text-[16px] md:text-[16px] text-center cursor-pointer transition-all duration-300
                ${index === innerTab ? "opacity-100" : "opacity-60"}`}
                      style={{
                        backgroundColor:
                          index === innerTab
                            ? lab.innerTabActiveColor
                            : "#EFF7EB",
                      }}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="relative grid gap-3  sm:gap-4 w-full h-[250px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[calc(300px+300px+15px)] rounded-xl sm:rounded-2xl overflow-hidden lg:col-span-1 xl:col-span-1">
              <video
                key={lab.col2Box2Video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={lab.col3Video} type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        ) : (
          /* ✅ NORMAL ITEMS VIEW (FULL GRID) - Responsive */
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.5fr_1.2fr_1fr] gap-3 sm:gap-4 mt-4 sm:mt-6">
            {/* Column 1 */}
            <div className="bg-gradient-to-b from-[#3CDB9D] to-[#D0F94A] p-[1px] sm:p-[2px] rounded-lg col-span-1 lg:col-span-2 xl:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-start gap-4 sm:gap-6 h-full">
                <div className="flex flex-col gap-3 sm:gap-4 items-start">
                  <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-semibold">
                    {lab.title}
                  </h3>
                </div>

                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-black">
                  {lab.desc}
                </p>
                <div className="mt-2 sm:mt-4">
                  <SkShadeBtn text="Learn More" />
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-1 lg:col-span-1">
              <div className="relative bg-[#EFF7EB] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center h-[250px] sm:h-[250px] md:h-[300px] overflow-hidden">
                <span className="text-[14px] sm:text-[15px] md:text-[16px] text-black">
                  {lab.col2Box1Text}
                </span>
                <img
                  className="absolute w-80 sm:w-60 md:w-full lg:w-80 xl:w-90 -bottom-1 right-2 sm:right-4 md:right-6"
                  src="/images/lab/col2Box1Icon.png"
                  alt="AI"
                />
              </div>

              {/* INNER TABS */}
              <div className="relative flex flex-col justify-center items-center border border-gray-200 rounded-xl sm:rounded-lg p-4 sm:p-6 h-[250px] sm:h-[250px] md:h-[300px] overflow-hidden space-y-2 sm:space-y-3">
                {/* Background Video */}
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-white/30 h-full" />

                {/* Tabs */}
                <div className="relative z-10 w-full flex flex-col space-y-2 sm:space-y-3">
                  {lab.innerTabs.map((label, index) => (
                    <div
                      key={index}
                      onClick={() => setInnerTab(index)}
                      className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-[14px] sm:text-[16px] md:text-[16px] text-center cursor-pointer transition-all duration-300
                ${index === innerTab ? "opacity-100" : "opacity-60"}`}
                      style={{
                        backgroundColor:
                          index === innerTab
                            ? lab.innerTabActiveColor
                            : "#EFF7EB",
                      }}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-1 lg:col-span-1">
              <div
                className="rounded-xl sm:rounded-2xl h-[250px] sm:h-[250px] md:h-[300px] bg-cover bg-center"
                style={{ backgroundImage: `url(${lab.col3Box1Img})` }}
              />

              <div className="bg-[#EFF7EB] rounded-xl sm:rounded-2xl p-6 sm:p-8 h-[250px] sm:h-[250px] md:h-[300px] flex items-center">
                <img
                  src={lab.col3Box2Logo}
                  alt="Logo"
                  className="mx-auto w-32 sm:w-40 md:w-48 lg:w-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Progress Line */}
      <div className="mt-6 sm:mt-8 md:mt-10 h-[3px] sm:h-[4px] bg-gray-200 relative overflow-hidden">
        <span
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#D0F94A] to-[#3CDB9D] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}

