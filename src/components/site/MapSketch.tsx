/** Mappa stilizzata della Valle d'Itria — non una mappa reale, un'illustrazione
 * coerente con lo stile a linea del brand, usata al posto di un embed reale
 * che punterebbe a un indirizzo di fantasia. */
export function MapSketch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Mappa stilizzata della zona del frantoio, in Valle d'Itria">
      <rect width="400" height="300" fill="var(--stone-dim)" />
      <path
        d="M0 210C60 190 110 230 170 205C230 180 260 220 320 195C350 182 375 195 400 185V300H0V210Z"
        fill="var(--olive)"
        opacity="0.18"
      />
      <path
        d="M0 240C70 225 120 255 190 238C250 224 300 250 400 232V300H0V240Z"
        fill="var(--olive)"
        opacity="0.28"
      />
      {[
        [60, 150], [95, 168], [130, 140], [165, 175], [205, 155],
        [240, 178], [275, 150], [305, 170], [335, 148], [110, 195],
        [190, 200], [260, 205],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="var(--olive)" opacity="0.55" />
      ))}
      <g stroke="var(--gold)" strokeWidth="1.5" opacity="0.6" strokeDasharray="1 6" strokeLinecap="round">
        <path d="M0 130 C 100 110, 260 150, 400 100" fill="none" />
      </g>
      <g transform="translate(200 118)">
        <path
          d="M0 0C-13 0 -23 10 -23 23C-23 40 0 62 0 62C0 62 23 40 23 23C23 10 13 0 0 0Z"
          fill="var(--terracotta)"
        />
        <circle cx="0" cy="21" r="8" fill="var(--stone)" />
      </g>
      <text
        x="200"
        y="205"
        textAnchor="middle"
        fill="var(--ink)"
        fontSize="13"
        fontFamily="var(--font-body)"
        fontWeight="600"
      >
        Contrada Colle Sereno · Locorotondo
      </text>
    </svg>
  );
}
