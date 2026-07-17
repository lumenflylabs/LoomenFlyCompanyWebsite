import { PREMIUM_ADDONS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PremiumAddons() {
  return (
    <section id="addons" className="relative bg-white text-[#000000] py-32 md:py-64 px-[clamp(24px,5%,120px)] border-t border-[#000000]/5">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-24 lg:gap-32 items-start">
        
        {/* Sticky Left Column */}
        <div className="flex-1 lg:sticky lg:top-[20vh]">
          <ScrollReveal>
            <span className="font-sans font-bold text-[12px] text-[#000000]/40 uppercase tracking-[0.2em] block mb-8">
              {PREMIUM_ADDONS.eyebrow}
            </span>
            <h2 className="font-heading text-[clamp(44px,6vw,80px)] leading-[1.1] mb-8 max-w-[600px] text-balance">
              {PREMIUM_ADDONS.headline.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
            <p className="font-sans text-[clamp(18px,2vw,24px)] text-[#000000]/60 max-w-[500px] leading-relaxed">
              {PREMIUM_ADDONS.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Scrolling Right Column */}
        <div className="flex-1 w-full flex flex-col gap-24 md:gap-40 lg:pt-[10vh]">
          {PREMIUM_ADDONS.addons.map((addon, index) => (
            <ScrollReveal key={index} delay={0.1}>
              <div className="group border-l border-[#000000]/10 pl-8 md:pl-16 hover:border-[#E51E25] transition-colors duration-500">
                <span className="font-sans font-bold text-[12px] uppercase tracking-[0.2em] text-[#000000]/30 mb-6 block group-hover:text-[#E51E25] transition-colors duration-500">
                  {addon.tagline}
                </span>
                <h3 className="font-heading text-[clamp(32px,4vw,56px)] leading-[1.1] mb-6 text-[#000000] transition-colors duration-500">
                  {addon.title}
                </h3>
                <p className="font-sans text-xl md:text-2xl text-[#000000]/60 leading-relaxed">
                  {addon.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}