/** Contenu du footer — verbatim de l'inventaire (§10). */

import { site } from "./site";

export const footer = {
  tagline:
    "Cabinet de conseil financier au service du développement des institutions et des entreprises en Afrique.",
  columns: [
    {
      title: "Navigation",
      links: [
        { label: "Nos services", href: "/#services" },
        { label: "Notre équipe", href: "/#equipe" },
        { label: "Le fondateur", href: "/fondateur" },
        { label: "Articles & publications", href: "/articles" },
        { label: "Notre approche", href: "/#approche" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Gestion des risques", href: "/services/gestion-risques" },
        { label: "Due diligence", href: "/services/analyse-due-diligence" },
        { label: "Mobilisation de financements", href: "/services/mobilisation-financements" },
        { label: "Tous nos services", href: "/#services" },
      ],
    },
    {
      title: "Secteurs",
      links: [
        { label: "Banques & IMF", href: "/#secteurs" },
        { label: "PME & Agrobusiness", href: "/#secteurs" },
        { label: "Finance verte", href: "/#secteurs" },
        { label: "Bailleurs internationaux", href: "/#secteurs" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Demande de mission", href: "/#contact" },
        { label: "Nous écrire", href: `mailto:${site.email}` },
      ],
    },
  ],
  location: "Dakar, Sénégal · Zone UEMOA · International",
  copyright: `© ${new Date().getFullYear()} Expertise 360 — Tous droits réservés`,
} as const;
