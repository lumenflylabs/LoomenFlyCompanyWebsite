import React from "react";
import type { Metadata } from "next";
import DataDeletionPage from "@/app/data-deletion/page";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: `User Data Deletion Instructions | ${COMPANY.legalName}`,
  },
  description: `Step-by-step instructions on how users can request data deletion for FlowDesk and WhatsApp integrations provided by ${COMPANY.name} (${COMPANY.legalName}) in accordance with Meta Platform Terms.`,
  alternates: {
    canonical: "https://www.loomenflylabs.com/data-deletion-instructions",
  },
  openGraph: {
    title: `User Data Deletion Instructions | ${COMPANY.legalName}`,
    description: `Official User Data Deletion Instructions for ${COMPANY.name} (${COMPANY.legalName}) and FlowDesk WhatsApp integrations.`,
    url: "https://www.loomenflylabs.com/data-deletion-instructions",
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

export default function DataDeletionInstructionsPage() {
  return <DataDeletionPage />;
}
