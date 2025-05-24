import React from 'react';
import { Phone, Mail, Instagram, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10" style={{ backgroundColor: '#181818' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white">
                  MyDrinks<span className="text-brand-orange">!</span>
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Transformamos eventos em experiências inesquecíveis com drinks, coquetéis 
                e mesas gourmet.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="tel:+5511999999999" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange/20 transition-colors duration-300"
                >
                  <Phone className="text-brand-orange" size={18} />
                </a>
                <a 
                  href="mailto:contato@mydrinks.com.br" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange/20 transition-colors duration-300"
                >
                  <Mail className="text-brand-orange" size={18} />
                </a>
                <a 
                  href="https://instagram.com/mydrinks" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange/20 transition-colors duration-300"
                >
                  <Instagram className="text-brand-orange" size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-lg">Links Rápidos</h4>
              <div className="space-y-2">
                <button 
                  onClick={scrollToTop}
                  className="block text-gray-300 hover:text-brand-orange transition-colors duration-300"
                >
                  Início
                </button>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-brand-orange transition-colors duration-300"
                >
                  Sobre Nós
                </button>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-brand-orange transition-colors duration-300"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-brand-orange transition-colors duration-300"
                >
                  Galeria
                </button>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-brand-orange transition-colors duration-300"
                >
                  Contato
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-lg">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="text-brand-orange flex-shrink-0" size={18} />
                  <span className="text-gray-300">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-brand-orange flex-shrink-0" size={18} />
                  <span className="text-gray-300">contato@mydrinks.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-brand-orange flex-shrink-0" size={18} />
                  <span className="text-gray-300">São Paulo e Região</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram className="text-brand-orange flex-shrink-0" size={18} />
                  <span className="text-gray-300">@mydrinks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 MyDrinks! Todos os direitos reservados.
              </div>
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <span>Feito com</span>
                <Heart className="text-brand-orange fill-current" size={16} />
                <span>para eventos únicos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
