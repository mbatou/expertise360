import Link from "next/link";
import { footer } from "@/content/footer";
import { Logo } from "./ui/Logo";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-16">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-white/70">{footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
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
                        className="text-sm break-all text-white/80 transition-colors hover:text-gold-soft"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-navy-soft pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <p>{footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
