import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PhilosophySection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text reveal effect (character/word fade)
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
    <section ref={containerRef} className="relative py-40 bg-[#050508] overflow-hidden text-white flex items-center justify-center">
      {/* Organic texture with parallax */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-fixed bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000&auto=format&fit=crop')` }}
      />
      
      <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
        <div className="space-y-16">
          <div className="space-y-4">
            <p className="reveal-text text-gray-500 font-inter text-sm md:text-base uppercase tracking-[0.3em]">
              O Manifesto
            </p>
            <p className="reveal-text text-lg md:text-2xl text-gray-400 font-inter font-light">
              A maioria das empresas de eventos foca apenas em <span className="text-gray-200">servir bebidas.</span>
            </p>
          </div>

          <h2 className="reveal-text text-5xl md:text-8xl font-bold font-inter leading-[0.9] tracking-tighter">
            Nós focamos em <br/>
            <span className="text-drama text-7xl md:text-[10rem] lg:text-[12rem] mt-4 block">
              Legados.
            </span>
          </h2>
          
          <p className="reveal-text text-gray-400 font-inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Porque não existe evento parado. Existe experiência, movimento e a memória sendo orquestrada em cada detalhe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
