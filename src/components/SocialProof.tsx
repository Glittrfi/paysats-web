"use client";

import { useI18n } from "@/lib/i18n";
import { AnimateIn } from "./AnimateIn";

const badgeKeys = [
  "social.badge1",
  "social.badge2",
  "social.badge3",
  "social.badge4",
] as const;

export function SocialProof() {
  const { t } = useI18n();

  return (
    <section className="border-y border-gray-100 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {badgeKeys.map((key, i) => (
            <AnimateIn key={key} animation="fade-up" delay={i * 100} duration={500}>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <span className="inline-flex h-2 w-2 rounded-full bg-arka-primary" />
                {t(key)}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
