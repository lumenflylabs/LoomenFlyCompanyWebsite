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

const siteUrl = "https://loomenflylabs.com";

export const metadata: Metadata = {
  title: `${COMPANY.name} — ${COMPANY.tagline}`,
  description: COMPANY.description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
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
      </body>
    </html>
  );
}
