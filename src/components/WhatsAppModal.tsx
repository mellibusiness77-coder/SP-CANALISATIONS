import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, Clock, Send, ShieldCheck } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetSubject?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  presetSubject = '',
}) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [need, setNeed] = useState(presetSubject || 'Urgence Assainissement / Plomberie');

  useEffect(() => {
    if (presetSubject) {
      setNeed(presetSubject);
    }
  }, [presetSubject]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Bonjour SP CANALISATIONS,\nJe vous contacte concernant : ${need}.\n${name ? `Nom : ${name}\n` : ''}${city ? `Ville : ${city}\n` : ''}Merci de me recontacter rapidement.`;
    const url = `https://wa.me/33189712040?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#EAE5D8] relative animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-md">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-luxury text-xl font-bold text-[#1C1917]">
              Contact WhatsApp Direct
            </h3>
            <p className="text-xs text-[#2E7D32] font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              Astreinte 24h/24 & 7j/7 disponible
            </p>
          </div>
        </div>

        <p className="text-xs text-[#57534E] mb-6 leading-relaxed">
          Échangez immédiatement avec notre permanence technique. Vous pouvez joindre des photos de votre sinistre ou de vos installations sur WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1.5">
              Objet de votre demande
            </label>
            <input
              type="text"
              required
              value={need}
              onChange={(e) => setNeed(e.target.value)}
              placeholder="ex: WC bouché, fuite sous évier, inspection caméra..."
              className="w-full bg-[#FAF9F5] border border-[#E5DFD2] rounded-xl px-3.5 py-2.5 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1.5">
              Votre Nom (Optionnel)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ex: M. Martin"
              className="w-full bg-[#FAF9F5] border border-[#E5DFD2] rounded-xl px-3.5 py-2.5 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1.5">
              Ville ou Code Postal
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="ex: 75016 Paris, Boulogne, Saint-Denis..."
              className="w-full bg-[#FAF9F5] border border-[#E5DFD2] rounded-xl px-3.5 py-2.5 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gold-gradient hover:opacity-95 shadow-md gold-shadow transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Lancer la conversation WhatsApp</span>
            </button>
          </div>
        </form>

        <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <a
            href="tel:0189712040"
            className="flex items-center gap-1.5 text-[#8C6218] font-semibold hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Appeler au 01 89 71 20 40</span>
          </a>
          <span className="flex items-center gap-1 text-stone-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            Télé-transmission immédiate
          </span>
        </div>
      </div>
    </div>
  );
};
