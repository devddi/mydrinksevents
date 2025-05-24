
import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { useSiteGallery } from '@/hooks/useSiteData';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { data: galleryImages, isLoading, error } = useSiteGallery();

  if (isLoading) {
    return (
      <section id="galeria" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Loader2 className="animate-spin text-brand-orange" size={48} />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading gallery:', error);
    return (
      <section id="galeria" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <p>Erro ao carregar galeria. Tente novamente mais tarde.</p>
          </div>
        </div>
      </section>
    );
  }

  if (!galleryImages || galleryImages.length === 0) {
    return (
      <section id="galeria" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <p>Nenhuma imagem encontrada na galeria.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="galeria" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Galeria de <span className="text-brand-orange">Eventos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Veja alguns dos nossos trabalhos e se inspire para o seu próximo evento
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="glass-card p-0 group hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(image.url_imagem)}
              >
                {/* Image container */}
                <div className="aspect-square relative overflow-hidden rounded-t-xl">
                  <img
                    src={image.url_imagem}
                    alt={image.titulo || image.descricao || 'Imagem da galeria'}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Card content */}
                <div className="p-6">
                  {image.categoria && (
                    <div className="mb-3">
                      <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs px-3 py-1 rounded-full font-semibold">
                        {image.categoria}
                      </span>
                    </div>
                  )}
                  
                  {image.titulo && (
                    <h3 className="font-playfair text-lg font-semibold text-white mb-2">
                      {image.titulo}
                    </h3>
                  )}
                  
                  {image.descricao && (
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {image.descricao}
                    </p>
                  )}
                  
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-brand-orange hover:text-brand-orange-light font-semibold text-sm transition-colors duration-300">
                      Ver imagem →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for enlarged image */}
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-4 -right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 z-10"
                >
                  <X size={20} />
                </button>
                <img
                  src={selectedImage}
                  alt="Imagem ampliada"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="font-playfair text-2xl font-semibold text-white mb-4">
                Seu evento pode estar aqui!
              </h3>
              <p className="text-gray-300 mb-6">
                Entre em contato e vamos criar juntos uma experiência única para sua celebração
              </p>
              <button className="brand-button">
                Começar Meu Projeto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
