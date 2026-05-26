
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface SiteService {
  id: number;
  titulo: string;
  descricao: string;
  icone: string;
  preco?: number;
  ativo: boolean;
  ordem: number;
}

interface SiteTestimonial {
  id: number;
  nome_cliente: string;
  empresa?: string;
  depoimento: string;
  foto_cliente?: string;
  avaliacao: number;
  ativo: boolean;
  data_evento?: string;
}

interface SiteGallery {
  id: number;
  titulo?: string;
  descricao?: string;
  url_imagem: string;
  categoria?: string;
  ativo: boolean;
  ordem: number;
}

interface SiteConfig {
  id: number;
  chave: string;
  valor: string;
  descricao?: string;
  tipo: string;
}

export const useSiteServices = () => {
  return useQuery({
    queryKey: ['site-services'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_servicos')
        .select('*')
        .eq('ativo', true)
        .order('ordem');
      
      if (error) {
        console.error('Error fetching services:', error);
        throw error;
      }
      
      return data as SiteService[];
    },
  });
};

export const useSiteTestimonials = () => {
  return useQuery({
    queryKey: ['site-testimonials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_depoimentos')
        .select('*')
        .eq('ativo', true)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching testimonials:', error);
        throw error;
      }
      
      return data as SiteTestimonial[];
    },
  });
};

export const useSiteGallery = () => {
  return useQuery({
    queryKey: ['site-gallery'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_galeria')
        .select('*')
        .eq('ativo', true)
        .order('ordem');
      
      if (error) {
        console.error('Error fetching gallery:', error);
        throw error;
      }
      
      return data as SiteGallery[];
    },
  });
};

export const useSiteConfig = () => {
  return useQuery({
    queryKey: ['site-config'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_configuracoes')
        .select('*');
      
      if (error) {
        console.error('Error fetching site config:', error);
        throw error;
      }
      
      // Convert array to object for easier access
      const config: Record<string, string> = {};
      data.forEach((item: SiteConfig) => {
        config[item.chave] = item.valor;
      });
      
      return config;
    },
  });
};

export const useSubmitContact = () => {
  const submitContact = async (contactData: {
    nome: string;
    email: string;
    telefone?: string;
    tipo_evento?: string;
    data_evento?: string;
    numero_convidados?: number;
    mensagem?: string;
  }) => {
    const { data, error } = await supabase
      .from('site_contatos')
      .insert([contactData]);
    
    if (error) {
      console.error('Error submitting contact:', error);
      throw error;
    }
    
    return data;
  };

  return { submitContact };
};
