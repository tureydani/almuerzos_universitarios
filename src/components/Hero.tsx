import { useEffect, useState } from 'react'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export type HeroSlide = {
  title: string
  description: string
  image: string
}

type HeroProps = {
  whatsappNumber: string
  slides: HeroSlide[]
}

export default function Hero({ whatsappNumber, slides }: HeroProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (slides.length === 0) {
      return
    }
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [slides.length])

  const activeSlide = slides[current]

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="hero-glow" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-leaf-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-leaf-700">
            Cochabamba, Bolivia
          </span>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Comida saludable y emocional para cada dia
          </h1>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">
            Munay Mikuna transforma la comida diaria en una experiencia de
            bienestar: fresca, accesible y hecha con amor.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Ver menu
            </a>
            <a
              href={buildWhatsAppUrl(
                whatsappNumber,
                'Hola, quiero conocer el menu de Munay Mikuna.',
              )}
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-tangerine-400 hover:text-tangerine-600"
            >
              Pedir por WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-tangerine-500" />
              Menu saludable y accesible
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-leaf-500" />
              Experiencia calida y cercana
            </span>
          </div>
        </div>
        <div className="relative animate-fade-up">
          <div className="absolute -left-6 top-8 h-40 w-40 rounded-full bg-sun-200/70 blur-3xl" />
          <div className="absolute -right-8 bottom-2 h-40 w-40 rounded-full bg-tangerine-200/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white shadow-glow">
            <div className="relative h-[420px]">
              {slides.map((slide, index) => (
                <img
                  key={slide.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    current === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  src={slide.image}
                  alt={slide.title}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
            </div>
            {activeSlide ? (
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/85 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-slate-900">
                  {activeSlide.title}
                </p>
                <p className="text-xs text-slate-500">
                  {activeSlide.description}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
