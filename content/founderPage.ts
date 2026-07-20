/**
 * Page « Fondateur » (audit Pandorus §7 — Phase 2 : « en conseil boutique,
 * on achète d'abord l'homme et son parcours »). Contenu fondé exclusivement
 * sur les éléments documentés de l'inventaire (§5 carte fondateur, §6 équipe).
 */

import { founderCard } from "./team";

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
    "Une carrière construite entre les grandes institutions de développement et le terrain financier africain — au service des banques, des IMF et des PME.",
  credentials: founderCard.credentials,
  expertisesTitle: "Domaines d'expertise",
  expertises: ["Gestion des risques", "Stratégie", "Impact Finance", "PME & IMF"],
  visionTitle: "La vision 360°",
  visionText:
    "Expertise 360 conjugue la rigueur des standards internationaux et la connaissance intime des réalités africaines pour des recommandations véritablement actionnables. Toutes les interventions intègrent un volet formation pour pérenniser les acquis au sein des équipes.",
  ctaTitle: "Échanger avec le fondateur",
  ctaText:
    "Décrivez votre projet ou votre problématique : chaque mission démarre par un échange direct avec Djibril Mbengue.",
} as const;
