/**
 * L'équipe (3 membres) et la carte fondateur — verbatim de l'inventaire
 * (§5 carte fondateur, §6 équipe).
 */

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  tags: string[];
  /** Chemin public de la photo, si disponible (sinon avatar à initiales). */
  photo?: string;
  /** Chemin public du CV PDF, si disponible. */
  cvUrl?: string;
  /** Mention affichée quand le CV n'est pas encore disponible. */
  cvStatus?: string;
  isFounder?: boolean;
};

export const teamIntro = {
  eyebrow: "Les hommes et femmes derrière notre expertise",
  title: "Notre Équipe",
  description:
    "Des professionnels aguerris, formés aux métiers standards internationaux, engagés pour le développement inclusif du secteur financier et des PME en Afrique.",
  joinLine: "Vous souhaitez rejoindre l'équipe ?",
  joinCta: { label: "Contactez-nous", href: "/#contact" },
} as const;

export const founderBio =
  "Expert en finance inclusive, en gestion des risques, en gestion du changement et en investissement d'impact, avec 30 ans d'expérience en Afrique et à l'international.";

/** Compétences du fondateur, dans l'ordre demandé. */
export const founderExpertises = [
  "Stratégie",
  "Finance inclusive",
  "Gestion des risques",
  "Investissement d'impact",
  "Recherche de financement",
  "Études et recherche",
  "Appui-conseil aux PME",
];

export type FounderCredential = { label: string; icon: string };

export const founderCard = {
  name: "Djibril Maguette MBENGUE",
  role: "Fondateur & Consultant Principal",
  subtitle: "Expert en Finance & Investissement",
  experienceBadge: "30 ans d'expérience",
  credentials: [
    { label: "Banque Mondiale — Washington, D.C.", icon: "globe" },
    { label: "UNCDF — Finance Inclusive", icon: "globe" },
    { label: "OIKOCREDIT Sénégal — Fonds d'Impact", icon: "briefcase" },
    { label: "GROFIN — Investissement PME Afrique", icon: "briefcase" },
    { label: "Coopération allemande (KfW)", icon: "globe" },
    { label: "Boulder Institute of Microfinance", icon: "graduation-cap" },
  ] satisfies FounderCredential[],
  // Asset §11 : déposer /public/djibril-mbengue.jpg puis renseigner `photo`.
  photo: undefined as string | undefined,
  cvUrl: "/cv-djibril-mbengue.pdf" as string | undefined,
  linkedin: "https://www.linkedin.com/in/djibril-mbengue-asmec-4b7a0442/",
} as const;

export const team: TeamMember[] = [
  {
    name: "Djibril Maguette MBENGUE",
    role: "Fondateur & Consultant Principal",
    isFounder: true,
    bio: founderBio,
    tags: founderExpertises,
    // Assets §11 : photo et CV à déposer dans /public (voir founderCard).
  },
  {
    name: "Tamsir FALL",
    role: "Consultant Senior — Finance Islamique & Microfinance",
    bio: "Spécialiste de la finance islamique et de l'assistance technique aux institutions de microfinance. Expert en développement de nouveaux produits agricoles et en études et recherche appliquée au secteur financier.",
    tags: ["Finance islamique", "Microfinance", "Produits agricoles", "Études & Recherche"],
    cvStatus: "CV à venir",
  },
  {
    name: "Mamadou MBENGUE",
    role: "Consultant Senior — Stratégie & Innovation Digitale",
    bio: "Expert en stratégie d'entreprise et gestion des PME. Spécialiste de la structuration de financements complexes et de l'exploitation des données et de l'intelligence artificielle au service de la performance financière.",
    tags: ["Stratégie", "Gestion PME", "Structuration financière", "Data & IA"],
    cvStatus: "CV à venir",
  },
];
