import type { Locale } from "./i18n";

export type LegalSection = { heading: string; body: string[] };

export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  backToHome: string;
};

export const privacyContent: Record<Locale, LegalDoc> = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: June 21, 2026",
    backToHome: "Back to home",
    intro:
      "This Privacy Policy explains how PaySats (\u201cwe\u201d, \u201cus\u201d, or \u201cour\u201d) collects, uses, and protects information when you use our website and product. PaySats is a self-custody, on-chain protocol \u2014 we are designed to hold as little of your data as possible.",
    sections: [
      {
        heading: "1. Information We Collect",
        body: [
          "Account information: when you sign in with Google, email, or a social account, our authentication provider processes the identifier you choose (such as your email address) to create your smart wallet.",
          "Usage data: we may collect basic, aggregated analytics such as pages visited, device type, and approximate region to improve the product.",
          "On-chain data: transactions you make are recorded on a public blockchain. This data is inherently public and is not controlled by PaySats.",
        ],
      },
      {
        heading: "2. How We Use Information",
        body: [
          "To create and secure your smart wallet, operate core features such as DCA and borrowing, communicate important service updates, and improve performance and reliability.",
          "We do not sell your personal information.",
        ],
      },
      {
        heading: "3. Self-Custody and Your Keys",
        body: [
          "PaySats is non-custodial: you control your assets and keys. We do not have access to your funds and cannot move them on your behalf. We never ask for and never store your private keys or recovery material.",
        ],
      },
      {
        heading: "4. Cookies and Analytics",
        body: [
          "We use essential cookies required for the site to function and may use privacy-respecting analytics to understand usage. You can control cookies through your browser settings.",
        ],
      },
      {
        heading: "5. Third-Party Services",
        body: [
          "We rely on trusted providers for authentication, wallet infrastructure, blockchain access, and hosting. These providers process data only as needed to deliver their service and under their own privacy terms.",
        ],
      },
      {
        heading: "6. Data Security",
        body: [
          "We apply reasonable technical and organizational measures to protect information. No method of transmission or storage is fully secure, so we cannot guarantee absolute security.",
        ],
      },
      {
        heading: "7. Your Rights",
        body: [
          "Depending on your jurisdiction, you may have rights to access, correct, or delete your personal data. Contact us to exercise these rights. Note that on-chain data cannot be altered or deleted.",
        ],
      },
      {
        heading: "8. Children\u2019s Privacy",
        body: [
          "PaySats is not directed to individuals under 18, and we do not knowingly collect data from children.",
        ],
      },
      {
        heading: "9. Changes to This Policy",
        body: [
          "We may update this policy from time to time. Material changes will be reflected by updating the date above and, where appropriate, through in-product notice.",
        ],
      },
      {
        heading: "10. Contact",
        body: [
          "Questions about privacy? Reach us at the email listed in the footer of this site.",
        ],
      },
    ],
  },
  id: {
    title: "Kebijakan Privasi",
    updated: "Terakhir diperbarui: 21 Juni 2026",
    backToHome: "Kembali ke beranda",
    intro:
      "Kebijakan Privasi ini menjelaskan bagaimana PaySats (\u201ckami\u201d) mengumpulkan, menggunakan, dan melindungi informasi saat kamu menggunakan situs dan produk kami. PaySats adalah protokol on-chain dengan kustodi mandiri \u2014 kami dirancang untuk menyimpan data kamu sesedikit mungkin.",
    sections: [
      {
        heading: "1. Informasi yang Kami Kumpulkan",
        body: [
          "Informasi akun: saat kamu masuk dengan Google, email, atau akun sosial, penyedia autentikasi kami memproses identitas yang kamu pilih (seperti alamat email) untuk membuat smart wallet kamu.",
          "Data penggunaan: kami dapat mengumpulkan analitik dasar yang teragregasi seperti halaman yang dikunjungi, jenis perangkat, dan perkiraan wilayah untuk meningkatkan produk.",
          "Data on-chain: transaksi yang kamu lakukan tercatat di blockchain publik. Data ini bersifat publik dan tidak dikendalikan oleh PaySats.",
        ],
      },
      {
        heading: "2. Cara Kami Menggunakan Informasi",
        body: [
          "Untuk membuat dan mengamankan smart wallet kamu, menjalankan fitur inti seperti DCA dan pinjaman, menyampaikan pembaruan layanan penting, serta meningkatkan kinerja dan keandalan.",
          "Kami tidak menjual informasi pribadi kamu.",
        ],
      },
      {
        heading: "3. Kustodi Mandiri dan Kunci Kamu",
        body: [
          "PaySats bersifat non-custodial: kamu mengendalikan aset dan kunci kamu. Kami tidak memiliki akses ke dana kamu dan tidak dapat memindahkannya atas nama kamu. Kami tidak pernah meminta atau menyimpan kunci privat maupun frasa pemulihan kamu.",
        ],
      },
      {
        heading: "4. Cookie dan Analitik",
        body: [
          "Kami menggunakan cookie esensial yang diperlukan agar situs berfungsi dan mungkin menggunakan analitik yang menghormati privasi untuk memahami penggunaan. Kamu dapat mengatur cookie melalui pengaturan browser.",
        ],
      },
      {
        heading: "5. Layanan Pihak Ketiga",
        body: [
          "Kami mengandalkan penyedia tepercaya untuk autentikasi, infrastruktur wallet, akses blockchain, dan hosting. Penyedia ini hanya memproses data seperlunya untuk memberikan layanan mereka dan sesuai ketentuan privasi mereka sendiri.",
        ],
      },
      {
        heading: "6. Keamanan Data",
        body: [
          "Kami menerapkan langkah teknis dan organisasi yang wajar untuk melindungi informasi. Tidak ada metode transmisi atau penyimpanan yang sepenuhnya aman, sehingga kami tidak dapat menjamin keamanan mutlak.",
        ],
      },
      {
        heading: "7. Hak Kamu",
        body: [
          "Tergantung yurisdiksi kamu, kamu mungkin memiliki hak untuk mengakses, memperbaiki, atau menghapus data pribadi kamu. Hubungi kami untuk menggunakan hak ini. Perlu dicatat bahwa data on-chain tidak dapat diubah atau dihapus.",
        ],
      },
      {
        heading: "8. Privasi Anak",
        body: [
          "PaySats tidak ditujukan untuk individu di bawah 18 tahun, dan kami tidak dengan sengaja mengumpulkan data dari anak-anak.",
        ],
      },
      {
        heading: "9. Perubahan Kebijakan Ini",
        body: [
          "Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan material akan ditunjukkan dengan memperbarui tanggal di atas dan, bila perlu, melalui pemberitahuan di dalam produk.",
        ],
      },
      {
        heading: "10. Kontak",
        body: [
          "Ada pertanyaan tentang privasi? Hubungi kami di email yang tercantum pada bagian footer situs ini.",
        ],
      },
    ],
  },
};

export const termsContent: Record<Locale, LegalDoc> = {
  en: {
    title: "Terms of Service",
    updated: "Last updated: June 21, 2026",
    backToHome: "Back to home",
    intro:
      "These Terms of Service (\u201cTerms\u201d) govern your access to and use of the PaySats website, protocol, and related services (the \u201cService\u201d). By using the Service, you agree to these Terms.",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        body: [
          "By accessing or using the Service, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, do not use the Service.",
        ],
      },
      {
        heading: "2. Eligibility",
        body: [
          "You must be at least 18 years old and legally able to enter into these Terms. You are responsible for complying with the laws and regulations that apply to you, including any local restrictions on digital assets.",
        ],
      },
      {
        heading: "3. Self-Custody Service",
        body: [
          "PaySats is a non-custodial, self-custody protocol. You retain full control of your assets and keys at all times. We never take custody of your funds and cannot reverse, freeze, or recover transactions on your behalf. You are solely responsible for safeguarding access to your wallet.",
        ],
      },
      {
        heading: "4. No Financial Advice",
        body: [
          "Nothing on the Service constitutes financial, investment, tax, or legal advice. DCA, borrowing, and any other features are tools you use at your own discretion and risk. You should seek independent advice where appropriate.",
        ],
      },
      {
        heading: "5. Risks",
        body: [
          "Digital assets such as Bitcoin are volatile and may lose value. On-chain protocols carry risks including smart-contract vulnerabilities, liquidation of collateral, network congestion, and irreversible transactions. You accept these risks when using the Service.",
        ],
      },
      {
        heading: "6. Fees",
        body: [
          "Use of the Service may involve protocol and network fees. Applicable fees will be disclosed in-product before you confirm a transaction.",
        ],
      },
      {
        heading: "7. Prohibited Use",
        body: [
          "You agree not to use the Service for unlawful activity, to circumvent sanctions, to infringe others\u2019 rights, or to interfere with or compromise the integrity or security of the protocol.",
        ],
      },
      {
        heading: "8. Intellectual Property",
        body: [
          "The PaySats name, logo, and website content are owned by us or our licensors. These Terms do not grant you any right to use our branding without prior written permission.",
        ],
      },
      {
        heading: "9. Disclaimers",
        body: [
          "The Service is provided \u201cas is\u201d and \u201cas available\u201d without warranties of any kind, whether express or implied, including fitness for a particular purpose and uninterrupted availability.",
        ],
      },
      {
        heading: "10. Limitation of Liability",
        body: [
          "To the maximum extent permitted by law, PaySats and its contributors will not be liable for any indirect, incidental, or consequential damages, or for loss of assets arising from your use of the Service.",
        ],
      },
      {
        heading: "11. Changes to These Terms",
        body: [
          "We may update these Terms from time to time. Continued use of the Service after changes take effect constitutes acceptance of the updated Terms.",
        ],
      },
      {
        heading: "12. Contact",
        body: [
          "Questions about these Terms? Reach us at the email listed in the footer of this site.",
        ],
      },
    ],
  },
  id: {
    title: "Ketentuan Layanan",
    updated: "Terakhir diperbarui: 21 Juni 2026",
    backToHome: "Kembali ke beranda",
    intro:
      "Ketentuan Layanan ini (\u201cKetentuan\u201d) mengatur akses dan penggunaan kamu atas situs, protokol, serta layanan terkait PaySats (\u201cLayanan\u201d). Dengan menggunakan Layanan, kamu menyetujui Ketentuan ini.",
    sections: [
      {
        heading: "1. Penerimaan Ketentuan",
        body: [
          "Dengan mengakses atau menggunakan Layanan, kamu menyatakan telah membaca, memahami, dan setuju terikat oleh Ketentuan ini. Jika kamu tidak setuju, jangan gunakan Layanan.",
        ],
      },
      {
        heading: "2. Kelayakan",
        body: [
          "Kamu harus berusia minimal 18 tahun dan secara hukum mampu menyetujui Ketentuan ini. Kamu bertanggung jawab mematuhi hukum dan peraturan yang berlaku bagimu, termasuk pembatasan lokal atas aset digital.",
        ],
      },
      {
        heading: "3. Layanan Kustodi Mandiri",
        body: [
          "PaySats adalah protokol non-custodial dengan kustodi mandiri. Kamu memegang kendali penuh atas aset dan kunci kamu setiap saat. Kami tidak pernah menyimpan dana kamu dan tidak dapat membatalkan, membekukan, atau memulihkan transaksi atas nama kamu. Kamu sepenuhnya bertanggung jawab menjaga akses ke wallet kamu.",
        ],
      },
      {
        heading: "4. Bukan Nasihat Keuangan",
        body: [
          "Tidak ada bagian dari Layanan yang merupakan nasihat keuangan, investasi, pajak, atau hukum. DCA, pinjaman, dan fitur lainnya adalah alat yang kamu gunakan atas kebijakan dan risiko kamu sendiri. Sebaiknya cari nasihat independen bila diperlukan.",
        ],
      },
      {
        heading: "5. Risiko",
        body: [
          "Aset digital seperti Bitcoin bersifat volatil dan dapat kehilangan nilai. Protokol on-chain memiliki risiko termasuk kerentanan smart contract, likuidasi jaminan, kepadatan jaringan, dan transaksi yang tidak dapat dibatalkan. Kamu menerima risiko ini saat menggunakan Layanan.",
        ],
      },
      {
        heading: "6. Biaya",
        body: [
          "Penggunaan Layanan dapat melibatkan biaya protokol dan jaringan. Biaya yang berlaku akan ditampilkan di dalam produk sebelum kamu mengonfirmasi transaksi.",
        ],
      },
      {
        heading: "7. Penggunaan yang Dilarang",
        body: [
          "Kamu setuju untuk tidak menggunakan Layanan untuk aktivitas melanggar hukum, menghindari sanksi, melanggar hak pihak lain, atau mengganggu maupun membahayakan integritas atau keamanan protokol.",
        ],
      },
      {
        heading: "8. Kekayaan Intelektual",
        body: [
          "Nama, logo, dan konten situs PaySats dimiliki oleh kami atau pemberi lisensi kami. Ketentuan ini tidak memberi kamu hak untuk menggunakan merek kami tanpa izin tertulis sebelumnya.",
        ],
      },
      {
        heading: "9. Penafian",
        body: [
          "Layanan disediakan \u201csebagaimana adanya\u201d dan \u201csebagaimana tersedia\u201d tanpa jaminan dalam bentuk apa pun, baik tersurat maupun tersirat, termasuk kesesuaian untuk tujuan tertentu dan ketersediaan tanpa gangguan.",
        ],
      },
      {
        heading: "10. Batasan Tanggung Jawab",
        body: [
          "Sejauh diizinkan oleh hukum, PaySats dan kontributornya tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial, maupun kehilangan aset yang timbul dari penggunaan Layanan oleh kamu.",
        ],
      },
      {
        heading: "11. Perubahan Ketentuan Ini",
        body: [
          "Kami dapat memperbarui Ketentuan ini dari waktu ke waktu. Penggunaan Layanan yang berlanjut setelah perubahan berlaku merupakan penerimaan atas Ketentuan yang diperbarui.",
        ],
      },
      {
        heading: "12. Kontak",
        body: [
          "Ada pertanyaan tentang Ketentuan ini? Hubungi kami di email yang tercantum pada bagian footer situs ini.",
        ],
      },
    ],
  },
};
