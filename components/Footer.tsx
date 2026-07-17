import { COMPANY, FOOTER } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#18160E] text-[#F6F5ED] pt-[100px] pb-8 px-[clamp(24px,5%,120px)] mt-20 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E51E25]/10 rounded-full blur-[100px]" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Massive Sign-off */}
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="font-heading text-[clamp(40px,7vw,80px)] leading-[1.1] text-[#F6F5ED] max-w-[800px] mb-10">
            Let's build something <span className="text-[#FFD100]">beautiful</span> together.
          </h2>
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-[#E51E25] text-white font-sans font-bold text-[16px] rounded-full hover:bg-[#FFD100] hover:text-[#18160E] transition-colors shadow-lg"
          >
            Start a Project
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-[#F6F5ED]/10 pt-16 pb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8 text-[#FFD100]" />
              <span className="font-heading text-2xl text-[#F6F5ED] mt-1">
                Loomenfly
              </span>
            </div>
            <p className="text-[15px] font-sans text-[#F6F5ED]/60 leading-relaxed max-w-[280px]">
              {FOOTER.description}
            </p>
            <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#FFD100] text-[15px] font-medium hover:text-[#F6F5ED] transition-colors">
              {COMPANY.adminEmail}
            </a>
          </div>

          {FOOTER.navColumns.map((col) => (
            <div key={col.title}>
              <h5 className="font-sans font-bold text-[14px] text-[#F6F5ED] mb-6 uppercase tracking-wider">{col.title}</h5>
              <ul className="flex flex-col gap-4 list-none">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[#F6F5ED]/70 text-[15px] font-medium hover:text-[#E51E25] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h5 className="font-sans font-bold text-[14px] text-[#F6F5ED] mb-6 uppercase tracking-wider">Follow Us</h5>
            <div className="flex flex-col gap-4">
              {FOOTER.socials.map((s) => (
                <a key={s.label} href={s.href} className="text-[#F6F5ED]/70 text-[15px] font-medium hover:text-[#FFD100] transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] font-sans font-medium text-[#F6F5ED]/40 pt-8 border-t border-[#F6F5ED]/10">
          <span>© {COMPANY.year} {COMPANY.legalName}. All Rights Reserved.</span>
          <div className="flex gap-6 flex-wrap justify-center">
            <a href="/privacy" className="hover:text-[#F6F5ED] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#F6F5ED] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}