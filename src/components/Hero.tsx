/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroDesktopImg from '../assets/images/hero_desktop_novo.webp';
import heroMobileImg from '../assets/images/hero_mobile_novo.webp';

export default function Hero() {
  const handlePrimaryClick = () => {
    window.open('https://wa.me/5554992819218', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] bg-[#000000] pt-28 pb-7 lg:pt-32 lg:pb-28 overflow-hidden flex items-end"
    >
      {/* Imagem de Fundo em Sangria Total (Full-bleed Background Image) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture className="block h-full w-full">
          <source media="(min-width: 1024px)" srcSet={heroDesktopImg} />
          <img
            id="hero-main-img"
            src={heroMobileImg}
            alt="Profissionais Brambatti em um ambiente de beleza"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </picture>

        {/* Sombra base contínua para evitar marcas visíveis na imagem */}
        <div className="pointer-events-none absolute inset-0 bg-black/20" />

        {/* Reforço suave de leitura atrás do conteúdo */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black/70 via-black/32 to-transparent lg:hidden" />
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[62%] bg-gradient-to-r from-black/58 via-black/24 to-transparent lg:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex items-center justify-center lg:justify-start">
        
        {/* Bloco de conteúdo alinhado à direita no desktop e centralizado no mobile */}
        <div className="w-full max-w-[340px] lg:max-w-[540px] flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Identificação pequena */}
          <motion.span
            id="hero-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-sans text-[9px] lg:text-[10px] tracking-[0.18em] uppercase text-[#E5E0DC]/90 font-semibold mb-4 lg:mb-6 block drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]"
          >
            DISTRIBUIDORA OFICIAL ECOSMETICS NO RS
          </motion.span>

          {/* Título principal */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="font-serif font-light text-white text-[36px] lg:text-[56px] leading-[1.0] mb-5 lg:mb-[28px] tracking-tight max-w-[320px] lg:max-w-none drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]"
          >
            Feito para <span className="italic font-normal text-[#E5E0DC]">profissionais</span> <br className="hidden lg:block" /> que querem crescer.
          </motion.h1>

          {/* Botões de Ação */}
          <motion.div
            id="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col items-center lg:items-start gap-2 lg:gap-3 w-full max-w-[280px] lg:max-w-none"
          >
            <button
              id="hero-primary-btn"
              onClick={handlePrimaryClick}
              className="bg-[#48523B] hover:bg-[#3d4532] text-white font-sans text-[11px] lg:text-[12px] uppercase tracking-[0.15em] font-bold h-[44px] px-6 rounded-none transition-all duration-300 shadow-md flex items-center justify-center gap-2 w-full lg:w-auto hover:scale-[1.01] active:scale-[0.99]"
            >
              Falar com um consultor
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              id="hero-secondary-btn"
              href="#produtos"
              className="text-[#E5E0DC]/90 hover:text-white font-sans text-[11px] lg:text-[12px] uppercase tracking-[0.15em] font-bold py-2.5 px-4 transition-all duration-300 flex items-center justify-center w-full lg:w-auto hover:underline decoration-[#E5E0DC]/30 underline-offset-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]"
            >
              Conhecer produtos
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
