/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { LanguageModal } from './components/LanguageModal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SoftwareShowcase } from './components/SoftwareShowcase';
import { ImportanceSection } from './components/ImportanceSection';
import { PersonasSection } from './components/PersonasSection';
import { TestimonialSection } from './components/TestimonialSection';
import { PersonalizedPlanBuilder } from './components/PersonalizedPlanBuilder';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { OnboardingWizardModal, OnboardingUserData } from './components/OnboardingWizardModal';
import { LiveSocialProofToast } from './components/LiveSocialProofToast';
import { ScrollReveal } from './components/ScrollReveal';

function AppContent() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [onboardingUserData, setOnboardingUserData] = useState<OnboardingUserData | undefined>(undefined);
  const [selectedPlanCycle, setSelectedPlanCycle] = useState('monthly');
  const { currentLanguage } = useLanguage();

  const handleOpenCheckout = (cycle: string = 'monthly') => {
    setSelectedPlanCycle(cycle);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleOpenOnboarding = (data?: OnboardingUserData) => {
    if (data) {
      setOnboardingUserData(data);
    }
    setIsOnboardingOpen(true);
  };

  return (
    <div 
      className="min-h-screen bg-[#05070e] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 relative overflow-x-hidden"
      dir={currentLanguage.direction || 'ltr'}
    >
      {/* Subtle Horizontal Scroll Progress Bar at the very top of the screen */}
      <ScrollProgressBar />

      {/* Top Announcement Bar with Translation options */}
      <TopAnnouncementBar onOpenOnboarding={() => handleOpenOnboarding()} />

      {/* Modern Glassmorphism (Liquid Glass) Header */}
      <Navbar onOpenCheckout={handleOpenCheckout} onOpenOnboarding={() => handleOpenOnboarding()} />

      <main>
        {/* Redesigned Hero Section with bold headline, subtle gradient shapes, and modern premium CTA */}
        <Hero onOpenCheckout={handleOpenCheckout} />

        {/* About Us & Purpose Section */}
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        {/* 6 Software In-Depth Product Description & Visuals */}
        <ScrollReveal>
          <SoftwareShowcase onOpenCheckout={handleOpenCheckout} />
        </ScrollReveal>

        {/* Why Software is Important (4 Pillars) */}
        <ScrollReveal>
          <ImportanceSection onOpenCheckout={handleOpenCheckout} />
        </ScrollReveal>

        {/* Who Will Benefit (12 Personas) */}
        <ScrollReveal>
          <PersonasSection onOpenCheckout={handleOpenCheckout} />
        </ScrollReveal>

        {/* User Success Stories & Case Studies Carousel */}
        <ScrollReveal>
          <TestimonialSection onOpenCheckout={handleOpenCheckout} />
        </ScrollReveal>

        {/* Personalized Plan Builder (Goals, Customer Care Routines, Wealth Growth) */}
        <ScrollReveal>
          <PersonalizedPlanBuilder onOpenCheckout={handleOpenCheckout} />
        </ScrollReveal>

        {/* Pricing ($650 vs $40) & Savings Calculator */}
        <ScrollReveal>
          <PricingSection onOpenCheckout={handleOpenCheckout} />
        </ScrollReveal>

        {/* Frequently Asked Questions */}
        <ScrollReveal>
          <FaqSection />
        </ScrollReveal>

        {/* Dedicated 24/7 Support & Contact Section */}
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        selectedPlanCycle={selectedPlanCycle}
        onOpenOnboarding={handleOpenOnboarding}
      />

      {/* Step-by-Step Onboarding Setup Wizard */}
      <OnboardingWizardModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
        userData={onboardingUserData}
      />

      {/* Live Social Proof Activity Toast (Fomo-style social notifications) */}
      <LiveSocialProofToast onOpenCheckout={handleOpenCheckout} />

      {/* Global Language Selector Modal */}
      <LanguageModal />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
