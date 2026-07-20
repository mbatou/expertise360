/**
 * Section contact + options du formulaire.
 * TODO: options « Type de mission » verbatim (inventaire §9) — liste provisoire
 * dérivée des 9 services documentés.
 */

export const contactIntro = {
  eyebrow: "Contact",
  title: "Parlons de votre projet",
  description:
    "Décrivez-nous votre besoin : nous revenons vers vous rapidement pour un premier échange sans engagement.",
} as const;

export const missionTypes: string[] = [
  "Plan stratégique",
  "Gestion des risques",
  "Analyse & due diligence",
  "Mobilisation de financements",
  "Formation",
  "Autre demande",
];
