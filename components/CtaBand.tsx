import { ButtonLink } from "./ui/Button";

type CtaBandProps = {
  title: string;
  text: string;
};

/** Bandeau d'appel à l'action final des pages satellites → formulaire du hub. */
export function CtaBand({ title, text }: CtaBandProps) {
  return (
    <section aria-labelledby="cta-titre" className="bg-navy text-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 id="cta-titre" className="font-display text-3xl font-semibold text-balance sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gold-soft">{text}</p>
        <div className="mt-8">
          <ButtonLink href="/#contact">Discuter de votre projet</ButtonLink>
        </div>
      </div>
    </section>
  );
}
