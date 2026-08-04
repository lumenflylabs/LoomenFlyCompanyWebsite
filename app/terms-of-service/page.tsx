import React from "react";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";

export const metadata = {
  title: `Terms of Service | ${COMPANY.name}`,
  description: `Terms of Service for ${COMPANY.name} (${COMPANY.legalName}) and the FlowDesk WhatsApp booking platform.`,
};

export default function TermsOfService() {
  return (
    <div className="bg-[#F6F5ED] min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <span className="font-mono text-xs tracking-[0.3em] text-[#E51E25] uppercase mb-6 font-bold block">
          Legal & Compliance
        </span>
        <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-medium leading-[1.05] tracking-tight text-[#111111] mb-12">
          Terms of Service
        </h1>
        
        <div className="font-sans text-base md:text-lg text-[#111111]/70 flex flex-col gap-8 leading-relaxed">
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <p>
            Welcome to FlowDesk. These Terms of Service govern your use of our WhatsApp-based conversational booking platform, business management dashboard, and software ecosystem provided by <strong>{COMPANY.legalName}</strong> (&quot;{COMPANY.name}&quot;).
          </p>
          
          <div className="p-6 bg-white rounded-2xl border border-[#111111]/10 shadow-sm text-sm text-[#111111]/80">
            <p><strong>Legal Entity:</strong> {COMPANY.legalName}</p>
            <p><strong>LLPIN:</strong> {COMPANY.llpin} | <strong>MSME Udyam:</strong> {COMPANY.udyam}</p>
            <p><strong>Registered Office:</strong> {COMPANY.address}</p>
            <p><strong>Official Contact:</strong> <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] hover:underline font-mono">{COMPANY.adminEmail}</a> | {COMPANY.phone}</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              1. Platform Description & Scope
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li>FlowDesk provides interactive booking infrastructure, automated client notifications, and calendar management software integrated directly with the official WhatsApp Business Platform (Cloud API).</li>
              <li>{COMPANY.legalName} acts as a technical solution provider. We do not provide the direct salon, beauty, or grooming services offered by our business clients (Tenants).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              2. Compliance with Meta & WhatsApp Policies
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li>All businesses and users utilizing FlowDesk must strictly adhere to the <strong>Meta Platform Terms</strong> and <strong>WhatsApp Business Messaging & Commerce Policies</strong>.</li>
              <li>Spam, deceptive content, harassment, or unauthorized promotional messaging is strictly prohibited and grounds for immediate termination of platform access.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              3. User Messaging & Opt-In
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li>By initiating a chat session with an active FlowDesk WhatsApp number, customers explicitly consent to receive transactional booking confirmations, rescheduling options, and appointment reminders.</li>
              <li>Customers may opt-out at any time by messaging &quot;STOP&quot;, &quot;DELETE MY DATA&quot;, or blocking the verified number.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              4. Data Privacy, Deletion & Security
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li>All booking information, phone numbers, and customer metadata are secured using AES-256 encryption, blind-indexing, and PostgreSQL Row-Level Security (RLS).</li>
              <li>Users retain full rights to request complete data erasure at any time via our <Link href="/data-deletion" className="text-[#E51E25] hover:underline font-medium">Data Deletion Instructions</Link> or by emailing <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] font-mono hover:underline">{COMPANY.adminEmail}</a>.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              5. Intellectual Property & Independence Disclaimer
            </h2>
            <p className="mb-4">
              FlowDesk and all proprietary software algorithms, UI components, and dashboards are the exclusive intellectual property of <strong>{COMPANY.legalName}</strong>.
            </p>
            <p className="text-sm bg-[#111111]/5 p-4 rounded-xl border border-[#111111]/10">
              <strong>Disclaimer:</strong> {COMPANY.legalName} is an independent technology company. WhatsApp and Meta are registered trademarks of Meta Platforms, Inc. We are not directly endorsed by, affiliated with, or sponsored by Meta Platforms, Inc.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              6. Legal Inquiries & Governance
            </h2>
            <p>
              These Terms of Service are governed by the laws of India and the jurisdiction of Kerala.<br /><br />
              <strong>{COMPANY.legalName}</strong><br />
              Email: <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] hover:underline font-mono">{COMPANY.adminEmail}</a><br />
              Phone: {COMPANY.phone}<br />
              Address: {COMPANY.address}
            </p>
          </div>

          <div className="pt-6 border-t border-[#111111]/10 flex flex-wrap gap-4 text-sm">
            <Link href="/privacy-policy" className="text-[#E51E25] hover:underline font-medium">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/data-deletion" className="text-[#E51E25] hover:underline font-medium">
              Data Deletion
            </Link>
            <span>•</span>
            <Link href="/contact" className="text-[#E51E25] hover:underline font-medium">
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
