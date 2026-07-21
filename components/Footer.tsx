"use client";

import { COMPANY, FOOTER } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#000000] text-white overflow-hidden relative">
      
      {/* Colossal Marquee */}
      <div className="w-full overflow-hidden border-t border-white/10 select-none flex items-center justify-center py-12 md:py-24">
        <h2 className="font-heading text-[16vw] leading-none text-white/[0.03] whitespace-nowrap px-8">
          LOOMENFLY LABS
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-[clamp(24px,5%,120px)] pb-12">
        
        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8 mb-24 md:mb-40 pt-16 border-t border-white/10">
          
          <div className="md:col-span-12 lg:col-span-6 lg:pr-24">
            <ScrollReveal>
              <span className="font-heading text-3xl md:text-4xl mb-8 block text-white/90">
                The New Standard.
              </span>
              <p className="font-sans text-xl md:text-2xl text-white/50 leading-relaxed mb-12">
                {FOOTER.description}
              </p>
              <p className="font-sans text-sm text-white/30 leading-relaxed max-w-[300px]">
                {COMPANY.address}
              </p>
              <p className="font-sans text-[11px] text-white/20 mt-4 leading-relaxed tracking-wide">
                LLPIN: {COMPANY.llpin} <br />
                MSME Udyam: {COMPANY.udyam}
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <ScrollReveal delay={0.1}>
              <h4 className="font-sans font-bold text-[11px] text-white/30 uppercase tracking-[0.2em] mb-8">
                {FOOTER.navColumns[0].title}
              </h4>
              <ul className="flex flex-col gap-5">
                {FOOTER.navColumns[0].links.map((link, i) => (
                  <li key={i}>
                    <a href={pathname === "/" && link.href.startsWith("/#") ? link.href.substring(1) : link.href} className="font-sans text-lg text-white/70 hover:text-white transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <ScrollReveal delay={0.2}>
              <h4 className="font-sans font-bold text-[11px] text-white/30 uppercase tracking-[0.2em] mb-8">
                {FOOTER.navColumns[1].title}
              </h4>
              <ul className="flex flex-col gap-5">
                {FOOTER.navColumns[1].links.map((link, i) => (
                  <li key={i}>
                    <a href={pathname === "/" && link.href.startsWith("/#") ? link.href.substring(1) : link.href} className="font-sans text-lg text-white/70 hover:text-white transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
          
        </div>

        {/* Meta Disclaimer */}
        <div className="text-center font-sans text-xs text-white/20 max-w-3xl mx-auto mb-8 px-4 leading-relaxed">
          {COMPANY.legalName} is an independent software provider. We are not affiliated with, sponsored by, or endorsed by WhatsApp Inc. or Meta Platforms, Inc.
        </div>

        {/* The Vibe-Coded Pill Anchor */}
        <div className="group flex flex-col md:flex-row items-center justify-between py-6 px-8 md:py-4 md:px-8 rounded-3xl md:rounded-full bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 gap-6">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 font-sans text-[13px] text-white/40 text-center">
            <p>© {COMPANY.year} {COMPANY.legalName}</p>
            <div className="hidden md:block w-[1px] h-3 bg-white/10" />
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <a href="/privacy-policy" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">Privacy Policy</a>
              <div className="w-[1px] h-3 bg-white/10" />
              <a href="/terms-conditions" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">Terms & Conditions</a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {FOOTER.socials.map((social, i) => (
              <a key={i} href={social.href} className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/30 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
                {social.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}