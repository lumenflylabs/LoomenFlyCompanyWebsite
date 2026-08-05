import Link from "next/link";
import { COMPANY, FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white overflow-hidden relative border-t border-white/10">
      

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        
        {/* Editorial 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-24">
          
          {/* Column 1: Company & Legal Entity */}
          <div className="md:col-span-12 lg:col-span-6 lg:pr-12">
            <h3 className="font-heading text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">
              {COMPANY.legalName}
            </h3>
            <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-[500px]">
              {FOOTER.description}
            </p>
            
            <div className="flex flex-col gap-3 font-sans text-sm text-white/40 leading-relaxed max-w-[460px]">
              <p>
                <strong className="text-white/70 font-medium">Registered Address:</strong><br />
                {COMPANY.address}
              </p>
              <div className="flex flex-col gap-1 pt-2 border-t border-white/10 text-white/60">
                <p>
                  <strong className="text-white/70">Email:</strong>{" "}
                  <a href={`mailto:${COMPANY.adminEmail}`} className="text-white/80 hover:text-white underline">
                    {COMPANY.adminEmail}
                  </a>
                </p>
                <p>
                  <strong className="text-white/70">Phone:</strong>{" "}
                  <a href={`tel:${COMPANY.phone}`} className="text-white/80 hover:text-white">
                    {COMPANY.phone}
                  </a>{" "}
                  <span className="text-white/40">/</span>{" "}
                  <a href={`tel:${COMPANY.altPhone}`} className="text-white/80 hover:text-white">
                    {COMPANY.altPhone}
                  </a>
                </p>
                <p className="text-xs text-white/30 pt-1 font-mono">
                  LLPIN: {COMPANY.llpin} &bull; MSME Udyam: {COMPANY.udyam}
                </p>
              </div>

              {/* Social Media Channels */}
              <div className="pt-4 flex items-center gap-3">
                <span className="text-xs font-sans uppercase tracking-widest text-white/40 font-bold mr-1">Social:</span>
                <a
                  href={COMPANY.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#E1306C] hover:bg-[#E1306C]/10 text-white/70 hover:text-[#E1306C] flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={COMPANY.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Company & Legal */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="font-sans font-bold text-xs text-white/30 uppercase tracking-[0.2em] mb-6">
              Company & Legal
            </h4>
            <ul className="flex flex-col gap-4 font-sans text-base text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/data-deletion" className="hover:text-white transition-colors duration-200">
                  Data Deletion Instructions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform Features */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="font-sans font-bold text-xs text-white/30 uppercase tracking-[0.2em] mb-6">
              FlowDesk Platform
            </h4>
            <ul className="flex flex-col gap-4 font-sans text-base text-white/70">
              <li>
                <Link href="/#why" className="hover:text-white transition-colors duration-200">
                  Interactive Booking Flow
                </Link>
              </li>
              <li>
                <Link href="/#addons" className="hover:text-white transition-colors duration-200">
                  No-Show Protector
                </Link>
              </li>
              <li>
                <Link href="/#addons" className="hover:text-white transition-colors duration-200">
                  Catalog CMS & Staff Routing
                </Link>
              </li>
              <li>
                <Link href="/#addons" className="hover:text-white transition-colors duration-200">
                  Google Calendar 2-Way Sync
                </Link>
              </li>
              <li className="pt-2">
                <a 
                  href={COMPANY.waLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-[#FFD100] hover:underline font-medium"
                >
                  Book Live Demo &rarr;
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Mandatory Meta Independence Disclaimer */}
        <div className="py-8 border-t border-white/10 text-center">
          <p className="font-sans text-xs text-white/30 max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> {COMPANY.legalName} is an independent software development entity registered in Kerala, India. FlowDesk integrates with the WhatsApp Business Platform via official Meta Cloud APIs. We are not directly endorsed by, affiliated with, or sponsored by WhatsApp Inc. or Meta Platforms, Inc.
          </p>
        </div>

        {/* Bottom Clean Copyright Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-xs text-white/40">
          <p>
            &copy; {COMPANY.year} {COMPANY.legalName}. All rights reserved. &bull; LLPIN: {COMPANY.llpin}
          </p>
          <div className="flex flex-wrap items-center gap-6">
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