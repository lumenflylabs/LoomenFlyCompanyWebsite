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
      <span
        className={`inline-block text-xs font-semibold tracking-widest uppercase mb-5 ${
          dark ? "text-[#C49400]" : "text-[#C49400]"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-heading font-bold leading-[1.15] tracking-tight mb-5 ${
          dark ? "text-white" : "text-[#000000]"
        } text-[clamp(28px,3.8vw,48px)]`}
        style={{ whiteSpace: "pre-line" }}
      >
        {headline}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed max-w-[560px] ${
            center ? "mx-auto" : ""
          } ${dark ? "text-white/45" : "text-[rgba(24,22,14,0.55)]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}