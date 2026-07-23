/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../data';
import logoImg from '../assets/images/brambatti_logo_header.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Ecosmetics', href: '#ecosmetics' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleConsultorClick = () => {
    window.open(getWhatsAppLink('Olá! Gostaria de falar com um consultor da Brambatti Distribuidora.'), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Top Warning Bar */}
      <div
        id="top-warning-bar"
        className="fixed top-0 left-0 right-0 z-50 bg-[#30372A] text-[#E5E0DC] uppercase tracking-widest font-semibold flex items-center justify-center border-b border-white/5 h-[24px] lg:h-[26px] text-[9.5px] lg:text-[10px] leading-none py-0"
      >
        <span className="whitespace-nowrap overflow-hidden text-ellipsis">
          Entregamos para todo o Rio Grande do Sul
        </span>
      </div>

      {/* Main Header */}
      <header
        id="app-header"
        className={`fixed left-0 right-0 z-50 transition-all duration-300 h-[58px] lg:h-[68px] top-[24px] lg:top-[26px] ${
          isScrolled
            ? 'bg-[#E5E0DC]/90 backdrop-blur-md border-b border-[#615F55]/10 shadow-sm'
            : 'bg-[#E5E0DC] border-b border-[#615F55]/10 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-[18px] md:px-12 h-full flex items-center justify-between">
          
          {/* Logo Brambatti */}
          <a
            id="header-logo-link"
            href="#inicio"
            className="group flex items-center focus:outline-none py-0 my-0"
          >
            <img
              src={logoImg}
              alt="Brambatti Distribuidora"
              referrerPolicy="no-referrer"
              className="w-[125px] lg:w-[155px] h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.01] my-0 py-0"
              style={{ maxHeight: '100%' }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-[32px] my-0 py-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[13px] font-normal text-[#615F55] hover:text-[#000000] tracking-wider transition-colors relative py-1 leading-none after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#000000] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:block my-0 py-0">
            <button
              id="header-cta-btn"
              onClick={handleConsultorClick}
              className="inline-flex items-center justify-center gap-1.5 bg-[#48523B] hover:bg-[#30372A] text-[#E5E0DC] font-sans text-[11px] uppercase tracking-widest font-semibold h-[40px] px-[22px] rounded-none transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#48523B] shadow-sm hover:shadow-md leading-none my-0"
            >
              Fale com um consultor
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger (Hamburger Button) */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-[40px] h-[40px] flex items-center justify-center p-0 text-[#000000] hover:text-[#48523B] focus:outline-none bg-transparent my-0"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-[22px] h-[22px]" strokeWidth={1.5} />
            ) : (
              <Menu className="w-[22px] h-[22px]" strokeWidth={1.5} />
            )}
          </button>
          
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#E5E0DC] pt-24 px-6 md:px-12 flex flex-col justify-between pb-12 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-xl font-medium text-[#615F55] hover:text-[#48523B] py-2 border-b border-[#615F55]/10"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <button
                id="mobile-drawer-cta"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleConsultorClick();
                }}
                className="w-full text-center bg-[#48523B] hover:bg-[#30372A] text-[#E5E0DC] font-sans text-sm uppercase tracking-widest font-semibold py-4 px-6 rounded-none transition-colors"
              >
                Fale com um consultor
              </button>
              
              <div className="text-center">
                <p className="font-sans text-xs text-[#615F55]/80">
                  Distribuidora Oficial Ecosmetics no RS
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
