import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050508] text-white pt-20 pb-8 mt-12 rounded-t-[4rem] px-6 lg:px-12 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Slogan */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl font-playfair font-bold">
              My <span className="text-brand-orange">Drinks!</span>
            </h3>
            <p className="text-gray-400 font-inter max-w-sm text-sm">
              Mais que bebidas. Uma experiência completa e memorável para o seu evento. Elegância em cada detalhe, desde novembro de 2024.
            </p>
            
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 mt-4">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]" />
              <span className="text-xs font-mono text-gray-300 tracking-wider">AGENDA_OPERACIONAL</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold font-inter mb-6 uppercase tracking-widest text-sm text-gray-200">Explorar</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-brand-orange transition-colors">A Cena</a></li>
              <li><a href="#sobre" className="hover:text-brand-orange transition-colors">O Manifesto</a></li>
              <li><a href="#experiencias" className="hover:text-brand-orange transition-colors">Nossa Entrega</a></li>
              <li><a href="#protocolo" className="hover:text-brand-orange transition-colors">Protocolo</a></li>
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
                  className="hover:text-brand-orange transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5588988940894?text=Olá,%20tenho%20interesse%20em%20saber%20mais" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-orange transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps/place/3%C2%B039'19.9%22S+40%C2%B022'52.1%22W/@-3.6555487,-40.3812265,3a,75y,81.98h,67.69t/data=!3m7!1e1!3m5!1sDLAeMHwXaNzORg9ufwSdcA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D22.312412239045017%26panoid%3DDLAeMHwXaNzORg9ufwSdcA%26yaw%3D81.97760598895212!7i13312!8i6656!4m4!3m3!8m2!3d-3.6555328!4d-40.3811493?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-orange transition-colors"
                >
                  Espaço MyDrinks
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-inter">
          <p>&copy; {new Date().getFullYear()} My Drinks! Todos os direitos reservados.</p>
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
