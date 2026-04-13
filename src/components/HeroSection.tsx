import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal text with a more dramatic entry
      gsap.fromTo(
        '.hero-element',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.5,
          ease: 'power4.out',
          delay: 0.2
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const whatsappUrl = "https://wa.me/5588988940894?text=Olá,%20tenho%20interesse%20em%20saber%20mais";

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative h-[100dvh] flex items-end justify-start overflow-hidden bg-[#0D0D12]"
    >
      {/* Background Image - Updated to user's URL */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://drinkerita.com.br/wp-content/uploads/2021/08/DEFUMACAO-COM-ERVAS-HERBACEAS.jpg')`,
        }}
      />
      
      {/* Dynamic Cinematic Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D0D12]/60 via-transparent to-transparent" />

      <div className="relative z-20 container mx-auto px-6 pb-20 md:pb-32 lg:pb-40">
        <div className="max-w-4xl">
          <p className="hero-element text-sm md:text-base font-inter text-brand-orange uppercase tracking-[0.3em] mb-6 font-bold">
            Alta Coquetelaria & Gastronomia
          </p>
          
          <h1 className="hero-element flex flex-col font-bold text-white leading-[0.9] mb-12">
            <span className="font-inter text-4xl md:text-6xl lg:text-8xl tracking-tighter">
              Sua celebração encontra a
            </span>
            <span className="text-drama text-7xl md:text-[10rem] lg:text-[13rem] mt-6 block">
              Perfeição.
            </span>
          </h1>

          <div className="hero-element flex flex-col sm:flex-row gap-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button text-base md:text-lg group py-5 px-10"
            >
              <span className="relative z-10 flex items-center gap-3">
                Solicitar Orçamento
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            
            <button
               onClick={() => document.getElementById('experiencias')?.scrollIntoView({ behavior: 'smooth' })}
               className="text-white font-inter font-semibold flex items-center gap-2 hover:text-brand-orange opacity-70 hover:opacity-100 transition-all px-4"
            >
              Conhecer Experiências
              <span className="w-8 h-px bg-white/30" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:block">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] font-mono text-gray-500 uppercase vertical-text tracking-widest mb-2">SCROLL_DOWN</span>
          <div className="w-px h-16 bg-gradient-to-t from-brand-orange to-transparent" />
        </div>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>

    </section>
  );
};

export default HeroSection;
