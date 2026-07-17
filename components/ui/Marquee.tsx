import React from "react";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className = "" }: MarqueeProps) {
  // Duplicate the items array to ensure seamless looping
  const scrollItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative flex overflow-hidden border-y-2 border-[#18160E] bg-[#F5C518] py-4 ${className}`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {scrollItems.map((item, index) => (
          <span
            key={index}
            className="mx-4 text-xl font-heading font-black uppercase tracking-widest text-[#18160E]"
          >
            {item} <span className="mx-4 opacity-30">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
