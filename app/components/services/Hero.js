// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import SkShadeBtn from "../layout/SkShadeBtn";

// const slides = [
//   {
//     video: "/videos/servicesPage/slide1.mp4",
//     title: "Accelerate Growth with Cplus Soft",
//     desc1: "Technology that delivers seamless experiences and measurable results.",
//     desc2:
//       "We specialize in crafting custom software, implementing advanced AI, and building scalable web and mobile solutions tailored to your unique business needs.",
//     button: "Lets Connect",
//   },
//   {
//     video: "/videos/servicesPage/slide2.mp4",
//     title: "AI & Intelligent Systems",
//     desc1: "similique tenetur molestiae sit. Repellat et maxime ad alias. Deserunt excepturi ",
//     desc2:
//       "similique tenetur molestiae sit. Repellat et maxime ad alias. Deserunt excepturi aliquam aperiam. Inventore quo sunt. Deserunt excepturi aliquam aperiam. ",
//     button: "Lets Connect",
//   },
//   {
//     video: "/videos/servicesPage/slide3.mp4",
//     title: "Data & Cloud Engineering",
//     desc1: "Turn data into decisions with AI & automation.",
//     desc2:
//       "We help companies leverage artificial intelligence to optimize operations and unlock new growth opportunities.",
//     button: "Lets Connect",
//   },
//   ,
//   {
//     video: "/videos/servicesPage/slide4.mp4",
//     title: "Software development",
//     desc1: "Turn data into decisions with AI & automation.",
//     desc2:
//       "We help companies leverage artificial intelligence to optimize operations and unlock new growth opportunities.",
//     button: "Lets Connect",
//   },
//   ,
//   {
//     video: "/videos/servicesPage/slide5.mp4",
//     title: "IT & Security",
//     desc1: "Turn data into decisions with AI & automation.",
//     desc2:
//       "We help companies leverage artificial intelligence to optimize operations and unlock new growth opportunities.",
//     button: "Lets Connect",
//   },
// ];

// const Hero = () => {
//   return (
//     <section className="relative w-full min-h-[60vh]">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{ delay: 7000, disableOnInteraction: false }}
//         loop={true}
//         pagination={{ clickable: true }}
//         className="w-full h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
              
//               {/* Background Video */}
//               <video
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 src={slide.video}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />

//               {/* Dark Overlay */}
//               <div className="absolute inset-0 bg-black/50"></div>

//               {/* Content */}
//               <div className="relative z-10 text-center px-6 max-w-4xl">
//                 <h1 className="text-white text-[24px] md:text-[48px] font-medium tracking-wide leading-tight mb-4">
//                   {slide.title}
//                 </h1>

//                 <p className="text-gray-200 text-[14px]  md:text-[18px] leading-relaxed mb-2">
//                   {slide.desc1}
//                 </p>

//                 <p className="text-gray-200 text-[14px]  md:text-[18px] leading-relaxed max-w-3xl mb-5">
//                   {slide.desc2}
//                 </p>

//                 <SkShadeBtn
//                   text={slide.button}
//                   shadeColor="[#D0F94A]"
//                   textColor="black"
//                   bgColor="white"
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Hero;



"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SkShadeBtn from "../layout/SkShadeBtn";

const slides = [
  {
    video: "/videos/servicesPage/slide1.mp4",
    title: "Accelerate Growth with Cplus Soft",
    desc1: "Technology that delivers seamless experiences and measurable results.",
    desc2:
      "We specialize in crafting custom software, implementing advanced AI, and building scalable web and mobile solutions tailored to your unique business needs.",
    button: "Lets Connect",
  },
  {
    video: "/videos/servicesPage/slide2.mp4",
    title: "AI & Intelligent Systems",
    desc1: "similique tenetur molestiae sit. Repellat et maxime ad alias. Deserunt excepturi ",
    desc2:
      "similique tenetur molestiae sit. Repellat et maxime ad alias. Deserunt excepturi aliquam aperiam. Inventore quo sunt. Deserunt excepturi aliquam aperiam. ",
    button: "Lets Connect",
  },
  {
    video: "/videos/servicesPage/slide3.mp4",
    title: "Data & Cloud Engineering",
    desc1: "Turn data into decisions with AI & automation.",
    desc2:
      "We help companies leverage artificial intelligence to optimize operations and unlock new growth opportunities.",
    button: "Lets Connect",
  },
  {
    video: "/videos/servicesPage/slide4.mp4",
    title: "Software development",
    desc1: "Turn data into decisions with AI & automation.",
    desc2:
      "We help companies leverage artificial intelligence to optimize operations and unlock new growth opportunities.",
    button: "Lets Connect",
  },
  {
    video: "/videos/servicesPage/slide5.mp4",
    title: "IT & Security",
    desc1: "Turn data into decisions with AI & automation.",
    desc2:
      "We help companies leverage artificial intelligence to optimize operations and unlock new growth opportunities.",
    button: "Lets Connect",
  },
];

const Hero = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="relative w-full min-h-[60vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
          horizontalClass: "swiper-pagination-horizontal",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
              
              {/* Background Video */}
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 text-center px-6 max-w-4xl">
                <h1 className="text-white text-[24px] md:text-[48px] font-medium tracking-wide leading-tight mb-4">
                  {slide.title}
                </h1>

                <p className="text-gray-200 text-[14px]  md:text-[18px] leading-relaxed mb-2">
                  {slide.desc1}
                </p>

                <p className="text-gray-200 text-[14px]  md:text-[18px] leading-relaxed max-w-3xl mb-5">
                  {slide.desc2}
                </p>

                <SkShadeBtn
                  text={slide.button}
                  shadeColor="[#D0F94A]"
                  textColor="black"
                  bgColor="white"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="hidden lg:block">
      <button
        onClick={handlePrev}
        className="swiper-button-prev-custom absolute bottom-6 right-20 z-20 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/30 transition-all"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button
        onClick={handleNext}
        className="swiper-button-next-custom absolute bottom-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/30 transition-all"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
        </div>
      <style jsx global>{`
        /* Center the pagination */
        .swiper-pagination {
          position: absolute !important;
          bottom: 30px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
          display: flex !important;
          gap: 12px !important;
          justify-content: center !important;
        }
        
        .swiper-pagination-bullet {
          width: 16px !important;
          height: 16px !important;
          background-color: #9CA3AF !important; /* Gray color for inactive */
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet-active {
          background-color: #D0F94A !important; /* Green color for active */
          transform: scale(1.2) !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;