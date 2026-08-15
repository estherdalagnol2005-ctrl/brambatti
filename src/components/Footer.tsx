/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, MessageSquare, MapPin, ArrowUp, ArrowRight, ShieldCheck } from 'lucide-react';
import { INSTAGRAM_LINK, ADDRESS_TEXT, MAPS_LINK, getWhatsAppLink } from '../data';
import logoImg from '../assets/images/brambatti_logo_footer.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#20201E] text-[#F5E9DD] pt-20 pb-12 relative overflow-hidden border-t border-[#AB907B]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#AB907B]/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <a href="#inicio" className="flex items-center group">
              <img
                src={logoImg}
                alt="Brambatti Distribuidora"
                width="601"
                height="600"
                loading="lazy"
                decoding="async"
                className="h-[44px] md:h-[54px] w-auto object-contain block brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
            
            <p className="font-sans text-xs sm:text-sm text-[#F5E9DD]/70 max-w-sm leading-relaxed">
              Distribuidora oficial e autorizada Ecosmetics no Rio Grande do Sul. Levamos inovação técnica, logística ágil e produtos de alto padrão para salões de beleza profissionais.
            </p>

            <div className="flex items-center gap-3 bg-[#AB907B]/10 border border-[#AB907B]/20 py-2.5 px-4 rounded-md">
              <ShieldCheck className="w-4 h-4 text-[#D4BCAE]" />
              <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-[#D4BCAE]">
                Distribuidor Autorizado Ecosmetics
              </span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <h4 className="font-sans text-[11px] uppercase tracking-widest text-[#D4BCAE] font-extrabold">
              Navegação
            </h4>
            
            <nav className="flex flex-col gap-2.5 text-xs">
              <a href="#inicio" className="hover:text-[#D4BCAE] transition-colors">Início</a>
              <a href="#produtos" className="hover:text-[#D4BCAE] transition-colors">Produtos</a>
              <a href="#sobre" className="hover:text-[#D4BCAE] transition-colors">Sobre Nós</a>
              <a href="#atendimento" className="hover:text-[#D4BCAE] transition-colors">Regiões Atendidas</a>
            </nav>
          </div>

          {/* Contacts Col */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <h4 className="font-sans text-[11px] uppercase tracking-widest text-[#D4BCAE] font-extrabold">
              Atendimento & Contato
            </h4>
            
            <div className="flex flex-col gap-4 text-xs">
              {/* Instagram */}
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#D4BCAE] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full border border-[#AB907B]/25 flex items-center justify-center bg-[#AB907B]/10 group-hover:border-[#D4BCAE] transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-[9px] uppercase tracking-widest text-[#D4BCAE]">Instagram</span>
                  <span className="font-sans text-xs">@brambatti_</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={getWhatsAppLink('Olá! Gostaria de falar com o atendimento comercial da Brambatti.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#D4BCAE] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full border border-[#AB907B]/25 flex items-center justify-center bg-[#AB907B]/10 group-hover:border-[#D4BCAE] transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-[9px] uppercase tracking-widest text-[#D4BCAE]">WhatsApp Comercial</span>
                  <span className="font-sans text-xs">(54) 99281-9218</span>
                </div>
              </a>

              {/* Address Map */}
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#D4BCAE] transition-colors group max-w-sm"
              >
                <div className="w-8 h-8 rounded-full border border-[#AB907B]/25 flex items-center justify-center bg-[#AB907B]/10 group-hover:border-[#D4BCAE] transition-colors shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-[9px] uppercase tracking-widest text-[#D4BCAE]">Endereço</span>
                  <span className="font-sans text-xs leading-relaxed block">
                    {ADDRESS_TEXT}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-[9px] text-[#D4BCAE] uppercase tracking-wider mt-1 group-hover:text-white transition-colors">
                    Ver no Google Maps
                    <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#F5E9DD]/55 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Brambatti Distribuidora. Todos os direitos reservados. <br className="sm:hidden" />
            <span className="hidden sm:inline"> | </span> 
            CNPJ sob consulta comercial.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 font-sans font-bold text-[9px] uppercase tracking-widest text-[#D4BCAE] hover:text-white transition-colors focus:outline-none"
            aria-label="Voltar para o topo"
          >
            Voltar ao topo
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
