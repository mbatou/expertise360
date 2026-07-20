/**
 * L'équipe — 4 membres. Seul le fondateur (Djibril Mbengue) est documenté dans
 * l'audit Pandorus. Les 3 autres membres sont dans l'inventaire introuvable :
 * TODO visibles plutôt qu'inventer des noms (brief §2).
 */

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Chemin public de la photo, si disponible (sinon avatar à initiales). */
  photo?: string;
  isFounder?: boolean;
};

export const teamIntro = {
  eyebrow: "Notre équipe",
  title: "Des seniors de la finance africaine",
  // TODO: intro de section verbatim de l'inventaire.
  description:
    "Une équipe resserrée de consultants seniors, mobilisée en direct sur chaque mission.",
} as const;

export const founderCard = {
  name: "Djibril Mbengue",
  role: "Fondateur",
  // TODO: bio verbatim du fondateur (inventaire). Texte provisoire fondé sur
  // l'audit : 28 ans d'expérience, missions Banque Mondiale, UNCDF, Oikocredit,
  // GroFin, standards Bâle/BCEAO/COBAC/IFRS.
  bio: "Près de trois décennies d'expérience dans la finance en Afrique de l'Ouest, au service des banques, des institutions de microfinance et des bailleurs internationaux — dont la Banque Mondiale, l'UNCDF, Oikocredit et GroFin.",
  // Déposer le fichier dans /public puis renseigner : "/djibril-mbengue.jpg"
  photo: undefined as string | undefined,
  // Déposer le fichier dans /public puis renseigner : "/cv-djibril-mbengue.pdf"
  cvUrl: undefined as string | undefined,
} as const;

export const team: TeamMember[] = [
  {
    name: "Djibril Mbengue",
    role: "Fondateur",
    bio: "28 ans d'expérience en finance et conseil en Afrique de l'Ouest.",
    isFounder: true,
    // TODO: photo — déposer /public/djibril-mbengue.jpg puis renseigner ici.
  },
  {
    // TODO: nom, rôle et bio du membre 2 (inventaire introuvable).
    name: "TODO : membre de l'équipe",
    role: "TODO : fonction",
    bio: "TODO : bio à reprendre de l'inventaire de contenu.",
  },
  {
    // TODO: nom, rôle et bio du membre 3 (inventaire introuvable).
    name: "TODO : membre de l'équipe",
    role: "TODO : fonction",
    bio: "TODO : bio à reprendre de l'inventaire de contenu.",
  },
  {
    // TODO: nom, rôle et bio du membre 4 (inventaire introuvable).
    name: "TODO : membre de l'équipe",
    role: "TODO : fonction",
    bio: "TODO : bio à reprendre de l'inventaire de contenu.",
  },
];
