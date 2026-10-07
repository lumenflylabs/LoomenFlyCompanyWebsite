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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.json",
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
    name: "Loomenfly Labs LLP",
    alternateName: [
      "Loomenfly Labs",
      "LoomenflyLabsLLP",
      "Loomenfly",
      "LoomenDesk",
    ],
    legalName: COMPANY.legalName,
    url: siteUrl,
    logo: `${siteUrl}/icon-512.png`,
    image: `${siteUrl}/icon-512.png`,
    description:
      "Software company and creators of LoomenDesk appointment booking software.",
    email: COMPANY.adminEmail,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Door No. 150, Gurusadanam, Ala P.O, Chengannur, Ala (Alappuzha), Chengannur Police Station",
      addressLocality: "Chengannur, Alappuzha",
      addressRegion: "Kerala",
      postalCode: "689126",
      addressCountry: "IN",
    },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "LLPIN",
        value: COMPANY.llpin,
      },
      {
        "@type": "PropertyValue",
        name: "MSME Udyam",
        value: COMPANY.udyam,
      },
      {
        "@type": "PropertyValue",
        name: "PAN",
        value: COMPANY.pan,
      },
    ],
    founder: [
      {
        "@type": "Person",
        name: "Gokul Surendran",
        jobTitle: "Designated Partner & CEO",
      },
      {
        "@type": "Person",
        name: "MS Mohammed Hashiq",
        jobTitle: "Designated Partner & CTO",
      },
      {
        "@type": "Person",
        name: "Saheeda Menamthuruthil Muhammed",
        jobTitle: "Designated Partner & COO",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY.phone,
        contactType: "customer service",
        email: COMPANY.adminEmail,
        areaServed: "IN",
        availableLanguage: ["en", "ml"],
      },
      {
        "@type": "ContactPoint",
        telephone: COMPANY.altPhone,
        contactType: "technical support",
        email: COMPANY.techEmail,
        areaServed: "IN",
        availableLanguage: ["en", "ml"],
      },
    ],
    sameAs: [
      COMPANY.socials.instagram,
      COMPANY.socials.x,
      "https://www.falconebiz.biz/company/loomenfly-labs-llp-acz-5532",
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
