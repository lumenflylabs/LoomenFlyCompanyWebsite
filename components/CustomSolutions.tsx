import { CUSTOM_SOLUTIONS } from "@/lib/constants";
import { COMPANY } from "@/lib/constants";

export default function CustomSolutions() {
  return (
    <section id="custom" className="bg-[#18160E] text-[#F6F5ED] py-[clamp(80px,10vw,160px)] px-[clamp(24px,5%,120px)]">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 mb-6">
          <span className="font-sans font-bold text-[13px] text-[#FFD100] uppercase tracking-widest">
            {CUSTOM_SOLUTIONS.eyebrow}
          </span>
        </div>
        
        <h2 className="font-heading text-[clamp(36px,5vw,60px)] leading-[1.1] mb-6 max-w-[800px]">
          {CUSTOM_SOLUTIONS.headline}
        </h2>
        
        <p className="font-sans font-medium text-[clamp(16px,2vw,20px)] text-[#F6F5ED]/60 max-w-[600px] mx-auto leading-relaxed mb-20">
          {CUSTOM_SOLUTIONS.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full mb-20">
          {CUSTOM_SOLUTIONS.perks.map((perk, i) => (
            <div key={i} className="flex flex-col gap-4 bg-white/5 p-8 rounded-[32px] border border-white/5">
              <span className="font-heading text-[32px] text-[#FFD100]">
                {perk.icon}
              </span>
              <h3 className="font-heading text-[20px] text-white">
                {perk.title}
              </h3>
              <p className="font-sans text-[15px] text-white/50 leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>

        <a
          href={COMPANY.waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-5 bg-[#E51E25] text-white font-sans font-bold text-[16px] rounded-full hover:bg-white hover:text-[#18160E] transition-colors shadow-lg"
        >
          Let's Build It
        </a>

      </div>
    </section>
  );
}