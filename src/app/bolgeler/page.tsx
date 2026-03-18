import type { Metadata } from "next";
import Link from "next/link";
import { getStaticDocsByCategory } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Bölgeler",
  description: "Antalya ilçelerine özel nakliyat hizmet sayfaları.",
};

export default function RegionsPage() {
  const regions = getStaticDocsByCategory("bolge");

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Bölgeler</h1>
        <p className="text-zinc-600">
          Antalya ilçelerine özel evden eve/şehir içi/şehirler arası taşımacılık içerikleri.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {regions.map((d, idx) => (
          <Reveal key={d.id} delayMs={Math.min(240, idx * 40)}>
            <Link
              href={`/bolgeler/${d.slug}`}
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

