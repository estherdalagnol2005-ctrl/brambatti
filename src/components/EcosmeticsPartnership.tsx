/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import partnershipLogoImg from '../assets/images/partnership_logo.png';
import ScrollFadeIn from './ScrollFadeIn';

export default function EcosmeticsPartnership() {
  return (
    <section id="ecosmetics" className="bg-[#000000] text-[#E5E0DC] py-16 md:py-24 relative overflow-hidden">
      {/* Soft gradient backgrounds for premium dark feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[#48523B]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Horizontal Partnership Lockup Banner */}
        <ScrollFadeIn delay={100} className="w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-sans text-[10px] tracking-widest uppercase text-[#48523B] font-extrabold mb-6">
              Parceria Oficial RS
            </span>
            
            <div className="w-full max-w-3xl px-4 flex justify-center">
              <img 
                src={partnershipLogoImg} 
                alt="Brambatti Distribuidora e Ecosmetics Parceria Oficial" 
                referrerPolicy="no-referrer"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </ScrollFadeIn>

      </div>
    </section>
  );
}

