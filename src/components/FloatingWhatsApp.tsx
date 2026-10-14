import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenModal }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* Direct Call Button (Compact) */}
      <a
        href="tel:0189712040"
        className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-full bg-white text-[#1C1917] border border-[#D4AF37]/40 shadow-lg text-xs font-semibold hover:bg-[#FAF9F5] transition-all hover:scale-105"
        title="Appeler l'astreinte 24h/24"
      >
        <Phone className="w-3.5 h-3.5 text-[#B38728]" />
        <span>Urgence : 01 89 71 20 40</span>
      </a>

      {/* WhatsApp Pulse Floating Button */}
      <button
        onClick={onOpenModal}
        className="flex items-center gap-2.5 py-3 px-4 sm:px-5 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] transition-all hover:scale-105 cursor-pointer group"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="text-xs font-bold tracking-wide">
          WhatsApp 24/7
        </span>
      </button>
    </div>
  );
};
