import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { ContactForm } from "@/components/site/ContactForm";
import { MapSketch } from "@/components/site/MapSketch";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Scrivici per ordinare l'olio del Frantoio Colle Sereno: indirizzo, telefono, email e modulo di contatto.",
};

export default function ContattiPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <Container className="py-20 md:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Contatti</p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl leading-tight font-semibold sm:text-5xl">
            Scrivici per un ordine.
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-cream/80">
            Rispondiamo di persona, di solito entro un giorno lavorativo. Per ordini grandi o per i
            ristoranti, chiamaci direttamente.
          </p>
        </Container>
      </section>

      <section className="bg-stone">
        <Container className="grid gap-14 py-16 md:grid-cols-[1fr_1.1fr] md:py-20">
          <div>
            <h2 className="font-heading text-xl font-semibold text-ink">Il frantoio</h2>
            <address className="mt-3 text-sm leading-relaxed text-ink/75 not-italic">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.postalCode} {siteConfig.address.city} ({siteConfig.address.province})
              <br />
              {siteConfig.address.region}, Italia
            </address>

            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex gap-2">
                <dt className="font-medium text-ink">Telefono</dt>
                <dd>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-olive hover:text-olive-deep">
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-ink">Email</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`} className="text-olive hover:text-olive-deep">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
            </dl>

            <MapSketch className="mt-8 h-auto w-full max-w-sm rounded-lg border border-border" />
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-ink">Scrivici</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Dicci cosa ti serve, ti confermiamo disponibilità e tempi.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
