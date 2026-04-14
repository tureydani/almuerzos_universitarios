const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Menu', href: '#menu' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row">
        <div>
          <p className="font-display text-lg font-semibold text-slate-900">
            Almuerzos Universitarios
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Comida casera para estudiantes en Cochabamba.
          </p>
          <p className="mt-4 text-xs text-slate-400">
            2026. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-500">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-tangerine-600"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
