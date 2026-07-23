/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../data';
import ScrollFadeIn from './ScrollFadeIn';

export default function CtaFinal() {
  const handleCtaClick = () => {
    window.open(
      getWhatsAppLink('Olá! Vi o site e gostaria de conversar com um representante para tirar algumas dúvidas e solicitar um atendimento comercial.'),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="cta-final" className="bg-[#000000] py-24 md:py-32 relative overflow-hidden text-[#E5E0DC]">
      {/* Decorative lines and subtle warm-radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(72,82,59,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-x-6 md:inset-x-12 top-0 h-[1px] bg-[#E5E0DC]/10" />
      <div className="absolute inset-x-6 md:inset-x-12 bottom-0 h-[1px] bg-[#E5E0DC]/10" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        {/* Accent Decorative Eyebrow */}
        <ScrollFadeIn delay={100}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-[1px] bg-[#48523B]" />
            <span className="font-serif italic text-lg text-[#E5E0DC]">
              Sua jornada começa aqui
            </span>
            <div className="w-4 h-[1px] bg-[#48523B]" />
          </div>
        </ScrollFadeIn>

        {/* Big Bold Title */}
        <ScrollFadeIn delay={180}>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white uppercase mb-6 leading-tight">
            Leve a performance Ecosmetics <br />
            <span className="text-[#48523B]">para o seu salão hoje.</span>
          </h2>
        </ScrollFadeIn>

        {/* Supporting copy */}
        <ScrollFadeIn delay={250}>
          <p className="font-sans text-xs sm:text-sm text-[#E5E0DC]/85 max-w-xl mb-10 leading-relaxed">
            Seja um parceiro oficial Brambatti. Descubra os produtos que transformam fios de cabelo e impulsionam os negócios dos profissionais mais bem-sucedidos do Rio Grande do Sul.
          </p>
        </ScrollFadeIn>

        {/* Primary Clickable Action */}
        <ScrollFadeIn delay={320} className="w-full sm:w-auto">
          <div className="w-full sm:w-auto">
            <button
              id="cta-final-button"
              onClick={handleCtaClick}
              className="w-full sm:w-auto bg-[#48523B] hover:bg-[#30372A] text-[#E5E0DC] font-sans text-xs uppercase tracking-widest font-bold py-4.5 px-10 rounded-none transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg"
            >
              Falar com Representante
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </ScrollFadeIn>

        {/* Quality disclaimer */}
        <p className="font-sans text-[10px] uppercase tracking-widest text-[#E5E0DC]/40 font-bold mt-8">
          Atendimento exclusivo para profissionais da beleza no RS
        </p>
      </div>
    </section>
  );
}
