import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroCinematic } from './components/HeroCinematic';
import { SectionsShowcase } from './components/SectionsShowcase';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileDrawer } from './components/MobileDrawer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LiveConciergeNotifications } from './components/LiveConciergeNotifications';
import { MoroccoUniversePage } from './components/MoroccoUniversePage';

export function App() {
  const [currentUniverse, setCurrentUniverse] = useState<'marbella' | 'maroc'>('marbella');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

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
    <div className="min-h-screen bg-[#15262c] text-white flex flex-col selection:bg-[#c29a52]/40 selection:text-white">
      {/* Top Header */}
      <Header
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        onOpenMoroccoUniverse={() => {
          setCurrentUniverse('maroc');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Hero Cinematic Section */}
      <HeroCinematic
        onSelectService={(serviceId) => setActiveServiceId(serviceId)}
      />

      {/* Showcase and Content Sections (Services, Chef, Contact) */}
      <SectionsShowcase
        onSelectService={(serviceId) => setActiveServiceId(serviceId)}
      />

      {/* About Us & Dominique Hybord Legacy Section */}
      <AboutSection />

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
