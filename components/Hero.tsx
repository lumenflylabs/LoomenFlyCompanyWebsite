"use client";

import { COMPANY, HERO } from "@/lib/constants";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the 150vh wrapper
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  // Cinematic Aperture Physics
  const apertureProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const apertureSize = useTransform(apertureProgress, [0, 1], [0, 3500]);
  const clipPathStr = useMotionTemplate`circle(${apertureSize}px at 50% 50%)`;

  // Subtle optic shift: The white page scales down slightly as it gets swallowed
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section 
      id="home" 
      ref={wrapperRef}
      className="relative h-[150vh] bg-[#000000] -z-10"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        
        {/* 
          THE CINEMATIC APERTURE
          This pitch black div sits ON TOP of the white hero text. 
          Its clip-path is a perfect circle that mathematically expands driven by scroll progress.
        */}
        <motion.div 
          className="absolute inset-0 bg-[#000000] z-20 pointer-events-none"
          style={{
            WebkitClipPath: clipPathStr,
            clipPath: clipPathStr
          }}
        />

        {/* THE HERO CANVAS */}
        <motion.div 
          style={{ scale }}
          className="w-full h-full flex flex-col items-center justify-center px-[clamp(24px,5%,64px)] pt-[150px] pb-[80px] origin-center"
        >
          {/* Main Headline */}
          <div className="relative max-w-[1000px] mx-auto mb-10 z-10">
            <h1 className="font-heading text-[clamp(44px,7vw,100px)] leading-[1.1] text-balance text-center text-[#000000]">
              Turn WhatsApp Into <br /> Your <span className="text-[#E51E25] relative inline-block pr-2">
                FlowDesk.
                <svg className="absolute -bottom-2 left-0 w-full h-[14px]" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,10 Q50,0 100,10" fill="none" stroke="#FFD100" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="font-sans font-medium text-[clamp(16px,2vw,22px)] text-[#000000]/60 max-w-[800px] mx-auto text-balance leading-relaxed relative z-10 text-center">
            {HERO.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}