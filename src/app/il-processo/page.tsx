import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/Container";

export const metadata: Metadata = {
  title: "Il Processo",
  description:
    "Dalla raccolta all'imbottigliamento: come lavoriamo le olive al Frantoio Colle Sereno, passo dopo passo.",
};

const steps = [
  {
    n: "01",
    title: "Raccolta",
    body: "A mano o con agevolatori meccanici leggeri, mai a scuotitore aggressivo. Raccogliamo varietà per varietà, nei giorni in cui ognuna è pronta — non tutte insieme.",
    image: "/images/process-01-raccolta.jpg",
  },
  {
    n: "02",
    title: "Frangitura a freddo",
    body: "Le olive arrivano al frantoio entro 6 ore dalla raccolta. Frangiamo sotto i 27°C: sopra quella soglia l'olio perde profumo e parte dei suoi polifenoli.",
    image: "/images/process-02-frangitura.jpg",
  },
  {
    n: "03",
    title: "Decantazione",
    body: "Niente filtri chimici né centrifughe aggressive. Lasciamo che l'olio si separi dall'acqua di vegetazione per gravità, in cisterne d'acciaio al buio, per qualche settimana.",
    image: "/images/process-03-decantazione.jpg",
  },
  {
    n: "04",
    title: "Imbottigliamento",
    body: "Imbottigliamo in piccoli lotti, su richiesta e a ridosso della spedizione, per non far invecchiare l'olio in bottiglia più del necessario. Ogni lotto ha data e numero.",
    image: "/images/process-04-imbottigliamento.jpg",
  },
];

export default function IlProcessoPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <Container className="grid gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Il processo</p>
            <h1 className="mt-4 font-heading text-4xl leading-tight font-semibold sm:text-5xl">
              Quattro passaggi, nello stesso ordine da tre generazioni.
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-cream/80">
              Non è un manifesto di marketing: è la sequenza reale che seguiamo per ogni lotto,
              dalla pianta alla bottiglia.
            </p>
          </div>
          <div className="relative aspect-4/3 w-full max-w-sm justify-self-center overflow-hidden rounded-lg">
            <Image
              src="/images/process-hero.jpg"
              alt="Interno del frantoio durante la lavorazione delle olive"
              fill
              sizes="(min-width: 768px) 35vw, 90vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-stone">
        <Container className="py-16 md:py-20">
          <ol className="grid gap-10 sm:grid-cols-2">
            {steps.map((step) => (
              <li key={step.n} className="border-t border-border pt-6">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
                  <Image
                    src={step.image}
                    alt={`Fase: ${step.title}`}
                    fill
                    sizes="(min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <span className="mt-5 block font-heading text-sm font-semibold text-terracotta">{step.n}</span>
                <h2 className="mt-2 font-heading text-2xl font-semibold text-ink">{step.title}</h2>
                <p className="mt-3 max-w-md leading-relaxed text-ink/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
