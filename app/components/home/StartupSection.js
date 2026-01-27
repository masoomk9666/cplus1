

"use client";
import SkShadeBtn from "../layout/SkShadeBtn";

export default function StartupSection() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 sm:py-16 md:py-20 lg:py-25 px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-[500] text-black max-w-3xl md:max-w-lg lg:max-w-3xl leading-tight md:leading-normal">
          From Idea to Seed Funding — We Build Startups End-to-End
        </h1>

        <div className="mt-4 sm:mt-0">
          <SkShadeBtn text="Let's Connect" />
        </div>
      </div>
      
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-30">
        <img 
          src="images/startup/01.gif" 
          alt="Startup Discovery" 
          className="w-full h-auto object-cover rounded-xl sm:rounded-lg md:rounded-2xl" 
        /> 
      </div>
    </section>
  );
}