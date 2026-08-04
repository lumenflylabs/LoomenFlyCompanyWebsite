import React from "react";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";

export const metadata = {
  title: `Contact Us | ${COMPANY.name}`,
  description: `Contact ${COMPANY.name} (${COMPANY.legalName}) for sales, support, partnership inquiries, and verification support.`,
};

export default function ContactPage() {
  return (
    <div className="bg-[#F6F5ED] min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-[900px] mx-auto">
        <span className="font-mono text-xs tracking-[0.3em] text-[#E51E25] uppercase mb-6 font-bold block">
          Get in Touch
        </span>
        <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-medium leading-[1.05] tracking-tight text-[#111111] mb-6">
          Contact {COMPANY.name}
        </h1>
        <p className="font-sans text-xl md:text-2xl text-[#111111]/70 leading-relaxed mb-12">
          Have questions about FlowDesk, need a custom software demonstration, or require official verification assistance? Reach out to our dedicated team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* General & Verification Contact */}
          <div className="p-8 bg-white rounded-3xl border border-[#111111]/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#E51E25] uppercase tracking-wider block mb-2 font-bold">General & Legal</span>
              <h2 className="font-heading text-2xl text-[#111111] mb-2">Corporate Office</h2>
              <p className="font-sans text-sm text-[#111111]/70 mb-6 leading-relaxed">
                For administrative, partnership, and legal verification inquiries:
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-4 border-t border-[#111111]/10 text-sm">
              <p><strong>Entity:</strong> {COMPANY.legalName}</p>
              <p><strong>Email:</strong> <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] hover:underline font-mono">{COMPANY.adminEmail}</a></p>
              <p><strong>Phone:</strong> {COMPANY.phone}</p>
              <p><strong>LLPIN:</strong> {COMPANY.llpin}</p>
              <p><strong>MSME:</strong> {COMPANY.udyam}</p>
            </div>
          </div>

          {/* Physical Location */}
          <div className="p-8 bg-white rounded-3xl border border-[#111111]/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#E51E25] uppercase tracking-wider block mb-2 font-bold">Physical Address</span>
              <h2 className="font-heading text-2xl text-[#111111] mb-2">Registered Location</h2>
              <p className="font-sans text-sm text-[#111111]/70 mb-6 leading-relaxed">
                {COMPANY.address}
              </p>
            </div>
            <div className="pt-4 border-t border-[#111111]/10 text-sm text-[#111111]/70">
              <p><strong>Working Hours:</strong> Mon - Fri: 9:00 AM – 6:00 PM IST</p>
              <p><strong>Jurisdiction:</strong> Alappuzha, Kerala, India</p>
            </div>
          </div>

        </div>

        {/* Department Direct Contacts */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#111111]/10 shadow-sm mb-12">
          <h2 className="font-heading text-2xl text-[#111111] mb-6">Direct Department Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-[#F6F5ED] border border-[#111111]/5">
              <p className="font-bold text-sm text-[#111111] mb-1">Sales & Onboarding</p>
              <p className="text-xs text-[#111111]/60 mb-3">Gokul (CEO)</p>
              <a href={`mailto:${COMPANY.salesEmail}`} className="text-xs text-[#E51E25] font-mono hover:underline">{COMPANY.salesEmail}</a>
            </div>

            <div className="p-4 rounded-xl bg-[#F6F5ED] border border-[#111111]/5">
              <p className="font-bold text-sm text-[#111111] mb-1">Technical Architecture</p>
              <p className="text-xs text-[#111111]/60 mb-3">Hashiq (CTO)</p>
              <a href={`mailto:${COMPANY.techEmail}`} className="text-xs text-[#E51E25] font-mono hover:underline">{COMPANY.techEmail}</a>
            </div>

            <div className="p-4 rounded-xl bg-[#F6F5ED] border border-[#111111]/5">
              <p className="font-bold text-sm text-[#111111] mb-1">Operations & Support</p>
              <p className="text-xs text-[#111111]/60 mb-3">Saheeda (COO)</p>
              <a href={`mailto:${COMPANY.successEmail}`} className="text-xs text-[#E51E25] font-mono hover:underline">{COMPANY.successEmail}</a>
            </div>
          </div>
        </div>

        {/* WhatsApp Direct CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-[#111111] text-white rounded-3xl gap-6">
          <div>
            <h3 className="font-heading text-2xl mb-1">Chat Directly on WhatsApp</h3>
            <p className="font-sans text-sm text-white/70">Connect with our team instantly for product demos and questions.</p>
          </div>
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#E51E25] hover:bg-[#c9181e] text-white font-medium rounded-full transition-all whitespace-nowrap"
          >
            Start WhatsApp Chat
          </a>
        </div>

      </div>
    </div>
  );
}
