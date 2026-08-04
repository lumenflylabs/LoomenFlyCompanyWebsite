import React from "react";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";

export const metadata = {
  title: `About Us | ${COMPANY.name}`,
  description: `Learn about ${COMPANY.name} (LOOMENFLY LABS LLP), our mission, leadership, and our flagship product FlowDesk.`,
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
          {COMPANY.name} is a software and technology firm based in Kerala, India, specializing in conversational commerce, automated booking infrastructure, and business management software.
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
              <p><strong>Official Inquiries:</strong> <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] hover:underline">{COMPANY.adminEmail}</a></p>
              <p><strong>Official Phone:</strong> {COMPANY.phone}</p>
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
              FlowDesk connects directly to the official Meta / WhatsApp Cloud API to provide local service businesses (salons, spas, wellness centers, studios) with an interactive, app-like booking experience inside WhatsApp. It combines direct client messaging with a powerful cloud-based management dashboard for business owners.
            </p>
          </div>

          {/* Leadership Team */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-6">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-[#111111]/10 shadow-sm">
                <span className="font-mono text-xs text-[#E51E25] uppercase tracking-wider block mb-1 font-bold">Executive</span>
                <h3 className="font-heading text-xl text-[#111111] mb-2">Gokul</h3>
                <p className="text-xs text-[#111111]/60 mb-4">Chief Executive Officer (CEO)</p>
                <a href={`mailto:${COMPANY.salesEmail}`} className="text-xs text-[#E51E25] hover:underline font-mono">{COMPANY.salesEmail}</a>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#111111]/10 shadow-sm">
                <span className="font-mono text-xs text-[#E51E25] uppercase tracking-wider block mb-1 font-bold">Technology</span>
                <h3 className="font-heading text-xl text-[#111111] mb-2">Hashiq</h3>
                <p className="text-xs text-[#111111]/60 mb-4">Chief Technology Officer (CTO)</p>
                <a href={`mailto:${COMPANY.techEmail}`} className="text-xs text-[#E51E25] hover:underline font-mono">{COMPANY.techEmail}</a>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#111111]/10 shadow-sm">
                <span className="font-mono text-xs text-[#E51E25] uppercase tracking-wider block mb-1 font-bold">Operations</span>
                <h3 className="font-heading text-xl text-[#111111] mb-2">Saheeda</h3>
                <p className="text-xs text-[#111111]/60 mb-4">Chief Operating Officer (COO)</p>
                <a href={`mailto:${COMPANY.successEmail}`} className="text-xs text-[#E51E25] hover:underline font-mono">{COMPANY.successEmail}</a>
              </div>
            </div>
          </div>

          {/* Compliance & Independence */}
          <div className="p-6 bg-[#111111]/5 rounded-2xl text-sm text-[#111111]/70 border border-[#111111]/10">
            <p>
              <strong>Disclaimer:</strong> {COMPANY.legalName} is an independent technology and software engineering entity. We integrate with the official WhatsApp Business Platform (Cloud API) in accordance with Meta Platform Terms. We are not directly affiliated with, sponsored by, or endorsed by Meta Platforms, Inc. or WhatsApp Inc.
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
