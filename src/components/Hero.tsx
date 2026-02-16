"use client";

import { ARKA_DEMO_VIDEO } from "@/lib/constants";

interface HeroProps {
  onWatchDemo: () => void;
}

export function Hero({ onWatchDemo }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-arka-surface via-white to-orange-50/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Save into{" "}
              <span className="text-arka-primary">BTC Pockets</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
              Create savings goals and auto-invest into Bitcoin via Tokocrypto
              virtual accounts. DCA your IDR into BTC for each goal—start with
              as little as Rp 100.000.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#waitlist"
                className="rounded-full bg-arka-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-arka-primary/25 transition-all hover:bg-arka-primary-dark hover:shadow-xl hover:shadow-arka-primary/30 focus:outline-none focus:ring-2 focus:ring-arka-primary focus:ring-offset-2"
              >
                Get early access
              </a>
              <button
                type="button"
                onClick={onWatchDemo}
                className="rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-arka-primary hover:bg-arka-surface hover:text-arka-primary-dark focus:outline-none focus:ring-2 focus:ring-arka-primary focus:ring-offset-2"
              >
                Watch 30s demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-orange-100 to-amber-50 p-2 shadow-xl ring-1 ring-black/5">
              {ARKA_DEMO_VIDEO ? (
                <video
                  className="aspect-[9/16] w-full max-w-[280px] mx-auto rounded-2xl object-cover"
                  controls
                  playsInline
                  src={ARKA_DEMO_VIDEO}
                >
                  <track kind="captions" />
                </video>
              ) : (
                <div className="aspect-[9/16] w-full max-w-[280px] mx-auto rounded-2xl bg-orange-200/50 flex items-center justify-center border-2 border-dashed border-orange-300">
                  <p className="text-center text-sm text-orange-700 px-4">
                    Add your demo video in <code className="text-xs">src/lib/constants.ts</code>
                  </p>
                </div>
              )}
              <p className="mt-3 text-center text-sm text-gray-500">
                See how Arka DCA and BTC pockets work in under 30 seconds.
              </p>
            </div>
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-arka-accent/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-arka-primary/15 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
