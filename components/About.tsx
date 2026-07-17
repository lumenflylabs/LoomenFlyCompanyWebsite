import { ABOUT } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="bg-[#F6F5ED] text-[#18160E] py-[clamp(80px,10vw,160px)] px-[clamp(24px,5%,120px)]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="lg:w-1/2">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white shadow-sm border border-[#18160E]/5 mb-6">
            <span className="font-sans font-bold text-[13px] text-[#E51E25] uppercase tracking-widest">
              {ABOUT.eyebrow}
            </span>
          </div>
          <h2 className="font-heading text-[clamp(40px,5vw,70px)] leading-[1.1] mb-8">
            {ABOUT.headline.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <div className="p-8 rounded-[32px] bg-[#18160E] text-white mt-12 shadow-xl">
            <h3 className="font-heading text-[28px] text-[#FFD100] mb-4 whitespace-pre-line">
              {ABOUT.cardTitle}
            </h3>
            <p className="font-sans text-[15px] text-white/70 leading-relaxed">
              {ABOUT.cardDesc}
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-8 lg:pt-16">
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="font-sans text-[clamp(16px,1.5vw,20px)] text-[#18160E]/70 leading-relaxed font-medium">
              {p}
            </p>
          ))}
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {ABOUT.values.map((v, i) => (
              <li key={i} className="flex gap-4 items-start bg-white p-6 rounded-[24px] soft-shadow border border-[#18160E]/5">
                <span className="w-8 h-8 shrink-0 rounded-full bg-[#FFD100]/20 flex items-center justify-center text-[#18160E] mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span className="font-sans text-[15px] font-medium text-[#18160E] leading-relaxed">{v}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}