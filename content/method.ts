/**
 * La méthode — 4 étapes. Icônes documentées dans l'audit Pandorus (§6.3) :
 * search / pen-tool / settings / bar-chart-3. « Conception » est confirmée par
 * l'audit ; les autres intitulés et descriptions sont provisoires.
 * TODO: verbatim de l'inventaire.
 */

export type MethodStep = {
  step: number;
  title: string;
  description: string;
  icon: string;
};

export const methodIntro = {
  eyebrow: "Notre approche",
  title: "Une méthode éprouvée, en quatre étapes",
} as const;

export const method: MethodStep[] = [
  {
    step: 1,
    title: "Diagnostic",
    icon: "search",
    description:
      "Analyse approfondie de votre situation, de vos contraintes réglementaires et de vos objectifs.",
  },
  {
    step: 2,
    title: "Conception",
    icon: "pen-tool",
    description:
      "Élaboration de solutions sur mesure, alignées sur les standards internationaux et votre contexte.",
  },
  {
    step: 3,
    title: "Mise en œuvre",
    icon: "settings",
    description:
      "Accompagnement opérationnel de vos équipes dans le déploiement des recommandations.",
  },
  {
    step: 4,
    title: "Suivi & évaluation",
    icon: "bar-chart-3",
    description:
      "Mesure des résultats, ajustements et transfert de compétences pour un impact durable.",
  },
];
