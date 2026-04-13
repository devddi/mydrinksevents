import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GetStarted: React.FC = () => {
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-element',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
          },
        }
      );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ctaRef} id="contato" className="py-32 bg-[#181818] relative px-4 z-[50]">
      {/* Container slightly inner */}
      <div className="container mx-auto max-w-5xl rounded-[3rem] bg-[#111111] overflow-hidden relative shadow-2xl border border-white/5">
        
        {/* Subtle noise and glow overlay specific to CTA */}
        <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="px-6 py-24 text-center relative z-10 flex flex-col items-center">
          <p className="cta-element text-brand-orange font-mono text-sm uppercase tracking-widest mb-6">Sua vez</p>
          
          <h2 className="cta-element text-4xl md:text-6xl lg:text-7xl font-bold font-inter text-white tracking-tight mb-8">
            Pronto para <br className="hidden md:block"/><span className="text-drama text-5xl md:text-7xl lg:text-8xl">Transformar</span> seu evento?
          </h2>
          
          <p className="cta-element text-lg text-gray-400 max-w-2xl text-center mb-12">
            Visite nosso ateliê físico para degustação ou entre em contato diretamente para reservarmos sua data. A agenda é limitada.
          </p>

          <a 
            href="https://wa.me/5588988940894?text=Olá,%20tenho%20interesse%20em%20saber%20mais"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-element brand-button text-lg lg:text-xl py-5 px-10"
          >
            Começar sua História
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
