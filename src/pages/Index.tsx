
import React from 'react';
import SmokeAnimation from '@/components/SmokeAnimation';
import { SplashCursor } from '@/components/ui/splash-cursor';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ backgroundColor: '#181818' }}>
      {/* Splash cursor effect - behind everything */}
      <SplashCursor />
      
      {/* Animated smoke background */}
      <SmokeAnimation />
      
      {/* Main content - above cursor effect */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
