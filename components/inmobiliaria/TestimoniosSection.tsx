import Image from 'next/image';
import { Testimonial } from '@/data/inmobiliariaData';

interface TestimoniosSectionContent {
  badge: string;
  titulo: string;
  descripcion: string;
}

interface TestimoniosSectionProps {
  testimonios: Testimonial[];
  contenido: TestimoniosSectionContent;
}

export function TestimoniosSection({ testimonios, contenido }: TestimoniosSectionProps) {
  return (
    <section id="testimonios" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-3xl pb-12">
          <p className="badge mb-3">{contenido.badge}</p>
          <h2 className="section-title">{contenido.titulo}</h2>
          <p className="section-subtitle">{contenido.descripcion}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonios.map((testimonio) => (
            <article key={testimonio.id} className="card flex h-full flex-col gap-6 p-8">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image
                    src={testimonio.imagen}
                    alt={testimonio.nombre}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{testimonio.nombre}</h3>
                  <p className="text-sm text-slate-500">{testimonio.cargo}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">{testimonio.mensaje}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
