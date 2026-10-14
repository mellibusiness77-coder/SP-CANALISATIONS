import React, { useState } from 'react';
import { 
  Waves, 
  Wrench, 
  Video, 
  Flame, 
  Check, 
  ArrowRight, 
  MessageCircle, 
  Sparkles,
  Droplets,
  Search,
  Zap,
  Layers
} from 'lucide-react';

interface ExpertiseDualProps {
  onSelectService: (serviceName: string) => void;
}

export const ExpertiseDual: React.FC<ExpertiseDualProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'assainissement' | 'plomberie'>('assainissement');

  const assainissementServices = [
    {
      title: 'Débouchage Haute Pression (Hydrocurage)',
      description: 'Débouchage d’urgence sans produit chimique grâce à nos camions hydrocureurs équipés de jets rotatifs pulsés jusqu’à 400 bars. Désobstruction instantanée des canalisations bouchées (WC, colonnes, collecteurs).',
      tags: ['400 Bars', 'Intervention 24/7', 'Zéro produit chimique'],
    },
    {
      title: 'Inspection Caméra Vidéo HD & Diagnostic',
      description: 'Endoscopie haute définition des conduits de DN32 à DN500 avec traçage radiofréquence pour repérer fissures, écrasements, racines ou contre-pentes. Télé-transmission immédiate du rapport officiel horodaté.',
      tags: ['Caméra HD', 'Télé-transmission immédiate', 'Rapport certifié assurance'],
    },
    {
      title: 'Curage & Détartrage Hydrodynamique',
      description: 'Nettoyage complet des parois intérieures des conduites d’eaux usées et eaux pluviales. Élimine le tartre accumulé, les graisses et rétablit le diamètre initial pour éviter tout engorgement futur.',
      tags: ['Préventif & Curatif', 'Copropriétés & Syndics', 'Prolonge la durée de vie'],
    },
    {
      title: 'Fraisage Robotisé de Racines & Calcaire',
      description: 'Tête de fraisage rotative haute puissance pour éliminer les intrusions racinaires profondes, dépôts de laitance de ciment et concrétions calcaires sans terrassement ni destruction.',
      tags: ['Sans tranchée', 'Élimination racines', 'Robot motorisé'],
    },
    {
      title: 'Pompage Fosse Septique & Bacs à Graisse',
      description: 'Aspiration sécurisée des boues résiduelles de fosses toutes eaux, bacs à graisses de restaurants, stations de relevage et puisards avec certificat de traçabilité en centre de traitement agréé.',
      tags: ['Bacs à graisse', 'Fosses toutes eaux', 'Bordereau de suivi déchets'],
    },
  ];

  const plomberieServices = [
    {
      title: 'Dépannage d’Urgence Fuite d’Eau 24/7',
      description: 'Intervention immédiate jour et nuit sur fuites d’eau visibles ou encastrées, rupture de canalisation, engorgement de colonne générale ou vanne d’arrêt défaillante avec sécurisation rapide.',
      tags: ['Sous 1 heure', '7j/7 - 24h/24', 'Mise en sécurité'],
    },
    {
      title: 'Recherche de Fuite Non Destructive',
      description: 'Localisation acoustique, gaz traceur ou caméra thermique infrarouge sans casser vos carrelages, doublages ou sols en parquet. Établissement d’un rapport complet pris en charge par votre assurance.',
      tags: ['Acoustique & Gaz', 'Zéro casse', 'Rapport pour assurance'],
    },
    {
      title: 'Remplacement Chauffe-Eau & Cumulus',
      description: 'Installation, détartrage et remplacement en urgence de chauffe-eau électriques, ballons thermodynamiques et groupes de sécurité conformes aux normes d’efficacité énergétique actuelles.',
      tags: ['Marques leaders', 'Garantie décennale', 'Remplacement express'],
    },
    {
      title: 'Rénovation Robinetterie & Sanitaires de Prestige',
      description: 'Pose soignée de robinetterie haut de gamme (laiton brossé, noir mat, doré), bâtis-supports WC suspendus, douches à l’italienne et reprise complète d’installations cuivre et multicouche.',
      tags: ['Finition d’exception', 'Haute précision', 'Sur-mesure'],
    },
    {
      title: 'Maintenance Préventive & Contrats Syndics',
      description: 'Contrats d’entretien réguliers pour syndics de copropriété, gestionnaires de patrimoine et locaux professionnels : vérification des réducteurs de pression, siphons généraux et colonnes.',
      tags: ['Gestionnaires de biens', 'Visite périodique', 'Priorité dépannage'],
    },
  ];

  return (
    <section id="expertises" className="py-24 bg-[#FAF9F5] border-t border-[#EAE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white border border-[#D4AF37]/30 text-xs font-semibold text-[#8C6218] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
            <span>Nos Deux Pôles d&apos;Excellence</span>
          </div>

          <h2 className="font-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight mb-5">
            Deux Métiers Complémentaires,{' '}
            <span className="text-gold-gradient">Une Même Exigence</span>
          </h2>

          <p className="text-base sm:text-lg text-[#57534E] font-light leading-relaxed">
            Grâce à une synergie unique entre véhicules hydrocureurs lourds et savoir-faire artisanal de précision,
            SP CANALISATIONS répond à l&apos;ensemble de vos problématiques avec un seul interlocuteur qualifié.
          </p>

          {/* Interactive Activity Switcher Tabs */}
          <div className="flex justify-center mt-10">
            <div className="p-1.5 bg-white rounded-2xl border border-[#E2DDD3] shadow-sm flex items-center gap-2 max-w-md w-full">
              <button
                onClick={() => setActiveTab('assainissement')}
                className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'assainissement'
                    ? 'bg-gold-gradient text-white shadow-md'
                    : 'text-[#57534E] hover:text-[#1C1917] hover:bg-[#F7F5EE]'
                }`}
              >
                <Waves className="w-4 h-4" />
                <span>Pôle Assainissement</span>
              </button>
              <button
                onClick={() => setActiveTab('plomberie')}
                className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'plomberie'
                    ? 'bg-gold-gradient text-white shadow-md'
                    : 'text-[#57534E] hover:text-[#1C1917] hover:bg-[#F7F5EE]'
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>Pôle Plomberie</span>
              </button>
            </div>
          </div>
        </div>

        {/* POLE 1: ASSAINISSEMENT CONTENT */}
        {activeTab === 'assainissement' && (
          <div id="assainissement" className="space-y-16 animate-in fade-in duration-300">
            {/* Visual Marquee Bento Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Primary Visual Showcase Card */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-[#EAE5D8] overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="relative aspect-video sm:aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src="/src/assets/images/service_assainissement_curage_1791974502155.jpg"
                    alt="Intervention curage hydrodynamique haute pression SP Canalisations"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider text-[#F3E5AB] font-semibold">
                      Camions Hydrocureurs Ultra-Performants
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-luxury text-white">
                      Curage & Débouchage Haute Pression
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-luxury text-xl font-bold text-[#1C1917] mb-3">
                      Débouchage certifié & rétablissement immédiat de débit
                    </h4>
                    <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-6 font-light">
                      Face à un engorgement de colonne générale ou une canalisation obstruée,
                      nos techniciens interviennent immédiatement avec du matériel haute pression sans produits chimiques corrosifs.
                      Le débit de vos installations est restauré instantanément dans le respect des normes environnementales.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F2EEE4] flex items-center justify-between">
                    <div className="text-xs text-[#78716C]">
                      <span>Interventions 24h/24</span>
                      <span className="mx-2">·</span>
                      <span>Particuliers & Syndics</span>
                    </div>
                    <button
                      onClick={() => onSelectService('Débouchage Haute Pression')}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C6218] hover:text-[#5C410F] transition-colors cursor-pointer"
                    >
                      <span>Commander sur WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Secondary Camera Inspection Card */}
              <div className="lg:col-span-5 bg-white rounded-3xl border border-[#EAE5D8] overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="relative aspect-video sm:aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src="/src/assets/images/inspection_camera_diagnostic_1791974504134.jpg"
                    alt="Écran d'inspection caméra endoscopique des canalisations"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider text-[#F3E5AB] font-semibold">
                      Diagnostic Haute Définition
                    </span>
                    <h3 className="text-xl font-bold font-luxury text-white">
                      Inspection Caméra & Télé-transmission
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-luxury text-lg font-bold text-[#1C1917] mb-2">
                      Fini les délais de compte rendu
                    </h4>
                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-6 font-light">
                      Une intervention, un résultat, une conclusion et une transmission immédiate dans la foulée.
                      Vous recevez le lien vidéo HD et le rapport technique complet directement par email ou WhatsApp pour vos assurances et syndics.
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectService('Inspection Caméra & Diagnostic')}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gold-gradient hover:opacity-95 shadow-sm transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Demander une Inspection Caméra</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Detailed Services Accordion/Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assainissementServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-[#EAE5D8] hover:border-[#D4AF37]/50 transition-all shadow-sm hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-luxury text-sm font-semibold text-[#8C6218]">
                        0{index + 1}.
                      </span>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#78716C]">
                        {service.tags[0]}
                      </div>
                    </div>

                    <h4 className="font-luxury text-lg font-bold text-[#1C1917] mb-2 group-hover:text-[#8C6218] transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F5F2EB]">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] text-[#785C19] bg-[#FAF7EE] px-2 py-0.5 rounded border border-[#EAE2C8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectService(service.title)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-medium text-[#1C1917] bg-[#FAF9F5] hover:bg-[#F3EFE4] border border-[#E5E0D2] transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Réserver ce service</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* POLE 2: PLOMBERIE CONTENT */}
        {activeTab === 'plomberie' && (
          <div id="plomberie" className="space-y-16 animate-in fade-in duration-300">
            {/* Visual Showcase Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 bg-white rounded-3xl border border-[#EAE5D8] overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="relative aspect-video sm:aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src="/src/assets/images/service_plomberie_luxe_1791974502348.jpg"
                    alt="Plomberie de prestige et dépannage d'urgence SP Canalisations"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider text-[#F3E5AB] font-semibold">
                      Plomberie d’Excellence & Dépannage Immédiat
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-luxury text-white">
                      Rénovation & Intervention Haute Précision
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-luxury text-xl font-bold text-[#1C1917] mb-3">
                      Maîtrise artisanale et réactivité 24/7
                    </h4>
                    <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-6 font-light">
                      De la recherche de fuite indécelable à la rénovation complète de réseaux sanitaires en passant par
                      le remplacement express de chauffe-eau, nous intervenons avec le soin d’un artisan d&apos;art
                      et la rigueur des plus hauts standards techniques.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F2EEE4] flex items-center justify-between">
                    <div className="text-xs text-[#78716C]">
                      <span>Interventions sous 1h</span>
                      <span className="mx-2">·</span>
                      <span>Agréé Assurances</span>
                    </div>
                    <button
                      onClick={() => onSelectService('Plomberie d’Urgence 24/7')}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C6218] hover:text-[#5C410F] transition-colors cursor-pointer"
                    >
                      <span>Devis</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Secondary Feature Card */}
              <div className="lg:col-span-5 bg-white rounded-3xl border border-[#EAE5D8] p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gold-subtle border border-[#D4AF37]/40 flex items-center justify-center text-[#8C6218] mb-6">
                    <Search className="w-6 h-6 text-[#B38728]" />
                  </div>

                  <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6218]">
                    Spécialité Technique
                  </span>
                  <h4 className="font-luxury text-2xl font-bold text-[#1C1917] mt-1 mb-4">
                    Recherche de Fuite Non Destructive
                  </h4>

                  <p className="text-sm text-[#57534E] leading-relaxed font-light mb-6">
                    Détecter l&apos;origine exacte d&apos;une infiltration sans abîmer vos cloisons, carrelages ou parquets grâce à nos détecteurs acoustiques électro-acoustiques et caméras thermiques FLIR.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2.5 text-xs text-[#292524]">
                      <Check className="w-4 h-4 text-[#B38728]" />
                      <span>Rapport détaillé conforme aux exigences de votre assurance</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-[#292524]">
                      <Check className="w-4 h-4 text-[#B38728]" />
                      <span>Intervention rapide sur Paris et petite/grande couronne</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-[#292524]">
                      <Check className="w-4 h-4 text-[#B38728]" />
                      <span>Évaluation thermique & mise en sécurité immédiate</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectService('Recherche de Fuite Non Destructive')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gold-gradient hover:opacity-95 shadow-sm transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Demander une Recherche de Fuite</span>
                </button>
              </div>
            </div>

            {/* Detailed Plomberie Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plomberieServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-[#EAE5D8] hover:border-[#D4AF37]/50 transition-all shadow-sm hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-luxury text-sm font-semibold text-[#8C6218]">
                        0{index + 1}.
                      </span>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#78716C]">
                        {service.tags[0]}
                      </div>
                    </div>

                    <h4 className="font-luxury text-lg font-bold text-[#1C1917] mb-2 group-hover:text-[#8C6218] transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F5F2EB]">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] text-[#785C19] bg-[#FAF7EE] px-2 py-0.5 rounded border border-[#EAE2C8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectService(service.title)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-medium text-[#1C1917] bg-[#FAF9F5] hover:bg-[#F3EFE4] border border-[#E5E0D2] transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Demander sur WhatsApp</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
