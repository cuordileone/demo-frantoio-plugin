# CLAUDE.md — progetto sito (da template `nextjs-starter`)

Questo progetto è stato generato da `templates/nextjs-starter` nell'hub
`web-studio`. Segui il workflow completo definito lì:
`web-studio/CLAUDE.md`, `web-studio/docs/WORKFLOW.md`,
`web-studio/docs/MOTION-DESIGN.md` (se questo progetto usa lo scroll
storytelling).

## Comandi

- `npm run dev` — sviluppo locale
- `npm run test` — unit test (Vitest)
- `npm run test:e2e` — smoke e2e + controllo accessibilità (Playwright + axe)
- `npm run predelivery` — typecheck + lint + audit + test + build + e2e,
  **da eseguire ed avere verde prima di ogni consegna**
- `npm run lint` / `npx prettier --write .` — qualità del codice

## Note specifiche di questo progetto

(Da compilare mano a mano: contenuti reali, decisioni di design prese nel
brainstorming, eventuali limitazioni note — segui lo stile già in uso su
`tm-scenary`: una voce per scoperta, con la data.)

- **`src/app/page.test.tsx`** verifica il link "Deploy Now" dello scaffold
  boilerplate. Quando `src/app/page.tsx` viene sostituito con contenuti
  reali (giorno 1 di qualsiasi progetto vero), questo test va aggiornato o
  sostituito di conseguenza — altrimenti `npm run predelivery` inizia a
  fallire silenziosamente per un motivo che non c'entra con la modifica
  appena fatta.
