import React, { useState, useEffect } from 'react';
import { ShieldCheck, Zap, ArrowDown, CheckCircle2, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenWhatsApp: (subject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsApp }) => {
  const [scrollY, setScrollY] = useState(0);

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

  // Subtle discrete parallax offset (capped to avoid disconnect)
  const parallaxOffset = Math.min(scrollY * 0.22, 120);

  return (
    <section id="accueil" className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#FAF9F5]">
      {/* Background Parallax Layer */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
        }}
      >
        <img
          src="/src/assets/images/hero_paris_hydrocurage_1791974502127.jpg"
          alt="Camion hydrocureur haute pression SP Canalisations à Paris avec Tour Eiffel"
          className="w-full h-full object-cover object-center scale-105 filter brightness-95 contrast-[1.03]"
          loading="eager"
          referrerPolicy="no-referrer"
        />

        {/* Sophisticated Luxury Light Scrim: Allows the Paris view to shine while keeping text 100% readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5]/96 via-[#FAF9F5]/90 to-[#FAF9F5]/75 lg:to-[#FAF9F5]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-transparent to-[#FAF9F5]/40" />
      </div>

      {/* Decorative Gold Hairline Borders */}
      <div className="absolute left-8 right-8 top-6 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Subtle Editorial Top Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full bg-white/80 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm text-xs font-medium text-[#785C19]">
            <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
            <span className="uppercase tracking-widest text-[11px] font-semibold text-[#8C6218]">
              Interventions d'Excellence 24H/24 & 7J/7
            </span>
          </div>

          {/* Main Display Headline with Gold Accent */}
          <h1 className="font-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1816] leading-[1.15] mb-6 text-balance">
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
          <p className="text-base sm:text-lg text-[#44403C] leading-relaxed mb-8 max-w-2xl font-light">
            Entreprise de référence pour particuliers, syndics de copropriété, entreprises et collectivités.
            Équipements hydrodynamiques de pointe, télé-transmission immédiate des rapports d&apos;inspection
            et engagement total sur la pérennité de vos installations.
          </p>

          {/* Key Trust Signals (No pills, clean unboxed typographic proof) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-sm text-[#292524]">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#B38728] shrink-0" />
              <span>
                <strong>Télé-transmission immédiate</strong> des comptes rendus
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#B38728] shrink-0" />
              <span>
                <strong>Véhicules hydrocureurs</strong> haute pression autonomes
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#B38728] shrink-0" />
              <span>
                <strong>Inspection caméra vidéo HD</strong> avec traçage réseau
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#B38728] shrink-0" />
              <span>
                <strong>Dépannage d&apos;urgence</strong> réactif sous 1 heure
              </span>
            </div>
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onOpenWhatsApp('Demande Urgente')}
              className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-gold-gradient bg-gold-gradient-hover shadow-lg gold-shadow-hover transition-all cursor-pointer group"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Demande d&apos;Intervention sur WhatsApp</span>
            </button>

            <a
              href="#assainissement"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-[#1C1917] bg-white/90 hover:bg-white border border-[#D4AF37]/35 shadow-sm transition-all"
            >
              <span>Découvrir nos Prestations</span>
              <ArrowDown className="w-4 h-4 text-[#B38728]" />
            </a>
          </div>

          {/* Quick Telephone Hotkey */}
          <div className="mt-8 pt-6 border-t border-[#EAE5D8] flex items-center gap-4 text-xs text-[#78716C]">
            <span className="flex items-center gap-1.5 text-[#1C1917] font-semibold">
              <PhoneCall className="w-3.5 h-3.5 text-[#B38728]" />
              Ligne d&apos;urgence directe :
            </span>
            <a
              href="tel:0189712040"
              className="font-bold text-[#8C6218] hover:underline tracking-wide"
            >
              01 89 71 20 40
            </a>
            <span className="hidden sm:inline text-stone-400">· 7j/7 - 24h/24 sans interruption</span>
          </div>
        </div>
      </div>

      {/* Proof ticker band at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-[#EAE5D8] py-4 hidden md:block">
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
            <span>Collectivités territoriales</span>
          </div>
          <div className="flex items-center gap-2 font-medium text-[#8C6218]">
            <Zap className="w-3.5 h-3.5" />
            <span>Déplacement rapide tous arrondissements & départements</span>
          </div>
        </div>
      </div>
    </section>
  );
};
