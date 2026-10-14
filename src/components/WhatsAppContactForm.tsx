import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  Copy, 
  Check, 
  PhoneCall, 
  Sparkles, 
  Clock, 
  MapPin, 
  User, 
  AlertTriangle 
} from 'lucide-react';

interface WhatsAppContactFormProps {
  initialService?: string;
}

export const WhatsAppContactForm: React.FC<WhatsAppContactFormProps> = ({ initialService = '' }) => {
  const [pole, setPole] = useState<'Assainissement' | 'Plomberie' | 'Urgence 24/7'>(
    initialService?.toLowerCase().includes('plomb') ? 'Plomberie' : 'Assainissement'
  );

  const [service, setService] = useState<string>(initialService || 'Débouchage Haute Pression (Hydrocurage)');
  const [urgency, setUrgency] = useState<string>('Urgence immédiate (< 1 heure)');
  const [clientType, setClientType] = useState<string>('Particulier');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Suggested services by pole
  const serviceOptions = {
    Assainissement: [
      'Débouchage Haute Pression (Hydrocurage)',
      'Inspection Caméra Vidéo HD & Rapport',
      'Curage & Détartrage de Colonne',
      'Pompage Fosse Septique / Bac à Graisse',
      'Fraisage Robotisé Racines / Calcaire',
      'Autre demande Assainissement',
    ],
    Plomberie: [
      'Dépannage Fuite d’Eau Urgente',
      'Recherche de Fuite Non Destructive',
      'Remplacement / Panne Chauffe-eau',
      'Débouchage WC & Sanitaires',
      'Rénovation Plomberie / Robinetterie',
      'Autre demande Plomberie',
    ],
    'Urgence 24/7': [
      'Débordement majeur / Inondation',
      'Canalisation principale bouchée',
      'Rupture de canalisation d’eau',
      'Refoulement égout / fosse',
      'Urgence Copropriété / Syndic',
    ],
  };

  // Compile formatted message for WhatsApp
  const generateWhatsAppMessage = () => {
    const lines = [
      `*SP CANALISATIONS - Demande d'intervention*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `• *Pôle :* ${pole}`,
      `• *Prestation :* ${service}`,
      `• *Délai souhaité :* ${urgency}`,
      `• *Profil :* ${clientType}`,
      name ? `• *Contact :* ${name}` : null,
      phone ? `• *Téléphone :* ${phone}` : null,
      location ? `• *Localisation :* ${location}` : null,
      message ? `• *Précisions :* ${message}` : null,
      `━━━━━━━━━━━━━━━━━━━━`,
      `_Envoyé via le site officiel SP CANALISATIONS_`,
    ].filter(Boolean);

    return lines.join('\n');
  };

  // Official contact number for WhatsApp: format 33189712040 / 33600000000
  const WHATSAPP_NUMBER = '33189712040';

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const text = encodeURIComponent(generateWhatsAppMessage());
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="devis-whatsapp" className="py-24 bg-[#FAF9F5] border-t border-[#EAE5D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white border border-[#D4AF37]/30 text-xs font-semibold text-[#8C6218] shadow-sm">
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Assistance & Devis Direct sur WhatsApp</span>
          </div>

          <h2 className="font-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight mb-4">
            Contactez notre Équipe d&apos;Astreinte
          </h2>

          <p className="text-base sm:text-lg text-[#57534E] font-light leading-relaxed">
            Remplissez les informations ci-dessous pour transmettre automatiquement votre dossier
            à nos techniciens en astreinte. Réponse instantanée et engagement d&apos;intervention 24/7.
          </p>
        </div>

        {/* 2-Column Split: Interactive Form + Real-Time Live Message Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: The Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E2D5] shadow-sm">
            <form onSubmit={handleSendWhatsApp} className="space-y-6">
              {/* Pole Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#78716C] font-semibold mb-2">
                  1. Sélectionner le Pôle d&apos;Intervention
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Assainissement', 'Plomberie', 'Urgence 24/7'] as const).map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => {
                        setPole(p);
                        setService(serviceOptions[p][0]);
                      }}
                      className={`py-3 px-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all text-center cursor-pointer ${
                        pole === p
                          ? 'bg-[#FAF7EE] border-[#B38728] text-[#8C6218] shadow-xs'
                          : 'bg-white border-[#E8E4DA] text-[#57534E] hover:bg-[#FAF9F5]'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#78716C] font-semibold mb-2">
                  2. Prestation Spécifique
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-[#E5DFD2] rounded-xl px-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 transition-all"
                >
                  {serviceOptions[pole].map((s, idx) => (
                    <option key={idx} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Urgency & Client Type Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#78716C] font-semibold mb-2">
                    3. Niveau d&apos;Urgence
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full bg-[#FAF9F5] border border-[#E5DFD2] rounded-xl px-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  >
                    <option value="Urgence immédiate (< 1 heure)">🚨 Urgence immédiate (&lt; 1 heure)</option>
                    <option value="Dans la journée (sous 4h)">⚡ Dans la journée (sous 4h)</option>
                    <option value="Sur rendez-vous planifié">📅 Sur rendez-vous planifié</option>
                    <option value="Demande de devis préalable">📝 Demande de devis gratuit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#78716C] font-semibold mb-2">
                    4. Vous êtes
                  </label>
                  <select
                    value={clientType}
                    onChange={(e) => setClientType(e.target.value)}
                    className="w-full bg-[#FAF9F5] border border-[#E5DFD2] rounded-xl px-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  >
                    <option value="Particulier">Particulier (Maison / Appartement)</option>
                    <option value="Syndic de copropriété">Syndic de copropriété</option>
                    <option value="Gestionnaire immobilier">Gestionnaire immobilier</option>
                    <option value="Entreprise / Commerce">Entreprise / Commerce</option>
                    <option value="Collectivité / Mairie">Collectivité / Établissement public</option>
                  </select>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#78716C] font-semibold mb-2">
                    Votre Nom & Prénom / Société
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#A8A29E] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="ex: Jean Dupont"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#FAF9F5] border border-[#E5DFD2] rounded-xl pl-10 pr-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#78716C] font-semibold mb-2">
                    Numéro de Téléphone
                  </label>
                  <div className="relative">
                    <PhoneCall className="w-4 h-4 text-[#A8A29E] absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="ex: 06 12 34 56 78"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FAF9F5] border border-[#E5DFD2] rounded-xl pl-10 pr-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#78716C] font-semibold mb-2">
                  Ville ou Code Postal d&apos;Intervention
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#A8A29E] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="ex: 75008 Paris, Neuilly-sur-Seine, Versailles, Melun..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#FAF9F5] border border-[#E5DFD2] rounded-xl pl-10 pr-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  />
                </div>
              </div>

              {/* Additional message / precision */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#78716C] font-semibold mb-2">
                  Précisions sur la situation (Optionnel)
                </label>
                <textarea
                  rows={3}
                  placeholder="Décrivez les symptômes : odeurs, débordement au sous-sol, WC bouché, fuite sous plancher, historique..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-[#E5DFD2] rounded-xl px-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                />
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-gold-gradient bg-gold-gradient-hover shadow-lg gold-shadow-hover transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Envoyer la demande sur WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[#78716C]">
                <Clock className="w-3.5 h-3.5 text-[#B38728]" />
                <span>Prise en charge instantanée 24/7 sans formulaire fastidieux</span>
              </div>
            </form>
          </div>

          {/* Column 2: Live WhatsApp Message Simulator & Quick Access */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card Simulator */}
            <div className="bg-[#EFEAE2] rounded-3xl p-6 sm:p-8 border border-[#DFD8CC] shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D8D0C2]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold shadow-xs">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#1C1917]">
                      SP CANALISATIONS Support
                    </h4>
                    <p className="text-[11px] text-[#2E7D32] font-medium flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                      En ligne · Astreinte 24h/24
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="p-2 rounded-lg bg-white/80 hover:bg-white text-stone-700 text-xs flex items-center gap-1.5 transition-colors cursor-pointer border border-stone-200"
                  title="Copier le texte"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-[11px] font-medium text-emerald-600">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span className="text-[11px] font-medium">Copier</span>
                    </>
                  )}
                </button>
              </div>

              {/* Chat bubble simulator */}
              <div className="bg-white rounded-2xl rounded-tl-sm p-4 text-xs font-mono text-[#292524] shadow-xs leading-relaxed whitespace-pre-wrap border border-stone-200">
                {generateWhatsAppMessage()}
              </div>

              <div className="mt-4 text-[11px] text-stone-500 text-right">
                Aperçu en temps réel du message généré
              </div>
            </div>

            {/* Emergency Hotline Direct Call Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D5] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7EE] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6 text-[#B38728]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8C6218] font-bold">
                    Ligne Téléphonique Directe
                  </span>
                  <h4 className="font-luxury text-xl font-bold text-[#1C1917] mt-0.5 mb-1">
                    Besoin d&apos;un technicien au téléphone ?
                  </h4>
                  <p className="text-xs text-[#57534E] font-light mb-4">
                    Pour les situations d&apos;inondation critique ou intervention sous astreinte de nuit, composez immédiatement notre numéro dédié.
                  </p>

                  <a
                    href="tel:0189712040"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAF9F5] hover:bg-[#F4EFE2] border border-[#D4AF37]/50 text-sm font-bold text-[#8C6218] transition-colors"
                  >
                    <PhoneCall className="w-4 h-4 text-[#B38728]" />
                    <span>01 89 71 20 40</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Commitment badge */}
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E5E0D2] flex items-center gap-3 text-xs text-[#57534E]">
              <Sparkles className="w-4 h-4 text-[#B38728] shrink-0" />
              <span>
                Télé-transmission immédiate des vidéos et comptes rendus après intervention.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
