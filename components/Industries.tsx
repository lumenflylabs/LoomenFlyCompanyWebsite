import { INDUSTRIES } from "@/lib/constants";

export default function Industries() {
  return (
    <section id="industries" className="bg-[#F6F5ED] text-[#18160E] py-[clamp(80px,10vw,160px)] px-[clamp(24px,5%,120px)] border-t border-[#18160E]/5">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-20 text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white shadow-sm border border-[#18160E]/5 mb-6">
            <span className="font-sans font-bold text-[13px] text-[#E51E25] uppercase tracking-widest">
              {INDUSTRIES.eyebrow}
            </span>
          </div>
          <h2 className="font-heading text-[clamp(36px,5vw,60px)] leading-[1.1] mb-6 max-w-[800px] mx-auto">
            {INDUSTRIES.headline}
          </h2>
          <p className="font-sans font-medium text-[clamp(16px,2vw,20px)] text-[#18160E]/60 max-w-[600px] mx-auto leading-relaxed">
            {INDUSTRIES.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.items.map((item, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-[24px] border border-[#18160E]/5 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1 ${
                item.highlighted 
                  ? 'bg-[#18160E] text-white shadow-lg' 
                  : 'bg-white soft-shadow'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 font-heading text-xl ${
                item.highlighted ? 'bg-white text-[#18160E]' : 'bg-[#F6F5ED] text-[#E51E25]'
              }`}>
                {item.icon}
              </div>
              <h3 className="font-heading text-[20px] mb-2">{item.name}</h3>
              <p className={`font-sans text-[14px] ${item.highlighted ? 'text-white/60' : 'text-[#18160E]/50'}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}