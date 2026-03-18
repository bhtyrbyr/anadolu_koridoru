export const contact = {
  phoneDisplay: "0538 272 11 97",
  phoneE164: "+905382721197",
  whatsappDigits: "905382721197",
} as const;

export function buildQuoteMessage(input: {
  name?: string;
  phone?: string;
  email?: string;
  route?: string;
  message?: string;
  page?: string;
}) {
  const lines = [
    "Merhaba, teklif almak istiyorum.",
    input.page ? `Kaynak: ${input.page}` : undefined,
    input.name ? `Ad Soyad: ${input.name}` : undefined,
    input.phone ? `Telefon: ${input.phone}` : undefined,
    input.email ? `E-posta: ${input.email}` : undefined,
    input.route ? `Güzergah: ${input.route}` : undefined,
    input.message ? `Detay: ${input.message}` : undefined,
  ].filter(Boolean);

  return lines.join("\n");
}

export function buildWhatsAppUrl(text: string) {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${contact.whatsappDigits}?text=${encoded}`;
}

