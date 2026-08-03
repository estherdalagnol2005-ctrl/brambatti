/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import ScrollFadeIn from './ScrollFadeIn';

const ESSENCIA_PRIMARY_BASE =
  'https://lh3.googleusercontent.com/d/1X3n0oTOPFer5RwbLxyLg4zi7SVWldh_t';
const ESSENCIA_SECONDARY_BASE =
  'https://lh3.googleusercontent.com/d/1VdwBg-a-KgQ806bsglJedI9rZzhqjzdR';

export default function About() {
  return (
    <section id="sobre" className="bg-[#F5E9DD] py-20 md:py-28 relative overflow-hidden">
      {/* Editorial Decorative grid and monogram trace */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#AB907B/4_1px,transparent_1px),linear-gradient(to_bottom,#AB907B/4_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Double Image Composition */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto lg:mx-0 h-[450px] sm:h-[520px]">
              {/* Primary Main Image (high-resolution responsive source) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute top-0 left-0 w-[75%] h-[80%] overflow-hidden rounded-lg shadow-md border border-[#AB907B]/10 bg-white"
              >
                <img
                  src={`${ESSENCIA_PRIMARY_BASE}=w1800`}
                  srcSet={`${ESSENCIA_PRIMARY_BASE}=w800 800w, ${ESSENCIA_PRIMARY_BASE}=w1200 1200w, ${ESSENCIA_PRIMARY_BASE}=w1800 1800w, ${ESSENCIA_PRIMARY_BASE}=w2400 2400w`}
                  sizes="(min-width: 1280px) 430px, (min-width: 1024px) 38vw, 75vw"
                  alt="Nossa essência gaúcha - Brambatti Distribuidora"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
              </motion.div>

              {/* Secondary Overlapping Image (high-resolution responsive source) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="absolute bottom-0 right-0 w-[48%] h-[55%] overflow-hidden rounded-lg shadow-lg border-2 border-[#F5E9DD] bg-white z-20"
              >
                <img
                  src={`${ESSENCIA_SECONDARY_BASE}=w1400`}
                  srcSet={`${ESSENCIA_SECONDARY_BASE}=w640 640w, ${ESSENCIA_SECONDARY_BASE}=w960 960w, ${ESSENCIA_SECONDARY_BASE}=w1400 1400w, ${ESSENCIA_SECONDARY_BASE}=w1800 1800w`}
                  sizes="(min-width: 1280px) 280px, (min-width: 1024px) 25vw, 48vw"
                  alt="Ecosmetics no Rio Grande do Sul - Brambatti"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
              </motion.div>

              {/* Floating Monogram-inspired subtle abstract ornament */}
              <div className="absolute top-[40%] right-[40%] w-16 h-16 border-t-2 border-r-2 border-[#AB907B]/20 rounded-tr-[40px] pointer-events-none z-10" />
            </div>

            {/* Mobile-only quote: appears after both images */}
            <ScrollFadeIn delay={300} className="mt-12 w-full lg:hidden">
              <div className="border-l-2 border-[#AB907B] pl-5 py-1">
                <span className="font-display text-lg sm:text-xl text-[#424139] block leading-tight">
                  “Construindo relações reais que fortalecem marcas e consagram profissionais.”
                </span>
                <span className="font-sans text-[8px] tracking-widest uppercase text-[#AB907B] font-bold mt-2 block">
                  Brambatti Distribuidora
                </span>
              </div>
            </ScrollFadeIn>
          </div>

          {/* Right Column: Editorial Minimalist Messaging */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <ScrollFadeIn delay={100} className="w-full flex flex-col items-start">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#AB907B]">
                  Nossa Essência Gaúcha
                </span>
                <div className="w-8 h-[1px] bg-[#AB907B]/40" />
              </div>

              {/* Giant spectacular display of '+19 anos' */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif font-normal text-6xl sm:text-7xl lg:text-8xl text-[#AB907B] leading-none select-none">
                  +19
                </span>
                <span className="font-sans text-xs sm:text-sm font-extrabold text-[#20201E] uppercase tracking-wider">
                  Anos de História & Parceria
                </span>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={200} className="w-full">
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight text-[#20201E] uppercase mb-6 leading-tight max-w-xl">
                Mais do que distribuir produtos, <br />
                <span className="text-[#AB907B]">compartilhamos sucesso.</span>
              </h2>
            </ScrollFadeIn>

            <ScrollFadeIn delay={300} className="w-full">
              <div className="font-sans text-xs sm:text-sm text-[#6E6A66] space-y-4 mb-0 lg:mb-8 leading-relaxed max-w-lg">
                <p>
                  A Brambatti é o ponto de encontro entre as melhores marcas profissionais e o sucesso duradouro do seu salão de beleza no Rio Grande do Sul.
                </p>
                <p>
                  Como distribuidor credenciado Ecosmetics, entendemos que o salão é um espaço de transformação e confiança. Por isso, entregamos soluções completas: produtos inovadores, mentoria técnica, estoque confiável e suporte no local.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Desktop-only quote: remains in the text column */}
            <ScrollFadeIn delay={400} className="hidden w-full lg:block">
              <div className="border-l-2 border-[#AB907B] pl-5 py-1">
                <span className="font-display text-lg sm:text-xl text-[#424139] block leading-tight">
                  “Construindo relações reais que fortalecem marcas e consagram profissionais.”
                </span>
                <span className="font-sans text-[8px] tracking-widest uppercase text-[#AB907B] font-bold mt-2 block">
                  Brambatti Distribuidora
                </span>
              </div>
            </ScrollFadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
