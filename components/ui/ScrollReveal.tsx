import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
