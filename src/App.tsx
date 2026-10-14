import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExpertiseDual } from './components/ExpertiseDual';
import { EquipmentTeletransmission } from './components/EquipmentTeletransmission';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WhatsAppContactForm } from './components/WhatsAppContactForm';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPreset, setModalPreset] = useState('');
  const [selectedServiceForForm, setSelectedServiceForForm] = useState('');

  const handleOpenWhatsApp = (subject?: string) => {
    setModalPreset(subject || 'Demande d’intervention SP Canalisations');
    setModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForForm(serviceName);
    // Smooth scroll down to the WhatsApp form
    const formElement = document.getElementById('devis-whatsapp');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1C1917] selection:bg-[#D4AF37]/25 selection:text-[#785C19]">
      {/* Top Navigation */}
      <Header onOpenWhatsAppModal={handleOpenWhatsApp} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Parallax Hero with Paris Background & Logo in top-left */}
        <Hero onOpenWhatsApp={handleOpenWhatsApp} />

        {/* 2 Main Activities: Assainissement & Plomberie */}
        <ExpertiseDual onSelectService={handleSelectService} />

        {/* Signature Advantage: Télé-transmission immédiate des comptes rendus */}
        <EquipmentTeletransmission />

        {/* Why Choose Us with exact presentation brief text */}
        <WhyChooseUs onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Interactive WhatsApp Contact Form with Live Message Generator */}
        <WhatsAppContactForm initialService={selectedServiceForForm} />
      </main>

      {/* Luxury Footer */}
      <Footer onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Quick Action Floating WhatsApp Button */}
      <FloatingWhatsApp onOpenModal={() => handleOpenWhatsApp('Urgence WhatsApp Direct')} />

      {/* Interactive WhatsApp Quick Modal */}
      <WhatsAppModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        presetSubject={modalPreset}
      />
    </div>
  );
}
