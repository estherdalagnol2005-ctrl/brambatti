/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { getWhatsAppLink } from '../data';
import ScrollFadeIn from './ScrollFadeIn';
import impactImage from '../assets/images/padrao_ecosmetics.jpg';

export default function BannerImpact() {
  const handleButtonClick = () => {
    window.open(getWhatsAppLink('Olá! Vi o banner de resultados e gostaria de agendar uma visita de consultor para o meu salão.'), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="impacto" className="relative h-[65vh] sm:h-[75vh] min-h-[480px] w-full overflow-hidden flex items-center">
      {/* Imagem full-width com parallax leve via zoom e scale natural */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent z-10" />
        <img
          src={impactImage}
          alt="Cabelo loiro perfeito de alta costura em salão profissional"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transform scale-102 hover:scale-105 transition-transform duration-[4000ms] ease-out"
        />
      </div>

      {/* Content centered on the left, matching editorial reference */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
        <div className="max-w-2xl text-left">
          {/* Accent small line */}
          <ScrollFadeIn delay={100}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#E5E0DC]" />
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#E5E0DC] font-extrabold">
                Padrão Ecosmetics de Qualidade
              </span>
            </div>
          </ScrollFadeIn>

          {/* Slogan */}
          <ScrollFadeIn delay={200}>
            <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-6">
              Performance que aparece <br />
              <span className="italic font-normal text-[#E5E0DC]">em cada resultado.</span>
            </h2>
          </ScrollFadeIn>

          {/* Subtext */}
          <ScrollFadeIn delay={300}>
            <p className="font-sans text-xs sm:text-sm text-[#E5E0DC]/85 max-w-lg mb-8 leading-relaxed">
              Sua cliente sabe diferenciar o comum do extraordinário. Entregue a excelência cosmética que consagra sua autoridade técnica e valoriza seu trabalho de estilista capilar.
            </p>
          </ScrollFadeIn>

          {/* Soft CTA button in olive */}
          <ScrollFadeIn delay={400}>
            <button
              id="banner-impact-cta"
              onClick={handleButtonClick}
              className="bg-[#48523B] hover:bg-[#30372A] text-[#E5E0DC] font-sans text-xs uppercase tracking-widest font-extrabold py-4 px-8 rounded-none transition-all duration-300 shadow-md focus:ring-1 focus:ring-[#48523B]"
            >
              Agendar Visita Comercial
            </button>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
