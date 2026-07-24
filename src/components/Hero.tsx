/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImage from '../assets/images/hero_image.png';
import heroImageMobile from '../assets/images/hero_image_mobile.png';

export default function Hero() {
  const handlePrimaryClick = () => {
    window.open('https://wa.me/5554992819218', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] bg-[#000000] pt-28 pb-24 lg:pt-32 lg:pb-32 overflow-hidden flex items-end"
    >
      {/* Imagem de Fundo em Sangria Total (Full-bleed Background Image) com Zoom Premium */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
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
        </motion.div>
        {/* Degradê escuro suave para garantir leitura (embaixo no mobile, na esquerda no desktop) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/60 lg:to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex items-center justify-center lg:justify-start">
        
        {/* Bloco de conteúdo alinhado à direita no desktop e centralizado no mobile */}
        <div className="w-full max-w-[340px] lg:max-w-[560px] flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Identificação pequena */}
          <motion.span
            id="hero-eyebrow"
            initial={{ opacity: 0, y: 20, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.18em' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[9px] lg:text-[10px] uppercase text-[#E5E0DC]/85 font-semibold mb-6 block"
          >
            DISTRIBUIDORA OFICIAL ECOSMETICS NO RS
          </motion.span>

          {/* Título principal */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-light text-white text-[36px] lg:text-[56px] leading-[1.05] mb-[28px] tracking-tight max-w-[320px] lg:max-w-none"
          >
            Feito para <span className="italic font-normal text-[#E5E0DC]">profissionais</span> <br className="hidden lg:block" /> que querem crescer.
          </motion.h1>

          {/* Botões de Ação */}
          <motion.div
            id="hero-actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4 w-full max-w-[280px] lg:max-w-none"
          >
            <motion.button
              id="hero-primary-btn"
              onClick={handlePrimaryClick}
              whileHover={{ scale: 1.02, backgroundColor: '#525e44' }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#48523B] text-white font-sans text-[11px] lg:text-[12px] uppercase tracking-[0.15em] font-bold h-[46px] px-8 rounded-none transition-all duration-300 shadow-md flex items-center justify-center gap-2 w-full lg:w-auto cursor-pointer"
            >
              Falar com um consultor
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>

            <motion.a
              id="hero-secondary-btn"
              href="#produtos"
              whileHover={{ scale: 1.02, x: 3 }}
              whileTap={{ scale: 0.98 }}
              className="text-[#E5E0DC]/80 hover:text-white font-sans text-[11px] lg:text-[12px] uppercase tracking-[0.15em] font-bold py-2.5 px-4 transition-all duration-300 flex items-center justify-center gap-1.5 w-full lg:w-auto hover:underline decoration-[#E5E0DC]/30 underline-offset-4"
            >
              Conhecer produtos
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Indicador de Rolagem Minimalista */}
      <motion.div
        id="hero-scroll-indicator"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1 pointer-events-none"
      >
        <span className="text-[9px] tracking-[0.2em] uppercase text-white/50 font-sans">Role para descobrir</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
