import { ABOUT } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="bg-[#000000] text-white py-40 md:py-64 px-[clamp(24px,5%,120px)] border-t border-white/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-24 lg:gap-32 items-center">
        
        {/* Left Side: The Heavy Manifesto */}
        <div className="flex-1 lg:pr-12">
          <ScrollReveal>
            <span className="font-sans font-bold text-[12px] text-[#E51E25] uppercase tracking-[0.2em] block mb-12">
              {ABOUT.eyebrow}
            </span>
            <h2 className="font-heading text-[clamp(48px,6vw,90px)] leading-[1.05] tracking-tight mb-16 text-white text-balance">
              {ABOUT.headline.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
          </ScrollReveal>
          
          <div className="flex flex-col gap-8 max-w-[600px]">
            {ABOUT.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={0.2 + (0.1 * i)}>
                <p className="font-sans text-xl md:text-2xl text-white/60 leading-relaxed">
                  {p}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right Side: The Anchor Card */}
        <div className="flex-1 w-full">
          <ScrollReveal delay={0.4}>
            <div className="bg-white text-[#000000] p-12 md:p-20 rounded-[40px] shadow-2xl flex flex-col justify-center transition-transform duration-500 hover:scale-[1.02]">
              <h3 className="font-heading text-4xl md:text-6xl leading-[1.1] mb-8 text-balance">
                {ABOUT.cardTitle.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h3>
              <p className="font-sans text-lg md:text-xl text-[#000000]/60 leading-relaxed mb-16 max-w-[400px]">
                {ABOUT.cardDesc}
              </p>
              
              <ul className="flex flex-col gap-8 border-t border-[#000000]/10 pt-16">
                {ABOUT.values.map((val, i) => (
                  <li key={i} className="flex items-start gap-6 group">
                    <span className="w-10 h-10 flex-shrink-0 rounded-full border border-[#000000]/10 flex items-center justify-center text-[#E51E25] group-hover:bg-[#E51E25] group-hover:text-white transition-colors duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span className="font-sans text-xl md:text-2xl text-[#000000]/80 leading-tight pt-1">
                      {val}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}