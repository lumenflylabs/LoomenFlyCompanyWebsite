"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { REVIEWS } from "@/lib/constants";

export default function Reviews() {
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
      id="reviews"
      className="py-[100px] px-[clamp(16px,6%,80px)] bg-gradient-to-b from-[#FFFBEA] to-[#FAF9F4]"
      ref={sectionRef}
    >
      <div className="text-center reveal">
        <SectionHeader
          eyebrow={REVIEWS.eyebrow}
          headline={REVIEWS.headline}
          subtitle={REVIEWS.subtitle}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[60px] max-w-5xl mx-auto">
        {REVIEWS.items.map((review, i) => (
          <div
            key={i}
            className={`rounded-2xl bg-white border border-[rgba(24,22,14,0.08)] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(200,150,0,0.12)] hover:border-[rgba(245,197,24,0.3)] reveal ${`d${i + 1}`}`}
          >
            <div className="text-[#F5C518] text-[14px] tracking-[2px] mb-3.5">
              {"★".repeat(review.stars)}
            </div>
            <p className="text-[13.5px] text-[rgba(24,22,14,0.7)] leading-relaxed italic mb-5 pl-3.5 border-l-[3px] border-[rgba(245,197,24,0.4)]">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-[#FFE57A] to-[#F5C518] flex items-center justify-center font-heading font-extrabold text-base text-[#18160E]">
                {review.initial}
              </div>
              <div>
                <div className="font-bold text-[14px] text-[#18160E] tracking-tight">
                  {review.author}
                </div>
                <div className="text-[12px] text-[rgba(24,22,14,0.4)]">
                  {review.business}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
