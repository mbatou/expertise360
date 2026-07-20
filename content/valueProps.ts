/**
 * Les 5 points de valeur ajoutée — verbatim de l'inventaire (§5).
 * Icônes : choix Lucide cohérent avec le design system (pastilles or).
 */

export type ValueProp = {
  title: string;
  description: string;
  icon: string;
};

export const valuePropsIntro = {
  eyebrow: "Notre valeur ajoutée",
  title: "Une Expertise Forgée au Plus Haut Niveau",
  description:
    "Expertise 360 conjugue la rigueur des standards internationaux et la connaissance intime des réalités africaines pour des recommandations véritablement actionnables.",
} as const;

export const valueProps: ValueProp[] = [
  {
    title: "Standards internationaux",
    icon: "badge-check",
    description:
      "Maîtrise des normes Bâle, BCEAO, COBAC, IFRS et des meilleures pratiques mondiales du secteur financier.",
  },
  {
    title: "Connaissance du terrain africain",
    icon: "map-pin",
    description:
      "Compréhension fine des marchés UEMOA, des contraintes de liquidité et des dynamiques des PME locales.",
  },
  {
    title: "Réseau institutionnel",
    icon: "globe",
    description:
      "Relations établies avec les bailleurs multilatéraux, fonds d'impact et institutions de développement (Banque Mondiale, UNCDF…).",
  },
  {
    title: "Approche sur mesure",
    icon: "sliders-horizontal",
    description:
      "Chaque mission est structurée selon les spécificités de l'organisation : taille, secteur, enjeux stratégiques et contexte réglementaire.",
  },
  {
    title: "Transfert de compétences",
    icon: "graduation-cap",
    description:
      "Toutes nos interventions intègrent un volet formation pour pérenniser les acquis au sein des équipes.",
  },
];
