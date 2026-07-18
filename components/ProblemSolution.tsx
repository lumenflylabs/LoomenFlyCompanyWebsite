"use client";

'use client';

import { useRef } from "react";
import { PROBLEM_SOLUTION } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProblemSolution() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll strictly for the desktop horizontal section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section id="problem" className="relative bg-[#F6F5ED] text-[#111111]">
      
      {/* 
        ========================================================================
        MOBILE ARCHITECTURE: NATIVE VERTICAL FLOW
        Pure, highly readable native scrolling for the best mobile UX
        ========================================================================
      */}
      <div className="md:hidden flex flex-col relative w-full pb-24">
        
        {/* Mobile Header (Static, Natural Scroll) */}
        <div className="w-full flex flex-col justify-center px-6 pt-32 pb-16 relative z-0">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#E51E25] uppercase mb-4 font-bold">
            {PROBLEM_SOLUTION.eyebrow}
          </span>
          <h2 className="font-heading text-[clamp(32px,10vw,64px)] font-medium leading-[1.05] tracking-tight text-[#111111] mb-6">
            {PROBLEM_SOLUTION.headline.split('\n').map((line, i) => (
              <span key={i} className="block">
                {i % 2 === 1 ? <span className="italic font-light">{line}</span> : line}
              </span>
            ))}
          </h2>
          <p className="font-sans text-base text-[#111111]/60 leading-relaxed">
            {PROBLEM_SOLUTION.subtitle}
          </p>
        </div>

        {/* Mobile Cards (Standard Vertical Stack) */}
        <div className="w-full flex flex-col gap-8 px-6 relative z-10">
          {PROBLEM_SOLUTION.without.items.map((oldItem, index) => {
            const newItem = PROBLEM_SOLUTION.with.items[index];

            return (
              <div 
                key={index} 
                className="w-full flex flex-col bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden border border-[#111111]/5"
              >
                {/* TOP HALF: THE PROBLEM */}
                <div className="w-full flex flex-col p-8 bg-[#F6F5ED]/50 border-b border-[#111111]/5">
                  <span className="font-heading text-[10px] tracking-[0.15em] text-[#111111]/40 uppercase flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E51E25]" />
                    {PROBLEM_SOLUTION.without.label}
                  </span>
                  <h3 className="font-heading text-xl text-[#111111]/40 leading-[1.1] mb-3">
                    {oldItem.title}
                  </h3>
                  <p className="font-sans text-sm text-[#111111]/40 leading-relaxed">
                    {oldItem.desc}
                  </p>
                </div>

                {/* BOTTOM HALF: THE SOLUTION */}
                <div className="w-full flex flex-col p-8 bg-white">
                  <span className="font-heading text-[10px] tracking-[0.15em] text-[#111111] uppercase flex items-center gap-3 font-semibold mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFD100]" />
                    {PROBLEM_SOLUTION.with.label}
                  </span>
                  <h3 className="font-heading text-2xl font-medium text-[#111111] leading-[1.05] tracking-tight mb-4">
                    {newItem.title}
                  </h3>
                  <p className="font-sans text-base text-[#111111]/70 leading-relaxed">
                    {newItem.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 
        ========================================================================
        DESKTOP ARCHITECTURE: THE HORIZONTAL TRACK 
        Ultra-smooth Framer Motion layout for wide screens
        ========================================================================
      */}
      <div ref={targetRef} className="hidden md:block relative h-[500dvh]">
        <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden">
          
          <motion.div style={{ x }} className="flex w-[500vw] h-full">
            
            {/* Slide 0: Desktop Header */}
            <div className="w-screen h-full flex flex-col justify-center flex-shrink-0 p-12 lg:p-16 border-r border-[#111111]/10 relative">
              <span className="font-mono text-xs tracking-[0.3em] text-[#E51E25] uppercase mb-6 font-bold">
                {PROBLEM_SOLUTION.eyebrow}
              </span>
              <h2 className="font-heading text-[clamp(48px,5vw,64px)] font-medium leading-[1.05] tracking-tight text-[#111111] max-w-[900px] text-balance mb-6">
                {PROBLEM_SOLUTION.headline.split('\n').map((line, i) => (
                  <span key={i} className="block">
                    {i % 2 === 1 ? <span className="italic font-light">{line}</span> : line}
                  </span>
                ))}
              </h2>
              <p className="font-sans text-lg lg:text-xl text-[#111111]/60 max-w-[600px] leading-relaxed">
                {PROBLEM_SOLUTION.subtitle}
              </p>
              
              <div className="absolute bottom-12 left-12 lg:left-24 flex items-center gap-4 text-[#111111]/40 font-mono text-xs uppercase tracking-[0.2em]">
                <span>Scroll to explore</span>
                <div className="w-24 h-[1px] bg-[#111111]/20" />
                <span>&rarr;</span>
              </div>
            </div>

            {/* Slide 1-4: Desktop Comparisons */}
            {PROBLEM_SOLUTION.without.items.map((oldItem, index) => {
              const newItem = PROBLEM_SOLUTION.with.items[index];
              return (
                <div key={index} className="w-screen h-full flex flex-row flex-shrink-0 border-r border-[#111111]/10 last:border-r-0">
                  
                  {/* Left Side: Problem */}
                  <div className="w-1/2 h-full flex flex-col p-12 lg:p-16 border-r border-[#111111]/10 justify-center">
                    <div className="w-full max-w-[500px] mx-auto flex flex-col gap-6">
                      <span className="font-heading text-xs tracking-[0.15em] text-[#111111]/40 uppercase flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E51E25]" />
                        {PROBLEM_SOLUTION.without.label}
                      </span>
                      <h3 className="font-heading text-3xl text-[#111111]/30 leading-[1.1]">
                        {oldItem.title}
                      </h3>
                      <p className="font-sans text-lg text-[#111111]/40 leading-relaxed">
                        {oldItem.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Solution */}
                  <div className="w-1/2 h-full flex flex-col p-12 lg:p-16 bg-[#111111]/[0.02] justify-center relative overflow-hidden">
                    <div className="w-full max-w-[550px] mx-auto flex flex-col gap-6 relative z-10">
                      <span className="font-heading text-xs tracking-[0.15em] text-[#111111] uppercase flex items-center gap-3 font-semibold">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFD100]" />
                        {PROBLEM_SOLUTION.with.label}
                      </span>
                      <h3 className="font-heading text-4xl lg:text-5xl font-medium text-[#111111] leading-[1.05] tracking-tight">
                        {newItem.title}
                      </h3>
                      <p className="font-sans text-xl text-[#111111]/70 leading-relaxed">
                        {newItem.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}

          </motion.div>
        </div>
      </div>
      
    </section>
  );
}