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
    <div className="flex shrink-0 items-center gap-12 whitespace-nowrap sm:gap-16 md:gap-20">
      {marqueeItems.map((item, idx) => (
        <span key={idx} className="flex shrink-0 items-center gap-12 sm:gap-16 md:gap-20">
          <span className="font-sans text-[10px] font-semibold tracking-widest text-[#E5E0DC] md:text-xs">
            {item}
          </span>
          <span
            aria-hidden="true"
            className="select-none text-xs text-[#E5E0DC]/60"
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
          animation: marquee-slide 30s linear infinite;
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
