import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Anadolu Koridoru Nakliyat hakkında. Evden eve nakliyat, asansörlü taşıma ve şehirler arası nakliyat hizmetleri.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Hakkımızda</h1>
        <p className="max-w-3xl text-zinc-600">
          Anadolu Koridoru Nakliyat olarak; evden eve nakliyat, asansörlü nakliyat,
          şehir içi ve şehirler arası taşımacılık alanlarında güvenilir çözümler sunarız.
          Süreci planlı yürütür, eşyalarınızı özenle paketler ve zamanında teslim ederiz.
        </p>
      </div>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { t: "Deneyimli ekip", d: "Taşıma ve paketleme süreçlerinde düzenli çalışma." },
          { t: "Modern ekipman", d: "Geniş araç filosu ve ihtiyaçlara uygun ekipman." },
          { t: "Müşteri memnuniyeti", d: "Şeffaf süreç ve güvenli taşıma yaklaşımı." },
        ].map((x) => (
          <div key={x.t} className="border border-black/10 bg-white p-6 shadow-sm">
            <p className="text-base font-semibold tracking-tight">{x.t}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{x.d}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

