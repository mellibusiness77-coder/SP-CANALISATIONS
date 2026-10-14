import React from 'react';
import { Send, Clock, Award, Shield, FileCheck, CheckCircle2, MessageCircle } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenWhatsApp: (subject?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenWhatsApp }) => {
  const pillars = [
    {
      icon: <Send className="w-6 h-6 text-[#B38728]" />,
      title: 'Télé-Transmission Immédiate',
      highlight: 'Fini les délais d’attente',
      description:
        'Une intervention, un résultat, une conclusion et une transmission dans la foulée. Vous recevez vos comptes rendus techniques, vidéos d’inspection et diagnostics directement et sans délai.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#B38728]" />,
      title: 'Disponibilité Réelle 24H/24 & 7J/7',
      highlight: 'Intervention à toute heure',
      description:
        'Une équipe d’astreinte permanente pour les urgences critiques des particuliers, copropriétés et gestionnaires. Déplacement rapide jour, nuit, week-ends et jours fériés.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#B38728]" />,
      title: 'Précision & Matériel de Pointe',
      highlight: 'Zéro compromis sur la qualité',
      description:
        'Camions hydrocureurs dernière génération, caméras endoscopiques haute définition, têtes de fraisage robotisées et outillage de maître artisan pour des résultats durables.',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#B38728]" />,
      title: 'Transparence & Rigueur Absolue',
      highlight: 'Votre satisfaction prioritaire',
      description:
        'Devis clairs et détaillés avant intervention, explications pédagogiques de nos techniciens et respect scrupuleux des normes environnementales et des cahiers des charges syndics.',
    },
  ];

  const clientTypes = [
    {
      type: 'Particuliers',
      desc: 'Maisons individuelles & appartements : débouchage express, fuites d’eau, rénovation sanitaire soignée.',
    },
    {
      type: 'Syndics & Gestionnaires',
      desc: 'Colonnes d’eaux usées, curage préventif d’immeubles, rapports vidéo immédiats pour assemblées générales.',
    },
    {
      type: 'Entreprises & Commerces',
      desc: 'Bacs à graisse restaurant, sanitaires professionnels, contrats d’entretien sans interruption d’activité.',
    },
    {
      type: 'Collectivités & Bailleurs',
      desc: 'Réseaux d’assainissement pluvial et unitaire, pompage et diagnostic certifié des réseaux communaux.',
    },
  ];

  return (
    <section id="pourquoi-nous" className="py-24 bg-white border-t border-[#EAE5D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Presentation Quote Block */}
        <div className="bg-[#FAF9F5] border border-[#E8E2D5] rounded-3xl p-8 sm:p-12 lg:p-16 mb-20 relative overflow-hidden shadow-sm">
          {/* Subtle gold decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#D4AF37]/10 via-transparent to-transparent rounded-bl-full pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#8C6218] font-bold block mb-3">
              Notre Philosophie d&apos;Intervention
            </span>

            <h2 className="font-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight leading-tight mb-6">
              Pourquoi choisir <span className="text-gold-gradient">SP CANALISATIONS</span> ?
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#44403C] font-light leading-relaxed">
              <p className="font-medium text-[#1C1917]">
                « Parce que vous méritez le meilleur. Notre équipe intervient avec une précision professionnelle,
                une rapidité prouvée et un sens du service qui fait toute la différence. »
              </p>
              <p>
                Chaque mission est menée avec rigueur, transparence et efficacité afin d&apos;assurer la pérennité
                de vos installations. Avec SP CANALISATIONS, vous bénéficiez d&apos;un partenaire fiable,
                disponible <strong>24H/24 et 7J/7</strong>, qui agit avec sérieux et vous garantit des résultats durables.
              </p>
              <p className="pt-2 text-[#8C6218] font-semibold flex items-center gap-2">
                <FileCheck className="w-5 h-5 shrink-0" />
                <span>
                  Télé-transmission immédiate : fini les délais de réception de compte rendu —
                  une intervention, un résultat, une conclusion et une transmission dans la foulée.
                </span>
              </p>
              <p className="text-sm text-[#78716C] italic pt-1">
                Votre satisfaction est notre priorité absolue.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EAE5D8] flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenWhatsApp('Demande de prise de contact')}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-gold-gradient hover:opacity-95 shadow-md gold-shadow transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Échanger avec notre Équipe sur WhatsApp</span>
              </button>
              <span className="text-xs text-[#78716C]">
                Réponse instantanée 24/7 par nos techniciens qualifiés
              </span>
            </div>
          </div>
        </div>

        {/* 4 Foundation Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F5] rounded-2xl p-7 border border-[#EBE6DA] hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E0D4] flex items-center justify-center mb-5 shadow-xs">
                  {pillar.icon}
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#8C6218] font-semibold block mb-1">
                  {pillar.highlight}
                </span>
                <h3 className="font-luxury text-lg font-bold text-[#1C1917] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Segments Accompanied */}
        <div className="pt-12 border-t border-[#EAE5D8]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8C6218] font-semibold">
              Clients & Partenaires
            </span>
            <h3 className="font-luxury text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1 mb-3">
              Un Accompagnement Dédié à Chaque Profil
            </h3>
            <p className="text-sm text-[#57534E] font-light">
              Des protocoles adaptés à vos exigences techniques, réglementaires et budgétaires.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((c, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#E8E2D5] hover:bg-white transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B38728]" />
                  <h4 className="font-luxury font-bold text-base text-[#1C1917]">
                    {c.type}
                  </h4>
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed font-light">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
