/**
 * L'équipe (4 membres) et la carte fondateur — verbatim de l'inventaire
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
    "Des professionnels aguerris, formés aux meilleurs standards internationaux, engagés pour le développement financier de l'Afrique.",
  joinLine: "Vous souhaitez rejoindre l'équipe ?",
  joinCta: { label: "Contactez-nous", href: "#contact" },
} as const;

export type FounderCredential = { label: string; icon: string };

export const founderCard = {
  name: "Djibril MBENGUE",
  role: "Fondateur & Consultant Principal",
  subtitle: "Expert en Finance & Investissement",
  experienceBadge: "28 ans d'expérience",
  credentials: [
    { label: "Banque Mondiale — Washington, D.C.", icon: "globe" },
    { label: "UNCDF — Finance Inclusive", icon: "globe" },
    { label: "OIKOCREDIT Sénégal — Fonds d'Impact", icon: "briefcase" },
    { label: "GROFIN — Investissement PME Afrique", icon: "briefcase" },
    { label: "Institutions financières — Sénégal", icon: "flag" },
  ] satisfies FounderCredential[],
  // Assets §11 : déposer /public/djibril-mbengue.jpg et
  // /public/cv-djibril-mbengue.pdf puis renseigner les chemins ci-dessous.
  photo: undefined as string | undefined,
  cvUrl: undefined as string | undefined,
} as const;

export const team: TeamMember[] = [
  {
    name: "Djibril MBENGUE",
    role: "Fondateur & Consultant Principal",
    isFounder: true,
    bio: "Expert en finance d'entreprise, gestion des risques et investissement à impact. 28 ans d'expérience entre Dakar, Washington et les marchés africains.",
    tags: ["Gestion des risques", "Stratégie", "Impact Finance", "PME & IMF"],
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
  {
    name: "Diarry SOW",
    role: "Experte Seniore — Sécurité & Gestion des Risques",
    bio: "Experte en sécurité active et passive des institutions financières et en gestion des risques opérationnels. Spécialiste du fundraising et de la redevabilité des organisations auprès de leurs bailleurs et partenaires.",
    tags: ["Sécurité institutionnelle", "Gestion des risques", "Fundraising", "Redevabilité"],
    cvStatus: "CV à venir",
  },
];
