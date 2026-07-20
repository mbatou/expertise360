import Link from "next/link";
import { footer } from "@/content/footer";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto] md:gap-16">
          <div className="max-w-sm">
            <p className="font-display text-xl font-bold">{site.name}</p>
            <p className="mt-1 text-xs font-medium tracking-widest text-gold-soft uppercase">
              {site.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {footer.description}
            </p>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-sm font-semibold tracking-widest text-gold uppercase">
                {column.title}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-gold-soft"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-12 border-t border-navy-soft pt-6 text-sm text-white/60">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
