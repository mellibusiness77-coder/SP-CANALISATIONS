import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  PhoneCall, 
  Sparkles, 
  Clock, 
  MapPin, 
  User, 
  ShieldCheck
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

  const WHATSAPP_NUMBER = '33699382519';

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const text = encodeURIComponent(generateWhatsAppMessage());
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
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
                  Précisions sur la situation
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

          {/* Column 2: Direct Assistance & Emergency Hotline */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Callout */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D5] shadow-sm">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#2E7D32] font-bold">
                    Échange Direct WhatsApp
                  </span>
                  <h4 className="font-luxury text-xl font-bold text-[#1C1917] mt-0.5 mb-1">
                    Contact Instantané 24/7
                  </h4>
                  <p className="text-xs text-[#57534E] font-light leading-relaxed">
                    Besoin d&apos;envoyer une photo de votre installation ou d&apos;une réponse immédiate ? Ouvrez directement une discussion avec nos techniciens.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/33699382519"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Écrire sur WhatsApp : 06 99 38 25 19</span>
              </a>
            </div>

            {/* Availability & Emergency Information Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D5] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7EE] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#B38728]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8C6218] font-bold">
                    Permanence & Disponibilité
                  </span>
                  <h4 className="font-luxury text-xl font-bold text-[#1C1917] mt-0.5 mb-1">
                    Disponible 24H/24 & 7J/7
                  </h4>
                  <p className="text-xs text-[#57534E] font-light leading-relaxed">
                    Notre équipe d&apos;astreinte est mobilisée sans interruption pour répondre à toutes vos urgences et demandes d&apos;assainissement et de plomberie.
                  </p>
                </div>
              </div>
            </div>

            {/* Commitment badge */}
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E5E0D2] flex items-center gap-3 text-xs text-[#57534E]">
              <Sparkles className="w-4 h-4 text-[#B38728] shrink-0" />
              <span>
                Interventions d&apos;urgence sur l&apos;ensemble de Paris et l&apos;Île-de-France.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
