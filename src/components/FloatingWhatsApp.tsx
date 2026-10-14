import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenModal }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* WhatsApp Floating Button */}
      <button
        onClick={onOpenModal}
        className="flex items-center gap-2.5 py-3.5 px-5 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] transition-all hover:scale-105 cursor-pointer group"
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
