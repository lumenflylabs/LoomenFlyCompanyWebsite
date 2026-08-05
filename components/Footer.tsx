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