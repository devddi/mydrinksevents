
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Instagram, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
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
              src="https://vlriviouictrannhemnh.supabase.co/storage/v1/object/public/midiasOMD/fotosBebidas/logo.png" 
              alt="MyDrinks Logo" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <h1 className="font-playfair text-xl md:text-2xl font-bold text-white">
              MyDrinks<span className="text-brand-orange">!</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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

          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Desktop Contact Info */}
            <div className="hidden xl:flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-1">
                <Phone size={16} className="text-brand-orange" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-1">
                <Instagram size={16} className="text-brand-orange" />
                <span>@mydrinks</span>
              </div>
            </div>

            {/* CTA Button - Hidden on mobile */}
            <button
              onClick={() => scrollToSection('contato')}
              className="hidden md:block brand-button text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3"
            >
              Solicitar Orçamento
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 glass-card">
            <nav className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-brand-orange transition-colors duration-300 text-left py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-white hover:text-brand-orange transition-colors duration-300 text-left py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-white hover:text-brand-orange transition-colors duration-300 text-left py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="text-white hover:text-brand-orange transition-colors duration-300 text-left py-2"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-white hover:text-brand-orange transition-colors duration-300 text-left py-2"
              >
                Contato
              </button>
              
              {/* Mobile CTA Button */}
              <button
                onClick={() => scrollToSection('contato')}
                className="brand-button text-center mt-4"
              >
                Solicitar Orçamento
              </button>

              {/* Mobile Contact Info */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-brand-orange" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram size={16} className="text-brand-orange" />
                  <span>@mydrinks</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
