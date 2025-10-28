'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { HeroSlide } from '@/data/inmobiliariaData';
import Link from 'next/link';
import clsx from 'clsx';

type HeroInmobiliariaProps = {
  slides: HeroSlide[];
  interval?: number;
};

export function HeroInmobiliaria({ slides, interval = 7000 }: HeroInmobiliariaProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, slides.length]);

  return (
    <section className="relative h-[80vh] min-h-[560px] overflow-hidden rounded-b-[56px] bg-slate-900 text-white">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={clsx(
            'absolute inset-0 transition-opacity duration-[1200ms] ease-out',
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          )}
        >
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-16 text-left sm:px-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={clsx(
              'space-y-6 transition-all duration-700 ease-out',
              index === activeSlide
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-6 opacity-0'
            )}
          >
            <span className="badge">{slide.eyebrow}</span>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              {slide.title}
            </h1>
            <p className="max-w-2xl text-lg text-white/80">{slide.description}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href={slide.primaryAction.href} className="button-primary">
                {slide.primaryAction.label}
              </Link>
              <Link href={slide.secondaryAction.href} className="button-secondary border-white/40 text-white hover:border-transparent">
                {slide.secondaryAction.label}
              </Link>
            </div>
          </div>
        ))}

        <div className="mt-16 flex items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              aria-label={`Mostrar slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={clsx(
                'h-2 flex-1 rounded-full transition-all',
                index === activeSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
