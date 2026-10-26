/** Les 4 statistiques clés — verbatim de l'inventaire (§3). */

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "30+", label: "Années d'expérience" },
  // UNCDF, CGAP/World Bank, Oikocredit, GroFin, IFE/KfW
  { value: "5", label: "Organisations internationales" },
  { value: "360°", label: "Couverture des besoins" },
  { value: "2", label: "Fonds d'investissement gérés" },
];
