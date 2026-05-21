"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { INDUSTRIES } from "@/lib/constants";
import { IndustryIcons } from "@/components/ui/HandDrawnIcons";

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="industries"
      className="py-[100px] px-[clamp(16px,6%,80px)] bg-[#FAF9F4]"
      ref={sectionRef}
    >
      <div className="text-center reveal">
        <SectionHeader
          eyebrow={INDUSTRIES.eyebrow}
          headline={INDUSTRIES.headline}
          subtitle={INDUSTRIES.subtitle}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[60px] max-w-5xl mx-auto">
        {INDUSTRIES.items.map((item, i) => (
          <div
            key={i}
            className={`rounded-2xl p-7 text-center border transition-all duration-300 cursor-default hover:-translate-y-1 reveal ${
              item.highlighted
                ? "border-[rgba(245,197,24,0.3)] bg-[rgba(245,197,24,0.04)] hover:shadow-[0_8px_32px_rgba(200,150,0,0.15)]"
                : "border-[rgba(24,22,14,0.08)] bg-white hover:border-[rgba(245,197,24,0.3)] hover:shadow-[0_8px_32px_rgba(200,150,0,0.10)]"
            } ${`d${(i % 4) + 1}`}`}
          >
            <div
              className={`w-[58px] h-[58px] rounded-[17px] flex items-center justify-center mx-auto mb-3.5 transition-colors duration-250 ${
                item.highlighted
                  ? "bg-[rgba(245,197,24,0.18)]"
                  : "bg-[rgba(245,197,24,0.1)]"
              }`}
            >
              {(() => {
                const IconComp = IndustryIcons[item.icon];
                return IconComp ? <IconComp className="w-[26px] h-[26px]" /> : <span className="text-[26px]">{item.icon}</span>;
              })()}
            </div>
            <div className="font-bold text-[14px] text-[#18160E] mb-0.5 tracking-tight">
              {item.name}
            </div>
            <div className="text-[11.5px] text-[rgba(24,22,14,0.4)] font-medium">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
