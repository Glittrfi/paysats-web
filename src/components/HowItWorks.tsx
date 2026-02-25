"use client";

import { AnimateIn } from "./AnimateIn";

const steps = [
  {
    step: "01",
    title: "Continue with phone or Google",
    description:
      "Sign up with your phone number (OTP) or Google. Quick verification—no branch visits.",
  },
  {
    step: "02",
    title: "Create your BTC pockets",
    description:
      "Set up your Arka account and create pockets for each goal. Name them, set targets, and link to Tokocrypto.",
  },
  {
    step: "03",
    title: "Auto DCA and track growth",
    description:
      "Complete KYC, get approved, and start auto-investing IDR into BTC. Watch your savings grow across every pocket.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn animation="fade-up">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How Arka works
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Get from signup to DCA-ing into BTC in three simple steps—no branch
            visits, no paperwork.
          </p>
        </AnimateIn>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((item, i) => (
            <AnimateIn key={item.step} animation="fade-up" delay={i * 150}>
              <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-arka-primary/30 hover:shadow-lg hover:shadow-arka-primary/5 hover:-translate-y-1">
                <span className="text-4xl font-bold text-arka-primary/30 font-display">
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
