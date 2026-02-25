"use client";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="font-display text-xl font-bold text-gray-900">
          Arka
        </a>
        <a
          href="#waitlist"
          className="rounded-full bg-arka-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-arka-primary/25 transition-all hover:bg-arka-primary-dark hover:shadow-xl hover:shadow-arka-primary/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-arka-primary focus:ring-offset-2"
        >
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
