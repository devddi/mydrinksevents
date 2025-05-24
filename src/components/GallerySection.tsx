
import React, { useState } from 'react';
import { X } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop',
      alt: 'Drinks elegantes em evento corporativo',
      category: 'Drinks'
    },
    {
      src: 'https://images.unsplash.com/photo-1566417109195-b8cb00c3e5d5?q=80&w=800&auto=format&fit=crop',
      alt: 'Buffet sofisticado para casamento',
      category: 'Buffet'
    },
    {
      src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop',
      alt: 'Mesa de drinks variados',
      category: 'Drinks'
    },
    {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
      alt: 'Evento corporativo com buffet premium',
      category: 'Corporativo'
    },
    {
      src: 'https://images.unsplash.com/photo-1561651188-d207bbec9dcb?q=80&w=800&auto=format&fit=crop',
      alt: 'Casamento com decoração elegante',
      category: 'Casamento'
    },
    {
      src: 'https://images.unsplash.com/photo-1551218372-a8789b81b253?q=80&w=800&auto=format&fit=crop',
      alt: 'Coquetéis artesanais',
      category: 'Drinks'
    },
    {
      src: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop',
      alt: 'Festa de aniversário premium',
      category: 'Festa'
    },
    {
      src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=800&auto=format&fit=crop',
      alt: 'Buffet gourmet variado',
      category: 'Buffet'
    }
  ];

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-brand-orange text-white text-xs px-2 py-1 rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-white text-sm font-medium leading-tight">
                      {image.alt}
                    </p>
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
