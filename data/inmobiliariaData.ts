export type HeroSlide = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
  imageUrl: string;
};

export type Property = {
  id: number;
  titulo: string;
  descripcion: string;
  ubicacion: string;
  zona: 'CABA' | 'Zona Norte' | 'Zona Oeste' | 'Zona Sur';
  tipo: 'Casa' | 'Departamento' | 'Oficina' | 'Lote';
  ambientes: number;
  superficie: number;
  precio: string;
  precioValor: number;
  destacado?: boolean;
  imagen: string;
};

export type Service = {
  id: number;
  titulo: string;
  descripcion: string;
  icon: string;
};

export type Testimonial = {
  id: number;
  nombre: string;
  cargo: string;
  mensaje: string;
  imagen: string;
};

export type ContactInfo = {
  telefono: string;
  email: string;
  direccion: string;
  horarios: string;
  mapaEmbedUrl: string;
  social: {
    label: string;
    href: string;
  }[];
};

export type ContactSectionContent = {
  badge: string;
  titulo: string;
  descripcion: string;
  campos: {
    nombre: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    mensaje: {
      label: string;
      placeholder: string;
    };
  };
  boton: string;
  aviso: string;
  mensajeExito: string;
  infoTitulo: string;
  telefonoLabel: string;
  emailLabel: string;
  direccionLabel: string;
  horariosLabel: string;
  seguinosLabel: string;
  mapaTitulo: string;
};

export type FooterLinkGroup = {
  titulo: string;
  links: {
    label: string;
    href: string;
  }[];
};

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: 'Inversiones inteligentes',
    title: 'Propiedades exclusivas en los barrios más buscados',
    description:
      'Conectamos a las personas con hogares y oportunidades de inversión únicas en CABA y Zona Norte. Descubrí experiencias personalizadas con nuestro equipo de asesores.',
    primaryAction: {
      label: 'Descubrir propiedades',
      href: '#propiedades'
    },
    secondaryAction: {
      label: 'Contactar asesor',
      href: '#contacto'
    },
    imageUrl:
      'https://images.unsplash.com/photo-1505692794403-55b39e05d1df?auto=format&fit=crop&w=1880&q=80'
  },
  {
    id: 2,
    eyebrow: 'Experiencia boutique',
    title: 'Acompañamiento integral en cada etapa del proceso inmobiliario',
    description:
      'Desde la tasación hasta la escrituración, brindamos un servicio a medida con herramientas digitales, reportes de mercado y una red de aliados estratégicos.',
    primaryAction: {
      label: 'Ver servicios',
      href: '#servicios'
    },
    secondaryAction: {
      label: 'Solicitar tasación',
      href: '#contacto'
    },
    imageUrl:
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1880&q=80'
  },
  {
    id: 3,
    eyebrow: 'Clientes felices',
    title: 'Más de 500 familias encontraron su hogar con nosotros',
    description:
      'Nos eligen por nuestra transparencia, comunicación constante y resultados comprobados en compra, venta y alquiler de inmuebles premium.',
    primaryAction: {
      label: 'Leer testimonios',
      href: '#testimonios'
    },
    secondaryAction: {
      label: 'Agendar visita',
      href: '#contacto'
    },
    imageUrl:
      'https://images.unsplash.com/photo-1512914890250-353c97c9e7c5?auto=format&fit=crop&w=1880&q=80'
  }
];

export const propiedades: Property[] = [
  {
    id: 1,
    titulo: 'Residencia moderna con jardín y pileta',
    descripcion:
      'Casa desarrollada en dos plantas con living integrado, cocina gourmet y parque arbolado con parrilla.',
    ubicacion: 'Nordelta, Tigre',
    zona: 'Zona Norte',
    tipo: 'Casa',
    ambientes: 5,
    superficie: 320,
    precio: 'USD 620.000',
    precioValor: 620000,
    destacado: true,
    imagen:
      'https://images.unsplash.com/photo-1600585154340-0ef3c08dcdb6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    titulo: 'Departamento premium con amenities',
    descripcion:
      '3 ambientes con vista abierta al río, balcón aterrazado, cochera y amenities de categoría.',
    ubicacion: 'Puerto Madero, CABA',
    zona: 'CABA',
    tipo: 'Departamento',
    ambientes: 3,
    superficie: 115,
    precio: 'USD 420.000',
    precioValor: 420000,
    destacado: true,
    imagen:
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    titulo: 'Loft creativo en edificio histórico',
    descripcion:
      'Espacio flexible con doble altura, ideal para uso residencial o profesional con mucho carácter.',
    ubicacion: 'San Telmo, CABA',
    zona: 'CABA',
    tipo: 'Departamento',
    ambientes: 2,
    superficie: 92,
    precio: 'USD 240.000',
    precioValor: 240000,
    destacado: true,
    imagen:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    titulo: 'Oficina corporativa luminosa',
    descripcion:
      'Piso completo con divisiones vidriadas, sala de directorio y 4 cocheras fijas.',
    ubicacion: 'Catalinas Norte, CABA',
    zona: 'CABA',
    tipo: 'Oficina',
    ambientes: 6,
    superficie: 280,
    precio: 'USD 1.200.000',
    precioValor: 1200000,
    imagen:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 5,
    titulo: 'Lote en barrio cerrado con lago',
    descripcion:
      'Lote central listo para construir con orientación norte y vistas abiertas al lago.',
    ubicacion: 'Pilar del Este, Pilar',
    zona: 'Zona Norte',
    tipo: 'Lote',
    ambientes: 0,
    superficie: 860,
    precio: 'USD 110.000',
    precioValor: 110000,
    imagen:
      'https://images.unsplash.com/photo-1543248939-ff40856f65d4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 6,
    titulo: 'PH reciclado con patio propio',
    descripcion:
      'Unidad al contrafrente con entrada independiente, patio con verde y cocina integrada.',
    ubicacion: 'Villa Crespo, CABA',
    zona: 'CABA',
    tipo: 'Departamento',
    ambientes: 4,
    superficie: 135,
    precio: 'USD 198.000',
    precioValor: 198000,
    imagen:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80'
  }
];

export const aboutContent = {
  badge: 'Nosotros',
  titulo: 'Un equipo especializado en operaciones inmobiliarias premium',
  descripcion:
    'Somos una inmobiliaria boutique con más de 15 años de experiencia en los mercados más exigentes de Buenos Aires. Trabajamos con un enfoque consultivo, combinando estrategias digitales, análisis de mercado y una red de aliados estratégicos para maximizar el valor de cada operación.',
  detalleTitulo: '¿Por qué elegirnos?',
  diferenciales: [
    'Reportes de mercado personalizados y valuaciones en 48 horas',
    'Equipo legal y contable interno para acelerar procesos',
    'Marketing inmobiliario de alta calidad con recorridos virtuales y campañas segmentadas'
  ]
};

export const servicios: Service[] = [
  {
    id: 1,
    titulo: 'Compra de inmuebles',
    descripcion:
      'Te guiamos en todo el proceso de búsqueda, negociación y cierre para que consigas la propiedad ideal al mejor valor.',
    icon: 'home-modern'
  },
  {
    id: 2,
    titulo: 'Venta estratégica',
    descripcion:
      'Diseñamos un plan de comercialización integral con tasación profesional, fotografía premium y gestión de leads.',
    icon: 'chart-bars'
  },
  {
    id: 3,
    titulo: 'Alquileres temporarios y tradicionales',
    descripcion:
      'Administramos tu propiedad con contratos claros, selección de inquilinos y seguimiento mensual.',
    icon: 'key'
  },
  {
    id: 4,
    titulo: 'Tasaciones profesionales',
    descripcion:
      'Análisis comparativo de mercado (ACM) y tasaciones certificadas para decisiones de inversión y financiación.',
    icon: 'scale'
  }
];

export const testimonios: Testimonial[] = [
  {
    id: 1,
    nombre: 'Carolina Méndez',
    cargo: 'Compradora en Nordelta',
    mensaje:
      '“Nos acompañaron en cada etapa y logramos comprar nuestra casa soñada en tiempo récord. Su asesoramiento fue clave para negociar con seguridad.”',
    imagen:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    nombre: 'Gustavo Rivas',
    cargo: 'Propietario vendedor',
    mensaje:
      '“El equipo preparó una estrategia de marketing impecable. Vendimos arriba del valor de lista y en menos de 30 días.”',
    imagen:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    nombre: 'Lucía Pereyra',
    cargo: 'Inversora',
    mensaje:
      '“Encontré excelentes oportunidades para mi portfolio y recibo reportes mensuales claros. ¡Los recomiendo totalmente!”',
    imagen:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80'
  }
];

export const contactInfo: ContactInfo = {
  telefono: '+54 11 5555-8899',
  email: 'contacto@inmoprime.com',
  direccion: 'Av. del Libertador 1234, Vicente López, Buenos Aires',
  horarios: 'Lunes a viernes de 9 a 18 hs - Sábados de 10 a 13 hs',
  mapaEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.807396650196!2d-58.4583453!3d-34.6075685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzI3LjIiUyA1OMKwMjcnMzAuMCJX!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar',
  social: [
    { label: 'Instagram', href: 'https://instagram.com/inmoprime' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/inmoprime' },
    { label: 'Facebook', href: 'https://facebook.com/inmoprime' }
  ]
};

export const contactoContent: ContactSectionContent = {
  badge: 'Contacto',
  titulo: 'Coordiná una reunión con nuestros especialistas',
  descripcion:
    'Completá el formulario y en menos de 24 horas un asesor se contactará para brindarte un análisis personalizado de tu operación inmobiliaria.',
  campos: {
    nombre: {
      label: 'Nombre y apellido',
      placeholder: 'Ingresá tu nombre completo'
    },
    email: {
      label: 'Correo electrónico',
      placeholder: 'ejemplo@mail.com'
    },
    mensaje: {
      label: 'Mensaje',
      placeholder: 'Contanos qué tipo de propiedad buscás o qué inmueble querés comercializar'
    }
  },
  boton: 'Enviar consulta',
  aviso: 'Al enviar aceptás ser contactado por un asesor de InmoPrime.',
  mensajeExito: '¡Gracias! Nos contactaremos a la brevedad.',
  infoTitulo: 'Información de contacto',
  telefonoLabel: 'Teléfono',
  emailLabel: 'Email',
  direccionLabel: 'Dirección',
  horariosLabel: 'Horarios',
  seguinosLabel: 'Seguinos',
  mapaTitulo: 'Ubicación InmoPrime'
};

export const footerLinks: FooterLinkGroup[] = [
  {
    titulo: 'Inmobiliaria',
    links: [
      { label: 'Sobre nosotros', href: '#nosotros' },
      { label: 'Nuestro equipo', href: '#nosotros' },
      { label: 'Propiedades destacadas', href: '#propiedades' }
    ]
  },
  {
    titulo: 'Servicios',
    links: [
      { label: 'Compra', href: '#servicios' },
      { label: 'Venta', href: '#servicios' },
      { label: 'Tasaciones', href: '#servicios' }
    ]
  },
  {
    titulo: 'Recursos',
    links: [
      { label: 'Guía para vender', href: '#contacto' },
      { label: 'Preguntas frecuentes', href: '#contacto' },
      { label: 'Blog', href: '#' }
    ]
  }
];

export const filtrosPropiedades = {
  tipos: ['Todos', 'Casa', 'Departamento', 'Oficina', 'Lote'],
  zonas: ['Todas', 'CABA', 'Zona Norte', 'Zona Oeste', 'Zona Sur'],
  rangosPrecio: [
    { label: 'Todos', min: 0, max: Number.MAX_SAFE_INTEGER },
    { label: 'Hasta USD 200.000', min: 0, max: 200000 },
    { label: 'USD 200.000 a 500.000', min: 200000, max: 500000 },
    { label: 'Más de USD 500.000', min: 500000, max: Number.MAX_SAFE_INTEGER }
  ]
};

export const seoContent = {
  title: 'InmoPrime | Inmobiliaria boutique en Buenos Aires',
  description:
    'InmoPrime es una inmobiliaria boutique que ofrece compra, venta, alquiler y tasaciones de propiedades premium en Buenos Aires.'
};

export const propiedadesSectionContent = {
  badge: 'Propiedades destacadas',
  titulo: 'Elegidas por su ubicación, calidad y rentabilidad',
  descripcion:
    'Cada propiedad se selecciona después de un análisis exhaustivo de mercado, garantizando oportunidades exclusivas y seguras.',
  boton: 'Ver todas las propiedades',
  card: {
    verMas: 'Ver más detalles',
    ambientesLabel: 'ambientes',
    superficieSufijo: 'm²'
  }
};

export const serviciosSectionContent = {
  badge: 'Servicios',
  titulo: 'Soluciones 360° para cada operación inmobiliaria',
  descripcion:
    'Combinamos metodología ágil, herramientas digitales y un equipo multidisciplinario para brindarte una experiencia segura y eficiente.'
};

export const testimoniosSectionContent = {
  badge: 'Clientes satisfechos',
  titulo: 'Historias reales de quienes confiaron en nosotros',
  descripcion:
    'Construimos relaciones a largo plazo gracias a nuestra transparencia, seguimiento constante y visión estratégica.'
};

export const listadoPropiedadesContent = {
  badge: 'Listado de propiedades',
  titulo: 'Explorá todas las opciones disponibles',
  descripcion:
    'Filtrá por tipo de propiedad, zona y rango de inversión para encontrar rápidamente la alternativa ideal.',
  ctaPregunta: '¿Necesitás asesoramiento?',
  enlaceTexto: 'Contactanos acá',
  busquedaPlaceholder: 'Ej: Nordelta, loft, oficina',
  filtros: {
    tipo: 'Tipo de propiedad',
    zona: 'Zona',
    precio: 'Rango de precio',
    busqueda: 'Buscar por título o ubicación'
  },
  coordinarVisitaLabel: 'Coordinar visita',
  atributos: {
    ambientesLabel: 'ambientes',
    superficieSufijo: 'm²'
  },
  emptyState: 'No encontramos propiedades con esos filtros. Probá ajustando la búsqueda o'
};

export const propiedadesPageContent = {
  titulo: 'Propiedades disponibles',
  descripcion: 'Utilizá los filtros para encontrar la opción ideal.',
  botonVolver: 'Volver al inicio'
};

export const footerContent = {
  marca: 'InmoPrime',
  copy: 'Todos los derechos reservados.'
};
