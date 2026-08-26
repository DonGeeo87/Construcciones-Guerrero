import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BudgetOfferSection from './components/BudgetOfferSection';
import ServicesSection from './components/ServicesSection';
import MaterialsSection from './components/MaterialsSection';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import InteractiveQuoteCalculator from './components/InteractiveQuoteCalculator';
import TestimonialsSection from './components/TestimonialsSection';
import CoverageMapSection from './components/CoverageMapSection';
import FaqSection from './components/FaqSection';
import BookingModal from './components/BookingModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with value proposition and $30k highlight */}
        <Hero onOpenBookingModal={handleOpenBookingModal} />

        {/* 2. Detailed $30.000 Budget & 3D Design Offer with exact inclusions */}
        <BudgetOfferSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 3. Comprehensive Services (Diseño, Arquitectura, Construcción, Remodelación) */}
        <ServicesSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 4. Materials Explorer (SIP, Concreto, Metalcon, Madera, Ladrillos) */}
        <MaterialsSection />

        {/* 5. Before & After Interactive Transformations */}
        <BeforeAfterSlider />

        {/* 6. Interactive Calculator & WhatsApp Handover */}
        <InteractiveQuoteCalculator onOpenBookingModal={handleOpenBookingModal} />

        {/* 7. Satisfied Clients Testimonials */}
        <TestimonialsSection />

        {/* 8. Regional Coverage (Viña, Valpo, Concón, Quilpué, etc.) */}
        <CoverageMapSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 9. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenBookingModal={handleOpenBookingModal} />

      {/* Modal Dialog for Scheduling Technical Visit */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={handleCloseBookingModal} 
      />

      {/* Persistent WhatsApp Floating Button */}
      <FloatingWhatsApp />
    </div>
  );
}
