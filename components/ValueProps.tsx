import { valueProps, valuePropsIntro } from "@/content/valueProps";
import { FounderCard } from "./FounderCard";
import { IconBadge } from "./ui/IconBadge";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function ValueProps() {
  return (
    <Section
      id="expertise"
      tone="surface"
      eyebrow={valuePropsIntro.eyebrow}
      title={valuePropsIntro.title}
    >
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,380px)]">
        <ul className="flex flex-col gap-6">
          {valueProps.map((prop, i) => (
            <li key={prop.title}>
              <Reveal delay={i * 60}>
                <div className="flex items-start gap-4">
                  <IconBadge icon={prop.icon} />
                  <div>
                    <h3 className="font-display text-lg font-semibold">{prop.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal delay={160} className="h-full">
          <FounderCard />
        </Reveal>
      </div>
    </Section>
  );
}
