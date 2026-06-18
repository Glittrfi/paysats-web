"use client";

import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyPaySats } from "@/components/WhyPaySats";
import { WhyBtc } from "@/components/WhyBtc";
import { BitcoinCard } from "@/components/BitcoinCard";
import { Footer } from "@/components/Footer";

function PageContent() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <BitcoinCard />
        <WhyPaySats />
        <WhyBtc />
        <Footer />
      </main>
    </>
  );
}

export default function HomePage() {
  return (
    <I18nProvider>
      <PageContent />
    </I18nProvider>
  );
}
