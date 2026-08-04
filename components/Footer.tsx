import Link from "next/link";
import { COMPANY, FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white overflow-hidden relative border-t border-white/10">
      
      {/* Colossal Brand Banner */}
      <div className="w-full overflow-hidden border-b border-white/10 select-none flex items-center justify-center py-12 md:py-20">
        <span className="font-heading text-[clamp(36px,10vw,120px)] font-bold tracking-wider text-white/[0.06] uppercase text-center px-4">
          LOOMENFLY LABS
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Entity Info & Physical Address */}
          <div className="md:col-span-12 lg:col-span-6">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              {COMPANY.legalName}
            </h3>
            <p className="font-sans text-base text-white/60 leading-relaxed max-w-[480px] mb-6">
              {FOOTER.description}
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-[500px]">
              <h4 className="font-mono text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">
                Registered Office & Legal Entity
              </h4>
              <p className="font-sans text-sm text-white/70 leading-relaxed mb-4">
                <strong>{COMPANY.legalName}</strong><br />
                {COMPANY.address}
              </p>
              <div className="font-sans text-xs text-white/60 flex flex-col gap-1.5 pt-3 border-t border-white/10">
                <p><strong>Corporate Email:</strong> <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#FFD100] hover:underline">{COMPANY.adminEmail}</a></p>
                <p><strong>Official Phone:</strong> <a href={`tel:${COMPANY.phone}`} className="text-white/80 hover:underline">{COMPANY.phone}</a></p>
                <p className="text-white/50 pt-1 font-mono">
                  LLPIN: <span className="text-white/80">{COMPANY.llpin}</span> &bull; MSME Udyam: <span className="text-white/80">{COMPANY.udyam}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Legal & Compliance Links */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="font-sans font-bold text-xs text-[#FFD100] uppercase tracking-[0.2em] mb-6">
              Legal & Compliance
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link href="/privacy-policy" className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/data-deletion" className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200">
                  User Data Deletion
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200">
                  About the Company
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform Features */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="font-sans font-bold text-xs text-white/40 uppercase tracking-[0.2em] mb-6">
              FlowDesk Platform
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link href="/#why" className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200">
                  Interactive Booking Flow
                </Link>
              </li>
              <li>
                <Link href="/#addons" className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200">
                  No-Show Protector
                </Link>
              </li>
              <li>
                <Link href="/#addons" className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200">
                  Catalog CMS & Services
                </Link>
              </li>
              <li>
                <Link href="/#addons" className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200">
                  Google Calendar 2-Way Sync
                </Link>
              </li>
              <li>
                <a href={COMPANY.waLink} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-[#FFD100] hover:underline flex items-center gap-1.5 font-medium">
                  Book Live WhatsApp Demo &rarr;
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Mandatory Meta Independence Disclaimer */}
        <div className="py-6 border-t border-white/10 text-center">
          <p className="font-sans text-xs text-white/40 max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> {COMPANY.legalName} is an independent software development LLP registered in Kerala, India. FlowDesk integrates with the WhatsApp Business Platform via official Meta Cloud APIs. We are not affiliated with, sponsored by, or endorsed by WhatsApp Inc. or Meta Platforms, Inc.
          </p>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-white/50">
          <p>
            &copy; {COMPANY.year} {COMPANY.legalName}. All rights reserved. | LLPIN: {COMPANY.llpin}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <span>&bull;</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
            <span>&bull;</span>
            <Link href="/data-deletion" className="hover:text-white transition-colors">Data Deletion</Link>
            <span>&bull;</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}