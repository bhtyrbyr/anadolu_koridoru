import type { Metadata } from "next";
import Link from "next/link";
import { getStaticDocBySlug, getStaticDocsByCategory } from "@/lib/content";
import { DocText } from "@/components/content/DocText";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getStaticDocsByCategory("bolge").map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getStaticDocBySlug(slug);
  if (!doc) return { title: "Bölge" };
  return {
    title: doc.title,
    description: doc.excerpt,
    alternates: { canonical: `/bolgeler/${doc.slug}` },
    openGraph: {
      title: doc.title,
      description: doc.excerpt,
      url: `/bolgeler/${doc.slug}`,
    },
  };
}

export default async function RegionDetailPage({ params }: Props) {
  const { slug } = await params;
  const doc = getStaticDocBySlug(slug);

  if (!doc) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight">Sayfa bulunamadı</h1>
        <p className="text-zinc-600">
          Aradığınız bölge içeriği bulunamadı. Lütfen bölgeler sayfasına dönün.
        </p>
        <Link className="text-sm font-medium hover:underline" href="/bolgeler">
          Bölgeler
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-sm font-medium text-amber-900">Bölge</p>
        <h1 className="text-3xl font-semibold tracking-tight">{doc.title}</h1>
      </div>

      <Reveal>
        <DocText paragraphs={doc.paragraphs} />
      </Reveal>

      <div>
        <Link className="text-sm font-medium hover:underline" href="/bolgeler">
          ← Tüm bölgeler
        </Link>
      </div>
    </div>
  );
}

