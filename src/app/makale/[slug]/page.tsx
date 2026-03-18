import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/lib/articles";
import { contact } from "@/lib/contact";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticleBySlug(slug);
  if (!a) return { title: "Makale" };
  return {
    title: a.title,
    description: a.slogan,
    alternates: { canonical: `/makale/${a.slug}` },
    openGraph: {
      title: a.title,
      description: a.slogan,
      url: `/makale/${a.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticleBySlug(slug);

  if (!a) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight">Makale bulunamadı</h1>
        <Link className="text-sm font-medium hover:underline" href="/">
          Ana sayfa
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-medium text-amber-900">Makale</p>
        <h1 className="text-3xl font-semibold tracking-tight">{a.title}</h1>
        <p className="max-w-3xl text-zinc-700">{a.slogan}</p>
      </header>

      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <article className="whitespace-pre-line text-[15px] leading-7 text-zinc-700">
          {a.content}
        </article>

        <aside className="space-y-4">
          <div className="border border-black/10 bg-white p-4 shadow-sm">
            <div className="mx-auto w-4/5">
              <Image
                src={a.imageSrc}
                alt={a.title}
                width={900}
                height={600}
                className="h-auto w-full object-contain"
                priority={false}
              />
            </div>
          </div>
          <div className="border border-black/10 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-zinc-950">Teklif alın</p>
            <p className="mt-1 text-sm text-zinc-600">
              Hızlı iletişim için arayın veya WhatsApp’tan yazın.
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={`tel:${contact.phoneE164}`}
                className="inline-flex h-11 items-center justify-center bg-zinc-900 px-4 text-sm font-medium text-white"
              >
                Ara: {contact.phoneDisplay}
              </a>
              <Link
                href="/iletisim"
                className="inline-flex h-11 items-center justify-center border border-black/10 px-4 text-sm font-medium text-zinc-900"
              >
                WhatsApp teklif formu
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <div>
        <Link className="text-sm font-medium hover:underline" href="/#hizmetler">
          ← Tüm hizmetler
        </Link>
      </div>
    </div>
  );
}

