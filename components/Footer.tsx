import { COMPANY, FOOTER } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white overflow-hidden relative">
      
      {/* Colossal Marquee */}
      <div className="w-full overflow-hidden border-t border-white/10 select-none flex items-center justify-center py-12 md:py-24">
        <h2 className="font-heading text-[16vw] leading-none text-white/[0.03] whitespace-nowrap px-8">
          LOOMENFLY LABS
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-[clamp(24px,5%,120px)] pb-12">
        
        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8 mb-24 md:mb-40 pt-16 border-t border-white/10">
          
          <div className="md:col-span-12 lg:col-span-6 lg:pr-24">
            <ScrollReveal>
              <span className="font-heading text-3xl md:text-4xl mb-8 block text-white/90">
                The New Standard.
              </span>
              <p className="font-sans text-xl md:text-2xl text-white/50 leading-relaxed mb-12">
                {FOOTER.description}
              </p>
              <p className="font-sans text-sm text-white/30 leading-relaxed max-w-[300px]">
                {COMPANY.address}
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <ScrollReveal delay={0.1}>
              <h4 className="font-sans font-bold text-[11px] text-white/30 uppercase tracking-[0.2em] mb-8">
                {FOOTER.navColumns[0].title}
              </h4>
              <ul className="flex flex-col gap-5">
                {FOOTER.navColumns[0].links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="font-sans text-lg text-white/70 hover:text-white transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <ScrollReveal delay={0.2}>
              <h4 className="font-sans font-bold text-[11px] text-white/30 uppercase tracking-[0.2em] mb-8">
                {FOOTER.navColumns[1].title}
              </h4>
              <ul className="flex flex-col gap-5">
                {FOOTER.navColumns[1].links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="font-sans text-lg text-white/70 hover:text-white transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
          
        </div>

        {/* The Pill Anchor */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 rounded-full border border-white/10 gap-8 bg-white/5">
            <p className="font-sans text-sm text-white/40">
              © {COMPANY.year} {COMPANY.legalName}. All rights reserved.
            </p>
            <div className="flex gap-6 md:gap-8">
              {FOOTER.socials.map((social, i) => (
                <a key={i} href={social.href} className="font-sans text-sm font-semibold uppercase tracking-wider text-white/40 hover:text-white transition-colors duration-300">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  );
}