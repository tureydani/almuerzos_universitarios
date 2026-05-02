const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Menu', href: '#menu' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Diferencial', href: '#diferencial' },
  { label: 'Pedido', href: '#pedido' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-cream py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div className="space-y-3">
          <p className="font-display text-lg font-semibold text-slate-900">
            Munay Mikuna
          </p>
          <p className="text-sm text-slate-600">
            Comida saludable hecha con amor. Cochabamba, Bolivia.
          </p>
          <p className="text-xs text-slate-400">
            © 2026 Munay Mikuna — Todos los derechos reservados
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-leaf-500">
            Navegacion
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm font-medium text-slate-600">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-leaf-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-leaf-500">
            Contacto
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-600">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10Z"
                  />
                  <circle cx="12" cy="10" r="2.2" />
                </svg>
              </div>
              <p>
                Ubicacion
                <span className="block text-slate-400">Cochabamba, Bolivia</span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-600">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.6 4.8A4.6 4.6 0 0 1 10.6 3h2.8A4.6 4.6 0 0 1 18 7.6v8.8a4.6 4.6 0 0 1-4.6 4.6h-2.8A4.6 4.6 0 0 1 6 16.4V7.6c0-1.1.4-2.1 1-2.8Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9.5c1.2 2.4 3.5 4.3 6 5l1.2-1.3c.3-.3.7-.4 1.1-.3l2 .6c.5.2.8.7.7 1.2-.3 1.4-1.4 2.3-2.8 2.3-6 0-10.8-4.8-10.8-10.8 0-1.4.9-2.5 2.3-2.8.5-.1 1 .2 1.2.7l.6 2c.1.4 0 .8-.3 1.1L9 9.5Z"
                  />
                </svg>
              </div>
              <p>
                Pedidos por WhatsApp
                <span className="block text-slate-400">+591 783 005 32</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
