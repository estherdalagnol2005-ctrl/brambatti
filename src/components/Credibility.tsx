/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Credibility() {
  const marqueeItems = [
    '+19 ANOS DE EXPERIÊNCIA',
    'DISTRIBUIDORA OFICIAL ECOSMETICS',
    '+2.000 CLIENTES ATENDIDOS',
    'PRODUTOS PARA PROFISSIONAIS',
    '3 VEZES PREMIADOS PELA ECOSMETICS',
  ];

  const Track = () => (
    <div className="flex shrink-0 items-center whitespace-nowrap">
      {marqueeItems.map((item, idx) => (
        <span key={idx} className="flex shrink-0 items-center">
          <span className="mx-6 font-sans text-[9px] font-semibold tracking-[0.15em] text-[#E5E0DC] sm:mx-7 sm:text-[10px] md:mx-8 md:text-[11px]">
            {item}
          </span>
          <span
            aria-hidden="true"
            className="mx-3 select-none text-[9px] text-[#E5E0DC]/55 sm:mx-3.5 sm:text-[10px] md:mx-4"
          >
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      id="credibilidade"
      className="relative z-20 flex h-8 w-full select-none items-center overflow-hidden border-y border-white/5 bg-[#48523B] sm:h-9"
    >
      <style>{`
        @keyframes marquee-slide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-marquee-track {
          animation: marquee-slide 32s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-track {
            animation-play-state: paused;
          }
        }
      `}</style>

      <div className="flex shrink-0 animate-marquee-track">
        <Track />
        <Track />
      </div>
    </div>
  );
}
