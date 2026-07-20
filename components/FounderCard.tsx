import { createElement } from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck, FileText } from "lucide-react";
import { founderCard } from "@/content/team";
import { getIcon } from "./ui/icons";
import { Avatar } from "./ui/Avatar";
import { Tag } from "./ui/Tag";

export function FounderCard() {
  return (
    <article className="flex h-full flex-col items-start gap-5 rounded-2xl bg-navy p-8 text-white shadow-xl shadow-navy/20">
      <div className="flex items-center gap-5">
        <Avatar name={founderCard.name} photo={founderCard.photo} size={96} />
        <div>
          <Tag>Fondateur</Tag>
          <h3 className="font-display mt-2 text-2xl font-semibold">{founderCard.name}</h3>
          <p className="mt-1 text-sm font-medium text-gold-soft">{founderCard.role}</p>
        </div>
      </div>

      <p className="text-sm font-semibold tracking-wide text-white/85 uppercase">
        {founderCard.subtitle}
      </p>

      <p className="inline-flex items-center gap-2 rounded-full bg-navy-soft px-4 py-2 text-sm font-medium text-gold-soft">
        <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
        {founderCard.experienceBadge}
      </p>

      <ul className="flex flex-col gap-2.5">
        {founderCard.credentials.map((credential) => (
          <li key={credential.label} className="flex items-center gap-3 text-sm text-white/90">
            {createElement(getIcon(credential.icon), {
              className: "h-4 w-4 shrink-0 text-gold",
              strokeWidth: 1.75,
              "aria-hidden": true,
            })}
            {credential.label}
          </li>
        ))}
      </ul>

      {founderCard.cvUrl && (
        <a
          href={founderCard.cvUrl}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Télécharger le CV (PDF)
        </a>
      )}

      <Link
        href="/fondateur"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
      >
        Voir le profil complet
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
