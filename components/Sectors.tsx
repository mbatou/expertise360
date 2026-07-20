import { sectors, sectorsIntro } from "@/content/sectors";
import { IconBadge } from "./ui/IconBadge";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function Sectors() {
  return (
    <Section
      id="secteurs"
      tone="surface"
      eyebrow={sectorsIntro.eyebrow}
      title={sectorsIntro.title}
      description={sectorsIntro.description}
    >
      <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {sectors.map((sector, i) => (
          <li key={sector.title}>
            <Reveal delay={(i % 4) * 60} className="h-full">
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-md shadow-navy/5 ring-1 ring-navy/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 hover:ring-gold/40">
                <IconBadge icon={sector.icon} />
                <h3 className="text-sm font-semibold text-balance">{sector.title}</h3>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
