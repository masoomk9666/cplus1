// components/BusinessModel.js
"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: 1,
    title: "Staff Augmentation",
    gif: "/images/businessModel/01.png",
    desc: "Fill skills gaps fast by bringing in qualified professionals whenever you need them.",
  },
  {
    id: 2,
    title: "Dedicated Teams",
    gif: "/images/businessModel/02.png",
    desc: "Build a dedicated team tailored to your project needs and long-term goals.",
  },
  {
    id: 3,
    title: "Software Development Outsourcing",
    gif: "/images/businessModel/03.png",
    desc: "Outsource your development projects to experts while focusing on your core business.",
  },
];

export default function BusinessModel() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full max-w-7xl flex flex-col items-center py-16 ">
      {/* Subheading */}
      <p className="text-[16px] text-black uppercase mb-2">BUSINESS MODELS</p>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-[45px] font-[500] mb-6 text-center">
        How Can We Work With You
      </h2>

      {/* Tabs */}
      <div className=" flex gap-4 mb-6 flex-wrap justify-center">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`rounded-full p-[2px] transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-gradient-to-b from-[#D0F94A] to-[#00879F]"
                : "bg-transparent"
            }`}
          >
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full w-full transition-all duration-300
      ${
        activeTab === tab.id
          ? "bg-black text-white"
          : "bg-gray-200 text-gray-700"
      }`}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>

      {/* Tab Description */}
      <p className="text-[18px] text-center text-black max-w-3xl mb-12">
        {tabs.find((tab) => tab.id === activeTab)?.desc}
      </p>

      {/* Image Row */}
        <div className="w-full flex flex-col items-center">

  {/* Top Flow Section */}
  <div className="flex items-center justify-between w-full max-w-5xl">

    {/* US */}
    <div className="flex flex-col items-center">
      <img
        src="/images/businessModel/logo.png"
        alt="US"
        className="w-16 h-16 object-contain"
      />
    </div>

    {/* Line */}
    <div className="flex-1 h-[2px] bg-gradient-to-r from-[#3CDB9D] via-[#D0F94A] to-[#3CDB9D] mx-6"></div>

    {/* YOUR PROJECT (CENTER) */}
    <div className="relative flex flex-col items-center">
      <img
        src={tabs.find(tab => tab.id === activeTab)?.gif}
        alt="Your Project"
        className="w-40 h-40 object-contain z-10"
      />
    </div>

    {/* Line */}
    <div className="flex-1 h-[2px] bg-gradient-to-r from-[#3CDB9D] via-[#D0F94A] to-[#3CDB9D] mx-6"></div>

    {/* YOU */}
    <div className="flex flex-col items-center">
      <img
        src="/images/businessModel/user.png"
        alt="You"
        className="w-16 h-16 object-contain"
      />
    </div>

  </div>

  {/* Gradient Divider */}
  {/* <div className="w-full max-w-4xl h-[3px] rounded-full bg-gradient-to-r from-[#3CDB9D] via-[#D0F94A] to-[#3CDB9D] my-6"></div> */}

  {/* Labels */}
  <div className="flex items-center justify-between w-[78%] max-w-5xl text-center">
    <h3 className="w-1/3 text-[22px] uppercase text-start">US</h3>
    <h3 className="w-1/3 text-[22px] uppercase">Your Project</h3>
    <h3 className="w-1/3 text-[22px] uppercase text-end">You</h3>
  </div>

</div>


      {/* <div className="flex justify-center items-center w-full mb-5">
        <div className="flex flex-col justify-end items-center relative w-full max-w-5xl h-40 md:h-50">
          <img
            src="/images/businessModel/logo.png" // replace with your actual image path
            alt="Business Model Illustration"
            fill
            style={{ objectFit: "contain" }}
            className="w-20 mr-8"
          />
        </div>
        <div className="flex flex-col justify-end items-center relative w-full max-w-5xl h-40 md:h-50">
          <img
            src={tabs.find((tab) => tab.id === activeTab)?.gif} // replace with your actual image path
            // src="/images/businessModel/01.png" 
            alt="Business Model Illustration"
            fill
            style={{ objectFit: "contain" }}
            className="w-60"
          />
        </div>
        <div className="flex flex-col justify-end items-center relative w-full max-w-5xl h-40 md:h-50">
          <img
            src="/images/businessModel/user.png" // replace with your actual image path
            alt="Business Model Illustration"
            fill
            style={{ objectFit: "contain" }}
            className="w-20 ml-8"
          />
        </div>
      </div>

      <div className="w-full max-w-4xl h-[3px] rounded-full bg-gradient-to-r from-[#3CDB9D] via-[#D0F94A] to-[#3CDB9D] mb-5" />


      <div className="flex justify-center items-center w-full mb-5">
        <div className="flex flex-col justify-end items-center relative w-full max-w-5xl ">
          <h3 className="text-[24px] uppercase mr-8">US</h3>
        </div>
        <div className="flex flex-col justify-end items-center relative w-full max-w-5xl h">
          <h3 className="text-[24px] uppercase">Your Project</h3>
        </div>
        <div className="flex flex-col justify-end items-center relative w-full max-w-5xl ">
          <h3 className="text-[24px] uppercase ml-8">You</h3>
        </div>
      </div> */}

      {/* Background Section */}
      <div className="w-full bg-black rounded-2xl p-8 md:p-20 text-center relative overflow-hidden bg-cover bg-center mt-10"
      style={{ backgroundImage: "url('/images/businessModel/bg1.png')" }}
      >
        <h3 className="text-2xl md:text-[44px] font-[500] text-white mb-4">
          Production Ready Solutions
        </h3>
        <p className="text-[18px] text-gray-300 mb-6 max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo.
        </p>
        <button className="bg-[#DDF94A] text-[18px] font-[400] text-black px-6 py-2 rounded-full  transition-transform">
          Contact Sales
        </button>
      </div>
    </div>
  );
}




