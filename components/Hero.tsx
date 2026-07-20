import { hero } from "@/content/site";
import { ButtonLink } from "./ui/Button";

/**
 * Hero centré. S'affiche sans animation d'entrée : il porte le LCP et doit
 * peindre immédiatement, avant hydratation. Le décor (halo or + anneaux 360°)
 * est purement décoratif.
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

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-20 pb-24 text-center sm:px-6 sm:pt-28 sm:pb-32">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-navy-soft/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold-soft uppercase sm:text-sm">
          {hero.eyebrow}
        </p>
        <h1
          id="hero-titre"
          className="font-display text-[clamp(2.1rem,6vw,4rem)] leading-[1.12] font-bold text-balance"
        >
          {hero.titlePrefix}
          <span className="text-gold">{hero.titleHighlight}</span>
        </h1>
        <p className="font-display mt-6 text-lg font-semibold tracking-wide text-gold-soft sm:text-xl">
          {hero.subtitle}
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
          {hero.paragraph}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="outline">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
