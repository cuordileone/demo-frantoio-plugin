import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { LeafDivider, OliveBranch } from "@/components/site/motifs";

export const metadata: Metadata = {
  title: "Il Frantoio",
  description:
    "La storia della famiglia dietro Frantoio Colle Sereno: tre generazioni, un frantoio a Locorotondo, gli stessi valori dal primo giorno.",
};

const values = [
  {
    title: "Tracciabilità reale",
    body: "Ogni bottiglia riporta il lotto e la data di frangitura. Sappiamo esattamente da quale appezzamento arriva ogni litro, perché è nostro.",
  },
  {
    title: "Lotti piccoli",
    body: "Non inseguiamo i volumi della grande distribuzione. Produciamo quello che le nostre piante danno, senza comprare olive da fuori per completare l'annata.",
  },
  {
    title: "Il tempo giusto",
    body: "Raccogliamo quando l'oliva è pronta, non quando conviene al calendario di raccolta. Costa di più, rende meno per ettaro, ma è l'unico modo che conosciamo.",
  },
];

export default function IlFrantoioPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <Container className="py-20 md:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Il frantoio</p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl leading-tight font-semibold sm:text-5xl">
            Tre generazioni, lo stesso appezzamento di terra.
          </h1>
        </Container>
      </section>

      <section className="bg-stone">
        <Container className="grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="max-w-2xl space-y-5 leading-relaxed text-ink/85">
            <p>
              Il frantoio l&apos;ha aperto nostro nonno negli anni Sessanta, in una masseria in
              contrada Colle Sereno, poco fuori Locorotondo. All&apos;epoca la spremitura si faceva
              con macine di pietra tirate da un mulo: lente, ma delicate con l&apos;oliva.
            </p>
            <p>
              Nostro padre ha portato le prime presse meccaniche negli anni Ottanta, mantenendo lo
              stesso principio: spremere a freddo e in fretta, perché ogni ora che passa tra la
              raccolta e la frangitura toglie qualcosa all&apos;olio.
            </p>
            <p>
              Oggi siamo noi, la terza generazione, a occuparci degli stessi ulivi che ha piantato
              nostro nonno — alcuni hanno più di sessant&apos;anni. Le piante più vecchie danno meno
              olive, ma sono quelle da cui viene la Riserva del Frantoiano.
            </p>
            <p>
              Non siamo un&apos;azienda che vende olio: siamo una famiglia che lo produce per sé, e
              ne vende quello che avanza a chi lo cerca fatto bene.
            </p>
          </div>
          <OliveBranch className="h-auto w-full max-w-sm justify-self-center text-olive/70" />
        </Container>
      </section>

      <section className="bg-ink text-cream">
        <Container className="py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">I nostri valori</p>
          <LeafDivider className="mt-4 h-5 w-16 text-gold" />
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title}>
                <h2 className="font-heading text-xl font-semibold">{value.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-cream/80">{value.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
