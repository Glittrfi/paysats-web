"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  const links = [
    { href: "/privacy", label: t("footer.privacy") },
    { href: "/terms", label: t("footer.terms") },
    { href: "https://x.com/paysats_", label: "X / Twitter", external: true },
    { href: `mailto:${CONTACT_EMAIL}`, label: "Email", external: true },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="flex items-center gap-2 font-display text-lg font-bold text-gray-900">
            <Image
              src="/images/logo.svg"
              alt="PaySats logo"
              width={28}
              height={28}
              className="h-7 w-7 rounded-lg"
            />
            PaySats
          </span>
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-paysats-primary transition"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-paysats-primary transition"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} PaySats. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
