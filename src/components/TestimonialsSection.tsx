
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Marina Silva',
      role: 'Noiva',
      rating: 5,
      text: 'A MyDrinks! fez do nosso casamento um sonho realizado. Os drinks eram únicos e o buffet superou todas as expectativas. Nossos convidados não param de elogiar!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b120?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Roberto Santos',
      role: 'Diretor de RH - TechCorp',
      rating: 5,
      text: 'Contratamos para nossa confraternização anual e o resultado foi excepcional. Profissionalismo, qualidade e criatividade em cada detalhe. Recomendo fortemente!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Ana Carolina',
      role: 'Organizadora de Eventos',
      rating: 5,
      text: 'Trabalho com eventos há 10 anos e posso afirmar: a MyDrinks! é referência em qualidade. Sempre entregam além do prometido, com pontualidade e excelência.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Carlos Eduardo',
      role: 'Aniversariante',
      rating: 5,
      text: 'Meus 50 anos ficaram inesquecíveis! Os drinks temáticos e o buffet gourmet impressionaram todos os convidados. Serviço impecável do início ao fim.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

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
                  {testimonials.map((_, index) => (
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
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, index) => (
                    <Star key={index} className="text-brand-orange fill-current" size={24} />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-orange/30"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-white text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[currentIndex].role}
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
