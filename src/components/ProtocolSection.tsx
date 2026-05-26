import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProtocolSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageUrl = 'https://vlriviouictrannhemnh.supabase.co/storage/v1/object/public/midiasOMD/utils/carrinho-my.png';

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.differential-element',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
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

  const differentials = [
    'Tábua de shots em LED exclusiva',
    'Experiência personalizada',
    'Atendimento refinado',
    'Estrutura premium',
    'Ateliê físico',
    'Drinks autorais',
    'Ambientação sofisticada',
  ];

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
                Um serviço pensado para casamentos de alto padrão: curadoria, estética e hospitalidade no mesmo nível do seu evento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentials.map((item) => (
                <div
                  key={item}
                  className="differential-element rounded-[1.5rem] border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
                    <p className="font-inter text-white/85 leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="differential-element rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <div className="relative aspect-[4/3]">
              <img
                src={imageUrl}
                alt="Carrinho MY Drinks"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'saturate(0.95) contrast(1.05) brightness(0.95)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-inter text-white/85 leading-relaxed">
                  Estrutura discreta, acabamento impecável e um serviço que se percebe sem precisar explicar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolSection;
