/**
 * Marque texte (inventaire §1) : pastille arrondie or « E360 » suivie de
 * « EXPERTISE 360 » — « EXPERTISE » blanc, « 360 » or. À utiliser sur fond
 * navy (header, footer).
 */
export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="font-display flex h-10 shrink-0 items-center justify-center rounded-xl bg-gold px-2 text-sm font-bold text-navy-deep"
      >
        E360
      </span>
      <span className="font-display text-lg font-bold tracking-wide whitespace-nowrap text-white">
        EXPERTISE <span className="text-gold">360</span>
      </span>
    </span>
  );
}
