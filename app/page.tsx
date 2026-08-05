import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import LeadCatcher from "@/components/LeadCatcher";
import PremiumAddons from "@/components/PremiumAddons";
import TrustFlow from "@/components/TrustFlow";
import About from "@/components/About";
import CustomSolutions from "@/components/CustomSolutions";
import Contact from "@/components/Contact";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${COMPANY.name} — ${COMPANY.tagline}`,
  description: COMPANY.description,
  alternates: {
    canonical: "https://www.loomenflylabs.com/",
  },
  openGraph: {
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    url: "https://www.loomenflylabs.com/",
    siteName: COMPANY.legalName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `${COMPANY.name} — ${COMPANY.tagline}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <LeadCatcher />
      <PremiumAddons />
      <TrustFlow />
      <About />
      <CustomSolutions />
      <Contact />
    </>
  );
}