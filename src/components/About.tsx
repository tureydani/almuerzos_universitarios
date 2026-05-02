const highlights = [
  {
    title: 'Frescura diaria',
    description: 'Ingredientes frescos y locales preparados cada dia.',
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
    title: 'Accesible y cercano',
    description: 'Precios justos y porciones completas para todos.',
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
          d="M4 10h16M7 6h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6" />
      </svg>
    ),
  },
  {
    title: 'Bienestar emocional',
    description: 'Cada pedido incluye una nota motivacional.',
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
          d="M12 20s-6-4.35-8.5-7.4C1.4 9.9 3.2 6.5 6.7 6.5c2 0 3.2 1.1 3.8 2.2.6-1.1 1.8-2.2 3.8-2.2 3.5 0 5.3 3.4 3.2 6.1C18 15.65 12 20 12 20Z"
        />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute -left-16 top-16 h-40 w-40 rounded-full bg-leaf-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-44 w-44 rounded-full bg-sun-100/60 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-leaf-500">
              Nuestra esencia
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              Comida saludable, accesible y hecha con amor
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Munay Mikuna nace para cuidar tu bienestar con platos frescos y
              cercanos. Cocinamos con proposito, para que cada bocado se sienta
              ligero, calido y lleno de energia.
            </p>
          </div>
          <div className="grid gap-4">
            {highlights.map((item) => (
              <div
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
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
