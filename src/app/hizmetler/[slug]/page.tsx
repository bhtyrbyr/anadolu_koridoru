import type { Metadata } from "next";
import Link from "next/link";
import { getStaticDocBySlug, getStaticDocsByCategory } from "@/lib/content";
import { DocText } from "@/components/content/DocText";
import { Reveal } from "@/components/ui/Reveal";
import { contact } from "@/lib/contact";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getStaticDocsByCategory("hizmet").map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getStaticDocBySlug(slug);
  if (!doc) return { title: "Hizmet" };

  return {
    title: doc.title,
    description: doc.excerpt,
    alternates: { canonical: `/hizmetler/${doc.slug}` },
    openGraph: {
      title: doc.title,
      description: doc.excerpt,
      url: `/hizmetler/${doc.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const doc = getStaticDocBySlug(slug);

  if (!doc) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight">Hizmet bulunamadı</h1>
        <p className="text-zinc-600">
          Aradığınız hizmet mevcut değil. Lütfen hizmetler sayfasını kontrol edin.
        </p>
        <Link className="text-sm font-medium hover:underline" href="/hizmetler">
          Hizmetler
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <p className="text-sm font-medium text-amber-900">Hizmet</p>
        <h1 className="text-3xl font-semibold tracking-tight">{doc.title}</h1>
        <p className="max-w-2xl text-zinc-600">{doc.excerpt}</p>
      </div>

      <Reveal>
        <DocText paragraphs={doc.paragraphs} />
      </Reveal>

      <section className="border border-black/10 bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold tracking-tight">Teklif alın</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Taşınma detaylarınızı iletin, size uygun plan ve fiyat çalışması yapalım.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex h-11 items-center justify-center bg-zinc-900 px-5 text-sm font-medium text-white hover:bg-zinc-800"
            href={`tel:${contact.phoneE164}`}
          >
            {contact.phoneDisplay}
          </a>
          <Link
            className="inline-flex h-11 items-center justify-center border border-black/10 px-5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            href="/iletisim"
          >
            İletişim sayfası
          </Link>
        </div>
      </section>

      <div>
        <Link className="text-sm font-medium hover:underline" href="/hizmetler">
          ← Tüm hizmetler
        </Link>
      </div>
    </div>
  );
}

