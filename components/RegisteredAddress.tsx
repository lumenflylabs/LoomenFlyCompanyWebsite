import { COMPANY } from "@/lib/constants";

export default function RegisteredAddress({ className = "" }: { className?: string }) {
  return (
    <address className={`not-italic ${className}`}>
      {COMPANY.registeredOffice.lines.map((line) => (
        <span key={line} className="block">{line}</span>
      ))}
    </address>
  );
}
