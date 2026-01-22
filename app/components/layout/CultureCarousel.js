"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CultureCarousel() {
  const cultureData = [
    {
      id: 1,
      image: "/images/about/cultureCarousel/01.png",
      title: "About the achievement",
      description:
        "Most companies struggle to turn AI ideas into production-ready systems.",
    },
    {
      id: 2,
      image: "/images/about/cultureCarousel/02.png",
      title: "Team Recognition",
      description: "Celebrating milestones achieved by our global teams.",
    },
    {
      id: 3,
      image: "/images/about/cultureCarousel/02.png",
      title: "Innovation Award",
      description: "Recognizing excellence in AI-driven innovation.",
    },
    {
      id: 4,
      image: "/images/about/cultureCarousel/02.png",
      title: "Global Culture",
      description: "Diverse teams working together worldwide.",
    },
    {
      id: 5,
      image: "/images/about/cultureCarousel/02.png",
      title: "Global Culture",
      description: "Diverse teams working together worldwide.",
    },
    {
      id: 6,
      image: "/images/about/cultureCarousel/02.png",
      title: "Global Culture",
      description: "Diverse teams working together worldwide.",
    },
  ];

  const [items, setItems] = useState(cultureData);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const newArr = [...prev];
        const first = newArr.shift();
        newArr.push(first);
        return newArr;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-20 flex justify-center items-center overflow-hidden">
      <div className="flex items-center gap-6">
        {items.slice(0, 5).map((item, index) => {
          const isActive = index === 2;

          return (
            <motion.div
              key={item.id}
              layout
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className={`relative rounded-2xl overflow-hidden bg-gray-300
                ${isActive ? "w-[320px] h-[420px] opacity-100" : "w-[260px] h-[320px] "}
                ${index === 0 || index === 4 ? " scale-90" : ""}
              `}
            >
              {(index === 0 || index === 4) ? (
                <div className="absolute inset-0 bg-black/70 pointer-events-none rounded-2xl z-10" />
              ) : !isActive && (
                <div className="absolute inset-0 bg-black/50 pointer-events-none rounded-2xl z-10" />
              )}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.6 }}
                    className="absolute bottom-0 w-full bg-gradient-to-b from-white/10 to-[#42DC99] p-6 text-white"
                  >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm mt-2">{item.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// 'use client';

// import { useState, useEffect, useCallback } from 'react';

// const CultureCarousel = () => {
//   // Carousel items data
//   const carouselItems = [
//     {
//       id: 1,
//       title: "Modern Web Development",
//       description: "Building responsive, high-performance web applications using the latest technologies and best practices for optimal user experience.",
//       category: "Technology",
//       image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//     },
//     {
//       id: 2,
//       title: "Mobile Application Design",
//       description: "Creating intuitive and beautiful mobile interfaces that provide seamless user experiences across all devices and platforms.",
//       category: "Design",
//       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//     },
//     {
//       id: 3,
//       title: "Cloud Infrastructure",
//       description: "Scalable cloud solutions that ensure reliability, security, and performance for businesses of all sizes.",
//       category: "Infrastructure",
//       image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
//     },
//     {
//       id: 4,
//       title: "Data Analytics & AI",
//       description: "Transforming raw data into actionable insights with advanced analytics and artificial intelligence solutions.",
//       category: "Analytics",
//       image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80"
//     },
//     {
//       id: 5,
//       title: "Cybersecurity Solutions",
//       description: "Protecting digital assets with comprehensive security strategies and cutting-edge protection technologies.",
//       category: "Security",
//       image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//     }
//   ];

//   const [activeIndex, setActiveIndex] = useState(2); // Middle card active initially
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Function to handle next slide
//   const nextSlide = useCallback(() => {
//     if (isTransitioning) return;

//     setIsTransitioning(true);
//     setActiveIndex((prevIndex) =>
//       prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
//     );

//     setTimeout(() => setIsTransitioning(false), 700);
//   }, [carouselItems.length, isTransitioning]);

//   // Function to handle previous slide
//   const prevSlide = useCallback(() => {
//     if (isTransitioning) return;

//     setIsTransitioning(true);
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
//     );

//     setTimeout(() => setIsTransitioning(false), 700);
//   }, [isTransitioning]);

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [nextSlide]);

//   // Get visible items - always show 5 cards
//   const getVisibleItems = () => {
//     const items = [];
//     const totalItems = carouselItems.length;

//     // Get items for positions: -2, -1, 0, 1, 2 (0 is active/center)
//     for (let i = activeIndex - 2; i <= activeIndex + 2; i++) {
//       let index = i;

//       // Handle overflow (loop around)
//       if (index < 0) {
//         index = totalItems + index;
//       } else if (index >= totalItems) {
//         index = index - totalItems;
//       }

//       items.push({
//         ...carouselItems[index],
//         position: i - activeIndex, // Position relative to active card: -2, -1, 0, 1, 2
//         isActive: i === activeIndex
//       });
//     }

//     return items;
//   };

//   const visibleItems = getVisibleItems();

//   return (
//     <div className="w-full max-w-7xl mx-auto py-8 px-4">
//       {/* Carousel Container */}
//       <div className="relative">
//         {/* Navigation Buttons */}
//         {/* <button
//           onClick={prevSlide}
//           disabled={isTransitioning}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full text-white disabled:opacity-50 transition-all duration-300 transform hover:scale-110 -translate-x-1/2"
//           aria-label="Previous slide"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="m15 18-6-6 6-6"/>
//           </svg>
//         </button>

//         <button
//           onClick={nextSlide}
//           disabled={isTransitioning}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full text-white disabled:opacity-50 transition-all duration-300 transform hover:scale-110 translate-x-1/2"
//           aria-label="Next slide"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="m9 18 6-6-6-6"/>
//           </svg>
//         </button> */}

//         {/* Carousel Items Container */}
//         <div className="flex justify-center items-center gap-1 md:gap-1 px-3 md:px-12">
//           {visibleItems.map((item) => (
//             <div
//               key={item.id}
//               className={`
//                 transition-all duration-700 ease-in-out
//                 ${item.position === 0
//                   ? 'w-full md:w-[80%] z-30'  // Active card - takes 80% width on large screens
//                   : item.position === -1 || item.position === 1
//                     ? 'w-[45%] md:w-[35%] z-20'  // Cards immediately beside active
//                     : 'w-[30%] md:w-[25%] z-10'   // Outer cards
//                 }
//                 ${item.position === -2 ? '-translate-x-4 md:-translate-x-8' : ''}
//                 ${item.position === -1 ? '-translate-x-2 md:-translate-x-4' : ''}
//                 ${item.position === 1 ? 'translate-x-2 md:translate-x-4' : ''}
//                 ${item.position === 2 ? 'translate-x-4 md:translate-x-8' : ''}
//               `}
//             >
//               {/* Carousel Item */}
//               <div
//                 className={`
//                   relative  rounded-xl md:rounded-2xl overflow-hidden
//                   transition-all duration-700
//                   ${item.isActive ? 'shadow-2xl h-[400px] md:h-[450px]' : 'shadow-lg h-[350px] md:h-[400px]'}
//                 `}
//               >
//                 {/* Background Image */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
//                   style={{
//                     backgroundImage: `url(${item.image})`,
//                     transform: item.isActive ? 'scale(1.05)' : 'scale(1)'
//                   }}
//                 >
//                   {/* Dark overlay for inactive cards */}
//                   {!item.isActive && (
//                     <div className="absolute inset-0 bg-black/80"></div>
//                   )}

//                   {/* Color overlay for active card */}
//                   {item.isActive && (
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-transparent"></div>
//                   )}
//                 </div>

//                 {/* Content for active card */}
//                 {item.isActive && (
//                   <div className="relative h-full flex flex-col justify-end p-6 md:p-10 animate-fadeIn">
//                     <div className="max-w-xl">
//                       <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
//                         {item.title}
//                       </h2>
//                       <p className="text-base md:text-lg text-gray-100 mb-6">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Minimal content for inactive cards */}
//                 {!item.isActive && (
//                   <div className="relative h-full flex items-end p-4">
//                     <div className="w-full bg-gradient-to-t from-black/90 to-transparent p-4 rounded-lg">
//                       <h3 className="text-white font-semibold text-sm md:text-base truncate">{item.title}</h3>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Indicators */}
//             {/* <div className="flex justify-center mt-6 md:mt-8 gap-1.5 md:gap-2">
//             {carouselItems.map((_, index) => (
//                 <button
//                 key={index}
//                 onClick={() => {
//                     if (!isTransitioning) {
//                     setIsTransitioning(true);
//                     setActiveIndex(index);
//                     setTimeout(() => setIsTransitioning(false), 700);
//                     }
//                 }}
//                 className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
//                     index === activeIndex
//                     ? 'w-6 md:w-8 bg-white'
//                     : 'w-1.5 md:w-2 bg-gray-500 hover:bg-gray-400'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//                 />
//             ))}
//             </div> */}
//       </div>

//       {/* Custom CSS for animation */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CultureCarousel;
