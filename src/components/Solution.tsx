type SolutionProps = {
  benefits: string[]
}

export default function Solution({ benefits }: SolutionProps) {
  return (
    <section className="bg-cream/60 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-leaf-500">
            Solucion
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
            Almuerzos Universitarios es comida casera, nutritiva y economica
          </h2>
          <p className="mt-4 text-sm text-slate-600">
            Cocinamos desde casa con ingredientes frescos y recetas locales,
            listos para llevar o pedir por WhatsApp. Todo pensado para estudiantes
            que quieren comer bien sin gastar de mas.
          </p>
        </div>
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/80 p-5 shadow-soft"
            >
              <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-leaf-400 to-tangerine-300 text-sm font-semibold text-white">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-900">
                  {benefit}
                </h3>
                <p className="text-sm text-slate-600">
                  Pensado para tu rutina universitaria en Cochabamba.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
