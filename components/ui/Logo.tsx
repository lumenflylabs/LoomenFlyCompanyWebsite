import React from "react";
import Image from "next/image";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-full flex items-center justify-center bg-[#0C0D10] ${className}`}>
      <Image 
        src="/images/logo.jpeg" 
        alt="Loomenfly Labs Logo" 
        width={400} 
        height={400} 
        quality={100}
        className="w-full h-full object-cover scale-[1.4]"
        priority
        unoptimized
      />
    </div>
  );
}
