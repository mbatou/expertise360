/**
 * Contenu global du site — coordonnées, navigation, hero, SEO.
 *
 * NOTE CONTENU : le fichier d'inventaire `Expertise360_Contenu_Reconstruction.md`
 * était introuvable au moment de la reconstruction (repo vide, fichier absent des
 * sources accessibles). Les textes ci-dessous proviennent de l'audit Pandorus
 * (positionnement, signaux de confiance, correctifs §13) ; les éléments marqués
 * `TODO:` sont à remplacer par le contenu verbatim de l'inventaire dès qu'il
 * est disponible — ne pas inventer de faits (chiffres, noms, téléphone).
 */

export const site = {
  name: "Expertise 360",
  // Jamais « Expert 360 » — signature géographique recommandée par l'audit.
  tagline: "Conseil financier · Dakar",
  url: "https://expert-360.com",
  email: "contact@expert-360.com",
  // TODO: numéro de téléphone à confirmer avec l'inventaire.
  phone: "",
  address: {
    city: "Dakar",
    country: "Sénégal",
    // TODO: adresse complète (rue, immeuble) à confirmer avec l'inventaire.
    street: "",
  },
  founder: "Djibril Mbengue",
  areaServed: "Afrique de l'Ouest",
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Équipe", href: "#equipe" },
  { label: "Secteurs", href: "#secteurs" },
  { label: "Approche", href: "#approche" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Cabinet de conseil financier — Dakar",
  // TODO: titre et sous-titre verbatim de l'inventaire (texte provisoire fidèle
  // au positionnement documenté : vision 360°, ancrage africain, standards
  // internationaux).
  title: "Une vision 360° du conseil financier en Afrique de l'Ouest",
  subtitle:
    "Stratégie, gestion des risques, financement et formation pour les banques, institutions de microfinance, PME et bailleurs internationaux — aux standards Bâle, BCEAO, COBAC et IFRS.",
  badge: "28 ans d'expérience",
  primaryCta: { label: "Discuter de votre projet", href: "#contact" },
  secondaryCta: { label: "Découvrir nos services", href: "#services" },
  trust: {
    label: "Ils nous font confiance",
    names: ["Banque Mondiale", "UNCDF", "Oikocredit", "GroFin"],
  },
} as const;

export const seo = {
  title: "Expertise 360 — Cabinet de conseil financier à Dakar",
  description:
    "Expertise 360, cabinet de conseil financier à Dakar : stratégie, gestion des risques, due diligence, mobilisation de financements et formation pour banques, IMF et PME en zone UEMOA et en Afrique de l'Ouest.",
} as const;
