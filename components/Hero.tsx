import { hero } from "@/content/site";
import { ButtonLink } from "./ui/Button";

/**
 * Hero centré et aéré : titre, piliers en chips, une phrase, deux CTA.
 * S'affiche sans animation d'entrée : il porte le LCP et doit peindre
 * immédiatement, avant hydratation. Le décor (halo or + anneaux 360°) est
 * purement décoratif.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-titre"
      className="relative overflow-hidden bg-navy text-white"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(201, 162, 75, 0.16), transparent)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10" />
        <div className="absolute left-1/2 top-1/2 h-[1040px] w-[1040px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/5" />
      </div>

      {/* min-h = hauteur visible sous le header sticky (h-20) : le bloc se
          centre verticalement et les CTA restent au-dessus de la ligne de
          flottaison. */}
      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-4xl flex-col items-center justify-center px-4 py-12 text-center sm:px-6">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-navy-soft/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold-soft uppercase sm:text-sm">
          {hero.eyebrow}
        </p>
        <h1
          id="hero-titre"
          className="font-display text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[1.12] font-bold text-balance"
        >
          {hero.titlePrefix}
          <span className="text-gold">{hero.titleHighlight}</span>
        </h1>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5" aria-label="Nos quatre piliers">
          {hero.pillars.map((pillar) => (
            <li
              key={pillar}
              className="font-display rounded-full bg-navy-soft/70 px-4 py-1.5 text-sm font-semibold text-gold-soft ring-1 ring-gold/20 sm:text-base"
            >
              {pillar}
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {hero.paragraph}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="outline">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
