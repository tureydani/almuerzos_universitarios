type MenuItem = {
  id: string
  name: string
  price: string
  image: string
}

type MenuProps = {
  items: MenuItem[]
  whatsappNumber: string
}

function buildWhatsAppUrl(number: string, message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encoded}`
}

export default function Menu({ items, whatsappNumber }: MenuProps) {
  return (
    <section id="menu" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sun-500">
              Menu
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              Platos cochabambinos listos para tu dia
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              Combos accesibles, porciones completas y opciones saludables.
              Actualizamos el menu segun temporada.
            </p>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500">
            Precios pensados para estudiantes
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800">
                  {item.price}
                </div>
              </div>
              <div className="space-y-4 p-6">
                <h3 className="font-display text-lg font-semibold text-slate-900">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Disponible hoy
                  </span>
                  <a
                    href={buildWhatsAppUrl(
                      whatsappNumber,
                      `Hola, quiero pedir: ${item.name}`,
                    )}
                    className="rounded-full bg-leaf-500 px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-leaf-600"
                  >
                    Pedir por WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
