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
    <section ref={ctaRef} id="contato" className="py-28 bg-brand-black relative px-4 z-[50]">
      <div className="container mx-auto max-w-5xl rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/10 bg-gradient-to-br from-brand-champagne via-[#F2E3CF] to-brand-gold/70">
        <div className="px-6 py-20 text-center relative z-10 flex flex-col items-center">
          <p className="cta-element text-brand-bronze font-inter text-xs md:text-sm uppercase tracking-[0.32em] mb-6">
            CTA
          </p>

          <h2 className="cta-element text-4xl md:text-6xl text-brand-black leading-tight mb-8">
            Vamos criar uma experiência <span className="text-drama italic">inesquecível</span>?
          </h2>

          <p className="cta-element font-inter text-brand-black/70 max-w-2xl text-center mb-10 leading-relaxed">
            Agenda limitada para casamentos e eventos premium. Fale com a gente e reserve sua data.
          </p>

          <a 
            href="https://wa.me/5588988940894?text=Olá,%20tenho%20interesse%20em%20saber%20mais"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-element inline-flex items-center justify-center rounded-full bg-brand-black text-brand-champagne font-inter font-semibold py-5 px-10 transition-all duration-300 hover:shadow-[0_0_22px_rgba(15,15,15,0.25)]"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
