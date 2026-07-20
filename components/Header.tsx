"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { MobileNav } from "./MobileNav";

/**
 * Header sticky sur fond navy. La navigation desktop passe en menu hamburger
 * accessible sous `md` (MobileNav).
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-navy text-white transition-shadow ${
        scrolled ? "shadow-lg shadow-navy-deep/40" : ""
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="#top" className="flex min-w-0 items-baseline gap-2">
          <span className="font-display text-xl font-bold tracking-tight whitespace-nowrap">
            {site.name}
          </span>
          <span className="hidden text-xs font-medium tracking-widest text-gold-soft uppercase sm:inline">
            {site.tagline}
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-white/85 transition-colors hover:text-gold-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-soft"
              >
                Nous contacter
              </Link>
            </li>
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
