import type { Metadata } from "next";
import { ABeeZee, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

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

const siteUrl = "https://www.loomenflylabs.com";

export const metadata: Metadata = {
  title: `${COMPANY.name} — ${COMPANY.tagline}`,
  description: COMPANY.description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/images/logo.jpeg",
  },
  openGraph: {
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    url: siteUrl,
    siteName: COMPANY.legalName,
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} Logo`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: ["/images/logo.jpeg"],
  },
  verification: {
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
  return (
    <html
      lang="en"
      className={`${abeezee.variable} ${plusJakartaSans.variable} ${playfair.variable} h-full antialiased scroll-smooth scroll-pt-[120px]`}
    >
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
            <p>Corporate Email: {COMPANY.adminEmail} | Official Phone: {COMPANY.phone}</p>
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
