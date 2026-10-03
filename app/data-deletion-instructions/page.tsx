import React from "react";
import type { Metadata } from "next";
import DataDeletionPage from "@/app/data-deletion/page";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: `User Data Deletion Instructions | ${COMPANY.legalName}`,
  },
  description: `Step-by-step instructions on how users can request data deletion for LoomenDesk and WhatsApp integrations provided by ${COMPANY.name} (${COMPANY.legalName}) in accordance with Meta Platform Terms.`,
  alternates: {
    canonical: "https://www.loomenflylabs.com/data-deletion-instructions",
  },
  openGraph: {
    title: `User Data Deletion Instructions | ${COMPANY.legalName}`,
    description: `Official User Data Deletion Instructions for ${COMPANY.name} (${COMPANY.legalName}) and LoomenDesk WhatsApp integrations.`,
    url: "https://www.loomenflylabs.com/data-deletion-instructions",
    siteName: COMPANY.legalName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.loomenflylabs.com/images/og-booking.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `User Data Deletion Instructions | ${COMPANY.legalName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `User Data Deletion Instructions | ${COMPANY.legalName}`,
    description: `Official User Data Deletion Instructions for ${COMPANY.name} (${COMPANY.legalName}) and LoomenDesk WhatsApp integrations.`,
    images: ["https://www.loomenflylabs.com/images/og-booking.png"],
  },
};

export default function DataDeletionInstructionsPage() {
  return <DataDeletionPage />;
}
