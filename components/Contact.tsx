import { CONTACT, COMPANY } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F6F5ED] text-[#000000] py-32 md:py-48 overflow-hidden">
      
      {/* Normalized Centered CTA */}
      <div className="max-w-[900px] mx-auto px-[clamp(24px,5%,80px)] text-center mb-24 md:mb-32">
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

      {/* Elegant Constrained List with Magnetic Glide */}
      <div className="max-w-[1000px] mx-auto px-[clamp(24px,5%,80px)]">
        
        <div className="border-t border-[#000000]/10">
          {CONTACT.methods.map((method, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <a 
                href={method.href} 
                className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-[#000000]/10 hover:bg-white transition-colors duration-500 w-full relative overflow-hidden px-4 md:px-8"
              >
                
                {/* Left Side: The Magnetic Glide */}
                <div className="flex items-center gap-6 mb-4 md:mb-0 relative z-10">
                  
                  {/* The Hidden Hexagon Arrow that glides in */}
                  <div 
                    className="absolute left-0 w-8 h-8 bg-[#E51E25] flex items-center justify-center text-white opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>

                  {/* The Name & Role (Slides right on hover) */}
                  <div className="flex flex-col transform group-hover:translate-x-12 transition-transform duration-500">
                    <span className="font-sans font-bold text-[10px] text-[#000000]/40 uppercase tracking-[0.2em] mb-1">
                      {method.label.split(' — ')[0]}
                    </span>
                    <span className="font-heading text-2xl md:text-3xl text-[#000000] group-hover:text-[#E51E25] transition-colors duration-500">
                      {method.label.split(' — ')[1] || method.label}
                    </span>
                  </div>
                </div>
                
                {/* Right Side: The Email */}
                <span className="font-sans text-lg md:text-xl text-[#000000]/50 group-hover:text-[#000000] transition-colors duration-500 relative z-10 group-hover:-translate-x-2">
                  {method.value}
                </span>

              </a>
            </ScrollReveal>
          ))}
          
          {/* Direct WhatsApp Row */}
          <ScrollReveal delay={0.4}>
            <a 
              href={COMPANY.waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-[#000000]/10 hover:bg-white transition-colors duration-500 w-full relative overflow-hidden px-4 md:px-8"
            >
              
              {/* Left Side: The Magnetic Glide */}
              <div className="flex items-center gap-6 mb-4 md:mb-0 relative z-10">
                
                {/* The Hidden Hexagon Arrow that glides in */}
                <div 
                  className="absolute left-0 w-8 h-8 bg-[#25D366] flex items-center justify-center text-white opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>

                {/* The Name & Role */}
                <div className="flex flex-col transform group-hover:translate-x-12 transition-transform duration-500">
                  <span className="font-sans font-bold text-[10px] text-[#000000]/40 uppercase tracking-[0.2em] mb-1">
                    Direct Message
                  </span>
                  <span className="font-heading text-2xl md:text-3xl text-[#000000] group-hover:text-[#25D366] transition-colors duration-500">
                    WhatsApp Support
                  </span>
                </div>
              </div>
              
              {/* Right Side: The Number */}
              <span className="font-sans text-lg md:text-xl text-[#000000]/50 group-hover:text-[#000000] transition-colors duration-500 relative z-10 group-hover:-translate-x-2">
                {COMPANY.waNumber}
              </span>

            </a>
          </ScrollReveal>

        </div>
      </div>

    </section>
  );
}