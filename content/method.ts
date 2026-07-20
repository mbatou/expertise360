/** La méthode en 4 étapes — verbatim de l'inventaire (§8). */

export type MethodStep = {
  step: number;
  title: string;
  description: string;
  icon: string;
};

export const methodIntro = {
  eyebrow: "Notre méthode",
  title: "Une Approche Structurée en 4 Étapes",
  description:
    "Chaque mission suit un processus rigoureux garantissant des livrables de qualité et un impact mesurable.",
} as const;

export const method: MethodStep[] = [
  {
    step: 1,
    title: "Diagnostic",
    icon: "search",
    description:
      "Analyse approfondie de la situation actuelle : état financier, environnement réglementaire, positionnement concurrentiel et enjeux clés.",
  },
  {
    step: 2,
    title: "Conception",
    icon: "pen-tool",
    description:
      "Élaboration de solutions sur mesure : plan stratégique, dispositif de gestion des risques, produit financier ou programme de formation adapté.",
  },
  {
    step: 3,
    title: "Mise en œuvre",
    icon: "settings",
    description:
      "Accompagnement opérationnel dans le déploiement : ateliers de travail, renforcement de capacités, suivi-évaluation et ajustements en temps réel.",
  },
  {
    step: 4,
    title: "Mesure d'impact",
    icon: "bar-chart-3",
    description:
      "Évaluation des résultats par rapport aux objectifs initiaux, production de rapports et recommandations pour pérenniser les acquis.",
  },
];
