import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY.name}`,
  description: `Privacy Policy for ${COMPANY.legalName}. Learn how we collect, use, and protect your data.`,
};

export default function PrivacyPolicy() {
  return (
    <div className="flex-1 bg-[#0A0A0A] pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#F5C518] mb-3">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-sm">
            Last updated: January 1, 2025
          </p>
        </div>

        <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              {COMPANY.legalName} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
              website or use our services.
            </p>
            <p className="mt-2">
              By accessing or using our services, you acknowledge that you have read and understood this Privacy Policy.
              If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Information We Collect</h2>
            <h3 className="text-white font-medium mb-2">Personal Data</h3>
            <p>
              We may collect personally identifiable information such as your name, email address, phone number,
              and business details when you voluntarily submit it through our contact forms, demo requests, or
              service inquiries.
            </p>
            <h3 className="text-white font-medium mt-4 mb-2">Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device,
              including your IP address, browser type, operating system, referring URLs, and browsing behaviour
              through cookies and similar tracking technologies.
            </p>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>To provide, operate, and maintain our services</li>
              <li>To respond to your inquiries, demo requests, and support needs</li>
              <li>To send you administrative information, updates, and promotional communications (with your consent)</li>
              <li>To improve our website, services, and user experience</li>
              <li>To comply with legal obligations and enforce our terms</li>
              <li>To detect, prevent, and address technical issues or fraudulent activity</li>
            </ul>
          </section>

          {/* 4. WhatsApp & Meta Compliance */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. WhatsApp & Meta Platform Compliance</h2>
            <p>
              Our services integrate with WhatsApp, a messaging platform provided by Meta Platforms, Inc. When you
              interact with us via WhatsApp, your communications are subject to Meta&rsquo;s privacy practices in
              addition to this policy.
            </p>
            <p className="mt-2">
              We use the WhatsApp Business API to send appointment reminders, booking confirmations, and
              promotional messages only to users who have opted in. You may opt out of WhatsApp communications
              at any time by replying &ldquo;STOP&rdquo; or contacting us directly.
            </p>
            <p className="mt-2">
              We do not share your WhatsApp phone number with third parties for their own marketing purposes.
              Your data is processed in accordance with Meta&rsquo;s Platform Terms and applicable data protection laws.
            </p>
          </section>

          {/* 5. Data Sharing & Disclosure */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Data Sharing & Disclosure</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our services (e.g., cloud hosting, analytics, payment processing)</li>
              <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid legal requests by public authorities</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion of our assets</li>
              <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your explicit consent</li>
            </ul>
          </section>

          {/* 6. Data Security */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal information
              against unauthorised access, alteration, disclosure, or destruction. These measures include encryption,
              access controls, and secure server infrastructure.
            </p>
            <p className="mt-2">
              However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot
              guarantee absolute security of your data.
            </p>
          </section>

          {/* 7. Data Retention */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes outlined in
              this Privacy Policy, or as required by applicable law. When we no longer need your information, we
              will securely delete or anonymise it.
            </p>
          </section>

          {/* 8. Your Rights */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The right to access, update, or delete your personal information</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
              <li>The right to lodge a complaint with a data protection authority</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, please contact us at{" "}
              <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#F5C518] hover:underline">
                {COMPANY.adminEmail}
              </a>.
            </p>
          </section>

          {/* 9. Third-Party Links */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or controlled by us.
              We are not responsible for the privacy practices of these third parties. We encourage you to review their
              privacy policies before providing any personal information.
            </p>
          </section>

          {/* 10. Children's Privacy */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Children&rsquo;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from children. If we become aware that a child has provided us with personal data, we will
              take steps to delete such information promptly.
            </p>
          </section>

          {/* 11. Changes to This Policy */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
              new policy on this page and updating the &ldquo;Last updated&rdquo; date. We encourage you to review this
              policy periodically.
            </p>
          </section>

          {/* 12. Contact Us */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">12. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
            </p>
            <div className="mt-3 space-y-1">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#F5C518] hover:underline">
                  {COMPANY.adminEmail}
                </a>
              </p>
              <p>
                <strong className="text-white">Sales Enquiries:</strong>{" "}
                <a href={`mailto:${COMPANY.salesEmail}`} className="text-[#F5C518] hover:underline">
                  {COMPANY.salesEmail}
                </a>
              </p>
              <p>
                <strong className="text-white">Address:</strong> {COMPANY.address}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
