import { createElement } from "react";
import { getIcon } from "./icons";

type IconBadgeProps = {
  icon: string;
  /** Couleur du trait dans la pastille or : navy (fond clair) ou blanc. */
  iconTone?: "navy" | "white";
  size?: "md" | "lg";
};

/**
 * Motif visuel récurrent du site : pictogramme Lucide dans une pastille ronde
 * or (brief §5).
 */
export function IconBadge({ icon, iconTone = "navy", size = "md" }: IconBadgeProps) {
  const dims = size === "lg" ? "h-14 w-14" : "h-11 w-11";
  const iconDims = size === "lg" ? "h-7 w-7" : "h-5 w-5";
  return (
    <span
      aria-hidden="true"
      className={`inline-flex ${dims} shrink-0 items-center justify-center rounded-full bg-gold`}
    >
      {createElement(getIcon(icon), {
        className: `${iconDims} ${iconTone === "navy" ? "text-navy" : "text-white"}`,
        strokeWidth: 1.75,
      })}
    </span>
  );
}
