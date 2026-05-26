import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050508] text-white pt-20 pb-8 mt-12 rounded-t-[4rem] px-6 lg:px-12 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Slogan */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-playfair tracking-[0.14em] uppercase">
              MY <span className="text-brand-gold">Drinks</span>
            </h3>
            <p className="text-gray-400 font-inter max-w-sm text-sm">
              Alta coquetelaria & experiências para eventos premium. Elegância em cada detalhe.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold font-inter mb-6 uppercase tracking-widest text-sm text-gray-200">Explorar</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-brand-gold transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-brand-gold transition-colors">Quem Somos</a></li>
              <li><a href="#experiencias" className="hover:text-brand-gold transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" className="hover:text-brand-gold transition-colors">Diferenciais</a></li>
              <li><a href="#galeria" className="hover:text-brand-gold transition-colors">Galeria</a></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="font-bold font-inter mb-6 uppercase tracking-widest text-sm text-gray-200">Conexão</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a 
                  href="https://instagram.com/mydrinksevents" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-gold transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5588988940894?text=Olá,%20tenho%20interesse%20em%20saber%20mais" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps/place/My+Drinks/@-3.655612,-40.3810764,19.5z/data=!4m6!3m5!1s0x7eac126ce322269:0xd5656e72c324d396!8m2!3d-3.6555366!4d-40.3811879!16s%2Fg%2F11z7t8ds59?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-gold transition-colors"
                >
                  Espaço MyDrinks
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-inter">
          <p>&copy; {new Date().getFullYear()} MY Drinks. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
