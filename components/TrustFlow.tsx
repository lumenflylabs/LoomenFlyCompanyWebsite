"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { TRUST_FLOW, ICON_MAP } from "@/lib/constants";
import * as Icons from "@/components/ui/HandDrawnIcons";

export default function TrustFlow() {
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
    <section className="py-[100px] px-[clamp(16px,6%,80px)] bg-[#FAF9F4]" ref={sectionRef}>
      <div className="max-w-[860px] mx-auto rounded-3xl border border-[rgba(245,197,24,0.28)] p-8 md:p-14 bg-gradient-to-br from-[#FFFEF0] via-[#FFF9D0] to-[#FFFEF8] shadow-[0_8px_40px_rgba(200,150,0,0.18)] relative overflow-hidden reveal">
        {/* Glow */}
        <div
          className="absolute -top-[60px] -right-[60px] w-[260px] h-[260px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245,197,24,0.2), transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10">
          <div className="text-center">
            <SectionHeader
              eyebrow={TRUST_FLOW.eyebrow}
              headline={TRUST_FLOW.headline}
              subtitle={TRUST_FLOW.subtitle}
            />
          </div>

          {/* Flow Visualization */}
          <div className="flex items-center justify-center my-12 flex-wrap gap-0">
            {TRUST_FLOW.nodes.map((node, i) => (
              <div key={i} className="flex flex-col items-center gap-2.5 text-center min-w-[130px]">
                <div
                  className={`w-16 h-16 rounded-[20px] flex items-center justify-center text-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] ${
                    i === 2
                      ? "bg-white border border-[rgba(24,22,14,0.08)]"
                      : node.bg
                  }`}
                >
                  {(() => {
                    const name = ICON_MAP[node.icon];
                    if (name) {
                      const IconComp = (Icons as any)[name];
                      return IconComp ? (
                        <span className={i === 2 ? "" : "text-white"}>
                          <IconComp className={`w-7 h-7 ${i === 2 ? "" : "[&_rect]:!stroke-white [&_path]:!stroke-white [&_circle]:!fill-white [&_circle]:!stroke-white"}`} />
                        </span>
                      ) : (
                        <span className={i === 2 ? "" : "text-white"}>{node.icon}</span>
                      );
                    }
                    return <span className={i === 2 ? "" : "text-white"}>{node.icon}</span>;
                  })()}
                </div>
                <div
                  className="text-[12.5px] font-semibold text-[rgba(24,22,14,0.7)]"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {node.label}
                </div>
              </div>
            ))}
          </div>

          {/* Arrows between nodes */}
          <div className="hidden md:flex justify-center items-center gap-0 -mt-8 mb-4">
            {[0, 1].map((i) => (
              <div key={i} className="flex flex-col items-center justify-center px-3 mb-10">
                <div className="w-12 h-[2px] rounded-full relative overflow-hidden bg-gradient-to-r from-[#C49400] to-[#F5C518]">
                  <div
                    className="absolute top-0 left-[-100%] w-full h-full animate-shine"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                    }}
                  />
                </div>
                <span className="text-base text-[#C49400] -mt-1.5">→</span>
              </div>
            ))}
          </div>

          <div className="text-center max-w-[500px] mx-auto">
            <p className="text-[13.5px] text-[rgba(24,22,14,0.7)] leading-relaxed">
              {TRUST_FLOW.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
