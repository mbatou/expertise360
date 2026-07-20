import { FileText } from "lucide-react";
import { founderCard } from "@/content/team";
import { Avatar } from "./ui/Avatar";
import { Tag } from "./ui/Tag";

export function FounderCard() {
  return (
    <article className="flex h-full flex-col items-start gap-5 rounded-2xl bg-navy p-8 text-white shadow-xl shadow-navy/20">
      <Avatar name={founderCard.name} photo={founderCard.photo} size={112} />
      <div>
        <Tag>{founderCard.role}</Tag>
        <h3 className="font-display mt-3 text-2xl font-semibold">{founderCard.name}</h3>
      </div>
      <p className="leading-relaxed text-gold-soft">{founderCard.bio}</p>
      {founderCard.cvUrl && (
        <a
          href={founderCard.cvUrl}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Télécharger le CV (PDF)
        </a>
      )}
    </article>
  );
}
