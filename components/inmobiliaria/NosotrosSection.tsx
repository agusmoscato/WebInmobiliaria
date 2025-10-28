interface NosotrosSectionProps {
  badge: string;
  titulo: string;
  descripcion: string;
  detalleTitulo: string;
  diferenciales: string[];
}

export function NosotrosSection({ badge, titulo, descripcion, detalleTitulo, diferenciales }: NosotrosSectionProps) {
  return (
    <section id="nosotros" className="section-padding">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="badge mb-3">{badge}</p>
            <h2 className="section-title">{titulo}</h2>
            <p className="section-subtitle">{descripcion}</p>
          </div>
          <div className="card p-8">
            <h3 className="text-lg font-semibold text-slate-900">{detalleTitulo}</h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-600">
              {diferenciales.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
