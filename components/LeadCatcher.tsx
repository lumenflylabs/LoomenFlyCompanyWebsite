import { LEAD_CATCHER } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

const BENTO_CONFIG = [
  { span: "md:col-span-2 lg:col-span-4", bg: "bg-[#111111]", text: "text-white", border: "border-transparent" },
  { span: "md:col-span-2 lg:col-span-2", bg: "bg-white", text: "text-[#000000]", border: "border-[#000000]/5" },
  { span: "md:col-span-2 lg:col-span-2", bg: "bg-white", text: "text-[#000000]", border: "border-[#000000]/5" },
  { span: "md:col-span-2 lg:col-span-4", bg: "bg-[#FFD100]", text: "text-[#000000]", border: "border-transparent" },
  { span: "md:col-span-2 lg:col-span-3", bg: "bg-white", text: "text-[#000000]", border: "border-[#000000]/5" },
  { span: "md:col-span-2 lg:col-span-3", bg: "bg-white", text: "text-[#000000]", border: "border-[#000000]/5" },
];

export default function LeadCatcher() {
  return (
    <section id="plans" className="relative bg-[#F6F5ED] text-[#000000] py-32 md:py-48 overflow-hidden border-t border-[#000000]/5">
      <div className="max-w-[1400px] mx-auto px-[clamp(24px,5%,120px)]">
        
        {/* Intro Section */}
        <div className="mb-20 md:mb-32 max-w-[800px]">
          <ScrollReveal>
            <span className="font-sans font-bold text-[12px] text-[#E51E25] uppercase tracking-[0.2em] block mb-8">
              {LEAD_CATCHER.eyebrow}
            </span>
            <h2 className="font-heading text-[clamp(44px,6vw,80px)] leading-[1.1] mb-10 text-balance">
              {LEAD_CATCHER.headline}
            </h2>
            <p className="font-sans text-[clamp(18px,2vw,24px)] text-[#000000]/60 leading-relaxed">
              {LEAD_CATCHER.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {LEAD_CATCHER.features.map((feature, index) => {
            const config = BENTO_CONFIG[index % BENTO_CONFIG.length];
            const isLargeCard = index === 0 || index === 3;

            return (
              <ScrollReveal key={index} delay={0.05 * index} className={`${config.span}`}>
                <div 
                  className={`
                    w-full h-full min-h-[300px] md:min-h-[400px] p-10 md:p-14 
                    rounded-[32px] border ${config.border} ${config.bg} ${config.text}
                    shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]
                    flex flex-col justify-between group
                    transition-transform duration-500 hover:scale-[1.01] cursor-pointer
                    relative overflow-hidden z-10
                  `}
                >
                  <div className="flex justify-between items-start mb-12 relative z-20">
                    <div className="flex items-center gap-3">
                      <span className="font-sans font-bold text-[11px] uppercase tracking-[0.2em] opacity-50">
                        Feature 0{index + 1}
                      </span>
                    </div>
                    
                    {/* Explicit Conversion CTA */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 flex items-center gap-2 bg-current text-white px-4 py-2 rounded-full cursor-pointer pointer-events-auto shadow-xl hover:scale-105 active:scale-95"
                         style={{ backgroundColor: config.bg === 'bg-[#111111]' ? 'white' : 'black', color: config.bg === 'bg-[#111111]' ? 'black' : 'white' }}>
                      <span className="font-sans font-bold text-[12px] uppercase tracking-[0.1em]">
                        Explore
                      </span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                  
                  <h3 className={`font-heading text-3xl md:text-4xl lg:text-[40px] leading-[1.1] text-balance relative z-20 ${index === 0 || index === 3 ? 'max-w-[60%]' : ''}`}>
                    {feature}
                  </h3>

                  {/* Pure CSS Dashboard UI Mockup */}
                  {index === 0 && (
                    <div className="absolute -bottom-12 -right-8 w-[80%] max-w-[400px] h-[240px] bg-[#1A1A1A] border border-white/10 rounded-tl-2xl shadow-2xl rotate-3 transition-transform duration-700 group-hover:-rotate-1 group-hover:scale-105 z-10 flex flex-col p-6 overflow-hidden">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-white/10"></div>
                        <div className="w-24 h-3 rounded-full bg-white/20"></div>
                      </div>
                      {/* Abstract Chart */}
                      <div className="flex items-end gap-2 h-24 mb-4">
                        <div className="w-1/6 h-[40%] bg-white/10 rounded-t-sm"></div>
                        <div className="w-1/6 h-[70%] bg-white/10 rounded-t-sm"></div>
                        <div className="w-1/6 h-[30%] bg-white/10 rounded-t-sm"></div>
                        <div className="w-1/6 h-[90%] bg-[#E51E25] rounded-t-sm shadow-[0_0_15px_rgba(229,30,37,0.3)]"></div>
                        <div className="w-1/6 h-[60%] bg-white/10 rounded-t-sm"></div>
                        <div className="w-1/6 h-[100%] bg-[#FFD100] rounded-t-sm shadow-[0_0_15px_rgba(255,209,0,0.3)]"></div>
                      </div>
                      {/* Skeleton text */}
                      <div className="w-full h-2 rounded-full bg-white/5 mb-2"></div>
                      <div className="w-3/4 h-2 rounded-full bg-white/5"></div>
                    </div>
                  )}

                  {/* Pure CSS WhatsApp UI Mockup */}
                  {index === 3 && (
                    <div className="absolute -bottom-12 -right-8 w-[70%] max-w-[300px] h-[300px] bg-[#EFEAE2] border border-black/10 rounded-tl-3xl shadow-2xl -rotate-3 transition-transform duration-700 group-hover:rotate-1 group-hover:scale-105 z-10 flex flex-col overflow-hidden">
                      {/* Header */}
                      <div className="bg-[#00A884] h-16 w-full flex items-center px-4 gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/30"></div>
                        <div className="flex flex-col gap-1.5">
                          <div className="w-20 h-2.5 rounded-full bg-white/90"></div>
                          <div className="w-12 h-1.5 rounded-full bg-white/50"></div>
                        </div>
                      </div>
                      {/* Chat Body */}
                      <div className="flex-1 p-4 flex flex-col gap-4">
                        <div className="self-start w-[70%] h-8 bg-white rounded-r-xl rounded-bl-xl shadow-sm"></div>
                        <div className="self-end w-[60%] h-12 bg-[#D9FDD3] rounded-l-xl rounded-br-xl shadow-sm"></div>
                        <div className="self-start w-[80%] h-20 bg-white rounded-r-xl rounded-bl-xl shadow-sm flex flex-col p-2 gap-2">
                          <div className="w-full h-2 bg-black/5 rounded-full"></div>
                          <div className="w-3/4 h-2 bg-black/5 rounded-full"></div>
                          <div className="mt-auto w-full h-6 bg-[#00A884]/10 border border-[#00A884]/20 rounded-md"></div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}