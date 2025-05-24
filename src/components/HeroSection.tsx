
import React from 'react';
import { Sparkles, Award, Users } from 'lucide-react';

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
      <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }} />
      
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

      <div className="relative z-20 container mx-auto px-4 py-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="animate-fade-in-up mt-16 sm:mt-20 md:mt-24 lg:mt-28">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight px-2">
              Transforme seu evento com os{' '}
              <span className="text-brand-orange">melhores drinks</span>{' '}
              e mesas gourmet
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Criamos experiências únicas com drinks personalizados, coquetéis e mesas gourmet 
              para casamentos, eventos corporativos e celebrações especiais
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col gap-3 sm:gap-4 justify-center mb-8 md:mb-12 px-4" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="brand-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              Solicitar Orçamento
            </button>
            <button
              onClick={scrollToServices}
              className="glass-button text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold w-full sm:w-auto"
            >
              Conhecer Serviços
            </button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto px-4" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card p-4 md:p-6 text-center">
              <Sparkles className="text-brand-orange mx-auto mb-2" size={28} />
              <div className="text-xl md:text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-sm md:text-base text-gray-300">Eventos Realizados</div>
            </div>
            <div className="glass-card p-4 md:p-6 text-center">
              <Award className="text-brand-orange mx-auto mb-2" size={28} />
              <div className="text-xl md:text-2xl font-bold text-white mb-1">5★</div>
              <div className="text-sm md:text-base text-gray-300">Avaliação dos Clientes</div>
            </div>
            <div className="glass-card p-4 md:p-6 text-center">
              <Users className="text-brand-orange mx-auto mb-2" size={28} />
              <div className="text-xl md:text-2xl font-bold text-white mb-1">10k+</div>
              <div className="text-sm md:text-base text-gray-300">Pessoas Atendidas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
