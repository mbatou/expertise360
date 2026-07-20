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
          <li key={service.title}>
            <Reveal delay={(i % 3) * 80} className="h-full">
              <article className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-md shadow-navy/5 ring-1 ring-navy/5">
                <IconBadge icon={service.icon} />
                <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{service.description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
