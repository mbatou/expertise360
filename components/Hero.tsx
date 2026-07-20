import { hero } from "@/content/site";
import { ButtonLink } from "./ui/Button";

/**
 * Le hero s'affiche sans animation d'entrée : il porte le LCP et doit peindre
 * immédiatement, avant hydratation.
 */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-titre" className="bg-navy text-white">
      <div className="mx-auto w-full max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
        <p className="mb-4 text-sm font-semibold tracking-widest text-gold uppercase">
          {hero.eyebrow}
        </p>
        <h1
          id="hero-titre"
          className="font-display max-w-4xl text-[clamp(2rem,6vw,3.75rem)] leading-tight font-bold text-balance"
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

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="outline">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
