/** Les 4 statistiques clés — verbatim de l'inventaire (§3). */

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "28+", label: "Années d'expérience" },
  { value: "4", label: "Organisations internationales" },
  { value: "360°", label: "Couverture des besoins" },
  { value: "2", label: "Fonds d'investissement gérés" },
];
