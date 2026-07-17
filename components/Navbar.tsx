"use client";

import { useState, useEffect } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed top-10 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${scrolled ? 'top-4' : 'top-10'}`}>
        <nav className={`w-full max-w-[1000px] flex items-center justify-between px-6 py-4 rounded-full transition-all duration-300 border ${scrolled ? 'border-transparent bg-white/90 backdrop-blur-md shadow-lg' : 'border-[#18160E] bg-transparent'}`}>
          
          <a href="/" className="flex items-center gap-3 group z-50">
            <Logo className="w-9 h-9 transition-transform group-hover:scale-105" />
            <span className="font-heading text-xl text-[#18160E] tracking-tight mt-1">
              Loomenfly Labs
            </span>
          </a>

          <ul className="hidden md:flex gap-8 list-none items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={`/${link.href}`}
                  className="text-[15px] font-sans font-medium text-[#18160E]/80 hover:text-[#E51E25] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href={COMPANY.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#E51E25] text-white font-sans font-medium text-[14px] rounded-full hover:bg-[#18160E] transition-colors shadow-sm"
            >
              Book Demo
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex md:hidden flex-col gap-[5px] bg-transparent p-2 cursor-pointer z-50 relative"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-[2px] bg-[#18160E] transition-transform ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-[#18160E] transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-[#18160E] transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>

        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F6F5ED] pt-[140px] px-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-6 items-center text-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-heading text-[#18160E] hover:text-[#E51E25] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-8 px-8 py-4 bg-[#E51E25] text-white font-sans font-medium text-[16px] rounded-full shadow-lg"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </>
  );
}