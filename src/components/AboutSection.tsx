import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502814408796-01589fd7eb0a?q=80&w=2000&auto=format&fit=crop')` }}
      />
      
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Manifesto & History */}
          <div ref={textRef} className="space-y-12">
            <div>
              <p className="contrast-line text-lg md:text-xl text-gray-400 font-inter mb-4">
                Para muitos, um evento é apenas uma data.
              </p>
              <h2 className="contrast-line text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                Para nós, é uma <span className="text-drama text-5xl md:text-7xl block mt-2">Experiência em Movimento.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-300 font-inter text-base md:text-lg leading-relaxed contrast-line">
              <p>
                A <strong>My Drinks</strong> nasceu da união de Thaynara, Neto e seu primo. 
                De um pub local e da paixão por festas, entendemos que não basta saber as receitas — é preciso sentir o ritmo e a energia 
                que fazem uma celebração acontecer. Mais do que servir, nosso olhar é para encantar e surpreender.
              </p>
              <p>
                Evoluímos além do bar: hoje criamos experiências completas, incluindo ilhas gastronômicas pensadas para harmonizar 
                com cada momento. Em abril de 2026, com uma marca mais "clean" e elegante, inauguramos nosso espaço físico 
                para realizar degustações e planejar todos os detalhes junto com você.
              </p>
              <p className="font-semibold text-white">
                Porque, para a My Drinks, não existe evento parado. Existe memória sendo criada.
              </p>
            </div>
          </div>

          {/* Photo Space */}
          <div className="about-image relative w-full aspect-[4/5] cinematic-container border border-white/10 group">
            <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay z-10 group-hover:bg-brand-orange/10 transition-colors duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop" 
              alt="My Drinks Equipe e Experiência" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            {/* Tag/Label */}
            <div className="absolute bottom-6 left-6 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-sm font-mono text-white tracking-wide">EST. 2024</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
