import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsContent } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service – PaySats",
  description:
    "The terms governing your use of the PaySats website, protocol, and related services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage content={termsContent} />;
}
