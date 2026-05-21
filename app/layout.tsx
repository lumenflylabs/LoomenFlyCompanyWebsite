import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://lumenflylabs.com";

export const metadata: Metadata = {
  title: "Lumenfly Labs — Turn WhatsApp Into Your Front Desk",
  description:
    "Automate bookings, customer follow-ups, reminders, and promotions — all through WhatsApp. Lumenfly Labs builds intelligent WhatsApp bots for businesses.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Lumenfly Labs",
    title: "Lumenfly Labs — Turn WhatsApp Into Your Front Desk",
    description:
      "Automate every booking, follow-up, and reminder through WhatsApp. 24/7.",
    url: siteUrl,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Lumenfly Labs — Turn WhatsApp Into Your Front Desk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumenfly Labs — Turn WhatsApp Into Your Front Desk",
    description:
      "Automate every booking, follow-up, and reminder through WhatsApp. 24/7.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${sora.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F4] text-[#18160E]">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
