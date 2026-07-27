/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, CheckCircle2, MapPinned, XCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data';
import ScrollFadeIn from './ScrollFadeIn';

const RS_MAP_URL =
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Regi%C3%B5es_Geogr%C3%A1ficas_do_Estado_do_Rio_Grande_do_Sul.svg';

const uncoveredMunicipalityMarkers = [
  { left: 13, top: 34, size: 'lg' },
  { left: 31, top: 17, size: 'md' },
  { left: 36, top: 22, size: 'sm' },
  { left: 40, top: 27, size: 'lg' },
  { left: 44, top: 34, size: 'md' },
  { left: 48, top: 40, size: 'sm' },
  { left: 50, top: 15, size: 'sm' },
  { left: 55, top: 27, size: 'md' },
  { left: 57, top: 38, size: 'lg' },
  { left: 61, top: 19, size: 'sm' },
  { left: 62, top: 31, size: 'lg' },
  { left: 64, top: 45, size: 'md' },
  { left: 67, top: 24, size: 'sm' },
  { left: 69, top: 37, size: 'md' },
  { left: 70, top: 49, size: 'lg' },
  { left: 72, top: 57, size: 'sm' },
  { left: 74, top: 42, size: 'sm' },
  { left: 76, top: 52, size: 'md' },
  { left: 79, top: 36, size: 'sm' },
  { left: 82, top: 27, size: 'lg' },
];

const markerSizeClasses = {
  sm: 'h-2.5 w-2.5 md:h-3 md:w-3',
  md: 'h-3.5 w-3.5 md:h-4 md:w-4',
  lg: 'h-4 w-4 md:h-[18px] md:w-[18px]',
};

export default function ServiceArea() {
  const handleContact = () => {
    window.open(
      getWhatsAppLink(
        'Olá! Gostaria de solicitar atendimento comercial da Brambatti no Rio Grande do Sul.'
      ),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="atendimento"
      className="relative overflow-hidden bg-[#0B0B0A] py-20 text-[#E5E0DC] md:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#48523B]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#48523B]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <ScrollFadeIn delay={100} className="lg:col-span-5">
            <span className="mb-3 block font-serif text-lg italic text-[#7F8B6B]">
              Atendimento Comercial RS
            </span>

            <h2 className="max-w-xl font-sans text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[42px]">
              Atendimento em quase todo o{' '}
              <span className="text-[#7F8B6B]">Rio Grande do Sul</span>
            </h2>

            <p className="mt-7 max-w-xl font-sans text-sm leading-7 text-[#E5E0DC]/75">
              A Brambatti realiza atendimento e envios para praticamente todo o estado do Rio Grande do Sul, garantindo agilidade, suporte comercial e acesso às melhores marcas do segmento profissional.
            </p>

            <div className="mt-6 border-l-2 border-[#7F8B6B] pl-4">
              <p className="font-sans text-sm leading-6 text-[#E5E0DC]/90">
                As únicas cidades não atendidas estão destacadas no mapa.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-y border-white/10 py-5 sm:flex-row sm:items-center sm:gap-7">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#7F8B6B]" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#E5E0DC]/80">
                  Regiões atendidas
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <XCircle className="h-4 w-4 text-[#E13232]" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#E5E0DC]/80">
                  Cidades não atendidas
                </span>
              </div>
            </div>

            <button
              onClick={handleContact}
              className="group mt-8 inline-flex h-12 w-full items-center justify-center gap-3 bg-[#48523B] px-7 font-sans text-[11px] font-extrabold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#59654A] sm:w-auto"
            >
              Fale com a Brambatti
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </ScrollFadeIn>

          <ScrollFadeIn delay={220} className="lg:col-span-7">
            <div className="relative mx-auto w-full max-w-[680px] overflow-hidden border border-white/10 bg-[#F1F0EA] p-4 sm:p-6 md:p-8">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-black/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <MapPinned className="h-4 w-4 text-[#48523B]" />
                  <span className="font-sans text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#48523B]">
                    Cobertura no Rio Grande do Sul
                  </span>
                </div>

                <span className="hidden font-serif text-xs italic text-[#615F55] sm:block">
                  Atendimento estadual
                </span>
              </div>

              <div className="relative mx-auto aspect-[1.15/1] w-full overflow-hidden">
                <img
                  src={RS_MAP_URL}
                  alt="Mapa com o contorno real do Rio Grande do Sul e indicação das cidades não atendidas pela Brambatti"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-contain opacity-90 [filter:grayscale(1)_sepia(.18)_saturate(.55)_brightness(1.08)_contrast(.9)]"
                />

                <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                  {uncoveredMunicipalityMarkers.map((marker, index) => (
                    <span
                      key={`${marker.left}-${marker.top}-${index}`}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/90 bg-[#E13232] shadow-[0_2px_8px_rgba(132,20,20,0.32)] ${markerSizeClasses[marker.size as keyof typeof markerSizeClasses]}`}
                      style={{ left: `${marker.left}%`, top: `${marker.top}%` }}
                    >
                      <span className="absolute inset-[-4px] rounded-full border border-[#E13232]/30" />
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 border-t border-black/10 pt-4">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#E13232]" />
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#615F55]">
                  Municípios em vermelho: cidades não atendidas.
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
