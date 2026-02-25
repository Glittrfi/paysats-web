"use client";

import { AnimateIn } from "./AnimateIn";

export function DemoSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn animation="fade-up">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            See Arka in action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 text-center">
            Watch how easy it is to set up BTC pockets and auto DCA.
          </p>
        </AnimateIn>
        <AnimateIn animation="scale" delay={200}>
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={onOpenModal}
              className="group relative block overflow-hidden rounded-2xl shadow-xl transition hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-arka-primary focus:ring-offset-2"
            >
              <div className="aspect-video w-full max-w-2xl bg-gradient-to-br from-orange-200 to-amber-100 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition group-hover:scale-110">
                  <svg
                    className="ml-1 h-10 w-10 text-arka-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/10">
                <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-900 opacity-0 transition group-hover:opacity-100">
                  Play demo
                </span>
              </div>
            </button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
