"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CUSTOM_SOLUTIONS, ICON_MAP } from "@/lib/constants";
import * as Icons from "@/components/ui/HandDrawnIcons";

export default function CustomSolutions() {
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
      id="custom"
      className="py-[100px] px-[clamp(16px,6%,80px)] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #0A0A0A 0%, #1A1508 50%, #0A0A0A 100%)",
      }}
      ref={sectionRef}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(245,197,24,0.10), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center reveal">
          <SectionHeader
            eyebrow={CUSTOM_SOLUTIONS.eyebrow}
            headline={CUSTOM_SOLUTIONS.headline}
            subtitle={CUSTOM_SOLUTIONS.subtitle}
            dark
          />
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          {/* Perks - centered */}
          <div className="reveal">
            <div className="flex flex-col gap-5">
              {CUSTOM_SOLUTIONS.perks.map((perk, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#C49400]/10 border border-[#C49400]/20 flex items-center justify-center">
                    {(() => {
                      const name = ICON_MAP[perk.icon];
                      if (name) {
                        const IconComp = (Icons as any)[name];
                        return IconComp ? <IconComp className="w-5 h-5" /> : perk.icon;
                      }
                      return <span className="text-lg">{perk.icon}</span>;
                    })()}
                  </div>
                  <div>
                    <h4 className="text-white text-[14px] font-semibold mb-1">
                      {perk.title}
                    </h4>
                    <p className="text-white/45 text-[13px] leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
