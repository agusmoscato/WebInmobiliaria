"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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

function PropertyDetailsModal({
  propiedad,
  onClose
}: {
  propiedad: Property;
  onClose: () => void;
}) {

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`propiedad-${propiedad.id}-titulo`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white transition hover:bg-slate-900"
          aria-label="Cerrar detalle de la propiedad"
        >
          <span className="text-2xl leading-none">×</span>
        </button>
        <div className="grid gap-6 md:grid-cols-[1.15fr,1fr]">
          <div className="relative h-72 w-full md:h-full">
            <Image
              src={propiedad.imagen}
              alt={propiedad.titulo}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 90vw"
            />
          </div>
          <div className="flex flex-col gap-6 p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge">{propiedad.tipo}</span>
              <span className="text-sm font-medium text-primary">{propiedad.precio}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {propiedad.zona}
              </span>
            </div>
            <div>
              <h3 id={`propiedad-${propiedad.id}-titulo`} className="text-2xl font-semibold text-slate-900">
                {propiedad.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{propiedad.descripcion}</p>
            </div>
            <dl className="grid grid-cols-2 gap-4 text-sm text-slate-600 sm:grid-cols-3">
              <div>
                <dt className="font-semibold text-slate-500">Ubicación</dt>
                <dd>{propiedad.ubicacion}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-500">Ambientes</dt>
                <dd>{propiedad.ambientes > 0 ? propiedad.ambientes : 'N/D'}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-500">Superficie</dt>
                <dd>{propiedad.superficie} m²</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-500">Precio</dt>
                <dd>{propiedad.precio}</dd>
              </div>
            </dl>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <p>
                Contactá a un asesor para conocer más detalles, coordinar una visita o recibir una tasación sin costo.
              </p>
              <Link href="#contacto" className="button-primary inline-flex w-full justify-center md:w-auto">
                Contactar asesor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PropiedadesSection({ propiedades, verTodasHref, contenido }: PropiedadesSectionProps) {
  const destacadas = propiedades.filter((propiedad) => propiedad.destacado);
  const [propiedadSeleccionada, setPropiedadSeleccionada] = useState<Property | null>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (propiedadSeleccionada) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [propiedadSeleccionada]);

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
                <button
                  type="button"
                  onClick={() => setPropiedadSeleccionada(propiedad)}
                  className="button-primary w-full"
                >
                  {contenido.card.verMas}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {propiedadSeleccionada ? (
        <PropertyDetailsModal propiedad={propiedadSeleccionada} onClose={() => setPropiedadSeleccionada(null)} />
      ) : null}
    </section>
  );
}
