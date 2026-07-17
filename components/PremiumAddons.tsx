import { PREMIUM_ADDONS } from "@/lib/constants";

export default function PremiumAddons() {
  return (
    <section className="bg-white text-[#18160E] py-[clamp(80px,10vw,160px)] px-[clamp(24px,5%,120px)] border-t border-[#18160E]/5">
      <div className="max-w-[1200px] mx-auto text-center mb-20">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#18160E]/5 mb-6">
          <span className="font-sans font-bold text-[13px] text-[#18160E]/60 uppercase tracking-widest">
            {PREMIUM_ADDONS.eyebrow}
          </span>
        </div>
        <h2 className="font-heading text-[clamp(36px,5vw,60px)] leading-[1.1] mb-6 max-w-[800px] mx-auto">
          {PREMIUM_ADDONS.headline}
        </h2>
        <p className="font-sans font-medium text-[clamp(16px,2vw,20px)] text-[#18160E]/60 max-w-[600px] mx-auto leading-relaxed">
          {PREMIUM_ADDONS.subtitle}
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {PREMIUM_ADDONS.addons.map((addon, i) => (
          <div key={i} className="bg-[#F6F5ED] p-8 lg:p-10 rounded-[32px] border border-[#18160E]/5 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-xl text-[#E51E25]">
                {addon.icon}
              </div>
              <span className="font-sans text-[12px] font-bold tracking-widest uppercase text-[#18160E]/50">
                {addon.tagline}
              </span>
            </div>
            <h3 className="font-heading text-[24px] text-[#18160E] mb-4">
              {addon.title}
            </h3>
            <p className="font-sans text-[15px] text-[#18160E]/60 leading-relaxed">
              {addon.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}