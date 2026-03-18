import Link from "next/link";
import { Logo } from "@/components/Logo";
import { contact } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white py-12 text-sm text-zinc-600">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Logo
              className="rounded-xl"
              alt="Anadolu Koridoru Nakliyat logo"
              height={36}
              maxWidth={160}
            />
            <p className="text-base font-semibold tracking-tight text-zinc-950">
              Anadolu Koridoru Nakliyat
            </p>
          </div>
          <p className="leading-6">
            Antalya’da evden eve nakliyat, asansörlü nakliyat, şehir içi ve şehirler arası
            taşımacılık hizmetleri.
          </p>
          <p className="text-zinc-500">
            7/24 iletişim:{" "}
            <a
              className="font-medium text-zinc-900 hover:underline"
              href={`tel:${contact.phoneE164}`}
            >
              {contact.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-zinc-950">Hızlı menü</p>
          <div className="flex flex-col gap-2">
            <Link href="/hizmetler" className="hover:text-zinc-950">
              Hizmetler
            </Link>
            <Link href="/hakkimizda" className="hover:text-zinc-950">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="hover:text-zinc-950">
              İletişim
            </Link>
            <Link href="/gizlilik" className="hover:text-zinc-950">
              Gizlilik
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-zinc-950">Teklif isteyin</p>
          <p className="leading-6">
            Taşınma detaylarınızı iletin, en kısa sürede fiyat/planlama geri dönüşü yapalım.
          </p>
          <div className="flex flex-col gap-2">
            <a
              className="inline-flex h-10 items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800"
              href={`tel:${contact.phoneE164}`}
            >
              Hemen ara
            </a>
            <a
              className="inline-flex h-10 items-center justify-center rounded-xl border border-black/10 px-4 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              href="/iletisim"
            >
              İletişim formu
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Anadolu Koridoru Nakliyat. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

