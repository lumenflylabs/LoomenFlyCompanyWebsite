import React from "react";
import { COMPANY } from "@/lib/constants";

export const metadata = {
  title: `Terms & Conditions | ${COMPANY.name}`,
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
          Terms & Conditions
        </h1>
        
        <div className="font-sans text-base md:text-lg text-[#111111]/70 flex flex-col gap-8 leading-relaxed">
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <p>
            Welcome to {COMPANY.name}. These Terms and Conditions outline the rules and regulations for the use of our website and the FlowDesk software services.
            By accessing this website and utilizing our services, we assume you accept these terms and conditions. Do not continue to use our services if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              1. Definitions
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li><strong>"Company"</strong>, "Ourselves", "We", "Our" and "Us", refers to {COMPANY.legalName}.</li>
              <li><strong>"Client"</strong>, "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions.</li>
              <li><strong>"Service"</strong> refers to the FlowDesk automated messaging and management dashboard ecosystem provided by us.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              2. License and Usage
            </h2>
            <p className="mb-4">
              Unless otherwise stated, {COMPANY.legalName} and/or its licensors own the intellectual property rights for all material on the platform. All intellectual property rights are reserved. You may access this from our platform for your own business use subjected to restrictions set in these terms and conditions.
            </p>
            <p className="mb-4">You must not:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[#111111]/70">
              <li>Republish material from our proprietary software or website.</li>
              <li>Sell, rent or sub-license material from {COMPANY.name}.</li>
              <li>Reproduce, duplicate or copy material, workflows, or UI designs from FlowDesk.</li>
              <li>Redistribute content without explicit permission.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              3. Service Delivery & Setup
            </h2>
            <p>
              As part of our premium onboarding, we handle the technical setup of the FlowDesk ecosystem. You agree to provide accurate information regarding your business, services, and staff. Delays in providing necessary information may result in setup delays. {COMPANY.name} is not liable for losses incurred due to delayed deployment.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              4. WhatsApp API & Third-Party Constraints
            </h2>
            <p>
              Our FlowDesk software relies on the WhatsApp Business API (Meta). You agree to adhere strictly to WhatsApp's Commerce and Business Policies. {COMPANY.name} cannot be held responsible for account suspensions, bans, or API changes enforced by Meta that may temporarily or permanently disrupt the service.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              5. Limitation of Liability
            </h2>
            <p>
              In no event shall {COMPANY.legalName}, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website or our software whether such liability is under contract. {COMPANY.legalName}, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Service.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#111111] mb-4 mt-8">
              6. Contact Us
            </h2>
            <p>
              If you have any queries regarding any of our terms, please contact us at:
              <br /><br />
              <strong>{COMPANY.legalName}</strong><br />
              {COMPANY.address}<br />
              <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#E51E25] hover:underline transition-all">
                {COMPANY.adminEmail}
              </a><br />
              <a href={`tel:${COMPANY.phone}`} className="text-[#E51E25] hover:underline transition-all">
                {COMPANY.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
