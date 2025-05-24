
import React from 'react';
import { Heart, Star, Clock, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Paixão pelos Detalhes',
      description: 'Cada drink e prato é preparado com carinho e atenção aos mínimos detalhes'
    },
    {
      icon: Star,
      title: 'Qualidade Premium',
      description: 'Ingredientes selecionados e apresentação impecável em todos os nossos serviços'
    },
    {
      icon: Clock,
      title: 'Pontualidade',
      description: 'Chegamos sempre no horário combinado, garantindo que seu evento seja perfeito'
    },
    {
      icon: Shield,
      title: 'Confiança',
      description: 'Mais de 5 anos transformando eventos em experiências inesquecíveis'
    }
  ];

  return (
    <section id="sobre" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre a <span className="text-brand-orange">MyDrinks!</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Somos especialistas em criar experiências gastronômicas únicas que transformam 
              qualquer evento em uma celebração memorável
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text content */}
            <div className="space-y-6">
              <div className="glass-card p-8">
                <h3 className="font-playfair text-2xl font-semibold text-white mb-4">
                  Nossa História
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A MyDrinks! nasceu da paixão por criar momentos especiais através da gastronomia. 
                  Fundada em 2019, começamos com o sonho de elevar o padrão de drinks e buffet 
                  para eventos em São Paulo.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Hoje, somos referência em qualidade e inovação, atendendo desde casamentos íntimos 
                  até grandes eventos corporativos, sempre com o mesmo compromisso: superar expectativas 
                  e criar experiências inesquecíveis.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="glass-card p-4">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop"
                  alt="Equipe MyDrinks preparando drinks"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-brand-orange" size={28} />
                </div>
                <h4 className="font-semibold text-white mb-2 text-lg">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
