import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageCircle, Menu, X, ShieldCheck, Clock } from 'lucide-react';

interface HeaderProps {
  onOpenWhatsAppModal?: (presetSubject?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWhatsAppModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#1C1917] text-[#EDE8D0] text-xs py-2 px-4 border-b border-[#D4AF37]/20 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium tracking-wide">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <strong className="text-[#D4AF37] font-semibold">24H/24 & 7J/7</strong>
              <span className="hidden sm:inline text-neutral-400">· Interventions Rapides Île-de-France</span>
            </span>
            <span className="hidden md:inline text-neutral-500">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              Télé-transmission immédiate des comptes rendus
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href="tel:0189712040"
              className="flex items-center gap-1.5 text-[#FAF7EE] hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-semibold tracking-wider">01 89 71 20 40</span>
            </a>
            <button
              onClick={() => onOpenWhatsAppModal?.('Urgence Immédiate')}
              className="hidden sm:flex items-center gap-1 text-[#25D366] hover:text-white transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Header adhering strictly to the 3-zone contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#E7E2D6] py-2.5'
            : 'bg-[#FAF9F5] border-b border-[#EAE5D8] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark & Logo in top left */}
          <a
            href="#"
            className="flex items-center whitespace-nowrap shrink-0 group focus:outline-none"
            aria-label="SP CANALISATIONS Accueil"
          >
            <Logo size={46} showText={true} />
          </a>

          {/* Zone 2: 4-5 single-line clean text nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#44403C]">
            <a
              href="#accueil"
              className="hover:text-[#B38728] transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              Accueil
            </a>
            <a
              href="#assainissement"
              className="hover:text-[#B38728] transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              Assainissement
            </a>
            <a
              href="#plomberie"
              className="hover:text-[#B38728] transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              Plomberie
            </a>
            <a
              href="#pourquoi-nous"
              className="hover:text-[#B38728] transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              Nos Engagements
            </a>
            <a
              href="#devis-whatsapp"
              className="hover:text-[#B38728] transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              Devis & Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenWhatsAppModal?.('Demande de devis ou urgence')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gold-gradient hover:opacity-95 transition-all shadow-md gold-shadow whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" fill="#25D366" />
              <span>Contact WhatsApp 24/7</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenWhatsAppModal?.('Urgence')}
              className="p-2 text-[#25D366] bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 rounded-lg hover:bg-stone-100 transition-colors focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F5] border-t border-[#EAE5D8] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3 py-2">
              <a
                href="#accueil"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md font-medium text-stone-800 hover:bg-[#F3EFE6]"
              >
                Accueil
              </a>
              <a
                href="#assainissement"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md font-medium text-stone-800 hover:bg-[#F3EFE6]"
              >
                Assainissement (Curage & Débouchage)
              </a>
              <a
                href="#plomberie"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md font-medium text-stone-800 hover:bg-[#F3EFE6]"
              >
                Plomberie & Dépannage
              </a>
              <a
                href="#pourquoi-nous"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md font-medium text-stone-800 hover:bg-[#F3EFE6]"
              >
                Pourquoi Choisir SP Canalisations
              </a>
              <a
                href="#devis-whatsapp"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md font-medium text-stone-800 hover:bg-[#F3EFE6]"
              >
                Formulaire WhatsApp
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal?.('Urgence Mobile');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-white bg-gold-gradient shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Ouvrir WhatsApp</span>
              </button>
              <a
                href="tel:0189712040"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium text-stone-800 bg-white border border-stone-300"
              >
                <Phone className="w-4 h-4 text-[#B38728]" />
                <span>Appel Direct : 01 89 71 20 40</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
