'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ContactInfo, ContactSectionContent } from '@/data/inmobiliariaData';

interface ContactoSectionProps {
  info: ContactInfo;
  content: ContactSectionContent;
}

export function ContactoSection({ info, content }: ContactoSectionProps) {
  const [formState, setFormState] = useState({ nombre: '', email: '', mensaje: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('success');
    setFormState({ nombre: '', email: '', mensaje: '' });
  }

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="card p-10">
            <p className="badge mb-3">{content.badge}</p>
            <h2 className="section-title">{content.titulo}</h2>
            <p className="section-subtitle">{content.descripcion}</p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-slate-700">
                  {content.campos.nombre.label}
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  value={formState.nombre}
                  onChange={handleChange}
                  placeholder={content.campos.nombre.placeholder}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                  {content.campos.email.label}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder={content.campos.email.placeholder}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-slate-700">
                  {content.campos.mensaje.label}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formState.mensaje}
                  onChange={handleChange}
                  placeholder={content.campos.mensaje.placeholder}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <p className="text-xs text-slate-500">{content.aviso}</p>
              <button type="submit" className="button-primary w-full">
                {content.boton}
              </button>
              {status === 'success' && (
                <p className="rounded-2xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
                  {content.mensajeExito}
                </p>
              )}
            </form>
          </div>

          <div className="card p-10">
            <h3 className="text-lg font-semibold text-slate-900">{content.infoTitulo}</h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">{content.telefonoLabel}:</span>{' '}
                <Link href={`tel:${info.telefono}`} className="text-primary hover:underline">
                  {info.telefono}
                </Link>
              </li>
              <li>
                <span className="font-semibold text-slate-900">{content.emailLabel}:</span>{' '}
                <Link href={`mailto:${info.email}`} className="text-primary hover:underline">
                  {info.email}
                </Link>
              </li>
              <li>
                <span className="font-semibold text-slate-900">{content.direccionLabel}:</span> {info.direccion}
              </li>
              <li>
                <span className="font-semibold text-slate-900">{content.horariosLabel}:</span> {info.horarios}
              </li>
            </ul>

            <div className="mt-8 h-48 overflow-hidden rounded-2xl">
              <iframe
                src={info.mapaEmbedUrl}
                title={content.mapaTitulo}
                loading="lazy"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-slate-900">{content.seguinosLabel}</h4>
              <div className="mt-4 flex flex-wrap gap-3">
                {info.social.map((item) => (
                  <Link key={item.label} href={item.href} className="button-secondary">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
