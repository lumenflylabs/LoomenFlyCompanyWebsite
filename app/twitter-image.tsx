import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Loomenfly Labs — FlowDesk WhatsApp Booking Platform";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          position: "relative",
        }}
      >
        {/* Top bar with Branding & Legal Entity */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                backgroundColor: "#E51E25",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: "28px",
                fontWeight: 900,
              }}
            >
              L
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
                LOOMENFLY LABS LLP
              </span>
              <span style={{ fontSize: "14px", color: "#888888", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                LLPIN: ACZ-5532 • Kerala, India
              </span>
            </div>
          </div>

          <div
            style={{
              padding: "10px 20px",
              borderRadius: "9999px",
              backgroundColor: "rgba(229, 30, 37, 0.15)",
              border: "1px solid rgba(229, 30, 37, 0.4)",
              color: "#E51E25",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            FlowDesk Platform
          </div>
        </div>

        {/* Hero Title & Value Proposition */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "980px" }}>
          <div
            style={{
              fontSize: "62px",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Turn Your Messages <br />
            <span style={{ color: "#E51E25" }}>Into Automated Bookings.</span>
          </div>
          <p style={{ fontSize: "24px", color: "#A0A0A0", lineHeight: 1.4, margin: 0 }}>
            Official WhatsApp Business Cloud API automated booking infrastructure with dedicated owner management dashboard.
          </p>
        </div>

        {/* Footer info bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <span style={{ fontSize: "20px", color: "#FFD100", fontWeight: 800 }}>
              loomenflylabs.com
            </span>
            <span style={{ fontSize: "16px", color: "#666666" }}>•</span>
            <span style={{ fontSize: "16px", color: "#999999" }}>
              admin@loomenflylabs.com
            </span>
          </div>
          <span style={{ fontSize: "16px", color: "#888888" }}>
            WhatsApp Cloud API &amp; Meta Tech Provider Architecture
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
