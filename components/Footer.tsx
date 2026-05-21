import { COMPANY, FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-[60px] pb-[30px] px-[clamp(16px,6%,80px)] border-t border-[#2A2A2A]/50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5 mb-7">
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="relative w-9 h-9 rounded-[10px] bg-[#0A0A0A] flex items-center justify-center overflow-hidden border border-[#2A2A2A]">
              <span className="absolute top-[7px] left-1/2 -translate-x-1/2 font-heading font-extrabold text-[11px] text-white whitespace-nowrap tracking-tight">
                L<span className="text-[#F5C518]">F</span>
              </span>
              <span className="absolute bottom-[5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-[#F5C518] animate-firefly" />
            </div>
            <span className="font-heading font-bold text-[15px] text-white">
              Lumenfly <b className="text-[#F5C518]">Labs</b>
            </span>
          </div>
          <p className="text-[13px] text-white/40 leading-relaxed mt-3 mb-4">
            {FOOTER.description}
          </p>
          <div className="flex flex-col gap-1">
            <a
              href={`mailto:${COMPANY.adminEmail}`}
              className="text-[#FFE57A] text-[12.5px] hover:text-[#F5C518] transition-colors duration-200"
            >
              {COMPANY.adminEmail}
            </a>
          </div>
        </div>

        {/* Nav Columns */}
        {FOOTER.navColumns.map((col) => (
          <div key={col.title}>
            <h5 className="text-white text-[12px] font-bold tracking-wide uppercase mb-4">
              {col.title}
            </h5>
            <ul className="flex flex-col gap-2.5 list-none">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/45 text-[13px] hover:text-white/85 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social */}
        <div>
          <h5 className="text-white text-[12px] font-bold tracking-wide uppercase mb-4">
            Follow Us
          </h5>
          <div className="flex gap-2 flex-wrap">
            {FOOTER.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="px-3 py-[7px] rounded-lg text-[12px] text-white/45 border border-white/10 bg-white/5 hover:bg-[#C49400]/10 hover:border-[#C49400]/25 hover:text-[#FFE57A] transition-all duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-white/30">
        <span>
          © {COMPANY.year} {COMPANY.legalName}. All rights reserved.
        </span>
        <span className="text-white/20 text-center sm:text-left">
          {COMPANY.legalName} · {COMPANY.address}
        </span>
        <span>
          <a
            href="/privacy"
            className="text-[#FFE57A] hover:text-[#F5C518] transition-colors duration-200"
          >
            Privacy
          </a>
          <span className="mx-1.5">·</span>
          <a
            href="/terms"
            className="text-[#FFE57A] hover:text-[#F5C518] transition-colors duration-200"
          >
            Terms
          </a>
          <span className="mx-1.5">·</span>
          <a
            href="/refund"
            className="text-[#FFE57A] hover:text-[#F5C518] transition-colors duration-200"
          >
            Refund
          </a>
          <span className="mx-1.5">·</span>
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFE57A] hover:text-[#F5C518] transition-colors duration-200"
          >
            Contact
          </a>
        </span>
      </div>
      {/* Udyam Registration */}
      <div className="mt-4 text-center text-[11px] text-white/20">
        Udyam Registration No: UDYAM-KL-01-0066699
      </div>
    </footer>
  );
}
