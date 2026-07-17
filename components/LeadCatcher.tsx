import { COMPANY, LEAD_CATCHER } from "@/lib/constants";

export default function LeadCatcher() {
  return (
    <section id="plans" className="py-[clamp(80px,10vw,160px)] px-[clamp(24px,5%,64px)] bg-[#F6F5ED]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        <div className="flex-1 order-2 lg:order-1">
          <div className="w-full max-w-[500px] aspect-square mx-auto bg-white rounded-[40px] p-8 flex flex-col justify-between soft-shadow relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E51E25]/5 rounded-full blur-[60px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD100]/10 rounded-full blur-[60px]" />
            
            <div className="flex justify-between items-center relative z-10 pb-6 border-b border-[#18160E]/5 mb-6">
              <span className="font-heading text-xl text-[#18160E]">Booking Chat</span>
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E51E25]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFD100]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#18160E]/20" />
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-6 justify-center relative z-10">
              <div className="p-4 rounded-2xl rounded-tl-sm bg-[#F6F5ED] self-start w-[85%] border border-[#18160E]/5">
                <div className="text-[12px] font-sans font-bold text-[#18160E]/40 mb-1 uppercase tracking-wider">Customer</div>
                <div className="text-[15px] font-medium text-[#18160E]">"Do you have time for a haircut today?"</div>
              </div>
              
              <div className="p-4 rounded-2xl rounded-tr-sm bg-[#18160E] self-end w-[85%] text-right shadow-lg">
                <div className="text-[12px] font-sans font-bold text-[#FFD100] mb-1 uppercase tracking-wider">Loomenfly Bot</div>
                <div className="text-[15px] font-medium text-white">"Yes! I have slots at 2 PM or 4 PM. Tap to book."</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E51E25]/20 self-start w-[85%]">
                <div className="text-[12px] font-sans font-bold text-[#E51E25] mb-1 uppercase tracking-wider">System</div>
                <div className="text-[15px] font-medium text-[#18160E]">✅ Appointment Confirmed in Calendar</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 order-1 lg:order-2">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white shadow-sm border border-[#18160E]/5 mb-6">
            <span className="font-sans font-bold text-[13px] text-[#E51E25] uppercase tracking-widest">
              {LEAD_CATCHER.eyebrow}
            </span>
          </div>
          <h2 className="font-heading text-[clamp(36px,5vw,60px)] leading-[1.1] text-[#18160E] mb-6">
            {LEAD_CATCHER.headline}
          </h2>
          <p className="text-[clamp(16px,2vw,18px)] text-[#18160E]/60 leading-relaxed font-sans font-medium mb-10 max-w-md">
            {LEAD_CATCHER.subtitle}
          </p>
          
          <ul className="flex flex-col gap-4 mb-10">
            {LEAD_CATCHER.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-4 text-[16px] font-sans font-medium text-[#18160E]">
                <div className="w-6 h-6 rounded-full bg-[#FFD100]/20 flex items-center justify-center text-[#18160E]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                {feat}
              </li>
            ))}
          </ul>

          <a href={COMPANY.waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#E51E25] text-white font-sans font-bold text-[15px] rounded-full hover:bg-[#18160E] transition-colors shadow-lg">
            Get The Lead Catcher
          </a>
        </div>

      </div>
    </section>
  );
}