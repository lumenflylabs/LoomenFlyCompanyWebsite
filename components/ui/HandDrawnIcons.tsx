// Hand-drawn style SVG icons that look human-made
// These replace generic emoji icons with illustrations that feel
// like they were drawn by hand — imperfect, warm, human

export function MissedCallIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#FF5A5A" strokeWidth="1.8" fill="rgba(255,90,90,0.06)" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 27l6-6m0 0l6-6m-6 6l6 6m-6-6l-6-6" stroke="#FF5A5A" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M28 14c-4-3-10-3-14 0" stroke="#FF5A5A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export function OverwhelmedIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#FF5A5A" strokeWidth="1.8" fill="rgba(255,90,90,0.06)" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 16c2-1.5 4-2 6-2s4 .5 6 2" stroke="#FF5A5A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 20c1.5-1 3-1.3 4.5-1" stroke="#FF5A5A" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="25" cy="15" r="4.5" stroke="#FF5A5A" strokeWidth="1.5" fill="rgba(255,90,90,0.06)"/>
      <path d="M24 14v2m2-1v0" stroke="#FF5A5A" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M16 26c0 1 1.5 2 4 2s4-1 4-2" stroke="#FF5A5A" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

export function ChaosIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#FF5A5A" strokeWidth="1.8" fill="rgba(255,90,90,0.06)" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 16h4m8 0h4" stroke="#FF5A5A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 22h6m8 0h6" stroke="#FF5A5A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 28h5m6 0h5" stroke="#FF5A5A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 12v16" stroke="#FF5A5A" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3" opacity="0.4"/>
    </svg>
  );
}

export function CracksIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#FF5A5A" strokeWidth="1.8" fill="rgba(255,90,90,0.06)" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 10v8l-3 3m3-3l4-2m-4 2l-2 4" stroke="#FF5A5A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M24 14v6l2 2m-2-2l-3-1m3 1l1 4" stroke="#FF5A5A" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="20" cy="28" r="1" fill="#FF5A5A" opacity="0.5"/>
    </svg>
  );
}

export function RobotIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="12" y="14" width="16" height="12" rx="4" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.04)"/>
      <circle cx="16" cy="20" r="1.5" fill="#C49400"/>
      <circle cx="24" cy="20" r="1.5" fill="#C49400"/>
      <path d="M18 24c1 .5 3 .5 4 0" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M20 10v4m0-4l-2 2m2-2l2 2" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

export function LightningIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 8l-6 13h5l-2 11 8-15h-5l4-9h-4z" stroke="#C49400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="rgba(245,197,24,0.06)"/>
    </svg>
  );
}

export function BellIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 10c-4 0-7 3-7 7v3l-2 3h18l-2-3v-3c0-4-3-7-7-7z" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.04)"/>
      <path d="M20 28c-1 0-1.5.5-1.5 1.5S19 31 20 31s1.5-.5 1.5-1.5S21 28 20 28z" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.08)"/>
      <path d="M14 17c0-3 2.5-5 6-5" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export function GrowthIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 30h20" stroke="#C49400" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 26l5-8 4 3 5-10" stroke="#C49400" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="28" cy="12" r="2" fill="rgba(245,197,24,0.2)" stroke="#C49400" strokeWidth="1.3"/>
    </svg>
  );
}

export function CalendarIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="8" y="12" width="24" height="18" rx="3" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.04)"/>
      <path d="M8 18h24" stroke="#C49400" strokeWidth="1.3"/>
      <path d="M14 8v4m12-4v4" stroke="#C49400" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="23" r="1.5" fill="#C49400" opacity="0.6"/>
      <circle cx="22" cy="23" r="1.5" fill="#C49400" opacity="0.6"/>
      <circle cx="28" cy="23" r="1.5" fill="#C49400" opacity="0.6"/>
    </svg>
  );
}

export function SalonIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="24" cy="16" r="5" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <path d="M14 34c0-5 5-9 10-9s10 4 10 9" stroke="#C49400" strokeWidth="1.8" strokeLinecap="round" fill="rgba(245,197,24,0.03)"/>
      <path d="M28 13l6-3m-10 0l-6-3" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export function SpaIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M24 12c-3 0-6 2-6 5s2 5 6 5 6-2 6-5-3-5-6-5z" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <path d="M24 22c-4 0-7 2-7 5s3 5 7 5 7-2 7-5-3-5-7-5z" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.04)" opacity="0.6"/>
      <path d="M18 32c-2 1-4 3-4 5l10 1 10-1c0-2-2-4-4-5" stroke="#C49400" strokeWidth="1.5" strokeLinecap="round" fill="rgba(245,197,24,0.03)" opacity="0.4"/>
    </svg>
  );
}

export function NailIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 14c0-4 2-6 4-6s4 2 4 6v20c0 3-2 5-4 5s-4-2-4-5V14z" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <circle cx="24" cy="18" r="2" fill="rgba(245,197,24,0.15)" stroke="#C49400" strokeWidth="1.2"/>
    </svg>
  );
}

export function CafeIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="12" y="18" width="20" height="16" rx="2" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <path d="M32 22c3 0 5 2 5 5s-2 5-5 5" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.03)"/>
      <path d="M16 14l2-4m8 4l-2-4" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
      <path d="M16 34v2h12v-2" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

export function HotelIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="12" y="12" width="24" height="24" rx="3" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <path d="M12 24h24" stroke="#C49400" strokeWidth="1.3"/>
      <rect x="18" y="16" width="4" height="4" rx="1" stroke="#C49400" strokeWidth="1.3" fill="rgba(245,197,24,0.04)"/>
      <rect x="26" y="16" width="4" height="4" rx="1" stroke="#C49400" strokeWidth="1.3" fill="rgba(245,197,24,0.04)"/>
      <rect x="18" y="26" width="4" height="4" rx="1" stroke="#C49400" strokeWidth="1.3" fill="rgba(245,197,24,0.04)"/>
      <rect x="26" y="26" width="4" height="4" rx="1" stroke="#C49400" strokeWidth="1.3" fill="rgba(245,197,24,0.04)"/>
    </svg>
  );
}

export function ClinicIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="14" y="10" width="20" height="28" rx="4" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <path d="M24 17v10m-5-5h10" stroke="#C49400" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M18 38v2h12v-2" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

export function BarberIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="24" cy="18" r="6" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <path d="M18 14l-4-4m10 4l6-6" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
      <path d="M16 30c0-4 4-6 8-6s8 2 8 6" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.03)"/>
      <path d="M24 24v2" stroke="#C49400" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function StarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 2l1.8 3.7 4.2.6-3 3 1 4.2L8 11.5l-3.7 2L5.3 9.3l-3-3 4.2-.6L8 2z" stroke="#F5C518" strokeWidth="1.2" fill="rgba(245,197,24,0.15)" strokeLinejoin="round"/>
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 8l3 3 5-6" stroke="#C49400" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function TargetIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <circle cx="20" cy="20" r="8" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.04)"/>
      <circle cx="20" cy="20" r="4" stroke="#C49400" strokeWidth="1.3" fill="rgba(245,197,24,0.06)"/>
      <circle cx="20" cy="20" r="1.5" fill="#C49400"/>
    </svg>
  );
}

export function GearIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <circle cx="20" cy="20" r="5" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.04)"/>
      <path d="M20 8v4m0 16v4" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round" opacity="0.6"/>
      <path d="M8 20h4m16 0h4" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round" opacity="0.6"/>
      <path d="M12.3 12.3l2.8 2.8m9.8 9.8l2.8 2.8" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
      <path d="M27.7 12.3l-2.8 2.8m-9.8 9.8l-2.8 2.8" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

export function ChartIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <path d="M10 30h20" stroke="#C49400" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 26l4-8 4 3 4-7" stroke="#C49400" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="26" cy="16" r="1.5" fill="rgba(245,197,24,0.2)" stroke="#C49400" strokeWidth="1.3"/>
    </svg>
  );
}

export function HandshakeIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <path d="M12 24h0c3-4 8-6 8-6s5 2 8 6" stroke="#C49400" strokeWidth="1.5" strokeLinecap="round" fill="rgba(245,197,24,0.03)"/>
      <path d="M12 24l-2-3 4-2" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M28 24l2-3-4-2" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M16 21s0-2 4-2 4 2 4 2" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

export function ShieldIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <path d="M20 8l-8 3v6c0 6 3 11 8 13 5-2 8-7 8-13v-6l-8-3z" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.04)"/>
      <path d="M16 20l3 3 5-6" stroke="#C49400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function MessageIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12c0-2 1.5-3 3-3h18c1.5 0 3 1 3 3v12c0 2-1.5 3-3 3H16l-5 4v-4H11c-1.5 0-3-1-3-3V12z" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.04)"/>
      <path d="M14 16h12m-12 4h8" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

export function MailIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <rect x="8" y="12" width="24" height="16" rx="3" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.04)"/>
      <path d="M8 14l12 8 12-8" stroke="#C49400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function UserIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <circle cx="20" cy="14" r="5" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.04)"/>
      <path d="M12 30c0-5 4-8 8-8s8 3 8 8" stroke="#C49400" strokeWidth="1.5" strokeLinecap="round" fill="rgba(245,197,24,0.03)"/>
    </svg>
  );
}

export function SparkleIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)"/>
      <path d="M20 10l-1.8 4.5-4.8.7 3.5 3.3L15.5 23 20 20.5 24.5 23l-1.4-4.5 3.5-3.3-4.8-.7L20 10z" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.06)" strokeLinejoin="round"/>
    </svg>
  );
}

export function PhoneIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="11" y="6" width="18" height="28" rx="4" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.04)"/>
      <circle cx="20" cy="28" r="1.5" fill="#C49400" opacity="0.6"/>
      <path d="M14 10h12" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
      <path d="M16 18l2 2 4-4" stroke="#C49400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
    </svg>
  );
}

export function DiamondIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 8l-8 8 8 16 8-16-8-8z" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.06)" strokeLinejoin="round"/>
      <path d="M12 16h16" stroke="#C49400" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M20 8l-3 8 3 16" stroke="#C49400" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
      <path d="M20 8l3 8-3 16" stroke="#C49400" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

export function TechIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="34" height="34" rx="8" stroke="#C49400" strokeWidth="1.8" fill="rgba(245,197,24,0.06)" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="8" y="10" width="24" height="16" rx="3" stroke="#C49400" strokeWidth="1.5" fill="rgba(245,197,24,0.04)"/>
      <path d="M16 30h8" stroke="#C49400" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 26v4" stroke="#C49400" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="14" cy="18" r="1.5" fill="#C49400" opacity="0.5"/>
      <circle cx="20" cy="18" r="1.5" fill="#C49400" opacity="0.5"/>
      <circle cx="26" cy="18" r="1.5" fill="#C49400" opacity="0.5"/>
    </svg>
  );
}

// Map for easy lookup
export const IndustryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "💇": SalonIcon,
  "💆": SpaIcon,
  "💅": NailIcon,
  "☕": CafeIcon,
  "🏨": HotelIcon,
  "🏥": ClinicIcon,
  "✂️": BarberIcon,
};
