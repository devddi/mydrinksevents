
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guests: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Orçamento solicitado com sucesso!",
        description: "Entraremos em contato em até 24 horas.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        guests: '',
        message: ''
      });
    }, 2000);
  };

  const openWhatsApp = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para meu evento.
    
Nome: ${formData.name || 'Não informado'}
Tipo de evento: ${formData.eventType || 'Não informado'}
Data do evento: ${formData.eventDate || 'Não informada'}
Número de convidados: ${formData.guests || 'Não informado'}
    
Aguardo contato!`;
    
    const whatsappUrl = `https://wa.me/5588988940894?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para fazer do seu evento um <span className="text-brand-orange">sucesso?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Entre em contato e vamos criar juntos uma experiência única para sua celebração
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="font-playfair text-2xl font-semibold text-white mb-6">
                  Fale Conosco
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <Phone className="text-brand-orange" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Telefone</div>
                      <div className="text-gray-300">(88) 98894-0894</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <Mail className="text-brand-orange" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">E-mail</div>
                      <div className="text-gray-300">contato@mydrinks.com.br</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <Instagram className="text-brand-orange" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Instagram</div>
                      <div className="text-gray-300">@mydrinksevents</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <MapPin className="text-brand-orange" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Atendimento</div>
                      <div className="text-gray-300">Sobral e Região</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={openWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone size={20} />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="glass-card p-8">
              <h3 className="font-playfair text-2xl font-semibold text-white mb-6">
                Solicitar Orçamento
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-brand-orange focus:outline-none transition-colors duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-brand-orange focus:outline-none transition-colors duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-brand-orange focus:outline-none transition-colors duration-300"
                      placeholder="(88) 98888-8888"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Data do Evento
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-brand-orange focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Tipo de Evento *
                    </label>
                    <select
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-brand-orange focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="casamento">Casamento</option>
                      <option value="corporativo">Evento Corporativo</option>
                      <option value="aniversario">Aniversário</option>
                      <option value="festa">Festa</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Número de Convidados
                    </label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-brand-orange focus:outline-none transition-colors duration-300"
                      placeholder="Ex: 50"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-brand-orange focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Conte-nos mais sobre seu evento..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full brand-button flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Solicitar Orçamento</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
