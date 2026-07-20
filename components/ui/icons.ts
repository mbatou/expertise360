import {
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Briefcase,
  Building2,
  Coins,
  Flag,
  Globe,
  GraduationCap,
  HandCoins,
  Landmark,
  Leaf,
  LineChart,
  MapPin,
  PenTool,
  RefreshCw,
  Scale,
  Search,
  SearchCheck,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sprout,
  TrendingUp,
  Users,
  Wheat,
  type LucideIcon,
} from "lucide-react";

/**
 * Registre central des icônes : le contenu (/content) référence des noms
 * Lucide en kebab-case (sérialisables, prêts pour un CMS), résolus ici en
 * composants. Correspondance emoji → Lucide : audit Pandorus §6.3.
 */
const registry: Record<string, LucideIcon> = {
  "line-chart": LineChart,
  "shield-check": ShieldCheck,
  coins: Coins,
  "search-check": SearchCheck,
  "hand-coins": HandCoins,
  "refresh-cw": RefreshCw,
  "brain-circuit": BrainCircuit,
  sprout: Sprout,
  "building-2": Building2,
  landmark: Landmark,
  users: Users,
  briefcase: Briefcase,
  wheat: Wheat,
  globe: Globe,
  "trending-up": TrendingUp,
  scale: Scale,
  leaf: Leaf,
  search: Search,
  "pen-tool": PenTool,
  settings: Settings,
  "bar-chart-3": BarChart3,
  "map-pin": MapPin,
  "badge-check": BadgeCheck,
  "sliders-horizontal": SlidersHorizontal,
  "graduation-cap": GraduationCap,
  flag: Flag,
};

export function getIcon(name: string): LucideIcon {
  const icon = registry[name];
  if (!icon) throw new Error(`Icône Lucide inconnue dans le registre : "${name}"`);
  return icon;
}
