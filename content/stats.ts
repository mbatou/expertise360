/**
 * Les 4 statistiques clés. Seule « 28 ans d'expérience » est documentée dans
 * l'audit Pandorus. Les 3 autres chiffres sont dans l'inventaire introuvable :
 * TODO visibles plutôt que des chiffres inventés (brief §2).
 */

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "28", label: "ans d'expérience" },
  // TODO: valeurs et libellés exacts des 3 stats restantes (inventaire).
  { value: "TODO", label: "TODO : stat de l'inventaire" },
  { value: "TODO", label: "TODO : stat de l'inventaire" },
  { value: "TODO", label: "TODO : stat de l'inventaire" },
];
