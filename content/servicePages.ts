/**
 * Pages satellites des 3 services phares (audit Pandorus §7 — Phase 2 :
 * gestion des risques, due diligence, mobilisation de financements).
 * Les intros reprennent verbatim les descriptions de l'inventaire (§4) ;
 * le détail de l'offre développe ces descriptions sans inventer de faits
 * (pas de références clients ni de chiffres non documentés).
 */

export type ServicePageOffer = {
  title: string;
  description: string;
  icon: string;
};

export type ServicePage = {
  slug: string;
  /** Libellé court pour le maillage interne. */
  navLabel: string;
  seoTitle: string;
  seoDescription: string;
  title: string;
  intro: string;
  offerTitle: string;
  offers: ServicePageOffer[];
  /** Secteurs concernés (intitulés de content/sectors.ts). */
  audiences: string[];
  ctaTitle: string;
  ctaText: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "gestion-risques",
    navLabel: "Gestion des risques",
    seoTitle: "Gestion des risques financiers — BCEAO, COBAC, Bâle II/III",
    seoDescription:
      "Expertise 360 (Dakar) conçoit et renforce les dispositifs de gestion des risques des banques et IMF : crédit, liquidité, marché, opérationnel — conformes aux normes BCEAO, COBAC et Bâle II/III.",
    title: "Gestion des Risques Financiers",
    intro:
      "Mise en place et renforcement de dispositifs de gestion des risques (crédit, liquidité, marché, opérationnel) conformes aux normes BCEAO, COBAC et standards internationaux Bâle II/III.",
    offerTitle: "Ce que nous mettons en place",
    offers: [
      {
        title: "Dispositifs de gestion des risques",
        icon: "shield-check",
        description:
          "Conception et renforcement de dispositifs couvrant les risques de crédit, de liquidité, de marché et opérationnels, adaptés à la taille et au profil de votre institution.",
      },
      {
        title: "Conformité réglementaire",
        icon: "scale",
        description:
          "Mise en conformité avec les normes BCEAO et COBAC et alignement sur les standards internationaux Bâle II/III.",
      },
      {
        title: "Notation interne & portefeuille à risque",
        icon: "search-check",
        description:
          "Outils de notation interne, suivi du portefeuille à risque et tableaux de bord pour objectiver le pilotage.",
      },
      {
        title: "Intelligence Artificielle appliquée",
        icon: "brain-circuit",
        description:
          "Intégration de l'IA dans la gestion des risques : scoring crédit, détection de fraude, analyse prédictive et modélisation.",
      },
      {
        title: "Renforcement de capacités",
        icon: "graduation-cap",
        description:
          "Formation des équipes risques et des instances de gouvernance pour pérenniser le dispositif au sein de l'institution.",
      },
    ],
    audiences: [
      "Banques commerciales",
      "Institutions de microfinance (IMF)",
      "Fonds d'investissement",
      "Régulateurs & Banques centrales",
    ],
    ctaTitle: "Renforcez votre dispositif de gestion des risques",
    ctaText:
      "Parlons de votre contexte réglementaire et de vos priorités : nous construisons un dispositif conforme et opérationnel, avec vos équipes.",
  },
  {
    slug: "analyse-due-diligence",
    navLabel: "Due diligence",
    seoTitle: "Analyse financière & due diligence — banques, IMF, PME",
    seoDescription:
      "Expertise 360 (Dakar) réalise diagnostics financiers, due diligences pré-investissement, notations internes et analyses de portefeuille pour investisseurs, bailleurs et institutions en zone UEMOA.",
    title: "Analyse Financière & Due Diligence",
    intro:
      "Diagnostic approfondi de la santé financière des organisations, évaluation avant investissement, notation interne, analyse de portefeuille et recommandations stratégiques d'optimisation.",
    offerTitle: "Ce que nous analysons",
    offers: [
      {
        title: "Diagnostic financier approfondi",
        icon: "search-check",
        description:
          "Analyse de la santé financière de l'organisation : rentabilité, liquidité, solvabilité, qualité du portefeuille et structure de financement.",
      },
      {
        title: "Due diligence pré-investissement",
        icon: "briefcase",
        description:
          "Évaluation avant investissement pour fonds d'impact, bailleurs et investisseurs : gouvernance, performance, conformité et risques.",
      },
      {
        title: "Notation interne & portefeuille",
        icon: "bar-chart-3",
        description:
          "Notation interne et analyse de portefeuille pour objectiver la décision d'investissement ou de crédit.",
      },
      {
        title: "Recommandations actionnables",
        icon: "line-chart",
        description:
          "Recommandations stratégiques d'optimisation, hiérarchisées et directement opérationnelles pour vos équipes.",
      },
    ],
    audiences: [
      "Fonds d'investissement",
      "Organisations internationales",
      "Banques commerciales",
      "Institutions de microfinance (IMF)",
    ],
    ctaTitle: "Besoin d'un diagnostic ou d'une due diligence ?",
    ctaText:
      "Décrivez-nous l'organisation ou l'opportunité à évaluer : nous cadrons la mission et son calendrier avec vous.",
  },
  {
    slug: "mobilisation-financements",
    navLabel: "Mobilisation de financements",
    seoTitle: "Recherche & mobilisation de financements — PME, IMF, UEMOA",
    seoDescription:
      "Expertise 360 (Dakar) accompagne PME, IMF et organisations dans la recherche de financements : bailleurs multilatéraux, fonds d'impact, marchés financiers — montage de dossiers et négociations.",
    title: "Recherche & Mobilisation de Financements",
    intro:
      "Identification des sources de financement adaptées (bailleurs multilatéraux, fonds d'impact, marchés financiers), montage de dossiers et accompagnement dans les négociations de financement.",
    offerTitle: "Comment nous vous accompagnons",
    offers: [
      {
        title: "Identification des sources",
        icon: "search",
        description:
          "Cartographie des sources de financement adaptées à votre profil : bailleurs multilatéraux, fonds d'impact, marchés financiers.",
      },
      {
        title: "Montage de dossiers",
        icon: "pen-tool",
        description:
          "Préparation de dossiers de financement solides : business plan, projections financières et documentation exigée par les bailleurs.",
      },
      {
        title: "Négociations de financement",
        icon: "hand-coins",
        description:
          "Accompagnement dans les négociations avec bailleurs et investisseurs, jusqu'à la conclusion du financement.",
      },
      {
        title: "Redevabilité envers les bailleurs",
        icon: "badge-check",
        description:
          "Appui à la redevabilité de votre organisation auprès de ses bailleurs et partenaires, une fois le financement obtenu.",
      },
    ],
    audiences: [
      "PME & Entreprises",
      "Institutions de microfinance (IMF)",
      "Agrobusiness & Finance agricole",
      "Organisations internationales",
    ],
    ctaTitle: "Financez votre développement",
    ctaText:
      "Présentez-nous votre projet et vos besoins de financement : nous identifions les sources pertinentes et montons le dossier avec vous.",
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((page) => page.slug === slug);
}
