import React from 'react';
import { Logo } from './Logo';
import { MessageCircle, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: (subject?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp }) => {
  return (
    <footer className="bg-[#1C1917] text-[#EDE8D0] pt-16 pb-12 border-t border-[#D4AF37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size={48} showText={true} className="brightness-125" />
            <p className="text-xs sm:text-sm text-[#BDB6A8] font-light leading-relaxed max-w-sm pt-2">
              SP CANALISATIONS est votre partenaire d&apos;excellence en Assainissement de haute technologie
              et Plomberie générale de prestige. Intervention 24h/24 et 7j/7 avec télé-transmission immédiate des comptes rendus.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#D4AF37]">
              <ShieldCheck className="w-4 h-4" />
              <span>Agrément Assurances & Conformité Normes Européennes</span>
            </div>
          </div>

          {/* Quick Links Assainissement */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-luxury text-sm font-bold text-[#FAF7EE] uppercase tracking-wider">
              Pôle Assainissement
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li>
                <a href="#assainissement" className="hover:text-[#D4AF37] transition-colors">
                  Débouchage Haute Pression (400 Bars)
                </a>
              </li>
              <li>
                <a href="#assainissement" className="hover:text-[#D4AF37] transition-colors">
                  Inspection Caméra Vidéo HD & Traçage
                </a>
              </li>
              <li>
                <a href="#assainissement" className="hover:text-[#D4AF37] transition-colors">
                  Curage & Détartrage Hydrodynamique
                </a>
              </li>
              <li>
                <a href="#assainissement" className="hover:text-[#D4AF37] transition-colors">
                  Fraisage Robotisé de Racines & Calcaire
                </a>
              </li>
              <li>
                <a href="#assainissement" className="hover:text-[#D4AF37] transition-colors">
                  Pompage Fosses Septiques & Bacs à Graisse
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Plomberie */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-luxury text-sm font-bold text-[#FAF7EE] uppercase tracking-wider">
              Pôle Plomberie
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li>
                <a href="#plomberie" className="hover:text-[#D4AF37] transition-colors">
                  Dépannage Fuite d&apos;Eau 24/7
                </a>
              </li>
              <li>
                <a href="#plomberie" className="hover:text-[#D4AF37] transition-colors">
                  Recherche de Fuite Non Destructive
                </a>
              </li>
              <li>
                <a href="#plomberie" className="hover:text-[#D4AF37] transition-colors">
                  Remplacement Chauffe-Eau Express
                </a>
              </li>
              <li>
                <a href="#plomberie" className="hover:text-[#D4AF37] transition-colors">
                  Rénovation Sanitaire de Prestige
                </a>
              </li>
              <li>
                <a href="#plomberie" className="hover:text-[#D4AF37] transition-colors">
                  Contrats d&apos;Entretien Copropriétés
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Intervention Area */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-luxury text-sm font-bold text-[#FAF7EE] uppercase tracking-wider">
              Permanence & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#A8A29E]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-[#EDE8D0] font-semibold">24H/24 & 7J/7 sans interruption</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/33699382519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] text-[#FAF7EE] font-medium transition-colors"
                >
                  WhatsApp 24/7 : 06 99 38 25 19
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Paris (75) & Toute l&apos;Île-de-France (77, 78, 91, 92, 93, 94, 95)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C827A] gap-4">
          <p>© {new Date().getFullYear()} SP CANALISATIONS. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#accueil" className="hover:text-[#D4AF37] transition-colors">
              Haut de page
            </a>
            <span>·</span>
            <a href="#devis-whatsapp" className="hover:text-[#D4AF37] transition-colors">
              Devis Gratuit
            </a>
            <span>·</span>
            <span className="text-[#78716C]">Assainissement & Plomberie de Haute Précision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
