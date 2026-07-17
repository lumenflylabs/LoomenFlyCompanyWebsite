import { TRUST_FLOW } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TrustFlow() {
  return (
    <section className="bg-[#000000] text-white py-40 md:py-64 px-[clamp(24px,5%,120px)] border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center">
        
        <ScrollReveal>
          <div className="mb-40 md:mb-64">
            <span className="font-sans font-bold text-[12px] text-[#FFD100] uppercase tracking-[0.2em] block mb-8">
              {TRUST_FLOW.eyebrow}
            </span>
            <h2 className="font-heading text-[clamp(40px,5vw,80px)] leading-[1.1] mb-12 max-w-[900px] mx-auto text-balance">
              {TRUST_FLOW.headline}
            </h2>
            <p className="font-sans text-[clamp(18px,2vw,24px)] text-white/50 max-w-[700px] mx-auto leading-relaxed">
              {TRUST_FLOW.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-40 md:gap-64 items-center justify-center relative">
          {TRUST_FLOW.nodes.map((node, index) => (
            <ScrollReveal key={index} delay={0.1} className="relative w-full max-w-[800px] flex items-center justify-center group">
              
              {/* Massive Typographic Watermark (Reduced opacity for mobile legibility) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(150px,30vw,400px)] font-heading leading-none text-white/[0.01] select-none -z-10 group-hover:text-[#E51E25]/[0.02] transition-colors duration-1000">
                0{node.icon}
              </div>

              {/* High-Contrast Foreground Text */}
              <p className="font-heading text-[clamp(32px,4vw,64px)] text-white/90 text-center whitespace-pre-line leading-[1.2] group-hover:text-white transition-colors duration-500">
                {node.label}
              </p>
              
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}