
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useSiteTestimonials } from '@/hooks/useSiteData';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: testimonials, isLoading, error } = useSiteTestimonials();

  // Fallback testimonials if data fails to load
  const fallbackTestimonials = [
    {
      id: 1,
      nome_cliente: 'Marina Silva',
      empresa: 'Noiva',
      avaliacao: 5,
      depoimento: 'A MyDrinks! fez do nosso casamento um sonho realizado. Os drinks eram únicos e o buffet superou todas as expectativas. Nossos convidados não param de elogiar!',
      foto_cliente: 'https://images.unsplash.com/photo-1494790108755-2616b612b120?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 2,
      nome_cliente: 'Roberto Santos',
      empresa: 'Diretor de RH - TechCorp',
      avaliacao: 5,
      depoimento: 'Contratamos para nossa confraternização anual e o resultado foi excepcional. Profissionalismo, qualidade e criatividade em cada detalhe. Recomendo fortemente!',
      foto_cliente: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 3,
      nome_cliente: 'Ana Carolina',
      empresa: 'Organizadora de Eventos',
      avaliacao: 5,
      depoimento: 'Trabalho com eventos há 10 anos e posso afirmar: a MyDrinks! é referência em qualidade. Sempre entregam além do prometido, com pontualidade e excelência.',
      foto_cliente: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
    }
  ];

  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : fallbackTestimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [displayTestimonials.length]);

  if (isLoading) {
    return (
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Loader2 className="animate-spin text-brand-orange" size={48} />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading testimonials:', error);
  }

  const currentTestimonial = displayTestimonials[currentIndex];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              O que nossos <span className="text-brand-orange">clientes</span> dizem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A satisfação dos nossos clientes é nossa maior conquista
            </p>
          </div>

          {/* Testimonial carousel */}
          <div className="relative">
            <div className="glass-card p-8 md:p-12">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                >
                  <ChevronLeft className="text-white" size={24} />
                </button>
                
                <div className="flex space-x-2">
                  {displayTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentIndex ? 'bg-brand-orange' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                >
                  <ChevronRight className="text-white" size={24} />
                </button>
              </div>

              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {Array.from({ length: currentTestimonial.avaliacao }).map((_, index) => (
                    <Star key={index} className="text-brand-orange fill-current" size={24} />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed italic">
                  "{currentTestimonial.depoimento}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={currentTestimonial.foto_cliente || 'https://images.unsplash.com/photo-1494790108755-2616b612b120?q=80&w=400&auto=format&fit=crop'}
                    alt={currentTestimonial.nome_cliente}
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-orange/30"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-white text-lg">
                      {currentTestimonial.nome_cliente}
                    </div>
                    <div className="text-gray-400">
                      {currentTestimonial.empresa}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">98%</div>
              <div className="text-gray-300">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">500+</div>
              <div className="text-gray-300">Eventos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">5★</div>
              <div className="text-gray-300">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
