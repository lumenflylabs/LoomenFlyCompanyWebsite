import { CUSTOM_SOLUTIONS, COMPANY } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CARD_STYLES = [
  { bg: "bg-[#E51E25]", text: "text-white" },
  { bg: "bg-[#111111]", text: "text-white" },
  { bg: "bg-white", text: "text-[#000000]" },
  { bg: "bg-[#FFD100]", text: "text-[#000000]" },
];

export default function CustomSolutions() {
  return (
    <section id="custom" className="bg-[#F6F5ED] text-[#000000] py-40 md:py-64 px-[clamp(24px,5%,120px)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Intro */}
        <div className="text-center mb-32 md:mb-48">
          <ScrollReveal>
            <span className="font-sans font-bold text-[12px] text-[#E51E25] uppercase tracking-[0.2em] block mb-8">
              {CUSTOM_SOLUTIONS.eyebrow}
            </span>
            <h2 className="font-heading text-[clamp(44px,6vw,80px)] leading-[1.1] mb-10 text-balance">
              {CUSTOM_SOLUTIONS.headline}
            </h2>
            <p className="font-sans text-[clamp(18px,2vw,24px)] text-[#000000]/60 max-w-[700px] mx-auto leading-relaxed">
              {CUSTOM_SOLUTIONS.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* The Stacking Deck */}
        <div className="flex flex-col relative pb-[20vh]">
          {CUSTOM_SOLUTIONS.perks.map((perk, index) => {
            const style = CARD_STYLES[index];
            return (
              <div 
                key={index}
                className="sticky w-full mb-[10vh] last:mb-0"
                style={{ top: `calc(15vh + ${index * 40}px)` }}
              >
                <div 
                  className={`
                    ${style.bg} ${style.text}
                    p-10 md:p-20 lg:p-24
                    rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]
                    border border-[#000000]/5
                    flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-center
                    transition-transform duration-500
                  `}
                >
                  
                  {/* Big Number Icon */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-current/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-4xl md:text-5xl">0{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
                      {perk.title}
                    </h3>
                    <p className="font-sans text-xl md:text-2xl opacity-80 leading-relaxed max-w-[600px]">
                      {perk.desc}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-40 text-center">
          <ScrollReveal>
            <a
              href={COMPANY.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-5 bg-[#000000] text-white hover:bg-[#E51E25] transition-colors duration-500 font-sans font-bold text-lg rounded-full shadow-2xl"
            >
              Request a Custom Build
            </a>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}