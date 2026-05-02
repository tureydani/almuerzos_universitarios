const highlights = [
  {
    title: 'Notas motivacionales',
    description:
      'Cada pedido incluye un mensaje que acompana tu dia y te recuerda cuidarte.',
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
    title: 'Experiencia emocional',
    description:
      'No solo alimentamos, tambien creamos un momento de bienestar y calma.',
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

export default function Differential() {
  return (
    <section id="diferencial" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-tangerine-500">
              Diferencial
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              Comida que nutre cuerpo y emociones
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Munay Mikuna combina sabor saludable con pequenos gestos que hacen la
              diferencia. Queremos que cada entrega se sienta cercana, calida y
              motivadora.
            </p>
          </div>
          <div className="space-y-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-soft transition hover:-translate-y-1 hover:border-tangerine-200 hover:bg-white"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-tangerine-100 text-tangerine-600 transition group-hover:scale-105">
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
