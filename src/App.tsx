import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { PatientJourney } from './components/PatientJourney';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingEmergency } from './components/FloatingEmergency';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C2522] selection:bg-[#134074] selection:text-white relative">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Why Choose Asjad Veterinary Hospital */}
        <WhyChooseUs />

        {/* Veterinary Services & Specialties */}
        <Services onSelectService={(name) => handleOpenBooking(name)} />

        {/* Patient Care / Treatment Experience */}
        <PatientJourney />

        {/* About the Hospital & Compassion & Trust */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Visual Gallery */}
        <GallerySection />

        {/* Testimonials & Community Reviews */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Google Maps / Location & Contact */}
        <LocationSection />

        {/* Final Strong Call-to-Action */}
        <FinalCta onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />

      {/* Floating Emergency Dialers & WhatsApp */}
      <FloatingEmergency />
    </div>
  );
}

