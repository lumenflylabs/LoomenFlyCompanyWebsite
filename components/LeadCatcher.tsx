"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { COMPANY, LEAD_CATCHER } from "@/lib/constants";
import { getNavigating, onNavigatingChange, setParallaxTriggerFn } from "@/lib/scroll-navigation";

// ─── Generic Meta Flow Messages ───────────────────────────────────────────
const MESSAGES = {
  botGreeting: {
    text: "👋 Hi! Welcome to Glamour Studio.\nHow can I help?",
    time: "10:01 AM",
  },
  // When a quick-reply button is tapped, its label appears as the user's message
  customerReply: {
    text: "📅 Book Appointment",
    time: "10:01 AM ✓✓",
  },
  botConfirmation: {
    text: "✅ Booking Confirmed!\nService A · Tomorrow at 2:00 PM\nWe'll remind you 24hr before. 👍",
    time: "10:02 AM",
  },
};

// ─── WhatsApp Quick-Reply Buttons (appear INSIDE bot greeting bubble) ─────
const QUICK_REPLIES = [
  { emoji: "📅", label: "Book Appointment" },
  { emoji: "💇", label: "View Services" },
  { emoji: "📋", label: "My Booking" },
];

// ─── Flow UI Data ─────────────────────────────────────────────────────────
const FLOW_SERVICES = [
  { icon: "💆", label: "Service A", desc: "Starting ₹XXX" },
  { icon: "💅", label: "Service B", desc: "Starting ₹XXX" },
  { icon: "💇", label: "Service C", desc: "Starting ₹XXX" },
];

const FLOW_TIMES = [
  { label: "11:00 AM" },
  { label: "2:00 PM" },
  { label: "5:00 PM" },
];

// ─── Easing ───────────────────────────────────────────────────────────────
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}
function easeInCubic(t: number): number {
  return Math.pow(t, 3);
}

// ─── Three-Phase Scroll Timeline ──────────────────────────────────────────
// Total = 1.0 (100%).
// Phase 1 (0.00–0.10): Phone scales up to full size quickly. NO demo messages.
// Phase 2 (0.10–0.85): Demo plays — slow & premium.
//   Confirmation message (0.72–0.85) finishes BEFORE phone exit starts.
// Phase 3 (0.85–1.00): Phone scales back down, then unlock.
//   Reverse scroll: scrolling bottom-to-top reverses the animation.
const STEPS = [
  { name: "phoneEntrance",    start: 0.00, end: 0.10 },
  { name: "typing1",          start: 0.10, end: 0.18 },
  { name: "msg1",             start: 0.18, end: 0.30 },
  { name: "quickReplies",     start: 0.30, end: 0.34 },
  { name: "btnHighlight",     start: 0.34, end: 0.42 },
  { name: "msg2",             start: 0.34, end: 0.42 },
  { name: "typing3",          start: 0.42, end: 0.48 },
  { name: "flowStep1",        start: 0.48, end: 0.60 },
  { name: "flowTransition",   start: 0.60, end: 0.64 },
  { name: "flowStep2",        start: 0.64, end: 0.74 },
  { name: "flowSubmit",       start: 0.74, end: 0.76 },
  { name: "flowClose",        start: 0.76, end: 0.78 },
  { name: "msgConfirm",       start: 0.72, end: 0.85 },
  { name: "phoneExit",        start: 0.85, end: 1.00 },
] as const;

// ─── Component ────────────────────────────────────────────────────────────
export default function LeadCatcher() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const lockScrollYRef = useRef(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const demoCompletedRef = useRef(false);
  const scrollAccumulatorRef = useRef(0); // ← accumulates scroll delta for smoothness
  const featuresRef = useRef<HTMLDivElement>(null); // ← "THE BASE PLAN" features container
  const lockAppliedExternallyRef = useRef(false); // ← true when trigger applied CSS directly
  const [reducedMotion, setReducedMotion] = useState(false);

  // ── Scroll-lock state ─────────────────────────────────────────────────
  const [isLocked, setIsLocked] = useState(false);
  const [fakeScrollProgress, setFakeScrollProgress] = useState(0);
  // Track if demo has been completed — used to show final state in static phone
  const [showCompletedDemo, setShowCompletedDemo] = useState(false);

  // ── On mount: prevent scroll restoration & clean up any leftover lock ─
  useEffect(() => {
    // Prevent browser from restoring scroll position on refresh
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // Ensure body is clean (no leftover lock from previous session)
    document.body.classList.remove("scroll-locked");
    document.body.style.top = "";
    document.body.style.paddingRight = "";
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ── IntersectionObserver — detect when phone enters viewport ──────────
  useEffect(() => {
    if (reducedMotion) return;

    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Skip scroll-lock if a programmatic navigation is in progress
        // (e.g., user clicked "Industries" in navbar while on Hero section)
        if (entry.isIntersecting && !isLocked && !demoCompletedRef.current && !getNavigating()) {
          lockScrollYRef.current = window.scrollY;
          setIsLocked(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion, isLocked]);

  // ── Instant parallax activation from "See Plans →" button ────────────
  // Uses a module-level callback ref (not pub/sub) so the trigger is
  // guaranteed to be available synchronously — no useEffect timing issues.
  // When triggered: instantly lock the scroll, show phone overlay at full
  // size (progress=0.10), and begin demo messages.
  useEffect(() => {
    if (reducedMotion) {
      setParallaxTriggerFn(null);
      return;
    }

    const trigger = () => {
      // If the demo has already been completed, don't replay the parallax.
      // Instead, scroll the user directly to the "THE BASE PLAN" features section.
      if (demoCompletedRef.current) {
        const targetEl = featuresRef.current;
        if (targetEl) {
          const top = targetEl.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: "smooth" });
        }
        return;
      }

      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      // Calculate the section's absolute position in the document
      const sectionTop = sectionEl.getBoundingClientRect().top + window.scrollY;
      const targetScrollY = Math.max(0, sectionTop - 10);

      // Store the lock position
      lockScrollYRef.current = targetScrollY;
      scrollAccumulatorRef.current = 0;

      // Directly apply scroll-lock CSS to body BEFORE React state update.
      // This ensures position:fixed is active before any scroll/flash happens.
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.classList.add("scroll-locked");
      document.body.style.top = `-${targetScrollY}px`;

      // Now scroll the window — body is fixed so this won't actually move the viewport
      window.scrollTo(0, targetScrollY);

      // Flag that we already applied the lock CSS externally, so the
      // scroll-lock useEffect below doesn't duplicate the work
      lockAppliedExternallyRef.current = true;

      // Update React state to match (this triggers overlay render + lock effect)
      setFakeScrollProgress(0.10);
      setIsLocked(true);
    };

    // Register synchronously — available immediately for button clicks
    setParallaxTriggerFn(trigger);

    return () => setParallaxTriggerFn(null);
  }, [reducedMotion]);

  // ── Scroll lock effect ────────────────────────────────────────────────
  useEffect(() => {
    if (reducedMotion) return;

    if (isLocked) {
      // If the trigger already applied CSS directly (via "See Plans →" button),
      // skip redundant DOM manipulation to avoid flicker/race conditions.
      if (!lockAppliedExternallyRef.current) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.body.classList.add("scroll-locked");
        document.body.style.top = `-${lockScrollYRef.current}px`;
      }
    } else {
      lockAppliedExternallyRef.current = false;
      document.body.classList.remove("scroll-locked");
      document.body.style.top = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      lockAppliedExternallyRef.current = false;
      document.body.classList.remove("scroll-locked");
      document.body.style.top = "";
      document.body.style.paddingRight = "";
    };
  }, [isLocked, reducedMotion]);

  // ── Native wheel handler (non-passive to allow preventDefault) ────────
  // Uses an accumulator ref so small accidental scrolls are ignored.
  // ~40 "meaningful scroll units" needed to go 0 → 1 (normal scroll speed).
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay || !isLocked) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollAccumulatorRef.current += e.deltaY;
      const threshold = 30; // pixels of wheel movement before we advance 0.01
      const steps = Math.floor(Math.abs(scrollAccumulatorRef.current) / threshold);
      if (steps === 0) return;

      const sign = scrollAccumulatorRef.current > 0 ? 1 : -1;
      scrollAccumulatorRef.current -= sign * steps * threshold;

      setFakeScrollProgress((prev) => {
        const delta = sign * steps * 0.01;
        const next = Math.max(0, Math.min(1, prev + delta));
        // If already at 0 and scrolling up — unlock and scroll page up
        if (next === 0 && sign < 0 && !demoCompletedRef.current) {
          demoCompletedRef.current = true;
          setShowCompletedDemo(true);
          setIsLocked(false);
          requestAnimationFrame(() => {
            window.scrollTo(0, Math.max(0, lockScrollYRef.current - window.innerHeight * 0.5));
          });
        }
        return next;
      });
    };

    overlay.addEventListener("wheel", onWheel, { passive: false });
    return () => overlay.removeEventListener("wheel", onWheel);
  }, [isLocked]);

  // ── Native touch handler (non-passive to allow preventDefault) ────────
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay || !isLocked) return;

    let touchStartY = 0;
    let touchAccumulator = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchAccumulator = 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const deltaY = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;
      touchAccumulator += deltaY;

      const threshold = 3; // px of finger movement before we advance 0.01
      const steps = Math.floor(Math.abs(touchAccumulator) / threshold);
      if (steps === 0) return;

      const sign = touchAccumulator > 0 ? 1 : -1;
      touchAccumulator -= sign * steps * threshold;

      setFakeScrollProgress((prev) => {
        const delta = sign * steps * 0.01;
        const next = Math.max(0, Math.min(1, prev + delta));
        // If already at 0 and swiping down — unlock and scroll page up
        if (next === 0 && sign < 0 && !demoCompletedRef.current) {
          demoCompletedRef.current = true;
          setShowCompletedDemo(true);
          setIsLocked(false);
          requestAnimationFrame(() => {
            window.scrollTo(0, Math.max(0, lockScrollYRef.current - window.innerHeight * 0.5));
          });
        }
        return next;
      });
    };

    overlay.addEventListener("touchstart", onTouchStart, { passive: true });
    overlay.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      overlay.removeEventListener("touchstart", onTouchStart);
      overlay.removeEventListener("touchmove", onTouchMove);
    };
  }, [isLocked]);

  // ── Force unlock when a programmatic navigation starts while locked ──
  // If the user is in the parallax demo and clicks a nav link (e.g., Industries),
  // immediately unlock so the page can scroll to the target section.
  useEffect(() => {
    const unsub = onNavigatingChange((navigating) => {
      if (navigating && isLocked) {
        demoCompletedRef.current = true;
        setShowCompletedDemo(true);
        setIsLocked(false);
      }
    });
    return unsub;
  }, [isLocked]);

  // ── Unlock when Phase 3 completes (scroll-driven exit) ───────────────
  // Phase 3 (0.85–1.00) scales the phone back down. When it reaches 1.0,
  // the phone is already at 0.4 scale and 0 opacity — unlock immediately.
  // Scroll the user to the "THE BASE PLAN / The Lead Catcher" features
  // section so they see the plan info, bot info, and default phone.
  useEffect(() => {
    if (reducedMotion) return;
    if (isLocked && fakeScrollProgress >= 1) {
      demoCompletedRef.current = true;
      setShowCompletedDemo(true);
      setIsLocked(false);
      // Wait for React to unlock and re-render the section content
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Try to scroll the features container into view; fall back to the section
          const targetEl = featuresRef.current || sectionRef.current;
          if (targetEl) {
            const top = targetEl.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top, behavior: "instant" });
          }
        });
      });
    }
  }, [isLocked, fakeScrollProgress, reducedMotion]);

  // ── Auto-scroll chat container (starts at Phase 2: 0.10) ────────────
  useEffect(() => {
    if (reducedMotion) return;
    const container = chatContainerRef.current;
    if (!container) return;
    const maxScroll = container.scrollHeight - container.clientHeight;
    if (maxScroll <= 0) return;
    // Phase 2 occupies 0.10–0.85 (75% of total scroll)
    const chatScrollProgress = Math.max(0, Math.min(1, (fakeScrollProgress - 0.10) / 0.75));
    container.scrollTop = chatScrollProgress * maxScroll;
  }, [fakeScrollProgress, reducedMotion]);

  // ── Helper: get progress (0–1) for a given step range ────────────────
  const getStepProgress = useCallback(
    (start: number, end: number): number => {
      if (reducedMotion) return 1;
      if (fakeScrollProgress <= start) return 0;
      if (fakeScrollProgress >= end) return 1;
      return easeOutCubic((fakeScrollProgress - start) / (end - start));
    },
    [fakeScrollProgress, reducedMotion]
  );

  // ── Phone scale: three-phase ─────────────────────────────────────────
  // Phase 1 (0.00–0.10): 0.4 → 1.0 (scale up — fast)
  // Phase 2 (0.10–0.85): stays at 1.0
  // Phase 3 (0.85–1.00): 1.0 → 0.4 (scale down, reverse entrance)
  const phoneScale = (() => {
    if (fakeScrollProgress <= 0.10) {
      // Phase 1: scale up with easeOutCubic for smooth premium entrance
      const enterProgress = fakeScrollProgress / 0.10;
      return 0.4 + 0.6 * easeOutCubic(enterProgress);
    } else if (fakeScrollProgress <= 0.85) {
      // Phase 2: full size
      return 1.0;
    } else {
      // Phase 3: scale down with easeInCubic for natural exit
      const exitProgress = (fakeScrollProgress - 0.85) / 0.15;
      return 1.0 - 0.6 * easeInCubic(exitProgress);
    }
  })();

  // ── Phone opacity: three-phase ────────────────────────────────────────
  // Phase 1: 0 → 1 (fast), Phase 2: stays 1, Phase 3: 1 → 0
  const phoneOpacity = reducedMotion
    ? 1
    : (() => {
        if (fakeScrollProgress <= 0.10) {
          return fakeScrollProgress / 0.10; // 0 → 1 (fast)
        } else if (fakeScrollProgress <= 0.85) {
          return 1; // stays 1
        } else {
          const exitProgress = (fakeScrollProgress - 0.85) / 0.15;
          return 1 - easeOutCubic(exitProgress); // 1 → 0
        }
      })();

  // ── Blur overlay opacity: follows phone opacity ──────────────────────
  const blurOpacity = isLocked ? phoneOpacity : 0;

  // ── Step progresses (Phase 2: 0.10–0.85, Phase 3: 0.85–1.00) ────────
  const typing1Progress = getStepProgress(0.10, 0.18);
  const msg1Progress    = getStepProgress(0.18, 0.30);

  // Quick-reply buttons appear and then one is highlighted as "tapped"
  const quickRepliesProgress = getStepProgress(0.30, 0.34);
  const btnHighlightProgress = getStepProgress(0.34, 0.42);
  const msg2Progress         = getStepProgress(0.34, 0.42);

  const typing3Progress = getStepProgress(0.42, 0.48);

  // Flow — Step 1: Service selection (slow, 12% of scroll)
  const flowStep1Progress = getStepProgress(0.48, 0.60);

  // Flow transition (service selected → time selection)
  const flowTransitionProgress = getStepProgress(0.60, 0.64);

  // Flow — Step 2: Time selection (slow, 10% of scroll)
  const flowStep2Progress = getStepProgress(0.64, 0.74);

  // Flow submit
  const flowSubmitProgress = getStepProgress(0.74, 0.76);

  // Flow closing
  const flowCloseProgress = getStepProgress(0.76, 0.78);

  // Confirmation message (starts during flow, finishes before phone exit)
  const msgConfirmProgress = getStepProgress(0.72, 0.85);

  // Gold glow
  const glowProgress = getStepProgress(0.85, 1.00);

  // ── Derived Flow UI state ────────────────────────────────────────────
  const serviceHighlightIndex =
    flowStep1Progress < 1
      ? Math.min(
          Math.floor(flowStep1Progress * FLOW_SERVICES.length),
          FLOW_SERVICES.length - 1
        )
      : 0;

  const timeHighlightIndex =
    flowStep2Progress < 1
      ? Math.min(
          Math.floor(flowStep2Progress * FLOW_TIMES.length),
          FLOW_TIMES.length - 1
        )
      : 0;

  // ── Helper: return 1 if demo completed, otherwise scroll progress ──
  const orCompleted = (p: number) => (showCompletedDemo ? 1 : p);

  // ── Chat container ref for static phone (scrollable after demo completes) ──
  const staticChatRef = useRef<HTMLDivElement>(null);

  // ── Static phone (for normal section — always full size) ────────────
  const staticPhoneContent = (
    <div
      className="relative"
      style={{
        transform: "scale(1)",
        transformOrigin: "center center",
        opacity: 1,
      }}
    >
      {/* Phone chassis — dark bezel wrapping the screen like a real iPhone */}
      <div
        className="w-[280px] bg-[#0F0E0A] rounded-[44px] p-2.5 relative"
        style={{
          boxShadow: reducedMotion
            ? "0 32px 80px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.05)"
            : showCompletedDemo
              ? "0 48px 120px rgba(245,197,24,0.35), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.05)"
              : "0 32px 80px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.05)",
          transition: "box-shadow 0.5s ease",
        }}
      >
        {/* Dynamic Island / notch — absolute positioned overlapping screen top (like real iPhone) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-[#0F0E0A] rounded-b-[14px] z-10" />

        {/* Phone screen — min-height ensures all content visible, no aspect-ratio (matches Hero) */}
        <div
          className="bg-[#ECE5DD] rounded-[34px] overflow-hidden flex flex-col"
          style={{
            minHeight: "480px",
            maxHeight: "80vh",
          }}
        >
          {/* ── WhatsApp Header (pt-6 for notch clearance, like Hero) ─ */}
          <div className="bg-[#0B5345] pt-6 pb-2.5 px-3.5 flex items-center gap-2.5 flex-shrink-0">
            <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-[#F5C518] to-[#C49400] flex items-center justify-center font-heading font-extrabold text-[12px] text-[#18160E]">
              LF
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold text-[13px] leading-tight">
                Lumenfly Bot ✦
              </div>
              <div className="text-white/65 text-[10.5px]">🟢 Automated · always on</div>
            </div>
          </div>

          {/* ── Chat Content — scrollable after demo completes ──────── */}
          <div
            ref={staticChatRef}
            className={`p-2.5 flex flex-col gap-[7px] flex-1 ${
              showCompletedDemo ? "overflow-y-auto" : "overflow-hidden"
            }`}
            style={{
              scrollbarWidth: showCompletedDemo ? "thin" : "none",
              msOverflowStyle: showCompletedDemo ? undefined : "none",
            }}
          >
            {/* ── Typing 1 — Bot (hidden when completed) ────────────── */}
            {!showCompletedDemo && (
              <TypingDots
                visible={typing1Progress * (1 - msg1Progress)}
                side="left"
              />
            )}

            {/* ── Message 1 — Bot greeting + WhatsApp API quick-reply buttons (inside bubble) ─ */}
            <BotGreetingWithButtons
              text={MESSAGES.botGreeting.text}
              time={MESSAGES.botGreeting.time}
              progress={orCompleted(msg1Progress)}
              btnProgress={orCompleted(btnHighlightProgress)}
              btnOpacity={orCompleted(quickRepliesProgress)}
              reduceMotion={reducedMotion}
            />

            {/* ── Message 2 — Customer reply (the tapped button text) ── */}
            <ChatBubble
              text={MESSAGES.customerReply.text}
              time={MESSAGES.customerReply.time}
              progress={orCompleted(msg2Progress)}
              side="right"
              bg="bg-[#D9F7BE]"
            />

            {/* ── Typing 3 — Bot (hidden when completed) ────────────── */}
            {!showCompletedDemo && (
              <TypingDots
                visible={typing3Progress * (1 - flowStep1Progress)}
                side="left"
              />
            )}

            {/* ── FLOW UI — Service + Time Selection ────────────────── */}
            <div
              className="self-start w-full max-w-full"
              style={{
                opacity: reducedMotion ? 1 : orCompleted(flowStep1Progress),
                transform: reducedMotion
                  ? "none"
                  : `translateY(${(1 - orCompleted(flowStep1Progress)) * 16}px) scale(${0.92 + 0.08 * orCompleted(flowStep1Progress)})`,
              }}
            >
              <FlowServiceSelection
                progress={orCompleted(flowStep1Progress)}
                transitionProgress={orCompleted(flowTransitionProgress)}
                step2Progress={orCompleted(flowStep2Progress)}
                submitProgress={orCompleted(flowSubmitProgress)}
                closeProgress={orCompleted(flowCloseProgress)}
                serviceHighlightIndex={showCompletedDemo ? 0 : serviceHighlightIndex}
                timeHighlightIndex={showCompletedDemo ? 1 : timeHighlightIndex}
                completed={showCompletedDemo}
              />
            </div>

            {/* ── Confirmation Message ──────────────────────────────── */}
            <ChatBubble
              text={MESSAGES.botConfirmation.text}
              time={MESSAGES.botConfirmation.time}
              progress={orCompleted(msgConfirmProgress)}
              side="left"
              bg="bg-white"
            />
          </div>

          {/* ── WhatsApp Input Bar ──────────────────────────────────── */}
          <div className="bg-[#F0F2F5] px-2.5 py-2 flex items-center gap-2 border-t border-black/6 flex-shrink-0">
            <div className="flex-1 bg-white rounded-[18px] px-2.5 py-[7px] text-[11px] text-[#aaa]">
              Type a message...
            </div>
            <div className="w-[30px] h-[30px] bg-[#0B5345] rounded-full flex items-center justify-center text-white text-[13px]">
              ➤
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[85%] h-[70px] bg-gradient-to-t from-[#25D366]/15 to-transparent pointer-events-none rounded-full blur-2xl" />
    </div>
  );

  // ── Animated phone (for locked overlay — scroll-driven scale/opacity) ─
  const phoneContent = (
    <div
      className="relative"
      style={{
        transform: `scale(${phoneScale})`,
        transformOrigin: "center center",
        opacity: phoneOpacity,
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Phone chassis — dark bezel wrapping the screen like a real iPhone */}
      <div
        className="w-[280px] bg-[#0F0E0A] rounded-[44px] p-2.5 relative"
        style={{
          boxShadow: reducedMotion
            ? "0 32px 80px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.05)"
            : `0 ${32 + glowProgress * 16}px ${80 + glowProgress * 40}px rgba(245,197,24,${0.08 + glowProgress * 0.3}), 0 0 0 1px rgba(255,255,255,${0.06 + glowProgress * 0.02}), inset 0 0 0 1px rgba(255,255,255,0.05)`,
        }}
      >
        {/* Dynamic Island / notch — absolute positioned overlapping screen top (like real iPhone) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-[#0F0E0A] rounded-b-[14px] z-10" />

        {/* Phone screen — min-height ensures all content visible, no aspect-ratio (matches Hero) */}
        <div
          className="bg-[#ECE5DD] rounded-[34px] overflow-hidden flex flex-col"
          style={{
            minHeight: "480px",
            maxHeight: "80vh",
          }}
        >
          {/* ── WhatsApp Header (pt-6 for notch clearance, like Hero) ─ */}
          <div className="bg-[#0B5345] pt-6 pb-2.5 px-3.5 flex items-center gap-2.5 flex-shrink-0">
            <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-[#F5C518] to-[#C49400] flex items-center justify-center font-heading font-extrabold text-[12px] text-[#18160E]">
              LF
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold text-[13px] leading-tight">
                Lumenfly Bot ✦
              </div>
              <div className="text-white/65 text-[10.5px]">🟢 Automated · always on</div>
            </div>
          </div>

          {/* ── Chat Messages Container ──────────────────────────────── */}
          <div
            ref={chatContainerRef}
            className="p-2.5 flex flex-col gap-[7px] flex-1 overflow-y-auto scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* ── Typing 1 — Bot ─────────────────────────────────────── */}
            <TypingDots
              visible={typing1Progress * (1 - msg1Progress)}
              side="left"
            />

            {/* ── Message 1 — Bot greeting + WhatsApp API quick-reply buttons (inside bubble) ─ */}
            <BotGreetingWithButtons
              text={MESSAGES.botGreeting.text}
              time={MESSAGES.botGreeting.time}
              progress={msg1Progress}
              btnProgress={btnHighlightProgress}
              btnOpacity={quickRepliesProgress}
              reduceMotion={reducedMotion}
            />

            {/* ── Message 2 — Customer reply (the tapped button text) ── */}
            <ChatBubble
              text={MESSAGES.customerReply.text}
              time={MESSAGES.customerReply.time}
              progress={msg2Progress}
              side="right"
              bg="bg-[#D9F7BE]"
            />

            {/* ── Typing 3 — Bot (before Flow) ──────────────────────── */}
            <TypingDots
              visible={typing3Progress * (1 - flowStep1Progress)}
              side="left"
            />

            {/* ── FLOW UI — Service + Time Selection ────────────────── */}
            <div
              className="self-start w-full max-w-full"
              style={{
                opacity: reducedMotion ? 1 : flowStep1Progress,
                transform: reducedMotion
                  ? "none"
                  : `translateY(${(1 - flowStep1Progress) * 16}px) scale(${0.92 + 0.08 * flowStep1Progress})`,
              }}
            >
              <FlowServiceSelection
                progress={flowStep1Progress}
                transitionProgress={flowTransitionProgress}
                step2Progress={flowStep2Progress}
                submitProgress={flowSubmitProgress}
                closeProgress={flowCloseProgress}
                serviceHighlightIndex={serviceHighlightIndex}
                timeHighlightIndex={timeHighlightIndex}
              />
            </div>

            {/* ── Confirmation Message ──────────────────────────────── */}
            <ChatBubble
              text={MESSAGES.botConfirmation.text}
              time={MESSAGES.botConfirmation.time}
              progress={msgConfirmProgress}
              side="left"
              bg="bg-white"
            />
          </div>

          {/* ── WhatsApp Input Bar ──────────────────────────────────── */}
          <div className="bg-[#F0F2F5] px-2.5 py-2 flex items-center gap-2 border-t border-black/6 flex-shrink-0">
            <div className="flex-1 bg-white rounded-[18px] px-2.5 py-[7px] text-[11px] text-[#aaa]">
              Type a message...
            </div>
            <div className="w-[30px] h-[30px] bg-[#0B5345] rounded-full flex items-center justify-center text-white text-[13px]">
              ➤
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[85%] h-[70px] bg-gradient-to-t from-[#25D366]/15 to-transparent pointer-events-none rounded-full blur-2xl" />
    </div>
  );

  // ── Render ───────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Normal section (always rendered) ─────────────────────────── */}
      <section
        id="plans"
        className="py-[clamp(40px,8vw,100px)] px-[clamp(16px,6%,80px)] bg-gradient-to-br from-[#1A1810] to-[#221E0D]"
        ref={sectionRef}
        style={{
          opacity: isLocked ? 0 : 1,
          pointerEvents: isLocked ? "none" : "auto",
          transition: "opacity 0.3s ease",
          // When locked, collapse the section to ~60px to avoid black gap
          minHeight: isLocked ? "60px" : "",
          overflow: isLocked ? "hidden" : "",
          padding: isLocked ? "0" : "",
        }}
      >
        {/* Section Header */}
        <div className="text-center reveal">
          <SectionHeader
            eyebrow={LEAD_CATCHER.eyebrow}
            headline={LEAD_CATCHER.headline}
            subtitle={LEAD_CATCHER.subtitle}
            dark={true}
          />
        </div>

        {/* Phone — static full-size preview (no scroll transforms) */}
        <div className="flex justify-center mt-8" style={{ perspective: "1000px" }}>
          {staticPhoneContent}
        </div>

        {/* Features + CTA — visible when not locked, demo completed, or during parallax */}
        <div
          ref={featuresRef}
          className="max-w-lg mx-auto mt-12 text-center"
          style={{
            opacity: reducedMotion || showCompletedDemo || !isLocked
              ? 1
              : Math.max(0, Math.min(1, (fakeScrollProgress - 0.5) / 0.3)),
            transform: reducedMotion || showCompletedDemo || !isLocked
              ? "none"
              : `translateY(${Math.max(0, (0.5 - fakeScrollProgress) * 60)}px)`,
          }}
        >
          <div className="flex items-center justify-center gap-1.5 text-[10.5px] font-bold tracking-wide uppercase text-[#F5C518] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] animate-pulse" />
            THE BASE PLAN
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight mb-1.5">
            The Lead Catcher
          </h3>
          <p className="text-[13px] text-[rgba(255,255,255,0.5)] pb-5 mb-5 border-b border-[rgba(255,255,255,0.08)]">
            Solo entrepreneurs, local salons & clinics ready to start automating.
          </p>

          <ul className="flex flex-col gap-2.5 mb-6 text-left max-w-sm mx-auto">
            {LEAD_CATCHER.features.map((feat, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[13px] text-[rgba(255,255,255,0.65)]"
              >
                <span className="w-[17px] h-[17px] rounded-[5px] bg-[rgba(245,197,24,0.12)] flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px] text-[#F5C518]">
                  ✓
                </span>
                {feat}
              </li>
            ))}
          </ul>

          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 rounded-full border border-[#F5C518] bg-transparent text-[#F5C518] font-heading font-bold text-[13px] hover:bg-[#F5C518] hover:text-[#18160E] transition-all duration-220"
          >
            Get Started →
          </a>
        </div>
      </section>

      {/* ── Locked overlay (only when locked) ─────────────────────────── */}
      {isLocked && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            backgroundColor: `rgba(26,24,16,${0.6 * phoneOpacity})`,
          }}
        >
          {/* Animated background pattern — subtle parallax depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.12 * phoneOpacity,
              backgroundImage:
                "radial-gradient(circle at 25% 35%, rgba(245,197,24,0.5) 0px, transparent 1px), radial-gradient(circle at 65% 20%, rgba(245,197,24,0.4) 0px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(245,197,24,0.5) 0px, transparent 1px), radial-gradient(circle at 15% 75%, rgba(245,197,24,0.3) 0px, transparent 1px), radial-gradient(circle at 50% 55%, rgba(245,197,24,0.4) 0px, transparent 1px)",
              backgroundSize: "120px 120px, 180px 180px, 150px 150px, 200px 200px, 160px 160px",
              backgroundPosition: `${20 + fakeScrollProgress * 15}% ${15 + fakeScrollProgress * 8}%, ${65 - fakeScrollProgress * 10}% ${20 + fakeScrollProgress * 12}%, ${80 + fakeScrollProgress * 5}% ${70 - fakeScrollProgress * 6}%, ${15 - fakeScrollProgress * 8}% ${75 + fakeScrollProgress * 4}%, ${50 + fakeScrollProgress * 3}% ${55 - fakeScrollProgress * 5}%`,
              transform: `scale(${1 + fakeScrollProgress * 0.04})`,
            }}
          />

          {/* Top blur overlay — parallax subtle */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: "clamp(80px, 25vh, 200px)",
              background: "linear-gradient(180deg, rgba(26,24,16,1) 0%, rgba(26,24,16,0) 100%)",
              opacity: blurOpacity,
              backdropFilter: `blur(${blurOpacity * 8}px)`,
              WebkitBackdropFilter: `blur(${blurOpacity * 8}px)`,
              transform: `translateY(${fakeScrollProgress * -12}px)`,
            }}
          />

          {/* Bottom blur overlay — parallax subtle */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: "clamp(80px, 25vh, 200px)",
              background: "linear-gradient(0deg, rgba(26,24,16,1) 0%, rgba(26,24,16,0) 100%)",
              opacity: blurOpacity,
              backdropFilter: `blur(${blurOpacity * 8}px)`,
              WebkitBackdropFilter: `blur(${blurOpacity * 8}px)`,
              transform: `translateY(${fakeScrollProgress * 8}px)`,
            }}
          />

          {/* Phone — centered with subtle 3D tilt from scroll */}
          <div
            style={{
              perspective: "1000px",
              transform: `rotateX(${fakeScrollProgress * 1.5}deg)`,
            }}
          >
            {phoneContent}
          </div>

          {/* Scroll hint */}
          <div
            className="absolute bottom-[clamp(12px,4vh,32px)] left-1/2 -translate-x-1/2 text-[10px] text-[rgba(255,255,255,0.25)] tracking-wider uppercase pointer-events-none"
            style={{
              opacity: Math.max(0, 1 - fakeScrollProgress * 3),
            }}
          >
            ↓ Scroll to continue
          </div>
        </div>
      )}
    </>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────

/** Typing indicator dots */
function TypingDots({
  visible,
  side,
  green,
}: {
  visible: number;
  side: "left" | "right";
  green?: boolean;
}) {
  const align = side === "left" ? "self-start" : "self-end";
  const bg = green ? "bg-[#D9F7BE]" : "bg-white";
  const round = side === "left" ? "rounded-tl-[3px]" : "rounded-tr-[3px]";
  return (
    <div
      className={`flex items-center gap-1 px-3 py-2 rounded-[8px] ${bg} ${align} ${round}`}
      style={{
        opacity: visible,
        transform: `scale(${0.5 + 0.5 * visible})`,
        pointerEvents: "none",
      }}
    >
      <span
        className="w-[5px] h-[5px] rounded-full bg-[#888] animate-bounce"
        style={{ animationDelay: "0s" }}
      />
      <span
        className="w-[5px] h-[5px] rounded-full bg-[#888] animate-bounce"
        style={{ animationDelay: "0.15s" }}
      />
      <span
        className="w-[5px] h-[5px] rounded-full bg-[#888] animate-bounce"
        style={{ animationDelay: "0.3s" }}
      />
    </div>
  );
}

/** Chat bubble */
function ChatBubble({
  text,
  time,
  progress,
  side,
  bg,
}: {
  text: string;
  time: string;
  progress: number;
  side: "left" | "right";
  bg: string;
}) {
  const align = side === "left" ? "self-start" : "self-end";
  const round = side === "left" ? "rounded-tl-[3px]" : "rounded-tr-[3px]";
  return (
    <div
      className={`max-w-[92%] px-3 py-2 rounded-[8px] text-[11px] leading-relaxed text-[#111] ${bg} ${align} ${round} whitespace-pre-line`}
      style={{
        opacity: progress,
        transform: `translateY(${(1 - progress) * 12}px)`,
      }}
    >
      {text}
      <div className="text-[8px] text-[#999] text-right mt-[2px]">{time}</div>
    </div>
  );
}

/** Meta WhatsApp Flow — Service Selection Step */
function FlowServiceSelection({
  progress,
  transitionProgress,
  step2Progress,
  submitProgress,
  closeProgress,
  serviceHighlightIndex,
  timeHighlightIndex,
  completed,
}: {
  progress: number;
  transitionProgress: number;
  step2Progress: number;
  submitProgress: number;
  closeProgress: number;
  serviceHighlightIndex: number;
  timeHighlightIndex: number;
  completed?: boolean;
}) {
  const showStep1 = completed || progress < 1 || (transitionProgress < 1 && transitionProgress > 0);
  const showStep2 = completed || transitionProgress >= 0.5 || step2Progress > 0;

  const flowOpacity = completed ? 1 : Math.min(1, progress) * (1 - closeProgress);
  const flowScale = completed ? 1 : 0.92 + 0.08 * Math.min(1, progress);

  const submitDone = completed || submitProgress >= 1;

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-[#E8E8E8]"
      style={{
        opacity: flowOpacity,
        transform: `scale(${flowScale})`,
        transformOrigin: "left center",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Step 1: Service Selection */}
      {showStep1 && (
        <div className="p-3">
          <div className="text-[10px] font-bold text-[#075E54] mb-2.5 tracking-wide uppercase flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#25D366] inline-block" />
            Select a Service
          </div>
          <div className="flex flex-col gap-2">
            {FLOW_SERVICES.map((svc, i) => {
              const isHighlighted = i === serviceHighlightIndex && progress < 1;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isHighlighted
                      ? "border-[#25D366] bg-[#E8F5E9] shadow-[0_1px_4px_rgba(37,211,102,0.18)] border-l-[3px]"
                      : "border-[#E8E8E8] bg-white hover:border-[#D0D0D0]"
                  }`}
                >
                  <span className="text-[15px] flex-shrink-0">{svc.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold text-[#111] leading-tight">
                      {svc.label}
                    </div>
                    <div className="text-[9px] text-[#888] leading-tight">{svc.desc}</div>
                  </div>
                  {/* WhatsApp-style radio: outer circle + inner filled dot */}
                  <div
                    className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isHighlighted
                        ? "border-[#25D366] bg-white"
                        : "border-[#C0C0C0] bg-white"
                    }`}
                  >
                    <div
                      className={`rounded-full transition-all duration-300 ${
                        isHighlighted
                          ? "w-[10px] h-[10px] bg-[#25D366] scale-100"
                          : "w-[4px] h-[4px] bg-transparent scale-0"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Transition divider: service selected → time selection */}
      {transitionProgress > 0 && transitionProgress < 1 && (
        <div className="px-3">
          <div className="h-px bg-[#E8E8E8]" />
          <div className="flex items-center gap-2 py-1.5">
            <div
              className="h-[3px] bg-[#25D366] rounded-full transition-all duration-300"
              style={{ width: `${Math.max(8, transitionProgress * 100)}%` }}
            />
            <span className="text-[8px] text-[#999] flex-shrink-0">next →</span>
          </div>
          <div className="h-px bg-[#E8E8E8]" />
        </div>
      )}

      {/* Step 2: Time Selection */}
      {showStep2 && (
        <div className="p-3 pt-0">
          <div className="text-[10px] font-bold text-[#075E54] mb-2.5 tracking-wide uppercase flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#25D366] inline-block" />
            Pick a Time
          </div>
          <div className="flex flex-col gap-2">
            {FLOW_TIMES.map((slot, i) => {
              const isHighlighted = i === timeHighlightIndex && step2Progress < 1;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isHighlighted
                      ? "border-[#25D366] bg-[#E8F5E9] shadow-[0_1px_4px_rgba(37,211,102,0.18)] border-l-[3px]"
                      : "border-[#E8E8E8] bg-white hover:border-[#D0D0D0]"
                  }`}
                >
                  <span className="text-[13px] flex-shrink-0">🕐</span>
                  <div className="flex-1 text-[11px] font-semibold text-[#111]">
                    {slot.label}
                  </div>
                  {/* WhatsApp-style radio: outer circle + inner filled dot */}
                  <div
                    className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isHighlighted
                        ? "border-[#25D366] bg-white"
                        : "border-[#C0C0C0] bg-white"
                    }`}
                  >
                    <div
                      className={`rounded-full transition-all duration-300 ${
                        isHighlighted
                          ? "w-[10px] h-[10px] bg-[#25D366] scale-100"
                          : "w-[4px] h-[4px] bg-transparent scale-0"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submit Button — WhatsApp-style full-width green CTA */}
          {submitProgress > 0 && (
            <div
              className="mt-3"
              style={{
                opacity: Math.min(1, submitProgress * 2),
                transform: `translateY(${(1 - Math.min(1, submitProgress * 2)) * 8}px)`,
              }}
            >
              <button
                className="w-full py-2.5 rounded-xl bg-[#25D366] text-white text-[11px] font-bold tracking-wide transition-all duration-300 shadow-[0_2px_8px_rgba(37,211,102,0.25)] active:scale-[0.98]"
                style={{
                  opacity: submitDone ? 0.55 : 1,
                }}
              >
                {submitDone ? "✓ Confirmed" : "Confirm Booking"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/** Bot greeting bubble with WhatsApp API-style interactive quick-reply buttons INSIDE the bubble */
function BotGreetingWithButtons({
  text,
  time,
  progress,
  btnProgress,
  btnOpacity,
  reduceMotion,
}: {
  text: string;
  time: string;
  progress: number;
  btnProgress: number;
  btnOpacity: number;
  reduceMotion: boolean;
}) {
  return (
    <div
      className="self-start max-w-[92%] px-3 py-2 rounded-[8px] rounded-tl-[3px] bg-white text-[11px] leading-relaxed text-[#111] whitespace-pre-line"
      style={{
        opacity: progress,
        transform: `translateY(${(1 - progress) * 12}px)`,
      }}
    >
      {text}

      {/* Quick-reply buttons (max 3, inside the bubble like WhatsApp API interactive messages) */}
      <div
        className="flex flex-wrap gap-1.5 mt-2.5 pt-2.5 border-t border-[#E8E8E8]"
        style={{
          opacity: reduceMotion ? 1 : btnOpacity,
          transform: reduceMotion ? "none" : `translateY(${(1 - btnOpacity) * 4}px)`,
        }}
      >
        {QUICK_REPLIES.map((btn, i) => {
          const highlightStart = i / QUICK_REPLIES.length;
          const highlightEnd = (i + 1) / QUICK_REPLIES.length;
          // During animation: highlight the current button being "pressed"
          // After animation completes (btnProgress >= 1): keep button 0 highlighted
          const isHighlighted =
            btnProgress >= 1
              ? i === 0
              : btnProgress > 0 &&
                btnProgress >= highlightStart &&
                btnProgress < highlightEnd;
          return (
            <div
              key={i}
              className={`text-[10.5px] px-3 py-[5px] rounded-full border transition-all duration-200 ${
                isHighlighted
                  ? "bg-[#25D366] border-[#25D366] text-white scale-95 shadow-[0_0_0_2px_rgba(37,211,102,0.2)]"
                  : "bg-[#F5F5F5] border-[#DDD] text-[#333]"
              }`}
              style={{ cursor: "default" }}
            >
              {btn.emoji} {btn.label}
            </div>
          );
        })}
      </div>

      <div className="text-[8px] text-[#999] text-right mt-[6px]">{time}</div>
    </div>
  );
}
