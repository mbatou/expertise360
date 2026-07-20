/**
 * Les 8 secteurs. Intitulés et icônes issus de la table de correspondance de
 * l'audit Pandorus (§6.3) : banques, IMF, PME, agro, international, fonds,
 * régulateurs, finance verte.
 */

export type Sector = {
  title: string;
  icon: string;
};

export const sectorsIntro = {
  eyebrow: "Secteurs d'intervention",
  title: "Au service de l'écosystème financier africain",
  // TODO: intro de section verbatim de l'inventaire.
  description:
    "Des banques commerciales aux régulateurs, nous intervenons sur toute la chaîne de valeur financière.",
} as const;

export const sectors: Sector[] = [
  { title: "Banques", icon: "landmark" },
  { title: "Institutions de microfinance", icon: "users" },
  { title: "PME", icon: "briefcase" },
  { title: "Agro-industrie", icon: "wheat" },
  { title: "Organisations internationales", icon: "globe" },
  { title: "Fonds d'investissement", icon: "trending-up" },
  { title: "Régulateurs", icon: "scale" },
  { title: "Finance verte", icon: "leaf" },
];
