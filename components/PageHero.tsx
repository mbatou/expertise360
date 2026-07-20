import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  breadcrumb: Crumb[];
};

/** Hero des pages satellites : navy, centré, avec fil d'Ariane. */
export function PageHero({ eyebrow, title, intro, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(201, 162, 75, 0.14), transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-12 pb-16 text-center sm:px-6 sm:pt-16 sm:pb-20">
        <nav aria-label="Fil d'Ariane" className="mb-8">
          <ol className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-white/70">
            {breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-gold-soft"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-white">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <p className="mb-4 text-sm font-semibold tracking-widest text-gold uppercase">
          {eyebrow}
        </p>
        <h1 className="font-display text-[clamp(1.9rem,5vw,3.25rem)] leading-tight font-bold text-balance">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gold-soft">{intro}</p>
        )}
      </div>
    </section>
  );
}
