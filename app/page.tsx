import { getPageMetadata, SEO_PAGES, SITE_URL, serializeJsonLd } from "@/lib/seo";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import LeadCatcher from "@/components/LeadCatcher";
import PremiumAddons from "@/components/PremiumAddons";
import TrustFlow from "@/components/TrustFlow";
import About from "@/components/About";
import CustomSolutions from "@/components/CustomSolutions";
import Contact from "@/components/Contact";
import { COMPANY } from "@/lib/constants";

export const metadata = getPageMetadata("home");

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: COMPANY.name,
        alternateName: "Loomenflylabs",
        inLanguage: "en-IN",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#loomendesk`,
        name: "LoomenDesk",
        url: `${SITE_URL}/`,
        description: SEO_PAGES.home.description,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        publisher: { "@id": `${SITE_URL}/#organization` },
        featureList: [
          "Interactive appointment booking in Telegram",
          "Browser booking links shared through WhatsApp Business and Instagram replies",
          "Service menus, prices and durations",
          "Staff schedules, breaks and time off",
          "Branch booking links and reception QR codes",
          "Customer details and booking history",
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
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
