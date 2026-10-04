import type { Metadata } from "next";
import { ABeeZee, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants";
import { SEO_PAGES, SITE_URL, serializeJsonLd } from "@/lib/seo";

const abeezee = ABeeZee({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SEO_PAGES.home.title,
    template: `%s | ${COMPANY.name}`,
  },
  description: SEO_PAGES.home.description,
  applicationName: "LoomenDesk",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg?v=round-2",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    siteName: COMPANY.name,
    images: [
      {
        url: "https://www.loomenflylabs.com/images/og-booking.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `${COMPANY.name} — ${COMPANY.tagline}`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.loomenflylabs.com/images/og-booking.png"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      "facebook-domain-verification": "067by66wm4xvz067lskbpnhu55kc9r",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: COMPANY.name,
    alternateName: "Loomenflylabs",
    legalName: COMPANY.legalName,
    url: siteUrl,
    logo: `${siteUrl}/images/apple-touch-icon.png`,
    description: "Loomenfly Labs is a software company in Kerala, India, and the developer of LoomenDesk appointment booking software.",
    email: COMPANY.adminEmail,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Door No. 150, Gurusadanam, Ala P.O, Chengannur, Ala (Alappuzha), Chengannur Police Station",
      addressLocality: "Chengannur, Alappuzha",
      addressRegion: "Kerala",
      postalCode: "689126",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY.phone,
        contactType: "customer service",
        email: COMPANY.adminEmail,
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        telephone: COMPANY.altPhone,
        contactType: "technical support",
        email: COMPANY.techEmail,
        areaServed: "IN",
      },
    ],
    sameAs: [
      COMPANY.socials.instagram,
      COMPANY.socials.x,
    ],
  };

  return (
    <html
      lang="en"
      className={`${abeezee.variable} ${plusJakartaSans.variable} ${playfair.variable} h-full antialiased scroll-smooth scroll-pt-[120px]`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F6F5ED] text-[#000000] relative">
        
        {/* Global Editorial Film Grain */}
        <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.04]">
          <svg className="absolute inset-0 w-full h-full">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Static Crawler Fallback for Raw Non-JS Scrapers */}
        <noscript>
          <div style={{ padding: "40px 20px", background: "#0a0a0a", color: "#ffffff", fontFamily: "sans-serif" }}>
            <h2>{COMPANY.legalName}</h2>
            <p>LLPIN: {COMPANY.llpin} | MSME Udyam: {COMPANY.udyam}</p>
            <p>Registered Address: {COMPANY.address}</p>
            <p>Corporate Email: {COMPANY.adminEmail} | Official Phone: {COMPANY.phone} / {COMPANY.altPhone}</p>
            <p>{COMPANY.disclaimer}</p>
            <p>
              <a href="/privacy-policy" style={{ color: "#FFD100" }}>Privacy Policy</a> | {" "}
              <a href="/terms-of-service" style={{ color: "#FFD100" }}>Terms of Service</a> | {" "}
              <a href="/data-deletion" style={{ color: "#FFD100" }}>Data Deletion Instructions</a> | {" "}
              <a href="/about" style={{ color: "#FFD100" }}>About Us</a> | {" "}
              <a href="/contact" style={{ color: "#FFD100" }}>Contact Us</a>
            </p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
