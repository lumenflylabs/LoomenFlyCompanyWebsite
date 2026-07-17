import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 visual */}
        <div className="relative mb-8">
          <div className="text-[120px] font-heading font-extrabold text-[#F5C518]/10 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#1A1810] border-2 border-[#2A2A2A] flex items-center justify-center">
              <span className="text-3xl">🔍</span>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-heading font-bold text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          Let&rsquo;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-2.5 rounded-full bg-[#F5C518] text-[#000000] text-[13px] font-bold hover:bg-[#E0B000] transition-all duration-200"
          >
            ← Back to Home
          </Link>
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-[#2A2A2A] text-zinc-300 text-[13px] hover:text-white hover:border-white/30 transition-all duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
