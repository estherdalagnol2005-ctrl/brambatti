/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowRight, Building, CheckCircle } from 'lucide-react';
import { REGIONS, getWhatsAppLink } from '../data';
import ScrollFadeIn from './ScrollFadeIn';

export default function ServiceArea() {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('caxias');

  const selectedRegion = REGIONS.find((r) => r.id === selectedRegionId) || REGIONS[0];

  const handleRegionContact = (regionName: string) => {
    window.open(
      getWhatsAppLink(`Olá! Gostaria de falar com o representante comercial da Brambatti responsável pelo atendimento em ${regionName}.`),
      '_blank',
      'noopener,noreferrer'
    );
  };

  // Coordenadas relativas estilizadas no mapa SVG abstrato do Rio Grande do Sul
  const regionPins: Record<string, { x: number; y: number; label: string }> = {
    caxias: { x: 62, y: 44, label: 'Caxias do Sul (Sede)' },
    serra: { x: 55, y: 40, label: 'Serra Gaúcha' },
    porto_alegre: { x: 64, y: 55, label: 'Porto Alegre & Metro' },
    outras: { x: 38, y: 35, label: 'Regiões do Interior' },
  };

  return (
    <section id="atendimento" className="bg-[#000000] text-[#E5E0DC] py-20 md:py-28 relative overflow-hidden">
      {/* Decorative light spots */}
      <div className="absolute -bottom-20 -right-20 w-[60vw] h-[60vw] rounded-full bg-[#48523B]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollFadeIn delay={100} className="w-full">
          <div className="max-w-2xl mb-16">
            <span className="font-serif italic text-lg text-[#48523B] block mb-2">
              Atendimento Comercial RS
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-[#E5E0DC] uppercase leading-tight">
              Presença Regional <br />
              <span className="text-[#48523B]">no Rio Grande do Sul</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#E5E0DC]/70 mt-4 leading-relaxed">
              Oferecemos suporte presencial de ponta a ponta. Nossos consultores visitam o seu salão periodicamente para apresentar lançamentos, gerenciar estoques e prestar suporte técnico qualificado.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Selector */}
          <div className="lg:col-span-6">
            <ScrollFadeIn delay={150} className="flex flex-col gap-4">
              <p className="font-sans text-xs tracking-widest uppercase font-bold text-[#48523B] mb-2">
                Selecione a sua região para detalhes:
              </p>

              <div className="flex flex-col gap-3">
                {REGIONS.map((region) => {
                  const isActive = region.id === selectedRegionId;
                  return (
                    <button
                      key={region.id}
                      onClick={() => setSelectedRegionId(region.id)}
                      className={`w-full text-left p-5 transition-all duration-300 flex items-start justify-between rounded-lg border ${
                        isActive
                          ? 'bg-[#48523B]/25 border-[#48523B] text-[#E5E0DC]'
                          : 'bg-white/5 border-white/10 hover:border-[#48523B]/50 hover:bg-white/10 text-[#E5E0DC]/80'
                      }`}
                    >
                      <div className="flex gap-4">
                        <div className={`mt-1 p-1.5 transition-colors ${isActive ? 'text-white bg-[#48523B]' : 'text-[#48523B]'}`}>
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-sans font-extrabold text-base uppercase tracking-wider text-white">
                            {region.name}
                          </h3>
                          <p className={`font-sans text-xs mt-1 leading-relaxed ${isActive ? 'text-[#E5E0DC]/90' : 'text-[#E5E0DC]/65'}`}>
                            {region.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Coverage Panel Container (Details) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedRegionId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 p-6 border border-[#48523B]/30 bg-[#48523B]/10 rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Building className="w-4 h-4 text-[#48523B]" />
                    <span className="font-sans text-xs uppercase tracking-widest font-bold text-[#48523B]">
                      Cidades em destaque nesta região:
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    {selectedRegion.mainCities.map((city) => (
                      <div key={city} className="flex items-center gap-2 text-xs text-[#E5E0DC]/90">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#48523B]" />
                        <span>{city}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleRegionContact(selectedRegion.name)}
                    className="w-full text-center bg-[#48523B] hover:bg-[#30372A] text-[#E5E0DC] font-sans text-xs uppercase tracking-widest font-bold py-3 px-6 transition-all duration-300"
                  >
                    Contatar consultor de {selectedRegion.name}
                  </button>
                </motion.div>
              </AnimatePresence>

              <span className="font-serif italic text-xs text-[#48523B] mt-2 block">
                *Atendimento integral e personalizado em cada município citado.
              </span>
            </ScrollFadeIn>
          </div>

          {/* Right Column: Stylized Minimalist Map of RS */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <ScrollFadeIn delay={250} className="w-full flex justify-center">
              <div className="relative w-full aspect-square max-w-[420px] bg-white/5 border border-[#48523B]/25 p-8 flex flex-col justify-between rounded-lg">
                
                {/* Card Label */}
                <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#48523B] animate-pulse" />
                  <span className="font-sans text-[9px] tracking-widest uppercase font-bold text-[#48523B]">
                    Distribuição no Estado
                  </span>
                </div>

                {/* Styled Abstract SVG of RS */}
                <div className="w-full h-full flex items-center justify-center relative mt-4">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full max-h-[300px] text-[#48523B]/10 stroke-[#48523B]/30 stroke-1"
                    fill="currentColor"
                    style={{ transform: 'scale(1.15)' }}
                  >
                    {/* Abstract stylized contour of Rio Grande do Sul */}
                    <path
                      d="M 40,20 
                         C 50,15 65,18 70,22 
                         C 75,25 78,35 75,45 
                         C 72,55 77,65 72,75 
                         C 68,82 58,85 52,90 
                         C 48,93 42,90 38,82 
                         C 35,78 28,75 25,65 
                         C 22,55 18,48 22,40 
                         C 25,32 32,25 40,20 Z"
                      className="transition-colors duration-500 hover:text-[#48523B]/20"
                    />
                    
                    {/* Elegant decorative grid inside the map */}
                    <line x1="20" y1="50" x2="80" y2="50" stroke="#48523B" strokeWidth="0.05" strokeDasharray="1,1" />
                    <line x1="50" y1="20" x2="50" y2="80" stroke="#48523B" strokeWidth="0.05" strokeDasharray="1,1" />
                  </svg>

                  {/* Interactive Dynamic Pins on Map */}
                  {Object.entries(regionPins).map(([id, pos]) => {
                    const isActive = id === selectedRegionId;
                    return (
                      <button
                        key={id}
                        onClick={() => setSelectedRegionId(id)}
                        className="absolute p-2 -translate-x-1/2 -translate-y-1/2 group transition-all focus:outline-none animate-fade-in"
                        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                      >
                        <div className="relative">
                          {/* Outer pulsing ring */}
                          {isActive && (
                            <div className="absolute -inset-1.5 rounded-full bg-[#48523B]/40 animate-ping" />
                          )}
                          {/* Interactive Circle Pin */}
                          <div
                            className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
                              isActive
                                ? 'bg-white border-[#48523B] scale-125 shadow-md'
                                : 'bg-[#48523B] border-[#E5E0DC]/40 hover:bg-[#FAF8F6] hover:scale-110'
                            }`}
                          />
                          {/* Tooltip on Hover */}
                          <span className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#000000] border border-[#48523B]/30 px-2 py-1 text-[8px] tracking-wider uppercase font-extrabold text-[#E5E0DC] rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                            {pos.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Map Footer Info */}
                <div className="text-center mt-4">
                  <span className="font-sans text-[9px] text-[#48523B] uppercase tracking-widest font-extrabold">
                    Legenda: Clique nos pontos para selecionar
                  </span>
                </div>
              </div>
            </ScrollFadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
