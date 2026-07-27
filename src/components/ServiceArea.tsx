/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, CheckCircle2, MapPinned, XCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data';
import ScrollFadeIn from './ScrollFadeIn';

const RS_MAP_MASK_URL =
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Regi%C3%B5es_Geogr%C3%A1ficas_do_Estado_do_Rio_Grande_do_Sul.svg';

const unsupportedCities = [
  'Santa Clara do Sul',
  'Lajeado',
  'Santa Cruz do Sul',
  'Cruzeiro do Sul',
  'Encantado',
  'Guaporé',
  'Soledade',
  'Montenegro',
  'Farroupilha',
  'Carlos Barbosa',
  'Veranópolis',
  'Vacaria',
  'Tapejara',
  'Marau',
  'Monte Belo do Sul',
  'Passo Fundo',
  'Carazinho',
  'Sarandi',
  'Condor',
  'Panambi',
  'Catuípe',
  'Ijuí',
  'Pejuçara',
  'Cruz Alta',
  'Bozano',
  'São Borja',
  'Três de Maio',
  'Horizontina',
  'Boa Vista do Buricá',
  'Santa Rosa',
  'Santo Ângelo',
  'Independência',
  'Estrela',
  'Mato Leitão',
  'Teutônia',
  'Venâncio Aires',
  'Arroio do Meio',
  'Colinas',
  'Frederico Westphalen',
];

const cityMarkers = [
  { city: 'São Borja', left: 13, top: 40 },
  { city: 'Frederico Westphalen', left: 36, top: 17 },
  { city: 'Santa Rosa', left: 45, top: 20 },
  { city: 'Horizontina', left: 43, top: 16 },
  { city: 'Três de Maio', left: 46, top: 18 },
  { city: 'Boa Vista do Buricá', left: 48, top: 20 },
  { city: 'Independência', left: 47, top: 23 },
  { city: 'Santo Ângelo', left: 39, top: 30 },
  { city: 'Ijuí', left: 47, top: 31 },
  { city: 'Catuípe', left: 43, top: 28 },
  { city: 'Bozano', left: 49, top: 32 },
  { city: 'Pejuçara', left: 51, top: 30 },
  { city: 'Panambi', left: 52, top: 26 },
  { city: 'Condor', left: 54, top: 27 },
  { city: 'Cruz Alta', left: 51, top: 37 },
  { city: 'Carazinho', left: 61, top: 30 },
  { city: 'Sarandi', left: 61, top: 24 },
  { city: 'Passo Fundo', left: 65, top: 34 },
  { city: 'Marau', left: 67, top: 38 },
  { city: 'Tapejara', left: 68, top: 28 },
  { city: 'Soledade', left: 61, top: 44 },
  { city: 'Guaporé', left: 70, top: 43 },
  { city: 'Vacaria', left: 80, top: 27 },
  { city: 'Veranópolis', left: 73, top: 46 },
  { city: 'Monte Belo do Sul', left: 70, top: 50 },
  { city: 'Carlos Barbosa', left: 72, top: 53 },
  { city: 'Farroupilha', left: 75, top: 51 },
  { city: 'Encantado', left: 65, top: 50 },
  { city: 'Arroio do Meio', left: 63, top: 53 },
  { city: 'Colinas', left: 65, top: 55 },
  { city: 'Lajeado', left: 64, top: 57 },
  { city: 'Cruzeiro do Sul', left: 62, top: 58 },
  { city: 'Santa Clara do Sul', left: 61, top: 56 },
  { city: 'Estrela', left: 66, top: 58 },
  { city: 'Teutônia', left: 68, top: 55 },
  { city: 'Mato Leitão', left: 60, top: 60 },
  { city: 'Venâncio Aires', left: 58, top: 62 },
  { city: 'Santa Cruz do Sul', left: 54, top: 64 },
  { city: 'Montenegro', left: 71, top: 62 },
];

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
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <ScrollFadeIn delay={100} className="lg:col-span-5 lg:pt-8">
            <span className="mb-3 block font-serif text-lg italic text-[#7F8B6B]">
              Atendimento Comercial RS
            </span>

            <h2 className="max-w-xl font-sans text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[42px]">
              Atendemos todo o{' '}
              <span className="text-[#7F8B6B]">Rio Grande do Sul</span>
            </h2>

            <p className="mt-7 max-w-xl font-sans text-sm leading-7 text-[#E5E0DC]/75">
              A Brambatti realiza atendimento comercial e envios para todo o estado, com agilidade, suporte próximo e acesso às melhores marcas do segmento profissional.
            </p>

            <div className="mt-6 border-l-2 border-[#7F8B6B] pl-4">
              <p className="font-sans text-sm leading-6 text-[#E5E0DC]/90">
                Existem apenas algumas exceções pontuais. Os municípios sem atendimento estão indicados em vermelho no mapa e listados ao lado.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-y border-white/10 py-5 sm:flex-row sm:items-center sm:gap-7">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#7F8B6B]" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#E5E0DC]/80">
                  Todo o estado atendido
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <XCircle className="h-4 w-4 text-[#E13232]" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#E5E0DC]/80">
                  Poucas exceções
                </span>
              </div>
            </div>

            <button
              onClick={handleContact}
              className="group mt-8 inline-flex h-12 w-full items-center justify-center gap-3 bg-[#48523B] px-7 font-sans text-[11px] font-extrabold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#59654A] sm:w-auto"
            >
              Solicitar atendimento
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </ScrollFadeIn>

          <ScrollFadeIn delay={220} className="lg:col-span-7">
            <div className="mx-auto w-full max-w-[720px] border border-white/10 bg-[#F3F1EB] p-4 sm:p-6 md:p-8">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-black/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <MapPinned className="h-4 w-4 text-[#48523B]" />
                  <span className="font-sans text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#48523B]">
                    Cobertura estadual
                  </span>
                </div>

                <span className="hidden font-serif text-xs italic text-[#615F55] sm:block">
                  Exceções marcadas em vermelho
                </span>
              </div>

              <div className="relative mx-auto aspect-[1.08/1] w-full max-w-[560px]">
                <div
                  aria-label="Silhueta do mapa do Rio Grande do Sul"
                  className="absolute inset-[3%] bg-[#AAB594]"
                  style={{
                    WebkitMaskImage: `url(${RS_MAP_MASK_URL})`,
                    maskImage: `url(${RS_MAP_MASK_URL})`,
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                  }}
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-[3%] opacity-45"
                  style={{
                    WebkitMaskImage: `url(${RS_MAP_MASK_URL})`,
                    maskImage: `url(${RS_MAP_MASK_URL})`,
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    backgroundImage:
                      'linear-gradient(rgba(72,82,59,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(72,82,59,.18) 1px, transparent 1px)',
                    backgroundSize: '34px 34px',
                  }}
                />

                <div className="absolute inset-0" aria-label="Municípios não atendidos">
                  {cityMarkers.map((marker) => (
                    <span
                      key={marker.city}
                      title={marker.city}
                      aria-label={`${marker.city}: município não atendido`}
                      className="group absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#E13232] shadow-[0_2px_7px_rgba(120,18,18,.35)] sm:h-3 sm:w-3"
                      style={{ left: `${marker.left}%`, top: `${marker.top}%` }}
                    >
                      <span className="pointer-events-none absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 whitespace-nowrap bg-[#111] px-2 py-1 font-sans text-[8px] font-bold uppercase tracking-wider text-white shadow-lg group-hover:block md:block md:opacity-0 md:transition-opacity md:group-hover:opacity-100">
                        {marker.city}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 border-t border-black/10 pt-4">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#E13232]" />
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#615F55]">
                  Pontos vermelhos: municípios fora da área de atendimento.
                </p>
              </div>

              <div className="mt-6 border-t border-black/10 pt-6">
                <p className="mb-4 font-sans text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#48523B]">
                  Municípios não atendidos
                </p>

                <div className="grid grid-cols-2 gap-x-5 gap-y-2 sm:grid-cols-3">
                  {unsupportedCities.map((city) => (
                    <div key={city} className="flex items-start gap-2">
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E13232]" />
                      <span className="font-sans text-[10px] leading-4 text-[#403F3A] sm:text-[11px]">
                        {city}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
