import { CONTACT, COMPANY } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F6F5ED] text-[#000000] py-32 md:py-48 overflow-hidden">
      
      {/* Normalized Centered CTA */}
      <div className="max-w-[900px] mx-auto px-[clamp(24px,5%,80px)] text-center mb-10 md:mb-12">
        <ScrollReveal>
          <span className="font-sans font-bold text-[12px] text-[#E51E25] uppercase tracking-[0.2em] block mb-6">
            {CONTACT.eyebrow}
          </span>
          <h2 className="font-heading text-[clamp(44px,6vw,72px)] leading-[1.05] tracking-tight mb-8 text-balance">
            {CONTACT.headline.replace('\n', ' ')}
          </h2>
          <p className="font-sans text-[clamp(16px,2vw,20px)] text-[#000000]/60 max-w-[600px] mx-auto leading-relaxed">
            {CONTACT.subtitle}
          </p>
        </ScrollReveal>
      </div>

      <div className="text-center px-6">
        <a href={COMPANY.waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] hover:bg-[#E51E25] text-white rounded-full font-sans font-semibold transition-colors">Book a Live Demo <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}