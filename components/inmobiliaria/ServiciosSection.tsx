import { Service } from '@/data/inmobiliariaData';

const iconMap: Record<string, JSX.Element> = {
  'home-modern': (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 10.5 12 4l9 6.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10.5V20h14v-9.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 20v-5h6v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'chart-bars': (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20h16" strokeLinecap="round" />
      <rect x="6" y="10" width="3" height="6" rx="1" />
      <rect x="11" y="6" width="3" height="10" rx="1" />
      <rect x="16" y="12" width="3" height="4" rx="1" />
    </svg>
  ),
  key: (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="10" cy="10" r="4" />
      <path d="m13.5 13.5 3 3" strokeLinecap="round" />
      <path d="m17 17 2 2" strokeLinecap="round" />
      <path d="m15.5 15.5 2 2" strokeLinecap="round" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4v16" strokeLinecap="round" />
      <path d="m4 9 4 7 4-7H4Z" />
      <path d="m12 9 4 7 4-7h-8Z" />
    </svg>
  )
};

interface ServiciosSectionContent {
  badge: string;
  titulo: string;
  descripcion: string;
}

interface ServiciosSectionProps {
  servicios: Service[];
  contenido: ServiciosSectionContent;
}

export function ServiciosSection({ servicios, contenido }: ServiciosSectionProps) {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-3xl pb-12">
          <p className="badge mb-3">{contenido.badge}</p>
          <h2 className="section-title">{contenido.titulo}</h2>
          <p className="section-subtitle">{contenido.descripcion}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {servicios.map((servicio) => (
            <article key={servicio.id} className="card p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {iconMap[servicio.icon]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{servicio.titulo}</h3>
                  <p className="mt-3 text-sm text-slate-600">{servicio.descripcion}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
