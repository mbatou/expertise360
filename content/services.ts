/**
 * Les 9 services — verbatim de l'inventaire (§4), icônes Lucide du champ
 * `icon` de chaque item.
 */

export type Service = {
  id: string;
  title: string;
  description: string;
  /** Nom d'icône Lucide (kebab-case), résolu dans components/ui/icons.ts */
  icon: string;
};

export const servicesIntro = {
  eyebrow: "Ce que nous faisons",
  title: "Nos Domaines d'Intervention",
  description:
    "Un spectre complet d'expertises au service des institutions financières, des PME et des projets de développement en Afrique et à l'international.",
} as const;

export const services: Service[] = [
  {
    id: "plans-strategiques",
    title: "Élaboration de Plans Stratégiques",
    icon: "line-chart",
    description:
      "Accompagnement dans la conception de plans de développement à 3-5 ans : diagnostic stratégique (SWOT/PESTEL), définition des axes prioritaires, tableaux de bord et BSC pour institutions financières et PME.",
  },
  {
    id: "gestion-risques",
    title: "Gestion des Risques Financiers",
    icon: "shield-check",
    description:
      "Mise en place et renforcement de dispositifs de gestion des risques (crédit, liquidité, marché, opérationnel) conformes aux normes BCEAO, COBAC et standards internationaux Bâle II/III.",
  },
  {
    id: "produits-financiers",
    title: "Développement de Produits Financiers",
    icon: "coins",
    description:
      "Conception de produits adaptés aux besoins spécifiques : finance agricole, produits de microfinance, instruments de financement des PME, produits d'épargne et de crédit innovants.",
  },
  {
    id: "analyse-due-diligence",
    title: "Analyse Financière & Due Diligence",
    icon: "search-check",
    description:
      "Diagnostic approfondi de la santé financière des organisations, évaluation avant investissement, notation interne, analyse de portefeuille et recommandations stratégiques d'optimisation.",
  },
  {
    id: "mobilisation-financements",
    title: "Recherche & Mobilisation de Financements",
    icon: "hand-coins",
    description:
      "Identification des sources de financement adaptées (bailleurs multilatéraux, fonds d'impact, marchés financiers), montage de dossiers et accompagnement dans les négociations de financement.",
  },
  {
    id: "gestion-changement",
    title: "Gestion du Changement",
    icon: "refresh-cw",
    description:
      "Élaboration de plans de conduite du changement pour l'appropriation de projets de transformation interne, digitalisation et réformes organisationnelles au sein des institutions financières.",
  },
  {
    id: "formation-ia",
    title: "Formation : IA & Gestion des Risques",
    icon: "brain-circuit",
    description:
      "Programmes de renforcement de capacités sur l'utilisation de l'Intelligence Artificielle dans la gestion des risques : scoring crédit, détection de fraude, analyse prédictive et modélisation.",
  },
  {
    id: "inclusion-finance-verte",
    title: "Inclusion Financière & Finance Verte",
    icon: "sprout",
    description:
      "Études, évaluations et stratégies d'inclusion financière ; développement de produits et d'indicateurs de performance pour la finance verte et l'investissement à impact social et environnemental.",
  },
  {
    id: "conseil-imf",
    title: "Conseil aux Institutions de Microfinance",
    icon: "building-2",
    description:
      "Appui institutionnel global aux IMF : gouvernance, gestion du portefeuille à risque, conformité réglementaire, digitalisation des opérations et amélioration de la performance sociale.",
  },
];
