import Link from "next/link";
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
          <li key={member.name}>
            <Reveal delay={i * 80} className="h-full">
              <article className="flex h-full flex-col items-center gap-4 rounded-2xl bg-white p-6 text-center shadow-md shadow-navy/5 ring-1 ring-navy/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 hover:ring-gold/40">
                <Avatar name={member.name} photo={member.photo} size={96} />
                <div>
                  <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm text-slate">{member.role}</p>
                </div>
                {member.isFounder && <Tag>Fondateur</Tag>}
                <p className="text-sm leading-relaxed text-slate">{member.bio}</p>
                <ul className="mt-auto flex flex-wrap justify-center gap-1.5">
                  {member.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-ink ring-1 ring-navy/10"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {member.cvStatus && !member.cvUrl && (
                  <p className="text-xs font-medium text-slate italic">{member.cvStatus}</p>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center text-slate">
        {teamIntro.joinLine}{" "}
        <Link
          href={teamIntro.joinCta.href}
          className="font-semibold text-gold-deep underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          {teamIntro.joinCta.label}
        </Link>
      </p>
    </Section>
  );
}
