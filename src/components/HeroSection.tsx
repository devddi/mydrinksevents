
import React from 'react';
import { ChevronDown, Sparkles, Award, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#181818' }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900/90 z-10" />
      
      {/* Hero background images */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://drinkerita.com.br/wp-content/uploads/2021/08/DEFUMACAO-COM-ERVAS-HERBACEAS.jpg')`,
        }}
      />
      
      {/* Additional smoke/herbs image overlay for depth */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-5 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566417109195-b8cb00c3e5d5?q=80&w=2000&auto=format&fit=crop')`,
          mixBlendMode: 'overlay'
        }}
      />

      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="animate-fade-in-up">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transforme seu evento com os{' '}
              <span className="text-brand-orange">melhores drinks</span>{' '}
              e buffet premium
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Criamos experiências únicas com drinks personalizados e buffet sofisticado 
              para casamentos, eventos corporativos e celebrações especiais
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="brand-button text-lg px-8 py-4"
            >
              Solicitar Orçamento
            </button>
            <button
              onClick={scrollToServices}
              className="glass-button text-white text-lg px-8 py-4 font-semibold"
            >
              Conhecer Serviços
            </button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card p-6 text-center">
              <Sparkles className="text-brand-orange mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-300">Eventos Realizados</div>
            </div>
            <div className="glass-card p-6 text-center">
              <Award className="text-brand-orange mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-white mb-1">5★</div>
              <div className="text-gray-300">Avaliação dos Clientes</div>
            </div>
            <div className="glass-card p-6 text-center">
              <Users className="text-brand-orange mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-white mb-1">10k+</div>
              <div className="text-gray-300">Pessoas Atendidas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-white" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
