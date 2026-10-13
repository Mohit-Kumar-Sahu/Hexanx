import React from 'react';
import LayeredEcosystemShowcase from '../components/LayeredEcosystemShowcase';
import AyraSection from '../components/AyraSection';

export default function LandingPage() {
  return (
    <div className="landing-page w-full overflow-x-hidden">
      {/* 3 Core Product Ecosystem Showcase with Direct CTAs */}
      <LayeredEcosystemShowcase />
      
      {/* Ayra AI Spotlight */}
      <AyraSection />
    </div>
  );
}
