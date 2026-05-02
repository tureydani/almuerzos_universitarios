import { useEffect, useMemo, useState } from 'react'
import type { MenuCategory } from '../data/menu'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import ProductCard from './ProductCard'

type MenuProps = {
  categories: MenuCategory[]
  whatsappNumber: string
}

function resolveInitialCategory(categories: MenuCategory[], hash: string) {
  if (!hash.startsWith('#menu-')) {
    return categories[0]?.id ?? ''
  }

  const candidate = hash.replace('#menu-', '')
  const match = categories.find((category) => category.id === candidate)

  return match?.id ?? categories[0]?.id ?? ''
}

export default function Menu({ categories, whatsappNumber }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState(
    resolveInitialCategory(categories, window.location.hash),
  )

  useEffect(() => {
    const handleHashChange = () => {
      setActiveCategory(resolveInitialCategory(categories, window.location.hash))
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [categories])

  const activeData = useMemo(
    () =>
      categories.find((category) => category.id === activeCategory) ??
      categories[0],
    [activeCategory, categories],
  )

  const handleTabClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    window.history.replaceState(null, '', `#menu-${categoryId}`)
  }

  return (
    <section id="menu" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sun-500">
              Menu
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              Un menu completo para cada momento
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              Productos frescos y accesibles, listos para cambiar semanalmente.
            </p>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500">
            Nuevo menu cada semana
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleTabClick(category.id)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                activeCategory === category.id
                  ? 'border-leaf-300 bg-leaf-100 text-leaf-700'
                  : 'border-slate-200 bg-white text-slate-500 hover:border-leaf-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
        {activeData ? (
          <div className="mt-10">
            <div className="mb-6">
              <span
                id={`menu-${activeData.id}`}
                className="block h-0 scroll-mt-28"
              />
              <h3 className="font-display text-2xl font-semibold text-slate-900">
                {activeData.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {activeData.description}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activeData.items.map((item) => (
                <a
                  key={item.id}
                  href={buildWhatsAppUrl(
                    whatsappNumber,
                    `Hola, quiero pedir: ${item.name}`,
                  )}
                  className="block"
                >
                  <ProductCard
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
