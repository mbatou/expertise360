/** Section contact et formulaire — verbatim de l'inventaire (§9). */

export const contactIntro = {
  eyebrow: "Travaillons ensemble",
  title: "Prêt à transformer votre organisation ?",
  description:
    "Que vous soyez une institution financière cherchant à renforcer sa stratégie, une PME en quête de financement ou une organisation souhaitant former ses équipes, Expertise 360 est votre partenaire de confiance.",
} as const;

export const contactForm = {
  title: "Demande de consultation",
  labels: {
    nom: "Prénom & Nom",
    organisation: "Organisation",
    email: "Email professionnel",
    type_mission: "Type de mission",
    message: "Votre message",
  },
  placeholders: {
    nom: "Jean Dupont",
    organisation: "Nom de votre institution",
    email: "vous@organisation.com",
    type_mission: "Sélectionner un domaine",
    message: "Décrivez brièvement votre besoin ou projet...",
  },
  submit: "Envoyer la demande",
} as const;

export const missionTypes: string[] = [
  "Plan stratégique de développement",
  "Gestion des risques",
  "Développement de produits financiers",
  "Analyse financière & Due Diligence",
  "Recherche de financement",
  "Formation & Renforcement de capacités",
  "Inclusion financière / Finance verte",
  "Autre",
];
