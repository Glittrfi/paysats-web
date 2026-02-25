"use client";

import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  reverse?: boolean;
  rollIn?: boolean;
  className?: string;
}

export function PhoneMockup({ children, reverse = false, rollIn = false, className = "" }: PhoneMockupProps) {
  const animClass = rollIn
    ? "phone-roll-in phone-float-after"
    : reverse
      ? "phone-mockup-reverse"
      : "phone-mockup";

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="phone-shadow absolute -bottom-5 left-1/2 -translate-x-1/2 h-4 w-28 rounded-full bg-black/10 blur-xl" />

      <div className="phone-screen-glow absolute inset-0 -z-10 rounded-[2rem] bg-arka-primary/8 blur-3xl scale-110" />

      <div className={animClass} style={rollIn ? { opacity: 0 } : undefined}>
        <div className="relative rounded-[1.8rem] border-[2.5px] border-gray-800 bg-gray-900 p-[2px] shadow-2xl shadow-black/25 ring-1 ring-gray-700/50">
          {/* Front camera — small punch-hole */}
          <div className="absolute left-1/2 top-[10px] z-20 -translate-x-1/2">
            <div className="h-[6px] w-[6px] rounded-full bg-gray-700 ring-1 ring-gray-600/50" />
          </div>

          {/* Screen */}
          <div className="overflow-hidden rounded-[1.65rem] bg-black">
            {children}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 h-[2.5px] w-[60px] rounded-full bg-gray-500/80" />
        </div>
      </div>
    </div>
  );
}
