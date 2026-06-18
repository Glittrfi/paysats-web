"use client";

import { useI18n } from "@/lib/i18n";
import { AnimateIn } from "./AnimateIn";

const stats = [
  { valueKey: "social.stat1.value", labelKey: "social.stat1.label" },
  { valueKey: "social.stat2.value", labelKey: "social.stat2.label" },
  { valueKey: "social.stat3.value", labelKey: "social.stat3.label" },
] as const;

export function SocialProof() {
  const { t } = useI18n();

  return (
    <section className="border-y border-gray-100 bg-paysats-surface/40 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
          <AnimateIn animation="fade-up" duration={500}>
            <p className="text-center font-display text-lg font-semibold tracking-tight text-gray-700 sm:text-xl lg:text-left">
              {t("social.tagline")}
            </p>
          </AnimateIn>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-0 sm:divide-x sm:divide-gray-300">
            {stats.map(({ valueKey, labelKey }, i) => (
              <AnimateIn key={valueKey} animation="fade-up" delay={100 + i * 120} duration={500}>
                <div className="flex flex-col items-center px-8 sm:px-10">
                  <span className="font-display text-3xl font-bold text-paysats-primary sm:text-4xl">
                    {t(valueKey)}
                  </span>
                  <span className="mt-1 text-sm font-medium text-gray-500">
                    {t(labelKey)}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
