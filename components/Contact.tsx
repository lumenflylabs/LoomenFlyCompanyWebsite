"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { COMPANY, CONTACT, ICON_MAP } from "@/lib/constants";
import * as Icons from "@/components/ui/HandDrawnIcons";

const BIZ_TYPES = [
  "Salon / Beauty Parlour",
  "Clinic / Healthcare",
  "Barbershop",
  "Cafe / Restaurant",
  "Hotel / Hospitality",
  "Nail Studio",
  "Retail Shop",
  "Other",
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [bizType, setBizType] = useState("");
  const [bizOpen, setBizOpen] = useState(false);
  const bizRef = useRef<HTMLDivElement>(null);
  const [toast, setToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (bizRef.current && !bizRef.current.contains(e.target as Node)) {
        setBizOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Custom Toast (replaces browser alert) ─────────────────────── */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 rounded-xl text-[13.5px] font-semibold shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-all duration-400 pointer-events-none ${
          toast.show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3"
        }`}
        style={{
          background: toast.message.startsWith("✅")
            ? "linear-gradient(135deg, #0A0A0A 0%, #1A1508 100%)"
            : "linear-gradient(135deg, #1A0A0A 0%, #2D1515 100%)",
          border: toast.message.startsWith("✅")
            ? "1px solid rgba(245,197,24,0.35)"
            : "1px solid rgba(239,68,68,0.3)",
          color: toast.message.startsWith("✅") ? "#F5C518" : "#FCA5A5",
        }}
      >
        {toast.message}
      </div>

      <section
        id="contact"
        className="py-[100px] px-[clamp(16px,6%,80px)] bg-[#FAF9F4]"
        ref={sectionRef}
      >
      <div className="text-center reveal">
        <SectionHeader
          eyebrow={CONTACT.eyebrow}
          headline={CONTACT.headline}
          subtitle={CONTACT.subtitle}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-start mt-[60px] max-w-5xl mx-auto">
        {/* Left - Contact Methods */}
        <div className="reveal">
          <h3 className="text-[17px] font-bold text-[#18160E] tracking-tight mb-4">
            Reach Out Directly
          </h3>
          <div className="flex flex-col gap-2.5 mb-5">
            {CONTACT.methods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                className="flex items-center gap-3.5 p-3.5 md:p-4 rounded-xl bg-white border border-[rgba(24,22,14,0.08)] shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-[#18160E] transition-all duration-220 hover:border-[rgba(245,197,24,0.3)] hover:shadow-[0_8px_32px_rgba(200,150,0,0.10)] hover:translate-x-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C49400]/10 flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const name = ICON_MAP[method.icon];
                    if (name) {
                      const IconComp = (Icons as any)[name];
                      return IconComp ? <IconComp className="w-5 h-5" /> : method.icon;
                    }
                    return <span className="text-lg">{method.icon}</span>;
                  })()}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#18160E]">
                    {method.label}
                  </div>
                  <div className="text-[12px] text-[rgba(24,22,14,0.4)]">{method.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-[#25D366] text-white font-heading font-bold text-[14.5px] transition-all duration-250 hover:bg-[#1EA855] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,211,102,0.25)]"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat With Us on WhatsApp
          </a>

          <div
            className="mt-5 p-4 rounded-xl"
            style={{
              background: "rgba(245,197,24,0.06)",
              border: "1px solid rgba(245,197,24,0.2)",
            }}
          >
            <p className="text-[13px] text-[rgba(24,22,14,0.6)] leading-relaxed">
              <strong className="text-[rgba(24,22,14,0.8)]">⚡ Fast Response</strong> — We
              respond to all enquiries within 24 business hours. For urgent
              matters, WhatsApp is fastest.
            </p>
          </div>
        </div>

        {/* Right - Merged Form (dark style from CustomSolutions) */}
        <div className="reveal d1">
          <div
            className="rounded-3xl p-8 md:p-9 backdrop-blur-md"
            style={{
              background: "linear-gradient(145deg, #0A0A0A 0%, #1A1508 50%, #0A0A0A 100%)",
              border: "1px solid rgba(245,197,24,0.15)",
            }}
          >
            <h3 className="text-white font-heading font-bold text-[19px] tracking-tight mb-6">
              Tell Us About Your Business
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const biz = (form.elements.namedItem("biz") as HTMLInputElement).value;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const type = (form.elements.namedItem("type") as HTMLSelectElement).value;
                const req = (form.elements.namedItem("req") as HTMLTextAreaElement).value;
                if (!name || !email || !type) {
                  setToast({ show: true, message: "Please fill in all required fields." });
                  setTimeout(() => setToast({ show: false, message: "" }), 3000);
                  return;
                }
                const subject = encodeURIComponent(
                  "Custom Plan Enquiry — " + (biz || name)
                );
                const body = encodeURIComponent(
                  "━━━ New Enquiry ━━━\n\n" +
                  "Business: " + (biz || "—") + "\n" +
                  "Name: " + name + "\n" +
                  "Email: " + email + "\n" +
                  "Type: " + type + "\n\n" +
                  "━━━ Requirements ━━━\n" +
                  (req || "—") + "\n\n" +
                  "━━━ Sent via lumenflylabs.com ━━━"
                );
                const recipients = [
                  COMPANY.salesEmail,
                  COMPANY.techEmail,
                  COMPANY.successEmail,
                  COMPANY.adminEmail,
                ].join(",");
                // Use location.href instead of window.open to avoid
                // opening a blank tab and stealing browser focus
                window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
                setToast({
                  show: true,
                  message: "✅ Enquiry sent! We'll reach out within 24 hours.",
                });
                setTimeout(() => setToast({ show: false, message: "" }), 5000);
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="mb-3.5">
                  <label className="block text-[11px] font-bold text-white/45 uppercase tracking-wide mb-1.5">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="biz"
                    placeholder="e.g. Glamour Studio"
                    className="w-full px-3.5 py-2.5 rounded-lg text-[13.5px] text-white font-sans outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.09)",
                    }}
                  />
                </div>
                <div className="mb-3.5">
                  <label className="block text-[11px] font-bold text-white/45 uppercase tracking-wide mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg text-[13.5px] text-white font-sans outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.09)",
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="mb-3.5">
                  <label className="block text-[11px] font-bold text-white/45 uppercase tracking-wide mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg text-[13.5px] text-white font-sans outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.09)",
                    }}
                  />
                </div>
                <div className="mb-3.5 relative" ref={bizRef}>
                  <label className="block text-[11px] font-bold text-white/45 uppercase tracking-wide mb-1.5">
                    Business Type *
                  </label>
                  {/* Hidden native select for form submission */}
                  <select name="type" required className="hidden" value={bizType} onChange={() => {}}>
                    <option value="">Select type...</option>
                    {BIZ_TYPES.map((t) => (
                      <option key={t} value={t} />
                    ))}
                  </select>
                  {/* Custom dropdown trigger */}
                  <button
                    type="button"
                    onClick={() => setBizOpen((o) => !o)}
                    className="w-full px-3.5 py-2.5 rounded-lg text-[13.5px] font-sans text-left flex items-center justify-between gap-2 cursor-pointer transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: bizOpen ? "1px solid rgba(245,197,24,0.5)" : "1px solid rgba(255,255,255,0.09)",
                      boxShadow: bizOpen ? "0 0 0 3px rgba(245,197,24,0.08)" : "none",
                      color: bizType ? "#fff" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    <span>{bizType || "Select type..."}</span>
                    <svg
                      className={`w-3.5 h-3.5 text-white/40 transition-transform duration-200 ${bizOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Dropdown panel */}
                  {bizOpen && (
                    <div
                      className="absolute z-20 left-0 right-0 mt-1 rounded-lg overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                      style={{
                        background: "#1A1508",
                        border: "1px solid rgba(245,197,24,0.15)",
                      }}
                    >
                      {BIZ_TYPES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => {
                            setBizType(t);
                            setBizOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2.5 text-[13.5px] font-sans transition-all duration-150 cursor-pointer ${
                            bizType === t
                              ? "text-white bg-[rgba(245,197,24,0.12)]"
                              : "text-white/70 hover:text-white hover:bg-[rgba(255,255,255,0.04)]"
                          }`}
                          style={
                            bizType === t
                              ? { borderLeft: "3px solid #F5C518" }
                              : { borderLeft: "3px solid transparent" }
                          }
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[11px] font-bold text-white/45 uppercase tracking-wide mb-1.5">
                  Describe Your Requirements
                </label>
                <textarea
                  name="req"
                  placeholder="Number of locations, current challenges, specific features you need..."
                  className="w-full px-3.5 py-2.5 rounded-lg text-[13.5px] text-white font-sans outline-none transition-all duration-200 resize-y min-h-[100px]"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#F5C518] to-[#C49400] text-[#0A0A0A] font-heading font-bold text-[14.5px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(200,150,0,0.4)] mt-1"
              >
                Send My Requirements
              </button>
            </form>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
