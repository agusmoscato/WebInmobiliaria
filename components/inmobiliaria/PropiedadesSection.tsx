import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/data/inmobiliariaData';

interface PropiedadesSectionContent {
  badge: string;
  titulo: string;
  descripcion: string;
  boton: string;
  card: {
    verMas: string;
    ambientesLabel: string;
    superficieSufijo: string;
  };
}

interface PropiedadesSectionProps {
  propiedades: Property[];
  verTodasHref: string;
  contenido: PropiedadesSectionContent;
}

export function PropiedadesSection({ propiedades, verTodasHref, contenido }: PropiedadesSectionProps) {
  const destacadas = propiedades.filter((propiedad) => propiedad.destacado);

  return (
    <section id="propiedades" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col items-start justify-between gap-6 pb-12 sm:flex-row sm:items-center">
          <div>
            <p className="badge mb-3">{contenido.badge}</p>
            <h2 className="section-title">{contenido.titulo}</h2>
            <p className="section-subtitle">{contenido.descripcion}</p>
          </div>
          <Link href={verTodasHref} className="button-secondary whitespace-nowrap">
            {contenido.boton}
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {destacadas.map((propiedad) => (
            <article key={propiedad.id} className="card overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={propiedad.imagen}
                  alt={propiedad.titulo}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <span className="badge">{propiedad.tipo}</span>
                  <span className="text-sm font-semibold text-primary">{propiedad.precio}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{propiedad.titulo}</h3>
                  <p className="mt-2 text-sm text-slate-600">{propiedad.descripcion}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span>{propiedad.ubicacion}</span>
                  <span>•</span>
                  <span>
                    {propiedad.ambientes} {contenido.card.ambientesLabel}
                  </span>
                  <span>•</span>
                  <span>
                    {propiedad.superficie} {contenido.card.superficieSufijo}
                  </span>
                </div>
                <Link href={`${verTodasHref}#propiedad-${propiedad.id}`} className="button-primary w-full">
                  {contenido.card.verMas}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
