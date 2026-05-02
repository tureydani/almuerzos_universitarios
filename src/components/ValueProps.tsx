const valueProps = [
  {
    title: 'Ingredientes frescos',
    description: 'Seleccion diaria de productos locales y de temporada.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 16c5 0 9-4 9-9 4 0 6 3 6 6 0 6-6 10-12 10-3 0-6-2-7-5 1-1 2-2 4-2Z"
        />
      </svg>
    ),
  },
  {
    title: 'Empaque ecologico',
    description: 'Cuidamos el planeta con materiales responsables.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 9.5 12 5l7.5 4.5V18L12 23l-7.5-5Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v18" />
      </svg>
    ),
  },
  {
    title: 'Notas motivacionales',
    description: 'Cada pedido lleva un mensaje para tu dia.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 4h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 4v-4H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6M9 12h4" />
      </svg>
    ),
  },
  {
    title: 'Pedido rapido por WhatsApp',
    description: 'Sin pasos extra, directo y en minutos.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12 3 6l18 6-18 6 2-6Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 12h7" />
      </svg>
    ),
  },
]

export default function ValueProps() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-leaf-500">
              Propuesta de valor
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              Bienestar real en cada entrega
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              Comida saludable, accesible y pensada para acompañar tu ritmo.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item) => (
            <article
              key={item.title}
              className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-soft transition hover:-translate-y-1 hover:border-leaf-200 hover:bg-white"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-600 transition group-hover:scale-105">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
