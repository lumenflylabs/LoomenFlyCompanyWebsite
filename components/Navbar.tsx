"use client";

import { useState, useEffect, useCallback } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { setNavigating, triggerParallaxDemo } from "@/lib/scroll-navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Close mobile menu when user scrolls
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  // Sections that are BELOW LeadCatcher (#plans) — navigating to these
  // should skip the parallax scroll-lock so the user lands on the target.
  const SECTIONS_BELOW_LEAD_CATCHER = new Set(["#industries", "#reviews", "#about", "#contact", "#custom"]);

  // Intercept nav link clicks for sections below LeadCatcher to prevent
  // the scroll-lock from hijacking programmatic navigation.
  // For #plans (LeadCatcher itself), trigger the instant parallax demo.
  // For #why (ProblemSolution), let native scroll happen.
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Only intercept hash links when we're on the homepage
      // On legal pages (privacy, terms, refund), let the browser navigate to /#...
      const isHomePage = window.location.pathname === "/";
      if (href.startsWith("#") && isHomePage) {
        // #plans — trigger instant parallax demo (phone pops up immediately)
        if (href === "#plans") {
          e.preventDefault();
          triggerParallaxDemo();
        }
        // Sections below LeadCatcher — skip parallax, scroll directly
        else if (SECTIONS_BELOW_LEAD_CATCHER.has(href)) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            setNavigating(true);
            target.scrollIntoView({ behavior: "smooth" });
            // Clear navigating flag after smooth scroll animation completes
            setTimeout(() => setNavigating(false), 1000);
          }
        }
        // #why — let native scroll happen (no parallax to interfere)
        closeMobile();
      } else if (href.startsWith("#") && !isHomePage) {
        // On legal pages, let the browser navigate to /#... normally
        // The link href is already /#plans (with leading slash)
        closeMobile();
      }
    },
    [closeMobile]
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between px-[clamp(16px,5%,64px)] transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_32px_rgba(0,0,0,0.07)]" : ""
        }`}
        style={{
          background: "rgba(250,249,244,0.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(245,197,24,0.15)",
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 cursor-pointer">
          <div className="relative w-10 h-10 rounded-xl bg-[#18160E] flex items-center justify-center overflow-hidden border border-[rgba(24,22,14,0.08)] transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(245,197,24,0.55)]">
            <span className="absolute top-[7px] left-1/2 -translate-x-1/2 font-heading font-extrabold text-[12px] text-white whitespace-nowrap tracking-tight">
              L<span className="text-[#F5C518]">F</span>
            </span>
            <span className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#F5C518] animate-firefly" />
          </div>
          <span className="font-heading font-bold text-[15px] text-[#18160E] tracking-tight">
            Lumenfly <b className="text-[#C49400] font-extrabold">Labs</b>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-7 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={`/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13.5px] font-medium text-[rgba(24,22,14,0.7)] hover:text-[#18160E] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-[18px] py-[9px] rounded-full border border-[#C49400] text-[#C49400] text-[13px] font-heading font-semibold bg-transparent hover:bg-[#F5C518] hover:border-[#F5C518] hover:text-[#18160E] transition-all duration-200"
          >
            Contact
          </a>
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#18160E] text-[#F5C518] text-[13px] font-heading font-bold border border-[#C49400]/30 hover:bg-[#2A2516] hover:border-[#F5C518]/50 transition-all duration-250 inline-flex items-center gap-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.18)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] animate-pulse" />
            Book Demo
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-none border-none p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-[22px] h-[2px] bg-[#18160E] rounded-sm transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-[#18160E] rounded-sm transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-[#18160E] rounded-sm transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[68px] left-0 right-0 z-40 bg-[#FAF9F4]/97 backdrop-blur-xl px-[clamp(16px,5%,64px)] pb-7 pt-5 border-b border-[rgba(24,22,14,0.08)] shadow-[0_20px_40px_rgba(0,0,0,0.10)] ${
          mobileOpen ? "flex" : "hidden"
        } flex-col gap-1`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={`/${link.href}`}
            onClick={(e) => handleNavClick(e, link.href)}
            className="py-3.5 text-base font-medium text-[rgba(24,22,14,0.7)] hover:text-[#18160E] border-b border-[rgba(24,22,14,0.08)] last:border-none"
          >
            {link.label}
          </a>
        ))}
        <a
          href={COMPANY.waLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMobile}
          className="mt-4 text-center py-3.5 rounded-full bg-[#F5C518] text-[#18160E] font-heading font-bold text-sm"
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#18160E] animate-pulse" />
            Book a Demo
          </span>
        </a>
      </div>
    </>
  );
}
