import { method, methodIntro } from "@/content/method";
import { IconBadge } from "./ui/IconBadge";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function Method() {
  return (
    <Section
      id="approche"
      tone="light"
      eyebrow={methodIntro.eyebrow}
      title={methodIntro.title}
    >
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {method.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 80} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-2xl bg-surface p-6 ring-1 ring-navy/5">
                <div className="flex items-center justify-between">
                  <IconBadge icon={step.icon} />
                  <span className="font-display text-4xl font-bold text-gold-soft" aria-hidden="true">
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
  );
}
