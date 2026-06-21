import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PaySats – Save in Bitcoin, Borrow in Rupiah",
  description:
    "PaySats: auto-DCA into Bitcoin, then borrow Rupiah straight to your bank or e-wallet against your BTC, without ever selling. Self-custody, negligible fees, from Rp 25,000.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <body className="antialiased font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
