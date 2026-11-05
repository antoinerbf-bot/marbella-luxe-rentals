import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSolaireVideo } from './components/HeroSolaireVideo';
import { ContactSection } from './components/ContactSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileDrawer } from './components/MobileDrawer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LiveConciergeNotifications } from './components/LiveConciergeNotifications';
import { MoroccoUniversePage } from './components/MoroccoUniversePage';
import { ServicePage } from './components/ServicePage';
import { MarbellaMijasSection } from './components/MarbellaMijasSection';

export function App() {
  const [currentUniverse, setCurrentUniverse] = useState<'marbella' | 'maroc'>('marbella');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  // If user is exploring a dedicated Service Page (full page view)
  if (activeServiceId) {
    return (
      <ServicePage
        serviceId={activeServiceId}
        onBack={() => {
          setActiveServiceId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  // If user is exploring the dedicated Moroccan Universe
  if (currentUniverse === 'maroc') {
    return (
      <MoroccoUniversePage
        onBackToCostaDelSol={() => {
          setCurrentUniverse('marbella');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  // Costa del Sol Universe (Marbella & Mijas)
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241A14] flex flex-col selection:bg-[#DFBC77]/40 selection:text-[#1F1813]">
      {/* Top Header */}
      <Header
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        onOpenMoroccoUniverse={() => {
          setCurrentUniverse('maroc');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Hero Drone Solaire & Grille Interactive Moderne */}
      <HeroSolaireVideo
        onSelectService={(serviceId) => setActiveServiceId(serviceId)}
      />

      {/* Dedicated Marbella, Mijas & Costa del Sol Section */}
      <MarbellaMijasSection />

      {/* About Us & Dominique Hybord Legacy Section */}
      <AboutSection />

      {/* Refined Confidential Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer
        onOpenMorocco={() => {
          setCurrentUniverse('maroc');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Live Concierge Dynamic Toast Notifications */}
      <LiveConciergeNotifications
        onNavigateMorocco={() => {
          setCurrentUniverse('maroc');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateChef={() => {
          const el = document.getElementById('chef');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Mobile Drawer Menu */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenMorocco={() => {
          setMobileMenuOpen(false);
          setCurrentUniverse('maroc');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Interactive Service Detail Modal */}
      <ServiceDetailModal
        serviceId={activeServiceId}
        onClose={() => setActiveServiceId(null)}
      />
    </div>
  );
}

export default App;
