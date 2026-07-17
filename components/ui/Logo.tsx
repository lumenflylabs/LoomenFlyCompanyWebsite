import React from "react";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dark background circle */}
      <circle cx="50" cy="50" r="48" fill="#18160E" />
      
      {/* Firefly Body */}
      <path d="M50 20C46 20 42 24 42 28C42 32 46 36 50 36C54 36 58 32 58 28C58 24 54 20 50 20Z" fill="#F6F5ED" />
      <path d="M44 38C40 38 38 44 38 50C38 58 44 64 50 64C56 64 62 58 62 50C62 44 60 38 56 38H44Z" fill="#F6F5ED" />
      
      {/* Firefly Glowing Tail (Yellow) */}
      <path d="M40 66C40 76 46 84 50 84C54 84 60 76 60 66H40Z" fill="#FFD100" />
      
      {/* Wings */}
      <path d="M42 40C30 40 20 46 20 54C20 62 30 52 42 50V40Z" fill="#F6F5ED" opacity="0.9" />
      <path d="M58 40C70 40 80 46 80 54C80 62 70 52 58 50V40Z" fill="#F6F5ED" opacity="0.9" />
      <path d="M42 44C26 48 16 58 16 66C16 74 26 62 42 58V44Z" fill="#F6F5ED" opacity="0.6" />
      <path d="M58 44C74 48 84 58 84 66C84 74 74 62 58 58V44Z" fill="#F6F5ED" opacity="0.6" />
      
      {/* Antennae */}
      <path d="M48 22C46 16 42 12 38 12" stroke="#F6F5ED" strokeWidth="2" strokeLinecap="round" />
      <path d="M52 22C54 16 58 12 62 12" stroke="#F6F5ED" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
