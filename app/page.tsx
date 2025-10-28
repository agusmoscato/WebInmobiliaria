import { HeroInmobiliaria } from '@/components/inmobiliaria/HeroInmobiliaria';
import { PropiedadesSection } from '@/components/inmobiliaria/PropiedadesSection';
import { NosotrosSection } from '@/components/inmobiliaria/NosotrosSection';
import { ServiciosSection } from '@/components/inmobiliaria/ServiciosSection';
import { TestimoniosSection } from '@/components/inmobiliaria/TestimoniosSection';
import { ContactoSection } from '@/components/inmobiliaria/ContactoSection';
import { Footer } from '@/components/inmobiliaria/Footer';
import {
  heroSlides,
  propiedades,
  aboutContent,
  servicios,
  testimonios,
  contactInfo,
  contactoContent,
  footerLinks,
  propiedadesSectionContent,
  serviciosSectionContent,
  testimoniosSectionContent,
  footerContent
} from '@/data/inmobiliariaData';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col gap-0">
      <HeroInmobiliaria slides={heroSlides} />
      <PropiedadesSection
        propiedades={propiedades}
        verTodasHref="/propiedades"
        contenido={propiedadesSectionContent}
      />
      <NosotrosSection
        badge={aboutContent.badge}
        titulo={aboutContent.titulo}
        descripcion={aboutContent.descripcion}
        detalleTitulo={aboutContent.detalleTitulo}
        diferenciales={aboutContent.diferenciales}
      />
      <ServiciosSection servicios={servicios} contenido={serviciosSectionContent} />
      <TestimoniosSection testimonios={testimonios} contenido={testimoniosSectionContent} />
      <ContactoSection info={contactInfo} content={contactoContent} />
      <Footer info={contactInfo} links={footerLinks} marca={footerContent.marca} copy={footerContent.copy} />
    </main>
  );
}
