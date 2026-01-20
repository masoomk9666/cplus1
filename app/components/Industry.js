import CardCarousel from "./layout/CardCarousel";
import SkShadeBtn from "./layout/SkShadeBtn";
export default function Industry() {
  return (
    <section className="max-w-7xl py-20  bg-white">
      <div className="w-full mx-auto  text-center">
        <p className="text-[16px] tracking-widest text-black uppercase">
          Areas of Focus – What We Are Building
        </p>

        <h2 className="text-[48px] font-[500] mt-2">
          Engineered for your industry
        </h2>

        <p className="text-black max-w-5xl mx-auto mt-2 text-[18px]">
          We build intelligent, secure, and scalable digital solutions tailored to the unique challenges of every industry we serve. By combining deep domain knowledge with advanced engineering and AI-driven innovation, we help organizations modernize operations, accelerate growth, and stay competitive in a rapidly evolving digital landscape.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="text-[18px] px-6 py-2 rounded-full bg-[#E5E5E5] text-black">
            Learn more
          </button>
          {/* <button className="relative text-[18px] bg-black text-white px-5 py-2 rounded-full w-fit overflow-hidden">
            Lets Connect
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-30 h-6 rounded-full bg-white opacity-100 blur-sm pointer-events-none"></span>
          </button> */}
          <SkShadeBtn text="Lets Connect" />  
        </div>

        {/* Cards */}
        <div className="mt-16 flex gap-6 overflow-x-auto pb-6">
          <CardCarousel />
        </div>
      </div>
    </section>
  );
}
