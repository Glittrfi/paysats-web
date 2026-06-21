"use client";

import { useI18n } from "@/lib/i18n";
import { AnimateIn } from "./AnimateIn";
import { Icon, type IconName } from "./icons";

const stepKeys = [
  { step: "01", title: "how.step1.title", desc: "how.step1.desc", icon: "user-plus" },
  { step: "02", title: "how.step2.title", desc: "how.step2.desc", icon: "wallet" },
  { step: "03", title: "how.step3.title", desc: "how.step3.desc", icon: "trending-up" },
] as const satisfies readonly {
  step: string;
  title: string;
  desc: string;
  icon: IconName;
}[];

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn animation="fade-up">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("how.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            {t("how.subtitle")}
          </p>
        </AnimateIn>
        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className="pointer-events-none absolute left-0 right-0 top-7 hidden border-t border-dashed border-paysats-primary/25 lg:block"
            aria-hidden
          />
          {stepKeys.map((item, i) => (
            <AnimateIn key={item.step} animation="fade-up" delay={i * 150}>
              <div className="group relative h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-paysats-primary/30 hover:shadow-lg hover:shadow-paysats-primary/5 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-paysats-surface text-paysats-primary ring-1 ring-paysats-primary/10 transition-colors group-hover:bg-paysats-primary group-hover:text-white">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-5xl font-bold leading-none text-paysats-primary/15">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-gray-900">
                  {t(item.title)}
                </h3>
                <p className="mt-2 text-gray-600">{t(item.desc)}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
