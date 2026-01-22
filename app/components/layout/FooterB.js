"use client";

import React from "react";
import { Instagram, Facebook, Linkedin, X } from "lucide-react";


const FooterB = () => {
  return (
    <footer className="bg-[#051C24] text-white pt-10">
      {/* Heading & Subheading */}
      <div className="text-center mb-6">
        <h2 className="text-[35px] font-bold mb-2">Early Access to Exciting Careers!</h2>
        <p className="text-gray-400 text-[15px]">Stay Ahead of the curve - Join Our Job Alert Network</p>
      </div>

      {/* Resume Button */}
      <div className="flex justify-center mb-6">
        <button className="bg-[#D0F94A] text-black px-6 py-3 rounded-full font-medium hover:bg-lime-500 transition">
          Drop your Resume
        </button>
      </div>

      {/* Center Logo/Image */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/careers/footer-logo.png" // replace with your actual logo path
          alt="CPlusSoft"
          className="h-46"
        />
      </div>

      {/* Two Buttons Inline */}
   <div className="flex justify-center gap-4 mb-6">
  <button className="px-5 py-2 text-[#D0F94A] flex items-center gap-2 transition">
    View Website
  </button>

  <button className="px-5 py-2 text-[#D0F94A] flex items-center gap-2 transition">
    {/* SVG as an image */}
    <img src="/images/careers/svg-help.png" alt="Help Icon" className="w-4 h-4" />
    Help
  </button>
</div>


      {/* Divider Line */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 pb-6">
        {/* Left: Social + Copyright */}
        <div className="flex items-center gap-4 mb-4 md:mb-0 ">
      <div className="flex gap-3">
  <Instagram size={20} color="#FFFFFF" />
  <Facebook size={20} color="#FFFFFF" />
  <Linkedin size={20} color="#FFFFFF" />
  <X size={20} color="#FFFFFF" />
</div>

          <span className="text-[#D0F94A] text-sm">© 2026 Copyright. All rights reserved.</span>
        </div>

        {/* Right: Footer Links */}
        <div className="flex gap-6 text-white">
          <a href="#">Services</a>
          <a href="#">Resources</a>
          <a href="#">Company</a>
          <a href="#">Company</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterB;
