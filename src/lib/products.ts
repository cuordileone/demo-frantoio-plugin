export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  pairing: string;
  notes: string[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "coratina",
    name: "Coratina",
    tagline: "Intenso, piccante, per chi ama il carattere",
    description:
      "La cultivar pugliese per eccellenza: amaro deciso in apertura, piccante netto in chiusura. La spremiamo dalle olive delle piante più esposte al sole del pomeriggio, quelle che danno più carattere.",
    pairing: "Bruschetta con pomodoro, legumi, carne alla brace, zuppe di verdure amare.",
    notes: ["Amaro deciso", "Piccante persistente", "Sentore di erba appena tagliata"],
    image: "/images/product-coratina.jpg",
  },
  {
    slug: "ogliarola",
    name: "Ogliarola",
    tagline: "Delicato, note di mandorla, per uso quotidiano",
    description:
      "L'olio di tutti i giorni in casa nostra da tre generazioni: rotondo, con un finale morbido di mandorla dolce. Va bene su tutto, senza mai coprire il piatto.",
    pairing: "Verdure crude e cotte, pesce al vapore, uova, uso quotidiano a crudo.",
    notes: ["Fruttato leggero", "Nota di mandorla", "Piccante appena accennato"],
    image: "/images/product-ogliarola.jpg",
  },
  {
    slug: "riserva-del-frantoiano",
    name: "Riserva del Frantoiano",
    tagline: "Blend limited edition, prima spremitura dell'anno",
    description:
      "Le olive raccolte a mano dalle piante più vecchie del podere, alcune piantate dal nonno. Prima spremitura di ottobre, quantità limitata: quando finisce, si aspetta l'anno dopo.",
    pairing: "Da assaggiare a crudo, su un crostino semplice, senza aggiungere altro.",
    notes: ["Lotto numerato", "Raccolta a mano", "Prima spremitura dell'annata"],
    image: "/images/product-riserva.jpg",
  },
];
