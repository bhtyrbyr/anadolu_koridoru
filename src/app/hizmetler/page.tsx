import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Tüm hizmet makalelerimiz ve içerikleri.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Hizmetler</h1>
        <p className="max-w-4xl text-zinc-700">
          Tüm hizmetlerimizde aynı kalite standardıyla çalışırız. Aşağıdaki makalelerden
          detayları inceleyebilirsiniz.
        </p>
      </header>

      <div className="divide-y divide-black/10 border-t border-black/10">
        {articles.map((a, idx) => {
          const flip = idx % 2 === 1;
          return (
            <div key={a.slug} className="grid gap-6 py-10 md:grid-cols-2 md:items-center">
              <div className={flip ? "md:order-2" : ""}>
                <p className="text-xl font-semibold tracking-tight text-zinc-950">{a.title}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-700">{a.slogan}</p>
                <Link
                  href={`/makale/${a.slug}`}
                  className="mt-4 inline-flex text-sm font-medium text-zinc-900 hover:underline"
                >
                  Makaleyi oku →
                </Link>
              </div>

              <div className={flip ? "md:order-1" : ""}>
                <div className="border border-black/10 bg-white p-4 shadow-sm">
                  <div className="mx-auto w-4/5">
                    <Image
                      src={a.imageSrc}
                      alt={a.title}
                      width={900}
                      height={600}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

