import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InmoPrime | Tu próxima propiedad te espera',
  description:
    'InmoPrime ofrece asesoramiento integral en compra, venta y alquiler de inmuebles premium en Argentina.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'InmoPrime | Tu próxima propiedad te espera',
    description:
      'Encontrá propiedades seleccionadas, consultores expertos y soluciones inmobiliarias a medida.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={font.className}>{children}</body>
    </html>
  );
}
