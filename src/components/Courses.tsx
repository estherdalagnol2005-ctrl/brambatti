/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, MapPin, GraduationCap } from 'lucide-react';
import { getWhatsAppLink } from '../data';
import ScrollFadeIn from './ScrollFadeIn';
import colorCourseImg from '../assets/images/impact_banner_hair_1784819726608.jpg';
import treatmentCourseImg from '../assets/images/ecosmetics_products_1784818846931.jpg';
import cuttingCourseImg from '../assets/images/hero_salon_hair_1784818831770.jpg';

interface Course {
  id: string;
  category: string;
  name: string;
  description: string;
  city?: string;
  slots?: string;
  image: string;
  date?: string; // Kept optional & undefined to avoid fake dates as per request
}

export default function Courses() {
  const tempCourses: Course[] = [
    {
      id: 'mechas-avancadas',
      category: 'Coloração',
      name: 'Masterclass Mechas Criativas & Loira de Luxo',
      description: 'Aperfeiçoamento prático em técnicas de mechas, transições de cor e loiros impecáveis utilizando as tecnologias inovadoras da Ecosmetics.',
      city: 'Caxias do Sul - RS',
      slots: 'Vagas Limitadas',
      image: colorCourseImg,
    },
    {
      id: 'terapia-capilar',
      category: 'Tratamento',
      name: 'Terapia Capilar & Reconstrução Científica',
      description: 'Diagnóstico profundo e protocolos práticos de regeneração e retexturização da fibra capilar.',
      city: 'Porto Alegre - RS',
      slots: 'Vagas Limitadas',
      image: treatmentCourseImg,
    },
    {
      id: 'arquitetura-corte',
      category: 'Técnica profissional',
      name: 'Arquitetura de Corte & Visagismo Feminino',
      description: 'Harmonização de linhas, volumes e texturas com foco no design personalizado para cada cliente.',
      city: 'Caxias do Sul - RS',
      slots: 'Últimas Vagas',
      image: cuttingCourseImg,
    }
  ];

  const mainCourse = tempCourses[0];
  const secondaryCourses = tempCourses.slice(1);

  return (
    <section id="cursos" className="bg-[#FFFFFF] py-20 md:py-28 relative border-t border-[#615F55]/10 overflow-hidden">
      {/* Editorial Decorative Subtle Accent Grid */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#48523B" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Staggered Scroll Animations */}
        <ScrollFadeIn delay={100} className="w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#48523B] font-bold block mb-3">
                Cursos e Capacitações
              </span>
              
              <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl tracking-tight text-black leading-tight">
                Conhecimento que <br />
                <span className="italic font-normal text-[#48523B]">transforma resultados.</span>
              </h2>
            </div>
            
            <div className="max-w-md">
              <p className="font-sans text-xs sm:text-sm text-[#615F55] leading-relaxed">
                Cursos e experiências desenvolvidos para profissionais que desejam aprimorar técnicas, ampliar conhecimentos e elevar os resultados no salão.
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        {/* --- DESKTOP LAYOUT (Asymmetrical Grid) --- */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Featured Course (50% Width / Spans 6 cols) */}
          <div className="col-span-6 flex h-full">
            <ScrollFadeIn delay={200} className="w-full h-full flex">
              <a
                href={getWhatsAppLink(`Olá! Gostaria de receber mais informações sobre o curso ${mainCourse.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between w-full overflow-hidden bg-[#FAF8F6] rounded-lg border border-[#615F55]/10 hover:border-[#48523B]/30 hover:shadow-[0_12px_30px_rgba(72,82,59,0.06)] transition-all duration-500 h-full"
              >
                <div className="flex flex-col">
                  {/* Large Responsive Image with Scale Zoom */}
                  <div className="aspect-[16/10] overflow-hidden bg-black/5 relative shrink-0">
                    <img
                      src={mainCourse.image}
                      alt={mainCourse.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-[#48523B] text-[#E5E0DC] text-[9px] tracking-widest font-extrabold uppercase px-3 py-1 rounded-sm shadow-sm">
                      Destaque
                    </div>
                  </div>

                  {/* Details Container */}
                  <div className="p-8">
                    <span className="font-sans text-[10px] tracking-widest uppercase font-black text-[#48523B] block mb-2">
                      {mainCourse.category}
                    </span>
                    
                    <h3 className="font-serif font-normal text-xl sm:text-2xl text-black leading-snug group-hover:text-[#48523B] transition-colors duration-300">
                      {mainCourse.name}
                    </h3>
                    
                    <p className="font-sans text-xs sm:text-sm text-[#615F55] leading-relaxed mt-3 mb-6">
                      {mainCourse.description}
                    </p>

                    {/* Metadata block (Hides fields/container if they do not exist) */}
                    {(mainCourse.date || mainCourse.city || mainCourse.slots) && (
                      <div className="flex flex-wrap items-center gap-4 border-t border-[#615F55]/10 pt-4 mt-2">
                        {mainCourse.date && (
                          <span className="font-sans text-[11px] text-[#615F55] uppercase tracking-wider font-semibold">
                            {mainCourse.date}
                          </span>
                        )}
                        {mainCourse.city && (
                          <span className="flex items-center gap-1.5 font-sans text-[11px] text-[#615F55] uppercase tracking-wider font-semibold">
                            <MapPin className="w-3.5 h-3.5 text-[#48523B]" />
                            {mainCourse.city}
                          </span>
                        )}
                        {mainCourse.slots && (
                          <span className="bg-[#48523B]/10 text-[#48523B] text-[9px] tracking-wider font-extrabold uppercase px-2 py-0.5 rounded-sm">
                            {mainCourse.slots}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Bar */}
                <div className="px-8 pb-8 pt-2">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#48523B] border-t border-[#615F55]/10 pt-4 group-hover:text-black transition-colors">
                    <span>Quero participar</span>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </div>
              </a>
            </ScrollFadeIn>
          </div>

          {/* Right Column: Two Smaller Courses Stacked (Spans 6 cols) */}
          <div className="col-span-6 flex flex-col gap-6 justify-between">
            {secondaryCourses.map((course, idx) => (
              <ScrollFadeIn
                key={course.id}
                delay={250 + idx * 100}
                className="flex-1 flex"
              >
                <a
                  href={getWhatsAppLink(`Olá! Gostaria de receber mais informações sobre o curso ${course.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row w-full overflow-hidden bg-[#FAF8F6] rounded-lg border border-[#615F55]/10 hover:border-[#48523B]/30 hover:shadow-[0_12px_30px_rgba(72,82,59,0.06)] transition-all duration-500"
                >
                  {/* Left Aspect Image with Scale Zoom */}
                  <div className="w-full sm:w-[40%] aspect-[16/10] sm:aspect-square overflow-hidden bg-black/5 relative shrink-0">
                    <img
                      src={course.image}
                      alt={course.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Details block */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <span className="font-sans text-[9px] tracking-widest uppercase font-black text-[#48523B] block mb-1">
                        {course.category}
                      </span>
                      
                      <h3 className="font-serif font-normal text-lg text-black leading-snug group-hover:text-[#48523B] transition-colors duration-300">
                        {course.name}
                      </h3>
                      
                      <p className="font-sans text-xs text-[#615F55] leading-relaxed mt-2 line-clamp-2">
                        {course.description}
                      </p>

                      {/* Metadata row (Hides if fields are empty) */}
                      {(course.date || course.city || course.slots) && (
                        <div className="flex flex-wrap items-center gap-3 mt-4">
                          {course.date && (
                            <span className="font-sans text-[10px] text-[#615F55] uppercase tracking-wider font-semibold">
                              {course.date}
                            </span>
                          )}
                          {course.city && (
                            <span className="flex items-center gap-1 font-sans text-[10px] text-[#615F55] uppercase tracking-wider font-semibold">
                              <MapPin className="w-3 h-3 text-[#48523B]" />
                              {course.city}
                            </span>
                          )}
                          {course.slots && (
                            <span className="bg-[#48523B]/10 text-[#48523B] text-[8px] tracking-wider font-extrabold uppercase px-1.5 py-0.5 rounded-sm">
                              {course.slots}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action */}
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-[#48523B] border-t border-[#615F55]/10 pt-4 mt-4 group-hover:text-black transition-colors">
                      <span>Quero participar</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </a>
              </ScrollFadeIn>
            ))}
          </div>

        </div>

        {/* --- MOBILE LAYOUT (Smooth Snap Carousel) --- */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-5 pb-6 -mx-6 px-6">
            {tempCourses.map((course) => (
              <div key={course.id} className="snap-start shrink-0 w-[84vw] max-w-[320px] flex flex-col h-full">
                <a
                  href={getWhatsAppLink(`Olá! Gostaria de receber mais informações sobre o curso ${course.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between bg-white rounded-lg border border-[#615F55]/10 hover:border-[#48523B]/30 overflow-hidden h-full"
                >
                  <div>
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden bg-black/5 relative">
                      <img
                        src={course.image}
                        alt={course.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <span className="font-sans text-[9px] tracking-widest uppercase font-black text-[#48523B] block mb-1">
                        {course.category}
                      </span>
                      
                      <h3 className="font-serif font-normal text-base text-black leading-snug">
                        {course.name}
                      </h3>
                      
                      <p className="font-sans text-xs text-[#615F55] leading-relaxed mt-2 line-clamp-3">
                        {course.description}
                      </p>

                      {/* Metadata (Hides if fields are empty) */}
                      {(course.date || course.city || course.slots) && (
                        <div className="flex flex-wrap items-center gap-3 mt-4">
                          {course.date && (
                            <span className="font-sans text-[9px] text-[#615F55] uppercase tracking-wider font-semibold">
                              {course.date}
                            </span>
                          )}
                          {course.city && (
                            <span className="flex items-center gap-1 font-sans text-[9px] text-[#615F55] uppercase tracking-wider font-semibold">
                              <MapPin className="w-2.5 h-2.5 text-[#48523B]" />
                              {course.city}
                            </span>
                          )}
                          {course.slots && (
                            <span className="bg-[#48523B]/10 text-[#48523B] text-[8px] tracking-wider font-extrabold uppercase px-1.5 py-0.5 rounded-sm">
                              {course.slots}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Button */}
                  <div className="px-5 pb-5 pt-1">
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-[#48523B] border-t border-[#615F55]/10 pt-3 group-hover:text-black transition-colors">
                      <span>Quero participar</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION BOTTOM CALL-TO-ACTION (CTA) --- */}
        <div className="mt-16 border-t border-[#615F55]/15 pt-12 flex flex-col items-center gap-6">
          <ScrollFadeIn delay={200}>
            <div className="text-center">
              <a
                href={getWhatsAppLink("Olá! Gostaria de conhecer a agenda de cursos e capacitações da Brambatti.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#48523B] hover:bg-[#30372A] text-white font-sans text-xs uppercase tracking-widest font-extrabold py-4 px-10 rounded-none transition-all duration-300 shadow-md group"
              >
                Ver agenda de cursos
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollFadeIn>
          
          <ScrollFadeIn delay={300}>
            <p className="font-serif italic text-sm md:text-base text-[#48523B] mt-2 text-center tracking-wide">
              Aprender também faz parte da transformação.
            </p>
          </ScrollFadeIn>
        </div>

      </div>
    </section>
  );
}
