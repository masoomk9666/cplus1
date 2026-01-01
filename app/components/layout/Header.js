
// "use client";
// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { ChevronDown } from "lucide-react";

// const Header = () => {
//   const [active, setActive] = useState("HOME");
//   const [isMegaOpen, setIsMegaOpen] = useState(false);

//   const megaRef = useRef(null);
//   const productBtnRef = useRef(null);

//   const menuItems = [
//     { name: "HOME", link: "/" },
//     { name: "ABOUT US", link: "/about" },
//     { name: "PRODUCTS", link: "#" },
//     { name: "INDUSTRIES", link: "/industries" },
//     { name: "CAREERS", link: "/careers" },
//     { name: "CONTACT US", link: "/contact" },
//   ];

//   const glow =
//     // "relative overflow-hidden shadow-[0_0_25px_rgba(208,249,74,0.45)] " +
//     "relative overflow-hidden " +
//     "after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 " +
//     "after:w-1/2 after:h-4 after:bg-[radial-gradient(circle,_#ffffff_0%,_transparent_70%)] after:opacity-80";

//   // ✅ OUTSIDE CLICK HANDLER (FIXED)
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (
//         megaRef.current &&
//         !megaRef.current.contains(e.target) &&
//         productBtnRef.current &&
//         !productBtnRef.current.contains(e.target)
//       ) {
//         setIsMegaOpen(false);
//         setActive("HOME");
//       }
//     };

//     if (isMegaOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMegaOpen]);

//   return (
//     <>
//       {/* ================= HEADER ================= */}
//       <header className="absolute top-0 bg-transaparent text-white w-full z-50">
//         <div className="w-full flex items-center justify-between px-30 py-3">
          
//           {/* Logo */}
//           <img
//             src="/images/logos/logo.png"
//             alt="Plusoft Logo"
//             className="w-28 object-contain"
//           />

//           {/* Menu */}
//           <nav className="hidden md:flex items-center space-x-6">
//             <div className="bg-white/10 p-2 rounded-full flex items-center space-x-1">

//               {menuItems.map((item) =>
//                 item.name === "PRODUCTS" ? (
//                   <button
//                     key={item.name}
//                     ref={productBtnRef}
//                     onClick={() => {
//                       setIsMegaOpen((prev) => !prev);
//                       setActive("PRODUCTS");
//                     }}
//                     className={`flex text-[11px] items-center gap-1 py-2 px-4 font-medium rounded-full transition
//                       ${
//                         isMegaOpen
//                           ? `bg-[#D0F94A] text-[#051C24] ${glow}`
//                           : "hover:text-[#D0F94A]"
//                       }`}
//                   >
//                     PRODUCTS
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform ${
//                         isMegaOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>
//                 ) : (
//                   <Link
//                     key={item.name}
//                     href={item.link}
//                     onClick={() => {
//                       setActive(item.name);
//                       setIsMegaOpen(false);
//                     }}
//                     className={`py-2 text-[11px] px-4 font-medium rounded-full transition
//                       ${
//                         active === item.name
//                           ? `bg-[#D0F94A] text-[#051C24] ${glow}`
//                           : "hover:text-[#D0F94A]"
//                       }`}
//                   >
//                     {item.name}
//                   </Link>
//                 )
//               )}
//             </div>

//             {/* Language */}
//             <div className="flex items-center space-x-2 ml-4">
//               <button className="hover:text-[#D0F94A]">EN</button>
//               <span>|</span>
//               <button className="hover:text-[#D0F94A]">عربي</button>
//             </div>
//           </nav>
//         </div>
//       </header>

//       {/* ================= MEGA MENU ================= */}
//       {isMegaOpen && (
//         <div
//           ref={megaRef}
//           className="fixed top-[80px] left-1/2 -translate-x-1/2 w-[85%]
//           bg-white/10 backdrop-blur-xl border border-white/10
//           rounded-xl shadow-2xl text-white z-50"
//         >
//           <div className="w-full mx-auto px-16 py-12">
//             <div className="grid grid-cols-4 divide-x divide-white gap-4">

//               {/* Column 1 */}
//               <div className="px-6">
//                 <h4 className="text-[13px] font-[400] mb-4">
//                   SOFTWARE DEVELOPMENT
//                 </h4>
//                 <ul className="text-[16px] font-[600] space-y-2 text-gray-300">
//                   <div>
//                     <li>Web Applications</li>
//                     <p className="text-[14px] text-[#bababa] font-[400]">
//                       Edge intelligence for every creator
//                     </p>
//                   </div>
//                   <div>
//                     <li>Mobile Applications</li>
//                     <p className="text-[14px] text-[#bababa] font-[400]">
//                       Edge intelligence for every creator
//                     </p>
//                   </div>
//                   <div>
//                     <li>Custom Software</li>
//                     <p className="text-[14px] text-[#bababa] font-[400]">
//                       Edge intelligence for every creator
//                     </p>
//                   </div>
//                 </ul>
//               </div>

//               {/* Column 2 */}
//               <div className="px-6">
//                 <h4 className="text-[13px] font-[400] mb-4">
//                   GENERATIVE AI
//                 </h4>
//                 <ul className="text-[16px] font-[600] space-y-2 text-gray-300">
//                   <div>
//                     <li>
//                       AI Chatbots{" "}
//                       <span className="bg-lime-400 text-black text-xs px-2 py-0.5 rounded-full">
//                         NEW
//                       </span>
//                     </li>
//                     <p className="text-[14px] text-[#bababa] font-[400]">
//                       Edge intelligence for every creator
//                     </p>
//                   </div>
//                   <div>
//                     <li>LLM Solutions</li>
//                     <p className="text-[14px] text-[#bababa] font-[400]">
//                       Edge intelligence for every creator
//                     </p>
//                   </div>
//                   <div>
//                     <li>AI Automation</li>
//                     <p className="text-[14px] text-[#bababa] font-[400]">
//                       Edge intelligence for every creator
//                     </p>
//                   </div>
//                 </ul>
//               </div>

//               {/* Column 3 */}
//               <div className="px-6">
//                 <h4 className="text-[13px] font-[400] mb-4">
//                   ENTERPRISE SOLUTIONS
//                 </h4>
//                 <ul className="text-[16px] font-[600] space-y-2 text-gray-300">
//                   <div>
//                     <li>ERP Systems</li>
//                     <p className="text-[14px] text-[#bababa] font-[400]">
//                       Edge intelligence for every creator
//                     </p>
//                   </div>
//                   <div>
//                     <li>CRM Platforms</li>
//                     <p className="text-[14px] text-[#bababa] font-[400]">
//                       Edge intelligence for every creator
//                     </p>
//                   </div>
//                   <div>
//                     <li>Business Automation</li>
//                     <p className="text-[14px] text-[#bababa] font-[400]">
//                       Edge intelligence for every creator
//                     </p>
//                   </div>
//                 </ul>
//               </div>

//               {/* Column 4 */}
//               <div className="px-6">
//                 <h4 className="text-[13px] font-[400] mb-4">
//                   CLOUD & DEVOPS
//                 </h4>
//                 <ul className="text-[16px] font-[600] space-y-2 text-gray-300">
//                   <div>
//                     <li>AWS & Azure</li>
//                     <p className="text-[14px] text-[#bababa] font-[400]">
//                       Edge intelligence for every creator
//                     </p>
//                   </div>
//                   <div>
//                     <li>CI/CD Pipelines</li>
//                     <p className="text-[14px] text-[#bababa] font-[400]">
//                       Edge intelligence for every creator
//                     </p>
//                   </div>
//                   <div>
//                     <li>Cloud Security</li>
//                     <p className="text-[14px] text-[#bababa] font-[400]">
//                       Edge intelligence for every creator
//                     </p>
//                   </div>
//                 </ul>
//               </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;






"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

const Header = () => {
  const [active, setActive] = useState("HOME");
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navRef = useRef(null);
  const megaRef = useRef(null);
  const productBtnRef = useRef(null);
  const itemRefs = useRef({});

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "PRODUCTS", link: "#" },
    { name: "INDUSTRIES", link: "/industries" },
    { name: "CAREERS", link: "/careers" },
    { name: "CONTACT US", link: "/contact" },
  ];

  // Set indicator on active item
  useEffect(() => {
    const el = itemRefs.current[active];
    if (!el || !navRef.current) return;

    const rect = el.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();

    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  }, [active, isCollapsed, isScrolled]);

  // Close mega menu on outside click
  useEffect(() => {
    const handleOutside = (e) => {
      if (
        megaRef.current &&
        !megaRef.current.contains(e.target) &&
        productBtnRef.current &&
        !productBtnRef.current.contains(e.target)
      ) {
        setIsMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 80);
      if (scrollY > 80 && !isMegaOpen) setIsCollapsed(true);
      if (scrollY <= 80 && !isMegaOpen) setIsCollapsed(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMegaOpen]);

  // Hover handler for main items
  const handleHover = (e) => {
    if (isCollapsed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();
    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  };

  // On mouse leave main menu → collapse only if scrolled & mega menu not open
  const handleMouseLeave = () => {
    if (isScrolled && !isMegaOpen) {
      setIsCollapsed(true);
    }
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500`}>
        <div className="flex items-center justify-between px-30 py-3 bg-transparent">
          {/* Logo */}
          <img
            src="/images/logos/logo.png"
            alt="Logo"
            className={`w-28 transition-transform duration-500 ${
              isScrolled ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100"
            }`}
          />

          {/* NAV */}
          {/* <nav className={`flex items-center space-x-6  ${
            isScrolled ? "translate-x-28" : ""
          }`}>
            {!isCollapsed || isMegaOpen ? (
              <div
                ref={navRef}
                onMouseLeave={handleMouseLeave}
                className={`relative flex items-center p-2 rounded-full transition-all duration-500 ${
                  isScrolled ? "bg-white" : "bg-white/10"
                }`}
              >
                <span
                  className="absolute top-1 bottom-1 rounded-full bg-[#D0F94A]
                  transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{
                    left: indicator.left,
                    width: indicator.width,
                    opacity: indicator.opacity,
                  }}
                />
              
                {menuItems.map((item) =>
                  item.name === "PRODUCTS" ? (
                    <button
                      key={item.name}
                      ref={(el) => {
                        productBtnRef.current = el;
                        itemRefs.current[item.name] = el;
                      }}
                      onMouseEnter={() => setIsMegaOpen(true)}
                      className={`relative z-10 flex items-center gap-1 py-1 px-4 text-[11px] font-medium tracking-wider transition-colors duration-300 ${
                        isScrolled ? "text-black" : "text-white hover:text-black"
                      }`}
                    >
                      PRODUCTS
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isMegaOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      ref={(el) => (itemRefs.current[item.name] = el)}
                      href={item.link}
                      onMouseEnter={handleHover}
                      onClick={() => setActive(item.name)}
                      className={`relative z-10 py-1 px-4 text-[11px] font-medium tracking-wider transition-colors duration-300 ${
                        isScrolled
                          ? item.name === active
                            ? "text-black font-bold"
                            : "text-black"
                          : "text-white hover:text-black"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            ) : (
              <div className="relative">
                <Menu
                  size={40}
                  className="text-black cursor-pointer bg-white p-3 rounded-full transition-transform duration-300 transform "
                  onMouseEnter={() => setIsCollapsed(false)}
                />
              </div>
            )}

            <div
              className={`ml-4 flex items-center space-x-2 transition-transform duration-500 ${
                isScrolled ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              <button className="text-white text-[12px] hover:text-[#D0F94A]">EN</button>
              <span className="text-white">|</span>
              <button className="text-white text-[12px] hover:text-[#D0F94A]">عربي</button>
            </div>
          </nav> */}

          <nav className={`flex items-center space-x-6 ${isScrolled ? "translate-x-28" : ""}`}>
  {/* Main Menu */}
  <div
    ref={navRef}
    onMouseLeave={handleMouseLeave}
    className={`relative flex items-center p-2 rounded-full transition-all duration-1200 ease-[cubic-bezier(0.4,0,0.2,1)] ${
      isScrolled ? "bg-white" : "bg-white/10"
    }`}
  >
    <span
      className={isScrolled && isCollapsed ? "hidden" : `absolute top-1 bottom-1 rounded-full bg-[#D0F94A] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]`}
      style={{
        left: indicator.left,
        width: indicator.width,
        opacity: indicator.opacity,
      }}
    />

    {!isCollapsed ? (
      menuItems.map((item) =>
        item.name === "PRODUCTS" ? (
          <button
            key={item.name}
            ref={(el) => {
              productBtnRef.current = el;
              itemRefs.current[item.name] = el;
            }}
            onMouseEnter={() => setIsMegaOpen(true)}
            className={`relative z-10 flex items-center gap-1 py-1 px-4 text-[11px] font-medium tracking-wider transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white hover:text-black"
            }`}
          >
            PRODUCTS
            <ChevronDown
              size={16}
              className={`transition-transform ${isMegaOpen ? "rotate-180" : ""}`}
            />
          </button>
        ) : (
          <Link
            key={item.name}
            ref={(el) => (itemRefs.current[item.name] = el)}
            href={item.link}
            onMouseEnter={handleHover}
            onClick={() => setActive(item.name)}
            className={`relative z-10 py-1 px-4 text-[11px] font-medium tracking-wider transition-colors duration-300 ${
              isScrolled
                ? item.name === active
                  ? "text-black font-bold"
                  : "text-black"
                : "text-white hover:text-black"
            }`}
          >
            {item.name}
          </Link>
        )
      )
    ) : (
      // Show Menu Icon if collapsed OR scrolled
      <Menu
        size={25}
        className="w-[fit-content] text-black cursor-pointer bg-white p-0 rounded-full transition-transform duration-300 transform"
        onMouseEnter={() => setIsCollapsed(false)}
      />
    )}
  </div>

  

  {/* Language */}
  <div
    className={`ml-4 flex items-center space-x-2 transition-transform duration-500 ${
      isScrolled ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100"
    }`}
  >
    <button className="text-white text-[12px] hover:text-[#D0F94A]">EN</button>
    <span className="text-white">|</span>
    <button className="text-white text-[12px] hover:text-[#D0F94A]">عربي</button>
  </div>
</nav>


        </div>
      </header>

      {/* MEGA MENU */}
      {isMegaOpen && (
        <div
          ref={megaRef}
          onMouseLeave={() => setIsMegaOpen(false)}
          className={`fixed top-[80px] left-1/2 -translate-x-1/2 w-[85%] rounded-xl shadow-2xl z-50 transition-all duration-500 ${
            isScrolled ? "bg-white text-black " : "bg-white/10 text-white backdrop-blur-xl "
          }`}
        >
          <div className="w-full mx-auto px-16 py-12">
            <div className="grid grid-cols-4 divide-x divide-gray-300 gap-4">
              {/* Column 1 */}
              <div className="px-6">
                <h4 className="text-[13px] font-[400] mb-4">SOFTWARE DEVELOPMENT</h4>
                <ul className="text-[16px] font-[600] space-y-2">
                  <div>
                    <li>Web Applications</li>
                    <p className="text-[14px] text-gray-300 font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                  <div>
                    <li>Mobile Applications</li>
                    <p className="text-[14px] text-gray-300 font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                  <div>
                    <li>Custom Software</li>
                    <p className="text-[14px] text-gray-300 font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                </ul>
              </div>
              {/* Column 2 */}
              <div className="px-6">
                <h4 className="text-[13px] font-[400] mb-4">GENERATIVE AI</h4>
                <ul className="text-[16px] font-[600] space-y-2">
                  <div>
                    <li>
                      AI Chatbots{" "}
                      <span className="bg-lime-400 text-black text-xs px-2 py-0.5 rounded-full">
                        NEW
                      </span>
                    </li>
                    <p className="text-[14px] text-gray-300 font-[400]">Edge intelligence for every creator</p>
                  </div>
                  <div>
                    <li>LLM Solutions</li>
                    <p className="text-[14px] text-gray-300 font-[400]">Edge intelligence for every creator</p>
                  </div>
                  <div>
                    <li>AI Automation</li>
                    <p className="text-[14px] text-gray-300 font-[400]">Edge intelligence for every creator</p>
                  </div>
                </ul>
              </div>
              {/* Column 3 */}
              <div className="px-6">
                <h4 className="text-[13px] font-[400] mb-4">ENTERPRISE SOLUTIONS</h4>
                <ul className="text-[16px] font-[600] space-y-2">
                  <div>
                    <li>ERP Systems</li>
                    <p className="text-[14px] text-gray-300 font-[400]">Edge intelligence for every creator</p>
                  </div>
                  <div>
                    <li>CRM Platforms</li>
                    <p className="text-[14px] text-gray-300 font-[400]">Edge intelligence for every creator</p>
                  </div>
                  <div>
                    <li>Business Automation</li>
                    <p className="text-[14px] text-gray-300 font-[400]">Edge intelligence for every creator</p>
                  </div>
                </ul>
              </div>
              {/* Column 4 */}
              <div className="px-6">
                <h4 className="text-[13px] font-[400] mb-4">CLOUD & DEVOPS</h4>
                <ul className="text-[16px] font-[600] space-y-2">
                  <div>
                    <li>AWS & Azure</li>
                    <p className="text-[14px] text-gray-300 font-[400]">Edge intelligence for every creator</p>
                  </div>
                  <div>
                    <li>CI/CD Pipelines</li>
                    <p className="text-[14px] text-gray-300 font-[400]">Edge intelligence for every creator</p>
                  </div>
                  <div>
                    <li>Cloud Security</li>
                    <p className="text-[14px] text-gray-300 font-[400]">Edge intelligence for every creator</p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

