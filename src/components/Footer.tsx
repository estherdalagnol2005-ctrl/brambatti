/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, MessageSquare, MapPin, ArrowUp, ArrowRight, ShieldCheck } from 'lucide-react';
import { INSTAGRAM_LINK, ADDRESS_TEXT, MAPS_LINK, getWhatsAppLink, WHATSAPP_LINK_BASE } from '../data';
import logoImg from '../assets/images/brambatti_logo_footer.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#000000] text-[#E5E0DC] pt-20 pb-12 relative overflow-hidden border-t border-[#48523B]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#48523B]/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <a href="#inicio" className="flex items-center group">
              <img
                src={logoImg}
                alt="Brambatti Distribuidora"
                referrerPolicy="no-referrer"
                className="h-[46px] w-auto max-w-[46px] object-contain block opacity-90 group-hover:opacity-100 transition-opacity duration-300 md:h-[54px] md:max-w-[54px]"
              />
            </a>
            
            <p className="font-sans text-xs sm:text-sm text-[#E5E0DC]/70 max-w-sm leading-relaxed">
              Distribuidora oficial e autorizada Ecosmetics no Rio Grande do Sul. Levamos inovação técnica, logística ágil e produtos de alto padrão para salões de beleza profissionais.
            </p>

            <div className="flex items-center gap-3 bg-[#48523B]/10 border border-[#48523B]/20 py-2.5 px-4 rounded-md">
              <ShieldCheck className="w-4 h-4 text-[#48523B]" />
              <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-[#48523B]">
                Distribuidor Autorizado Ecosmetics
              </span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <h4 className="font-sans text-[11px] uppercase tracking-widest text-[#48523B] font-extrabold">
              Navegação
            </h4>
            
            <nav className="flex flex-col gap-2.5 text-xs">
              <a href="#inicio" className="hover:text-[#48523B] transition-colors">Início</a>
              <a href="#produtos" className="hover:text-[#48523B] transition-colors">Produtos</a>
              <a href="#ecosmetics" className="hover:text-[#48523B] transition-colors">Ecosmetics Partnership</a>
              <a href="#sobre" className="hover:text-[#48523B] transition-colors">Sobre Nós</a>
              <a href="#atendimento" className="hover:text-[#48523B] transition-colors">Regiões Atendidas</a>
            </nav>
          </div>

          {/* Contacts Col */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <h4 className="font-sans text-[11px] uppercase tracking-widest text-[#48523B] font-extrabold">
              Atendimento & Contato
            </h4>
            
            <div className="flex flex-col gap-4 text-xs">
              {/* Instagram */}
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#48523B] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full border border-[#48523B]/25 flex items-center justify-center bg-[#48523B]/10 group-hover:border-[#48523B] transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-[9px] uppercase tracking-widest text-[#48523B]">Instagram</span>
                  <span className="font-sans text-xs">@brambatti_</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={getWhatsAppLink('Olá! Gostaria de falar com o atendimento comercial da Brambatti.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#48523B] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full border border-[#48523B]/25 flex items-center justify-center bg-[#48523B]/10 group-hover:border-[#48523B] transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-[9px] uppercase tracking-widest text-[#48523B]">WhatsApp Comercial</span>
                  <span className="font-sans text-xs">(54) 99281-9218</span>
                </div>
              </a>

              {/* Address Map */}
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#48523B] transition-colors group max-w-sm"
              >
                <div className="w-8 h-8 rounded-full border border-[#48523B]/25 flex items-center justify-center bg-[#48523B]/10 group-hover:border-[#48523B] transition-colors shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-[9px] uppercase tracking-widest text-[#48523B]">Endereço</span>
                  <span className="font-sans text-xs leading-relaxed block">
                    {ADDRESS_TEXT}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-[9px] text-[#48523B] uppercase tracking-wider mt-1 group-hover:text-[#E5E0DC] transition-colors">
                    Ver no Google Maps
                    <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#E5E0DC]/55 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Brambatti Distribuidora. Todos os direitos reservados. <br className="sm:hidden" />
            <span className="hidden sm:inline"> | </span> 
            CNPJ sob consulta comercial.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 font-sans font-bold text-[9px] uppercase tracking-widest text-[#48523B] hover:text-[#E5E0DC] transition-colors focus:outline-none"
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
