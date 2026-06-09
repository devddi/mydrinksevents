import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Loader2 } from 'lucide-react';
import { useEvents } from '@/hooks/useEvents';
import Footer from '@/components/Footer';

const EventDossier = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { events, isLoading } = useEvents(true);
  const event = events.find(e => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center">
        <Loader2 className="animate-spin text-brand-gold" size={48} />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center flex-col gap-6">
        <h1 className="text-white font-playfair text-3xl">Evento não encontrado</h1>
        <button 
          onClick={() => navigate('/eventos')}
          className="text-brand-gold hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Voltar para Eventos
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-playfair text-white tracking-[0.14em] uppercase">
            MY <span className="text-brand-gold">Drinks</span>
          </Link>
          <Link 
            to="/eventos" 
            className="flex items-center gap-2 text-white/70 hover:text-brand-gold transition-colors font-inter text-sm"
          >
            <ArrowLeft size={16} />
            Voltar para Eventos
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-32 pb-24">
        {/* Dossier Header (Left Desc, Right Image) */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              
              {/* Left Content */}
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="inline-block bg-brand-gold/10 border border-brand-gold/30 text-brand-gold px-4 py-2 rounded-full text-sm font-semibold tracking-widest mb-8">
                  {event.event_date}
                </div>
                
                <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                  {event.title}
                </h1>
                
                <div className="prose prose-invert prose-lg">
                  <p className="text-white/70 font-inter leading-relaxed text-lg whitespace-pre-wrap">
                    {event.full_description}
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square shadow-2xl shadow-black/50 border border-white/5">
                  <img 
                    src={event.cover_image} 
                    alt={`Capa do evento ${event.title}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">
                Galeria do <span className="text-brand-gold">Evento</span>
              </h2>
              <p className="text-white/50 font-inter">
                Clique nas fotos para expandir
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {event.gallery.map((image, index) => (
                <div 
                  key={image.id}
                  className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-white/5"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <img 
                    src={image.url} 
                    alt="Foto da galeria" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-full md:max-w-3xl lg:max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Imagem ampliada" 
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl" 
            />
            
            <a 
              href={selectedImage}
              download="imagem-evento.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-brand-gold text-brand-black px-6 py-3 rounded-full font-inter font-semibold hover:bg-brand-orange-light transition-colors duration-300"
            >
              <Download size={20} />
              Baixar Foto
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDossier;
