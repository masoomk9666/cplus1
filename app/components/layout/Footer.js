"use client";
import { MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.service) newErrors.service = "Service is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowModal(true);
    }
  };

  return (
    <footer className="w-full">
      <section className="relative w-full max-w-7xl mx-auto pt-20 ">
        {/* FIRST ROW */}
        <div className="py-4 flex flex-col items-center ">
          <h3 className="text-black text-[16px] font-[500] mb-2">CONTACT US</h3>
          <h2 className="text-[48px] font-[500] leading-tight mb-2">
            Do You Have A Challenge For Us?
          </h2>
          <p className="text-center w-[90%] max-w-2xl text-[18px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus
          </p>
        </div>

        {/* 2ND ROW */}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 rounded-xl items-center  mt-10 overflow-hidden bg-transparent max-w-7xl mx-auto">
         
         <div>
          <form
            onSubmit={handleSubmit}
            className="absolute top-90 max-w-3xl space-y-6 p-10 rounded-2xl z-10"
            style={{
              backgroundImage: "url(images/contact/bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "30% 20%",
            }}
          >
            <div className="absolute inset-0 bg-white/20 pointer-events-none rounded-2xl -z-10 h-full" />

            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[16px]">Your Name
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="text-[16px]">Your Email
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Row 2: Company Name & Project Type */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[16px]">Company Name 
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-[16px]">Project Type</label>
                <input
                  type="text"
                  className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Row 3: Phone & Company URL */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[16px]">Phone Number 
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-[16px]">Company URL</label>
                <input
                  type="url"
                  className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Row 4: Region & Services */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[16px]">Region
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, region: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-[16px]">
                  Services you are looking for
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Last Row: Project Details (Full Width) */}
            <div>
              <label className="text-[16px]">Project Details
                <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                rows="4"
                className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
              
            </div>

            {/* Button (unchanged) */}
            <button
              type="submit"
              className="group text-[18px] bg-black text-white px-6 py-2 rounded-full font-[400] float-right cursor-pointer relative overflow-hidden"
            >
              Send Message
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-20 h-6 rounded-full bg-white opacity-0 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 z-10"></span>
            </button>
          </form>
          </div>
          <div className="relative flex flex-col items-start h-full w-full justify-center mt-10">
            <img
              src="/images/contact/person.png"
              alt="Contact Us"
              className=" hidden lg:block scale-110 object-cover "
            />
          </div>
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-xl p-8 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-xl"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">Form Data</h3>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Service:</strong> {formData.service}
            </p>
            <p>
              <strong>Message:</strong> {formData.message}
            </p>
          </div>
        </div>
      )}
      <section className="w-full bg-[#051C24] text-gray-300">
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
              <span className="cursor-pointer">
                <FaInstagram size={24} />
              </span>
              <span className="cursor-pointer">
                <FaFacebook size={24} />
              </span>
              <span className="cursor-pointer">
                <FaLinkedin size={24} />
              </span>
              <span className="cursor-pointer">
                <FaXTwitter size={24} />
              </span>
            </div>

            {/* COPYRIGHT */}
            <p className="text-center text-[#D0F94A]">
              © 2023 Copyright. All rights reserved.
            </p>

            {/* LINKS */}
            <div className="flex gap-6 text-[16px]">
              <a href="#" className="hover:text-white">
                Services
              </a>
              <a href="#" className="hover:text-white">
                Resources
              </a>
              <a href="#" className="hover:text-white">
                Company
              </a>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
