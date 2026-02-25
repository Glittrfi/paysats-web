"use client";

import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  const links = [
    { href: "#", label: t("footer.privacy") },
    { href: "#", label: t("footer.terms") },
    { href: "https://x.com/arka_app", label: "X / Twitter", external: true },
    { href: "mailto:hello@arka.app", label: "Email", external: true },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="font-display text-lg font-bold text-gray-900">
            Arka
          </span>
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-gray-600 hover:text-arka-primary transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Arka. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
