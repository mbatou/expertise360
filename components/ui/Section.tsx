import type { ReactNode } from "react";

type Tone = "light" | "surface" | "dark";

const tones: Record<Tone, string> = {
  light: "bg-white text-ink",
  surface: "bg-surface text-ink",
  dark: "bg-navy text-white",
};

type SectionProps = {
  id: string;
  tone?: Tone;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
};

/**
 * Section sémantique avec en-tête normalisé : eyebrow or, titre Fraunces,
 * description. `aria-labelledby` pointe sur le titre.
 */
export function Section({
  id,
  tone = "light",
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  const headingId = `${id}-titre`;
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={`${tones[tone]} py-16 sm:py-24`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-2xl sm:mb-14">
            {eyebrow && (
              <p
                className={`mb-3 text-sm font-semibold tracking-widest uppercase ${
                  tone === "dark" ? "text-gold" : "text-gold-deep"
                }`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id={headingId}
                className="font-display text-3xl font-semibold text-balance sm:text-4xl"
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={`mt-4 text-lg leading-relaxed ${
                  tone === "dark" ? "text-gold-soft" : "text-slate"
                }`}
              >
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
