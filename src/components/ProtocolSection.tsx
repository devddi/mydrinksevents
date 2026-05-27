import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProtocolSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const differentials = [
    { name: 'Tábua de shots em LED exclusiva', image: '/assets/nossas-entregas/tabua-shots-led.png' },
    { name: 'Experiência personalizada', image: '/assets/nossas-entregas/experiencia-personalizada.jpg' },
    { name: 'Atendimento refinado', image: '/assets/nossas-entregas/atendimento.jpg' },
    { name: 'Estrutura premium', image: '/assets/nossas-entregas/estrutura-premium.jpg' },
    { name: 'Espaço físico', image: '/assets/nossas-entregas/espaco-fisico.jpg' },
    { name: 'Drinks autorais', image: '/assets/nossas-entregas/drinks-autorais.jpg' },
    { name: 'Ambientação sofisticada', image: '/assets/nossas-entregas/ambientacao.jpg' },
    { name: 'Pedidos via totem digital', image: '/assets/nossas-entregas/totem-digital.png' },
    { name: 'Sem filas físicas', image: '/assets/nossas-entregas/sem-filas.jpg' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.differential-element',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 1,
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

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % differentials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, differentials.length]);

  return (
    <section ref={containerRef} id="diferenciais" className="bg-brand-black relative py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-fixed bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url('https://vlriviouictrannhemnh.supabase.co/storage/v1/object/public/midiasOMD/utils/evento_3.jpg')` }} />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="differential-element text-brand-gold font-inter text-xs md:text-sm uppercase tracking-[0.32em]">
                Nossa entrega
              </p>
              <h2 className="differential-element text-4xl md:text-6xl text-white leading-tight">
                O que torna a experiência MY Drinks <span className="text-drama block mt-2">inegociável.</span>
              </h2>
              <p className="differential-element font-inter text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
                Um serviço pensado para eventos de alto padrão: curadoria, estética e hospitalidade no mesmo nível do seu evento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentials.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={item.name}
                    className={`differential-element rounded-[1.5rem] border transition-all duration-500 px-6 py-5 backdrop-blur-sm cursor-pointer ${
                      isActive 
                        ? 'border-brand-gold/60 bg-brand-gold/10 shadow-[0_0_20px_rgba(198,161,91,0.15)] scale-[1.02]' 
                        : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.08]'
                    }`}
                    onMouseEnter={() => {
                      setActiveIndex(index);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => {
                      setIsPaused(false);
                    }}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsPaused(true);
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`mt-2 h-2 w-2 rounded-full transition-all duration-500 ${
                        isActive ? 'bg-brand-gold scale-125 shadow-[0_0_8px_#C6A15B]' : 'bg-white/40'
                      }`} />
                      <p className={`font-inter leading-relaxed transition-colors duration-500 ${
                        isActive ? 'text-white font-semibold' : 'text-white/70'
                      }`}>
                        {item.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cinematic Interactive Carousel Column */}
          <div className="differential-element rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative aspect-[4/3]">
            {differentials.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={item.name}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full object-cover transition-transform ease-out ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                    style={{ 
                      filter: 'saturate(0.95) contrast(1.05) brightness(0.95)',
                      transitionDuration: '4000ms'
                    }}
                  />
                </div>
              );
            })}
            
            {/* Elegant overlay gradients above images */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent z-20 pointer-events-none" />
            
            {/* Dynamic Label Display */}
            <div className="absolute bottom-8 left-8 right-8 z-30 pointer-events-none">
              <p className="font-inter text-brand-gold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-1 font-semibold">
                Destaque
              </p>
              <h4 className="font-playfair text-white text-xl sm:text-2xl font-light leading-snug drop-shadow-md">
                {differentials[activeIndex].name}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolSection;
