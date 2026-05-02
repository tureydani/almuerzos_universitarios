import { useState } from 'react'

export type ProductCardProps = {
  name: string
  description: string
  price: string
  image: string
}

const fallbackImage = '/images/placeholder.svg'

export default function ProductCard({
  name,
  description,
  price,
  image,
}: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(image)

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden bg-slate-50">
        <img
          src={imgSrc}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={() => setImgSrc(fallbackImage)}
          loading="lazy"
        />
        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800">
          {price}
        </div>
      </div>
      <div className="space-y-2 p-6">
        <h3 className="font-display text-lg font-semibold text-slate-900">
          {name}
        </h3>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </article>
  )
}
