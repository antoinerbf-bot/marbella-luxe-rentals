import React, { useState } from 'react';
import { useRoute, serviceHref } from './lib/router';
import { DEFAULT_WA_MESSAGE, ServiceId } from './lib/site';
import { Header } from './components/Header';
import { HeroSolaireVideo } from './components/HeroSolaireVideo';
import { ChefHomeSection } from './components/ChefHomeSection';
import { MarbellaMijasSection } from './components/MarbellaMijasSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileDrawer } from './components/MobileDrawer';
import { ServicePage } from './components/ServicePage';
import { MoroccoUniversePage } from './components/MoroccoUniversePage';

export function App() {
  const route = useRoute();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Vue dédiée pour chaque Service
  if (route.name === 'service') {
    return (
      <ServicePage
        serviceId={route.id}
        onBack={() => {
          window.location.hash = '#services';
        }}
      />
    );
  }

  // Vue dédiée pour l'Univers Marocain (Livraison Fin 2027)
  if (route.name === 'maroc') {
    return (
      <MoroccoUniversePage
        onBackToCostaDelSol={() => {
          window.location.hash = '#/';
        }}
      />
    );
  }

  // Page d'Accueil Principale (Marbella & Mijas · Costa del Sol)
  return (
    <div className="min-h-screen bg-travertine text-ink flex flex-col selection:bg-bronze/20">
      {/* En-tête avec variante overlay sur la vidéo d'accueil */}
      <Header
        variant="overlay"
        onOpenMenu={() => setMobileMenuOpen(true)}
      />

      {/* Hero vidéo authentique Marbella & Grille des 4 services */}
      <HeroSolaireVideo
        onSelectService={(serviceId: ServiceId) => {
          window.location.hash = serviceHref(serviceId);
        }}
      />

      {/* Focus Signature : Le Chef Dominique Hybord dans votre villa */}
      <ChefHomeSection
        onSelectService={(serviceId: ServiceId) => {
          window.location.hash = serviceHref(serviceId);
        }}
      />

      {/* Ancrage territorial : Marbella, Mijas & Costa del Sol */}
      <MarbellaMijasSection />

      {/* L'Histoire de la maison & Revue de presse officielle */}
      <AboutSection />

      {/* Contact privilégié & Formulaire confidentiel */}
      <ContactSection />

      {/* Pied de page */}
      <Footer />

      {/* Bouton d'action WhatsApp discret */}
      <FloatingWhatsApp message={DEFAULT_WA_MESSAGE} />

      {/* Menu tiroir mobile */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </div>
  );
}

export default App;
