import { PROBLEM_SOLUTION } from "@/lib/constants";

export default function ProblemSolution() {
  return (
    <section id="problem" className="relative bg-white text-[#18160E] py-[clamp(80px,10vw,160px)] px-[clamp(24px,5%,120px)] border-t border-[#18160E]/5 overflow-hidden">
      
      <div className="max-w-[1200px] mx-auto text-center mb-20">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#18160E]/5 mb-6">
          <span className="font-sans font-bold text-[13px] text-[#E51E25] uppercase tracking-widest">
            {PROBLEM_SOLUTION.eyebrow}
          </span>
        </div>
        <h2 className="font-heading text-[clamp(36px,5vw,60px)] leading-[1.1] mb-6 max-w-[800px] mx-auto">
          {PROBLEM_SOLUTION.headline}
        </h2>
        <p className="font-sans font-medium text-[clamp(16px,2vw,20px)] text-[#18160E]/60 max-w-[600px] mx-auto leading-relaxed">
          {PROBLEM_SOLUTION.subtitle}
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Without Column */}
        <div className="bg-[#F6F5ED] p-8 lg:p-12 rounded-[40px] border border-[#18160E]/5">
          <h3 className="font-heading text-[28px] text-[#E51E25] mb-8 pb-4 border-b border-[#18160E]/10">
            {PROBLEM_SOLUTION.without.label}
          </h3>
          <ul className="flex flex-col gap-8">
            {PROBLEM_SOLUTION.without.items.map((item, i) => (
              <li key={i} className="flex flex-col gap-2">
                <h4 className="font-heading text-[20px] text-[#18160E]">{item.title}</h4>
                <p className="font-sans text-[15px] text-[#18160E]/60 leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* With Column */}
        <div className="bg-[#18160E] text-[#F6F5ED] p-8 lg:p-12 rounded-[40px] shadow-2xl shadow-[#18160E]/10">
          <h3 className="font-heading text-[28px] text-[#FFD100] mb-8 pb-4 border-b border-[#F6F5ED]/10">
            {PROBLEM_SOLUTION.with.label}
          </h3>
          <ul className="flex flex-col gap-8">
            {PROBLEM_SOLUTION.with.items.map((item, i) => (
              <li key={i} className="flex flex-col gap-2">
                <h4 className="font-heading text-[20px] text-white">{item.title}</h4>
                <p className="font-sans text-[15px] text-[#F6F5ED]/60 leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}