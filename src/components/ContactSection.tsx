
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSubmitContact } from '@/hooks/useSiteData';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const { submitContact } = useSubmitContact();
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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove all non-digits
    
    // Apply phone mask (88) 98888-8888
    if (value.length <= 11) {
      if (value.length > 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        value = `(${value}`;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow positive integers
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) > 0)) {
      setFormData(prev => ({
        ...prev,
        guests: value
      }));
    }
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

    try {
      // Preparar os dados para envio
      const contactData = {
        nome: formData.name,
        email: 'contato@mydrinks.com.br', // Email padrão já que removemos o campo
        telefone: formData.phone || null,
        tipo_evento: formData.eventType || null,
        data_evento: formData.eventDate ? new Date(formData.eventDate).toISOString().split('T')[0] : null,
        numero_convidados: formData.guests ? parseInt(formData.guests) : null,
        mensagem: formData.message || null
      };

      console.log('Enviando dados do contato:', contactData);

      await submitContact(contactData);

      toast({
        title: "Orçamento solicitado com sucesso!",
        description: "Entraremos em contato em até 24 horas.",
      });

      // Limpar o formulário
      setFormData({
        name: '',
        phone: '',
        eventDate: '',
        eventType: '',
        guests: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro ao enviar contato:', error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    onChange={handlePhoneChange}
                    maxLength={15}
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
                      <SelectItem value="formatura" className="text-white hover:bg-gray-700 focus:bg-gray-700">Formatura</SelectItem>
                      <SelectItem value="welcome_wedding" className="text-white hover:bg-gray-700 focus:bg-gray-700">Welcome Wedding Experience</SelectItem>
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
                  type="text"
                  name="guests"
                  value={formData.guests}
                  onChange={handleGuestsChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-brand-orange focus:outline-none transition-colors duration-300"
                  placeholder="Ex: 50"
                  inputMode="numeric"
                  pattern="\d+"
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
