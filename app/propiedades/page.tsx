import type { Metadata } from 'next';
import Link from 'next/link';
import { PropiedadesExplorer } from '@/components/inmobiliaria/PropiedadesExplorer';
import { Footer } from '@/components/inmobiliaria/Footer';
import {
  propiedades,
  seoContent,
  listadoPropiedadesContent,
  propiedadesPageContent,
  footerLinks,
  footerContent,
  contactInfo
} from '@/data/inmobiliariaData';

export const metadata: Metadata = {
  title: `${seoContent.title} | Listado completo de propiedades`,
  description:
    'Encontrá todas las propiedades disponibles de InmoPrime y filtrá por zona, tipo de inmueble y rango de precio.'
};

export default function PropiedadesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="bg-white py-6 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-10">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">{propiedadesPageContent.titulo}</h1>
            <p className="text-sm text-slate-500">{propiedadesPageContent.descripcion}</p>
          </div>
          <Link href="/" className="button-secondary">
            {propiedadesPageContent.botonVolver}
          </Link>
        </div>
      </div>
      <PropiedadesExplorer propiedades={propiedades} contenido={listadoPropiedadesContent} />
      <Footer info={contactInfo} links={footerLinks} marca={footerContent.marca} copy={footerContent.copy} />
    </main>
  );
}
