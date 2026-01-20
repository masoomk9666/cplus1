import React from "react";

const SkShadeBtn = ({text = "Learn More", shadeWidth="20"}) => {
  return (
    <button className="group relative text-[18px] bg-black text-white px-5 py-2 rounded-full w-fit overflow-hidden cursor-pointer">
      {text}
      {/* Inner green glow */}
      <span className={`absolute -bottom-5 left-1/2 -translate-x-1/2 w-${shadeWidth} h-6 rounded-full bg-white opacity-0 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100`}></span>
    </button>
  );
};
export default SkShadeBtn;
