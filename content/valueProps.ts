/**
 * Les 5 points de valeur ajoutée. Fondés sur le positionnement documenté dans
 * l'audit Pandorus (vision 360°, ancrage terrain africain, standards
 * internationaux, 28 ans, réseau de bailleurs).
 * TODO: aligner le verbatim sur l'inventaire dès disponibilité.
 */

export type ValueProp = {
  title: string;
  description: string;
  icon: string;
};

export const valuePropsIntro = {
  eyebrow: "Notre valeur ajoutée",
  title: "Pourquoi Expertise 360",
} as const;

export const valueProps: ValueProp[] = [
  {
    title: "Vision 360°",
    icon: "compass",
    description:
      "Une approche intégrée qui relie stratégie, risque, financement et organisation — plutôt que des expertises en silos.",
  },
  {
    title: "Ancrage terrain africain",
    icon: "map-pin",
    description:
      "Une connaissance directe des marchés d'Afrique de l'Ouest et des réalités opérationnelles des institutions locales.",
  },
  {
    title: "Standards internationaux",
    icon: "badge-check",
    description:
      "Des livrables aux normes Bâle, BCEAO, COBAC et IFRS, exigés par les régulateurs et les bailleurs.",
  },
  {
    title: "28 ans d'expérience",
    icon: "award",
    description:
      "Des missions conduites en direct par des seniors, forts de près de trois décennies dans la finance africaine.",
  },
  {
    title: "Réseau de bailleurs internationaux",
    icon: "globe",
    description:
      "Des références auprès de la Banque Mondiale, de l'UNCDF, d'Oikocredit et de GroFin.",
  },
];
