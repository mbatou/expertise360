import type { Metadata } from "next";
import { createElement } from "react";
import { BadgeCheck, FileText, GraduationCap } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Avatar } from "@/components/ui/Avatar";
import { getIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { founderPage } from "@/content/founderPage";
import { founderCard } from "@/content/team";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: founderPage.seoTitle,
  description: founderPage.seoDescription,
  alternates: { canonical: "/fondateur" },
  openGraph: {
    title: founderPage.seoTitle,
    description: founderPage.seoDescription,
    url: `${site.url}/fondateur`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.founder,
      jobTitle: founderCard.role,
      description: founderPage.bio,
      worksFor: {
        "@type": "FinancialService",
        name: site.name,
        url: site.url,
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Université Cheikh Anta Diop",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.address.city,
        addressCountry: "SN",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
        { "@type": "ListItem", position: 2, name: "Fondateur" },
      ],
    },
  ],
};

export default function FounderPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow={founderPage.eyebrow}
          title={founderPage.name}
          intro={founderPage.bio}
          breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Fondateur" }]}
        />

        <Section
          id="parcours"
          tone="light"
          eyebrow="Parcours"
          title={founderPage.parcoursTitle}
          description={founderPage.parcoursIntro}
        >
          <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-[260px_minmax(0,1fr)]">
            <Reveal className="lg:sticky lg:top-28">
              <div className="flex flex-col items-center gap-4 text-center">
                <Avatar name={founderPage.name} photo={founderCard.photo} size={160} />
                <p className="text-sm font-semibold tracking-wide text-gold-deep uppercase">
                  {founderPage.subtitle}
                </p>
                <p className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-medium text-gold-soft">
                  <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                  {founderPage.experienceBadge}
                </p>
                {founderCard.cvUrl && (
                  <a
                    href={founderCard.cvUrl}
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-soft"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    Télécharger le CV (PDF)
                  </a>
                )}
              </div>
            </Reveal>

            <ol className="relative flex flex-col gap-8 border-l-2 border-gold/30 pl-8">
              {founderPage.timeline.map((entry, i) => (
                <li key={`${entry.organisation}-${entry.period}`} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute top-1 -left-[41px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold ring-4 ring-white"
                  />
                  <Reveal delay={(i % 4) * 60}>
                    <p className="text-sm font-semibold tracking-widest text-gold-deep uppercase">
                      {entry.period}
                    </p>
                    <h3 className="font-display mt-1 text-lg font-semibold">
                      {entry.organisation}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-2 text-sm font-medium text-ink">
                      {createElement(getIcon(entry.icon), {
                        className: "h-4 w-4 shrink-0 text-gold-deep",
                        strokeWidth: 1.75,
                        "aria-hidden": true,
                      })}
                      {entry.role}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {entry.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <Section
          id="missions"
          tone="surface"
          eyebrow="Références"
          title={founderPage.missionsTitle}
          description={founderPage.missionsIntro}
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {founderPage.missions.map((mission, i) => (
              <li key={mission.client}>
                <Reveal delay={(i % 3) * 80} className="h-full">
                  <article className="flex h-full flex-col gap-3 rounded-2xl bg-white p-6 shadow-md shadow-navy/5 ring-1 ring-navy/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 hover:ring-gold/40">
                    <p className="text-xs font-semibold tracking-widest text-gold-deep uppercase">
                      {mission.period}
                    </p>
                    <h3 className="font-display text-lg leading-snug font-semibold">
                      {mission.client}
                    </h3>
                    <p className="text-sm font-semibold text-ink">{mission.scope}</p>
                    <p className="text-sm leading-relaxed text-slate">{mission.description}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="formation" tone="light" eyebrow="Formation" title={founderPage.formationTitle}>
          <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {founderPage.formations.map((formation, i) => (
              <li key={formation}>
                <Reveal delay={(i % 2) * 60} className="h-full">
                  <div className="flex h-full items-center gap-4 rounded-2xl bg-surface p-5 ring-1 ring-navy/5">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold"
                    >
                      <GraduationCap className="h-5 w-5 text-navy" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm leading-relaxed font-medium">{formation}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="expertises" tone="surface" eyebrow="Expertises" title={founderPage.expertisesTitle}>
          <ul className="mx-auto flex max-w-2xl flex-wrap justify-center gap-3">
            {founderPage.expertises.map((expertise) => (
              <li
                key={expertise}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold ring-1 ring-navy/10"
              >
                {expertise}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-14 max-w-3xl text-center">
            <h3 className="font-display text-2xl font-semibold">{founderPage.visionTitle}</h3>
            <p className="mt-4 text-lg leading-relaxed text-slate">{founderPage.visionText}</p>
          </div>
        </Section>

        <CtaBand title={founderPage.ctaTitle} text={founderPage.ctaText} />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
