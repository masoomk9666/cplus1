
"use client";

import { useState } from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Leadership() {
  const [expand, setExpand] = useState(false);

  const head = {
    name: "Ubaidullah Amjad",
    designation: "Chief Executive Officer",
    image: "images/about/head.png",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo Ligula Eget Dolor. Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo Ligula Eget Dolor. Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo Ligula Eget Dolor. Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo Ligula Eget Dolor.",
    socials: {
      linkedin: "#",
      facebook: "#",
    },
  };

  const team = [
    {
        name: "Ubaidullah Amjad",
    designation: "Manager Sales",
    image: "images/about/head.png",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    }
  },
  {
        name: "Ubaidullah Amjad",
    designation: "Manager Sales",
    image: "images/about/head.png",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    }
  },
  {
        name: "Ubaidullah Amjad",
    designation: "Manager Sales",
    image: "images/about/head.png",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    }
  },
  {
        name: "Ubaidullah Amjad",
    designation: "Manager Sales",
    image: "images/about/head.png",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    }
  },
  {
        name: "Ubaidullah Amjad",
    designation: "Manager Sales",
    image: "images/about/head.png",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    }
  },
  {
        name: "Ubaidullah Amjad",
    designation: "Manager Sales",
    image: "images/about/head.png",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    }
  },
  {
        name: "Ubaidullah Amjad",
    designation: "Manager Sales",
    image: "images/about/head.png",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    }
  },
  {
        name: "Ubaidullah Amjad",
    designation: "Manager Sales",
    image: "images/about/head.png",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    }
  }
]

  const IconWrapper = ({ href, children }) => (
    <a
      href={href}
      className="w-8 h-8 rounded-full flex items-center justify-center text-black"
      style={{
        background: "linear-gradient(135deg, #3CDB9D, #D0F94A)",
      }}
    >
      {children}
    </a>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Heading */}
      <h2 className="text-[48px] font-medium text-center mb-12">
        Leadership & Management
      </h2>

      {/* Leadership Row */}
      

      <div
        className="p-[1px] rounded-xl mb-14"
        style={{
          background: "linear-gradient(135deg, #3CDB9D, #D0F94A)",
        }}
      >
        <div className="bg-white rounded-xl p-2 flex flex-col md:flex-row gap-10">
          <img
            src={head.image}
            alt={head.name}
            className="w-32 h-32 md:w-70 md:h-60 rounded-lg object-cover bg-gradient-to-b from-black to-white"
          />

          <div className="flex-1 py-3">
            <h3 className="text-[28px] font-medium">{head.name}</h3>
            <p className="text-black text-[16px] mb-2">{head.designation}</p>

            <div className="flex gap-2 mb-4">
              {head.socials.linkedin && (
                <IconWrapper href={head.socials.linkedin}>
                  <FaLinkedin size={18} />
                </IconWrapper>
              )}
              {head.socials.facebook && (
                <IconWrapper href={head.socials.facebook}>
                  <FaFacebook size={18} />
                </IconWrapper>
              )}
            </div>

            <div className="grid grid-cols-[6fr_0.5fr] items-start">
              <p
                className={`text-black text-[18px] transition-all duration-300 ${
                  expand ? "line-clamp-none" : "line-clamp-2"
                }`}
              >
                {head.description}
              </p>

              <button
                onClick={() => setExpand(!expand)}
                className="cursor-pointer flex justify-center pt-1"
              >
                {expand ? (
                  <MdKeyboardArrowUp size={25} />
                ) : (
                  <MdKeyboardArrowDown size={25} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className=" p-5 text-center "
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-50 h-50 border-b-10 border-t-4 border-x-7 border-gray-300 rounded-full mx-auto mb-4 object-cover bg-[#E9ECEB]"
            />

            <h4 className="text-[24px] font-medium">{member.name}</h4>
            <p className="text-black text-[16px] mb-3">{member.designation}</p>

            <div className="flex justify-center gap-2">
              {member.socials.linkedin && (
                <IconWrapper href={member.socials.linkedin}>
                  <FaLinkedin size={18} />
                </IconWrapper>
              )}
              {member.socials.facebook && (
                <IconWrapper href={member.socials.facebook}>
                  <FaFacebook size={18} />
                </IconWrapper>
              )}
              {member.socials.twitter && (
                <IconWrapper href={member.socials.twitter}>
                  <FaXTwitter size={18} />
                </IconWrapper>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
