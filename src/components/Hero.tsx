/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroDesktop from '../assets/images/hero_desktop.png';
import heroMobile from '../assets/images/hero_mobile.jpg';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const handlePrimaryClick = () => {
    window.open('https://wa.me/5554992819218', '_blank', 'noopener,noreferrer');
  };

  const reveal = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] bg-[#000000] pt-28 pb-20 lg:pt-32 lg:pb-28 overflow-hidden flex items-end"
    >
      {/* As imagens mais recentes permanecem intactas; apenas o contêiner é animado. */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={prefersReducedMotion ? false : { opacity: 0.45, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Imagem Mobile */}
        <img
          id="hero-mobile-img"
          src={heroMobile}
          alt="Cabelo sedoso e saudável - Brambatti Distribuidora"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center block lg:hidden"
        />
        {/* Imagem Desktop */}
        <img
          id="hero-main-img"
          src={heroDesktop}
          alt="Cabelo sedoso e saudável - Brambatti Distribuidora"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-left md:object-center hidden lg:block"
        />
        {/* Degradê escuro suave para garantir leitura (embaixo no mobile, na esquerda no desktop) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/60 lg:to-transparent pointer-events-none" />
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_72%_28%,rgba(229,224,220,0.12),transparent_34%)]"
          animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex items-center justify-center lg:justify-start">
        
        {/* Bloco de conteúdo alinhado à direita no desktop e centralizado no mobile */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.2,
                staggerChildren: prefersReducedMotion ? 0 : 0.14,
              },
            },
          }}
          className="w-full max-w-[340px] lg:max-w-[540px] flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          
          {/* Identificação pequena */}
          <motion.span
            id="hero-eyebrow"
            variants={reveal}
            className="font-sans text-[9px] lg:text-[10px] tracking-[0.18em] uppercase text-[#E5E0DC]/85 font-semibold mb-6 block"
          >
            DISTRIBUIDORA OFICIAL ECOSMETICS NO RS
          </motion.span>

          {/* Título principal */}
          <motion.h1
            id="hero-title"
            variants={reveal}
            className="font-serif font-light text-white text-[36px] lg:text-[56px] leading-[1.0] mb-[28px] tracking-tight max-w-[320px] lg:max-w-none"
          >
            Feito para <span className="italic font-normal text-[#E5E0DC]">profissionais</span> <br className="hidden lg:block" /> que querem crescer.
          </motion.h1>

          {/* Botões de Ação */}
          <motion.div
            id="hero-actions"
            variants={reveal}
            className="flex flex-col items-center lg:items-start gap-3 w-full max-w-[280px] lg:max-w-none"
          >
            <motion.button
              id="hero-primary-btn"
              onClick={handlePrimaryClick}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.025, backgroundColor: '#525e44' }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="bg-[#48523B] hover:bg-[#3d4532] text-white font-sans text-[11px] lg:text-[12px] uppercase tracking-[0.15em] font-bold h-[44px] px-6 rounded-none transition-colors duration-300 shadow-md flex items-center justify-center gap-2 w-full lg:w-auto cursor-pointer"
            >
              Falar com um consultor
              <motion.span
                aria-hidden="true"
                animate={prefersReducedMotion ? undefined : { x: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.4, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.span>
            </motion.button>

            <motion.a
              id="hero-secondary-btn"
              href="#produtos"
              whileHover={prefersReducedMotion ? undefined : { x: 4 }}
              className="text-[#E5E0DC]/80 hover:text-white font-sans text-[11px] lg:text-[12px] uppercase tracking-[0.15em] font-bold py-2.5 px-4 transition-all duration-300 flex items-center justify-center w-full lg:w-auto hover:underline decoration-[#E5E0DC]/30 underline-offset-4"
            >
              Conhecer produtos
            </motion.a>
          </motion.div>

        </motion.div>
      </div>

      <motion.a
        href="#credibilidade"
        aria-label="Ir para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/70 md:flex"
      >
        <span className="font-sans text-[8px] uppercase tracking-[0.2em]">Role para descobrir</span>
        <motion.span
          aria-hidden="true"
          animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
