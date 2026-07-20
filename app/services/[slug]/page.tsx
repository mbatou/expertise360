import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { method, methodIntro } from "@/content/method";
import { sectors } from "@/content/sectors";
import { getServicePage, servicePages } from "@/content/servicePages";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: `${site.url}/services/${page.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const audienceSectors = page.audiences.map(
    (title) => sectors.find((sector) => sector.title === title) ?? { title, icon: "briefcase" },
  );
  const otherPages = servicePages.filter((other) => other.slug !== page.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: page.title,
        description: page.intro,
        url: `${site.url}/services/${page.slug}`,
        areaServed: site.areaServed,
        provider: {
          "@type": "FinancialService",
          name: site.name,
          url: site.url,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/#services` },
          { "@type": "ListItem", position: 3, name: page.title },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow="Service"
          title={page.title}
          intro={page.intro}
          breadcrumb={[
            { label: "Accueil", href: "/" },
            { label: "Services", href: "/#services" },
            { label: page.title },
          ]}
        />

        <Section id="offre" tone="light" eyebrow="Notre offre" title={page.offerTitle}>
          <ul className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {page.offers.map((offer, i) => (
              <li key={offer.title}>
                <Reveal delay={(i % 2) * 80} className="h-full">
                  <article className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-md shadow-navy/5 ring-1 ring-navy/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 hover:ring-gold/40">
                    <IconBadge icon={offer.icon} />
                    <h3 className="font-display text-lg font-semibold">{offer.title}</h3>
                    <p className="text-sm leading-relaxed text-slate">{offer.description}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="approche"
          tone="surface"
          eyebrow={methodIntro.eyebrow}
          title={methodIntro.title}
          description={methodIntro.description}
        >
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {method.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 80} className="h-full">
                  <div className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 ring-1 ring-navy/5">
                    <div className="flex items-center justify-between">
                      <IconBadge icon={step.icon} />
                      <span
                        className="font-display text-4xl font-bold text-gold-soft"
                        aria-hidden="true"
                      >
                        {String(step.step).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      <span className="sr-only">Étape {step.step} : </span>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate">{step.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="pour-qui" tone="light" eyebrow="Pour qui" title="Organisations concernées">
          <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {audienceSectors.map((sector, i) => (
              <li key={sector.title}>
                <Reveal delay={i * 60} className="h-full">
                  <div className="flex h-full flex-col items-center gap-3 rounded-2xl bg-surface p-6 text-center ring-1 ring-navy/5">
                    <IconBadge icon={sector.icon} />
                    <h3 className="text-sm font-semibold text-balance">{sector.title}</h3>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-surface p-6 ring-1 ring-navy/5 sm:p-8">
            <h3 className="font-display text-lg font-semibold">Nos autres services phares</h3>
            <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-8">
              {otherPages.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/services/${other.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-gold-deep transition-colors hover:text-ink"
                  >
                    {other.navLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 font-semibold text-gold-deep transition-colors hover:text-ink"
                >
                  Tous nos domaines d&apos;intervention
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </Section>

        <CtaBand title={page.ctaTitle} text={page.ctaText} />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
