import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  ArrowDown, 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  Sparkles, 
  Maximize2, 
  X 
} from 'lucide-react';

interface HeroProps {
  onOpenWhatsApp: (subject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsApp }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle discrete parallax offset
  const parallaxOffset = Math.min(scrollY * 0.18, 90);

  return (
    <>
      <section id="accueil" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-stone-900">
        {/* Background Parallax Layer - Fully uncovered and visible */}
        <div
          className="absolute inset-0 w-full h-[115%] -top-[8%] pointer-events-none will-change-transform"
          style={{
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
          }}
        >
          <img
            src="/src/assets/images/hero_sp_canalisations_paris_1791978772210.jpg"
            alt="Camion hydrocureur SP Canalisations à Paris avec Tour Eiffel"
            className="w-full h-full object-cover object-[center_35%] filter brightness-95 contrast-[1.04]"
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {/* Soft vignette strictly at borders for contrast */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/35 pointer-events-none" />
        </div>

        {/* Decorative Gold Hairline Border */}
        <div className="absolute left-8 right-8 top-6 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent pointer-events-none" />

        {/* Lightbox full screen button in top right */}
        <div className="absolute top-8 right-6 sm:right-10 z-20">
          <button
            onClick={() => setIsPhotoLightboxOpen(true)}
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/30 text-white hover:bg-black/80 transition-all text-xs cursor-pointer shadow-lg"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37] group-hover:rotate-45 transition-transform" />
            <span className="font-medium hidden sm:inline">Plein écran</span>
          </button>
        </div>

        {/* Centered Content Directly on Image - ZERO Grey/White Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center">
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-black/40 backdrop-blur-md border border-[#D4AF37]/60 text-xs text-[#F3E5AB] shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="uppercase tracking-widest text-[11px] sm:text-xs font-semibold">
              SP CANALISATIONS · Paris &amp; Île-de-France · 24H/24 &amp; 7J/7
            </span>
          </div>

          {/* Centered Main Title requested by user */}
          <h1 className="font-luxury text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] max-w-4xl">
            Haute Précision en{' '}
            <span className="text-gold-bright inline-block drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Assainissement
            </span>{' '}
            &amp;{' '}
            <span className="text-gold-bright inline-block drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Plomberie
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-stone-100 max-w-2xl font-light mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] leading-relaxed">
            Hydrocurage haute pression 400 bars, inspection caméra vidéo HD et interventions d&apos;urgence pour particuliers, syndics et entreprises.
          </p>

          {/* Centered Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/33699382519"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-xl hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp : 06 99 38 25 19</span>
            </a>

            <a
              href="#assainissement"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-[#D4AF37]/50 shadow-lg transition-all"
            >
              <span>Découvrir nos prestations</span>
              <ArrowDown className="w-4 h-4 text-[#D4AF37]" />
            </a>
          </div>

          {/* Quick proof badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-200 mt-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              Télé-transmission immédiate
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              Intervention sous 1h en Île-de-France
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              Disponible 24h/24 &amp; 7j/7
            </span>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#FAF9F5]/95 backdrop-blur-md border-t border-[#EAE5D8] py-3 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#57534E]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B38728]" />
              <span className="font-semibold text-[#1C1917]">SP CANALISATIONS</span>
              <span>· Véhicules d&apos;intervention Île-de-France</span>
            </div>
            <div className="flex items-center gap-6">
              <span>Particuliers</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Syndics &amp; Copropriétés</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Entreprises</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Collectivités</span>
            </div>
            <div className="flex items-center gap-2 font-medium text-[#8C6218]">
              <Zap className="w-3.5 h-3.5" />
              <span>Interventions urgentes 24h/24 &amp; 7j/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full-screen Lightbox Modal */}
      {isPhotoLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsPhotoLightboxOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src="/src/assets/images/hero_sp_canalisations_paris_1791978772210.jpg"
              alt="Camion hydrocureur SP Canalisations à Paris avec Tour Eiffel"
              className="w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl border border-white/20"
            />

            <div className="mt-3 text-center text-xs text-stone-300">
              Véhicule hydrocureur d&apos;intervention haute pression SP CANALISATIONS à Paris
            </div>
          </div>
        </div>
      )}
    </>
  );
};
