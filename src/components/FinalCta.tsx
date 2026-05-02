import { buildWhatsAppUrl } from '../utils/whatsapp'

type FinalCtaProps = {
  whatsappNumber: string
}

export default function FinalCta({ whatsappNumber }: FinalCtaProps) {
  return (
    <section id="pedido" className="bg-cream/70 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white px-6 py-12 shadow-soft sm:px-10">
          <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-leaf-200/70 blur-3xl" />
          <div className="absolute -right-10 bottom-6 h-40 w-40 rounded-full bg-sun-200/70 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-leaf-500">
                Pedido rapido
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                Haz tu pedido ahora
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-slate-600">
                Te respondemos por WhatsApp para coordinar horario y entrega.
                Facil, directo y con la calidez de Munay Mikuna.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={buildWhatsAppUrl(
                    whatsappNumber,
                    'Hola, quiero hacer un pedido en Munay Mikuna.',
                  )}
                  className="rounded-full bg-tangerine-500 px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-tangerine-600"
                >
                  Pedir por WhatsApp
                </a>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Respuesta en minutos
                </span>
              </div>
            </div>
            <div className="relative h-72 overflow-hidden rounded-[2rem] border border-white/70 bg-cream/60 shadow-soft sm:h-80">
              <img
                src="/images/pedidos/pedidos.png"
                alt="Pedidos realizados"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
