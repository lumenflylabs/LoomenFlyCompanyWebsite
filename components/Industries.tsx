"use client";

import { INDUSTRIES } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ROW_HOVER_STYLES = [
  "hover:bg-[#E51E25] hover:text-white", // Red
  "hover:bg-[#111111] hover:text-white", // Black
  "hover:bg-[#FFD100] hover:text-black", // Yellow
];

export default function Industries() {
  return (
    <section id="industries" className="relative bg-[#F6F5ED] text-[#000000] py-32 md:py-48 overflow-hidden">
      
      {/* Intro Header */}
      <div className="max-w-[900px] mx-auto px-[clamp(24px,5%,120px)] mb-24 md:mb-32 text-center">
        <ScrollReveal>
          <span className="font-sans font-bold text-[12px] text-[#E51E25] uppercase tracking-[0.2em] block mb-8">
            {INDUSTRIES.eyebrow}
          </span>
          <h2 className="font-heading text-[clamp(40px,5vw,72px)] leading-[1.05] mb-8 text-[#000000] text-balance">
            {INDUSTRIES.headline.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="font-sans text-[clamp(16px,2vw,20px)] text-[#000000]/60 max-w-[600px] mx-auto leading-relaxed">
            {INDUSTRIES.subtitle}
          </p>
        </ScrollReveal>
      </div>

      {/* The Editorial Hover List (Classic & Modern Fusion) */}
      <div className="w-full border-t border-[#000000]/10">
        {INDUSTRIES.items.map((item, index) => {
          const hoverStyle = ROW_HOVER_STYLES[index % ROW_HOVER_STYLES.length];
          const isCTA = item.name === "Your Business";
          const RowWrapper = isCTA ? "a" : "div";
          const wrapperProps = isCTA ? { href: "#contact" } : {};

          return (
            <ScrollReveal key={index} delay={0.05 * index}>
              <RowWrapper 
                {...wrapperProps}
                className={`group flex flex-col md:flex-row md:items-center justify-between w-full py-5 md:py-8 px-[clamp(24px,5%,120px)] border-b border-[#000000]/10 transition-colors duration-500 cursor-pointer ${hoverStyle}`}
              >
                
                {/* Left Column: Number & Title */}
                <div className="flex items-start md:items-center gap-6 md:gap-12 md:w-1/2 mb-4 md:mb-0">
                  <span className="font-sans font-light text-lg md:text-xl opacity-30 pt-1 md:pt-0 group-hover:opacity-60 transition-opacity duration-500">
                    {item.icon}
                  </span>
                  <h3 className="font-heading text-[clamp(28px,4vw,48px)] tracking-tight leading-[1.1] transition-transform duration-700 ease-out group-hover:translate-x-4">
                    {item.name}
                  </h3>
                </div>

                {/* Right Column: Description & Arrow Glide */}
                <div className="flex items-center justify-between md:w-1/2 md:pl-16">
                  <p className="font-sans text-base md:text-xl opacity-60 max-w-[300px]">
                    {item.desc}
                  </p>
                  
                  {/* Modern Fusion: Magnetic Glide Arrow */}
                  <div className="w-12 h-12 flex-shrink-0 rounded-full border border-current/20 flex items-center justify-center opacity-0 -translate-x-12 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-out bg-current/5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>

              </RowWrapper>
            </ScrollReveal>
          );
        })}
      </div>

    </section>
  );
}