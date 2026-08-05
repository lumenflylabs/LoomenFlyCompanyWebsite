import React from "react";
import type { Metadata } from "next";
import AboutPage from "@/app/about/page";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: `About Us | ${COMPANY.legalName}`,
  },
  description: `Learn about ${COMPANY.name} (${COMPANY.legalName}), our mission, MCA Designated Partners, and our flagship product FlowDesk.`,
  alternates: {
    canonical: "https://www.loomenflylabs.com/about-us",
  },
  openGraph: {
    title: `About Us | ${COMPANY.legalName}`,
    description: `Official Corporate Profile of ${COMPANY.legalName} (${COMPANY.name}), leadership team, and software ecosystem.`,
    url: "https://www.loomenflylabs.com/about-us",
    siteName: COMPANY.legalName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.loomenflylabs.com/images/og-banner.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `About Us | ${COMPANY.legalName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us | ${COMPANY.legalName}`,
    description: `Official Corporate Profile of ${COMPANY.legalName} (${COMPANY.name}), leadership team, and software ecosystem.`,
    images: ["https://www.loomenflylabs.com/images/og-banner.png"],
  },
};

export default function AboutUsPage() {
  return <AboutPage />;
}
