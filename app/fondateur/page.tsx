import type { Metadata } from "next";
import { createElement } from "react";
import { BadgeCheck, FileText } from "lucide-react";
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

        <Section id="parcours" tone="light" eyebrow="Parcours" title={founderPage.parcoursTitle} description={founderPage.parcoursIntro}>
          <div className="mx-auto grid max-w-4xl items-start gap-10 lg:grid-cols-[auto_minmax(0,1fr)]">
            <Reveal>
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
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold-deep transition-colors hover:text-ink"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    Télécharger le CV (PDF)
                  </a>
                )}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ul className="flex flex-col gap-4">
                {founderPage.credentials.map((credential) => (
                  <li
                    key={credential.label}
                    className="flex items-center gap-4 rounded-2xl bg-surface p-5 ring-1 ring-navy/5"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold"
                    >
                      {createElement(getIcon(credential.icon), {
                        className: "h-5 w-5 text-navy",
                        strokeWidth: 1.75,
                      })}
                    </span>
                    <span className="font-medium">{credential.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
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
