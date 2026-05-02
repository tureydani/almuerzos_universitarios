export function buildWhatsAppUrl(number: string, message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encoded}`
}
