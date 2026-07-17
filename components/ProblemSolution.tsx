"use client";

import { PROBLEM_SOLUTION } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProblemSolution() {
  return (
    <section id="problem" className="relative w-full bg-[#F6F5ED] text-[#000000] py-32 md:py-48 overflow-hidden">
      
      {/* 
        ========================================
        HEADER SECTION
        ========================================
      */}
      <div className="max-w-[1100px] mx-auto px-6 mb-24 md:mb-32 text-center">
        <ScrollReveal>
          <span className="font-sans font-bold text-[12px] md:text-[14px] text-[#E51E25] uppercase tracking-[0.3em] block mb-6">
            {PROBLEM_SOLUTION.eyebrow}
          </span>
          <h2 className="font-heading text-[clamp(44px,6vw,80px)] leading-[1.05] font-bold tracking-tight text-[#111111] text-balance mb-8">
            {PROBLEM_SOLUTION.headline.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>

          <p className="font-sans text-[clamp(16px,1.8vw,21px)] text-[#000000]/75 leading-relaxed max-w-[750px] mx-auto text-balance">
            {PROBLEM_SOLUTION.subtitle}
          </p>
        </ScrollReveal>
      </div>

      {/* 
        ========================================
        CLASSIC EDITORIAL COMPARISON LEDGER
        ========================================
      */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col gap-16">
          {PROBLEM_SOLUTION.without.items.map((oldItem, index) => {
            const newItem = PROBLEM_SOLUTION.with.items[index];

            return (
              <ScrollReveal key={index} delay={0.1 * index}>
                
                {/* Outer Classic Print Frame (Double Border + Gap) */}
                <div className="border-4 border-double border-[#111111] rounded-2xl p-1.5 bg-[#F6F5ED] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500">
                  
                  {/* Inner Container */}
                  <div className="rounded-xl overflow-hidden border border-[#111111] bg-white">
                    
                    {/* Ledger Card Header */}
                    <div className="flex justify-between items-center px-8 py-3.5 bg-[#F6F5ED] border-b-2 border-[#111111]">
                      <span className="font-heading italic text-3xl font-extrabold text-[#111111] tracking-tight">
                        0{index + 1}
                      </span>
                      <span className="font-sans font-bold text-[10px] uppercase tracking-[0.25em] text-[#111111]/40">
                        Comparison Ledger
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      
                      {/* Left Pane: Without FlowDesk (The Problem - Red Accent) */}
                      <div className="p-8 md:p-12 bg-[#FAF9F5] flex flex-col justify-center border-b lg:border-b-0 lg:border-r-2 border-[#111111] group">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-2 h-2 rounded-full bg-[#E51E25] transition-transform duration-300 group-hover:scale-150" />
                          <span className="font-sans font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#E51E25]">
                            {PROBLEM_SOLUTION.without.label}
                          </span>
                        </div>
                        
                        <h4 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-[#111111] leading-tight">
                          {oldItem.title}
                        </h4>
                        <p className="font-sans text-base md:text-lg text-[#000000]/70 leading-relaxed">
                          {oldItem.desc}
                        </p>
                      </div>

                      {/* Right Pane: With FlowDesk (The Solution - Yellow/Black Accent) */}
                      <div className="p-8 md:p-12 bg-[#111111] text-white flex flex-col justify-center relative overflow-hidden group">
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-[#FFD100] transition-transform duration-300 group-hover:scale-150" />
                            <span className="font-sans font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#FFD100]">
                              {PROBLEM_SOLUTION.with.label}
                            </span>
                          </div>
                          
                          <h4 className="font-heading text-2xl md:text-3xl font-bold mb-4 leading-tight text-white group-hover:text-[#FFD100] transition-colors duration-300">
                            {newItem.title}
                          </h4>
                          <p className="font-sans text-base md:text-lg text-[#F6F5ED]/80 leading-relaxed">
                            {newItem.desc}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </ScrollReveal>
            );
          })}
        </div>
      </div>

    </section>
  );
}