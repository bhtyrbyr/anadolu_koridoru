"use client";

import { useMemo, useState } from "react";
import { buildQuoteMessage, buildWhatsAppUrl } from "@/lib/contact";

type Props = {
  className?: string;
  compact?: boolean;
  pageLabel?: string;
  defaults?: Partial<{
    name: string;
    phone: string;
    email: string;
    route: string;
    message: string;
  }>;
};

export function WhatsAppQuoteForm({
  className,
  compact = false,
  pageLabel,
  defaults,
}: Props) {
  const [name, setName] = useState(defaults?.name ?? "");
  const [phone, setPhone] = useState(defaults?.phone ?? "");
  const [email, setEmail] = useState(defaults?.email ?? "");
  const [route, setRoute] = useState(defaults?.route ?? "");
  const [message, setMessage] = useState(defaults?.message ?? "");

  const text = useMemo(
    () =>
      buildQuoteMessage({
        name,
        phone,
        email,
        route,
        message,
        page: pageLabel,
      }),
    [email, message, name, pageLabel, phone, route],
  );

  return (
    <form
      className={["space-y-3", className].filter(Boolean).join(" ")}
      onSubmit={(e) => {
        e.preventDefault();
        window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
      }}
    >
      <input
        className="h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-amber-300"
        placeholder="Ad Soyad"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="name"
      />
      <input
        className="h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-amber-300"
        placeholder="Telefon"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        inputMode="tel"
        autoComplete="tel"
      />

      {compact ? null : (
        <input
          className="h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-amber-300"
          placeholder="E-posta (opsiyonel)"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputMode="email"
          autoComplete="email"
        />
      )}

      <input
        className="h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-amber-300"
        placeholder={compact ? "Nereden → Nereye" : "Güzergah (Nereden → Nereye)"}
        name="route"
        value={route}
        onChange={(e) => setRoute(e.target.value)}
      />

      {compact ? null : (
        <textarea
          className="min-h-28 w-full rounded-xl border border-black/10 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-300"
          placeholder="Taşınma detayı (kat, eşya durumu, tarih vb.)"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      )}

      <button
        className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-500"
        type="submit"
      >
        WhatsApp’tan teklif iste
      </button>

      <p className="text-xs text-zinc-500">
        Gönderime basınca WhatsApp açılır; veriler sunucuya kaydedilmez.
      </p>
    </form>
  );
}

