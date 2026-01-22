"use client"

import React from "react"

const Process = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <span className="mb-1 inline-block text-sm font-medium  text-black text-[16px] md:text-[16px]">
          RECRUITING PROCESS
        </span>

        {/* Heading */}
       <h2 className="text-[36px] md:text-[48px] font-medium text-[#051C24] mb-10">
  Your Path to Joining Cplusoft
</h2>


        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src="/images/careers/01.gif"
            alt="Recruiting Process"
            className="max-w-4xl w-full object-contain"
          />
        </div>

      </div>
    </section>
  )
}

export default Process
