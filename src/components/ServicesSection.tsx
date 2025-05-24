
import React from 'react';
import { Wine, Utensils, Users, Building, Heart, Calendar, Loader2 } from 'lucide-react';
import { useSiteServices } from '@/hooks/useSiteData';

const ServicesSection: React.FC = () => {
  const { data: services, isLoading, error } = useSiteServices();

  // Icon mapping
  const iconMap: Record<string, any> = {
    Wine,
    Utensils,
    Users,
    Building,
    Heart,
    Calendar,
    UtensilsCrossed: Utensils,
  };

  if (isLoading) {
    return (
      <section id="servicos" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Loader2 className="animate-spin text-brand-orange" size={48} />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading services:', error);
  }

  // Fallback services if data fails to load
  const fallbackServices = [
    {
      id: 1,
      titulo: 'Drinks Premium',
      descricao: 'Coquetéis autorais, drinks clássicos e criações exclusivas com ingredientes premium',
      icone: 'Wine',
      ordem: 1
    },
    {
      id: 2,
      titulo: 'Buffet Sofisticado',
      descricao: 'Cardápios elaborados com apresentação impecável para todos os tipos de evento',
      icone: 'Utensils',
      ordem: 2
    },
    {
      id: 3,
      titulo: 'Eventos Corporativos',
      descricao: 'Atendimento especializado para empresas, networking e confraternizações',
      icone: 'Building',
      ordem: 3
    }
  ];

  const displayServices = services && services.length > 0 ? services : fallbackServices;

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
            {displayServices.map((service) => {
              const IconComponent = iconMap[service.icone] || Wine;
              
              return (
                <div
                  key={service.id}
                  className="glass-card p-6 group hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-brand-orange" size={28} />
                  </div>
                  
                  <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                    {service.titulo}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.descricao}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <button className="text-brand-orange hover:text-brand-orange-light font-semibold text-sm transition-colors duration-300">
                      Saber mais →
                    </button>
                  </div>
                </div>
              );
            })}
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
