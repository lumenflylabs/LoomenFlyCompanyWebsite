import { TRUST_FLOW } from "@/lib/constants";

export default function TrustFlow() {
  return (
    <section className="bg-[#18160E] text-[#F6F5ED] py-[clamp(80px,10vw,160px)] px-[clamp(24px,5%,120px)] overflow-hidden relative">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#FFD100]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 mb-6">
          <span className="font-sans font-bold text-[13px] text-[#FFD100] uppercase tracking-widest">
            {TRUST_FLOW.eyebrow}
          </span>
        </div>
        <h2 className="font-heading text-[clamp(36px,5vw,60px)] leading-[1.1] mb-6">
          {TRUST_FLOW.headline}
        </h2>
        <p className="font-sans font-medium text-[clamp(16px,2vw,20px)] text-[#F6F5ED]/60 max-w-[600px] mx-auto leading-relaxed mb-20">
          {TRUST_FLOW.subtitle}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 relative">
          
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#F6F5ED]/20 to-transparent -z-10" />

          {TRUST_FLOW.nodes.map((node, i) => (
            <div key={i} className="flex flex-col items-center gap-6 w-full md:w-1/3">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#18160E] border-4 border-[#F6F5ED]/10 text-2xl font-heading text-white shadow-xl">
                {node.icon}
              </div>
              <p className="font-sans font-medium text-[16px] text-[#F6F5ED]/80 text-center whitespace-pre-line">
                {node.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}