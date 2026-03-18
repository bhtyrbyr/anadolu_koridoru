export type StaticDocCategory = "hizmet";

export type StaticDoc = {
  id: string;
  slug: string;
  title: string;
  category: StaticDocCategory;
  excerpt: string;
  paragraphs: string[];
};

// Statik içerik: DOCX dosyaları manuel analiz edilerek buraya gömüldü.
// Otomatik dosya okuma / generator yok.
export const staticDocs: StaticDoc[] = [
  {
    id: "antalya-evden-eve-nakliyat-hizmeti",
    slug: "antalya-evden-eve-nakliyat-hizmeti",
    title: "Anadolu Koridoru Nakliyat: Güven, Profesyonellik ve Konforun Birleştiği Nokta",
    category: "hizmet",
    excerpt:
      "Taşınma sürecini modern teknoloji ve uzman kadro ile sorunsuz bir deneyime dönüştürüyoruz.",
    paragraphs: [
      "Anadolu Koridoru Nakliyat, taşınma sürecini sadece bir eşya transferi olarak değil, profesyonel bir lojistik mühendisliği olarak ele alan Antalya merkezli öncü bir kuruluştur. Bireyler ve aileler için stres kaynağı olan taşınma sürecini, modern teknoloji ve uzman kadromuzla sorunsuz bir deneyime dönüştürüyoruz. Antalya’nın yerel dinamiklerine ve mevsimsel nüfus hareketliliğine tam uyum sağlayan firmamız, nakliyat sektöründe “anahtar teslim” çözümlerin tek adresidir.",
      "Antalya’nın Her Noktasında Kesintisiz Hizmet Ağı",
      "Kepez’in yoğun yerleşiminden Konyaaltı’nın prestijli sitelerine, Muratpaşa’nın merkez sokaklarından Döşemealtı, Aksu ve Alanya’nın geniş coğrafyasına kadar Antalya’nın her bölgesindeyiz. Anadolu Koridoru Nakliyat olarak bölgenin yol koşullarına, site kurallarına ve iklim şartlarına tam hakimiyet sağlıyoruz. Operasyon ekibimiz ve uzman şoförlerimiz, eşyalarınızı tam zamanında, planlanan güzergâhta ve sıfır hasar prensibiyle yeni adresinize ulaştırmaktadır.",
      "Teknoloji ve Uzmanlıkla Gelen Güvence",
      "Taşınma operasyonlarımızda kullandığımız yüksek katlı asansörlü nakliyat sistemleri ile dar merdivenlerin ve yetersiz bina asansörlerinin yarattığı riskleri tamamen ortadan kaldırıyoruz.",
      "Birinci Sınıf Ambalajlama: Beyaz eşyadan antikaya, her parça için özel darbe emici materyaller.",
      "Teknik Montaj Desteği: Mobilya ve beyaz eşyalarınızın uzman personelimizce de-montaj ve yeniden kurulumu.",
      "Sigortalı Taşımacılık: Operasyonun her anını kapsayan, kurumsal güvence sağlayan sigorta poliçeleri.",
      "Şeffaf Süreç ve Müşteri Odaklı Yaklaşım",
      "Ücretsiz ekspertiz hizmeti sayesinde taşınma öncesinde ihtiyaçlarınızı yerinde analiz ediyor ve sürpriz maliyetlerin önüne geçiyoruz. Referansları güçlü, teknolojik altyapısı modern ve çözüm odaklı çalışan bir ekiple taşınmanın konforunu yaşamanız için her detayı titizlikle planlıyoruz.",
    ],
  },
  {
    id: "antalya-asansorlu-tasima",
    slug: "antalya-asansorlu-tasima",
    title: "Anadolu Koridoru Nakliyat: Asansörlü Taşımacılıkta Teknolojinin Zirvesi",
    category: "hizmet",
    excerpt:
      "15. kata kadar ulaşabilen mobil dış cephe asansörleriyle hızlı ve hasarsız transfer.",
    paragraphs: [
      "Anadolu Koridoru Nakliyat, Antalya’nın dikey mimarisine modern lojistik çözümlerle yanıt verir. Asansörlü taşımacılık hizmetimizle eşyalarınızı geleneksel yöntemlerin risklerinden arındırır; hızı ve konforu kapınıza getirir.",
      "Asansörlü Nakliyat: Güvenli ve Temassız Transfer",
      "Asansörlü nakliyat, eşyaların bina içindeki dar merdivenler yerine dış cephe platformlarıyla taşınmasıdır. Balkon veya pencereden yaşam alanınıza doğrudan bir köprü kurar.",
      "Avantajlar",
      "Maksimum Eşya Güvenliği: Sürtünme/çarpma/çizilme riskini azaltır.",
      "Zamanın Etkin Kullanımı: Süreci ciddi oranda hızlandırır.",
      "Bina ve Çevre Dostu: Apartman içi asansörleri meşgul etmez.",
      "İş Sağlığı: Personel üzerindeki fiziksel yükü azaltır.",
    ],
  },
  {
    id: "antalya-ofis-tasima-hizmeti",
    slug: "antalya-ofis-tasima-hizmeti",
    title: "Anadolu Koridoru Nakliyat: Antalya Ofis Taşımacılığında Kurumsal ve Stratejik Çözümler",
    category: "hizmet",
    excerpt:
      "İş sürekliliğini esas alarak operasyonel süreçleri aksatmadan ofisinizi taşırız.",
    paragraphs: [
      "Ofis taşımacılığı ev taşımasına göre daha stratejik bir planlama gerektirir. Anadolu Koridoru, kurumsal taşımayı “iş sürekliliği” esasına dayandırır.",
      "Envanter bazlı süreç",
      "Bilişim altyapısı, elektronik cihazlar ve arşivler kayıt altına alınır; etiketlenir ve korumalı paketlenir.",
      "Zaman yönetimi",
      "Taşınma planı mesai dışı/hafta sonu gibi esnek dilimlere yayılabilir; yüksek katlarda asansörlü sistemlerle süre kısaltılır.",
      "Gizlilik ve güvenlik",
      "Arşivler mühürlü kutularla, IT ekipmanları statik elektrik önleyici paketlerle taşınır; süreç sigorta güvencesi altındadır.",
    ],
  },
  {
    id: "antalya-parca-esya-tasima-hizmeti",
    slug: "antalya-parca-esya-tasima-hizmeti",
    title: "Anadolu Koridoru Nakliyat: Antalya Parça Eşya Taşımacılığında Lojistik Akıl",
    category: "hizmet",
    excerpt:
      "Parsiyel (parça) taşımada akıllı yükleme ve ekonomik rota modeliyle maliyet avantajı.",
    paragraphs: [
      "Her taşınma komple araç gerektirmez. Parça eşya taşımada paylaşımlı lojistik modeliyle ekonomik çözüm sunuyoruz.",
      "Disiplinli operasyon",
      "Etiketleme/kodlama, araç içi hiyerarşik istifleme ve şeffaf bilgilendirme ile karışıklığa yer vermeyiz.",
      "Sigorta ve hız",
      "Düzenli sefer ağıyla bekletmeden sevk; değerli eşyalar için sigortalı taşıma.",
    ],
  },
  {
    id: "antalya-aksu-evden-eve-tasimacilik",
    slug: "antalya-aksu-evden-eve-tasimacilik",
    title: "Aksu Evden Eve Taşımacılık",
    category: "hizmet",
    excerpt:
      "Aksu’da keşif, planlama ve korumalı ambalajlama ile konforlu taşınma deneyimi.",
    paragraphs: [
      "Antalya’nın parlayan yıldızı Aksu’da taşınma, doğru planlama ile sorunsuz bir deneyime dönüşür. Sürecin başından sonuna müşteri memnuniyeti odaklı ilerleriz.",
      "Aksu Şehir İçi Nakliyat",
      "Mahalleler arası taşınmada trafik ve yol koşullarını önceden analiz eder, zaman yönetimini sizin lehinize çeviririz.",
      "Aksu Şehirler Arası Nakliyat",
      "Türkiye geneline uzanan taşımalarda dayanıklı ambalajlama ve sigorta güvencesiyle şeffaf süreç sunarız.",
    ],
  },
  {
    id: "antalya-dosemealti-evden-eve-tasimacilik",
    slug: "antalya-dosemealti-evden-eve-tasimacilik",
    title: "Döşemealtı Evden Eve Taşımacılık",
    category: "hizmet",
    excerpt:
      "Villa ve düşük katlı projelerde planlı, sistematik ve yüksek korumalı taşıma.",
    paragraphs: [
      "Döşemealtı’nda taşınma sürecini yeni hayata sorunsuz başlangıç olarak görür, ücretsiz ekspertizle planlarız.",
      "Döşemealtı Şehir İçi Nakliyat",
      "İlçe içi taşımada esnek saatler ve hızlı organizasyonla eşyalarınızı güvenle taşırız.",
      "Döşemealtı Şehirler Arası Nakliyat",
      "Uzun mesafede rota planlaması, iklime uygun muhafaza ve sigorta güvencesiyle ilerleriz.",
      "Döşemealtı Asansörlü Nakliyat",
      "Çok katlı yapılarda dış cephe asansörüyle çizilme/çarpma riskini düşürür, süreyi kısaltırız.",
    ],
  },
  {
    id: "antalya-konyaalti-evden-eve-tasimacilik",
    slug: "antalya-konyaalti-evden-eve-tasimacilik",
    title: "Konyaaltı Evden Eve Taşımacılık",
    category: "hizmet",
    excerpt:
      "Prestijli konut dokusuna uygun yüksek standartlı paketleme, planlama ve asansörlü taşıma.",
    paragraphs: [
      "Konyaaltı; modern siteler, rezidanslar ve sahil bandıyla yüksek standartlı taşımacılık ister. Süreci konforlu bir başlangıca dönüştürürüz.",
      "Konyaaltı Şehir İçi Nakliyat",
      "Site kuralları ve trafik dinamiklerine göre planlama yapar, çevreye saygılı şekilde operasyonu tamamlarız.",
      "Konyaaltı Şehirler Arası Nakliyat",
      "Uzun yol için sarsıntı emici kasalı araçlar ve şeffaf bilgilendirme ile güvenli taşırız.",
      "Konyaaltı Asansörlü Nakliyat",
      "Yüksek katlı yapılarda modüler yük asansörüyle süreyi kısaltır, hasar riskini azaltırız.",
    ],
  },
  {
    id: "antalya-kemer-evden-eve-tasimacilik",
    slug: "antalya-kemer-evden-eve-tasimacilik",
    title: "Kemer Evden Eve Taşımacılık",
    category: "hizmet",
    excerpt:
      "Nem ve tuzlu hava etkisine uygun ambalajlama ile güvenli taşımacılık.",
    paragraphs: [
      "Kemer’de deniz etkisi ve sezonluk yoğunluk taşımacılıkta özel hazırlık gerektirir. Eşyalarınızı dış etkenlere karşı koruyan ambalajlarla taşırız.",
      "Kemer Şehir İçi Nakliyat",
      "Turizm sezonu yoğunluğunu hesaba katar, uygun araçlarla hızlı ve düzenli taşırız.",
      "Kemer Şehirler Arası Nakliyat",
      "Kurumsal sigorta ve GPS takip odaklı şeffaf süreçle Türkiye geneline taşırız.",
    ],
  },
  {
    id: "antalya-kepez-evden-eve-tasimacilik",
    slug: "antalya-kepez-evden-eve-tasimacilik",
    title: "Kepez Evden Eve Taşımacılık",
    category: "hizmet",
    excerpt:
      "Kepez’in yoğun yerleşiminde saha analizi + kişiye özel plan ile sıfır hasar hedefi.",
    paragraphs: [
      "Kepez’de dar sokaklardan yüksek rezidanslara kadar her noktada taşınmayı profesyonel disiplinle yönetiriz.",
      "Kepez Şehir İçi Nakliyat",
      "Kısa mesafede bile ambalajlama/demontaj/montaj süreçlerini tek günde tamamlarız.",
      "Kepez Şehirler Arası Nakliyat",
      "Uzun yolda sigorta, GPS takip ve çok katmanlı paketleme ile güvenli taşıma sunarız.",
      "Kepez Asansörlü Nakliyat",
      "Çok katlı yapılarda dış cephe asansörüyle riskleri azaltır, süreyi kısaltırız.",
    ],
  },
];

export function getStaticDocsByCategory(category: StaticDocCategory) {
  return staticDocs.filter((d) => d.category === category);
}

export function getStaticDocBySlug(slug: string) {
  return staticDocs.find((d) => d.slug === slug);
}

export function getStaticDocById(id: string) {
  return staticDocs.find((d) => d.id === id);
}

