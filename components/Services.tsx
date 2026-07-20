import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, servicesIntro } from "@/content/services";
import { IconBadge } from "./ui/IconBadge";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function Services() {
  return (
    <Section
      id="services"
      tone="light"
      eyebrow={servicesIntro.eyebrow}
      title={servicesIntro.title}
      description={servicesIntro.description}
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <li key={service.id}>
            <Reveal delay={(i % 3) * 80} className="h-full">
              <article className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-md shadow-navy/5 ring-1 ring-navy/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 hover:ring-gold/40">
                <IconBadge icon={service.icon} />
                <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{service.description}</p>
                {service.href && (
                  <Link
                    href={service.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-gold-deep transition-colors hover:text-ink"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only"> sur {service.title}</span>
                  </Link>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
