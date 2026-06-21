import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyContent } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy – PaySats",
  description:
    "How PaySats collects, uses, and protects your information. PaySats is a self-custody, on-chain protocol built to hold as little of your data as possible.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage content={privacyContent} />;
}
