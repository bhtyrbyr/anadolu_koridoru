import Link from "next/link";
import { WhatsAppQuoteForm } from "@/components/WhatsAppQuoteForm";
import { contact } from "@/lib/contact";
import { Carousel } from "@/components/ui/Carousel";
import { Reveal } from "@/components/ui/Reveal";
import { articles } from "@/lib/articles";
import { RotatingServiceCards } from "@/components/RotatingServiceCards";

export default function Home() {
  const heroArticle = articles.find((a) => a.slug === "antalya-evden-eve-nakliyat-hizmeti") ?? articles[0];

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden border border-black/10 bg-white shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.28),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.14),transparent_55%)]" />
        <div className="relative grid gap-10 p-8 sm:p-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="inline-flex w-fit items-center gap-2 border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-900">
              Antalya • Evden Eve • Asansörlü • Sigortalı
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Anadolu Koridoru ile güvenli taşınma deneyimi
            </h1>
            <p className="max-w-xl text-base leading-7 text-zinc-700">
              {heroArticle?.slogan ??
                "Eşyalarınızı özenle paketliyor, planlı bir operasyonla yeni adresinize güvenle taşıyoruz."}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${contact.phoneE164}`}
                className="inline-flex h-11 items-center justify-center bg-zinc-900 px-5 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Hemen ara: {contact.phoneDisplay}
              </a>
              <Link
                href="/iletisim"
                className="inline-flex h-11 items-center justify-center border border-black/10 px-5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Teklif al
              </Link>
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {[
                { k: "7/24", v: "İletişim" },
                { k: "Sigortalı", v: "Taşıma" },
                { k: "Ambalajlı", v: "Hizmet" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="border border-black/10 bg-white/70 p-4"
                >
                  <p className="text-lg font-semibold tracking-tight">{x.k}</p>
                  <p className="text-sm text-zinc-600">{x.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-l border-black/10 pl-6">
            <p className="text-sm font-semibold text-zinc-950">Hızlı teklif</p>
            <p className="mt-1 text-sm text-zinc-600">
              Taşınma bilgilerinizi bırakın, WhatsApp’tan hızlıca iletin.
            </p>
            <div className="mt-4">
              <WhatsAppQuoteForm compact pageLabel="/ (hizli-teklif)" />
            </div>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="space-y-6 scroll-mt-24">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Hizmetlerimiz</h2>
            <p className="text-sm text-zinc-600">
              Tüm hizmetlerimizde kalite standardımız aynı: planlama, güvenlik ve şeffaf süreç.
            </p>
          </div>
          <Link href="/hizmetler" className="text-sm font-medium text-zinc-900 hover:underline">
            Tümünü gör →
          </Link>
        </div>

        <RotatingServiceCards
          items={articles.map((a) => ({
            slug: a.slug,
            title: a.title,
            slogan: a.slogan,
          }))}
          intervalMs={30000}
        />
      </section>

      <Reveal>
        <Carousel
          title="Neden Anadolu Koridoru?"
          className="py-2"
        >
          {[
            {
              t: "Ücretsiz ekspertiz & planlama",
              d: "Taşınma öncesi ihtiyaç analiziyle sürpriz maliyetlerin önüne geçilir.",
            },
            {
              t: "Asansörlü taşıma teknolojisi",
              d: "Dar merdiven ve bina asansörü risklerini minimuma indirir.",
            },
            {
              t: "Ambalaj & montaj desteği",
              d: "Mobilya ve beyaz eşyalar için güvenli paketleme, kurulum desteği.",
            },
            {
              t: "Sigortalı taşımacılık",
              d: "Süreç boyunca kurumsal güvence ve şeffaf ilerleyiş.",
            },
          ].map((x) => (
            <div key={x.t} className="h-full border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold tracking-tight text-zinc-950">{x.t}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-700">{x.d}</p>
            </div>
          ))}
        </Carousel>
      </Reveal>

      <section className="border border-black/10 bg-white p-8 shadow-sm sm:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Hemen fiyat teklifi alın
            </h2>
            <p className="text-sm text-zinc-600">
              Kısa bilgi verin, size uygun planı hızlıca çıkaralım.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${contact.phoneE164}`}
              className="inline-flex h-11 items-center justify-center bg-zinc-900 px-5 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Telefonla ara
            </a>
            <Link
              href="/iletisim"
              className="inline-flex h-11 items-center justify-center border border-black/10 px-5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              İletişim
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
