/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../data';
import ScrollFadeIn from './ScrollFadeIn';
import coloracaoImg from '../assets/images/cat_coloracao.jpg';
import descoloracaoImg from '../assets/images/cat_descoloracao.jpg';
import shampoosImg from '../assets/images/cat_shampoos.jpg';
import tratamentosImg from '../assets/images/cat_tratamentos.jpg';
import finalizacaoImg from '../assets/images/cat_finalizacao.jpg';

interface CategoryItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  whatsappMessage: string;
  gridClass: string;
  aspectClass: string;
}

export default function Categories() {
  const categories: CategoryItem[] = [
    {
      id: 'coloracao',
      name: 'Coloração',
      subtitle: '80+ Tons Vibrantes',
      description: 'Cobertura absoluta e brilho tridimensional com tecnologia de fixação.',
      image: coloracaoImg,
      whatsappMessage: 'Olá! Gostaria de falar com um consultor sobre a linha de Coloração Profissional da Ecosmetics.',
      gridClass: 'md:col-span-2',
      aspectClass: 'aspect-[4/5] md:aspect-[1.6/1]',
    },
    {
      id: 'descoloracao',
      name: 'Descoloração',
      subtitle: 'Loiros Saudáveis',
      description: 'Abertura rápida e uniforme de até 9 tons com máxima proteção aos fios.',
      image: descoloracaoImg,
      whatsappMessage: 'Olá! Gostaria de saber mais sobre os Pós Descolorantes e oxidantes da Ecosmetics.',
      gridClass: 'md:col-span-1',
      aspectClass: 'aspect-[4/5] md:aspect-[0.8/1]',
    },
    {
      id: 'tratamentos',
      name: 'Tratamentos',
      subtitle: 'Nutrição & Reconstrução',
      description: 'Cronogramas avançados e infusão de aminoácidos para cabelos quimicamente tratados.',
      image: tratamentosImg,
      whatsappMessage: 'Olá! Gostaria de falar com um representante sobre os Tratamentos Profissionais Ecosmetics.',
      gridClass: 'md:col-span-1',
      aspectClass: 'aspect-[4/5] md:aspect-[0.8/1]',
    },
    {
      id: 'shampoos',
      name: 'Shampoos & Condicionadores',
      subtitle: 'Fórmulas Ativas',
      description: 'Limpeza inteligente e selagem de cutículas de alta performance.',
      image: shampoosImg,
      whatsappMessage: 'Olá! Gostaria de informações sobre os Shampoos e Condicionadores profissionais.',
      gridClass: 'md:col-span-1',
      aspectClass: 'aspect-[4/5] md:aspect-[0.8/1]',
    },
    {
      id: 'finalizacao',
      name: 'Finalização',
      subtitle: 'Brilho & Selagem',
      description: 'Séruns e finalizadores que agem como escudo térmico contra altas temperaturas.',
      image: finalizacaoImg,
      whatsappMessage: 'Olá! Gostaria de consultar os finalizadores premium Ecosmetics.',
      gridClass: 'md:col-span-1',
      aspectClass: 'aspect-[4/5] md:aspect-[0.8/1]',
    },
  ];

  const handleCategoryClick = (message: string) => {
    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="categorias" className="bg-[#FAF8F6] py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Skincare Editorial Style */}
        <ScrollFadeIn delay={100} className="w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="font-serif italic text-lg text-[#48523B] block mb-2">
                Transformação Capilar
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-[#000000] uppercase leading-tight">
                Categorias <br />
                <span className="text-[#615F55]">de Alta Performance</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="font-sans text-xs sm:text-sm text-[#615F55] leading-relaxed">
                Descubra soluções criadas para impulsionar a lucratividade do seu salão e gerar fidelidade real através de resultados surpreendentes em cada aplicação.
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Asymmetrical Skincare Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {categories.map((cat, idx) => (
            <ScrollFadeIn
              key={cat.id}
              delay={150 + idx * 80}
              className={`group relative overflow-hidden rounded-lg cursor-pointer bg-white shadow-sm border border-[#615F55]/5 flex flex-col justify-between ${cat.gridClass}`}
            >
              <div 
                onClick={() => handleCategoryClick(cat.whatsappMessage)}
                className="w-full h-full"
              >
                {/* Image with subtle zoom hover */}
                <div className={`relative overflow-hidden w-full h-full shrink-0 ${cat.aspectClass}`}>
                  {/* Visual overlay gradient for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 opacity-90 transition-opacity group-hover:opacity-95" />
                  
                  <img
                    src={cat.image}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-104 transition-transform duration-700 ease-out"
                  />

                  {/* Overlaid Elegant Text */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-20 flex flex-col items-start text-[#E5E0DC]">
                    <span className="font-sans text-[9px] tracking-widest uppercase font-bold text-[#FAF8F6]/80 mb-2 block">
                      {cat.subtitle}
                    </span>
                    
                    {/* Title shifts on hover */}
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl tracking-tight uppercase mb-2 text-white transition-transform duration-300 group-hover:-translate-y-1">
                      {cat.name}
                    </h3>

                    <p className="font-sans text-xs text-[#E5E0DC]/90 leading-relaxed max-w-sm mb-4 line-clamp-2 md:line-clamp-none opacity-90 group-hover:opacity-100 transition-opacity">
                      {cat.description}
                    </p>

                    <div className="flex items-center gap-1.5 font-sans text-[10px] tracking-widest uppercase font-extrabold text-white group-hover:text-[#E5E0DC]/90 mt-1 transition-colors">
                      <span>Consultar Linha</span>
                      {/* Arrow animation appearing and shifting */}
                      <ArrowUpRight className="w-3.5 h-3.5 transform translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
