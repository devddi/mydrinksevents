
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="https://vlriviouictrannhemnh.supabase.co/storage/v1/object/public/midiasOMD/fotosBebidas/logo-omd.svg" 
              alt="MyDrinks Logo" 
              className="w-10 h-10"
            />
            <h1 className="font-playfair text-2xl font-bold text-white">
              MyDrinks<span className="text-brand-orange">!</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-brand-orange transition-colors duration-300"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-white hover:text-brand-orange transition-colors duration-300"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-brand-orange transition-colors duration-300"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="text-white hover:text-brand-orange transition-colors duration-300"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-brand-orange transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-1">
                <Phone size={16} className="text-brand-orange" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-1">
                <Instagram size={16} className="text-brand-orange" />
                <span>@mydrinks</span>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('contato')}
              className="brand-button"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
