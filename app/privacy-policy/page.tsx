import React from "react";
import { COMPANY } from "@/lib/constants";

export const metadata = {
  title: `Privacy Policy | ${COMPANY.name}`,
  description: `Privacy Policy for ${COMPANY.name}`,
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#F6F5ED] min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <span className="font-mono text-xs tracking-[0.3em] text-[#E51E25] uppercase mb-6 font-bold block">
          Legal
        </span>
        <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-medium leading-[1.05] tracking-tight text-[#111111] mb-12">
          Privacy Policy for FlowDesk
        </h1>
        
        <div className="font-sans text-base md:text-lg text-[#111111]/70 flex flex-col gap-8 leading-relaxed">
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <p>
            Welcome to FlowDesk. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our WhatsApp booking services and business management tools.
          </p>
          
          <p className="font-bold text-[#111111]">
            FlowDesk is a software product developed and operated by {COMPANY.legalName}.
          </p>

          <p>
            This policy has been specifically designed to comply with the Meta Platform Terms and WhatsApp Business API Policies.
          </p>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              When you interact with our WhatsApp chatbot or booking flows, we collect the minimum amount of data necessary to facilitate your appointment:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li><strong>Contact Information:</strong> Your WhatsApp phone number (which is securely encrypted and blind-indexed in our database) and your name.</li>
              <li><strong>Demographic Data:</strong> Age and gender (only if provided for specific service eligibility).</li>
              <li><strong>Booking Data:</strong> The services you select, the locations you book, and your appointment times.</li>
              <li><strong>Communications:</strong> The messages and feedback you send through the WhatsApp interface.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              2. How We Secure Your Data (Enterprise-Grade Security)
            </h2>
            <p className="mb-4">
              We employ state-of-the-art security measures to protect your data, exceeding industry standards:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li><strong>Field-Level Encryption:</strong> Highly sensitive Personally Identifiable Information (PII), such as your WhatsApp phone number, is encrypted at rest using AES-256 encryption. We use blind-indexing to query data without ever exposing the raw phone numbers to the database administrators.</li>
              <li><strong>End-to-End Flow Encryption:</strong> All data entered into WhatsApp Forms (Flows) is symmetrically encrypted on your device and decrypted only by our private backend servers.</li>
              <li><strong>Data Isolation:</strong> Business owner data is strictly separated using Row-Level Security (RLS). A business owner can never access the customer data of another business.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect solely for the purpose of providing and improving our service:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li>To schedule, modify, and cancel your appointments.</li>
              <li>To send you automated reminders and notifications via WhatsApp.</li>
              <li>To allow business owners (Tenants) to manage their schedules.</li>
            </ul>
            <p className="mt-4 font-semibold">
              We do NOT sell, rent, or trade your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              4. Third-Party Services
            </h2>
            <p className="mb-4">
              We share information with third parties only when strictly necessary to provide our services:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li><strong>Meta / WhatsApp:</strong> To facilitate the messaging interface.</li>
              <li><strong>Google Calendar:</strong> If a business owner connects their calendar, your appointment time and name may be synced to their secure Google Calendar.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              5. Your Rights and Data Deletion
            </h2>
            <p className="mb-4">
              Under Meta's Platform Terms and applicable global data protection laws (like GDPR/CCPA), you have the right to:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li>Request a copy of the personal data we hold about you.</li>
              <li>Request that we correct any inaccurate data.</li>
              <li><strong>Request Data Deletion:</strong> You can request the complete deletion of your profile and appointment history. To initiate a data deletion request, please email {COMPANY.adminEmail}. Upon request, all PII (including encrypted phone numbers and names) will be permanently purged from our databases within 30 days.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at:
              <br /><br />
              <strong>{COMPANY.legalName}</strong><br />
              Email: <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] hover:underline transition-all">{COMPANY.adminEmail}</a><br />
              Address: {COMPANY.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
