import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { LeafDivider } from "@/components/site/motifs";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Olio extravergine spremuto a freddo in Valle d'Itria",
  description:
    "Frantoio Colle Sereno: olio extravergine d'oliva pugliese in lotti piccoli, spremuto a freddo entro poche ore dalla raccolta. Tre generazioni della stessa famiglia.",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <Container className="grid gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Locorotondo, Valle d&apos;Itria
            </p>
            <h1 className="mt-5 font-heading text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl md:text-6xl">
              Il tempo giusto per l&apos;olio è quello della raccolta, non del calendario.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">
              Spremiamo le nostre olive a freddo entro poche ore dalla raccolta, in lotti piccoli,
              come fa la nostra famiglia da tre generazioni in questo angolo di Puglia.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/i-nostri-oli"
                className="inline-flex h-12 items-center rounded-md bg-terracotta px-6 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Scopri i nostri oli
              </Link>
              <Link
                href="/contatti"
                className="text-sm font-semibold text-cream underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
              >
                Scrivici per un ordine →
              </Link>
            </div>
          </div>

          <div className="relative aspect-4/3 w-full max-w-md justify-self-center overflow-hidden rounded-lg md:justify-self-end">
            <Image
              src="/images/hero-home.jpg"
              alt="Uliveto secolare in Valle d'Itria al tramonto"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* NUMERI CONCRETI */}
      <section className="border-b border-border bg-stone">
        <Container className="grid gap-10 py-14 sm:grid-cols-3">
          {[
            { value: "3", label: "generazioni della stessa famiglia al frantoio" },
            { value: "< 6 ore", label: "dalla raccolta alla frangitura a freddo" },
            { value: "3", label: "referenze, nessuna scorciatoia industriale" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-4xl font-semibold text-olive">{stat.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* PRODOTTI */}
      <section className="bg-stone">
        <Container className="py-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">I nostri oli</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-ink sm:text-4xl">
              Tre referenze, ogni anno le stesse piante.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.slug}
                className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={product.image}
                    alt={`Bottiglia di olio ${product.name}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                <h3 className="font-heading text-xl font-semibold text-ink">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-terracotta">{product.tagline}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">{product.description}</p>
                <Link
                  href="/i-nostri-oli"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-olive hover:text-olive-deep"
                >
                  Scopri il {product.name} →
                </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* STORIA TEASER */}
      <section className="bg-ink text-cream">
        <Container className="grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Il frantoio</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">
              Iniziò nostro nonno, con un frantoio a pietra e un mulo.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-cream/80">
              Oggi le macchine sono cambiate, ma il metodo no: raccogliamo, portiamo le olive al
              frantoio lo stesso giorno e non abbiamo mai smesso di lavorarle in piccoli lotti.
            </p>
            <Link
              href="/il-frantoio"
              className="mt-7 inline-flex items-center text-sm font-semibold text-cream underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
            >
              Leggi la nostra storia →
            </Link>
          </div>
          <div className="relative aspect-4/3 w-full max-w-sm justify-self-center overflow-hidden rounded-lg">
            <Image
              src="/images/frantoio-exterior.jpg"
              alt="Facciata in pietra del frantoio a Locorotondo"
              fill
              sizes="(min-width: 768px) 35vw, 90vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* PROCESSO TEASER */}
      <section className="bg-stone">
        <Container className="py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">Il processo</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-ink sm:text-4xl">
                Dalla pianta alla bottiglia, quattro passaggi, mai forzati.
              </h2>
            </div>
            <Link
              href="/il-processo"
              className="inline-flex h-11 shrink-0 items-center rounded-md border border-olive px-5 text-sm font-semibold text-olive hover:bg-olive hover:text-cream"
            >
              Guarda come lavoriamo
            </Link>
          </div>
          <LeafDivider className="mt-10 h-5 w-16 text-olive" />
        </Container>
      </section>

      {/* CTA FINALE */}
      <section className="bg-terracotta text-cream">
        <Container className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            Vuoi provare l&apos;olio di casa nostra?
          </h2>
          <Link
            href="/contatti"
            className="inline-flex h-12 shrink-0 items-center rounded-md bg-ink px-6 text-sm font-semibold text-cream transition-colors hover:bg-ink-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            Scrivici per un ordine
          </Link>
        </Container>
      </section>
    </>
  );
}
