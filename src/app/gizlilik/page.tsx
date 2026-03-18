import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik",
  description: "Bu sitede veri işleme ve gizlilik yaklaşımı.",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Gizlilik</h1>
        <p className="text-zinc-600">
          Bu site, temel tanıtım amaçlıdır. Backend kullanılmadığı için sunucu tarafında
          kullanıcı verisi toplamaz.
        </p>
      </div>

      <section className="border border-black/10 bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold tracking-tight">Çerezler</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          Zorunlu bir çerez kullanımı yoktur. İleride reklam/analitik servisleri
          eklendiğinde, ilgili politika güncellenmelidir.
        </p>
      </section>
    </div>
  );
}

