import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const heroImageUrl = 'https://vlriviouictrannhemnh.supabase.co/storage/v1/object/public/midiasOMD/utils/evento.jpg';

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
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('${heroImageUrl}')`,
        }}
      />
      
      {/* Dynamic Cinematic Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/35 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0F0F0F]/70 via-transparent to-transparent" />
      <div className="absolute inset-0 z-10 bg-black/20" />

      <div className="relative z-20 container mx-auto px-6 pb-20 md:pb-32 lg:pb-40 pt-28 md:pt-0">
        <div className="max-w-4xl">
          <p className="hero-element text-[10px] sm:text-xs md:text-sm font-inter text-brand-gold uppercase tracking-[0.26em] mb-8 whitespace-nowrap">
            Alta coquetelaria & experiências
          </p>
          
          <h1 className="hero-element font-playfair font-light text-white leading-[1.05] mb-6 tracking-[0.02em] text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
            Sua celebração merece mais que drinks.
          </h1>

          <p className="hero-element font-inter text-base md:text-lg text-white/75 max-w-2xl leading-relaxed mb-10">
            Criamos experiências que transformam momentos em memórias.
          </p>

          <div className="hero-element flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button text-base md:text-lg group py-5 px-10"
            >
              <span className="relative z-10 flex items-center gap-3">
                Solicitar orçamento
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            
            <button
               onClick={() => document.getElementById('experiencias')?.scrollIntoView({ behavior: 'smooth' })}
               className="brand-button-secondary text-base md:text-lg py-5 px-10"
            >
              Ver experiências
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:block">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] font-mono text-gray-500 uppercase vertical-text tracking-widest mb-2">SCROLL_DOWN</span>
          <div className="w-px h-16 bg-gradient-to-t from-brand-gold to-transparent" />
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
