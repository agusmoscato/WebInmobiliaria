import Link from 'next/link';
import { ContactInfo, FooterLinkGroup } from '@/data/inmobiliariaData';

interface FooterProps {
  info: ContactInfo;
  links: FooterLinkGroup[];
  marca: string;
  copy: string;
}

export function Footer({ info, links, marca, copy }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]
        ">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">{marca}</h3>
            <p className="text-sm text-slate-400">
              {info.direccion} · {info.horarios}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href={`tel:${info.telefono}`} className="text-white hover:underline">
                {info.telefono}
              </Link>
              <span className="text-slate-600">|</span>
              <Link href={`mailto:${info.email}`} className="text-white hover:underline">
                {info.email}
              </Link>
            </div>
            <div className="flex gap-3">
              {info.social.map((item) => (
                <Link key={item.label} href={item.href} className="button-secondary">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {links.map((group) => (
              <div key={group.titulo}>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">{group.titulo}</h4>
                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-xs text-slate-500">
          © {currentYear} {marca}. {copy}
        </div>
      </div>
    </footer>
  );
}
