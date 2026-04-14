type HeroProps = {
  whatsappNumber: string
}

function buildWhatsAppUrl(number: string, message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encoded}`
}

export default function Hero({ whatsappNumber }: HeroProps) {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="hero-glow" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-leaf-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-leaf-700">
            Cochabamba, Bolivia
          </span>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Comida saludable y economica para estudiantes
          </h1>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">
            Almuerzos caseros listos para llevar, pensados para tu ritmo
            universitario. Porciones completas, precio accesible y sabor
            cochabambino.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Ver Menu
            </a>
            <a
              href={buildWhatsAppUrl(
                whatsappNumber,
                'Hola, quiero pedir el menu del dia.',
              )}
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-tangerine-400 hover:text-tangerine-600"
            >
              Pedir por WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-tangerine-500" />
              Entregas cerca de universidades
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-leaf-500" />
              Menu balanceado
            </span>
          </div>
        </div>
        <div className="relative animate-fade-up">
          <div className="absolute -left-6 top-8 h-40 w-40 rounded-full bg-sun-200/70 blur-3xl" />
          <div className="absolute -right-8 bottom-2 h-40 w-40 rounded-full bg-tangerine-200/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white shadow-glow">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
              alt="Plato de comida casera"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/80 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-slate-900">
                Listo en minutos para tu jornada
              </p>
              <p className="text-xs text-slate-500">
                Porciones completas con proteina y verduras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
