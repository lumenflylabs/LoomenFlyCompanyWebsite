import { CONTACT } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F6F5ED] text-[#18160E] py-[clamp(100px,15vw,200px)] px-[clamp(24px,5%,120px)] border-t border-[#18160E]/10">
      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row gap-24">
        
        <div className="xl:w-1/3">
          <span className="inline-block text-sm font-sans font-medium text-[#E51E25] mb-8 tracking-widest uppercase">
            {CONTACT.eyebrow}
          </span>
          <h2 className="font-heading font-normal text-[clamp(40px,5vw,80px)] leading-[1] tracking-tight mb-8">
            {CONTACT.headline}
          </h2>
          <p className="font-sans font-normal text-[clamp(18px,2vw,22px)] text-[#18160E]/60 leading-relaxed max-w-[400px]">
            {CONTACT.subtitle}
          </p>
        </div>

        <div className="xl:w-2/3 flex flex-col gap-0 border-t border-[#18160E]/10">
          {CONTACT.methods.map((method, i) => (
            <a key={i} href={method.href} className="flex flex-col py-16 border-b border-[#18160E]/10 group transition-colors -mx-8 px-8 hover:bg-[#18160E]/[0.02]">
              <span className="font-sans text-[13px] font-bold tracking-widest uppercase text-[#18160E]/40 mb-6 group-hover:text-[#E51E25] transition-colors">
                {method.label}
              </span>
              <span className="font-heading text-[clamp(32px,4vw,60px)] text-[#18160E] leading-none group-hover:text-[#E51E25] transition-colors break-all">
                {method.value}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}