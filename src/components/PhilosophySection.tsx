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
    <section ref={containerRef} className="relative py-36 bg-brand-black overflow-hidden text-white flex items-center justify-center">
      <div 
        className="absolute inset-0 opacity-[0.05] bg-fixed bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop')` }}
      />
      
      <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
        <div className="space-y-12">
          <p className="reveal-text text-brand-gold font-inter text-xs md:text-sm uppercase tracking-[0.32em]">
            A marca
          </p>

          <h2 className="reveal-text text-5xl md:text-7xl lg:text-8xl leading-[1.05]">
            Um M.<br />
            Um Y.<br />
            E uma <span className="text-drama">taça.</span>
          </h2>

          <p className="reveal-text font-inter text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A essência da MY Drinks em cada detalhe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
