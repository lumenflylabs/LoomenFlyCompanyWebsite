"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { COMPANY, PREMIUM_ADDONS, ICON_MAP } from "@/lib/constants";
import * as Icons from "@/components/ui/HandDrawnIcons";

function AddonCard({
  icon,
  title,
  tagline,
  desc,
  gradient,
  borderColor,
  delay,
}: {
  icon: string;
  title: string;
  tagline: string;
  desc: string;
  gradient: string;
  borderColor: string;
  delay?: string;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white p-6 md:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(200,150,0,0.12)] reveal ${borderColor} ${delay || ""}`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${gradient}`}
      >
        {(() => {
          const name = ICON_MAP[icon];
          if (name) {
            const IconComp = (Icons as any)[name];
            return IconComp ? <IconComp className="w-6 h-6" /> : icon;
          }
          return <span className="text-2xl">{icon}</span>;
        })()}
      </div>
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(245,197,24,0.1)] border border-[rgba(245,197,24,0.2)] text-[10px] font-semibold text-[#C49400] mb-3">
        <span className="w-1 h-1 rounded-full bg-[#C49400] animate-pulse" />
        {tagline}
      </div>
      <h3 className="text-lg font-heading font-bold text-[#18160E] mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-[13px] text-[rgba(24,22,14,0.7)] leading-relaxed">{desc}</p>
    </div>
  );
}

export default function PremiumAddons() {
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
      id="addons"
      className="py-[100px] px-[clamp(16px,6%,80px)] bg-[#FAF9F4]"
      ref={sectionRef}
    >
      <div className="text-center reveal">
        <SectionHeader
          eyebrow={PREMIUM_ADDONS.eyebrow}
          headline={PREMIUM_ADDONS.headline}
          subtitle={PREMIUM_ADDONS.subtitle}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 max-w-5xl mx-auto">
        {PREMIUM_ADDONS.addons.map((addon, i) => (
          <AddonCard
            key={i}
            icon={addon.icon}
            title={addon.title}
            tagline={addon.tagline}
            desc={addon.desc}
            gradient={addon.gradient}
            borderColor={addon.borderColor}
            delay={`d${i + 1}`}
          />
        ))}
      </div>

      <div className="text-center mt-10 reveal d4">
        <a
          href={COMPANY.waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#F5C518] text-[#18160E] font-heading font-bold text-[15px] shadow-[0_4px_20px_rgba(245,197,24,0.25)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(245,197,24,0.35)] transition-all duration-250"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#18160E] animate-pulse" />
          Unlock All Add-Ons
        </a>
      </div>
    </section>
  );
}
