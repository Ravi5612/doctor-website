"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// NOTE: Remember to add the custom blinking animation to your global CSS file:
/*
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.animate-blink {
  animation: blink 1.5s infinite;
}
*/

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Scroll effect logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Change state after scrolling 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mainNavItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Doctors", href: "/doctors" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const servicePages = [
    { name: "General Checkup", href: "/services/general-checkup" },
    { name: "Dental Care", href: "/services/dental-care" },
    { name: "Cardiology", href: "/services/cardiology" },
    { name: "Orthopedics", href: "/services/orthopedics" },
    { name: "Dermatology", href: "/services/dermatology" },
    { name: "Pediatrics", href: "/services/pediatrics" },
    { name: "Lab Tests", href: "/services/lab-tests" },
    { name: "Emergency Care", href: "/services/emergency-care" },
  ];

  const getLinkClassName = (href: string, isMobile = false) => {
    const baseClasses = "font-medium transition duration-300";
    const activeClasses = "text-emerald-400 border-b-2 border-emerald-400";
    const inactiveClasses = "text-gray-300 hover:text-emerald-300";
    
    // Mobile specific classes
    const mobileBaseClasses = "block px-3 py-2 rounded-md text-base";
    const mobileActiveClasses = "bg-slate-800 text-emerald-400";
    const mobileInactiveClasses = "hover:bg-slate-800 hover:text-emerald-300";

    if (pathname === href) {
      return isMobile 
        ? `${mobileBaseClasses} ${mobileActiveClasses}`
        : `${baseClasses} ${activeClasses} pb-1 text-sm`;
    }
    return isMobile 
      ? `${mobileBaseClasses} ${mobileInactiveClasses} text-gray-300`
      : `${baseClasses} ${inactiveClasses} text-sm`;
  };

  // Dynamic Classes - REVERSED LOGIC
  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
    ${isScrolled 
      ? "bg-transparent shadow-none border-b border-transparent" // Transparent and no shadow on scroll
      : "bg-slate-950 shadow-xl border-b border-slate-800" // Dark and shadow at the top
    }
  `;

  const contentHeightClass = isScrolled ? "h-16" : "h-20";
  const logoSizeClass = isScrolled ? "text-2xl" : "text-3xl";
  const logoIconSizeClass = isScrolled ? "text-3xl" : "text-4xl";
  const ctaPaddingClass = isScrolled ? "px-5 py-2" : "px-6 py-3";
  // The contact number is hidden when transparent for a cleaner look
  const contactVisibilityClass = isScrolled ? "hidden" : "flex";


  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ease-in-out ${contentHeightClass}`}>
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className={`${logoSizeClass} font-bold bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent hover:from-emerald-300 hover:to-emerald-400 transition flex items-center gap-2`}>
              <span className={logoIconSizeClass}>🏥</span>
              <span>MediCare</span>
            </Link>
          </div>

          {/* Navigation Links and Contact Info (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Main Links */}
            <ul className="flex gap-6 items-center">
              {mainNavItems.map((item) => (
                <li key={item.name}>
                  {item.name === "Services" ? (
                    <div className="relative group">
                      <button
                        className={getLinkClassName(item.href)}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        {item.name} ▼
                      </button>
                      {/* Dropdown Menu */}
                      <div
                        className="absolute left-0 mt-0 w-56 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        {servicePages.map((service, index) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className={`block px-5 py-3 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition ${
                              index === 0 ? "rounded-t-lg" : ""
                            } ${index === servicePages.length - 1 ? "rounded-b-lg" : ""}`}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={item.href} className={getLinkClassName(item.href)}>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Highlighted Contact Number and CTA Button */}
            <div className={`items-center gap-4 pl-4 border-l border-slate-800 ${contactVisibilityClass}`}>
              {/* Contact Number - BLINKING RED */}
              <div className="flex items-center gap-2 text-gray-300 animate-blink">
                <span className="text-red-500 text-xl">🚨</span>
                <div className="flex flex-col text-xs">
                  <span className="text-red-400 font-bold">EMERGENCY CALL</span>
                  <a href="tel:+919876543210" className="text-red-500 font-extrabold hover:text-red-400 transition">
                    +91 6239408981
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/appointments"
                className={`bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-lg font-semibold transition duration-300 text-sm shadow-lg shadow-emerald-600/30 ${ctaPaddingClass}`}
              >
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-emerald-400 hover:text-emerald-300 text-2xl transition focus:outline-none"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-slate-900 pb-3 transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {mainNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={toggleMobileMenu} // Close menu on link click
              className={getLinkClassName(item.href, true)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile CTA Button */}
          <Link
            href="/appointments"
            onClick={toggleMobileMenu}
            className="block w-full text-center bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-md font-semibold transition duration-300 text-base mt-4 py-2"
          >
            Book Appointment
          </Link>

          {/* Mobile Emergency Contact */}
          <div className="flex items-center justify-center gap-2 text-gray-300 animate-blink pt-4">
            <span className="text-red-500 text-xl">🚨</span>
            <div className="flex flex-col text-xs">
              <span className="text-red-400 font-bold">EMERGENCY CALL</span>
              <a href="tel:+919876543210" className="text-red-500 font-extrabold hover:text-red-400 transition text-base">
                +91 6239408981
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}