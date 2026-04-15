"use client";

import { useI18n } from "@/lib/i18n";
import { BtcTicker } from "./BtcTicker";

export function Navbar() {
  const { locale, toggleLocale, t } = useI18n();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <a href="#" className="font-display text-xl font-bold text-gray-900">
            Arka
          </a>
          <BtcTicker />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 transition-all hover:border-gray-400 hover:text-gray-900"
            aria-label="Switch language"
          >
            {locale === "id" ? "EN" : "ID"}
          </button>
          <a
            href="https://app.arkabtc.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-arka-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-arka-primary/25 transition-all hover:bg-arka-primary-dark hover:shadow-xl hover:shadow-arka-primary/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-arka-primary focus:ring-offset-2"
          >
            {t("nav.joinWaitlist")}
          </a>
        </div>
      </nav>
    </header>
  );
}
