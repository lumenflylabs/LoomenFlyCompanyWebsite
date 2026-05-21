"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { COMPANY, HERO } from "@/lib/constants";
import { triggerParallaxDemo } from "@/lib/scroll-navigation";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Parse numeric part
          const numMatch = value.match(/(\d+)(.*)/);
          if (!numMatch) {
            setDisplay(value);
            return;
          }
          const target = parseInt(numMatch[1], 10);
          const suffix = numMatch[2];
          const duration = 1200;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            setDisplay(`${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="border-l-2 border-[#F5C518] pl-3.5">
      <div className="font-heading text-[26px] font-extrabold text-[#18160E] leading-none">
        {display}
      </div>
      <div className="text-xs text-[rgba(24,22,14,0.4)] font-medium mt-0.5">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionH, setSectionH] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const el = sectionRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      setSectionTop(rect.top + window.scrollY);
      setSectionH(rect.height);
    };
    measure();

    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [reducedMotion]);

  // Compute how far the section has scrolled past the viewport top (clamped 0–1)
  const getProgress = (): number => {
    if (reducedMotion || sectionH === 0) return 0;
    const viewportMid = window.innerHeight / 2;
    const scrollPast = scrollY - sectionTop + viewportMid;
    const maxScroll = sectionH;
    return Math.max(0, Math.min(1, scrollPast / maxScroll));
  };

  const progress = getProgress();

  // Parallax offset helper: returns translateY string
  const parallaxY = (speed: number): string | undefined => {
    if (reducedMotion) return undefined;
    const offset = progress * speed * 200; // max 200px travel at speed=1
    return `translateY(${offset}px)`;
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-svh pt-[68px] pb-[60px] grid grid-cols-1 lg:grid-cols-2 gap-0 items-center px-[clamp(16px,6%,80px)] overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, #FEFDF0 0%, #FFF8D6 28%, #FFFEF8 60%, #F8F6FF 100%)",
      }}
    >
      {/* Orbs — parallax speed 0.03–0.05 */}
      <div
        className="absolute rounded-full blur-[70px] pointer-events-none"
        style={{
          width: "580px",
          height: "580px",
          top: "-120px",
          right: "-80px",
          background:
            "radial-gradient(circle, rgba(245,197,24,0.22), transparent 70%)",
          transform: parallaxY(0.04),
          willChange: reducedMotion ? "auto" : "transform",
        }}
      />
      <div
        className="absolute rounded-full blur-[70px] pointer-events-none"
        style={{
          width: "320px",
          height: "320px",
          bottom: "40px",
          left: "8%",
          background:
            "radial-gradient(circle, rgba(245,197,24,0.15), transparent 70%)",
          transform: parallaxY(0.05),
          willChange: reducedMotion ? "auto" : "transform",
        }}
      />
      <div
        className="absolute rounded-full blur-[70px] pointer-events-none"
        style={{
          width: "200px",
          height: "200px",
          top: "35%",
          left: "40%",
          background:
            "radial-gradient(circle, rgba(160,130,255,0.1), transparent 70%)",
          transform: parallaxY(0.03),
          willChange: reducedMotion ? "auto" : "transform",
        }}
      />

      {/* Fireflies — parallax speed 0.12 */}
      {[
        { left: "12%", top: "28%", dur: "3.2s", d: "0s" },
        { left: "22%", top: "65%", dur: "4s", d: "-1.5s" },
        { left: "78%", top: "22%", dur: "3.6s", d: "-0.8s" },
        { left: "68%", top: "72%", dur: "4.4s", d: "-2.2s" },
        { left: "48%", top: "38%", dur: "3s", d: "-0.4s" },
      ].map((ff, i) => (
        <div
          key={i}
          className="absolute w-[5px] h-[5px] rounded-full bg-[#F5C518] pointer-events-none"
          style={{
            left: ff.left,
            top: ff.top,
            boxShadow: "0 0 8px 3px rgba(245,197,24,0.5)",
            animation: reducedMotion
              ? "none"
              : `firefly-pulse ${ff.dur} ease-in-out infinite`,
            animationDelay: ff.d,
            transform: parallaxY(0.12),
            willChange: reducedMotion ? "auto" : "transform",
          }}
        />
      ))}

      {/* Left Column — no parallax */}
      <div className="relative z-10 lg:pr-10 animate-fadeUp">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C49400]/35 text-xs font-semibold text-[#C49400] bg-[#C49400]/10 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C49400] animate-pulse" />
          {HERO.eyebrow}
        </div>

        <h1 className="font-heading font-extrabold leading-[1.08] tracking-tight text-[#18160E] text-[clamp(36px,5vw,62px)] mb-5">
          Turn WhatsApp
          <br />
          Into Your{" "}
          <span className="text-gradient-gold">{HERO.highlight}</span>
        </h1>

        <p className="text-[17px] text-[rgba(24,22,14,0.7)] max-w-[460px] leading-relaxed mb-9">
          {HERO.subtitle}
        </p>

        <div className="flex gap-3 flex-wrap mb-11">
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F5C518] text-[#18160E] font-heading font-bold text-[15px] shadow-[0_4px_20px_rgba(245,197,24,0.25)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(245,197,24,0.35)] transition-all duration-250"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#18160E] animate-pulse" />
            Book a Demo
          </a>
          <button
            onClick={triggerParallaxDemo}
            className="inline-flex items-center px-[26px] py-3.5 rounded-full bg-transparent text-[#18160E] font-heading font-semibold text-[15px] border border-[rgba(24,22,14,0.2)] hover:border-[#18160E] hover:bg-[rgba(24,22,14,0.04)] transition-all duration-220 cursor-pointer"
          >
            See Plans →
          </button>
        </div>

        {/* KPIs */}
        <div className="flex gap-7 flex-wrap">
          {HERO.kpis.map((kpi) => (
            <AnimatedCounter key={kpi.label} value={kpi.value} label={kpi.label} />
          ))}
        </div>
      </div>

      {/* Right Column - Phone Mockup — parallax speed 0.15 */}
      <div
        className="relative z-10 flex items-center justify-center mt-14 lg:mt-0 animate-slideRight"
        style={{
          transform: parallaxY(0.15),
          willChange: reducedMotion ? "auto" : "transform",
        }}
      >
        {/* Floating Chips — parallax speed 0.06–0.10 */}
        <div
          className="absolute top-[30px] -left-20 hidden lg:flex items-center gap-2 bg-white rounded-xl px-3.5 py-2.5 border border-[rgba(245,197,24,0.22)] shadow-[0_4px_20px_rgba(0,0,0,0.07)] whitespace-nowrap"
          style={{
            transform: parallaxY(0.08),
            willChange: reducedMotion ? "auto" : "transform",
          }}
        >
          <div className="w-[30px] h-[30px] rounded-lg flex items-center justify-center text-[15px] bg-[rgba(37,211,102,0.12)]">
            📅
          </div>
          <div>
            <div className="text-[11.5px] font-bold text-[#18160E]">
              New Booking!
            </div>
            <div className="text-[10px] text-[rgba(24,22,14,0.4)]">
              Table for 2 · 7:00 PM
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-[90px] -left-[90px] hidden lg:flex items-center gap-2 bg-white rounded-xl px-3.5 py-2.5 border border-[rgba(245,197,24,0.22)] shadow-[0_4px_20px_rgba(0,0,0,0.07)] whitespace-nowrap"
          style={{
            transform: parallaxY(0.06),
            willChange: reducedMotion ? "auto" : "transform",
          }}
        >
          <div className="w-[30px] h-[30px] rounded-lg flex items-center justify-center text-[15px] bg-[rgba(245,197,24,0.12)]">
            ⏰
          </div>
          <div>
            <div className="text-[11.5px] font-bold text-[#18160E]">
              Reminder Sent
            </div>
            <div className="text-[10px] text-[rgba(24,22,14,0.4)]">
              32 customers notified
            </div>
          </div>
        </div>

        <div
          className="absolute top-[70px] -right-[60px] hidden lg:flex items-center gap-2 bg-white rounded-xl px-3.5 py-2.5 border border-[rgba(245,197,24,0.22)] shadow-[0_4px_20px_rgba(0,0,0,0.07)] whitespace-nowrap"
          style={{
            transform: parallaxY(0.10),
            willChange: reducedMotion ? "auto" : "transform",
          }}
        >
          <div className="w-[30px] h-[30px] rounded-lg flex items-center justify-center text-[15px] bg-[rgba(100,160,255,0.12)]">
            ✅
          </div>
          <div>
            <div className="text-[11.5px] font-bold text-[#18160E]">
              Confirmed!
            </div>
            <div className="text-[10px] text-[rgba(24,22,14,0.4)]">
              Appointment at 3 PM
            </div>
          </div>
        </div>

        {/* Phone Frame */}
        <div
          className="w-[262px] bg-[#0F0E0A] rounded-[44px] p-2.5 relative"
          style={{
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-[#0F0E0A] rounded-b-[14px] z-10" />
          <div className="bg-[#ECE5DD] rounded-[34px] overflow-hidden min-h-[440px] flex flex-col">
            {/* WhatsApp Bar */}
            <div className="bg-[#0B5345] pt-6 pb-2.5 px-3.5 flex items-center gap-2.5">
              <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-[#F5C518] to-[#C49400] flex items-center justify-center font-heading font-extrabold text-[12px] text-[#18160E]">
                LF
              </div>
              <div>
                <div className="text-white font-semibold text-[13px]">
                  Lumenfly Bot ✦
                </div>
                <div className="text-white/65 text-[10.5px]">
                  🟢 Automated · always on
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-2.5 flex flex-col gap-[7px] flex-1">
              {/* Bot greeting with WhatsApp API quick-reply buttons inside bubble */}
              <div
                className="max-w-[88%] px-2.5 py-[7px] rounded-[10px] text-[11.5px] leading-relaxed text-[#111] bg-white self-start rounded-tl-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.08)] animate-bubble"
                style={{ animationDelay: "0.2s", opacity: 0 }}
              >
                👋 Hi! Welcome to Glamour Studio.
                <br />
                How can I help?
                {/* Quick-reply buttons inside bubble */}
                <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-[#E8E8E8]">
                  <span className="text-[10.5px] px-2.5 py-[4px] rounded-full bg-[#25D366] text-white font-medium scale-95 shadow-[0_0_0_2px_rgba(37,211,102,0.2)]">
                    📅 Book Appointment
                  </span>
                  <span className="text-[10.5px] px-2.5 py-[4px] rounded-full bg-[#F5F5F5] border border-[#DDD] text-[#333]">
                    💇 View Services
                  </span>
                  <span className="text-[10.5px] px-2.5 py-[4px] rounded-full bg-[#F5F5F5] border border-[#DDD] text-[#333]">
                    📋 My Booking
                  </span>
                </div>
                <div className="text-[9px] text-[#888] text-right mt-1.5">
                  10:02 AM
                </div>
              </div>

              {/* Customer taps the button — sends the label text */}
              <div
                className="max-w-[88%] px-2.5 py-[7px] rounded-[10px] text-[11.5px] leading-relaxed text-[#111] bg-[#D9F7BE] self-end rounded-tr-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.08)] animate-bubble"
                style={{ animationDelay: "0.6s", opacity: 0 }}
              >
                📅 Book Appointment
                <div className="text-[9px] text-[#888] text-right mt-0.5">
                  10:02 AM ✓✓
                </div>
              </div>

              {/* Bot responds with Flow UI — service selection */}
              <div
                className="max-w-[88%] px-2.5 py-[7px] rounded-[10px] text-[11.5px] leading-relaxed text-[#111] bg-white self-start rounded-tl-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.08)] animate-bubble"
                style={{ animationDelay: "1s", opacity: 0 }}
              >
                ✦ Select a Service
                <div className="flex flex-col gap-1 mt-1.5">
                  <div className="flex items-center gap-1.5 px-2 py-[4px] rounded-[6px] border border-[#25D366] bg-[#E8F5E9]">
                    <span className="text-[12px]">💆</span>
                    <span className="flex-1 text-[10.5px] font-semibold">Facial</span>
                    <span className="text-[9px] text-[#666]">₹1200</span>
                    <span className="w-[14px] h-[14px] rounded-full bg-[#25D366] flex items-center justify-center">
                      <svg viewBox="0 0 10 10" className="w-[6px] h-[6px] fill-white"><path d="M1 5l2.5 2.5L9 2" stroke="white" strokeWidth="1.2" fill="none"/></svg>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-[4px] rounded-[6px] border border-[#E0E0E0] bg-white">
                    <span className="text-[12px]">💅</span>
                    <span className="flex-1 text-[10.5px] font-semibold">Manicure</span>
                    <span className="text-[9px] text-[#666]">₹400</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-[4px] rounded-[6px] border border-[#E0E0E0] bg-white">
                    <span className="text-[12px]">💇</span>
                    <span className="flex-1 text-[10.5px] font-semibold">Haircut</span>
                    <span className="text-[9px] text-[#666]">₹600</span>
                  </div>
                </div>
                <div className="text-[9px] text-[#888] text-right mt-0.5">
                  10:03 AM
                </div>
              </div>

              {/* Customer selects Facial */}
              <div
                className="max-w-[88%] px-2.5 py-[7px] rounded-[10px] text-[11.5px] leading-relaxed text-[#111] bg-[#D9F7BE] self-end rounded-tr-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.08)] animate-bubble"
                style={{ animationDelay: "1.4s", opacity: 0 }}
              >
                Facial 💆
                <div className="text-[9px] text-[#888] text-right mt-0.5">
                  10:03 AM ✓✓
                </div>
              </div>

              {/* Bot shows time picker */}
              <div
                className="max-w-[88%] px-2.5 py-[7px] rounded-[10px] text-[11.5px] leading-relaxed text-[#111] bg-white self-start rounded-tl-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.08)] animate-bubble"
                style={{ animationDelay: "1.8s", opacity: 0 }}
              >
                ✦ Pick a Time
                <div className="flex gap-1.5 mt-1.5">
                  <span className="text-[10.5px] px-2.5 py-[4px] rounded-full bg-[#25D366] text-white font-medium">11 AM</span>
                  <span className="text-[10.5px] px-2.5 py-[4px] rounded-full bg-[#F5F5F5] border border-[#DDD] text-[#333]">2 PM</span>
                  <span className="text-[10.5px] px-2.5 py-[4px] rounded-full bg-[#F5F5F5] border border-[#DDD] text-[#333]">5 PM</span>
                </div>
                <div className="text-[9px] text-[#888] text-right mt-0.5">
                  10:03 AM
                </div>
              </div>

              {/* Confirmation message */}
              <div
                className="max-w-[88%] px-2.5 py-[7px] rounded-[10px] text-[11.5px] leading-relaxed text-[#111] bg-white self-start rounded-tl-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.08)] animate-bubble"
                style={{ animationDelay: "2.2s", opacity: 0 }}
              >
                ✅ Booking Confirmed!
                <br />
                Facial · Tomorrow at 11 AM
                <br />
                We'll remind you 24hr before. 👍
                <div className="text-[9px] text-[#888] text-right mt-0.5">
                  10:04 AM
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="bg-[#F0F2F5] px-2.5 py-2 flex items-center gap-2 border-t border-black/6">
              <div className="flex-1 bg-white rounded-[18px] px-2.5 py-[7px] text-[11px] text-[#aaa]">
                Type a message...
              </div>
              <div className="w-[30px] h-[30px] bg-[#0B5345] rounded-full flex items-center justify-center text-white text-[13px]">
                ➤
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
