import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition to blurred background after scrolling past a threshold
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quem Somos', href: '#sobre' },
    { name: 'Serviços', href: '#experiencias' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Galeria', href: '#galeria' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4 md:px-0 transition-all duration-500">
      <div 
        className={`w-full max-w-5xl flex items-center justify-between px-6 md:px-8 py-4 rounded-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-brand-black/70 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50' 
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home" className="text-xl md:text-2xl font-playfair text-white tracking-[0.14em] uppercase">
            MY <span className="text-brand-gold">Drinks</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-inter text-gray-300 hover:text-white interactive-lift"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a 
            href="https://wa.me/5588988940894?text=Olá,%20tenho%20interesse%20em%20saber%20mais"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-inter font-semibold text-brand-black transition-colors bg-brand-gold/90 hover:bg-brand-gold px-5 py-2 rounded-full border border-white/10 interactive-lift"
          >
            Solicitar orçamento
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-brand-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-inter text-gray-200 py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full mt-4 bg-brand-gold text-brand-black font-semibold py-3 rounded-xl"
          >
            Falar no WhatsApp
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
