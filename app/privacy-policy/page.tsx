import React from "react";
import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY.name}`,
  description: `Privacy Policy for ${COMPANY.name} (${COMPANY.legalName}) and the FlowDesk WhatsApp booking platform.`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.loomenflylabs.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#F6F5ED] min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <span className="font-mono text-xs tracking-[0.3em] text-[#E51E25] uppercase mb-6 font-bold block">
          Legal & Compliance
        </span>
        <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-medium leading-[1.05] tracking-tight text-[#111111] mb-12">
          Privacy Policy
        </h1>
        
        <div className="font-sans text-base md:text-lg text-[#111111]/70 flex flex-col gap-8 leading-relaxed">
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <p>
            Welcome to FlowDesk. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our WhatsApp booking services, business management dashboards, and software ecosystem provided by <strong>{COMPANY.legalName}</strong> (&quot;{COMPANY.name}&quot;).
          </p>

          {/* Legal Entity Credentials Card */}
          <div className="p-6 bg-white rounded-2xl border border-[#111111]/10 shadow-sm text-sm text-[#111111]/80">
            <p><strong>Legal Entity:</strong> {COMPANY.legalName}</p>
            <p><strong>LLPIN:</strong> {COMPANY.llpin} | <strong>MSME Udyam:</strong> {COMPANY.udyam}</p>
            <p><strong>Registered Office:</strong> {COMPANY.address}</p>
            <p><strong>Official Contact:</strong> <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] hover:underline font-mono">{COMPANY.adminEmail}</a> | {COMPANY.phone} / {COMPANY.altPhone}</p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#111111]/10 text-sm text-[#111111]/80 leading-relaxed shadow-sm">
            <p className="font-bold text-[#111111] mb-1">WhatsApp Business Platform Cloud API Disclosure:</p>
            <p>
              We use Meta&apos;s WhatsApp Business Platform Cloud API to process booking messages on behalf of our business clients. Message content is processed strictly per WhatsApp Business Policy and is never used for advertising, cross-site profiling, or data brokerage.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              When you interact with our WhatsApp chatbot, flows, or booking platform, we collect only the minimal data necessary to deliver and confirm your service appointments:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li><strong>Contact Information:</strong> Your WhatsApp phone number (which is encrypted and blind-indexed in our database) and customer name.</li>
              <li><strong>Booking Details:</strong> Selected services, staff preferences, appointment dates/times, and appointment statuses.</li>
              <li><strong>Customer Inquiries &amp; Messages:</strong> Contextual message text and customer responses sent during booking interactions.</li>
              <li><strong>Demographic Information:</strong> Age or gender only when explicitly requested for specialized service requirements.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              2. How We Secure Your Data (Enterprise-Grade Security)
            </h2>
            <p className="mb-4">
              We employ strict technical, physical, and administrative safeguards to ensure end-to-end security of all customer data:
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="p-4 bg-white rounded-xl border border-[#111111]/10">
                <h3 className="font-bold text-[#111111] mb-1">AES-256 Field-Level Encryption &amp; Blind Indexing</h3>
                <p className="text-sm text-[#111111]/70">
                  Personally Identifiable Information (PII) such as phone numbers are encrypted at rest using AES-256. Blind indexing is used to safely query records without decrypting raw data.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#111111]/10">
                <h3 className="font-bold text-[#111111] mb-1">WhatsApp Cloud API &amp; Flow Encryption</h3>
                <p className="text-sm text-[#111111]/70">
                  Data entered in WhatsApp Flows is symmetrically encrypted on your device and decrypted exclusively by our secure private application servers.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#111111]/10">
                <h3 className="font-bold text-[#111111] mb-1">Multi-Tenant Row-Level Security (RLS)</h3>
                <p className="text-sm text-[#111111]/70">
                  Business owner data is isolated via PostgreSQL Row-Level Security policies to ensure zero cross-tenant data leakage.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use collected information exclusively to fulfill customer appointment bookings and operate the platform:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li>To schedule, confirm, reschedule, or cancel client appointments.</li>
              <li>To dispatch automated transactional notifications, reminders, and confirmations over WhatsApp.</li>
              <li>To allow salon and clinic owners to manage operational staff schedules and prevent appointment no-shows.</li>
            </ul>
            <p className="mt-4 font-semibold text-[#111111]">
              We do NOT sell, rent, monetize, or trade your personal information to any third parties or advertisers.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              4. Third-Party Data Processors
            </h2>
            <p className="mb-4">
              Information is shared only with verified technical infrastructure providers necessary to operate the service:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li><strong>Meta Platforms &amp; WhatsApp Cloud API:</strong> To send and receive conversational WhatsApp messages.</li>
              <li><strong>Google Calendar API:</strong> If enabled by the tenant, appointment schedules and timestamps are synced to their connected Google Calendar.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              5. User Rights &amp; Data Deletion (GDPR / CCPA / Meta)
            </h2>
            <p className="mb-4">
              In accordance with Meta Platform Terms, GDPR, and CCPA, you retain full ownership and control over your personal data:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li><strong>Access &amp; Rectification:</strong> You may request access to or correction of any personal data stored in our systems.</li>
              <li><strong>Complete Erasure (Data Deletion):</strong> You can request immediate permanent deletion of your phone number, name, and booking history at any time by following our <Link href="/data-deletion" className="text-[#E51E25] hover:underline font-medium">User Data Deletion Instructions</Link> or by emailing <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] font-mono hover:underline">{COMPANY.adminEmail}</a>.</li>
              <li><strong>30-Day Guarantee:</strong> All verified data deletion requests are permanently purged from active systems and backups within 30 days.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              6. Governance &amp; Contact Information
            </h2>
            <p>
              If you have any questions or data privacy inquiries regarding this Privacy Policy, please contact:
              <br /><br />
              <strong>{COMPANY.legalName}</strong><br />
              Email: <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] hover:underline font-mono">{COMPANY.adminEmail}</a><br />
              Phone: {COMPANY.phone} / {COMPANY.altPhone}<br />
              Address: {COMPANY.address}
            </p>
          </div>

          {/* Cross-Navigation Footer */}
          <div className="pt-6 border-t border-[#111111]/10 flex flex-wrap gap-4 text-sm">
            <Link href="/terms-of-service" className="text-[#E51E25] hover:underline font-medium">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/data-deletion" className="text-[#E51E25] hover:underline font-medium">
              Data Deletion Instructions
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
