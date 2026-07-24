/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/hero_image.png';
import heroImageMobile from '../assets/images/hero_image_mobile.png';

export default function Hero() {
  const handlePrimaryClick = () => {
    window.open('https://wa.me/5554992819218', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] bg-[#000000] pt-28 pb-20 lg:pt-32 lg:pb-28 overflow-hidden flex items-end"
    >
      {/* Imagem de Fundo em Sangria Total (Full-bleed Background Image) */}
      <div className="absolute inset-0 z-0">
        {/* Imagem Mobile */}
        <img
          id="hero-mobile-img"
          src={heroImageMobile}
          alt="Cabelo sedoso e saudável - Brambatti Distribuidora"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center block lg:hidden"
        />
        {/* Imagem Desktop */}
        <img
          id="hero-main-img"
          src={heroImage}
          alt="Cabelo sedoso e saudável - Brambatti Distribuidora"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-left md:object-center hidden lg:block"
        />
        {/* Degradê escuro suave para garantir leitura (embaixo no mobile, na esquerda no desktop) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/60 lg:to-transparent pointer-events-none" />
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
            className="font-sans text-[9px] lg:text-[10px] tracking-[0.18em] uppercase text-[#E5E0DC]/85 font-semibold mb-6 block"
          >
            DISTRIBUIDORA OFICIAL ECOSMETICS NO RS
          </motion.span>

          {/* Título principal */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="font-serif font-light text-white text-[36px] lg:text-[56px] leading-[1.0] mb-[28px] tracking-tight max-w-[320px] lg:max-w-none"
          >
            Feito para <span className="italic font-normal text-[#E5E0DC]">profissionais</span> <br className="hidden lg:block" /> que querem crescer.
          </motion.h1>

          {/* Botões de Ação */}
          <motion.div
            id="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col items-center lg:items-start gap-3 w-full max-w-[280px] lg:max-w-none"
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
              className="text-[#E5E0DC]/80 hover:text-white font-sans text-[11px] lg:text-[12px] uppercase tracking-[0.15em] font-bold py-2.5 px-4 transition-all duration-300 flex items-center justify-center w-full lg:w-auto hover:underline decoration-[#E5E0DC]/30 underline-offset-4"
            >
              Conhecer produtos
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
