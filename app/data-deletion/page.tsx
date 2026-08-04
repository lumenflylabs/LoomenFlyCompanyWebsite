import React from "react";
import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `User Data Deletion Instructions | ${COMPANY.name}`,
  description: `Instructions on how users can request data deletion for FlowDesk and WhatsApp integrations provided by ${COMPANY.name} (${COMPANY.legalName}).`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.loomenflylabs.com/data-deletion",
  },
};

export default function DataDeletionPage() {
  return (
    <div className="bg-[#F6F5ED] min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <span className="font-mono text-xs tracking-[0.3em] text-[#E51E25] uppercase mb-6 font-bold block">
          User Data Rights & Compliance
        </span>
        <h1 className="font-heading text-[clamp(36px,5vw,64px)] font-medium leading-[1.05] tracking-tight text-[#111111] mb-8">
          User Data Deletion Instructions
        </h1>
        
        <div className="font-sans text-base md:text-lg text-[#111111]/80 flex flex-col gap-8 leading-relaxed">
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <p>
            In accordance with the <strong>Meta Platform Terms</strong>, <strong>WhatsApp Business API Policies</strong>, and global data privacy standards (including GDPR and CCPA), <strong>{COMPANY.legalName}</strong> (&quot;{COMPANY.name}&quot;) provides a clear and transparent mechanism for users and customers to request the complete deletion of their personal data.
          </p>

          <div className="p-8 bg-white rounded-3xl border border-[#111111]/10 shadow-sm">
            <h2 className="font-heading text-2xl text-[#111111] mb-4">
              How to Request Data Deletion
            </h2>
            <p className="mb-4">
              If you have interacted with a FlowDesk WhatsApp booking flow or service and wish to have all your personal information, booking records, and phone numbers permanently purged from our servers, you can initiate a deletion request through either of the following methods:
            </p>

            <div className="flex flex-col gap-4 mt-6">
              <div className="p-4 bg-[#F6F5ED] rounded-xl border border-[#111111]/5">
                <h3 className="font-bold text-[#111111] mb-1">Option 1: Direct Email Request (Recommended)</h3>
                <p className="text-sm text-[#111111]/70 mb-2">
                  Send an email to our Data Protection Officer with the subject line <strong>&quot;Data Deletion Request&quot;</strong>:
                </p>
                <p className="text-sm">
                  Email: <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] font-mono hover:underline">{COMPANY.adminEmail}</a>
                </p>
                <p className="text-xs text-[#111111]/60 mt-2">
                  Please specify the phone number used during your WhatsApp interactions so we can locate and purge your encrypted records.
                </p>
              </div>

              <div className="p-4 bg-[#F6F5ED] rounded-xl border border-[#111111]/5">
                <h3 className="font-bold text-[#111111] mb-1">Option 2: WhatsApp Chat Command</h3>
                <p className="text-sm text-[#111111]/70">
                  Send the message <strong>&quot;DELETE MY DATA&quot;</strong> directly inside any active FlowDesk WhatsApp conversation. Our automated system will flag your account for permanent data purging.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4">
              What Data is Deleted?
            </h2>
            <p className="mb-4">
              Upon receiving and verifying your request, we will permanently delete the following data from our active databases and backup systems:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li>Your WhatsApp phone number and blind-indexed hashes.</li>
              <li>Your full name and any submitted demographic information.</li>
              <li>Your entire historical appointment records and service booking logs.</li>
              <li>Any synced Google Calendar metadata linked to your bookings.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4">
              Deletion Timeline & Confirmation
            </h2>
            <p>
              All eligible data deletion requests are processed and permanently completed within <strong>30 days</strong>. You will receive an official confirmation receipt via email once the purge is finalized.
            </p>
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
            <Link href="/contact" className="text-[#E51E25] hover:underline font-medium">
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
