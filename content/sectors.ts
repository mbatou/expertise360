/** Les 8 secteurs — verbatim de l'inventaire (§7), icônes du champ `icon`. */

export type Sector = {
  title: string;
  icon: string;
};

export const sectorsIntro = {
  eyebrow: "Nos marchés cibles",
  title: "Secteurs Accompagnés",
  description:
    "Nous intervenons auprès d'un large spectre d'organisations dans le secteur financier africain et international.",
} as const;

export const sectors: Sector[] = [
  { title: "Banques commerciales", icon: "landmark" },
  { title: "Institutions de microfinance (IMF)", icon: "users" },
  { title: "PME & Entreprises", icon: "briefcase" },
  { title: "Agrobusiness & Finance agricole", icon: "wheat" },
  { title: "Organisations internationales", icon: "globe" },
  { title: "Fonds d'investissement", icon: "trending-up" },
  { title: "Régulateurs & Banques centrales", icon: "scale" },
  { title: "Finance verte & Impact", icon: "leaf" },
];
