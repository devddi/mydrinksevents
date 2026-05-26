import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const aboutImageUrl = 'https://vlriviouictrannhemnh.supabase.co/storage/v1/object/public/midiasOMD/utils/fachada_3.png';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contrast statement animation (Split-like effect per line)
      gsap.fromTo(
        '.contrast-line',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
      
      // Image fade
      gsap.fromTo(
        '.about-image',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-image',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="sobre" className="relative py-32 bg-[#0D0D12] overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('https://vlriviouictrannhemnh.supabase.co/storage/v1/object/public/midiasOMD/utils/evento_2.jpg')` }}
      />
      
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Manifesto & History */}
          <div ref={textRef} className="space-y-12">
            <div>
              <p className="contrast-line text-sm md:text-base text-brand-gold font-inter uppercase tracking-[0.32em] mb-6">
                Quem somos
              </p>
              <h2 className="contrast-line text-4xl md:text-6xl text-white leading-tight">
                A MY Drinks nasceu para <span className="text-drama text-5xl md:text-7xl block mt-2">elevar o padrão</span> dos eventos.
              </h2>
            </div>
            
            <div className="space-y-6 text-white/75 font-inter text-base md:text-lg leading-relaxed contrast-line">
              <p>
                A MY Drinks nasceu para elevar o padrão dos eventos.
              </p>
              <p>
                Mais do que servir drinks, criamos experiências sensoriais que encantam do primeiro ao último detalhe.
              </p>
              <p className="font-semibold text-white">
                Elegância, precisão e hospitalidade — sempre no ritmo do seu grande dia.
              </p>
            </div>
          </div>

          {/* Photo Space */}
          <div className="about-image relative w-full aspect-[4/5] cinematic-container border border-white/10 group">
            <div className="absolute inset-0 bg-brand-gold/15 mix-blend-overlay z-10 group-hover:bg-brand-gold/10 transition-colors duration-500" />
            <img 
              src={aboutImageUrl}
              alt="MY Drinks — fachada" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
              style={{ filter: 'saturate(0.9) contrast(1.05) brightness(0.95)' }}
            />
            {/* Tag/Label */}
            <div className="absolute bottom-6 left-6 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-sm font-mono text-white tracking-wide">ATELIÊ & CURADORIA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
