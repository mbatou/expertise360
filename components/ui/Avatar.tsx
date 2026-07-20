import Image from "next/image";

type AvatarProps = {
  name: string;
  photo?: string;
  size?: number;
};

function initials(name: string): string {
  return name
    .replace(/^TODO\s*:\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * Traitement d'avatar unique pour toute l'équipe (brief §5) : photo si
 * disponible, sinon initiales sur fond navy uni — jamais de couleurs
 * aléatoires.
 */
export function Avatar({ name, photo, size = 96 }: AvatarProps) {
  if (photo) {
    return (
      <Image
        src={photo}
        alt={`Portrait de ${name}`}
        width={size}
        height={size}
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="flex items-center justify-center rounded-full bg-navy-soft font-display font-semibold text-gold-soft select-none"
      style={{ width: size, height: size, fontSize: size / 3 }}
    >
      {initials(name) || "?"}
    </span>
  );
}
