import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { useSiteGallery } from '@/hooks/useSiteData';
const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const {
    data: galleryImages,
    isLoading,
    error
  } = useSiteGallery();
  if (isLoading) {
    return <section id="galeria" className="py-20 relative bg-brand-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Loader2 className="animate-spin text-brand-orange" size={48} />
          </div>
        </div>
      </section>;
  }
  if (error) {
    console.error('Error loading gallery:', error);
    return <section id="galeria" className="py-20 relative bg-brand-black">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <p>Erro ao carregar galeria. Tente novamente mais tarde.</p>
          </div>
        </div>
      </section>;
  }
  if (!galleryImages || galleryImages.length === 0) {
    return <section id="galeria" className="py-20 relative bg-brand-black">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <p>Nenhuma imagem encontrada na galeria.</p>
          </div>
        </div>
      </section>;
  }
  return <section id="galeria" className="py-24 relative bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-brand-gold font-inter text-xs md:text-sm uppercase tracking-[0.32em] mb-5">
              Galeria
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6 leading-tight">
              A arte de celebrar em <span className="text-drama">detalhes.</span>
            </h2>
            <p className="font-inter text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
              Uma curadoria visual de grandes eventos, marcada pela sofisticação dos nossos drinks e a excelência de cada entrega.
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map(image => <div key={image.id} className="glass-card p-0 group hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden" onClick={() => setSelectedImage(image.url_imagem)}>
                {/* Image container */}
                <div className="aspect-square relative overflow-hidden rounded-t-xl">
                  <img src={image.url_imagem} alt={image.titulo || image.descricao || 'Imagem da galeria'} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" style={{ filter: 'saturate(0.78) contrast(1.08) brightness(0.92)' }} />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Card content */}
                <div className="p-4 md:p-6">
                  {image.categoria && <div className="mb-3">
                      <span className="inline-block bg-brand-gold/15 text-brand-gold text-xs px-3 py-1 rounded-full font-semibold">
                        {image.categoria}
                      </span>
                    </div>}
                  
                  {image.titulo && <h3 className="font-playfair text-lg font-semibold text-white mb-2">
                      {image.titulo}
                    </h3>}
                  
                  {image.descricao && <p className="text-white/70 text-sm leading-relaxed mb-4 font-inter">
                      {image.descricao}
                    </p>}
                  
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-brand-gold hover:text-brand-orange-light font-semibold text-sm transition-colors duration-300">
                      Ver imagem →
                    </span>
                  </div>
                </div>
              </div>)}
          </div>

          {/* Modal for enlarged image */}
          {selectedImage && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
              <div className="relative max-w-4xl max-h-full w-full">
                <button onClick={() => setSelectedImage(null)} className="absolute -top-4 -right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 z-10">
                  <X size={20} />
                </button>
                <img src={selectedImage} alt="Imagem ampliada" className="max-w-full max-h-full object-contain rounded-lg mx-auto" />
              </div>
            </div>}

          {/* CTA */}
          <div className="text-center mt-12 md:mt-16">
            
          </div>
        </div>
      </div>
    </section>;
};
export default GallerySection;
