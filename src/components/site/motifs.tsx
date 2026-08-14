/**
 * Glifo decorativo a tratto unico usato come divisore tra sezioni (mai al
 * posto di una foto: le illustrazioni grandi in hero/processo/prodotti sono
 * fotografia vera, vedi public/images/).
 */

type MotifProps = {
  className?: string;
  stroke?: string;
};

/** Glifo piccolo — foglia+oliva singola, usato come divisore tra sezioni. */
export function LeafDivider({ className, stroke = "currentColor" }: MotifProps) {
  return (
    <svg viewBox="0 0 64 24" fill="none" className={className} role="presentation" aria-hidden="true">
      <path d="M2 12H24" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="34" cy="12" rx="9" ry="4.5" stroke={stroke} strokeWidth="1.5" />
      <circle cx="48" cy="12" r="3" stroke={stroke} strokeWidth="1.5" />
      <path d="M54 12H62" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
