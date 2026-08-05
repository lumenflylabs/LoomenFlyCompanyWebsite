import React from "react";
import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: `Contact Us | ${COMPANY.legalName}`,
  },
  description: `Contact ${COMPANY.name} (${COMPANY.legalName}) for sales, technical support, enterprise WhatsApp integrations, and official verification inquiries.`,
  alternates: {
    canonical: "https://www.loomenflylabs.com/contact",
  },
  openGraph: {
    title: `Contact Us | ${COMPANY.legalName}`,
    description: `Official Contact Channels for ${COMPANY.legalName} (${COMPANY.name}) and FlowDesk WhatsApp booking platform.`,
    url: "https://www.loomenflylabs.com/contact",
    siteName: COMPANY.legalName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.loomenflylabs.com/images/og-human.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `Contact Us | ${COMPANY.legalName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${COMPANY.legalName}`,
    description: `Official Contact Channels for ${COMPANY.legalName} (${COMPANY.name}) and FlowDesk WhatsApp booking platform.`,
    images: ["https://www.loomenflylabs.com/images/og-human.png"],
  },
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
              <span className="font-mono text-xs text-[#E51E25] uppercase tracking-wider block mb-2 font-bold">General &amp; Legal</span>
              <h2 className="font-heading text-2xl text-[#111111] mb-2">Corporate Office</h2>
              <p className="font-sans text-sm text-[#111111]/70 mb-6 leading-relaxed">
                For administrative, partnership, and legal verification inquiries:
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-4 border-t border-[#111111]/10 text-sm">
              <p><strong>Entity:</strong> {COMPANY.legalName}</p>
              <p><strong>Email:</strong> <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] hover:underline font-mono">{COMPANY.adminEmail}</a></p>
              <p><strong>Phone:</strong> {COMPANY.phone} / {COMPANY.altPhone}</p>
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
              <p className="font-bold text-sm text-[#111111] mb-1">Sales &amp; Onboarding</p>
              <p className="text-xs text-[#111111]/60 mb-3">Gokul (CEO)</p>
              <a href={`mailto:${COMPANY.salesEmail}`} className="text-xs text-[#E51E25] font-mono hover:underline">{COMPANY.salesEmail}</a>
            </div>

            <div className="p-4 rounded-xl bg-[#F6F5ED] border border-[#111111]/5">
              <p className="font-bold text-sm text-[#111111] mb-1">Technical Architecture</p>
              <p className="text-xs text-[#111111]/60 mb-3">Hashiq (CTO)</p>
              <a href={`mailto:${COMPANY.techEmail}`} className="text-xs text-[#E51E25] font-mono hover:underline">{COMPANY.techEmail}</a>
            </div>

            <div className="p-4 rounded-xl bg-[#F6F5ED] border border-[#111111]/5">
              <p className="font-bold text-sm text-[#111111] mb-1">Operations &amp; Support</p>
              <p className="text-xs text-[#111111]/60 mb-3">Saheeda (COO)</p>
              <a href={`mailto:${COMPANY.successEmail}`} className="text-xs text-[#E51E25] font-mono hover:underline">{COMPANY.successEmail}</a>
            </div>
          </div>
        </div>

        {/* Official Social & Developer Channels */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#111111]/10 shadow-sm mb-12">
          <span className="font-mono text-xs text-[#E51E25] uppercase tracking-wider block mb-2 font-bold">Connect Online</span>
          <h2 className="font-heading text-2xl text-[#111111] mb-4">Official Social &amp; Community Channels</h2>
          <p className="font-sans text-sm text-[#111111]/70 mb-6 leading-relaxed">
            Follow our verified company profiles for software release updates, engineering blogs, and business announcements:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <a
              href={COMPANY.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#F6F5ED] border border-[#111111]/5 hover:border-[#E1306C] hover:bg-white transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="text-left">
                <span className="font-medium text-base text-[#111111] block">Instagram</span>
                <span className="text-xs text-[#111111]/50 font-mono">@loomenflylabs</span>
              </div>
            </a>

            <a
              href={COMPANY.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#F6F5ED] border border-[#111111]/5 hover:border-black hover:bg-white transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-black/10 text-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div className="text-left">
                <span className="font-medium text-base text-[#111111] block">X (Twitter)</span>
                <span className="text-xs text-[#111111]/50 font-mono">@loomenflylabs</span>
              </div>
            </a>
          </div>
        </div>

        {/* Cross-Navigation Footer */}
        <div className="p-6 bg-white rounded-2xl border border-[#111111]/10 mb-12 flex flex-wrap gap-4 text-sm">
          <Link href="/privacy-policy" className="text-[#E51E25] hover:underline font-medium">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms-of-service" className="text-[#E51E25] hover:underline font-medium">
            Terms of Service
          </Link>
          <span>•</span>
          <Link href="/data-deletion" className="text-[#E51E25] hover:underline font-medium">
            Data Deletion Instructions
          </Link>
          <span>•</span>
          <Link href="/about" className="text-[#E51E25] hover:underline font-medium">
            About Us
          </Link>
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
