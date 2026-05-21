import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Refund & Cancellation Policy | ${COMPANY.name}`,
  description: `Refund and cancellation policy for ${COMPANY.legalName}. Learn about our refund terms, cancellation process, and payment policies.`,
};

export default function RefundPage() {
  return (
    <div className="flex-1 bg-[#0A0A0A] pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#F5C518] mb-3">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-zinc-400 text-sm">
            Last updated: January 1, 2025
          </p>
        </div>

        <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
          {/* 1. Overview */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Overview</h2>
            <p>
              This Refund & Cancellation Policy governs all payments, subscriptions, and deposits processed
              through {COMPANY.legalName} (&ldquo;Lumenfly,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By
              purchasing our services, you agree to the terms outlined below.
            </p>
          </section>

          {/* 2. Subscription Services */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Subscription Services</h2>
            <h3 className="text-white font-medium mb-2">Monthly Subscriptions</h3>
            <p>
              Monthly subscriptions are billed on a recurring basis. You may cancel at any time. Upon
              cancellation, the service will remain active until the end of the current billing period.
              No partial refunds will be issued for the remaining days of the billing cycle.
            </p>
            <h3 className="text-white font-medium mt-4 mb-2">Annual Subscriptions</h3>
            <p>
              Annual subscriptions are billed upfront. If you cancel within the first 14 days of the
              initial purchase, you are eligible for a full refund. After 14 days, no refund will be
              issued for the remaining months, but the service will remain active until the end of the
              paid annual term.
            </p>
          </section>

          {/* 3. Advance Deposits (End-Customer Payments) */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Advance Deposits (End-Customer Payments)</h2>
            <p>
              Lumenfly processes advance deposit payments on behalf of our business clients through Razorpay.
              These deposits are collected to secure bookings for high-demand services.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Cancellation by Customer:</strong> If a customer cancels a booking at least 24 hours
                before the scheduled time, the deposit is fully refundable. Cancellations within 24 hours
                may result in forfeiture of the deposit, at the discretion of the business.
              </li>
              <li>
                <strong>Cancellation by Business:</strong> If the business cancels or reschedules, the
                customer is entitled to a full refund of the deposit.
              </li>
              <li>
                <strong>Refund Processing:</strong> Refunds are processed within 5–7 business days to the
                original payment method.
              </li>
            </ul>
          </section>

          {/* 4. Setup & Onboarding Fees */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Setup & Onboarding Fees</h2>
            <p>
              One-time setup or onboarding fees are non-refundable once the onboarding process has begun.
              If you cancel before onboarding starts, the setup fee may be refunded at our discretion.
            </p>
          </section>

          {/* 5. How to Request a Refund */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. How to Request a Refund</h2>
            <p>To request a refund or cancellation, please contact us:</p>
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
            </div>
            <p className="mt-3">
              Please include your account details and reason for the refund request. We will respond
              within 3–5 business days.
            </p>
          </section>

          {/* 6. Chargebacks */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Chargebacks</h2>
            <p>
              If you dispute a charge through your bank or payment provider without first contacting us,
              we reserve the right to suspend your account until the dispute is resolved. We encourage
              you to contact us first — we will work with you to resolve any billing issues.
            </p>
          </section>

          {/* 7. Changes to This Policy */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this Refund & Cancellation Policy from time to time. Changes will be posted
              on this page with an updated &ldquo;Last updated&rdquo; date. For material changes, we will
              notify you via email.
            </p>
          </section>

          {/* 8. Contact */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Contact Us</h2>
            <p>
              If you have any questions about this policy, please reach out:
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
