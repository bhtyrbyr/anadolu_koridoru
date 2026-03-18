 "use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { contact } from "@/lib/contact";

const nav = [
  { href: "/", label: "Ana sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/misyonumuz", label: "Misyonumuz" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <Logo
              className=""
              alt="Anadolu Koridoru Nakliyat logo"
              height={36}
              maxWidth={140}
            />
            <div className="min-w-0 leading-tight">
              <p className="truncate font-semibold tracking-tight text-zinc-950">
                Anadolu Koridoru Nakliyat
              </p>
              <p className="hidden truncate text-xs text-zinc-600 sm:block">
                Evden Eve • Asansörlü • Sigortalı
              </p>
            </div>
          </Link>
          <span className="hidden border border-amber-200 bg-amber-50 px-2 py-1 text-[11px] font-medium text-amber-900 sm:inline-flex">
            7/24 • Hızlı Teklif
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <nav className="hidden items-center gap-1 text-sm text-zinc-700 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${contact.phoneE164}`}
            className="hidden h-10 items-center justify-center bg-zinc-900 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 sm:inline-flex"
          >
            {contact.phoneDisplay}
          </a>
          <a
            href={`tel:${contact.phoneE164}`}
            className="inline-flex h-10 w-10 items-center justify-center border border-black/10 bg-white text-sm font-medium text-zinc-900 sm:hidden"
            aria-label={`Ara: ${contact.phoneDisplay}`}
            title={`Ara: ${contact.phoneDisplay}`}
          >
            ☎
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-black/10 bg-white text-zinc-900 lg:hidden"
            aria-label="Menüyü aç"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden">
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/20"
            aria-label="Menüyü kapat"
            onClick={() => setOpen(false)}
          />
          <div className="fixed right-0 top-0 z-50 h-dvh w-[84vw] max-w-sm border-l border-black/10 bg-white p-5 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate font-semibold tracking-tight text-zinc-950">
                  Anadolu Koridoru Nakliyat
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  Evden Eve • Asansörlü • Sigortalı
                </p>
              </div>
              <button
                type="button"
                className="h-10 w-10 border border-black/10 bg-white text-zinc-900"
                aria-label="Kapat"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <nav className="mt-6 flex flex-col border-t border-black/10 pt-4 text-sm">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-black/5 py-3 text-zinc-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 space-y-3">
              <a
                href={`tel:${contact.phoneE164}`}
                className="inline-flex h-11 w-full items-center justify-center bg-zinc-900 px-4 text-sm font-medium text-white"
              >
                Ara: {contact.phoneDisplay}
              </a>
              <Link
                href="/iletisim"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-full items-center justify-center border border-black/10 px-4 text-sm font-medium text-zinc-900"
              >
                Teklif al (WhatsApp)
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

