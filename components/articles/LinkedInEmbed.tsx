import { linkedInEmbedUrl } from "@/lib/linkedin";

/**
 * Embed officiel d'un post LinkedIn public (iframe linkedin.com/embed).
 * Aucune donnée n'est extraite : LinkedIn sert son propre lecteur.
 */
export function LinkedInEmbed({ url, title }: { url: string; title: string }) {
  const embedUrl = linkedInEmbedUrl(url);
  if (!embedUrl) {
    return (
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        className="text-sm font-semibold text-gold-deep underline"
      >
        Voir le post sur LinkedIn
      </a>
    );
  }
  return (
    <iframe
      src={embedUrl}
      title={`Post LinkedIn — ${title}`}
      loading="lazy"
      className="h-[560px] w-full rounded-xl border-0 bg-white"
      allowFullScreen
    />
  );
}
