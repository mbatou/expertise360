/**
 * Posts LinkedIn embarqués via le lecteur officiel — aucun scraping.
 * On extrait l'identifiant d'activité de l'URL publique du post pour
 * construire l'URL d'embed `linkedin.com/embed/feed/update/…`.
 */

const ACTIVITY_PATTERNS = [
  // https://www.linkedin.com/posts/<slug>-activity-7234…-Ab3k/
  /-activity-(\d{10,25})/,
  // https://www.linkedin.com/feed/update/urn:li:activity:7234…/
  /urn:li:(?:activity|share|ugcPost):(\d{10,25})/,
];

/** Retourne l'URL d'embed officielle, ou null si l'URL n'est pas un post LinkedIn reconnu. */
export function linkedInEmbedUrl(postUrl: string): string | null {
  let url: URL;
  try {
    url = new URL(postUrl);
  } catch {
    return null;
  }
  if (!/(^|\.)linkedin\.com$/.test(url.hostname)) return null;

  for (const pattern of ACTIVITY_PATTERNS) {
    const match = decodeURIComponent(url.pathname).match(pattern);
    if (match) {
      return `https://www.linkedin.com/embed/feed/update/urn:li:activity:${match[1]}`;
    }
  }
  return null;
}
