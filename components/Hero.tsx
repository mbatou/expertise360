import { BadgeCheck } from "lucide-react";
import { hero } from "@/content/site";
import { ButtonLink } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

/**
 * Le bloc principal (titre, sous-titre, CTA) s'affiche sans animation
 * d'entrée : il porte le LCP et doit peindre immédiatement, avant hydratation.
 * Seule la bande de confiance, plus basse, a une apparition douce.
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
          {hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gold-soft">
          {hero.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="outline">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-soft px-4 py-2 text-sm font-medium text-gold-soft">
          <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
          {hero.badge}
        </p>

        <Reveal delay={150}>
          <div className="mt-12 border-t border-navy-soft pt-8">
            <p className="text-xs font-semibold tracking-widest text-white/60 uppercase">
              {hero.trust.label}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-10 gap-y-3">
              {hero.trust.names.map((name) => (
                <li key={name} className="font-display text-lg font-semibold text-white/85">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
