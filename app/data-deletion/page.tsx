import React from "react";
import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: `User Data Deletion Instructions | ${COMPANY.legalName}`,
  },
  description: `Instructions on how users can request data deletion for FlowDesk and WhatsApp integrations provided by ${COMPANY.name} (${COMPANY.legalName}) in accordance with Meta Platform Terms.`,
  alternates: {
    canonical: "https://www.loomenflylabs.com/data-deletion",
  },
  openGraph: {
    title: `User Data Deletion Instructions | ${COMPANY.legalName}`,
    description: `Official User Data Deletion Instructions for ${COMPANY.name} (${COMPANY.legalName}) and FlowDesk WhatsApp integrations.`,
    url: "https://www.loomenflylabs.com/data-deletion",
    siteName: COMPANY.legalName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `User Data Deletion Instructions | ${COMPANY.legalName}`,
    description: `Official User Data Deletion Instructions for ${COMPANY.name} (${COMPANY.legalName}) and FlowDesk WhatsApp integrations.`,
    images: ["/images/logo.jpeg"],
  },
};

export default function DataDeletionPage() {
  return (
    <div className="bg-[#F6F5ED] min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <span className="font-mono text-xs tracking-[0.3em] text-[#E51E25] uppercase mb-6 font-bold block">
          User Data Rights &amp; Compliance
        </span>
        <h1 className="font-heading text-[clamp(36px,5vw,64px)] font-medium leading-[1.05] tracking-tight text-[#111111] mb-8">
          User Data Deletion Instructions
        </h1>
        
        <div className="font-sans text-base md:text-lg text-[#111111]/80 flex flex-col gap-8 leading-relaxed">
          <p>
            <strong>Last Updated:</strong> August 5, 2026
          </p>

          <p>
            In accordance with the <strong>Meta Platform Terms</strong>, <strong>WhatsApp Business API Policies</strong>, and global data privacy standards (including GDPR and CCPA), <strong>{COMPANY.legalName}</strong> (&quot;{COMPANY.name}&quot;) provides a clear and transparent mechanism for users and customers to request the complete deletion of their personal data.
          </p>

          {/* Legal Entity Credentials Card */}
          <div className="p-6 bg-white rounded-2xl border border-[#111111]/10 shadow-sm text-sm text-[#111111]/80">
            <h2 className="font-heading text-lg font-bold text-[#111111] mb-2">Corporate Entity Information</h2>
            <p><strong>Legal Entity:</strong> {COMPANY.legalName}</p>
            <p><strong>LLPIN:</strong> {COMPANY.llpin} | <strong>MSME Udyam:</strong> {COMPANY.udyam}</p>
            <p><strong>Registered Office:</strong> {COMPANY.address}</p>
            <p><strong>Official Contact:</strong> <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] hover:underline font-mono">{COMPANY.adminEmail}</a> | {COMPANY.phone} / {COMPANY.altPhone}</p>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-[#111111]/10 shadow-sm">
            <h2 className="font-heading text-2xl text-[#111111] mb-4">
              How to Request Data Deletion (Step-by-Step)
            </h2>
            <p className="mb-4">
              If you have interacted with a FlowDesk WhatsApp booking flow or service and wish to have all your personal information, booking records, and phone numbers permanently purged from our servers, you can initiate a deletion request through either of the following methods:
            </p>

            <div className="flex flex-col gap-4 mt-6">
              <div className="p-5 bg-[#F6F5ED] rounded-xl border border-[#111111]/5">
                <h3 className="font-bold text-[#111111] mb-1">Option 1: Direct Email Request (Official Meta Standard)</h3>
                <p className="text-sm text-[#111111]/70 mb-2">
                  To request data deletion, send an email to <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] font-mono hover:underline">{COMPANY.adminEmail}</a> with the exact subject line:
                </p>
                <div className="p-3 bg-white rounded-lg border border-[#111111]/10 font-mono text-sm font-bold text-[#E51E25] mb-2">
                  Subject: DELETE MY DATA
                </div>
                <p className="text-sm text-[#111111]/80">
                  In your email body, simply state your request and include the WhatsApp phone number used during your booking interactions so our automated compliance system can identify and purge your records. We will delete all records within <strong>30 days</strong> (typical processing time is 7 to 14 business days) and send a written confirmation receipt.
                </p>
              </div>

              <div className="p-5 bg-[#F6F5ED] rounded-xl border border-[#111111]/5">
                <h3 className="font-bold text-[#111111] mb-1">Option 2: WhatsApp Chat Command</h3>
                <p className="text-sm text-[#111111]/70">
                  Send the message <strong>&quot;DELETE MY DATA&quot;</strong> or <strong>&quot;STOP&quot;</strong> directly inside any active FlowDesk WhatsApp conversation. Our automated system will immediately revoke consent and flag your account for complete data purging within 30 days.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4">
              What Data is Deleted?
            </h2>
            <p className="mb-4">
              Upon receiving and verifying your request, we will permanently delete the following data from our active databases and application servers:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li><strong>Customer Contact Details:</strong> Your WhatsApp phone number and blind-indexed hash keys.</li>
              <li><strong>Personal Profile:</strong> Full name and demographic data (if provided).</li>
              <li><strong>Booking &amp; Service History:</strong> Appointment logs, scheduled time slots, and staff selection records.</li>
              <li><strong>Conversational Messages:</strong> WhatsApp interactive messages and form responses.</li>
              <li><strong>Connected Calendars:</strong> Google Calendar event synchronizations linked to your appointments.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#111111]/10 shadow-sm">
              <h3 className="font-heading text-xl text-[#111111] mb-2">Processing Timeline</h3>
              <p className="text-sm text-[#111111]/70">
                All data deletion requests are reviewed, verified, and executed within <strong>7 to 14 business days</strong> (guaranteed full active purge within 30 days). You will receive an email confirmation receipt upon completion.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#111111]/10 shadow-sm">
              <h3 className="font-heading text-xl text-[#111111] mb-2">Backup Archive Deletion</h3>
              <p className="text-sm text-[#111111]/70">
                Encrypted disaster recovery backups rotate on a rolling schedule and are permanently overwritten and purged within <strong>90 days</strong>.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#111111]/10 shadow-sm">
            <h3 className="font-heading text-xl text-[#111111] mb-2">Data Protection &amp; Grievance Officer</h3>
            <p className="text-sm text-[#111111]/70 leading-relaxed">
              In accordance with the <strong>Information Technology Act, 2000</strong> and <strong>IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong>, if you have any questions or escalate concerns regarding your data deletion request, please reach out to our Grievance Officer:
            </p>
            <div className="mt-3 text-sm text-[#111111]/80 flex flex-col gap-1">
              <p><strong>Name:</strong> MS Mohammed Hashiq (Designated Partner)</p>
              <p><strong>Email:</strong> <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] hover:underline font-mono">{COMPANY.adminEmail}</a></p>
              <p><strong>Entity:</strong> {COMPANY.legalName} (LLPIN: {COMPANY.llpin})</p>
              <p><strong>Address:</strong> {COMPANY.address}</p>
              <p><strong>Phone:</strong> {COMPANY.phone} / {COMPANY.altPhone}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#111111]/10 flex flex-wrap gap-4 text-sm">
            <Link href="/privacy-policy" className="text-[#E51E25] hover:underline font-medium">
              View Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-service" className="text-[#E51E25] hover:underline font-medium">
              View Terms of Service
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
