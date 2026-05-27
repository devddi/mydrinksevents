import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PhilosophySection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reveal-text',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 bg-brand-black overflow-hidden text-white flex items-center justify-center">
      <div 
        className="absolute inset-0 opacity-[0.05] bg-fixed bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop')` }}
      />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Logo Column */}
          <div className="reveal-text flex justify-center order-first lg:order-last">
            <div className="relative group p-6 sm:p-8 rounded-full bg-white/[0.02] border border-white/5 shadow-2xl backdrop-blur-sm max-w-[240px] sm:max-w-[280px] md:max-w-[320px] aspect-square flex items-center justify-center">
              {/* Subtle gold glow behind logo */}
              <div className="absolute inset-0 rounded-full bg-brand-gold/5 blur-2xl group-hover:bg-brand-gold/10 transition-all duration-700" />
              <img 
                src="https://vlriviouictrannhemnh.supabase.co/storage/v1/object/public/midiasOMD/utils/logo-new-my.png"
                alt="Logo MY Drinks"
                className="w-full h-full object-contain relative z-10 transition-all duration-700 group-hover:scale-105"
                style={{ filter: 'drop-shadow(0 0 8px rgba(198,161,91,0.15))' }}
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-8 text-center lg:text-left">
            <p className="reveal-text text-brand-gold font-inter text-xs md:text-sm uppercase tracking-[0.32em]">
              A marca
            </p>

            <h2 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white">
              Um M.<br />
              Um Y.<br />
              E uma <span className="text-drama">taça.</span>
            </h2>

            <p className="reveal-text font-inter text-white/70 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A combinação perfeita que dá vida à nossa identidade visual. A essência da MY Drinks representada de forma moderna e sofisticada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
