"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyArka } from "@/components/WhyArka";
import { WhyBtc } from "@/components/WhyBtc";
import { BitcoinCard } from "@/components/BitcoinCard";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";
import { VideoModal } from "@/components/VideoModal";
import { AnimateIn } from "@/components/AnimateIn";

export default function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero onWatchDemo={() => setVideoModalOpen(true)} />
        <SocialProof />
        <HowItWorks />
        <BitcoinCard />
        <WhyArka />
        <WhyBtc />
        <section
          id="waitlist"
          className="scroll-mt-20 bg-gradient-to-b from-white to-arka-surface/30 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn animation="fade-up">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Join the waitlist
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Be first to know when Arka opens. Get priority access to BTC
                  pockets, influence the product with early feedback, and exclusive
                  launch perks.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={200}>
              <div className="mx-auto mt-12 max-w-xl">
                <WaitlistForm />
              </div>
            </AnimateIn>
          </div>
        </section>
        <Footer />
      </main>
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </>
  );
}
