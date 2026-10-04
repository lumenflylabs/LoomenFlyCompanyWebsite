import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const SITE_URL = "https://www.loomenflylabs.com";

export const SEO_PAGES = {
  home: {
    path: "/",
    title: "Loomenfly Labs | LoomenDesk Appointment Booking Software",
    description: "LoomenDesk by Loomenfly Labs: appointment booking software with Telegram booking, WhatsApp and Instagram booking links, and one dashboard for your business.",
  },
  about: {
    path: "/about",
    title: "About Loomenfly Labs | The Team Behind LoomenDesk",
    description: "Meet Loomenfly Labs, the Kerala software company behind LoomenDesk. Learn about our team and appointment booking software for businesses and service teams.",
  },
  contact: {
    path: "/contact",
    title: "Contact Loomenfly Labs | Book a LoomenDesk Demo",
    description: "Contact Loomenfly Labs to book a LoomenDesk demo, discuss appointment booking for your business, or get help with setup and technical support.",
  },
  privacy: {
    path: "/privacy-policy",
    title: "Privacy Policy | Loomenfly Labs",
    description: "How Loomenfly Labs collects, uses and protects personal data for the LoomenDesk booking platform and its enabled messaging integrations.",
  },
  terms: {
    path: "/terms-of-service",
    title: "Terms of Service | Loomenfly Labs",
    description: "Read the terms for using LoomenDesk and Loomenfly Labs software services, including subscriptions, responsibilities and messaging integrations.",
  },
  deletion: {
    path: "/data-deletion",
    title: "Data Deletion Instructions | Loomenfly Labs",
    description: "Request deletion of your LoomenDesk data. Find Loomenfly Labs contact details, the request process and information about connected messaging services.",
  },
} as const;

export function getPageMetadata(page: keyof typeof SEO_PAGES): Metadata {
  const { path, title, description } = SEO_PAGES[page];
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: COMPANY.name,
      locale: "en_IN",
      type: "website",
      images: [{
        url: `${SITE_URL}/images/og-booking.png`,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "LoomenDesk appointment booking software by Loomenfly Labs",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/images/og-booking.png`],
    },
  };
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
