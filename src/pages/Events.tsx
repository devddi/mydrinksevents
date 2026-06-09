import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { useEvents } from '@/hooks/useEvents';
import Footer from '@/components/Footer';

const Events = () => {
  const navigate = useNavigate();
  const { events, isLoading } = useEvents(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black flex flex-col">
      {/* Header Simplificado para página interna */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-playfair text-white tracking-[0.14em] uppercase">
            MY <span className="text-brand-gold">Drinks</span>
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white/70 hover:text-brand-gold transition-colors font-inter text-sm"
          >
            <ArrowLeft size={16} />
            Voltar ao Início
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Título da Página */}
          <div className="text-center mb-16 md:mb-24">
            <p className="text-brand-gold font-inter text-sm uppercase tracking-[0.32em] mb-4">
              Portfólio de Experiências
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Todos os <span className="text-drama">Eventos</span>
            </h1>
            <p className="font-inter text-white/60 max-w-2xl mx-auto text-lg">
              Explore nossa galeria de entregas e veja como transformamos diferentes celebrações em momentos únicos.
            </p>
          </div>

          {/* Grid de Eventos */}
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin text-brand-gold" size={48} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {events.map((event, index) => (
              <div 
                key={event.id}
                className="group cursor-pointer flex flex-col"
                onClick={() => navigate(`/eventos/${event.id}`)}
              >
                {/* Imagem com reveal effect */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                  <div className="absolute inset-0 bg-brand-black/20 z-10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300" />
                  <img 
                    src={event.cover_image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    style={{ filter: 'saturate(0.9) contrast(1.05)' }}
                  />
                </div>

                {/* Conteúdo */}
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-brand-gold font-inter text-xs font-semibold tracking-wider uppercase">
                      {event.event_date}
                    </span>
                    <div className="h-[1px] flex-grow bg-white/10" />
                  </div>
                  
                  <h2 className="font-playfair text-2xl md:text-3xl text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {event.title}
                  </h2>
                  
                  <p className="text-white/60 font-inter leading-relaxed mb-6">
                    {event.short_description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-white/80 font-semibold text-sm group-hover:text-brand-gold transition-colors duration-300">
                    Ver Dossiê Completo
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
