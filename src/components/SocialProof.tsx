"use client";

import { AnimateIn } from "./AnimateIn";

export function SocialProof() {
  const badges = [
    "Save into BTC Pockets",
    "Auto DCA IDR → BTC",
    "Tokocrypto virtual accounts",
    "Start from Rp 100.000",
  ];

  return (
    <section className="border-y border-gray-100 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {badges.map((text, i) => (
            <AnimateIn key={text} animation="fade-up" delay={i * 100} duration={500}>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <span className="inline-flex h-2 w-2 rounded-full bg-arka-primary" />
                {text}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
