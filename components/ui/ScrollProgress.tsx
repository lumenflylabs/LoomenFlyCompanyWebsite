"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setProgress(0);
        return;
      }
      setProgress(Math.min(scrollTop / docHeight, 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none"
      style={{ background: "rgba(245,197,24,0.15)" }}
    >
      <div
        className="h-full transition-[width] duration-100 ease-out"
        style={{
          width: `${progress * 100}%`,
          background:
            "linear-gradient(90deg, #C49400 0%, #F5C518 50%, #FFE57A 100%)",
          boxShadow: "0 0 8px rgba(245,197,24,0.5)",
        }}
      />
    </div>
  );
}
