"use client";

import { COMPANY, HERO } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-white flex flex-col items-center justify-center p-6 md:p-12"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col items-center justify-center"
      >
        {/* Main Headline */}
        <div className="relative max-w-[1000px] mx-auto mb-6 z-10">
          <h1 className="font-heading text-[clamp(40px,6vw,84px)] leading-[1.1] text-balance text-center text-[#000000]">
            Turn WhatsApp Into <br /> Your <span className="text-[#E51E25] relative inline-block pr-2">
              FlowDesk.
              <svg className="absolute -bottom-2 left-0 w-full h-[14px]" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,10 Q50,0 100,10" fill="none" stroke="#FFD100" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="font-sans font-medium text-[clamp(16px,2vw,22px)] text-[#000000]/60 max-w-[700px] mx-auto text-balance leading-relaxed relative z-10 text-center">
          {HERO.subtitle}
        </p>
      </motion.div>
    </section>
  );
}