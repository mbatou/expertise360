/** Contenu du footer — verbatim de l'inventaire (§10). */

import { site } from "./site";

export const footer = {
  tagline:
    "Cabinet de conseil financier au service du développement des institutions et des entreprises en Afrique.",
  columns: [
    {
      title: "Navigation",
      links: [
        { label: "Nos services", href: "#services" },
        { label: "Notre équipe", href: "#equipe" },
        { label: "Secteurs", href: "#secteurs" },
        { label: "Notre approche", href: "#approche" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Plans stratégiques", href: "#services" },
        { label: "Gestion des risques", href: "#services" },
        { label: "Produits financiers", href: "#services" },
        { label: "Formation & IA", href: "#services" },
      ],
    },
    {
      title: "Secteurs",
      links: [
        { label: "Banques & IMF", href: "#secteurs" },
        { label: "PME & Agrobusiness", href: "#secteurs" },
        { label: "Finance verte", href: "#secteurs" },
        { label: "Bailleurs internationaux", href: "#secteurs" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Demande de mission", href: "#contact" },
        { label: "Nous écrire", href: "#contact" },
        { label: site.email, href: `mailto:${site.email}` },
      ],
    },
  ],
  location: "Dakar, Sénégal · Zone UEMOA · International",
  copyright: `© ${new Date().getFullYear()} Expertise 360 — Tous droits réservés`,
} as const;
