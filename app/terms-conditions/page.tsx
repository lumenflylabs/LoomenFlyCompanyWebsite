import React from "react";
import { COMPANY } from "@/lib/constants";

export const metadata = {
  title: `Terms and Conditions | ${COMPANY.name}`,
  description: `Terms and Conditions for ${COMPANY.name}`,
};

export default function TermsConditions() {
  return (
    <div className="bg-[#F6F5ED] min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <span className="font-mono text-xs tracking-[0.3em] text-[#E51E25] uppercase mb-6 font-bold block">
          Legal
        </span>
        <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-medium leading-[1.05] tracking-tight text-[#111111] mb-12">
          Terms and Conditions
        </h1>
        
        <div className="font-sans text-base md:text-lg text-[#111111]/70 flex flex-col gap-8 leading-relaxed">
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <p>
            Welcome to FlowDesk. These Terms and Conditions govern your use of our WhatsApp-based booking software and related services. By interacting with our WhatsApp bot or using our business dashboard, you agree to these terms.
          </p>
          
          <p className="font-bold text-[#111111]">
            FlowDesk is a software product developed and operated by {COMPANY.legalName}.
          </p>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              1. Use of the Service
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li>FlowDesk provides a platform for businesses to manage their appointments via WhatsApp.</li>
              <li>You agree to use the service only for lawful purposes. You must not use our platform to transmit spam, malware, or any content that violates Meta's WhatsApp Commerce Policies.</li>
              <li>We reserve the right to suspend or terminate access to any user or business (Tenant) that violates these terms or Meta's policies.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              2. Communications and Messaging
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li>By initiating a conversation with our WhatsApp number, you explicitly opt-in to receive automated responses necessary to facilitate your booking (e.g., confirmations, reminders, cancellations).</li>
              <li>Standard messaging and data rates may apply depending on your mobile carrier.</li>
              <li>You can opt-out of receiving messages at any time by blocking the number or requesting account deletion.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              3. Account and Data Security
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li>Business owners are responsible for maintaining the confidentiality of their dashboard login credentials.</li>
              <li>We utilize advanced encryption (AES-256 and RSA) and Row-Level Security (RLS) to protect your data. However, you acknowledge that no system is completely immune to cyber-attacks, and we cannot guarantee absolute security.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              4. Limitation of Liability
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li>FlowDesk acts solely as a booking facilitator. We are not responsible for the quality of services provided by the businesses (Tenants) using our platform.</li>
              <li>To the maximum extent permitted by law, FlowDesk shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use the service.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              5. Changes to the Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on this page, and continued use of the service constitutes acceptance of the modified terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              6. Contact
            </h2>
            <p>
              For any legal inquiries regarding these Terms and Conditions, please contact:<br /><br />
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
