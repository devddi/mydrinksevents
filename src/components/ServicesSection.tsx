import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Card 1: Shuffler State
  const [shufflerStack, setShufflerStack] = useState([
    { id: 1, title: 'Insumos Premium', desc: 'Frutas frescas e destilados selecionados.' },
    { id: 2, title: 'Preparo Artesanal', desc: 'Técnicas clássicas e contemporâneas em harmonia.' },
    { id: 3, title: 'Apresentação Intocável', desc: 'Visual que antecipa a primeira gota.' },
  ]);

  useEffect(() => {
    // Card 1 Shuffler Interval
    const interval = setInterval(() => {
      setShufflerStack((prev) => {
        const next = [...prev];
        const last = next.pop();
        if (last) next.unshift(last);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Card 2 Typewriter State
  const typewriterText = "PREPARANDO_MESA>> \nCARREGANDO_ESPECIARIAS: 100% \nSINCRONIZANDO_BEBIDAS... \nSTATUS: EXPERIÊNCIA PRONTA_";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      setDisplayedText(typewriterText.slice(0, i));
      i++;
      if (i > typewriterText.length) i = 0;
    }, 150);
    return () => clearInterval(typeInterval);
  }, []);

  // GSAP animations for the cards
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experiencias" className="py-24 bg-[#181818] relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-brand-orange font-mono text-sm uppercase tracking-widest mb-4">Nossa Entrega</p>
          <h2 className="text-4xl md:text-5xl font-bold font-inter text-white tracking-tight">
            Design de <span className="text-drama text-5xl md:text-6xl">Serviço</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Diagnostic Shuffler -> Qualidade */}
          <div className="feature-card glass-card p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden group">
            <h3 className="font-bold text-xl text-white mb-2 self-start">Qualidade Curada</h3>
            <p className="text-gray-400 text-sm mb-8 self-start">Rotação de excelência nos detalhes.</p>
            
            <div className="relative w-full h-48 flex items-center justify-center perspective-1000">
              {shufflerStack.map((item, index) => {
                const isTop = index === 0;
                const yOffset = index * 12;
                const scale = 1 - index * 0.05;
                const opacity = 1 - index * 0.2;
                
                return (
                  <div 
                    key={item.id}
                    className="absolute w-[80%] bg-[#0D0D12] border border-white/10 rounded-2xl p-4 shadow-xl transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    style={{
                      transform: `translateY(${yOffset}px) scale(${scale})`,
                      opacity: opacity,
                      zIndex: 10 - index
                    }}
                  >
                    <p className="text-brand-orange text-xs font-mono mb-1">0{item.id}</p>
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    {isTop && <p className="text-gray-400 text-xs">{item.desc}</p>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 2: Telemetry Typewriter -> Paixão/Detalhes */}
          <div className="feature-card glass-card p-6 md:p-8 flex flex-col relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-xl text-white">Telemetria de Evento</h3>
              <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-[10px] font-mono text-gray-300">LIVE FEED</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mb-6">Mapeamento granular de insumos e ritmos.</p>
            
            <div className="flex-grow bg-[#0D0D12] rounded-2xl p-4 border border-white/5 font-mono text-xs md:text-sm text-brand-orange/80 whitespace-pre-line leading-relaxed shadow-inner">
              {displayedText}
              <span className="inline-block w-2 h-4 bg-brand-orange animate-pulse align-middle ml-1" />
            </div>
          </div>

          {/* Card 3: Cursor Protocol Scheduler -> Pontualidade */}
          <div className="feature-card glass-card p-6 md:p-8 flex flex-col relative overflow-hidden">
            <h3 className="font-bold text-xl text-white mb-2">Protocolo de Confiança</h3>
            <p className="text-gray-400 text-sm mb-8">O timing perfeito, orquestrado.</p>
            
            <div className="w-full bg-[#0D0D12] rounded-2xl p-4 border border-white/5 relative h-48">
              {/* Mini-grid weekly */}
              <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2 text-center text-[10px] text-gray-500 font-mono">
                <span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span>
              </div>
              <div className="grid grid-cols-7 gap-1 md:gap-2 h-24">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i} className={`rounded-sm border border-white/5 transition-colors duration-300 ${i === 12 ? 'bg-brand-orange/40 shadow-[0_0_10px_rgba(255,84,0,0.5)]' : 'bg-white/5'}`} />
                ))}
              </div>
              
              {/* Fake SVG Cursor Animation */}
              <svg 
                className="absolute text-white w-6 h-6 animate-[cursor-move_4s_infinite]" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
              >
                <path d="M7 2l12 11.2-5.8.5 3.3 6.6-2.8 1.4-3.3-6.6-4.5 4.5z" />
              </svg>

              <style>{`
                @keyframes cursor-move {
                  0% { transform: translate(10px, 10px) scale(1); opacity: 0; }
                  20% { transform: translate(30px, 40px) scale(1); opacity: 1; }
                  40% { transform: translate(150px, 60px) scale(1); }
                  50% { transform: translate(150px, 60px) scale(0.9); } /* click */
                  70% { transform: translate(200px, 100px) scale(1); opacity: 1; }
                  90% { transform: translate(220px, 110px) scale(1); opacity: 0; }
                  100% { transform: translate(10px, 10px) scale(1); opacity: 0; }
                }
              `}</style>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;