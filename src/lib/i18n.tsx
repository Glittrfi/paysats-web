"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Locale = "id" | "en";

const translations = {
  // Navbar
  "nav.joinWaitlist": { id: "Mulai nabung", en: "Start saving" },

  // Hero
  "hero.title1": { id: "Nabung di ", en: "Save into " },
  "hero.titleAccent": { id: "BTC Pockets", en: "BTC Pockets" },
  "hero.subtitle": {
    id: "DCA satu klik ke Bitcoin, didukung smart contract. Sepenuhnya terdesentralisasi, non-custodial, biaya sangat kecil—mulai dari Rp 25.000.",
    en: "One-click DCA into Bitcoin, powered by smart contracts. Fully decentralized, non-custodial, negligible fees—start from just Rp 25,000.",
  },
  "hero.howItWorks": { id: "Cara kerjanya", en: "How it works" },

  // Social proof
  "social.tagline": {
    id: "Jangan sampai ketinggalan",
    en: "Don\u0027t get left behind",
  },
  "social.stat1.value": { id: "100+", en: "100+" },
  "social.stat1.label": { id: "Pengguna aktif", en: "Active Users" },
  "social.stat2.value": { id: "Rp 10 Jt+", en: "Rp 10M+" },
  "social.stat2.label": { id: "Dialihkan ke sats", en: "Routed to Sats" },
  "social.stat3.value": { id: "Rp 25rb", en: "Rp 25K" },
  "social.stat3.label": { id: "Minimum DCA", en: "Minimum DCA" },

  // How it works
  "how.title": { id: "Cara kerja Arka", en: "How Arka works" },
  "how.subtitle": {
    id: "Dari daftar sampai DCA ke BTC dalam tiga langkah—didukung smart contract, tanpa perantara.",
    en: "From sign-up to DCA-ing into BTC in three steps—powered by smart contracts, no middlemen.",
  },
  "how.step1.title": { id: "Daftar dengan akun sosial", en: "Sign up with your socials" },
  "how.step1.desc": {
    id: "Smart wallet dibuat otomatis saat kamu masuk dengan Google, email, atau akun sosial. Tanpa seed phrase, tetap non-custodial.",
    en: "A smart wallet is created automatically when you sign in with Google, email, or socials. No seed phrase, still non-custodial.",
  },
  "how.step2.title": { id: "Buat BTC pocket & atur DCA", en: "Create a BTC pocket & set your DCA" },
  "how.step2.desc": {
    id: "Buat pocket untuk setiap tujuan, pilih jumlah dan frekuensi. Smart contract mengeksekusi otomatis—mulai dari Rp 25.000.",
    en: "Create a pocket for each goal, pick your amount and frequency. The smart contract executes automatically—starting from Rp 25,000.",
  },
  "how.step3.title": { id: "Pantau pertumbuhan kamu", en: "Watch your savings grow" },
  "how.step3.desc": {
    id: "DCA berjalan on-chain dengan biaya sangat kecil. Pantau setiap pocket tumbuh langsung di dashboard kamu.",
    en: "Your DCA runs on-chain with negligible fees. Track every pocket growing right from your dashboard.",
  },

  // Bitcoin Card
  "card.soon": { id: "Segera hadir", en: "Coming soon" },
  "card.title": { id: "Kartu Bitcoin Arka", en: "The Arka Bitcoin Card" },
  "card.subtitle": {
    id: "Kartu debit bertenaga Bitcoin pertama di Indonesia. Belanja pakai tabungan BTC kamu di mana saja Visa diterima.",
    en: "Indonesia\u0027s first Bitcoin-powered debit card. Spend your BTC savings anywhere Visa is accepted.",
  },
  "card.feat1.title": { id: "Bayar pakai Bitcoin, selesai dalam Rupiah.", en: "Pay with Bitcoin, settle in Rupiah." },
  "card.feat1.desc": {
    id: "Konversi otomatis saat transaksi—tanpa perlu jual manual.",
    en: "Seamless conversion at the point of sale—no manual selling required.",
  },
  "card.feat2.title": { id: "Terhubung ke BTC pocket kamu.", en: "Linked to your BTC pockets." },
  "card.feat2.desc": {
    id: "Pilih pocket mana untuk belanja—traveling, pengeluaran harian, atau saldo utama.",
    en: "Choose which pocket to spend from—travel, daily expenses, or your main balance.",
  },
  "card.feat3.title": { id: "Notifikasi real-time.", en: "Real-time notifications." },
  "card.feat3.desc": {
    id: "Notifikasi instan setiap transaksi, biar kamu selalu tahu uangmu ke mana.",
    en: "Instant alerts for every transaction, so you always know what\u0027s happening with your money.",
  },
  "card.cta": { id: "Mulai nabung di Bitcoin", en: "Start saving in Bitcoin" },

  // Why Arka
  "whyArka.title": {
    id: "Lebih dari sekadar aplikasi kripto biasa",
    en: "More than just a regular crypto app",
  },
  "whyArka.subtitle": {
    id: "Didukung smart contract. Non-custodial. Biaya sangat kecil. Dibangun untuk penabung Indonesia yang menginginkan kedaulatan penuh atas aset mereka.",
    en: "Powered by smart contracts. Non-custodial. Negligible fees. Built for Indonesian savers who want full sovereignty over their assets.",
  },
  "whyArka.earlyAccessBadge": {
    id: "Mulai tabungan Bitcoin kamu",
    en: "Start your Bitcoin savings",
  },
  "whyArka.carousel.cta": {
    id: "Buat BTC pocket untuk setiap tujuan hidup—mulai nabung sekarang.",
    en: "Create a BTC pocket for every life goal—start saving today.",
  },
  "whyArka.goal1.title": { id: "Rumah Impian", en: "Dream Home" },
  "whyArka.goal1.label": { id: "Rumah", en: "Housing" },
  "whyArka.goal2.title": { id: "Pernikahan Sempurna", en: "Perfect Wedding" },
  "whyArka.goal2.label": { id: "Pernikahan", en: "Wedding" },
  "whyArka.goal3.title": { id: "Pensiun Tenang", en: "Peaceful Retirement" },
  "whyArka.goal3.label": { id: "Pensiun", en: "Retirement" },
  "whyArka.benefit1.title": {
    id: "DCA Satu Klik",
    en: "One-Click DCA",
  },
  "whyArka.benefit1.desc": {
    id: "Atur sekali, smart contract eksekusi otomatis. Rata-rata harga beli BTC tanpa repot.",
    en: "Set it once, the smart contract executes automatically. Average into BTC without lifting a finger.",
  },
  "whyArka.benefit2.title": {
    id: "Non-Custodial",
    en: "Non-Custodial",
  },
  "whyArka.benefit2.desc": {
    id: "Kunci privat tetap milik kamu. Tidak ada pihak ketiga yang memegang aset kamu—kedaulatan penuh.",
    en: "Your keys, your coins. No third party holds your assets—full self-sovereignty.",
  },
  "whyArka.benefit3.title": {
    id: "Mulai dari Rp 25.000",
    en: "Starting from Rp 25,000",
  },
  "whyArka.benefit3.desc": {
    id: "Tidak perlu modal besar. Mulai DCA ke Bitcoin dengan jumlah sekecil Rp 25.000 per pocket.",
    en: "No large capital needed. Start DCA-ing into Bitcoin with as little as Rp 25,000 per pocket.",
  },
  "whyArka.benefit4.title": {
    id: "Didukung Smart Contract",
    en: "Powered by Smart Contracts",
  },
  "whyArka.benefit4.desc": {
    id: "Setiap transaksi dieksekusi on-chain oleh smart contract. Transparan, tanpa perantara, dapat diverifikasi.",
    en: "Every transaction is executed on-chain by smart contracts. Transparent, trustless, and verifiable.",
  },
  "whyArka.benefit5.title": {
    id: "Biaya Sangat Kecil",
    en: "Negligible Fees",
  },
  "whyArka.benefit5.desc": {
    id: "Biaya transaksi hampir nol. Lebih banyak Rupiah kamu masuk ke Bitcoin, bukan ke biaya.",
    en: "Near-zero transaction fees. More of your Rupiah goes into Bitcoin, not into fees.",
  },
  "whyArka.benefit6.title": {
    id: "Sepenuhnya Terdesentralisasi",
    en: "Fully Decentralized",
  },
  "whyArka.benefit6.desc": {
    id: "Tidak ada server terpusat yang bisa disensor atau diretas. Protokol berjalan di blockchain—selalu aktif, selalu milik kamu.",
    en: "No central server to censor or hack. The protocol runs on the blockchain—always on, always yours.",
  },

  // Why BTC
  "whyBtc.title": { id: "Kenapa Bitcoin untuk tabungan?", en: "Why Bitcoin for your savings?" },
  "whyBtc.subtitle": {
    id: "Bitcoin menunjukkan apresiasi jangka panjang yang kuat sebagai penyimpan nilai. Dollar-cost averaging (DCA) meredam volatilitas—kamu membeli jumlah tetap secara rutin tanpa perlu menebak waktu pasar.",
    en: "Bitcoin has shown strong long-term appreciation as a store of value. Dollar-cost averaging (DCA) smooths out volatility—you buy a fixed amount regularly instead of trying to time the market.",
  },
  "whyBtc.point1.title": { id: "Pertumbuhan majemuk.", en: "Compound growth." },
  "whyBtc.point1.desc": {
    id: "Data historis menunjukkan BTC mengungguli banyak aset tradisional dalam jangka panjang.",
    en: "Historical data suggests BTC has outperformed many traditional assets over extended periods.",
  },
  "whyBtc.point2.title": { id: "DCA mengurangi risiko.", en: "DCA reduces risk." },
  "whyBtc.point2.desc": {
    id: "Menyebar pembelian dari waktu ke waktu menghindari stres beli sekaligus.",
    en: "Spreading buys over time avoids the stress of lump-sum timing.",
  },
  "whyBtc.point3.title": { id: "Mulai kecil.", en: "Start small." },
  "whyBtc.point3.desc": {
    id: "Dengan Arka, kamu bisa DCA ke BTC mulai dari Rp 25.000 per pocket.",
    en: "With Arka, you can DCA into BTC from as little as Rp 25,000 per pocket.",
  },
  "whyBtc.calculatorTitle": {
    id: "Berapa yang bisa kamu dapat jika menabung di BTC?",
    en: "How much could you have gained if you saved in BTC?",
  },
  "whyBtc.calculatorSubtitle": {
    id: "Bandingkan DCA ke Bitcoin dengan deposito, IHSG, dan emas (IDR).",
    en: "Compare DCA into Bitcoin vs time deposit, IHSG, and gold (IDR).",
  },
  "whyBtc.disclaimer": {
    id: "Data historis bersifat perkiraan. Kinerja masa lalu tidak menjamin hasil di masa depan.",
    en: "Historical data is approximate. Past performance does not guarantee future results.",
  },

  // Footer
  "footer.privacy": { id: "Privasi", en: "Privacy" },
  "footer.terms": { id: "Ketentuan", en: "Terms" },
  "footer.copyright": {
    id: "Dengan menggunakan Arka kamu menyetujui Ketentuan Layanan dan Kebijakan Privasi kami.",
    en: "By using Arka you agree to our Terms of Service and Privacy Policy.",
  },

  // Video modal
  "modal.caption": {
    id: "Lihat cara kerja Arka DCA dan BTC pocket dalam 30 detik.",
    en: "See how Arka DCA and BTC pockets work in under 30 seconds.",
  },

  // Metadata
  "meta.title": { id: "Arka – Nabung di BTC Pockets", en: "Arka – Save into BTC Pockets" },
  "meta.description": {
    id: "Arka: DCA satu klik ke Bitcoin via smart contract. Non-custodial, terdesentralisasi, biaya sangat kecil. Mulai dari Rp 25.000.",
    en: "Arka: one-click DCA into Bitcoin via smart contracts. Non-custodial, fully decentralized, negligible fees. Start from Rp 25,000.",
  },
} as const;

type TranslationKey = keyof typeof translations;

interface I18nContextValue {
  locale: Locale;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("id");

  const toggleLocale = useCallback(
    () => setLocale((prev) => (prev === "id" ? "en" : "id")),
    [],
  );

  const t = useCallback(
    (key: TranslationKey) => translations[key]?.[locale] ?? key,
    [locale],
  );

  return (
    <I18nContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
