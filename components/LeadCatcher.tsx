import { LEAD_CATCHER } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FeatureIcon, { type FeatureIconName } from "@/components/ui/FeatureIcon";

const FEATURE_ICONS: FeatureIconName[] = [
  "appointments",
  "services",
  "staff",
  "channels",
  "branches",
  "customers",
];
const FEATURE_DESCRIPTIONS = [
  "Keep bookings from every channel in the same schedule, so your team knows what’s next.",
  "Show customers what you offer and how long it takes. Spend less time answering the same pricing questions.",
  "Offer times around your team’s availability, breaks and time off instead of arranging every slot by hand.",
  "Book inside Telegram or open your booking page from a WhatsApp Business or Instagram reply link.",
  "Send customers to the right location with a branch link. Let walk-ins scan a QR code at reception.",
  "Keep customer details and past appointments together, so your team has context for the next visit.",
];

const BENTO_CONFIG = [
  {
    span: "md:col-span-2 lg:col-span-4",
    bg: "bg-[#111111]",
    text: "text-white",
    border: "border-transparent",
  },
  {
    span: "md:col-span-2 lg:col-span-2",
    bg: "bg-white",
    text: "text-[#000000]",
    border: "border-[#000000]/5",
  },
  {
    span: "md:col-span-2 lg:col-span-2",
    bg: "bg-white",
    text: "text-[#000000]",
    border: "border-[#000000]/5",
  },
  {
    span: "md:col-span-2 lg:col-span-4",
    bg: "bg-[#FFD100]",
    text: "text-[#000000]",
    border: "border-transparent",
  },
  {
    span: "md:col-span-2 lg:col-span-3",
    bg: "bg-white",
    text: "text-[#000000]",
    border: "border-[#000000]/5",
  },
  {
    span: "md:col-span-2 lg:col-span-3",
    bg: "bg-white",
    text: "text-[#000000]",
    border: "border-[#000000]/5",
  },
];

const FEATURE_TAGS = [
  "Appointments",
  "Service Menu",
  "Staff & Hours",
  "Booking Channels",
  "Branches & QR Codes",
  "Customer Records",
];

export default function LeadCatcher() {
  return (
    <section
      id="plans"
      className="relative bg-[#F6F5ED] text-[#000000] py-32 md:py-48 overflow-hidden border-t border-[#000000]/5"
    >
      <div className="max-w-[1400px] mx-auto px-[clamp(24px,5%,120px)]">
        {/* Intro Section */}
        <div className="mb-20 md:mb-32 max-w-[800px]">
          <ScrollReveal>
            <span className="font-sans font-bold text-[12px] text-[#E51E25] uppercase tracking-[0.2em] block mb-8">
              {LEAD_CATCHER.eyebrow}
            </span>
            <h2 className="font-heading text-[clamp(44px,6vw,80px)] leading-[1.1] mb-10 text-balance">
              {LEAD_CATCHER.headline}
            </h2>
            <p className="font-sans text-[clamp(18px,2vw,24px)] text-[#000000]/60 leading-relaxed">
              {LEAD_CATCHER.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {LEAD_CATCHER.features.map((feature, index) => {
            const config = BENTO_CONFIG[index % BENTO_CONFIG.length];
            const categoryTag = FEATURE_TAGS[index] || `Module 0${index + 1}`;

            return (
              <ScrollReveal
                key={index}
                delay={0.05 * index}
                className={`${config.span}`}
              >
                <div
                  className={`
                    w-full h-full ${index === 0 || index === 3 ? "min-h-[560px] md:min-h-[620px]" : "min-h-[340px] md:min-h-[400px]"} p-8 md:p-10
                    rounded-[32px] border ${config.border} ${config.bg} ${config.text}
                    shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]
                    flex flex-col justify-between group
                    transition-transform duration-500 hover:scale-[1.01]
                    relative overflow-hidden z-10
                  `}
                >
                  <div
                    className={`absolute top-20 -right-4 pointer-events-none ${index === 0 ? "text-white/[0.04]" : "text-[#000000]/[0.035]"}`}
                  >
                    <FeatureIcon
                      name={FEATURE_ICONS[index]}
                      className="w-40 h-40 md:w-48 md:h-48"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-12 relative z-20">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-10 h-10 rounded-full flex items-center justify-center border ${index === 0 ? "bg-white/5 border-white/15 text-[#FFD100]" : index === 3 ? "bg-white/30 border-black/10 text-[#000000]" : "bg-[#E51E25]/5 border-[#E51E25]/15 text-[#E51E25]"}`}
                      >
                        <FeatureIcon
                          name={FEATURE_ICONS[index]}
                          className="w-5 h-5"
                        />
                      </span>
                      <span className="font-mono font-semibold text-[11px] uppercase tracking-[0.15em] opacity-60">
                        {categoryTag}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`relative z-20 ${index === 0 || index === 3 ? "max-w-[90%] md:max-w-[65%] mb-auto" : "mt-auto"}`}
                  >
                    <h3 className="font-heading text-3xl md:text-[32px] leading-[1.15] text-balance">
                      {feature}
                    </h3>
                    <p
                      className={`font-sans text-sm md:text-[15px] leading-relaxed mt-5 ${index === 0 ? "text-white/65" : "text-[#000000]/60"}`}
                    >
                      {FEATURE_DESCRIPTIONS[index]}
                    </p>
                  </div>

                  {/* Pure CSS Dashboard UI Mockup */}
                  {index === 0 && (
                    <div className="relative mt-8 -mb-16 -mr-10 self-end w-full lg:absolute lg:mt-0 lg:mb-0 lg:mr-0 lg:-bottom-12 lg:-right-8 lg:w-[80%] max-w-[400px] h-[240px] shrink-0 bg-[#1A1A1A] border border-white/10 rounded-tl-2xl shadow-2xl rotate-3 transition-transform duration-700 group-hover:-rotate-1 group-hover:scale-105 z-10 flex flex-col p-6 overflow-hidden">
                      {/* Header */}
                      <div className="flex items-center justify-between gap-3 mb-6 text-white">
                        <span className="text-sm font-sans font-semibold">
                          Appointments
                        </span>
                        <span className="text-[10px] text-white/50">
                          Example dashboard
                        </span>
                      </div>
                      <div className="flex flex-col gap-3 text-white text-xs font-sans">
                        <div className="flex items-center justify-between gap-3 p-3 bg-white/5 rounded-lg">
                          <span className="text-[#FFD100]">10:00</span>
                          <span>Service appointment</span>
                          <span className="text-white/60">Confirmed</span>
                        </div>
                        <div className="flex items-center justify-between gap-3 p-3 bg-white/5 rounded-lg">
                          <span className="text-[#FFD100]">11:30</span>
                          <span>Follow-up appointment</span>
                          <span className="text-white/60">Confirmed</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pure CSS WhatsApp UI Mockup */}
                  {index === 3 && (
                    <div className="relative mt-8 -mb-16 -mr-10 self-end w-full lg:absolute lg:mt-0 lg:mb-0 lg:mr-0 lg:-bottom-12 lg:-right-8 lg:w-[70%] max-w-[300px] h-[300px] shrink-0 bg-[#EFEAE2] border border-black/10 rounded-tl-3xl shadow-2xl -rotate-3 transition-transform duration-700 group-hover:rotate-1 group-hover:scale-105 z-10 flex flex-col overflow-hidden">
                      {/* Header */}
                      <div className="bg-[#00A884] h-16 w-full flex items-center px-4 gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/30"></div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-white text-xs font-semibold">
                            Your business
                          </span>
                          <span className="text-white/80 text-[10px]">
                            Example greeting
                          </span>
                        </div>
                      </div>
                      {/* Chat Body */}
                      <div className="flex-1 p-4 flex flex-col gap-4">
                        <div className="self-end w-[75%] p-3 bg-[#D9FDD3] rounded-l-xl rounded-br-xl shadow-sm text-[11px] text-black">
                          Hi! How do I book?
                        </div>
                        <div className="self-start w-[90%] bg-white rounded-r-xl rounded-bl-xl shadow-sm flex flex-col p-3 gap-2 text-[11px] text-black leading-relaxed">
                          <span>
                            Welcome! Choose your service and a time using our
                            booking link.
                          </span>
                          <span className="mt-1 text-[#007C65] border-t border-black/5 pt-2 font-semibold">
                            Open booking page ↗
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
