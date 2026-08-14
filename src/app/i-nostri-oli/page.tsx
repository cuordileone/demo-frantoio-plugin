import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { LeafDivider } from "@/components/site/motifs";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "I Nostri Oli",
  description:
    "Coratina, Ogliarola e Riserva del Frantoiano: le tre referenze di olio extravergine d'oliva del Frantoio Colle Sereno.",
};

export default function INostriOliPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <Container className="py-20 md:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">I nostri oli</p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl leading-tight font-semibold sm:text-5xl">
            Tre referenze. Le stesse piante, ogni anno.
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-cream/80">
            Non produciamo una linea, produciamo quello che le nostre olive danno: due referenze
            stabili per la tavola di tutti i giorni, e una riserva limitata quando la prima
            spremitura dell&apos;annata lo merita.
          </p>
        </Container>
      </section>

      <section className="bg-stone">
        <Container className="divide-y divide-border py-4">
          {products.map((product, i) => (
            <article key={product.slug} className="grid gap-8 py-14 md:grid-cols-[0.4fr_1fr]">
              <div>
                <div className="relative aspect-4/5 w-full max-w-[220px] overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={`Bottiglia di olio ${product.name}`}
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
                <span className="mt-5 block font-heading text-sm font-semibold text-terracotta">
                  0{i + 1}
                </span>
                <h2 className="mt-2 font-heading text-3xl font-semibold text-ink">{product.name}</h2>
                <p className="mt-2 text-sm font-medium text-olive">{product.tagline}</p>
                <LeafDivider className="mt-6 h-4 w-14 text-olive/60" />
              </div>

              <div className="max-w-2xl">
                <p className="leading-relaxed text-ink/80">{product.description}</p>

                <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                      Note di gusto
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {product.notes.map((note) => (
                        <span
                          key={note}
                          className="rounded-full border border-olive/30 px-3 py-1 text-xs text-olive-deep"
                        >
                          {note}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                      In tavola
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink/75">{product.pairing}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-terracotta text-cream">
        <Container className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            Ogni lotto è limitato: chiedici cosa è disponibile ora.
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
