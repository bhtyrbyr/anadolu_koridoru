export const siteConfig = {
  name: "Anadolu Koridoru Nakliyat",
  description:
    "Antalya evden eve nakliyat, şehir içi ve şehirler arası taşımacılık, asansörlü nakliyat ve profesyonel paketleme hizmetleri.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  social: {
    x: undefined as string | undefined,
  },
} as const;

