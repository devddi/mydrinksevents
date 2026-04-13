import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProtocolSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sticky stacking effect
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "bottom top", 
          pin: true,
          pinSpacing: false,
          scrub: true,
        });

        // Effect for the card being covered
        if (index < protocols.length - 1) {
          gsap.to(card, {
            scale: 0.95,
            opacity: 0.6,
            filter: "blur(4px)",
            scrollTrigger: {
              trigger: cardsRef.current[index + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            }
          });
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const protocols = [
    {
      step: '01',
      title: 'A Reunião',
      desc: 'Compreendemos a essência do seu evento. O cardápio, as restrições e o perfil dos seus convidados desenham o plano mestre.',
      visual: (
        <div className="w-full h-full relative flex items-center justify-center">
          <svg className="w-64 h-64 animate-[spin_20s_linear_infinite] opacity-50" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-brand-orange" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" className="text-brand-orange" />
          </svg>
        </div>
      )
    },
    {
      step: '02',
      title: 'Curadoria Ouro',
      desc: 'Da seleção de destilados clássicos à ilha gastronômica (mesa de resistência). Cada item é orquestrado para o paladar.',
      visual: (
        <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-x-0 h-1 bg-brand-orange shadow-[0_0_15px_rgba(255,84,0,0.8)] animate-[scan_3s_ease-in-out_infinite_alternate]" />
          <div className="w-64 h-64 grid grid-cols-8 gap-4 content-center justify-items-center opacity-30">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>
          <style>{`
            @keyframes scan {
              0% { top: 20%; }
              100% { top: 80%; }
            }
          `}</style>
        </div>
      )
    },
    {
      step: '03',
      title: 'A Execução',
      desc: 'O momento em que tudo ganha movimento. Nossa equipe no controle, mantendo a energia impecável do início ao fim.',
      visual: (
        <div className="w-full h-full relative flex items-center justify-center">
          <svg className="w-full h-32 text-brand-orange" viewBox="0 0 200 50">
            <path 
              d="M 0 25 L 40 25 L 50 10 L 60 40 L 70 25 L 130 25 L 140 5 L 150 45 L 160 25 L 200 25" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="animate-[dash_2s_linear_infinite]"
              strokeDasharray="200"
              strokeDashoffset="200"
            />
          </svg>
          <style>{`
            @keyframes dash {
              to { stroke-dashoffset: 0; }
            }
          `}</style>
        </div>
      )
    }
  ];

  return (
    <section ref={containerRef} id="protocolo" className="bg-black relative">
      {protocols.map((protocol, index) => (
        <div 
          key={index} 
          ref={el => cardsRef.current[index] = el}
          className="h-screen w-full flex items-center justify-center bg-[#050508] relative outline-none"
          style={{ zIndex: index + 1 }}
        >
          {/* Subtle separator */}
          <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
          
          <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Context */}
            <div className="space-y-6">
              <span className="font-mono text-brand-orange text-4xl md:text-6xl font-black tracking-tighter block">
                {protocol.step}.
              </span>
              <h2 className="text-4xl md:text-7xl font-inter font-bold tracking-tight text-white">
                {protocol.title}
              </h2>
              <p className="text-lg md:text-2xl text-gray-400 max-w-lg leading-relaxed mix-blend-screen">
                {protocol.desc}
              </p>
            </div>
            
            {/* Visual */}
            <div className="h-64 md:h-[500px] border border-white/5 rounded-[2rem] bg-white/5 backdrop-blur-md cinematic-container overflow-hidden p-8 flex items-center justify-center">
              {protocol.visual}
            </div>
          </div>
        </div>
      ))}
      
      {/* Spacer removed (handled by flow height) */}
    </section>
  );
};

export default ProtocolSection;
