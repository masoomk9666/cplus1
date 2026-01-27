
// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const steps = [
//   {
//     title: "Digital Interaction Surface",
//     description:
//       "Secure, scalable digital interfaces engineered for modern enterprise needs.",
//     image: "/images/servicesPage/layer1.png",
//   },
//   {
//     title: "Intelligent Control Plane",
//     description:
//       "Centralized intelligence layer ensuring orchestration, visibility, and governance.",
//     image: "/images/servicesPage/layer2.png",
//   },
//   {
//     title: "Trusted Data Core",
//     description:
//       "Data protection at every layer with encryption, integrity, and compliance.",
//     image: "/images/servicesPage/layer1.png",
//   },
//   {
//     title: "Secure Cloud Foundation",
//     description:
//       "Enterprise-grade cloud infrastructure built for performance and resilience.",
//     image: "/images/servicesPage/layer2.png",
//   },
// ];

// /* ---------------- IMAGE LAYER ---------------- */
// function ImageLayer({ scrollYProgress, index, image, total }) {
//   const start = index * 0.25;
//   const end = start + 0.15;

//   // 👇 Image comes from top and settles ABOVE previous ones
//   const y = useTransform(scrollYProgress, [start, end], [-420, -index * 18]);

//   return (
//     <motion.img
//       src={image}
//       alt=""
//       style={{
//         y,
//         scale: 1 - index * 0.05,
//         zIndex: total + index, // last image always on top
//         transformStyle: "preserve-3d",
//       }}
//       className="absolute w-[260px] md:w-[300px] lg:w-[340px] rounded-xl drop-shadow-2xl"
//     />
//   );
// }

// /* ---------------- TEXT LAYER ---------------- */
// function TextLayer({ scrollYProgress, index, title, description }) {
//   const start = index * 0.25;
//   const end = start + 0.15;

//   const opacity = useTransform(
//     scrollYProgress,
//     [start, end, end + 0.1],
//     [0, 1, 0]
//   );

//   const y = useTransform(scrollYProgress, [start, end], [40, 0]);

//   return (
//     <motion.div style={{ opacity, y }} className="absolute">
//       <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
//         Built to withstand scale & threats
//       </p>
//       <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
//         {title}
//       </h2>
//       <p className="text-gray-600 max-w-md">{description}</p>
//     </motion.div>
//   );
// }

// /* ---------------- MAIN SECTION ---------------- */
// export default function SecurityScrollSection() {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   // 3D tilt for whole stack
//   const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);
//   const rotateZ = useTransform(scrollYProgress, [0, 1], [-6, 0]);

//   return (
//     <section ref={sectionRef} className="relative h-[400vh] bg-white">
//       <div className="sticky top-0 h-screen flex items-center">
//         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT — IMAGE STACK */}
//           <div className="relative h-[420px] flex justify-center items-center perspective-[1200px]">
//             <motion.div
//               style={{
//                 rotateX,
//                 rotateZ,
//                 transformStyle: "preserve-3d",
//               }}
//               className="relative w-full h-full flex justify-center items-center"
//             >
//               {steps.map((step, index) => (
//                 <ImageLayer
//                   key={index}
//                   index={index}
//                   image={step.image}
//                   total={steps.length}
//                   scrollYProgress={scrollYProgress}
//                 />
//               ))}
//             </motion.div>
//           </div>

//           {/* RIGHT — TEXT */}
//           <div className="relative h-[300px] overflow-hidden">
//             {steps.map((step, index) => (
//               <TextLayer
//                 key={index}
//                 index={index}
//                 title={step.title}
//                 description={step.description}
//                 scrollYProgress={scrollYProgress}
//               />
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    title: "Digital Interaction Surface",
    description:
      "Secure, scalable digital interfaces engineered for modern enterprise needs.",
    image: "/images/servicesPage/layer1.png",
  },
  {
    title: "Intelligent Control Plane",
    description:
      "Centralized intelligence layer ensuring orchestration, visibility, and governance.",
    image: "/images/servicesPage/layer2.png",
  },
  {
    title: "Trusted Data Core",
    description:
      "Data protection at every layer with encryption, integrity, and compliance.",
    image: "/images/servicesPage/layer1.png",
  },
  {
    title: "Secure Cloud Foundation",
    description:
      "Enterprise-grade cloud infrastructure built for performance and resilience.",
    image: "/images/servicesPage/layer2.png",
  },
];

/* ---------------- IMAGE LAYER ---------------- */
function ImageLayer({ scrollYProgress, index, image, total, isActive }) {
  const start = index * 0.25;
  const end = start + 0.15;
  
  // First layer - always visible from start
  if (index === 0) {
    return (
      <motion.img
        src={image}
        alt=""
        style={{
          zIndex: total - index,
          transformStyle: "preserve-3d",
        }}
        className="absolute w-[260px] md:w-[300px] lg:w-[340px] rounded-xl drop-shadow-2xl"
      />
    );
  }
  
  // For subsequent layers, they come from top and settle above
  const y = useTransform(
    scrollYProgress, 
    [start - 0.05, start, end], 
    [-300, -(index * 80), -(index * 80)]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.05, start],
    [0, 1]
  );

  return (
    <motion.img
      src={image}
      alt=""
      style={{
        y,
        opacity,
        scale: 1 - index * 0.05,
        zIndex: total - index,
        transformStyle: "preserve-3d",
      }}
      className="absolute w-[260px] md:w-[300px] lg:w-[340px] rounded-xl drop-shadow-2xl"
    />
  );
}

/* ---------------- TEXT LAYER ---------------- */
function TextLayer({ scrollYProgress, index, title, description, isActive }) {
  const start = index * 0.25;
  const end = start + 0.15;

  // For active layer - show with animation
  if (isActive) {
    const opacity = useTransform(
      scrollYProgress,
      [start - 0.1, start, end - 0.1],
      [0, 1, 1]
    );

    const y = useTransform(
      scrollYProgress,
      [start - 0.1, start],
      [40, 0]
    );

    return (
      <motion.div 
        style={{ opacity, y }} 
        className="absolute"
      >
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
          Built to withstand scale & threats
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
          {title}
        </h2>
        <p className="text-gray-600 max-w-md">{description}</p>
      </motion.div>
    );
  }

  // For inactive layers - don't render anything
  return null;
}

/* ---------------- MAIN SECTION ---------------- */
export default function SecurityScrollSection() {
  const sectionRef = useRef(null);
  const [currentActiveLayer, setCurrentActiveLayer] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Determine active layer index
  const activeLayer = useTransform(
    scrollYProgress,
    steps.map((_, i) => i * 0.25),
    steps.map((_, i) => i)
  );

  // Update current active layer when scroll changes
  useEffect(() => {
    const unsubscribe = activeLayer.on("change", (latest) => {
      setCurrentActiveLayer(Math.floor(latest));
    });
    return unsubscribe;
  }, [activeLayer]);

  // 3D tilt for whole stack
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [12, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5], [-6, 0]);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — IMAGE STACK */}
          <div className="relative h-[420px] flex justify-center items-center perspective-[1200px]">
            <motion.div
              style={{
                rotateX,
                rotateZ,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full h-full flex justify-center items-center"
            >
              {steps.map((step, index) => (
                <ImageLayer
                  key={index}
                  index={index}
                  image={step.image}
                  total={steps.length}
                  scrollYProgress={scrollYProgress}
                  isActive={currentActiveLayer >= index}
                />
              ))}
            </motion.div>
          </div>

          {/* RIGHT — TEXT */}
          <div className="relative h-[300px] overflow-visible">
            {steps.map((step, index) => (
              <TextLayer
                key={index}
                index={index}
                title={step.title}
                description={step.description}
                scrollYProgress={scrollYProgress}
                isActive={currentActiveLayer === index}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

