import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Anadolu Koridoru Nakliyat hakkında. Evden eve nakliyat, asansörlü taşıma ve şehirler arası nakliyat hizmetleri.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Hakkımızda</h1>
        <p className="text-xl font-semibold tracking-tight text-zinc-950">
          Anadolu Koridoru Nakliyat: Güvenin ve Profesyonelliğin Lojistik Üssü
        </p>
        <p className="max-w-4xl text-zinc-700">
          Anadolu Koridoru Nakliyat, Antalya’nın dinamik yapısı ve sürekli gelişen
          taşımacılık ihtiyaçlarına modern, güvenilir ve sistematik çözümler sunmak
          amacıyla kurulmuştur. Sektöre adım attığımız ilk günden itibaren temel
          vizyonumuz; taşınma sürecini stresli bir zahmet olmaktan çıkarıp,
          müşterilerimiz için yeni bir başlangıcın en huzurlu adımı haline
          getirmektir.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-950">Biz Kimiz?</h2>
        <div className="space-y-3 text-[15px] leading-7 text-zinc-700">
          <p>
            Antalya merkezli bir firma olarak, bölgenin coğrafi şartlarına, dikey
            mimarisine ve trafik akışına tam hâkimiyet sağlıyoruz. Anadolu Koridoru
            ismi, sadece bir nakliyat rotasını değil; eşyalarınızın başlangıç
            noktasından varış noktasına kadar geçtiği “güvenli ve korunaklı geçiş
            hattını” simgeler.
          </p>
          <p>
            Deneyimli operasyon ekibimiz, uzman montaj kadromuz ve teknolojik araç
            filomuzla, lojistik sektöründe standartları yeniden belirliyoruz.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-950">Neden Varız?</h2>
        <p className="text-[15px] leading-7 text-zinc-700">
          Taşınmak, sadece eşyaların yer değiştirmesi değil, bir yaşamın transferidir.
          Biz bu sorumluluğun bilinciyle;
        </p>
        <ul className="list-disc space-y-2 pl-5 text-[15px] leading-7 text-zinc-700">
          <li>
            <span className="font-medium text-zinc-900">Yüksek Katlı Binalarda:</span>{" "}
            15. kata kadar ulaşabilen modern asansörlü sistemlerimizle,
          </li>
          <li>
            <span className="font-medium text-zinc-900">Şehir İçi ve Şehirler Arası:</span>{" "}
            81 ile yayılan geniş servis ağımızla,
          </li>
          <li>
            <span className="font-medium text-zinc-900">Kurumsal Kimlikte:</span> Ofis ve
            büro taşımacılığında iş sürekliliğini koruyan stratejilerimizle hizmet
            veriyoruz.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
          Değerlerimiz ve Sözümüz
        </h2>
        <div className="space-y-3 text-[15px] leading-7 text-zinc-700">
          <p>
            <span className="font-medium text-zinc-900">Sıfır Hasar Prensibi:</span>{" "}
            Birinci sınıf ambalaj malzemeleri ve titiz işçilikle her bir parçayı kendi
            emanetimiz gibi koruyoruz.
          </p>
          <p>
            <span className="font-medium text-zinc-900">Şeffaflık:</span> Ücretsiz
            ekspertizden sigorta poliçesine kadar her aşamada müşterimizi
            bilgilendiriyor, sürpriz maliyetlere yer vermiyoruz.
          </p>
          <p>
            <span className="font-medium text-zinc-900">Dakiklik:</span> Zamanın en değerli
            sermaye olduğunu biliyor, planlanan takvime sadık kalarak operasyonlarımızı
            tam zamanında tamamlıyoruz.
          </p>
        </div>
      </section>

      <section className="border-t border-black/10 pt-6">
        <p className="max-w-4xl text-[15px] leading-7 text-zinc-700">
          Anadolu Koridoru Nakliyat, Antalya&apos;da evden eve taşımacılığın ötesine
          geçerek, teknoloji ve insan emeğini birleştiren bir güven markasıdır. Siz
          hayalinizdeki yeni adrese odaklanın; geride kalan tüm yükleri biz
          profesyonellikle taşıyalım.
        </p>
      </section>
    </div>
  );
}

