import Image from "next/image";

export default function Logo({
  className = "w-10 h-10",
}: {
  className?: string;
}) {
  return (
    <span
      className={`brand-symbol ${className}`}
      style={{
        position: "relative",
        display: "inline-block",
        flexShrink: 0,
        overflow: "hidden",
        background: "white",
        borderRadius: "50%",
        border: "1.5px solid #E51E25",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <span style={{ position: "absolute", inset: "21%", overflow: "hidden" }}>
        <Image
          src="/images/brand-reference.png"
          alt="Loomenfly Labs"
          width={1254}
          height={1254}
          unoptimized
          className="brand-symbol-image"
          style={{
            position: "absolute",
            width: "233.955%",
            height: "auto",
            maxWidth: "none",
            left: "-73.507%",
            top: "-49.416%",
          }}
        />
      </span>
    </span>
  );
}
