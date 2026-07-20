/**
 * Contenu du footer.
 * TODO: colonnes et mentions verbatim de l'inventaire (§10) si différentes.
 */

import { nav, site } from "./site";

export const footer = {
  description:
    "Cabinet de conseil financier basé à Dakar — stratégie, risque, financement et formation pour les institutions financières et les entreprises d'Afrique de l'Ouest.",
  columns: [
    {
      title: "Navigation",
      links: nav.map(({ label, href }) => ({ label, href })),
    },
    {
      title: "Contact",
      links: [
        { label: site.email, href: `mailto:${site.email}` },
        { label: `${site.address.city}, ${site.address.country}`, href: "#contact" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} ${site.name}. Tous droits réservés.`,
} as const;
