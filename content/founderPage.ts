/**
 * Page « Fondateur » (audit Pandorus §7 — Phase 2). Contenu fondé sur
 * l'inventaire (§5, §6) et sur le CV de Djibril Mbengue
 * (/public/cv-djibril-mbengue.pdf, mars 2026) — aucun fait inventé.
 * Coordonnées personnelles du CV volontairement exclues du site.
 */

import { founderCard } from "./team";

export type TimelineEntry = {
  period: string;
  organisation: string;
  role: string;
  description: string;
  icon: string;
};

export type RecentMission = {
  client: string;
  period: string;
  scope: string;
  description: string;
};

export const founderPage = {
  seoTitle: "Djibril Mbengue — Fondateur d'Expertise 360, Dakar",
  seoDescription:
    "Djibril Mbengue, fondateur et consultant principal d'Expertise 360 (Dakar) : 28 ans d'expérience en finance, gestion des risques et investissement à impact — Banque Mondiale, UNCDF, Oikocredit, GroFin.",
  eyebrow: "Fondateur & Consultant Principal",
  name: founderCard.name,
  subtitle: founderCard.subtitle,
  experienceBadge: founderCard.experienceBadge,
  bio: "Expert en finance d'entreprise, gestion des risques et investissement à impact. 28 ans d'expérience entre Dakar, Washington et les marchés africains.",

  parcoursTitle: "Un parcours au plus haut niveau institutionnel",
  parcoursIntro:
    "De la gestion des risques du Crédit Mutuel du Sénégal au CGAP/Banque mondiale à Washington, puis à la direction de fonds d'impact — une carrière entière au service de la finance africaine.",
  timeline: [
    {
      period: "Depuis 2021",
      organisation: "UNCDF — Least Developed Countries Investment Platform",
      role: "Expert Senior en investissement",
      icon: "globe",
      description:
        "Identification et due diligence de PME et d'institutions financières (banques, IMF) pour les financements de l'UNCDF ; dossiers présentés à l'UNCDF et à Bamboo Capital. Également point focal de la KfW pour l'initiative « Investissements pour l'Emploi » au Sénégal.",
    },
    {
      period: "Depuis 2005",
      organisation: "Boulder Institute of Microfinance",
      role: "Professeur en finance inclusive · Administrateur depuis 2017",
      icon: "graduation-cap",
      description:
        "Enseignement à Turin puis Marseille (KEDGE Business School), en partenariat avec l'AFD : réglementation, digitalisation, gestion des risques, analyse financière, développement de nouveaux produits.",
    },
    {
      period: "2017 – 2020",
      organisation: "GroFin Sénégal — Fonds d'impact dédié aux PME",
      role: "Directeur Pays & Directeur des Investissements",
      icon: "briefcase",
      description:
        "Mise en place du bureau pays et développement du portefeuille de PME dans l'éducation, la santé, l'agro-business, la manufacture et les énergies renouvelables ; assistance technique aux entreprises.",
    },
    {
      period: "2015 – 2017",
      organisation: "Oikocredit — Fonds d'impact (IMF, banques, PME)",
      role: "Directeur Pays Sénégal",
      icon: "briefcase",
      description:
        "Développement d'un portefeuille de 18 projets — banques, institutions de microfinance et PME des filières riz, noix de cajou, pêche et agroalimentaire — pour un encours de plus de 10 millions d'euros.",
    },
    {
      period: "2007 – 2015",
      organisation: "CGAP / Groupe de la Banque mondiale — Washington, D.C.",
      role: "Spécialiste en microfinance, puis du secteur financier",
      icon: "landmark",
      description:
        "Co-président du programme régional PRAFIDE (zone UMOA), responsable de la formation des banques centrales à l'inclusion financière (BCEAO, East African Community) avec le Toronto Centre, appui aux cadres réglementaires de la finance inclusive dans une douzaine de pays d'Afrique.",
    },
    {
      period: "2005 – 2007",
      organisation: "Fonds d'équipement des Nations Unies (FENU / UNCDF)",
      role: "Gestionnaire Technique de Portefeuille — Bureau régional",
      icon: "globe",
      description:
        "En charge de 11 pays d'Afrique de l'Ouest et du Centre : mise en œuvre des stratégies nationales d'inclusion financière et gestion des fonds d'investissement du FENU.",
    },
    {
      period: "2000 – 2004",
      organisation: "REMIX Bureau d'Études — Afrique de l'Ouest",
      role: "Directeur des Opérations",
      icon: "line-chart",
      description:
        "Pilotage des départements microfinance, appui aux PME et évaluation de projets : missions pour le FIDA (Burkina Faso, RDC), Care International (Niger) et le programme PA/FMR financé par DANIDA.",
    },
    {
      period: "1996 – 2000",
      organisation: "Fédération des Caisses du Crédit Mutuel du Sénégal",
      role: "Responsable de la gestion des risques",
      icon: "shield-check",
      description:
        "Mise en place du dispositif de contrôle interne et des procédures de gestion des risques de la fédération ; formation des contrôleurs internes ; stratégie de consolidation des caisses déficitaires.",
    },
  ] satisfies TimelineEntry[],

  missionsTitle: "Missions récentes",
  missionsIntro:
    "Une sélection de mandats conduits ces dernières années pour des bailleurs, régulateurs et institutions financières.",
  missions: [
    {
      client: "KfW — Coopération Financière Allemande (via DevImpact)",
      period: "2025 – 2026 · Sénégal",
      scope: "Due diligence « crédit vert »",
      description:
        "Due diligence de La Banque Agricole, du Crédit Mutuel du Sénégal, d'UM-ACEP et de CAURIE pour leur sélection comme partenaires de la ligne de crédit vert de la KfW, avec évaluation des capacités d'absorption et des besoins d'assistance technique.",
    },
    {
      client: "UNCDF / UNICEF",
      period: "2025 · Sénégal, Burkina, Côte d'Ivoire, RDC, Ouganda, Zambie, Malawi",
      scope: "Expert sénior en investissement",
      description:
        "Membre de l'équipe de conception du futur fonds First Food Africa, en partenariat avec l'UNICEF et FMO ; recherche préliminaire d'opportunités d'investissement.",
    },
    {
      client: "CECAM — Madagascar",
      period: "2023 – 2025 · Madagascar",
      scope: "Gouvernance des risques & SIG",
      description:
        "Mise en place de la deuxième ligne de défense (contrôle permanent) recommandée par la CSBF, fiabilisation du système d'information de gestion et appui au plan stratégique 2026-2030.",
    },
    {
      client: "CAURIE MF, VisionFund, MICROSEN",
      period: "2023 – 2024 · Sénégal",
      scope: "Plans préventifs de redressement",
      description:
        "Élaboration des plans préventifs de redressement conformément à la circulaire n° 001-2020-CB de la Commission bancaire de l'UMOA.",
    },
    {
      client: "DSIK & MINECOFIN — Rwanda",
      period: "2020 – 2024 · Rwanda",
      scope: "Consolidation de coopératives financières",
      description:
        "Lead consultant pour la consolidation des UMURENGE SACCOs de cinq districts et l'élaboration de leurs business plans et budgets consolidés.",
    },
    {
      client: "CAURIE MF, URMECS, APSFD-Sénégal",
      period: "2019 – 2025 · Sénégal",
      scope: "Plans stratégiques de développement",
      description:
        "Élaboration des plans stratégiques de CAURIE Microfinance (2020-2024 puis 2025-2029), de l'URMECS (2025-2029) et de l'APSFD-Sénégal (2021-2025).",
    },
  ] satisfies RecentMission[],

  formationTitle: "Formation & certifications",
  formations: [
    "Certification « Green Finance » — RENAC (2021)",
    "Certificat en monnaie digitale — Digital Frontiers Institute (2019)",
    "Formation en leadership pour managers — African Management Institute (2017-2018)",
    "Consultant PME accrédité — Association Internationale des Consultants Accrédités PME (2018)",
    "Certification OMEGA Performance — gestion et financement des PME (2017)",
    "Formation de formateurs en microfinance — programme CAPAF / AFD",
    "Maîtrise en économie, option gestion des entreprises — Université Cheikh Anta Diop (1995)",
  ],

  expertisesTitle: "Domaines d'expertise",
  expertises: ["Gestion des risques", "Stratégie", "Impact Finance", "PME & IMF"],
  visionTitle: "La vision 360°",
  visionText:
    "Expertise 360 conjugue la rigueur des standards internationaux et la connaissance intime des réalités africaines pour des recommandations véritablement actionnables. Toutes les interventions intègrent un volet formation pour pérenniser les acquis au sein des équipes.",
  ctaTitle: "Échanger avec le fondateur",
  ctaText:
    "Décrivez votre projet ou votre problématique : chaque mission démarre par un échange direct avec Djibril Mbengue.",
} as const;
