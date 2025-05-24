
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guests: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      eventType: value
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
        phone: '',
        eventDate: '',
        eventType: '',
        guests: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section id="contato" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para fazer do seu evento um <span className="text-brand-orange">sucesso?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Entre em contato e vamos criar juntos uma experiência única para sua celebração
            </p>
          </div>

          {/* Contact form - now full width */}
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
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Tipo de Evento *
                  </label>
                  <Select value={formData.eventType} onValueChange={handleSelectChange} required>
                    <SelectTrigger className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-brand-orange focus:outline-none transition-colors duration-300 [&>span]:text-white data-[placeholder]:text-gray-400">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600 z-50">
                      <SelectItem value="casamento" className="text-white hover:bg-gray-700 focus:bg-gray-700">Casamento</SelectItem>
                      <SelectItem value="corporativo" className="text-white hover:bg-gray-700 focus:bg-gray-700">Evento Corporativo</SelectItem>
                      <SelectItem value="aniversario" className="text-white hover:bg-gray-700 focus:bg-gray-700">Aniversário</SelectItem>
                      <SelectItem value="festa" className="text-white hover:bg-gray-700 focus:bg-gray-700">Festa</SelectItem>
                      <SelectItem value="outro" className="text-white hover:bg-gray-700 focus:bg-gray-700">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
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
                className="brand-button flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed w-full"
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
    </section>
  );
};

export default ContactSection;
