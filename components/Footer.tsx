import Link from "next/link";
import { COMPANY, FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] text-white relative overflow-hidden border-t border-white/[0.08]">
      
      {/* Ambient Top Glow Mesh */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[350px] bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(229,30,37,0.15),transparent_70%)] pointer-events-none -z-0" 
        aria-hidden="true"
      />

      {/* Atmospheric Giant Brand Watermark */}
      <div 
        className="w-full overflow-hidden select-none flex items-center justify-center pt-16 md:pt-24 pb-8 pointer-events-none relative z-0"
        aria-hidden="true"
      >
        <span className="font-heading text-[clamp(44px,11vw,140px)] font-black tracking-tighter text-white/[0.03] uppercase whitespace-nowrap">
          LOOMENFLY LABS
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 pb-16">
        
        {/* Status / Ecosystem Live Badge Ribbon */}
        <div className="mb-14 flex flex-wrap items-center justify-between gap-4 py-4 px-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
            </span>
            <span className="font-mono text-xs text-white/80 font-medium tracking-wide">
              Official WhatsApp Business Platform &bull; Cloud API Architecture
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-white/40">
            <span>AES-256 Encrypted</span>
            <span>&bull;</span>
            <span>GDPR/CCPA Compliant</span>
            <span>&bull;</span>
            <span className="text-[#FFD100]">LLP Verified</span>
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 mb-16">
          
          {/* Column 1: Verified Legal Entity Credentials Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-7 md:p-8 shadow-2xl hover:border-white/20 transition-all duration-500 relative overflow-hidden group">
              
              {/* Subtle Card Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E51E25]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Entity Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-[#FFD100] font-semibold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD100]" />
                  Registered Entity
                </div>
                <span className="text-[11px] font-mono text-white/40">Govt. of India Registered</span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                {COMPANY.legalName}
              </h3>
              
              <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">
                {FOOTER.description}
              </p>

              {/* Registered Physical Address */}
              <div className="pt-5 border-t border-white/[0.08] flex flex-col gap-3.5">
                <div className="flex items-start gap-3 text-xs text-white/70 leading-relaxed">
                  <svg className="w-4 h-4 text-[#E51E25] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    <strong className="text-white font-medium">Registered Office:</strong><br />
                    {COMPANY.address}
                  </span>
                </div>

                {/* Direct Contacts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a 
                    href={`mailto:${COMPANY.adminEmail}`} 
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 text-xs text-white/80 group/contact"
                  >
                    <svg className="w-3.5 h-3.5 text-[#FFD100]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="truncate group-hover/contact:text-white font-mono">{COMPANY.adminEmail}</span>
                  </a>

                  <a 
                    href={`tel:${COMPANY.phone}`} 
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 text-xs text-white/80 group/contact"
                  >
                    <svg className="w-3.5 h-3.5 text-[#25D366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="font-mono group-hover/contact:text-white">{COMPANY.phone}</span>
                  </a>
                </div>

                {/* Legal Identification Badges */}
                <div className="pt-3 border-t border-white/[0.08] flex flex-wrap gap-2 text-[11px] font-mono text-white/50">
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                    LLPIN: <strong className="text-white/80">{COMPANY.llpin}</strong>
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                    MSME: <strong className="text-white/80">{COMPANY.udyam}</strong>
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Column 2: Legal & Trust Center (3 Cols) */}
          <div className="lg:col-span-3">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD100]" />
                  <h4 className="font-sans font-bold text-xs text-[#FFD100] uppercase tracking-[0.2em]">
                    Legal & Compliance
                  </h4>
                </div>

                <ul className="flex flex-col gap-2.5">
                  <li>
                    <Link 
                      href="/privacy-policy" 
                      className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-white/70 hover:text-white transition-all duration-200 text-sm font-sans"
                    >
                      <div className="flex items-center gap-2">
                        <span>Privacy Policy</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-white/50 group-hover:text-white/80">Meta</span>
                      </div>
                      <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">&rarr;</span>
                    </Link>
                  </li>

                  <li>
                    <Link 
                      href="/terms-of-service" 
                      className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-white/70 hover:text-white transition-all duration-200 text-sm font-sans"
                    >
                      <div className="flex items-center gap-2">
                        <span>Terms of Service</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-white/50 group-hover:text-white/80">Legal</span>
                      </div>
                      <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">&rarr;</span>
                    </Link>
                  </li>

                  <li>
                    <Link 
                      href="/data-deletion" 
                      className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-white/70 hover:text-white transition-all duration-200 text-sm font-sans"
                    >
                      <div className="flex items-center gap-2">
                        <span>User Data Deletion</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#E51E25]/20 text-[#E51E25] font-medium">30-Day</span>
                      </div>
                      <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">&rarr;</span>
                    </Link>
                  </li>

                  <li>
                    <Link 
                      href="/about" 
                      className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-white/70 hover:text-white transition-all duration-200 text-sm font-sans"
                    >
                      <span>About Loomenfly Labs</span>
                      <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">&rarr;</span>
                    </Link>
                  </li>

                  <li>
                    <Link 
                      href="/contact" 
                      className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-white/70 hover:text-white transition-all duration-200 text-sm font-sans"
                    >
                      <span>Contact & Support</span>
                      <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">&rarr;</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Security Pill */}
              <div className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E51E25]/10 flex items-center justify-center text-[#E51E25] flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <div className="text-xs">
                  <p className="text-white font-medium">Zero Data Leakage</p>
                  <p className="text-white/40">PostgreSQL Row-Level Security</p>
                </div>
              </div>

            </div>
          </div>

          {/* Column 3: Platform Ecosystem & Live Demo (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E51E25]" />
                  <h4 className="font-sans font-bold text-xs text-white/40 uppercase tracking-[0.2em]">
                    FlowDesk Ecosystem
                  </h4>
                </div>

                <ul className="flex flex-col gap-2.5 mb-8">
                  <li>
                    <Link 
                      href="/#why" 
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-white/70 hover:text-white transition-all duration-200 text-sm font-sans"
                    >
                      <span>Interactive WhatsApp Booking</span>
                      <span className="text-xs text-white/40 font-mono">Flows</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#addons" 
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-white/70 hover:text-white transition-all duration-200 text-sm font-sans"
                    >
                      <span>No-Show Protector & Reminders</span>
                      <span className="text-xs text-white/40 font-mono">Auto</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#addons" 
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-white/70 hover:text-white transition-all duration-200 text-sm font-sans"
                    >
                      <span>Catalog CMS & Staff Routing</span>
                      <span className="text-xs text-white/40 font-mono">Admin</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#addons" 
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-white/70 hover:text-white transition-all duration-200 text-sm font-sans"
                    >
                      <span>Google Calendar 2-Way Sync</span>
                      <span className="text-xs text-white/40 font-mono">Realtime</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Vibe-Coded WhatsApp Demo CTA Box */}
              <a
                href={COMPANY.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-5 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-[#25D366]/30 hover:border-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,0.1)] hover:shadow-[0_10px_40px_rgba(37,211,102,0.25)] transition-all duration-500 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <span className="font-heading font-semibold text-sm text-white">Experience Live Demo</span>
                  </div>
                  <span className="text-[#25D366] text-xs font-mono group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">
                  Send a live message on WhatsApp to test the interactive booking flow instantly on your phone.
                </p>
              </a>

            </div>
          </div>

        </div>

        {/* Mandatory Meta Independence Disclaimer */}
        <div className="py-6 px-6 rounded-2xl bg-white/[0.015] border border-white/[0.05] text-center mb-8">
          <p className="font-sans text-xs text-white/40 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-white/60">Legal Disclaimer:</strong> {COMPANY.legalName} is an independent software development entity registered in Kerala, India. FlowDesk integrates with the WhatsApp Business Platform via official Meta Cloud APIs. We are not directly endorsed by, affiliated with, or sponsored by WhatsApp Inc. or Meta Platforms, Inc.
          </p>
        </div>

        {/* Vibe-Coded Floating Pill / Capsule Bottom Bar */}
        <div className="p-4 md:px-8 md:py-4 rounded-2xl md:rounded-full bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-white/50">
          
          {/* Copyright & LLP info */}
          <div className="flex items-center gap-2">
            <span className="text-white/80 font-medium">&copy; {COMPANY.year} {COMPANY.legalName}</span>
            <span className="text-white/20 hidden sm:inline">&bull;</span>
            <span className="text-white/40 hidden sm:inline">LLPIN: {COMPANY.llpin}</span>
          </div>

          {/* Direct Legal Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs">
            <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-white/20">&bull;</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <span className="text-white/20">&bull;</span>
            <Link href="/data-deletion" className="hover:text-white transition-colors duration-200">
              Data Deletion
            </Link>
            <span className="text-white/20">&bull;</span>
            <Link href="/contact" className="hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}