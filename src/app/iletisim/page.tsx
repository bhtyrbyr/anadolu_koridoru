import type { Metadata } from "next";
import { WhatsAppQuoteForm } from "@/components/WhatsAppQuoteForm";
import { contact } from "@/lib/contact";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Teklif almak ve bilgi için iletişim kanalları.",
};

export default function ContactPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">İletişim</h1>
          <p className="text-zinc-600">
            En hızlı iletişim için telefonla arayabilirsiniz. Form demo amaçlıdır ve
            sunucuya gönderim yapmaz.
          </p>
        </div>

        <section className="border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-semibold tracking-tight">Telefon</h2>
          <p className="mt-2 text-sm text-zinc-600">7/24 ulaşabilirsiniz.</p>
          <a
            href={`tel:${contact.phoneE164}`}
            className="mt-4 inline-flex h-11 items-center justify-center bg-zinc-900 px-5 text-sm font-medium text-white hover:bg-zinc-800"
          >
            {contact.phoneDisplay}
          </a>
        </section>

        <section className="border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-semibold tracking-tight">Çalışma bölgeleri</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Antalya geneli şehir içi; Türkiye geneli şehirler arası nakliyat.
          </p>
        </section>
      </div>

      <aside className="border border-black/10 bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold tracking-tight">Teklif formu</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Formu doldurun; WhatsApp mesajı otomatik hazırlanıp açılır.
        </p>

        <div className="mt-5">
          <WhatsAppQuoteForm pageLabel="/iletisim" />
        </div>
      </aside>
    </div>
  );
}

