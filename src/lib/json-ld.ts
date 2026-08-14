import { siteConfig } from "@/lib/site-config";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      addressCountry: "IT",
    },
  };
}
