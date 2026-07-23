/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';
import essencia1Img from '../assets/images/essencia_1.jpg';
import essencia2Img from '../assets/images/essencia_2.jpg';

export default function About() {
  return (
    <section id="sobre" className="bg-[#E5E0DC] py-20 md:py-28 relative overflow-hidden">
      {/* Editorial Decorative grid and monogram trace */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#48523B/4_1px,transparent_1px),linear-gradient(to_bottom,#48523B/4_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Double Image Composition */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto lg:mx-0 h-[450px] sm:h-[520px]">
              {/* Primary Main Image (Vivid, elegant, natural colors) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute top-0 left-0 w-[75%] h-[80%] overflow-hidden rounded-lg shadow-md border border-[#48523B]/10 bg-white"
              >
                <img
                  src={essencia1Img}
                  alt="Nossa essência gaúcha - Brambatti Distribuidora"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-700"
                />
              </motion.div>

              {/* Secondary Overlapping Image (Vivid details) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="absolute bottom-0 right-0 w-[48%] h-[55%] overflow-hidden rounded-lg shadow-lg border-2 border-[#E5E0DC] bg-white z-20"
              >
                <img
                  src={essencia2Img}
                  alt="Ecosmetics no Rio Grande do Sul - Brambatti"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-700"
                />
              </motion.div>

              {/* Floating Monogram-inspired subtle abstract ornament */}
              <div className="absolute top-[40%] right-[40%] w-16 h-16 border-t-2 border-r-2 border-[#48523B]/20 rounded-tr-[40px] pointer-events-none z-10" />
            </div>
          </div>

          {/* Right Column: Editorial Minimalist Messaging */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <ScrollFadeIn delay={100} className="w-full flex flex-col items-start">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#48523B]">
                  Nossa Essência Gaúcha
                </span>
                <div className="w-8 h-[1px] bg-[#48523B]/40" />
              </div>

              {/* Giant spectacular display of '+19 anos' */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif font-light text-6xl sm:text-7xl lg:text-8xl text-[#48523B] leading-none select-none">
                  +19
                </span>
                <span className="font-sans text-xs sm:text-sm font-extrabold text-[#000000] uppercase tracking-wider">
                  Anos de História & Parceria
                </span>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={200} className="w-full">
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight text-[#000000] uppercase mb-6 leading-tight max-w-xl">
                Mais do que distribuir produtos, <br />
                <span className="text-[#48523B]">compartilhamos sucesso.</span>
              </h2>
            </ScrollFadeIn>

            <ScrollFadeIn delay={300} className="w-full">
              <div className="font-sans text-xs sm:text-sm text-[#615F55] space-y-4 mb-8 leading-relaxed max-w-lg">
                <p>
                  A Brambatti é o ponto de encontro entre as melhores marcas profissionais e o sucesso duradouro do seu salão de beleza no Rio Grande do Sul.
                </p>
                <p>
                  Como distribuidor credenciado Ecosmetics, entendemos que o salão é um espaço de transformação e confiança. Por isso, entregamos soluções completas: produtos inovadores, mentoria técnica, estoque confiável e suporte no local.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Accent decorative blockquote */}
            <ScrollFadeIn delay={400} className="w-full">
              <div className="border-l-2 border-[#48523B] pl-5 py-1">
                <span className="font-serif italic text-lg sm:text-xl text-[#30372A] block leading-tight">
                  “Construindo relações reais que fortalecem marcas e consagram profissionais.”
                </span>
                <span className="font-sans text-[8px] tracking-widest uppercase text-[#48523B] font-bold mt-2 block">
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
