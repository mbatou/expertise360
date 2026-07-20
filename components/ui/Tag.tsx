import type { ReactNode } from "react";

/** Badge discret — utilisé notamment pour le marqueur « Fondateur ». */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-xs font-semibold tracking-wide text-navy-deep uppercase">
      {children}
    </span>
  );
}
