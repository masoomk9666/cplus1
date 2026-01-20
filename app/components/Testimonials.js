"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";


const testimonials = [
  {
    id: 1,
    name: "Julian Singh",
    designation: "CEO, Boltsoft",
    image: "/images/testimonials/04.png",
    text: "Cplus Soft has completely transformed how we approach business growth and customer engagement. Their advanced AI technologies gave us unparalleled insights into customer behavior and preferences, helping us make data-driven decisions that fueled our expansion. Their tools are not just innovative but also incredibly user-friendly, ensuring our team could adopt them without a steep learning curve. I wholeheartedly recommend them to anyone looking to stay ahead of the competition.",
  },
  {
    id: 2,
    name: "Anna Williams",
    designation: "CTO, Magnolia",
    image: "/images/testimonials/02.png",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo",
  },
  {
    id: 3,
    name: "Michael Brown",
    designation: "Manager, Magnolia",
    image: "/images/testimonials/03.png",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo",
  },
];

const logos = [
  "/images/testimonials/marquee/01.png",
  "/images/testimonials/marquee/02.png",
  "/images/testimonials/marquee/03.png",
  "/images/testimonials/marquee/04.png",
  "/images/testimonials/marquee/05.png",
  "/images/testimonials/marquee/06.png",
  "/images/testimonials/marquee/01.png",
  "/images/testimonials/marquee/02.png",
  "/images/testimonials/marquee/03.png",
  "/images/testimonials/marquee/04.png",
  "/images/testimonials/marquee/05.png",
  "/images/testimonials/marquee/06.png",
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl py-25 space-y-16 ">
      {/* Row 1: Testimonial Carousel */}
      <div className="grid md:grid-cols-[1fr_3.2fr] gap-18 items-start">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative w-full h-[300px] rounded-lg overflow-hidden bg-gradient-to-b from-[#3CDB9D] to-[#D0F94A] shadow-lg">
            {/* Image layer */}
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="relative z-10 w-full h-full object-cover"
            />
          </div>

          <h3 className="mt-4 font-semibold text-[16px]">
            {testimonials[activeIndex].name}
          </h3>
          <p className="text-[16px] text-[#3B3B3B]">
            {testimonials[activeIndex].designation}
          </p>
        </div>

        <div className="relative ">
          <div>
            <h3 className="text-[16px] font-[400] mb-2 uppercase">Testimonials</h3>
            <h2 className="text-[45px] font-[500]">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex gap-2 justify-start items-start">
            {/* <img
              src="/images/testimonials/quote.png"
              width="15"
              className="h-[fit-content] mt-2"
            /> */}
            <p className="text-[19.5px] text-black  my-4">
              {testimonials[activeIndex].text}
            </p>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-[#ffffff] border border-gray-300 flex items-center justify-center cursor-pointer "
            >
              <LiaAngleLeftSolid />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-[#D0F94A] shadow flex items-center justify-center hover:bg-[#C0F94A] transition cursor-pointer " 
            >
              <LiaAngleRightSolid />
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Testimonial Cards */}
      {/* <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="p-6 bg-transparent border border-gray-200 rounded-lg "
          >
            <div>
              <h4 className="font-semibold mb-2 flex items-center space-x-2">
                <span className="text-green-600">
                  <img src="/images/testimonials/nameLogo.png" width="26" className="h-[fit-content] mt-0"/>
                </span>
                <span>{t.name}</span>
              </h4>  
            </div>
            
            <div className="flex gap-2 justify-start items-start">
              <img src="/images/testimonials/quote.png" width="26" className="h-[fit-content] mt-0"/>
              <p className="text-[16px]">{t.text}</p>
            </div>
          </div>
        ))}
      </div> */}

      {/* Row 3: Text + Logo Marquee */}
      <div className="grid md:grid-cols-[1fr_2fr] items-center gap-8 relative">
        <div>
          <h3 className="text-[26px] font-semibold mb-2">
            YOUR TRUSTED PARTNER FOR EFFORTLESS SERVICE EXCELLENCE
          </h3>
        </div>

        <div className="overflow-hidden relative w-full">
          <div className="absolute left-0 top-0 -translate-x-1/2 w-16 rounded-full bg-black opacity-100 blur-sm pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 via-gray-50/50 to-transparent pointer-events-none"></div>

          {/* Framer Motion Infinite Marquee */}
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {logos.concat(logos).map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-24 flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt={`logo-${idx}`}
                  width={96}
                  height={48}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
