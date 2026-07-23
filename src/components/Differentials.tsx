/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserCheck, Truck, GraduationCap, Check, ArrowRight, Sparkles } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';

interface Pillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  highlights: string[];
}

export default function Differentials() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const pillars: Pillar[] = [
    {
      id: 'parceria',
      number: '01',
      title: 'Parceria e Atendimento Próximo',
      subtitle: 'Consultoria dedicada no seu salão',
      description: 'Mais do que vender, nós entendemos o seu negócio. Nossos consultores especializados realizam visitas presenciais frequentes para sugerir soluções personalizadas e ouvir as suas demandas de verdade.',
      icon: UserCheck,
      highlights: [
        'Visitas presenciais constantes de consultoria',
        'Análise personalizada do perfil do seu salão',
        'Atendimento consultivo direto e humanizado'
      ]
    },
    {
      id: 'logistica',
      number: '02',
      title: 'Logística Ágil e Sem Falhas',
      subtitle: 'Garantia de salão sempre abastecido',
      description: 'Processos de faturamento e entrega expressa extremamente rápidos na Serra Gaúcha. Mantemos estoques robustos para garantir que os seus produtos de alta rotatividade nunca faltem.',
      icon: Truck,
      highlights: [
        'Entregas rápidas e programadas na sua região',
        'Estoques sempre cheios dos itens essenciais',
        'Zero burocracia no pós-venda e reposição'
      ]
    },
    {
      id: 'treinamento',
      number: '03',
      title: 'Suporte Técnico e Capacitação',
      subtitle: 'Desenvolvimento prático continuado',
      description: 'Oferecemos total suporte na correta aplicação técnica dos produtos Ecosmetics diretamente no seu espaço, além de acesso exclusivo e prioritário à nossa prestigiada agenda de masterclasses.',
      icon: GraduationCap,
      highlights: [
        'Treinamento de aplicação técnica incluso',
        'Prioridade total na inscrição de cursos',
        'Conexão direta com educadores oficiais'
      ]
    }
  ];

  return (
    <section id="diferenciais" className="bg-[#262D20] text-[#E5E0DC] py-20 md:py-28 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#48523B]/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F241A]/30 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Layout split on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Sticky Title & Pillar Progress Indicator) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col justify-between">
            <ScrollFadeIn delay={100} className="w-full">
              <div>
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#B2B9A6] font-bold block mb-3">
                  POR QUE A BRAMBATTI?
                </span>
                <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight mb-6">
                  Uma relação de <br />
                  <span className="italic font-normal text-[#B2B9A6]">evolução mútua.</span>
                </h2>
                <p className="font-sans text-sm text-[#E5E0DC]/80 leading-relaxed mb-8 max-w-md">
                  Eliminamos os processos impessoais para focar no que realmente importa: presença ativa, entregas céleres e a capacitação real de cada profissional parceiro.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Interactive Progress Indicator Panel - Desktop Only */}
            <div className="hidden lg:flex flex-col gap-3 border-l border-white/10 pl-6 py-2 mt-4">
              {pillars.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveCard(idx)}
                  className="group flex items-center gap-4 text-left transition-all duration-300"
                >
                  <span className={`font-serif italic text-lg transition-colors duration-300 ${activeCard === idx ? 'text-[#FAF8F6] font-semibold' : 'text-white/30 group-hover:text-white/60'}`}>
                    {p.number}
                  </span>
                  <div className="flex flex-col">
                    <span className={`font-sans text-xs tracking-wider uppercase font-bold transition-colors duration-300 ${activeCard === idx ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>
                      {p.title.split(' e ')[0].split(' Ágil ')[0].split(' Técnico ')[0]}
                    </span>
                    <span className={`font-sans text-[10px] transition-colors duration-300 ${activeCard === idx ? 'text-[#B2B9A6]' : 'text-white/20'}`}>
                      {p.subtitle}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column (Dynamic Cards Block) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeCard === idx;

              return (
                <ScrollFadeIn
                  key={pillar.id}
                  delay={150 + idx * 80}
                  className="w-full"
                >
                  <motion.div
                    onClick={() => setActiveCard(idx)}
                    whileHover={{ y: -3, scale: 1.005 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className={`cursor-pointer text-left rounded-xl p-6 sm:p-8 border transition-all duration-500 relative overflow-hidden select-none ${
                      isActive 
                        ? 'bg-[#323C2A] border-[#48523B]/60 shadow-[0_15px_40px_rgba(30,36,25,0.4)]' 
                        : 'bg-[#21271B]/55 border-white/5 hover:border-white/10 hover:bg-[#21271B]/80'
                    }`}
                  >
                    {/* Active Highlight Line */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${
                      isActive ? 'bg-[#FAF8F6]' : 'bg-transparent'
                    }`} />

                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Index & Icon */}
                      <div className="flex flex-col items-center gap-2 shrink-0">
                        <span className={`font-serif italic text-base transition-colors duration-300 ${
                          isActive ? 'text-[#FAF8F6]' : 'text-white/25'
                        }`}>
                          {pillar.number}
                        </span>
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          isActive 
                            ? 'bg-[#48523B] text-white rotate-3 shadow-[0_4px_12px_rgba(72,82,59,0.3)]' 
                            : 'bg-white/5 text-white/60'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col mb-2">
                          <h3 className={`font-sans font-extrabold text-base sm:text-lg uppercase tracking-wide transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-white/80'
                          }`}>
                            {pillar.title}
                          </h3>
                          <span className="font-sans text-[11px] sm:text-xs text-[#B2B9A6] tracking-wide italic mt-0.5">
                            {pillar.subtitle}
                          </span>
                        </div>

                        <p className={`font-sans text-xs sm:text-sm leading-relaxed transition-colors duration-300 mb-4 ${
                          isActive ? 'text-[#E5E0DC]' : 'text-[#E5E0DC]/60'
                        }`}>
                          {pillar.description}
                        </p>

                        {/* Expandable Highlight Bullets */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: 'easeInOut' }}
                              className="overflow-hidden border-t border-white/10 pt-4 mt-2"
                            >
                              <ul className="flex flex-col gap-2.5">
                                {pillar.highlights.map((item, key) => (
                                  <motion.li
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: key * 0.08 }}
                                    key={key}
                                    className="flex items-start gap-2.5 text-xs text-[#FAF8F6]"
                                  >
                                    <div className="w-4 h-4 rounded-full bg-[#48523B]/50 flex items-center justify-center shrink-0 mt-0.5 border border-[#48523B]">
                                      <Check className="w-2.5 h-2.5 text-[#FAF8F6]" />
                                    </div>
                                    <span className="font-sans font-medium">{item}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Visual Trigger Indicator */}
                        {!isActive && (
                          <div className="flex items-center gap-1 text-[10px] sm:text-xs text-white/30 font-bold uppercase tracking-widest mt-2 group-hover:text-white/60 transition-colors">
                            <span>Clique para explorar</span>
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </ScrollFadeIn>
              );
            })}
          </div>

        </div>

        {/* Elegant footer quote block */}
        <div className="mt-20 border-t border-white/10 pt-10 text-center max-w-3xl mx-auto">
          <ScrollFadeIn delay={200}>
            <div className="flex flex-col items-center gap-4">
              <Sparkles className="w-5 h-5 text-[#B2B9A6]/40" />
              <p className="font-serif italic text-base sm:text-lg lg:text-xl text-[#E5E0DC]/75 leading-relaxed">
                “Nossa parceria vai muito além da entrega: estamos presentes no dia a dia do seu espaço para impulsionar a sua evolução técnica e comercial.”
              </p>
            </div>
          </ScrollFadeIn>
        </div>

      </div>
    </section>
  );
}
