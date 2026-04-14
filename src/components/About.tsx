export default function About() {
  return (
    <section id="nosotros" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-leaf-500">
              Nosotros
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              Emprendimiento desde casa con mirada a futuro
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Almuerzos Universitarios nace para acompañar a estudiantes de
              Cochabamba con comida casera, nutritiva y economica. Recibimos
              pedidos por WhatsApp y realizamos entregas cerca de universidades.
              Nuestro objetivo es crecer hacia un local fisico o una app propia.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">
                Operacion cercana
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Produccion diaria en casa, con procesos limpios y horarios claros.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">
                Pedidos faciles
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                WhatsApp directo, sin friccion y con respuesta rapida.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">
                Escalabilidad real
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Podemos crecer en cobertura, alianzas con universidades y un
                futuro local fisico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
