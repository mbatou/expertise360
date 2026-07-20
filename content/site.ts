/**
 * Contenu global du site — coordonnées, navigation, hero, SEO.
 * Source de vérité : Expertise360_Contenu_Reconstruction.md (racine du repo),
 * contenu repris verbatim (§1, §2, §9, §13).
 */

export const site = {
  name: "Expertise 360",
  tagline: "Conseil financier · Dakar",
  url: "https://expert-360.com",
  // §13.5 : e-mail aligné sur le domaine réel (jamais @expertise360.com).
  email: "contact@expert-360.com",
  location: "Dakar, Sénégal · Afrique de l'Ouest",
  coverage: "Sénégal · Zone UEMOA · International",
  address: {
    city: "Dakar",
    country: "Sénégal",
  },
  founder: "Djibril Mbengue",
  areaServed: "Afrique de l'Ouest",
} as const;

export type NavItem = { label: string; href: string };

/** Liens préfixés par « / » pour fonctionner depuis les pages satellites. */
export const nav: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Équipe", href: "/#equipe" },
  { label: "Secteurs", href: "/#secteurs" },
  { label: "Approche", href: "/#approche" },
];

/** Item CTA de la nav (§1) — rendu en bouton distinct. */
export const navCta: NavItem = { label: "Nous contacter", href: "/#contact" };

export const hero = {
  eyebrow: "Cabinet de Conseil Financier — Dakar · Afrique",
  // H1 : « l'excellence financière » mis en valeur en or (§2).
  titlePrefix: "Votre partenaire stratégique pour ",
  titleHighlight: "l'excellence financière",
  // Les 4 piliers (§2), rendus en chips.
  pillars: ["Stratégie", "Risque", "Financement", "Formation"],
  // Version condensée du paragraphe de l'inventaire (allégée à la demande
  // du client — le texte long restait trop dense dans le hero).
  paragraph:
    "Nous accompagnons banques, IMF, PME et organisations internationales — avec une vision à 360° et plus de 28 ans d'expérience terrain.",
  primaryCta: { label: "Découvrir nos services", href: "#services" },
  secondaryCta: { label: "Prendre rendez-vous", href: "#contact" },
} as const;

export const seo = {
  title: "Expertise 360 — Cabinet de Conseil Financier à Dakar",
  // Description proposée par l'inventaire (§13.3).
  description:
    "Expertise 360, cabinet de conseil financier à Dakar : stratégie, gestion du risque, financement et formation pour banques, IMF, PME et organisations de développement.",
} as const;
