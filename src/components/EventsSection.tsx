import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useEvents } from '@/hooks/useEvents';
import { Loader2 } from 'lucide-react';

const EventsSection: React.FC = () => {
  const navigate = useNavigate();
  const { events, isLoading } = useEvents(true); // true means only Active
  const topEvents = events.slice(0, 3);

  return (
    <section id="eventos" className="py-24 relative bg-brand-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-brand-gold font-inter text-xs md:text-sm uppercase tracking-[0.32em] mb-5">
                Nossas Entregas
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
                Momentos <span className="text-drama">inesquecíveis.</span>
              </h2>
              <p className="font-inter text-base md:text-lg text-white/70 leading-relaxed">
                Cada evento é único, e nossa missão é transformar a sua celebração em uma verdadeira obra de arte através da alta coquetelaria.
              </p>
            </div>
            
            <Link 
              to="/eventos" 
              className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-orange-light font-inter font-semibold group transition-colors duration-300 interactive-lift w-fit whitespace-nowrap px-6 py-3 border border-brand-gold/30 rounded-full hover:bg-brand-gold/10"
            >
              Ver todos os eventos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Events grid */}
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin text-brand-gold" size={48} />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {topEvents.map((event, index) => (
              <div 
                key={event.id} 
                className={`glass-card p-0 group cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 ease-out hover:-translate-y-2`}
                onClick={() => navigate(`/eventos/${event.id}`)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-black/20 z-10 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
                  <img 
                    src={event.cover_image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                    style={{ filter: 'saturate(0.85) contrast(1.1)' }} 
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block bg-black/60 backdrop-blur-md text-brand-gold text-xs px-3 py-1.5 rounded-full font-semibold border border-white/10 uppercase tracking-wider">
                      {event.event_date}
                    </span>
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 z-10" />
                </div>
                
                {/* Card content */}
                <div className="p-6 md:p-8 relative z-20">
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm leading-relaxed mb-6 font-inter line-clamp-2">
                    {event.short_description}
                  </p>
                  
                  <div className="flex items-center text-white/80 group-hover:text-white font-medium text-sm transition-colors duration-300">
                    Ver dossiê do evento 
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:text-brand-gold transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
            </div>
          )}

          {/* CTA Mobile (Optional, hidden on desktop since it's on header) */}
          <div className="mt-10 text-center md:hidden">
            <Link 
              to="/eventos" 
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-semibold px-8 py-3.5 rounded-full interactive-lift"
            >
              Explorar todos
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
