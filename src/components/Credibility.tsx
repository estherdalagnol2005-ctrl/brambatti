/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Credibility() {
  const marqueeItems = [
    "+19 ANOS DE EXPERIÊNCIA",
    "DISTRIBUIDORA OFICIAL ECOSMETICS",
    "+2.000 CLIENTES ATENDIDOS",
    "PRODUTOS PARA PROFISSIONAIS",
    "QUALIDADE PARA O SEU SALÃO"
  ];

  // Helper component to render a single track of elements
  const Track = () => (
    <div className="flex shrink-0 items-center gap-8 md:gap-16 whitespace-nowrap">
      {marqueeItems.map((item, idx) => (
        <span key={idx} className="flex items-center gap-8 md:gap-16">
          <span className="font-sans font-semibold text-[10px] md:text-xs tracking-widest text-[#E5E0DC]">
            {item}
          </span>
          <span className="text-[#E5E0DC]/60 text-xs select-none">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      id="credibilidade"
      className="relative w-full overflow-hidden bg-[#48523B] h-8 sm:h-9 flex items-center select-none z-20 border-y border-white/5"
    >
      {/* Self-contained CSS keyframes for perfectly hardware-accelerated seamless loops */}
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
          animation: marquee-slide 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-track {
            animation-play-state: paused;
          }
        }
      `}</style>

      {/* The flexing marquee tracks */}
      <div className="flex shrink-0 animate-marquee-track">
        <Track />
        <Track />
      </div>
    </div>
  );
}
