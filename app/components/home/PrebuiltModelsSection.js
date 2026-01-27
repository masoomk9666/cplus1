

// "use client";
// import SkShadeBtn from "../layout/SkShadeBtn";
// import { motion } from "framer-motion";

// const cards = [
//   {
//     title: "Meeting Point Collection",
//     imgSrc: "/images/preBuiltModelsSection/01.png",
//     backTitle: "Meeting Point Collection",
//     backDescription:
//       "An AI-powered system that identifies and collects meeting points from images or videos, enhancing location-based services and navigation applications.",
//   },
//   {
//     title: "Body Tracking System",
//     imgSrc: "/images/preBuiltModelsSection/02.png",
//     backTitle: "Body Tracking System",
//     backDescription:
//       "An advanced AI model that accurately tracks human body movements in real-time, enabling applications in fitness, gaming, and augmented reality.",
//   },
//   {
//     title: "Roof Detection System",
//     imgSrc: "/images/preBuiltModelsSection/03.png",
//     backTitle: "Roof Detection System",
//     backDescription:
//       "An AI-driven solution that detects and analyzes roof structures from aerial imagery, assisting in urban planning, construction, and real estate assessments.",
//   },
//   {
//     title: "Voice Classification System",
//     imgSrc: "/images/preBuiltModelsSection/04.png",
//     backTitle: "Voice Classification System",
//     backDescription:
//       "A sophisticated AI model that classifies and categorizes voice inputs, enhancing applications in customer service, security, and voice-activated technologies.",
//   },
//   {
//     title: "Human Activity Recognition",
//     imgSrc: "/images/preBuiltModelsSection/05.png",
//     backTitle: "Human Activity Recognition",
//     backDescription:
//       "An AI model that identifies and interprets human activities from video data, enabling applications in surveillance, healthcare, and sports analytics.",
//   },
//   {
//     title: "PDF Fields Extraction",
//     imgSrc: "/images/preBuiltModelsSection/06.png",
//     backTitle: "PDF Fields Extraction",
//     backDescription:
//       "An AI-powered tool that extracts and organizes fields from PDF documents, streamlining data entry and document management processes.",
//   },
//   {
//     title: "Facial Expression Detection",
//     imgSrc: "/images/preBuiltModelsSection/07.png",
//     backTitle: "Facial Expression Detection",
//     backDescription:
//       "An AI model that detects and interprets facial expressions, enabling applications in emotion analysis, user experience research, and human-computer interaction.",
//   },
//   {
//     title: "Human Counting System",
//     imgSrc: "/images/preBuiltModelsSection/08.png",
//     backTitle: "Human Counting System",
//     backDescription:
//       "An AI-driven solution that accurately counts the number of individuals in a given area, useful for crowd management, retail analytics, and event planning.",
//   },
// ];

// export default function PrebuiltModelsSection() {
//   return (
//     <section
//       className="relative w-full overflow-hidden py-20"
//       style={{
//         backgroundImage: "url('/images/preBuiltModelsSection/bg.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
//       {/* <div className="absolute inset-0 bg-gradient-to-br from-green-400/90 via-teal-200/80 to-emerald-400/90" /> */}

//       <div className="relative max-w-7xl mx-auto">
//         {/* ===== ROW 1 : CONTENT ===== */}
//         <div className="w-full max-w-4xl mb-16">
//           <p className="text-[16px] uppercase tracking-wide text-black mb-3">
//             Prebuilt Models
//           </p>

//           <h2 className="text-[45px] md:text-[48px] font-[500] text-black leading-tight mb-6">
//             Ready-To-Deploy AI Models Built <br /> For Real-World Use
//           </h2>

//           <p className="text-[18px] text-black mb-8 max-w-xl w-full">
//             Our Prebuilt AI Models Are Production-Ready, Scalable, And Designed
//             To Solve Common Business Challenges Across Industries. These Models
//             Are Trained, Tested, And Optimized So You Can Integrate AI Into Your
//             Product Or Workflow Without Starting From Scratch.
//           </p>

//           <SkShadeBtn text="Learn More" />
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ml-25 perspective-[1200px]">
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               className={`relative h-80 group
//                 ${index % 4 === 0 ? "mt-0" : ""}
//                 ${index % 4 === 1 ? "-mt-20" : ""}
//                 ${index % 4 === 2 ? "-mt-40" : ""}
//                 ${index % 4 === 3 ? "-mt-60" : ""}
//               `}
//               // Floating Animation
//               animate={{
//                 y: [0, 15, 0], // Up-down movement
//               }}
//               transition={{
//                 duration: 3, // Complete cycle takes 3 seconds
//                 repeat: Infinity, // Infinite loop
//                 repeatType: "loop", // Loop the animation
//                 ease: "easeInOut", // Smooth easing
//                 delay: index * 0.2, // Staggered start for each card
//               }}
//             >
//               {/* Flip Container */}
//               <div
//                 className="relative w-full h-full transition-transform duration-700 ease-in-out
//                   [transform-style:preserve-3d] group-hover:rotate-y-180"
//               >
//                 {/* ================= FRONT ================= */}
//                 <div
//                   className="absolute inset-0 p-2 rounded-2xl backdrop-blur-lg bg-white/20
//                      shadow-lg overflow-hidden
//                     [backface-visibility:hidden]"
//                 >
//                   <img
//                     src="/images/preBuiltModelsSection/cardBg.png"
//                     alt="card background"
//                     className="absolute inset-0 w-full h-full object-cover opacity-80"
//                   />

//                   <div className="relative p-5 h-full flex flex-col justify-between">
//                     <h3 className="text-[20px] font-[500] text-black uppercase">
//                       {card.title}
//                     </h3>

//                     <img
//                       src={card.imgSrc}
//                       alt="ai model"
//                       className="absolute -bottom-6 -right-12 w-60 h-60 object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* ================= BACK ================= */}
//                 <div
//                   className="absolute inset-0 p-2 rounded-2xl bg-wghite/20
//                      shadow-lg overflow-hidden
//                     rotate-y-180 [backface-visibility:hidden]"
//                 >
//                   <img
//                     src="/images/preBuiltModelsSection/cardBg.png"
//                     alt="back image"
//                     className="absolute inset-0 w-full h-full object-cover opacity-80"
//                   />

//                   <div className="relative p-6 h-full flex flex-col justify-center items-start text-start">
//                     <h4 className="text-[20px] font-[500] uppercase mb-3">
//                       {card.backTitle}
//                     </h4>

//                     <p className="text-[16px] leading-relaxed">
//                       {card.backDescription}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";
import SkShadeBtn from "../layout/SkShadeBtn";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Meeting Point Collection",
    imgSrc: "/images/preBuiltModelsSection/01.png",
    backTitle: "Meeting Point Collection",
    backDescription:
      "An AI-powered system that identifies and collects meeting points from images or videos, enhancing location-based services and navigation applications.",
  },
  {
    title: "Body Tracking System",
    imgSrc: "/images/preBuiltModelsSection/02.png",
    backTitle: "Body Tracking System",
    backDescription:
      "An advanced AI model that accurately tracks human body movements in real-time, enabling applications in fitness, gaming, and augmented reality.",
  },
  {
    title: "Roof Detection System",
    imgSrc: "/images/preBuiltModelsSection/03.png",
    backTitle: "Roof Detection System",
    backDescription:
      "An AI-driven solution that detects and analyzes roof structures from aerial imagery, assisting in urban planning, construction, and real estate assessments.",
  },
  {
    title: "Voice Classification System",
    imgSrc: "/images/preBuiltModelsSection/04.png",
    backTitle: "Voice Classification System",
    backDescription:
      "A sophisticated AI model that classifies and categorizes voice inputs, enhancing applications in customer service, security, and voice-activated technologies.",
  },
  {
    title: "Human Activity Recognition",
    imgSrc: "/images/preBuiltModelsSection/05.png",
    backTitle: "Human Activity Recognition",
    backDescription:
      "An AI model that identifies and interprets human activities from video data, enabling applications in surveillance, healthcare, and sports analytics.",
  },
  {
    title: "PDF Fields Extraction",
    imgSrc: "/images/preBuiltModelsSection/06.png",
    backTitle: "PDF Fields Extraction",
    backDescription:
      "An AI-powered tool that extracts and organizes fields from PDF documents, streamlining data entry and document management processes.",
  },
  {
    title: "Facial Expression Detection",
    imgSrc: "/images/preBuiltModelsSection/07.png",
    backTitle: "Facial Expression Detection",
    backDescription:
      "An AI model that detects and interprets facial expressions, enabling applications in emotion analysis, user experience research, and human-computer interaction.",
  },
  {
    title: "Human Counting System",
    imgSrc: "/images/preBuiltModelsSection/08.png",
    backTitle: "Human Counting System",
    backDescription:
      "An AI-driven solution that accurately counts the number of individuals in a given area, useful for crowd management, retail analytics, and event planning.",
  },
];

export default function PrebuiltModelsSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: "url('/images/preBuiltModelsSection/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto">
        {/* ===== ROW 1 : CONTENT ===== */}
        <div className="w-full max-w-4xl mb-10 sm:mb-12 md:mb-16">
          <p className="text-[12px] sm:text-[14px] md:text-[16px] uppercase tracking-wide text-black mb-2 sm:mb-3">
            Prebuilt Models
          </p>

          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[500] text-black leading-tight mb-4 sm:mb-5 md:mb-6">
            Ready-To-Deploy AI Models Built <br className="hidden sm:block" /> For Real-World Use
          </h2>

          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-black mb-6 sm:mb-7 md:mb-8 max-w-xl w-full leading-relaxed">
            Our Prebuilt AI Models Are Production-Ready, Scalable, And Designed
            To Solve Common Business Challenges Across Industries. These Models
            Are Trained, Tested, And Optimized So You Can Integrate AI Into Your
            Product Or Workflow Without Starting From Scratch.
          </p>

          <SkShadeBtn text="Learn More" />
        </div>
        
        {/* Cards Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:ml-25 perspective-[1200px]">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative h-60 sm:h-64 md:h-72 lg:h-80 group
                ${index % 4 === 0 ? "mt-0" : ""}
                ${index % 4 === 1 ? "lg:-mt-20" : ""}
                ${index % 4 === 2 ? "lg:-mt-40" : ""}
                ${index % 4 === 3 ? "lg:-mt-60" : ""}
              `}
              // Floating Animation - Reduced on mobile for better performance
              animate={{
                y: [0, 8, 0], // Reduced movement on mobile
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              {/* Flip Container */}
              <div
                className="relative w-full h-full transition-transform duration-700 ease-in-out
                  [transform-style:preserve-3d] group-hover:rotate-y-180"
              >
                {/* ================= FRONT ================= */}
                <div
                  className="absolute inset-0 p-2 rounded-xl sm:rounded-2xl backdrop-blur-lg bg-white/20
                     shadow-lg overflow-hidden
                    [backface-visibility:hidden]"
                >
                  <img
                    src="/images/preBuiltModelsSection/cardBg.png"
                    alt="card background"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />

                  <div className="relative p-4 sm:p-5 h-full flex flex-col justify-between">
                    <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[500] text-black uppercase">
                      {card.title}
                    </h3>

                    <img
                      src={card.imgSrc}
                      alt="ai model"
                      className="absolute -bottom-4 sm:-bottom-6 -right-8 sm:-right-12 w-40 sm:w-48 md:w-52 lg:w-60 h-40 sm:h-48 md:h-52 lg:h-60 object-cover"
                    />
                  </div>
                </div>

                {/* ================= BACK ================= */}
                <div
                  className="absolute inset-0 p-2 rounded-xl sm:rounded-2xl bg-white/20
                     shadow-lg overflow-hidden
                    rotate-y-180 [backface-visibility:hidden]"
                >
                  <img
                    src="/images/preBuiltModelsSection/cardBg.png"
                    alt="back image"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />

                  <div className="relative p-4 sm:p-5 md:p-6 h-full flex flex-col justify-center items-start text-start">
                    <h4 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[500] uppercase mb-2 sm:mb-3">
                      {card.backTitle}
                    </h4>

                    <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed">
                      {card.backDescription}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}