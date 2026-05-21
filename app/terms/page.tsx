import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms of Service | ${COMPANY.name}`,
  description: `Terms of Service for ${COMPANY.legalName}. Read our terms governing the use of our website and WhatsApp automation services.`,
};

export default function TermsPage() {
  return (
    <div className="flex-1 bg-[#0A0A0A] pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#F5C518] mb-3">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-zinc-400 text-sm">
            Last updated: January 1, 2025
          </p>
        </div>

        <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
          {/* 1. Acceptance */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website, services, or WhatsApp automation solutions provided by{" "}
              {COMPANY.legalName} (&ldquo;Lumenfly,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;), you agree to be bound by these
              Terms of Service (&ldquo;Terms&rdquo;). If you do not agree, please do not use our services.
            </p>
            <p className="mt-2">
              We reserve the right to update these Terms at any time. Continued use after changes constitutes acceptance
              of the revised Terms.
            </p>
          </section>

          {/* 2. Services */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Description of Services</h2>
            <p>
              Lumenfly provides WhatsApp Business API automation solutions, including but not limited to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <a href="/#plans" className="text-[#F5C518] hover:underline">The Lead Catcher</a>{" "}
                — WhatsApp Meta Flow booking bots
              </li>
              <li>
                <a href="/#addons" className="text-[#F5C518] hover:underline">No-Show Protector</a>{" "}
                — Automated appointment reminders and follow-ups
              </li>
              <li>Google Calendar integration and sync</li>
              <li>
                <a href="/#addons" className="text-[#F5C518] hover:underline">Multi-Stylist Routing</a>{" "}
                — Multi-stylist routing and scheduling
              </li>
              <li>
                <a href="/#addons" className="text-[#F5C518] hover:underline">Advance Deposits</a>{" "}
                — Advance deposit and payment collection via Razorpay
              </li>
              <li>
                <a href="/#addons" className="text-[#F5C518] hover:underline">Festive Broadcaster</a>{" "}
                — WhatsApp marketing and broadcast tools
              </li>
            </ul>
            <p className="mt-2">
              Services are provided on a subscription basis unless otherwise agreed in writing.
            </p>
          </section>

          {/* 3. User Obligations */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. User Obligations</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Provide accurate and complete information when registering or using our services</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services in compliance with all applicable laws and Meta&rsquo;s Platform Terms</li>
              <li>Not use our services for spam, fraud, or any unlawful purpose</li>
              <li>Not attempt to reverse-engineer, disrupt, or abuse our systems</li>
            </ul>
          </section>

          {/* 4. WhatsApp & Meta Compliance */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. WhatsApp & Meta Platform Compliance</h2>
            <p>
              Our services operate on the WhatsApp Business API. By using our services, you agree to comply with:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Meta&rsquo;s WhatsApp Business Terms of Service</li>
              <li>Meta&rsquo;s Commerce and Business Messaging Policies</li>
              <li>All applicable data protection and privacy laws</li>
            </ul>
            <p className="mt-2">
              You are responsible for obtaining necessary consents from your customers before sending them
              WhatsApp messages through our platform. We reserve the right to suspend or terminate services
              if we determine, in our sole discretion, that your usage violates Meta&rsquo;s policies.
            </p>
          </section>

          {/* 5. Payment & Billing */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Payment & Billing</h2>
            <p>
              Subscription fees are billed monthly or annually as agreed at the time of purchase. Payments are
              processed securely through our payment partners. All fees are non-refundable except as expressly
              stated in our Refund Policy.
            </p>
            <p className="mt-2">
              We reserve the right to change our pricing with 30 days&rsquo; notice. Continued use after the
              price change constitutes acceptance of the new pricing.
            </p>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Intellectual Property</h2>
            <p>
              All content, branding, software, and technology provided by Lumenfly are the intellectual property
              of {COMPANY.legalName}. You are granted a limited, non-exclusive, non-transferable license to use
              our services for your business operations.
            </p>
            <p className="mt-2">
              You retain all rights to your business data and customer information. We do not claim ownership
              over any content you provide through our platform.
            </p>
          </section>

          {/* 7. Data & Privacy */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Data & Privacy</h2>
            <p>
              Our collection and use of personal data is governed by our{" "}
              <a href="/privacy" className="text-[#F5C518] hover:underline">Privacy Policy</a>.
              By using our services, you consent to the data practices described in that policy.
            </p>
          </section>

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {COMPANY.legalName} shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of or related to your use of
              our services. Our total liability shall not exceed the amount paid by you in the 12 months
              preceding the claim.
            </p>
          </section>

          {/* 9. Termination */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Termination</h2>
            <p>
              Either party may terminate the service agreement with 30 days&rsquo; written notice. We may
              terminate or suspend access immediately if you violate these Terms or Meta&rsquo;s policies.
              Upon termination, your data will be exported or deleted per your instructions within 30 days.
            </p>
          </section>

          {/* 10. Governing Law */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
              arising under these Terms shall be subject to the exclusive jurisdiction of the courts in
              Alappuzha, Kerala.
            </p>
          </section>

          {/* 11. Contact */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Contact Us</h2>
            <p>
              For questions about these Terms, please contact us:
            </p>
            <div className="mt-3 space-y-1">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href={`mailto:${COMPANY.adminEmail}`} className="text-[#F5C518] hover:underline">
                  {COMPANY.adminEmail}
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
