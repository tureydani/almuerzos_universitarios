type ProblemItem = {
  title: string
  description: string
}

type ProblemProps = {
  items: ProblemItem[]
}

export default function Problem({ items }: ProblemProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-tangerine-500">
            Problema
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
            La rutina universitaria deja poco espacio para comer bien
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-soft transition hover:-translate-y-1 hover:border-tangerine-200 hover:bg-white"
            >
              <h3 className="font-display text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {item.description}
              </p>
              <div className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-tangerine-500 to-sun-400 opacity-60 transition group-hover:opacity-100" />
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-600">
          Resultado: afecta salud, energia y rendimiento academico.
        </p>
      </div>
    </section>
  )
}
