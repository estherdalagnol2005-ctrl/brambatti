/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ArrowRight,
  CalendarDays,
  GraduationCap,
  MapPin,
} from 'lucide-react';
import { getWhatsAppLink } from '../data';
import ScrollFadeIn from './ScrollFadeIn';
import fontouraXavierCourseImg from '../assets/images/curso_gabriel_fontoura_xavier.webp';
import gramadoCourseImg from '../assets/images/curso_gabriel_gramado.webp';

interface Course {
  id: string;
  category: string;
  name: string;
  instructor: string;
  topics: string[];
  city: string;
  slots: string;
  image: string;
  date: string;
}

const courses: Course[] = [
  {
    id: 'mechas-terapia-fontoura-xavier',
    category: 'Mechas & terapia capilar',
    name: 'Mechas Criativas e Terapia Capilar',
    instructor: 'Gabriel Schaffel',
    topics: [
      'Técnicas criativas e atuais',
      'Saúde capilar e tratamentos essenciais',
      'Visagismo e harmonização de mechas',
      'Estratégias para elevar seus resultados',
    ],
    city: 'Fontoura Xavier - RS',
    slots: 'Vagas limitadas',
    image: fontouraXavierCourseImg,
    date: '17/08',
  },
  {
    id: 'mechas-terapia-gramado',
    category: 'Mechas & terapia capilar',
    name: 'Mechas Criativas e Terapia Capilar',
    instructor: 'Gabriel Schaffel',
    topics: [
      'Técnicas criativas e atuais',
      'Saúde capilar e tratamentos essenciais',
      'Visagismo e harmonização de mechas',
      'Estratégias para elevar seus resultados',
    ],
    city: 'Gramado - RS',
    slots: 'Vagas limitadas',
    image: gramadoCourseImg,
    date: '24/08',
  },
];

function CourseCard({ course }: { course: Course }) {
  const whatsAppMessage = [
    `Olá! Gostaria de receber mais informações sobre o curso ${course.name}`,
    `com ${course.instructor}, em ${course.city}, no dia ${course.date}.`,
  ].join(' ');

  return (
    <a
      href={getWhatsAppLink(whatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#615F55]/10 bg-[#FAF8F6] transition-all duration-500 hover:-translate-y-1 hover:border-[#48523B]/30 hover:shadow-[0_18px_45px_rgba(72,82,59,0.10)]"
      aria-label={`Saiba mais sobre o curso ${course.name} em ${course.city}`}
    >
      <div className="aspect-[4/5] shrink-0 overflow-hidden bg-[#E5E0DC]">
        <img
          src={course.image}
          alt={`Curso ${course.name} com ${course.instructor}, em ${course.city}, dia ${course.date}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex-1">
          <span className="mb-2 block font-sans text-[9px] font-black uppercase tracking-[0.2em] text-[#48523B]">
            {course.category}
          </span>

          <h3 className="font-serif text-xl font-normal leading-snug text-black transition-colors duration-300 group-hover:text-[#48523B] md:text-2xl">
            {course.name}
          </h3>

          <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#615F55]">
            Com {course.instructor}
          </p>

          <ul className="mt-5 grid gap-2 border-t border-[#615F55]/10 pt-5">
            {course.topics.map((topic) => (
              <li
                key={topic}
                className="flex items-start gap-2 font-sans text-xs leading-relaxed text-[#615F55]"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.48rem] h-1 w-1 shrink-0 rounded-full bg-[#48523B]"
                />
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#615F55]/10 pt-5">
          <span className="flex items-center gap-1.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-[#615F55]">
            <CalendarDays className="h-3.5 w-3.5 text-[#48523B]" />
            {course.date}
          </span>

          <span className="flex items-center gap-1.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-[#615F55]">
            <MapPin className="h-3.5 w-3.5 text-[#48523B]" />
            {course.city}
          </span>

          <span className="rounded-sm bg-[#48523B]/10 px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-wider text-[#48523B]">
            {course.slots}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[#615F55]/10 pt-4 text-[11px] font-bold uppercase tracking-widest text-[#48523B] transition-colors group-hover:text-black">
          <span>Quero participar</span>
          <div className="flex items-center gap-1">
            <GraduationCap className="h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Courses() {
  return (
    <section
      id="cursos"
      className="relative overflow-hidden border-t border-[#615F55]/10 bg-white py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="courses-grid-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#48523B"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#courses-grid-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <ScrollFadeIn delay={100} className="w-full">
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <span className="mb-3 block font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#48523B]">
                Cursos e capacitações
              </span>

              <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
                Próximos cursos, <br />
                <span className="font-normal italic text-[#48523B]">
                  novas possibilidades.
                </span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="font-sans text-xs leading-relaxed text-[#615F55] sm:text-sm">
                Duas oportunidades para aprender com Gabriel Schaffel e
                aprimorar técnicas que elevam os resultados no salão.
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        <div className="hidden grid-cols-2 gap-8 md:grid lg:mx-auto lg:max-w-5xl">
          {courses.map((course, index) => (
            <ScrollFadeIn
              key={course.id}
              delay={200 + index * 100}
              className="h-full"
            >
              <CourseCard course={course} />
            </ScrollFadeIn>
          ))}
        </div>

        <div className="md:hidden">
          <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-5 scrollbar-none">
            {courses.map((course) => (
              <div
                key={course.id}
                className="h-full w-[84vw] max-w-[340px] shrink-0 snap-start"
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          <p className="mt-1 text-center font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-[#615F55]/70">
            Deslize para ver os cursos
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-[#615F55]/15 pt-12">
          <ScrollFadeIn delay={200}>
            <div className="text-center">
              <a
                href={getWhatsAppLink(
                  'Olá! Gostaria de conhecer a agenda de cursos e capacitações da Brambatti.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#48523B] px-10 py-4 font-sans text-xs font-extrabold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#30372A]"
              >
                Ver agenda de cursos
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={300}>
            <p className="mt-2 text-center font-serif text-sm italic tracking-wide text-[#48523B] md:text-base">
              Aprender também faz parte da transformação.
            </p>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
