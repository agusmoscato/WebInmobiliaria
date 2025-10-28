'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { filtrosPropiedades, Property } from '@/data/inmobiliariaData';

interface ListadoContent {
  badge: string;
  titulo: string;
  descripcion: string;
  ctaPregunta: string;
  enlaceTexto: string;
  busquedaPlaceholder: string;
  filtros: {
    tipo: string;
    zona: string;
    precio: string;
    busqueda: string;
  };
  coordinarVisitaLabel: string;
  atributos: {
    ambientesLabel: string;
    superficieSufijo: string;
  };
  emptyState: string;
}

interface PropiedadesExplorerProps {
  propiedades: Property[];
  contenido: ListadoContent;
}

export function PropiedadesExplorer({ propiedades, contenido }: PropiedadesExplorerProps) {
  const [tipo, setTipo] = useState<string>(filtrosPropiedades.tipos[0]);
  const [zona, setZona] = useState<string>(filtrosPropiedades.zonas[0]);
  const [precio, setPrecio] = useState<string>(filtrosPropiedades.rangosPrecio[0].label);
  const [busqueda, setBusqueda] = useState<string>('');

  const filtroPrecio = useMemo(
    () => filtrosPropiedades.rangosPrecio.find((rango) => rango.label === precio) ?? filtrosPropiedades.rangosPrecio[0],
    [precio]
  );

  const propiedadesFiltradas = useMemo(() => {
    const termino = busqueda.trim().toLowerCase();
    return propiedades.filter((propiedad) => {
      const coincideTipo = tipo === 'Todos' || propiedad.tipo === tipo;
      const coincideZona = zona === 'Todas' || propiedad.zona === zona;
      const coincidePrecio = propiedad.precioValor >= filtroPrecio.min && propiedad.precioValor <= filtroPrecio.max;
      const coincideTexto =
        termino.length === 0 ||
        propiedad.titulo.toLowerCase().includes(termino) ||
        propiedad.ubicacion.toLowerCase().includes(termino);
      return coincideTipo && coincideZona && coincidePrecio && coincideTexto;
    });
  }, [busqueda, filtroPrecio.max, filtroPrecio.min, propiedades, tipo, zona]);

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="pb-10">
          <p className="badge mb-3">{contenido.badge}</p>
          <h1 className="section-title">{contenido.titulo}</h1>
          <p className="section-subtitle">
            {contenido.descripcion} {contenido.ctaPregunta}{' '}
            <Link href="/ #contacto" className="font-semibold text-primary">
              {contenido.enlaceTexto}
            </Link>
            .
          </p>
        </div>

        <div className="card mb-12 border border-slate-100 p-6">
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <label htmlFor="tipo" className="block text-xs font-semibold uppercase text-slate-500">
                {contenido.filtros.tipo}
              </label>
              <select
                id="tipo"
                value={tipo}
                onChange={(event) => setTipo(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {filtrosPropiedades.tipos.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="zona" className="block text-xs font-semibold uppercase text-slate-500">
                {contenido.filtros.zona}
              </label>
              <select
                id="zona"
                value={zona}
                onChange={(event) => setZona(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {filtrosPropiedades.zonas.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="precio" className="block text-xs font-semibold uppercase text-slate-500">
                {contenido.filtros.precio}
              </label>
              <select
                id="precio"
                value={precio}
                onChange={(event) => setPrecio(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {filtrosPropiedades.rangosPrecio.map((item) => (
                  <option key={item.label} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="busqueda" className="block text-xs font-semibold uppercase text-slate-500">
                {contenido.filtros.busqueda}
              </label>
              <input
                id="busqueda"
                value={busqueda}
                onChange={(event) => setBusqueda(event.target.value)}
                placeholder={contenido.busquedaPlaceholder}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {propiedadesFiltradas.map((propiedad) => (
            <article key={propiedad.id} id={`propiedad-${propiedad.id}`} className="card overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={propiedad.imagen}
                  alt={propiedad.titulo}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <span className="badge">{propiedad.tipo}</span>
                  <span className="text-sm font-semibold text-primary">{propiedad.precio}</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">{propiedad.titulo}</h2>
                  <p className="mt-2 text-sm text-slate-600">{propiedad.descripcion}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span>{propiedad.ubicacion}</span>
                  <span>•</span>
                  <span>
                    {propiedad.ambientes} {contenido.atributos.ambientesLabel}
                  </span>
                  <span>•</span>
                  <span>
                    {propiedad.superficie} {contenido.atributos.superficieSufijo}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{propiedad.zona}</span>
                  <Link href="/ #contacto" className="font-semibold text-primary">
                    {contenido.coordinarVisitaLabel}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {propiedadesFiltradas.length === 0 && (
          <div className="mt-10 rounded-3xl bg-slate-100 px-6 py-10 text-center text-sm text-slate-500">
            {contenido.emptyState}{' '}
            <Link href="/ #contacto" className="font-semibold text-primary">
              {contenido.enlaceTexto}
            </Link>
            .
          </div>
        )}
      </div>
    </section>
  );
}
