"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? 'top-6' : 'top-8 md:top-10'}`}>
        
        {/* The Glass Island */}
        <nav 
          className={`
            w-full max-w-[850px] flex items-center justify-between p-2.5 rounded-full transition-all duration-500
            ${scrolled 
              ? 'bg-white/60 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]' 
              : 'bg-white/40 backdrop-blur-xl border border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.04)]'}
          `}
        >
          
          <a href="/" className="flex items-center gap-3 pl-3 group z-50">
            <Logo className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" />
            <span className="font-heading text-lg font-bold text-[#000000] tracking-tight mt-0.5">
              Loomenfly Labs
            </span>
          </a>

          {/* Magnetic Pill Links */}
          <ul className="hidden md:flex gap-1 list-none items-center absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={pathname === "/" ? link.href : `/${link.href}`}
                  className="px-5 py-2 rounded-full text-[14px] font-sans font-medium text-[#000000]/70 hover:text-[#000000] hover:bg-black/5 transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block pr-1">
            <a
              href={COMPANY.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 bg-[#111111] text-white font-sans font-medium text-[13px] tracking-wide rounded-full overflow-hidden transition-all duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-[#E51E25] hover:shadow-[0_0_20px_rgba(229,30,37,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex md:hidden flex-col gap-[5px] bg-white/50 border border-white/50 p-3 rounded-full cursor-pointer z-50 relative mr-1 hover:bg-white/80 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-[1.5px] bg-[#000000] transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[#000000] transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[#000000] transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
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
              href={pathname === "/" ? link.href : `/${link.href}`}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-heading text-[#000000] hover:text-[#E51E25] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-8 px-8 py-4 bg-[#111111] text-white font-sans font-medium text-[16px] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </>
  );
}