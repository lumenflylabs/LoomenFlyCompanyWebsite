import { COMPANY, HERO } from "@/lib/constants";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-36 pb-20 md:px-12 md:pt-40 md:pb-24"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 70%, #F6F5ED 100%)",
      }}
    >
      <div className="w-full flex flex-col items-center justify-center">
        {/* Main Headline */}
        <div className="relative max-w-[1000px] mx-auto mb-6 z-10">
          <h1 className="font-heading text-[clamp(40px,6vw,84px)] leading-[1.1] text-balance text-center text-[#000000]">
            Turn Messages Into Bookings <br /> with{" "}
            <span className="text-[#E51E25] relative inline-block pr-2">
              LoomenDesk
              <svg
                className="absolute -bottom-2 left-0 w-full h-[14px] pointer-events-none"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0,10 Q50,0 100,10"
                  fill="none"
                  stroke="#FFD100"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="font-sans font-medium text-[clamp(16px,2vw,22px)] text-[#000000]/60 max-w-[700px] mx-auto text-balance leading-relaxed relative z-10 text-center mb-10">
          {HERO.subtitle}
        </p>

        <p className="font-sans text-sm text-[#000000]/70 text-center max-w-[700px] mb-8 leading-relaxed">
          No Meta API messaging charges for our standard Telegram and
          booking-link setup.
          <span className="block text-xs text-[#000000]/50 mt-2">
            LoomenDesk setup and subscription fees apply. Optional WhatsApp
            Cloud API messaging has separate costs.
          </span>
        </p>

        {/* Hero Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#111111] hover:bg-[#E51E25] text-white font-sans font-semibold text-[15px] rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group"
          >
            <span>Book a Live Demo</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <Link
            href="/about"
            className="px-8 py-4 bg-white hover:bg-[#111111]/5 border border-[#111111]/15 text-[#111111] font-sans font-medium text-[15px] rounded-full transition-all duration-300"
          >
            About Loomenfly Labs
          </Link>
        </div>

        {/* Direct Corporate Inquiries Badge */}
        <div className="mt-8 z-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-sans text-xs text-[#000000]/60">
          <span>
            Official Inquiries:{" "}
            <a
              href={`mailto:${COMPANY.adminEmail}`}
              className="font-mono text-[#E51E25] hover:underline"
            >
              {COMPANY.adminEmail}
            </a>
          </span>
          <span className="hidden sm:inline text-[#000000]/20">&bull;</span>
          <span>
            Phone:{" "}
            <a href={`tel:${COMPANY.phone}`} className="hover:text-[#000000]">
              {COMPANY.phone}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
