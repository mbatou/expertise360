/**
 * Les 9 services. Intitulés et icônes Lucide : correspondance documentée dans
 * l'audit Pandorus (§6.3). Descriptions : TODO — texte provisoire fidèle au
 * positionnement documenté, à remplacer par le verbatim de l'inventaire.
 */

export type Service = {
  title: string;
  description: string;
  /** Nom d'icône Lucide (kebab-case), résolu dans components/ui/icons.ts */
  icon: string;
};

export const servicesIntro = {
  eyebrow: "Nos services",
  title: "Un accompagnement complet, de la stratégie au financement",
  // TODO: intro de section verbatim de l'inventaire.
  description:
    "Neuf domaines d'intervention couvrant l'ensemble du cycle de vie des institutions financières et des entreprises.",
} as const;

export const services: Service[] = [
  {
    title: "Plans stratégiques",
    icon: "line-chart",
    description:
      "Élaboration de plans stratégiques et de business plans alignés sur les réalités du marché ouest-africain.",
  },
  {
    title: "Gestion des risques",
    icon: "shield-check",
    description:
      "Dispositifs de gestion des risques conformes aux standards Bâle et aux exigences BCEAO et COBAC.",
  },
  {
    title: "Produits financiers",
    icon: "coins",
    description:
      "Conception et déploiement de produits financiers adaptés aux besoins des clientèles bancaires et microfinance.",
  },
  {
    title: "Analyse & due diligence",
    icon: "search-check",
    description:
      "Analyses financières et missions de due diligence pour investisseurs, bailleurs et institutions.",
  },
  {
    title: "Mobilisation de financements",
    icon: "hand-coins",
    description:
      "Accompagnement dans la levée de ressources auprès des bailleurs et investisseurs internationaux.",
  },
  {
    title: "Gestion du changement",
    icon: "refresh-cw",
    description:
      "Conduite du changement et transformation organisationnelle des institutions financières.",
  },
  {
    title: "Formation & intelligence artificielle",
    icon: "brain-circuit",
    description:
      "Programmes de formation, y compris sur les usages de l'intelligence artificielle en finance.",
  },
  {
    title: "Inclusion & finance verte",
    icon: "sprout",
    description:
      "Stratégies d'inclusion financière et de finance verte pour un développement durable.",
  },
  {
    title: "Conseil aux IMF",
    icon: "building-2",
    description:
      "Appui-conseil dédié aux institutions de microfinance : gouvernance, conformité, performance.",
  },
];
