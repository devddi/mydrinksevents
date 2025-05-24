
import React from 'react';
import { Wine, Utensils, Users, Building, Heart, Calendar } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Wine,
      title: 'Drinks Premium',
      description: 'Coquetéis autorais, drinks clássicos e criações exclusivas com ingredientes premium',
      features: ['Bartenders profissionais', 'Equipamentos completos', 'Drinks personalizados', 'Degustação prévia']
    },
    {
      icon: Utensils,
      title: 'Buffet Sofisticado',
      description: 'Cardápios elaborados com apresentação impecável para todos os tipos de evento',
      features: ['Cardápio personalizado', 'Ingredientes frescos', 'Apresentação gourmet', 'Opções vegetarianas']
    },
    {
      icon: Building,
      title: 'Eventos Corporativos',
      description: 'Atendimento especializado para empresas, networking e confraternizações',
      features: ['Coffee break premium', 'Happy hour executivo', 'Almoços corporativos', 'Coquetéis de networking']
    },
    {
      icon: Heart,
      title: 'Casamentos',
      description: 'Transformamos o seu dia especial em uma experiência gastronômica inesquecível',
      features: ['Degustação para noivos', 'Cardápio personalizado', 'Decoração temática', 'Serviço completo']
    },
    {
      icon: Users,
      title: 'Festas & Aniversários',
      description: 'Celebrações únicas com o toque especial da MyDrinks!',
      features: ['Temas personalizados', 'Drinks temáticos', 'Buffet variado', 'Animação gastronômica']
    },
    {
      icon: Calendar,
      title: 'Eventos Especiais',
      description: 'Formaturas, confraternizações e celebrações que merecem destaque',
      features: ['Planejamento completo', 'Equipe especializada', 'Logística profissional', 'Pós-evento incluso']
    }
  ];

  return (
    <section id="servicos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos <span className="text-brand-orange">Serviços</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções completas para todos os tipos de eventos, 
              sempre com qualidade premium e atendimento personalizado
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-6 group hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-brand-orange" size={28} />
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button className="text-brand-orange hover:text-brand-orange-light font-semibold text-sm transition-colors duration-300">
                    Saber mais →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="font-playfair text-2xl font-semibold text-white mb-4">
                Não encontrou o que procura?
              </h3>
              <p className="text-gray-300 mb-6">
                Criamos soluções personalizadas para atender suas necessidades específicas
              </p>
              <button className="brand-button">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
