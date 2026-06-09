import React, { useEffect } from 'react';
import SmokeAnimation from '@/components/SmokeAnimation';
import { SplashCursor } from '@/components/ui/splash-cursor';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PhilosophySection from '@/components/PhilosophySection';
import ProtocolSection from '@/components/ProtocolSection';
import EventsSection from '@/components/EventsSection';
import GetStarted from '@/components/GetStarted';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      document.documentElement.classList.add('is-scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.documentElement.classList.remove('is-scrolling');
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-brand-black">
      {/* Splash cursor effect - behind everything */}
      <SplashCursor />
      
      {/* Animated smoke background */}
      <SmokeAnimation />
      
      {/* Main content - above cursor effect */}
      <div className="relative z-10 flex flex-col">
        <Header />
        <HeroSection />
        <PhilosophySection />
        <AboutSection />
        <ServicesSection />
        <ProtocolSection />
        <EventsSection />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
