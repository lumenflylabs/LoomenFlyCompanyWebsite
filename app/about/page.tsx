import React from "react";
import type { Metadata } from "next";
import { COMPANY, DESIGNATED_PARTNERS } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: `About Us | ${COMPANY.legalName}`,
  },
  description: `Learn about ${COMPANY.name} (${COMPANY.legalName}), our mission, MCA Designated Partners, and our flagship product FlowDesk.`,
  alternates: {
    canonical: "https://www.loomenflylabs.com/about",
  },
  openGraph: {
    title: `About Us | ${COMPANY.legalName}`,
    description: `Official Corporate Profile of ${COMPANY.legalName} (${COMPANY.name}), leadership team, and software ecosystem.`,
    url: "https://www.loomenflylabs.com/about",
    siteName: COMPANY.legalName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.loomenflylabs.com/images/og-preview.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `About Us | ${COMPANY.legalName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us | ${COMPANY.legalName}`,
    description: `Official Corporate Profile of ${COMPANY.legalName} (${COMPANY.name}), leadership team, and software ecosystem.`,
    images: ["https://www.loomenflylabs.com/images/og-preview.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#F6F5ED] min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-[900px] mx-auto">
        <span className="font-mono text-xs tracking-[0.3em] text-[#E51E25] uppercase mb-6 font-bold block">
          Company Profile
        </span>
        <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-medium leading-[1.05] tracking-tight text-[#111111] mb-8">
          About {COMPANY.name}
        </h1>
        <p className="font-sans text-xl md:text-2xl text-[#111111]/70 leading-relaxed mb-12">
          We are <strong>{COMPANY.legalName}</strong> (LLPIN: {COMPANY.llpin}), an Indian software and technology firm registered in Kerala, specializing in conversational commerce, automated booking infrastructure, and business management software.
        </p>

        <div className="flex flex-col gap-12 font-sans text-base md:text-lg text-[#111111]/80 leading-relaxed">
          
          {/* Legal Entity Card */}
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#111111]/10 shadow-sm flex flex-col gap-4">
            <span className="font-mono text-xs text-[#E51E25] uppercase tracking-widest font-bold">Official Registration</span>
            <h2 className="font-heading text-2xl md:text-3xl text-[#111111]">{COMPANY.legalName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#111111]/70 pt-2 border-t border-[#111111]/10">
              <p><strong>LLPIN:</strong> {COMPANY.llpin}</p>
              <p><strong>MSME Udyam:</strong> {COMPANY.udyam}</p>
              <p className="md:col-span-2"><strong>Registered Office:</strong> {COMPANY.address}</p>
              <p><strong>Official Inquiries:</strong> <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] hover:underline font-mono">{COMPANY.adminEmail}</a></p>
              <p><strong>Official Contact:</strong> {COMPANY.phone} / {COMPANY.altPhone}</p>
            </div>
          </div>

          {/* Product Relationship */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4">
              Our Flagship Product: FlowDesk
            </h2>
            <p className="mb-4">
              <strong>FlowDesk</strong> is a proprietary software platform developed, owned, and operated entirely by <strong>{COMPANY.legalName}</strong>. 
            </p>
            <p className="mb-4">
              FlowDesk connects directly to the official Meta / WhatsApp Business Platform (Cloud API) to provide local service businesses (salons, spas, wellness centers, studios) with an interactive, app-like booking experience inside WhatsApp. It combines direct client messaging with a powerful cloud-based management dashboard for business owners.
            </p>
          </div>

          {/* Leadership Team (Designated Partners) */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-2">
              Designated Partners &amp; Leadership
            </h2>
            <p className="text-sm text-[#111111]/60 mb-6">
              Founded and managed by Designated Partners registered under the Limited Liability Partnership Act:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-[#111111]/10 shadow-sm">
                <span className="font-mono text-xs text-[#E51E25] uppercase tracking-wider block mb-1 font-bold">Designated Partner</span>
                <h3 className="font-heading text-xl text-[#111111] mb-1">Gokul Surendran</h3>
                <p className="text-xs text-[#111111]/60 mb-4">Chief Executive Officer (CEO)</p>
                <a href={`mailto:${COMPANY.salesEmail}`} className="text-xs text-[#E51E25] hover:underline font-mono">{COMPANY.salesEmail}</a>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#111111]/10 shadow-sm">
                <span className="font-mono text-xs text-[#E51E25] uppercase tracking-wider block mb-1 font-bold">Designated Partner</span>
                <h3 className="font-heading text-xl text-[#111111] mb-1">MS Mohammed Hashiq</h3>
                <p className="text-xs text-[#111111]/60 mb-4">Chief Technology Officer (CTO)</p>
                <a href={`mailto:${COMPANY.techEmail}`} className="text-xs text-[#E51E25] hover:underline font-mono">{COMPANY.techEmail}</a>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#111111]/10 shadow-sm">
                <span className="font-mono text-xs text-[#E51E25] uppercase tracking-wider block mb-1 font-bold">Designated Partner</span>
                <h3 className="font-heading text-xl text-[#111111] mb-1">Saheeda Menamthuruthil Muhammed</h3>
                <p className="text-xs text-[#111111]/60 mb-4">Chief Operating Officer (COO)</p>
                <a href={`mailto:${COMPANY.successEmail}`} className="text-xs text-[#E51E25] hover:underline font-mono">{COMPANY.successEmail}</a>
              </div>
            </div>
          </div>

          {/* Compliance & Independence */}
          <div className="p-6 bg-[#111111]/5 rounded-2xl text-sm text-[#111111]/70 border border-[#111111]/10">
            <p>
              <strong>Disclaimer:</strong> {COMPANY.disclaimer}
            </p>
          </div>

          <div className="flex gap-4 pt-6">
            <Link href="/contact" className="px-8 py-4 bg-[#111111] text-white rounded-full font-medium hover:bg-[#E51E25] transition-all">
              Contact Leadership
            </Link>
            <Link href="/" className="px-8 py-4 bg-white border border-[#111111]/20 text-[#111111] rounded-full font-medium hover:bg-[#111111]/5 transition-all">
              Back to Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
