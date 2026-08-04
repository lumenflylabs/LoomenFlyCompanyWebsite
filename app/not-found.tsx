import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex-1 min-h-[70vh] flex items-center justify-center px-6 py-32 bg-[#F6F5ED]">
      <div className="text-center max-w-lg mx-auto">
        {/* 404 visual */}
        <div className="relative mb-8">
          <div className="text-[120px] md:text-[140px] font-heading font-extrabold text-[#E51E25]/10 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white border border-[#111111]/10 shadow-sm flex items-center justify-center">
              <span className="text-3xl">🔍</span>
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-heading font-medium text-[#111111] mb-4">
          Page Not Found
        </h1>
        <p className="text-[#111111]/70 font-sans text-base leading-relaxed mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-3.5 rounded-full bg-[#111111] hover:bg-[#E51E25] text-white text-[14px] font-sans font-medium transition-all duration-200 shadow-sm"
          >
            &larr; Back to Home
          </Link>
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-[#111111]/20 bg-white text-[#111111] text-[14px] font-sans font-medium hover:bg-[#111111]/5 transition-all duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

