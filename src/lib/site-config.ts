export const siteConfig = {
  name: "Frantoio Colle Sereno",
  description:
    "Olio extravergine d'oliva pugliese, spremuto a freddo entro poche ore dalla raccolta. Tre generazioni della stessa famiglia in Valle d'Itria.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://demo-frantoio-plugin.vercel.app",
  email: "info@frantoiocollesereno.it",
  phone: "+39 080 555 0142",
  address: {
    line1: "Contrada Colle Sereno, Strada Provinciale 12 km 4",
    postalCode: "70010",
    city: "Locorotondo",
    province: "BA",
    region: "Puglia",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/il-frantoio", label: "Il Frantoio" },
    { href: "/il-processo", label: "Il Processo" },
    { href: "/i-nostri-oli", label: "I Nostri Oli" },
    { href: "/contatti", label: "Contatti" },
  ],
} as const;
