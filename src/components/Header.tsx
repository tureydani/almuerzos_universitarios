type HeaderProps = {
  whatsappNumber: string
}

import { buildWhatsAppUrl } from '../utils/whatsapp'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Menu', href: '#menu' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Diferencial', href: '#diferencial' },
  { label: 'Pedido', href: '#pedido' },
]

export default function Header({ whatsappNumber }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft">
            <img
              src="/brand/logo.png"
              alt="Logo Munay Mikuna"
              className="h-full w-full object-contain p-1"
            />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-slate-900">
            Munay Mikuna
          </span>
        </div>
        <nav className="order-3 flex w-full items-center justify-center gap-4 text-sm font-medium text-slate-700 sm:order-2 sm:w-auto sm:justify-start sm:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-tangerine-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={buildWhatsAppUrl(
            whatsappNumber,
            'Hola, quiero conocer el menu de Munay Mikuna.',
          )}
          className="order-2 rounded-full bg-tangerine-500 px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-tangerine-600 sm:order-3"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </header>
  )
}
