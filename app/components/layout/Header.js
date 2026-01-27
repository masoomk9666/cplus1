
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Ellipsis, Menu, X } from "lucide-react";

const Header = () => {
  const [active, setActive] = useState("HOME");
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isLogoHidden, setIsLogoHidden] = useState(false); // New state for logo visibility

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    opacity: 1,
  });

  const navRef = useRef(null);
  const megaRef = useRef(null);
  const productBtnRef = useRef(null);
  const itemRefs = useRef({});
  const mobileMenuRef = useRef(null);

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "PRODUCTS", link: "#" },
    { name: "INDUSTRIES", link: "/industries" },
    { name: "CAREERS", link: "/careers" },
    { name: "CONTACT US", link: "/contact" },
  ];

  // Check initial scroll position on mount
  useEffect(() => {
    const checkInitialScroll = () => {
      const scrollY = window.scrollY;
      const scrolled = scrollY > 80;
      setIsScrolled(scrolled);
      setIsCollapsed(scrolled && !isMegaOpen && !isMobile);
      setHasMounted(true);
    };

    checkInitialScroll();
  }, []);

  // Check device type on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileDevice = window.innerWidth < 1024;
      setIsMobile(isMobileDevice);
      
      // On mobile, adjust logo visibility based on scroll
      if (isMobileDevice) {
        const scrollY = window.scrollY;
        setIsLogoHidden(scrollY > 80 && !isMobileMenuOpen);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Handle scroll for mobile logo visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrolled = scrollY > 80;
      
      setIsScrolled(scrolled);
      
      if (!isMobile) {
        if (scrollY > 80 && !isMegaOpen && !isMobile) setIsCollapsed(true);
        if (scrollY <= 80 && !isMegaOpen && !isMobile) setIsCollapsed(false);
      } else {
        // Mobile specific logic
        if (scrollY > 80 && !isMobileMenuOpen) {
          setIsLogoHidden(true);
        } else {
          setIsLogoHidden(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMegaOpen, isMobile, isMobileMenuOpen]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest("button")?.classList.contains("mobile-menu-toggle")
      ) {
        setIsMobileMenuOpen(false);
        // When closing mobile menu on scroll, hide logo if scrolled
        if (window.scrollY > 80 && isMobile) {
          setIsLogoHidden(true);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  // Handle mobile menu open/close
  useEffect(() => {
    if (isMobileMenuOpen) {
      // When mobile menu opens, show logo
      setIsLogoHidden(false);
    } else {
      // When mobile menu closes, check scroll position
      if (window.scrollY > 80 && isMobile) {
        setIsLogoHidden(true);
      }
    }
  }, [isMobileMenuOpen, isMobile]);

  // Close mobile menu when clicking a link
  const handleMobileLinkClick = (itemName) => {
    setActive(itemName);
    setIsMobileMenuOpen(false);
    if (itemName !== "PRODUCTS") {
      setIsMegaOpen(false);
    }
    
    // After closing mobile menu, check scroll position for logo
    if (window.scrollY > 80 && isMobile) {
      setIsLogoHidden(true);
    }
  };

  // Check if indicator is over a specific item
  const isIndicatorOverItem = (itemName) => {
    if (isMobile) return false;

    const itemEl = itemRefs.current[itemName];
    if (!itemEl || !navRef.current) return false;

    const itemRect = itemEl.getBoundingClientRect();
    const indicatorLeft = indicator.left;
    const indicatorRight = indicator.left + indicator.width;
    const itemLeft =
      itemRect.left - navRef.current.getBoundingClientRect().left;
    const itemRight = itemLeft + itemRect.width;

    return indicatorLeft < itemRight && indicatorRight > itemLeft;
  };

  // Get text color for menu items - FIXED
  const getTextColor = (itemName) => {
    if (isMobile) {
      return itemName === active ? "text-black font-bold" : "text-gray-600";
    }

    const isActive = itemName === active;
    const indicatorOverThis = isIndicatorOverItem(itemName);

    if (!isScrolled) {
      // When NOT scrolled (transparent background at top)
      if (indicatorOverThis) {
        // If indicator is over this item, make it black
        return "text-black font-bold";
      } else if (isActive) {
        // If this is the active item but indicator is NOT over it, make it white
        return "text-white font-bold";
      } else {
        // Neither active nor under indicator
        return "text-white";
      }
    } else {
      // When scrolled (white background)
      if (indicatorOverThis) {
        return "text-black font-bold";
      } else if (isActive) {
        // Active item when scrolled - always black
        return "text-black font-bold";
      } else {
        return "text-black";
      }
    }
  };

  // Set indicator on active item
  useEffect(() => {
    if (isMobile || !hasMounted) return;

    const el = itemRefs.current[active];
    if (!el || !navRef.current) return;

    const rect = el.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();

    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  }, [active, isCollapsed, isScrolled, isMobile, hasMounted]);

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

  // Set indicator to PRODUCTS when mega menu opens or when hovering over mega menu
  useEffect(() => {
    if (isMobile || !hasMounted) return;

    if (isMegaOpen && productBtnRef.current && navRef.current) {
      const rect = productBtnRef.current.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      setIndicator({
        left: rect.left - parentRect.left,
        width: rect.width,
        opacity: 1,
      });
    }
  }, [isMegaOpen, isMobile, hasMounted]);

  // Hover handler for main items - UPDATED to close mega menu
  const handleHover = (e, itemName) => {
    if (isCollapsed || isMobile || !hasMounted) return;

    // Close mega menu if hovering over any item other than PRODUCTS
    if (itemName !== "PRODUCTS" && isMegaOpen) {
      setIsMegaOpen(false);
    }

    // Only move indicator if not hovering over PRODUCTS item while mega menu is open
    if (!(itemName === "PRODUCTS" && isMegaOpen)) {
      const rect = e.currentTarget.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();
      setIndicator({
        left: rect.left - parentRect.left,
        width: rect.width,
        opacity: 1,
      });
    }
  };

  // Handle PRODUCTS button hover
  const handleProductsHover = (e) => {
    if (isCollapsed || isMobile || !hasMounted) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();
    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });

    setIsMegaOpen(true);
  };

  // Reset indicator to active item when mouse leaves nav
  const handleMouseLeave = () => {
    if (isMobile || !hasMounted) return;

    // If mega menu is open, keep indicator on PRODUCTS
    if (isMegaOpen && productBtnRef.current && navRef.current) {
      const rect = productBtnRef.current.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      setIndicator({
        left: rect.left - parentRect.left,
        width: rect.width,
        opacity: 1,
      });
    } else {
      const el = itemRefs.current[active];
      if (!el || !navRef.current || isCollapsed) return;

      const rect = el.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      setIndicator({
        left: rect.left - parentRect.left,
        width: rect.width,
        opacity: 1,
      });
    }

    if (isScrolled && !isMegaOpen) {
      setIsCollapsed(true);
    }
  };

  // Handle mega menu mouse enter
  const handleMegaMenuEnter = () => {
    if (isMobile || !hasMounted) return;

    // When entering mega menu, ensure indicator stays on PRODUCTS
    if (productBtnRef.current && navRef.current) {
      const rect = productBtnRef.current.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      setIndicator({
        left: rect.left - parentRect.left,
        width: rect.width,
        opacity: 1,
      });
    }
  };

  // Handle mega menu mouse leave
  const handleMegaMenuLeave = () => {
    setIsMegaOpen(false);

    if (isMobile || !hasMounted) return;

    // Reset to active item when leaving mega menu
    const el = itemRefs.current[active];
    if (!el || !navRef.current || isCollapsed) return;

    const rect = el.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();

    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  };

  // Handle mobile products click
  const handleMobileProductsClick = () => {
    setIsMegaOpen(!isMegaOpen);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500`}>
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-30 py-3 bg-transparent">
          {/* Logo - Mobile visibility control */}
          <img
            src="/images/logos/betaLogo.png"
            alt="Logo"
            className={`w-40 md:w-50 transition-all duration-500 z-100 ${
              isMobile
                ? isLogoHidden
                  ? "-translate-y-20 opacity-0"
                  : "translate-y-0 opacity-100"
                : isScrolled && !isMobile
                  ? "-translate-y-20 opacity-0"
                  : "translate-y-0 opacity-100"
            }`}
          />

          {/* Mobile Menu Toggle - Updated with green background */}
          <button
            className={`lg:hidden mobile-menu-toggle z-60 transition-all duration-300 rounded-full ${
              isMobileMenuOpen ? "p-2" : "p-2 rounded-full"
            } ${
              isMobileMenuOpen || window.scrollY > 80
                ? "bg-[#D0F94A]"
                : "bg-transparent"
            }`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-black " />
            ) : (
              <Menu size={28} className={`${window.scrollY > 80 ? "text-black" : "text-white"}`} />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex items-center space-x-6 transition-all duration-[1000ms] ease-in-out ${isScrolled ? "translate-x-28" : ""}`}
          >
            {/* Main Menu */}
            <div
              ref={navRef}
              onMouseLeave={handleMouseLeave}
              className={`relative flex items-center p-2 rounded-full transition-all ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isCollapsed
                  ? "bg-[#D0F94A]"
                  : isScrolled
                    ? "bg-white"
                    : "bg-white/10"
              }`}
            >
              <span
                className={
                  isCollapsed
                    ? "hidden"
                    : `absolute top-1 bottom-1 rounded-full bg-[#D0F94A] text-black transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden`
                }
                style={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: indicator.opacity,
                }}
              >
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-15 h-3 rounded-full bg-white opacity-100 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out  group-hover:scale-100"></span>
              </span>

              {!isCollapsed ? (
                menuItems.map((item) =>
                  item.name === "PRODUCTS" ? (
                    <button
                      key={item.name}
                      ref={(el) => {
                        productBtnRef.current = el;
                        itemRefs.current[item.name] = el;
                      }}
                      onMouseEnter={handleProductsHover}
                      className={`relative z-10 flex items-center gap-1 py-1 px-4 text-[11px] font-medium tracking-wider transition-colors duration-300 ${getTextColor(item.name)}`}
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
                      onMouseEnter={(e) => handleHover(e, item.name)}
                      onClick={() => setActive(item.name)}
                      className={`relative z-10 py-1 px-4 text-[11px] font-medium tracking-wider transition-colors duration-300 ${getTextColor(item.name)}`}
                    >
                      {item.name}
                    </Link>
                  ),
                )
              ) : (
                // Show Menu Icon if collapsed OR scrolled
                <Ellipsis
                  size={25}
                  className="w-[fit-content] text-black cursor-pointer bg-transparent p-0 rounded-full transition-transform duration-300 transform "
                  onMouseEnter={() => setIsCollapsed(false)}
                />
              )}
            </div>

            {/* Language - Desktop */}
            <div
              className={`ml-4 flex items-center space-x-2 transition-transform duration-500 ${
                isScrolled
                  ? "-translate-y-20 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <button className="text-white text-[12px] hover:text-[#D0F94A]">
                EN
              </button>
              <span className="text-white">|</span>
              <button className="text-white text-[12px] hover:text-[#D0F94A]">
                عربي
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-lg pt-20"
          >
            <div className="h-full flex flex-col">
              <div className="flex-1 overflow-y-auto px-6 pb-20">
                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-800 pb-4">
                      {item.name === "PRODUCTS" ? (
                        <div>
                          <button
                            onClick={handleMobileProductsClick}
                            className={`flex items-center justify-between w-full text-left py-2 text-[14px] font-medium ${
                              active === item.name ? "text-[#D0F94A]" : "text-white"
                            }`}
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              size={20}
                              className={`transition-transform ${isMegaOpen ? "rotate-180" : ""}`}
                            />
                          </button>

                          {/* Mobile Mega Menu */}
                          {isMegaOpen && (
                            <div className="ml-4 mt-2 space-y-4 animate-fadeIn">
                              <div className="space-y-3">
                                <h4 className="text-[#D0F94A] text-sm font-medium">
                                  SOFTWARE DEVELOPMENT
                                </h4>
                                <ul className="space-y-2">
                                  <li className="text-white">Web Applications</li>
                                  <li className="text-white">
                                    Mobile Applications
                                  </li>
                                  <li className="text-white">Custom Software</li>
                                </ul>
                              </div>

                              <div className="space-y-3">
                                <h4 className="text-[#D0F94A] text-sm font-medium">
                                  GENERATIVE AI
                                </h4>
                                <ul className="space-y-2">
                                  <li className="text-white">
                                    AI Chatbots{" "}
                                    <span className="bg-[#CDFB26] text-black text-xs px-2 py-0.5 rounded-full">
                                      NEW
                                    </span>
                                  </li>
                                  <li className="text-white">LLM Solutions</li>
                                  <li className="text-white">AI Automation</li>
                                </ul>
                              </div>

                              <div className="space-y-3">
                                <h4 className="text-[#D0F94A] text-sm font-medium">
                                  ENTERPRISE SOLUTIONS
                                </h4>
                                <ul className="space-y-2">
                                  <li className="text-white">ERP Systems</li>
                                  <li className="text-white">CRM Platforms</li>
                                  <li className="text-white">
                                    Business Automation
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-3">
                                <h4 className="text-[#D0F94A] text-sm font-medium">
                                  CLOUD & DEVOPS
                                </h4>
                                <ul className="space-y-2">
                                  <li className="text-white">AWS & Azure</li>
                                  <li className="text-white">CI/CD Pipelines</li>
                                  <li className="text-white">Cloud Security</li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.link}
                          onClick={() => handleMobileLinkClick(item.name)}
                          className={`block py-2 text-[14px] font-medium ${
                            active === item.name ? "text-[#D0F94A]" : "text-white"
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* Language - Mobile */}
                  <div className="flex items-center space-x-4 pt-6">
                    <button className="text-white text-[14px] hover:text-[#D0F94A]">
                      EN
                    </button>
                    <span className="text-white">|</span>
                    <button className="text-white text-[14px] hover:text-[#D0F94A]">
                      عربي
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Desktop MEGA MENU */}
      {isMegaOpen && !isMobile && (
        <div
          ref={megaRef}
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
          className={`hidden lg:block fixed top-[80px] left-1/2 -translate-x-1/2 w-[85%] rounded-xl shadow-2xl z-50 transition-all duration-500 ${
            isScrolled
              ? "bg-white text-black"
              : "bg-white/10 text-white backdrop-blur-xl"
          }`}
        >
          <div className="w-full mx-auto px-8 md:px-12 lg:px-16 py-8 md:py-10 lg:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300 gap-6 md:gap-4">
              {/* Column 1 */}
              <div className="px-4 md:px-6">
                <h4 className="text-[13px] font-[400] mb-4">
                  SOFTWARE DEVELOPMENT
                </h4>
                <ul className="text-[16px] font-[600] space-y-2">
                  <div>
                    <li>Web Applications</li>
                    <p className="text-[14px] font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                  <div>
                    <li>Mobile Applications</li>
                    <p className="text-[14px] font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                  <div>
                    <li>Custom Software</li>
                    <p className="text-[14px] font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                </ul>
              </div>
              {/* Column 2 */}
              <div className="px-4 md:px-6">
                <h4 className="text-[13px] font-[400] mb-4">GENERATIVE AI</h4>
                <ul className="text-[16px] font-[600] space-y-2">
                  <div>
                    <li>
                      AI Chatbots{" "}
                      <span className="bg-[#CDFB26] text-black text-xs px-2 py-0.5 rounded-full">
                        NEW
                      </span>
                    </li>
                    <p className="text-[14px] font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                  <div>
                    <li>LLM Solutions</li>
                    <p className="text-[14px] font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                  <div>
                    <li>AI Automation</li>
                    <p className="text-[14px] font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                </ul>
              </div>
              {/* Column 3 */}
              <div className="px-4 md:px-6">
                <h4 className="text-[13px] font-[400] mb-4">
                  ENTERPRISE SOLUTIONS
                </h4>
                <ul className="text-[16px] font-[600] space-y-2">
                  <div>
                    <li>ERP Systems</li>
                    <p className="text-[14px] font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                  <div>
                    <li>CRM Platforms</li>
                    <p className="text-[14px] font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                  <div>
                    <li>Business Automation</li>
                    <p className="text-[14px] font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                </ul>
              </div>
              {/* Column 4 */}
              <div className="px-4 md:px-6">
                <h4 className="text-[13px] font-[400] mb-4">CLOUD & DEVOPS</h4>
                <ul className="text-[16px] font-[600] space-y-2">
                  <div>
                    <li>AWS & Azure</li>
                    <p className="text-[14px] font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                  <div>
                    <li>CI/CD Pipelines</li>
                    <p className="text-[14px] font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                  <div>
                    <li>Cloud Security</li>
                    <p className="text-[14px] font-[400]">
                      Edge intelligence for every creator
                    </p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add custom animation for mobile menu */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;


