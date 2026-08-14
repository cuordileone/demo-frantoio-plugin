/**
 * Elemento visivo-firma del brand: un unico tratto continuo che disegna un
 * ramo d'ulivo chiuso a cerchio — la "ruota" del frantoio. Ricompare come
 * illustrazione grande in home/Il Processo e come glifo divisore piccolo
 * nelle altre pagine, sempre nello stesso stile a linea (oro su fondo scuro,
 * oliva su fondo chiaro) cosi' resta riconoscibile anche senza il logo.
 */

type MotifProps = {
  className?: string;
  stroke?: string;
};

/** Ramo d'ulivo disteso, usato nell'hero e come chiusura di pagina. */
export function OliveBranch({ className, stroke = "currentColor" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 480 220"
      fill="none"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M20 140C90 60 180 30 260 40C340 50 400 90 460 70"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {[
        [70, 118, -18],
        [110, 95, -12],
        [150, 76, -8],
        [195, 62, -4],
        [240, 54, 2],
        [285, 52, 8],
        [330, 56, 14],
        [375, 66, 18],
        [415, 78, 22],
      ].map(([cx, cy, rot], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="16"
          ry="7"
          transform={`rotate(${rot} ${cx} ${cy})`}
          stroke={stroke}
          strokeWidth="1.5"
        />
      ))}
      <circle cx={205} cy={95} r="6" stroke={stroke} strokeWidth="1.5" />
      <circle cx={225} cy={100} r="5" stroke={stroke} strokeWidth="1.5" />
      <circle cx={215} cy={112} r="5.5" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
}

/**
 * "Il cerchio del frantoio" — diagramma circolare a tratto unico dei 4 passaggi
 * reali del processo. Usato per intero in Il Processo, come teaser in home.
 */
const PROCESS_STEPS = [
  { angle: -90, label: "Raccolta" },
  { angle: 0, label: "Frangitura a freddo" },
  { angle: 90, label: "Decantazione" },
  { angle: 180, label: "Imbottigliamento" },
];

export function MillCircleDiagram({ className, stroke = "currentColor" }: MotifProps) {
  const r = 130;
  const cx = 160;
  const cy = 160;
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <circle cx={cx} cy={cy} r={r} stroke={stroke} strokeWidth="1.5" strokeDasharray="1 9" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={r - 34} stroke={stroke} strokeWidth="1.5" />
      {PROCESS_STEPS.map(({ angle }, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = cx + (r - 34) * Math.cos(rad);
        const y = cy + (r - 34) * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="6" stroke={stroke} strokeWidth="1.5" fill="none" />;
      })}
      <path
        d={`M${cx} ${cy - 10} L${cx} ${cy + 10} M${cx - 10} ${cy} L${cx + 10} ${cy}`}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
