interface SectionHeaderProps {
  eyebrow: string;
  headline: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  headline,
  subtitle,
  center = true,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={`${center ? "text-center" : ""} max-w-3xl ${center ? "mx-auto" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase mb-4 ${
          dark
            ? "border-[#C49400]/35 text-[#C49400] bg-[#C49400]/10"
            : "border-[#C49400]/30 text-[#C49400] bg-[#C49400]/10"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#C49400] animate-pulse" />
        {eyebrow}
      </div>
      <h2
        className={`font-heading font-extrabold leading-[1.12] tracking-tight mb-3 ${
          dark ? "text-white" : "text-[#18160E]"
        } text-[clamp(26px,3.6vw,46px)]`}
        style={{ whiteSpace: "pre-line" }}
      >
        {headline}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-[16.5px] leading-relaxed max-w-[540px] ${
            center ? "mx-auto" : ""
          } ${dark ? "text-white/55" : "text-[rgba(24,22,14,0.6)]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
