"use client";
import { useState } from "react";

export default function ContactSection() {
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
    <>
      <section className="relative w-full max-w-7xl mx-auto pt-20 -mb-[8%]">
        {/* FIRST ROW */}
        <div className="py-4 flex flex-col items-center ">
          <h3 className="text-black text-[16px] font-[500] mb-2">CONTACT US</h3>
          <h2 className="text-[45px] font-[500] leading-tight mb-2">
            Do You Have A Challenge For Us?
          </h2>
          <p className="text-center w-[90%] max-w-2xl text-[18px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
          {/* <div className="flex gap-6">
            <Instagram className="w-10 h-10 cursor-pointer" />
            <Facebook className="w-10 h-10 cursor-pointer" />
            <Linkedin className="w-10 h-10 cursor-pointer" />
            <Twitter className="w-10 h-10 cursor-pointer" />
          </div> */}
        </div>

        {/* 2ND ROW */}
        <div className="grid lg:grid-cols-2 gap-10 rounded-xl items-center p-10 mt-10 overflow-hidden bg-white max-w-5xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[16px]">YOUR NAME</label>
              <input
                type="text"
                className="w-full border border-[2px] rounded-md px-4 py-3 mt-1"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-[16px]">YOUR EMAIL</label>
              <input
                type="email"
                className="w-full border border-[2px] rounded-md px-4 py-3 mt-1"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-[16px]">SERVICE YOU NEED</label>
            <input
              type="text"
              className="w-full border border-[2px] rounded-md px-4 py-3 mt-1"
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
            />
            {errors.service && (
              <p className="text-red-500 text-sm">{errors.service}</p>
            )}
          </div>

          <div>
            <label className="text-[16px]">YOUR MESSAGE</label>
            <textarea
              rows="4"
              className="w-full border border-[2px] rounded-md px-4 py-3 mt-1"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="group text-[18px] bg-[#D0F94A] text-black px-6 py-2 rounded-full font-[400] float-left cursor-pointer relative overflow-hidden"
          >
            Send Message
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-20 h-6 rounded-full bg-white opacity-0 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 z-10"></span>
          </button>
        </form>
        <div className="relative flex flex-col items-center h-full w-full">
          <img
            src="/images/contact/person.png"
            alt="Contact Us"
            className="absolute bottom-0  w-full h-full scale-120 mr-8 hidden lg:block object-cover "
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
    </>
  );
}
