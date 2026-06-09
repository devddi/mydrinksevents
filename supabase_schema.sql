-- ==========================================
-- Configuração do Banco de Dados para Eventos
-- Execute este script no SQL Editor do Supabase
-- ==========================================

-- 1. Criar a tabela de Eventos
CREATE TABLE public.site_events (
  id UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  event_date TEXT NOT NULL, -- Ex: "15 de Outubro de 2025"
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Criar a tabela de Galeria de Imagens vinculada aos Eventos
CREATE TABLE public.site_event_images (
  id UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  event_id UUID NOT NULL REFERENCES public.site_events(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Configurar políticas de segurança (RLS - Row Level Security)
-- Permitir que qualquer pessoa leia (SELECT) os eventos e imagens
ALTER TABLE public.site_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Permitir leitura pública de eventos" ON public.site_events FOR SELECT USING (true);

ALTER TABLE public.site_event_images ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Permitir leitura pública das imagens dos eventos" ON public.site_event_images FOR SELECT USING (true);

-- Políticas para permitir a inserção e edição apenas por usuários logados (Admin)
CREATE POLICY "Permitir inserção de eventos para admins" ON public.site_events FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Permitir inserção de imagens para admins" ON public.site_event_images FOR INSERT TO authenticated WITH CHECK (true);

-- Permitir atualização de eventos
CREATE POLICY "Permitir atualização de eventos" ON public.site_events FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Permitir exclusão de eventos" ON public.site_events FOR DELETE TO authenticated USING (true);
CREATE POLICY "Permitir exclusão de imagens" ON public.site_event_images FOR DELETE TO authenticated USING (true);

-- 6. Adicionar coluna 'ativo' na tabela site_events
ALTER TABLE public.site_events ADD COLUMN ativo BOOLEAN DEFAULT true;

-- 4. Criar o Storage Bucket para armazenar as fotos
-- OBS: Isso insere um bucket público chamado 'events'
INSERT INTO storage.buckets (id, name, public) 
VALUES ('events', 'events', true)
ON CONFLICT (id) DO NOTHING;

-- 5. Configurar políticas do Storage (Bucket)
-- Permitir leitura pública dos arquivos do bucket 'events'
CREATE POLICY "Leitura pública do bucket events" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'events');

-- Permitir upload de arquivos no bucket (apenas para usuários autenticados, se desejar restringir depois altere para 'auth.role() = ''authenticated''')
CREATE POLICY "Permitir upload no bucket events" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'events');

-- ==========================================
-- FIM DA CONFIGURAÇÃO
-- ==========================================
