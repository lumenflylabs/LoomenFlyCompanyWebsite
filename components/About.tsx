"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ABOUT } from "@/lib/constants";
import { DiamondIcon } from "@/components/ui/HandDrawnIcons";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reducedMotion) return;
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      setTilt({ x: deltaX * 6, y: deltaY * -6 });
    },
    [reducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

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
      id="about"
      className="py-[100px] px-[clamp(16px,6%,80px)] bg-[#FAF9F4]"
      ref={sectionRef}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center max-w-6xl mx-auto">
        {/* Left - Visual Card (keep dark) */}
        <div className="reveal">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="rounded-3xl bg-gradient-to-br from-[#18160E] to-[#26200C] p-10 md:p-11 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-transform duration-200 ease-out"
            style={{
              transform: reducedMotion
                ? "none"
                : `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            }}
          >
            <div
              className="absolute -bottom-[50px] -right-[50px] w-[180px] h-[180px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(245,197,24,0.28), transparent 70%)",
                filter: "blur(30px)",
              }}
            />
            <div className="mb-5">
              <DiamondIcon className="w-[44px] h-[44px]" />
            </div>
            <h3
              className="text-white font-heading font-extrabold text-[22px] tracking-tight mb-2.5"
              style={{ whiteSpace: "pre-line" }}
            >
              {ABOUT.cardTitle}
            </h3>
            <p className="text-white/55 text-[13.5px] leading-relaxed">
              {ABOUT.cardDesc}
            </p>
          </div>
          {/* Floating badge */}
          <div className="relative">
            <div className="absolute right-0 -mt-10 bg-white rounded-xl px-4 py-3.5 shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-[rgba(245,197,24,0.25)] text-center min-w-[110px]">
              <div className="font-heading text-[22px] font-extrabold text-[#C49400]">
                ∞
              </div>
              <div className="text-[11px] text-[rgba(24,22,14,0.4)] font-medium mt-0.5">
                Messages
                <br />
                Automated
              </div>
            </div>
          </div>
        </div>

        {/* Right - Text (light theme) */}
        <div className="reveal d1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C49400]/30 text-xs font-semibold tracking-wide uppercase mb-4 text-[#C49400] bg-[#C49400]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C49400] animate-pulse" />
            {ABOUT.eyebrow}
          </div>
          <h2
            className="font-heading font-extrabold leading-[1.12] tracking-tight text-[#18160E] text-[clamp(26px,3.6vw,46px)] mb-3"
            style={{ whiteSpace: "pre-line" }}
          >
            {ABOUT.headline}
          </h2>
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-[rgba(24,22,14,0.7)] leading-relaxed mb-4">
              {p}
            </p>
          ))}
          <div className="flex flex-col gap-2.5 mt-7">
            {ABOUT.values.map((v, i) => (
              <div key={i} className="flex items-center gap-2.5 text-[13.5px] font-medium text-[rgba(24,22,14,0.7)]">
                <span className="w-2 h-2 rounded-full bg-[#C49400] flex-shrink-0" />
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
