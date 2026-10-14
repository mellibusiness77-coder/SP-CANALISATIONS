import React from 'react';
import { Send, FileText, CheckCircle2, Video, Smartphone, Clock, Sparkles } from 'lucide-react';

export const EquipmentTeletransmission: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-[#EAE5D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#FAF9F5] to-[#F5F1E6] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E2DBD0] shadow-sm relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: The Teletransmission Process */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white border border-[#D4AF37]/35 text-xs font-semibold text-[#8C6218] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
                <span>Exclusivité SP CANALISATIONS</span>
              </div>

              <h2 className="font-luxury text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight mb-4">
                Télé-Transmission Immédiate :{' '}
                <span className="text-gold-gradient">
                  Fini les délais de compte rendu
                </span>
              </h2>

              <p className="text-base text-[#57534E] font-light leading-relaxed mb-8">
                Parce que chaque heure compte pour la gestion d&apos;une copropriété, d&apos;un local commercial ou d&apos;un sinistre d&apos;assurance, nous avons digitalisé l&apos;intégralité de notre chaîne d&apos;intervention.
              </p>

              {/* 4 Steps Formula */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-[#EAE4D5] shadow-2xs">
                  <span className="text-xs font-bold text-[#8C6218] uppercase tracking-wider block mb-1">
                    Étape 1
                  </span>
                  <h4 className="font-luxury font-bold text-sm text-[#1C1917] mb-1">
                    Une Intervention
                  </h4>
                  <p className="text-xs text-[#78716C]">
                    Arrivée rapide de notre camion hydrocureur ou véhicule atelier avec technicien qualifié.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#EAE4D5] shadow-2xs">
                  <span className="text-xs font-bold text-[#8C6218] uppercase tracking-wider block mb-1">
                    Étape 2
                  </span>
                  <h4 className="font-luxury font-bold text-sm text-[#1C1917] mb-1">
                    Un Résultat
                  </h4>
                  <p className="text-xs text-[#78716C]">
                    Rétablissement du flux, nettoyage des parois ou localisation précise de l&apos;anomalie.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#EAE4D5] shadow-2xs">
                  <span className="text-xs font-bold text-[#8C6218] uppercase tracking-wider block mb-1">
                    Étape 3
                  </span>
                  <h4 className="font-luxury font-bold text-sm text-[#1C1917] mb-1">
                    Une Conclusion
                  </h4>
                  <p className="text-xs text-[#78716C]">
                    Diagnostic clair avec photos horodatées, métrage exact et préconisations de pérennité.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#EAE4D5] shadow-2xs">
                  <span className="text-xs font-bold text-[#8C6218] uppercase tracking-wider block mb-1">
                    Étape 4
                  </span>
                  <h4 className="font-luxury font-bold text-sm text-[#1C1917] mb-1">
                    Transmission Immédiate
                  </h4>
                  <p className="text-xs text-[#78716C]">
                    Rapport officiel PDF et flux vidéo envoyés en direct par WhatsApp et email avant départ du site.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-[#1C1917]">
                <CheckCircle2 className="w-4 h-4 text-[#B38728]" />
                <span>Document opposable aux assurances, syndics et tribunaux</span>
              </div>
            </div>

            {/* Right Column: Visual representation of live digital receipt */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 border border-[#DFD7C7] shadow-md">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#B38728]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                      Rapport d&apos;Intervention N° SP-2026-884
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    Transmis
                  </span>
                </div>

                <div className="space-y-3 text-xs text-stone-600">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Date & Heure :</span>
                    <span className="font-medium text-stone-900">Aujourd&apos;hui · Horodaté</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Matériel utilisé :</span>
                    <span className="font-medium text-stone-900">Hydrocureur 400 bars & Caméra HD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Diagnostic :</span>
                    <span className="font-medium text-stone-900">Obstruction résolue / Écoulement 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Accès vidéo :</span>
                    <span className="font-medium text-[#8C6218] underline">Lien streaming HD sécurisé</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#25D366]" />
                    <span className="text-xs text-stone-700 font-medium">Reçu sur WhatsApp client</span>
                  </div>
                  <span className="text-[11px] text-stone-400">Délai : 0 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
