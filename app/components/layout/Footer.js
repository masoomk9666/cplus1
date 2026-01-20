"use client";
import { MapPin, Phone,  } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const locations = [
  {
    icon: "/images/footer/01.png",
    address: "Business Center Sharjah Publishing City, Free Zone",
    phone: "+971 52 780 7088",
  },
  {
    icon: "/images/footer/02.png",
    address: "90 Keppel Road, Eastham, E602BE, London, UK",
    phone: "+44 7722 4041",
  },
  {
    icon: "/images/footer/03.png",
    address: "6454 N Mozart St, Chicago, IL, 60645-5265, United States",
    phone: "+1 312 7808",
  },
  {
    icon: "/images/footer/04.png",
    address: "Street 25, Giga down town DHA 2, Islamabad.PK",
    phone: "+971 777 8877",
  },
];
  return (
    <footer className="w-full bg-[#051C24] text-gray-300">
      <div className="flex flex-col  w-full  justify-end items-end pb-5 pt-50">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left max-w-7xl mx-auto ">
          {locations.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-start lg:justify-start mb-2 w-50 h-50">
                <img src={item.icon} alt="Location Icon" className="" />
            </div>
            <div className="flex gap-2 w-full justify-start items-start ">
                <MapPin className="w-8 h-8 text-[#D0F94A] mt-0" />
                <p className="text-[16px] text-white">{item.address}</p>
            </div>
            <div className="flex gap-2 w-full justify-start items-start ">
                <Phone className="w-5 h-5 text-[#D0F94A] mt-0" />
                <p className="text-[16px] text-white">{item.phone}</p>
            </div>
              
            </div>
          ))}
        </div>
        {/* DIVIDER */}
        <div className=" w-full border-t border-gray-600 my-5"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-7xl mx-auto ">

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-xl">
            <span className="cursor-pointer"><FaInstagram size={24}/></span>
            <span className="cursor-pointer"><FaFacebook size={24}/></span>
            <span className="cursor-pointer"><FaLinkedin size={24}/></span>
            <span className="cursor-pointer"><FaXTwitter size={24}/></span>
          </div>

          {/* COPYRIGHT */}
          <p className="text-center text-[#D0F94A]">
            © 2023 Copyright. All rights reserved.
          </p>

          {/* LINKS */}
          <div className="flex gap-6 text-[16px]">
            <a href="#" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Resources</a>
            <a href="#" className="hover:text-white">Company</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
