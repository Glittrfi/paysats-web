"use client";

import Link from "next/link";
import { I18nProvider, useI18n } from "@/lib/i18n";
import type { LegalDoc } from "@/lib/legal";
import type { Locale } from "@/lib/i18n";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AnimateIn } from "./AnimateIn";

function Article({ content }: { content: Record<Locale, LegalDoc> }) {
  const { locale } = useI18n();
  const doc = content[locale];

  return (
    <section className="bg-gradient-to-b from-paysats-surface/40 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimateIn animation="fade-up">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition hover:text-paysats-primary"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            {doc.backToHome}
          </Link>
          <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {doc.title}
          </h1>
          <p className="mt-3 text-sm text-gray-500">{doc.updated}</p>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {doc.intro}
          </p>
        </AnimateIn>

        <div className="mt-12 space-y-10">
          {doc.sections.map((section) => (
            <AnimateIn key={section.heading} animation="fade-up">
              <div>
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="leading-relaxed text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LegalPage({ content }: { content: Record<Locale, LegalDoc> }) {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Article content={content} />
      </main>
      <Footer />
    </I18nProvider>
  );
}
