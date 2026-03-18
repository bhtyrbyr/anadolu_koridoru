import type { Metadata } from "next";
import Link from "next/link";
import { getStaticDocsByCategory } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Evden eve nakliyat, asansörlü nakliyat, şehir içi/şehirler arası nakliyat, ofis taşıma ve parça eşya taşıma hizmetleri.",
};

export default function ServicesPage() {
  const docs = getStaticDocsByCategory("hizmet");

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Hizmetler</h1>
        <p className="text-zinc-600">
          Antalya ve çevresinde ihtiyacınıza uygun taşıma çözümleri.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((d, idx) => (
          <Reveal key={d.id} delayMs={Math.min(240, idx * 40)}>
            <Link
              href={`/hizmetler/${d.slug}`}
              className="block border-b border-black/10 py-5 transition-colors hover:bg-white"
            >
              <p className="text-base font-semibold tracking-tight text-zinc-950">
                {d.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-zinc-700">{d.excerpt}</p>
              <p className="mt-3 text-sm font-medium text-zinc-900">
                Detay →
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

