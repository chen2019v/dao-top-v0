"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation, SHOP_URL } from "@/data/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-rice/95 backdrop-blur-sm sticky top-0 z-50">
      {/* Top bar — minimal */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-xl tracking-[0.08em] text-ink hover:opacity-70 transition-opacity"
        >
          DAO<span className="text-ink/40">.top</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.12em] uppercase text-ink/60 font-sans">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-ink transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Shop CTA + Mobile menu */}
        <div className="flex items-center gap-4">
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-xs tracking-[0.15em] uppercase text-ink border border-ink/30 px-4 py-2 hover:bg-ink hover:text-rice transition-all duration-400"
          >
            Visit Shop
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-[1px] bg-ink transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1px] bg-ink transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1px] bg-ink transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-ink/10 bg-rice px-6 py-8 flex flex-col gap-5 text-xs tracking-[0.15em] uppercase text-ink/60">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center bg-ink text-rice px-4 py-3 mt-2 hover:bg-ink/90 transition-colors"
          >
            Visit Official Shop
          </a>
        </nav>
      )}
    </header>
  );
}
