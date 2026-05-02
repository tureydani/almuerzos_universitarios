import type { MenuCategory } from '../data/menu'

type MenuPreviewProps = {
  categories: MenuCategory[]
}

export default function MenuPreview({ categories }: MenuPreviewProps) {
  return (
    <section className="bg-cream/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sun-500">
              Preview del menu
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              Cuatro categorias para cada momento
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              Desayunos, viandas, almuerzos y postres con identidad saludable.
            </p>
          </div>
          <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-500">
            Actualizamos cada semana
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#menu-${category.id}`}
              className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white shadow-soft transition hover:-translate-y-1"
            >
              <img
                src={category.previewImage}
                alt={category.title}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="font-display text-xl font-semibold text-white">
                  {category.title}
                </h3>
                <p className="mt-1 text-xs text-white/80">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
