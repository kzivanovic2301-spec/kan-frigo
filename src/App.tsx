/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BelgradeCoverage } from './components/BelgradeCoverage';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { WorksGallery } from './components/WorksGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileCallBar } from './components/MobileCallBar';
import { OwnerModal } from './components/OwnerModal';
import { Toast } from './components/Toast';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* Main Website Structure */}
      <Header />
      <main className="flex-1">
        <Hero />
        <BelgradeCoverage />
        <ServicesSection />
        <ProductsSection />
        <WorksGallery />
        <WhyChooseUs />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Sticky Mobile Direct Call Launcher */}
      <MobileCallBar />

      {/* Modal for Owner Management */}
      <OwnerModal />

      {/* Instant Notification Toast */}
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
