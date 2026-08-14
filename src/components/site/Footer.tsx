import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { LeafDivider } from "@/components/site/motifs";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-cream/80">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <LeafDivider className="mb-8 h-5 w-16 text-gold" />
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-semibold text-cream">Frantoio Colle Sereno</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Olio extravergine spremuto a freddo in Valle d&apos;Itria, da tre generazioni della
              stessa famiglia.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-gold uppercase">Frantoio</p>
            <address className="mt-3 text-sm leading-relaxed not-italic">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.postalCode} {siteConfig.address.city} ({siteConfig.address.province})
              <br />
              {siteConfig.address.region}, Italia
            </address>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-gold uppercase">Contatti</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-cream">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-cream">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
            <nav aria-label="Pagine del sito" className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {siteConfig.nav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <p className="mt-12 text-xs text-cream/60">
          © {new Date().getFullYear()} Frantoio Colle Sereno — Locorotondo (BA). Progetto dimostrativo, azienda di
          fantasia.
        </p>
      </div>
    </footer>
  );
}
