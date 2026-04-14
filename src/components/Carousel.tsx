import { useEffect, useState } from 'react'

type CarouselItem = {
  title: string
  image: string
}

type CarouselProps = {
  items: CarouselItem[]
}

export default function Carousel({ items }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [items.length])

  return (
    <section className="bg-cream/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-tangerine-500">
              Sabores
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              Un carrusel de opciones listas para ti
            </h2>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            {items.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  current === index ? 'bg-tangerine-500' : 'bg-slate-300'
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Ver imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="relative mt-8 overflow-hidden rounded-[2.5rem] border border-white/70 bg-white shadow-soft">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-slate-900/20 to-transparent" />
          {items.map((item, index) => (
            <img
              key={item.title}
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 h-[420px] w-full object-cover transition-opacity duration-700 ${
                current === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute bottom-6 left-6 max-w-lg rounded-2xl bg-white/80 p-5 text-slate-900 backdrop-blur">
            <p className="text-sm font-semibold">{items[current]?.title}</p>
            <p className="text-xs text-slate-500">
              Opciones caseras listas para tu menu del dia.
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-3 sm:hidden">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 w-2.5 rounded-full transition ${
                current === index ? 'bg-tangerine-500' : 'bg-slate-300'
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
