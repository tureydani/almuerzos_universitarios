type ContactProps = {
  whatsappNumber: string
}

function buildWhatsAppUrl(number: string, message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encoded}`
}

export default function Contact({ whatsappNumber }: ContactProps) {
  return (
    <section id="contacto" className="bg-cream/70 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 rounded-[2.5rem] border border-white/60 bg-white px-6 py-12 shadow-soft md:grid-cols-[1.1fr_0.9fr] md:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-tangerine-500">
              Contacto
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              Pide tu almuerzo por WhatsApp en segundos
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Estamos en Cochabamba y atendemos de lunes a viernes. Puedes editar
              el mensaje y coordinar horarios de entrega cerca de tu universidad.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={buildWhatsAppUrl(
                  whatsappNumber,
                  'Hola, quiero coordinar un pedido para hoy.',
                )}
                className="rounded-full bg-leaf-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-leaf-600"
              >
                Abrir WhatsApp
              </a>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-600">
                Cochabamba, Bolivia
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">
                Horario sugerido
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                10:30 - 15:00 | Pedidos anticipados
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">
                Redes sociales
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Instagram y Facebook disponibles para novedades del menu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
