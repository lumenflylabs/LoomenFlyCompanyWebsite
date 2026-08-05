import React from "react";
import type { Metadata } from "next";
import { COMPANY, DESIGNATED_PARTNERS } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: `Privacy Policy | ${COMPANY.legalName}`,
  },
  description: `Official Privacy Policy for ${COMPANY.name} (${COMPANY.legalName}) governing the FlowDesk WhatsApp Business Platform Cloud API integration and booking system.`,
  alternates: {
    canonical: "https://www.loomenflylabs.com/privacy-policy",
  },
  openGraph: {
    title: `Privacy Policy | ${COMPANY.legalName}`,
    description: `Official Privacy Policy for ${COMPANY.name} (${COMPANY.legalName}) governing the FlowDesk WhatsApp Business Platform Cloud API integration and booking system.`,
    url: "https://www.loomenflylabs.com/privacy-policy",
    siteName: COMPANY.legalName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.loomenflylabs.com/images/og-banner.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `Privacy Policy | ${COMPANY.legalName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy Policy | ${COMPANY.legalName}`,
    description: `Official Privacy Policy for ${COMPANY.name} (${COMPANY.legalName}) governing the FlowDesk WhatsApp Business Platform Cloud API integration and booking system.`,
    images: ["https://www.loomenflylabs.com/images/og-banner.png"],
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
            <strong>Last Updated:</strong> August 5, 2026
          </p>

          <p>
            Welcome to FlowDesk. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, process, share, retain, and safeguard your data when you interact with our WhatsApp booking services, business management dashboards, and software ecosystem provided by <strong>{COMPANY.legalName}</strong> (&quot;{COMPANY.name}&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
          </p>

          {/* Data Controller Credentials Card */}
          <div className="p-6 bg-white rounded-2xl border border-[#111111]/10 shadow-sm text-sm text-[#111111]/80">
            <h2 className="font-heading text-lg font-bold text-[#111111] mb-2">Data Controller Details</h2>
            <p><strong>Legal Business Name:</strong> {COMPANY.legalName}</p>
            <p><strong>LLPIN:</strong> {COMPANY.llpin} | <strong>MSME Udyam:</strong> {COMPANY.udyam}</p>
            <p><strong>Registered Address:</strong> {COMPANY.address}</p>
            <p><strong>Official Inquiries:</strong> <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] hover:underline font-mono">{COMPANY.adminEmail}</a></p>
            <p><strong>Official Phone Lines:</strong> {COMPANY.phone} / {COMPANY.altPhone}</p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#111111]/10 text-sm text-[#111111]/80 leading-relaxed shadow-sm">
            <p className="font-bold text-[#111111] mb-1">WhatsApp Business Platform Cloud API Integration Disclosure:</p>
            <p>
              FlowDesk uses Meta&apos;s official WhatsApp Business Platform Cloud API to process transactional booking conversations, dispatch appointment confirmations, and send customer service notifications. All message content is processed strictly in accordance with Meta Platform Terms and the WhatsApp Business Messaging Policy. We do not sell, rent, monetize, or use conversational data for cross-site profiling or advertising.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              When you interact with our WhatsApp automated flows, salon/clinic booking systems, or owner dashboard, we collect only the minimal data necessary to fulfill your appointment requests:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li><strong>WhatsApp Contact Details:</strong> Your WhatsApp phone number (encrypted at rest and blind-indexed) and profile name.</li>
              <li><strong>Appointment &amp; Service History:</strong> Requested service packages, assigned staff member, scheduled date/time, and booking confirmation status.</li>
              <li><strong>Conversational Messages:</strong> Interactive messages, flow selections, and customer responses submitted during the WhatsApp chat session.</li>
              <li><strong>Connected Calendar Metadata:</strong> Calendar event IDs and timestamps synchronized with connected Google Calendar accounts.</li>
              <li><strong>Demographic Information:</strong> Age or gender only when explicitly requested by specialized healthcare or wellness providers for service customization.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We process your data strictly on the basis of contractual necessity and legitimate business interests:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li>To schedule, confirm, modify, or cancel service appointments.</li>
              <li>To send automated transactional reminders and booking status receipts via WhatsApp.</li>
              <li>To prevent appointment no-shows and coordinate staff availability for salon and clinic owners.</li>
              <li>To respond to customer support inquiries and provide technical assistance.</li>
            </ul>
            <p className="mt-4 font-semibold text-[#111111]">
              We do NOT sell, rent, trade, or monetize your personal data to any advertisers, brokers, or external third parties.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              3. Third-Party Data Sharing &amp; Processors
            </h2>
            <p className="mb-4">
              We share data only with verified enterprise infrastructure providers required to operate FlowDesk:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li><strong>Meta Platforms, Inc. (WhatsApp Cloud API):</strong> We share message payloads and phone numbers with Meta Platforms, Inc. strictly as necessary to deliver conversational WhatsApp messages to you.</li>
              <li><strong>Google LLC (Google Calendar API):</strong> If enabled by the business owner, appointment timestamps are synchronized to Google Calendar.</li>
              <li><strong>Enterprise Cloud Infrastructure:</strong> Database and server hosting protected by AES-256 field-level encryption, multi-tenant row-level security (RLS), and strict access controls.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              4. Data Retention Schedule
            </h2>
            <p className="mb-4">
              We maintain a clear data lifecycle policy:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li><strong>Active Booking Records:</strong> Stored for up to <strong>12 months</strong> following your last appointment to facilitate repeat bookings and customer support, or until a deletion request is received.</li>
              <li><strong>Conversational Chat Logs:</strong> Archived after 90 days of inactivity and permanently expunged.</li>
              <li><strong>Backup Archives:</strong> Encrypted backup snapshots rotate on a rolling schedule and are permanently overwritten within 90 days.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              5. User Rights &amp; Data Deletion (GDPR / CCPA / Meta)
            </h2>
            <p className="mb-4">
              In accordance with Meta Platform Terms, GDPR, CCPA, and Indian IT data protection frameworks, you have full ownership of your data:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li><strong>Right to Access &amp; Portability:</strong> You may request a copy of your personal data stored in our system.</li>
              <li><strong>Right to Rectification:</strong> You may request immediate correction of inaccurate data.</li>
              <li><strong>Right to Erasure (DELETE MY DATA):</strong> You can request immediate permanent deletion of your phone number, name, and booking history at any time by visiting our <Link href="/data-deletion" className="text-[#E51E25] hover:underline font-medium">Data Deletion Instructions</Link>, sending <strong>&quot;DELETE MY DATA&quot;</strong> in WhatsApp, or emailing <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] font-mono hover:underline">{COMPANY.adminEmail}</a>.</li>
              <li><strong>Timeline:</strong> All deletion requests are processed within <strong>7 to 14 business days</strong> (guaranteed complete purge within 30 days).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              6. Grievance Redressal Officer (India IT Rules 2021)
            </h2>
            <p className="mb-4">
              In accordance with the Information Technology Act, 2000 and Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the designated Grievance Officer for LOOMENFLY LABS LLP is:
            </p>
            <div className="p-5 bg-white rounded-2xl border border-[#111111]/10 text-sm text-[#111111]/80 shadow-sm leading-relaxed">
              <p><strong>Grievance Officer:</strong> {DESIGNATED_PARTNERS[1].name} (Designated Partner &amp; {DESIGNATED_PARTNERS[1].role})</p>
              <p><strong>Entity:</strong> {COMPANY.legalName}</p>
              <p><strong>Email:</strong> <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] hover:underline font-mono">{COMPANY.adminEmail}</a></p>
              <p><strong>Physical Address:</strong> {COMPANY.address}</p>
              <p><strong>Phone:</strong> {COMPANY.phone} / {COMPANY.altPhone}</p>
              <p className="text-xs text-[#111111]/60 mt-2">
                We will acknowledge your grievance within 24 hours and resolve it within 15 days of receipt.
              </p>
            </div>
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
            <Link href="/about" className="text-[#E51E25] hover:underline font-medium">
              About Us
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
