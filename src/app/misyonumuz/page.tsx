import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Misyonumuz",
  description:
    "Hizmet kalitemiz, süreç yönetimimiz ve müşteri odaklı yaklaşımımızın özeti.",
};

export default function MissionPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Misyonumuz</h1>
        <p className="max-w-4xl text-zinc-700">
          Anadolu Koridoru Nakliyat olarak misyonumuz; taşınma sürecini belirsizlik ve
          stres kaynağı olmaktan çıkarıp, planlı, şeffaf ve güvenli bir operasyona
          dönüştürmektir. Her hizmette aynı kalite standardını; ekip, ekipman ve süreç
          disiplinimizle koruruz.
        </p>
      </header>

      <section className="space-y-4 text-[15px] leading-7 text-zinc-700">
        <p>
          <span className="font-medium text-zinc-900">Sıfır hasar odağı:</span> Uygun
          ambalajlama, doğru taşıma tekniği ve kontrollü yükleme ile eşyaları kendi
          emanetimiz gibi koruruz.
        </p>
        <p>
          <span className="font-medium text-zinc-900">Şeffaf süreç:</span> Ekspertiz,
          planlama, taşıma ve teslim adımlarının her aşamasında net bilgi sunar;
          sürpriz maliyetlere yer vermeyiz.
        </p>
        <p>
          <span className="font-medium text-zinc-900">Dakiklik:</span> Zamanı, en değerli
          kaynak olarak görür; planlanan takvime sadık kalarak operasyonu zamanında
          tamamlarız.
        </p>
        <p>
          <span className="font-medium text-zinc-900">Teknoloji + uzmanlık:</span> Yüksek
          katlarda asansörlü sistemler ve eğitimli ekiplerle işi güvenli ve hızlı
          yürütürüz.
        </p>
        <p>
          <span className="font-medium text-zinc-900">Müşteri memnuniyeti:</span> Her
          taşınma, yeni bir başlangıçtır. Biz de o başlangıcı sorunsuz kılmak için tüm
          detayları üstleniriz.
        </p>
      </section>
    </div>
  );
}

