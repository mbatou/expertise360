import { team, teamIntro } from "@/content/team";
import { Avatar } from "./ui/Avatar";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { Tag } from "./ui/Tag";

export function Team() {
  return (
    <Section
      id="equipe"
      tone="light"
      eyebrow={teamIntro.eyebrow}
      title={teamIntro.title}
      description={teamIntro.description}
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, i) => (
          <li key={`${member.name}-${i}`}>
            <Reveal delay={i * 80} className="h-full">
              <article className="flex h-full flex-col items-center gap-4 rounded-2xl bg-white p-6 text-center shadow-md shadow-navy/5 ring-1 ring-navy/5">
                <Avatar name={member.name} photo={member.photo} size={96} />
                <div>
                  <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm text-slate">{member.role}</p>
                </div>
                {member.isFounder && <Tag>Fondateur</Tag>}
                <p className="text-sm leading-relaxed text-slate">{member.bio}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
