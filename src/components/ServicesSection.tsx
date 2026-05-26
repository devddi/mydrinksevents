import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-element',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: 'Drinks & Coquetelaria',
      description: 'Experiências personalizadas para cada evento.',
    },
    {
      title: 'Mesas Gourmet',
      description: 'Apresentação sofisticada e sabores marcantes.',
    },
    {
      title: 'Casamentos',
      description: 'Elegância e exclusividade para o seu grande dia.',
    },
    {
      title: 'Corporativo',
      description: 'Eventos com identidade e impacto.',
    },
  ];

  const testimonials = [
    { quote: 'Serviço de excelência — impecável do início ao fim.', author: 'Depoimento (Instagram)' },
    { quote: 'Superou o que eu sonhei. Foi tudo perfeito.', author: 'Depoimento (Noiva)' },
    { quote: 'Atenciosos desde o primeiro contato. Tudo maravilhoso: bar, comida e equipe.', author: 'Depoimento (WhatsApp)' },
    { quote: 'Os maiores comentários da festa foram dos drinks. Top demais.', author: 'Depoimento (Convidados)' },
    { quote: 'Organização sem filas e equipe muito dedicada. Contrataríamos de novo.', author: 'Depoimento (Cliente)' },
  ];

  return (
    <section ref={sectionRef} id="experiencias" className="py-24 bg-brand-champagne relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16 text-center">
          <p className="service-element text-brand-bronze font-inter text-xs md:text-sm uppercase tracking-[0.32em] mb-5">
            Serviços
          </p>
          <h2 className="service-element text-4xl md:text-5xl text-brand-black leading-tight">
            Experiências sob medida.
          </h2>
          <p className="service-element mt-5 font-inter text-brand-black/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Curadoria, atendimento e execução com estética premium — para que cada detalhe pareça inevitavelmente perfeito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-element rounded-[2rem] bg-white/70 backdrop-blur-sm border border-black/10 px-8 py-10 shadow-[0_18px_50px_rgba(15,15,15,0.10)]"
            >
              <h3 className="text-2xl md:text-3xl text-brand-black leading-tight">
                {service.title}
              </h3>
              <p className="mt-4 font-inter text-brand-black/70 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 h-px bg-gradient-to-r from-brand-gold/70 via-brand-bronze/30 to-transparent" />
            </div>
          ))}
        </div>

        <div className="service-element mt-16 rounded-[2.5rem] bg-brand-black text-white overflow-hidden border border-white/10 shadow-2xl">
          <div className="px-8 py-12 md:px-12 md:py-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-brand-gold font-inter text-xs uppercase tracking-[0.32em] mb-4">
                  Prova social
                </p>
                <h3 className="text-3xl md:text-4xl leading-tight">
                  Elegância percebida em cada detalhe.
                </h3>
              </div>
              <a
                href="https://wa.me/5588988940894?text=Olá,%20tenho%20interesse%20em%20saber%20mais"
                target="_blank"
                rel="noopener noreferrer"
                className="brand-button w-full md:w-auto py-4 px-8"
              >
                Solicitar orçamento
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, index) => (
                <div
                  key={t.author}
                  className={`rounded-[2rem] bg-white/5 border border-white/10 px-8 py-8 ${testimonials.length % 2 === 1 && index === testimonials.length - 1 ? 'md:col-span-2' : ''}`}
                >
                  <p className="font-inter text-white/85 text-lg leading-relaxed italic">
                    “{t.quote}”
                  </p>
                  <p className="mt-6 font-inter text-brand-gold text-sm tracking-[0.14em] uppercase">
                    — {t.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
