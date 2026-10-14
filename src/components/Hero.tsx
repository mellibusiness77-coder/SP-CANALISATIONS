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
      <section id="accueil" className="relative min-h-[95vh] flex items-center overflow-hidden bg-stone-900">
        {/* Background Parallax Layer - Fully visible & crisp */}
        <div
          className="absolute inset-0 w-full h-[115%] -top-[8%] pointer-events-none will-change-transform"
          style={{
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
          }}
        >
          <img
            src="/src/assets/images/hero_paris_hydrocurage_1791974502127.jpg"
            alt="Camion hydrocureur haute pression SP Canalisations à Paris avec Tour Eiffel"
            className="w-full h-full object-cover object-[center_28%] lg:object-[center_35%] filter brightness-100 contrast-105"
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {/* Minimalist transparent gradient: keeps the photo completely clear while ensuring smooth boundary transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/10" />
        </div>

        {/* Decorative Gold Hairline Border */}
        <div className="absolute left-8 right-8 top-6 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent pointer-events-none" />

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Column: Frosted Glass Luxury Architectural Card */}
            <div className="max-w-2xl w-full bg-[#FAF9F5]/92 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-2xl gold-shadow">
              {/* Top Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 rounded-full bg-white/95 border border-[#D4AF37]/50 shadow-xs text-xs font-medium text-[#785C19]">
                <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
                <span className="uppercase tracking-widest text-[11px] font-semibold text-[#8C6218]">
                  Interventions d&apos;Excellence 24H/24 & 7J/7
                </span>
              </div>

              {/* Main Display Headline with Gold Gradient */}
              <h1 className="font-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1816] leading-[1.18] mb-5 text-balance">
                Haute Précision en{' '}
                <span className="text-gold-gradient block sm:inline">
                  Assainissement
                </span>{' '}
                &{' '}
                <span className="text-gold-gradient block sm:inline">
                  Plomberie
                </span>
              </h1>

              {/* Subtitle Value Proposition */}
              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed mb-6 font-light">
                Entreprise de référence pour particuliers, syndics de copropriété, entreprises et collectivités.
                Équipements hydrodynamiques de pointe et engagement total sur la pérennité de vos installations.
              </p>

              {/* Key Trust Signals */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-xs sm:text-sm text-[#292524]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B38728] shrink-0" />
                  <span>
                    <strong>Télé-transmission immédiate</strong> des comptes rendus
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B38728] shrink-0" />
                  <span>
                    <strong>Camions hydrocureurs</strong> haute pression 400 bars
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B38728] shrink-0" />
                  <span>
                    <strong>Inspection caméra vidéo HD</strong> avec traçage
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B38728] shrink-0" />
                  <span>
                    <strong>Intervention d&apos;urgence</strong> réactive sous 1h
                  </span>
                </div>
              </div>

              {/* Interactive CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onOpenWhatsApp('Demande Urgente')}
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-white bg-gold-gradient bg-gold-gradient-hover shadow-lg gold-shadow-hover transition-all cursor-pointer group"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Demande sur WhatsApp</span>
                </button>

                <a
                  href="#assainissement"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-[#1C1917] bg-white hover:bg-[#FAF7EE] border border-[#D4AF37]/40 shadow-xs transition-all"
                >
                  <span>Nos Prestations</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#B38728]" />
                </a>
              </div>

              {/* Availability notice with WhatsApp number */}
              <div className="mt-6 pt-5 border-t border-[#EAE5D8] flex flex-wrap items-center gap-2.5 text-xs text-[#78716C]">
                <span className="flex items-center gap-1.5 text-[#1C1917] font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#B38728]" />
                  Astreinte 24/7 :
                </span>
                <a
                  href="https://wa.me/33699382519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#25D366] hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp : 06 99 38 25 19</span>
                </a>
              </div>
            </div>

            {/* Right Column: Floating Photo Badge with Lightbox Zoom Button */}
            <div className="flex flex-col items-center lg:items-end gap-3">
              <button
                onClick={() => setIsPhotoLightboxOpen(true)}
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-xl hover:bg-white transition-all text-xs text-stone-800 cursor-pointer hover:scale-105"
              >
                <Maximize2 className="w-4 h-4 text-[#B38728] group-hover:rotate-45 transition-transform" />
                <span className="font-semibold">Agrandir la photo</span>
              </button>

              <div className="bg-black/60 backdrop-blur-md rounded-2xl px-4 py-2 text-white border border-white/20 text-xs hidden sm:block">
                <span>Véhicule hydrocureur SP Canalisations · Paris & Île-de-France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Quiet trust signals */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#FAF9F5]/95 backdrop-blur-md border-t border-[#EAE5D8] py-3.5 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#57534E]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B38728]" />
              <span className="font-semibold text-[#1C1917]">SP CANALISATIONS</span>
              <span>· Partenaire certifié Île-de-France</span>
            </div>
            <div className="flex items-center gap-6">
              <span>Particuliers</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Syndics de copropriété</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Entreprises & Commerces</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Collectivités</span>
            </div>
            <div className="flex items-center gap-2 font-medium text-[#8C6218]">
              <Zap className="w-3.5 h-3.5" />
              <span>Interventions tous arrondissements & départements</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full-screen Lightbox Modal to view the photo in high resolution */}
      {isPhotoLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsPhotoLightboxOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src="/src/assets/images/hero_paris_hydrocurage_1791974502127.jpg"
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
