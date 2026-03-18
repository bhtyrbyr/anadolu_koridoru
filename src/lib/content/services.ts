export type Service = {
  slug: string;
  title: string;
  short: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "antalyada-evden-eve-nakliyat",
    title: "Antalya Evden Eve Nakliyat",
    short: "Eşyalarınızı hızlı, güvenli ve planlı şekilde yeni adresinize taşıyoruz.",
    bullets: ["Ücretsiz keşif", "Ambalajlı taşıma", "Sigortalı hizmet", "Zamanında teslim"],
  },
  {
    slug: "asansorlu-nakliyat",
    title: "Asansörlü Nakliyat",
    short: "Yüksek katlı binalarda hızlı ve hasarsız taşıma için asansör sistemi.",
    bullets: ["Hızlı taşıma", "Minimum hasar riski", "Yüksek kat desteği", "Deneyimli ekip"],
  },
  {
    slug: "sehir-ici-nakliyat",
    title: "Şehir İçi Nakliyat",
    short: "Antalya genelinde ev/ofis/parça eşya taşımacılığı.",
    bullets: ["Planlı operasyon", "Koruyucu ambalaj", "Düzenli taşıma", "Gün içi teslim"],
  },
  {
    slug: "sehirler-arasi-nakliyat",
    title: "Şehirler Arası Nakliyat",
    short: "Türkiye’nin 81 iline güvenli ve sigortalı taşımacılık.",
    bullets: ["Uzun mesafe planlama", "Güvenli istif", "Takip edilebilir süreç", "Sigortalı taşıma"],
  },
  {
    slug: "ofis-tasima",
    title: "Ofis Taşıma",
    short: "İş kaybını minimumda tutan hızlı ve sistemli ofis taşımacılığı.",
    bullets: ["Hızlı kurulum", "Etiketli paketleme", "Ekipman güvenliği", "Planlı çalışma"],
  },
  {
    slug: "parca-esya-tasima",
    title: "Parça Eşya Taşıma",
    short: "Tek parça ya da birkaç koli için ekonomik ve pratik taşıma.",
    bullets: ["Ekonomik fiyat", "Esnek zamanlama", "Güvenli taşıma", "Hızlı çözüm"],
  },
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

