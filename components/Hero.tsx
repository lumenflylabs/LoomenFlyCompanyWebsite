import { COMPANY, HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="relative pt-[220px] pb-[160px] px-[clamp(24px,5%,64px)] flex flex-col items-center text-center overflow-hidden min-h-[90vh]">
      
      {/* Dynamic Glow Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[40%] h-[40%] bg-[#FFD100]/20 rounded-full blur-[140px] -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/4 right-1/4 w-[30%] h-[30%] bg-[#E51E25]/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Eyebrow */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#18160E]/10 shadow-sm mb-10 transform hover:scale-105 transition-transform">
        <span className="w-2 h-2 rounded-full bg-[#E51E25] animate-pulse" />
        <span className="font-sans font-semibold text-[13px] text-[#18160E]/70 uppercase tracking-widest">
          {HERO.eyebrow}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-heading text-[clamp(44px,7vw,100px)] leading-[1.1] text-[#18160E] max-w-[1000px] mb-8 text-balance relative z-10">
        Turn WhatsApp Into <br /> Your <span className="text-[#E51E25] relative inline-block">
          Front Desk
          <svg className="absolute -bottom-3 left-0 w-full h-[14px]" viewBox="0 0 100 12" preserveAspectRatio="none">
            <path d="M0,10 Q50,0 100,10" fill="none" stroke="#FFD100" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </span>
      </h1>

      {/* Subtitle */}
      <p className="font-sans font-medium text-[clamp(16px,2vw,22px)] text-[#18160E]/60 max-w-[640px] mb-24 text-balance leading-relaxed relative z-10">
        {HERO.subtitle}
      </p>

      {/* Eye-catching Multi-layered Orbital Graphic */}
      <div className="relative w-full max-w-[800px] mx-auto flex items-center justify-center mt-12 h-[300px]">
        
        {/* Outer Orbit (Slow) */}
        <div className="absolute w-[440px] h-[440px] md:w-[600px] md:h-[600px]">
          <div className="w-full h-full rounded-full border border-dashed border-[#18160E]/10 animate-[orbit_60s_linear_infinite] flex items-center justify-center">
            
            {/* Automation Node */}
            <div className="absolute -right-4 top-[calc(50%-16px)] w-8 h-8 bg-white rounded-full shadow-lg border border-[#18160E]/5 flex items-center justify-center text-[#18160E] animate-[reverse-orbit_60s_linear_infinite]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            
          </div>
        </div>

        {/* Inner Orbit (Fast & Tight) */}
        <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
          <div className="w-full h-full rounded-full border border-solid border-[#FFD100]/20 animate-[orbit_20s_linear_infinite] flex items-center justify-center shadow-[0_0_80px_rgba(255,209,0,0.1)]">
            
            {/* WhatsApp Icon */}
            <div className="absolute -left-6 top-[calc(50%-24px)] w-12 h-12 bg-[#18160E] rounded-2xl shadow-xl border border-white/10 flex items-center justify-center text-[#FFD100] animate-[reverse-orbit_20s_linear_infinite]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            
            {/* Calendar Icon */}
            <div className="absolute -right-6 top-[calc(50%-24px)] w-12 h-12 bg-white rounded-2xl shadow-xl border border-[#18160E]/10 flex items-center justify-center text-[#E51E25] animate-[reverse-orbit_20s_linear_infinite]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>

            {/* Check Icon */}
            <div className="absolute -top-6 left-[calc(50%-24px)] w-12 h-12 bg-white rounded-2xl shadow-xl border border-[#18160E]/10 flex items-center justify-center text-[#E51E25] animate-[reverse-orbit_20s_linear_infinite]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>

          </div>
        </div>

        {/* Center Glowing CTA */}
        <a
          href={COMPANY.waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex flex-col items-center justify-center w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full bg-white text-[#18160E] hover:scale-110 transition-transform duration-500 shadow-[0_20px_60px_-15px_rgba(229,30,37,0.3)] group overflow-hidden border-4 border-white"
        >
          <div className="absolute inset-0 bg-[#E51E25] translate-y-[110%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          <span className="font-heading text-lg md:text-xl relative z-10 mb-1 group-hover:text-white transition-colors duration-300">Book a</span>
          <span className="font-heading text-lg md:text-xl relative z-10 text-[#E51E25] group-hover:text-[#FFD100] transition-colors duration-300">Demo</span>
        </a>

      </div>

    </section>
  );
}