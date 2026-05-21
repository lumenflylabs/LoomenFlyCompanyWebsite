"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROBLEM_SOLUTION, ICON_MAP } from "@/lib/constants";
import * as Icons from "@/components/ui/HandDrawnIcons";

function ProblemItem({
  icon,
  title,
  desc,
  gold,
  delay,
}: {
  icon: string;
  title: string;
  desc: string;
  gold?: boolean;
  delay?: string;
}) {
  return (
    <div
      className={`flex items-start gap-3.5 p-4 rounded-xl border shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-220 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] reveal ${
        gold
          ? "bg-white border-[rgba(245,197,24,0.3)] hover:border-[rgba(245,197,24,0.5)]"
          : "bg-white border-[rgba(24,22,14,0.08)] hover:border-[rgba(245,197,24,0.3)]"
      } ${delay || ""}`}
    >
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
          gold ? "bg-[rgba(245,197,24,0.12)]" : "bg-[rgba(255,90,90,0.08)]"
        }`}
      >
        {(() => {
          const name = ICON_MAP[icon];
          if (name) {
            const IconComp = (Icons as any)[name];
            return IconComp ? <IconComp className="w-5 h-5" /> : icon;
          }
          return <span className="text-lg">{icon}</span>;
        })()}
      </div>
      <div>
        <h4 className="text-[13.5px] font-semibold text-[#18160E] mb-0.5 tracking-tight">
          {title}
        </h4>
        <p className="text-[12.5px] text-[rgba(24,22,14,0.7)] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function ProblemSolution() {
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
      id="why"
      className="py-[100px] px-[clamp(16px,6%,80px)]"
      style={{
        background:
          "linear-gradient(180deg, #FAF9F4 0%, #FFFBEA 100%)",
      }}
      ref={sectionRef}
    >
      <div className="text-center reveal">
        <SectionHeader
          eyebrow={PROBLEM_SOLUTION.eyebrow}
          headline={PROBLEM_SOLUTION.headline}
          subtitle={PROBLEM_SOLUTION.subtitle}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-start">
        {/* Without */}
        <div>
          <div className="text-[12px] font-bold tracking-wide uppercase mb-5 flex items-center gap-2 text-[rgba(24,22,14,0.6)]">
            <span className="w-[7px] h-[7px] rounded-full bg-[#FF5A5A]" />
            {PROBLEM_SOLUTION.without.label}
          </div>
          {PROBLEM_SOLUTION.without.items.map((item, i) => (
            <ProblemItem
              key={i}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              delay={`d${i + 1}`}
            />
          ))}
        </div>

        {/* With */}
        <div>
          <div className="text-[12px] font-bold tracking-wide uppercase mb-5 flex items-center gap-2 text-[rgba(24,22,14,0.6)]">
            <span className="w-[7px] h-[7px] rounded-full bg-[#C49400]" />
            {PROBLEM_SOLUTION.with.label}
          </div>
          {PROBLEM_SOLUTION.with.items.map((item, i) => (
            <ProblemItem
              key={i}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              gold
              delay={`d${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
