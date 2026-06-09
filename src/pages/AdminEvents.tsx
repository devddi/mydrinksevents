import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Loader2, UploadCloud, ArrowLeft, Plus, Edit2, Power, PowerOff, Trash2, Eye, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEvents, MyEvent } from '@/hooks/useEvents';
import heic2any from 'heic2any';

const AdminEvents = () => {
  const { events, isLoading: eventsLoading, refetch } = useEvents(false); // fetch all, including inactive
  const [view, setView] = useState<'list' | 'form'>('list');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingEvent, setEditingEvent] = useState<MyEvent | null>(null);
  const [imageToDelete, setImageToDelete] = useState<string | null>(null);
  const [uploadState, setUploadState] = useState<{ progress: number, text: string } | null>(null);
  
  // Form State
  const [title, setTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  
  // File State
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<File[]>([]);

  const handleAddNew = () => {
    setEditingEvent(null);
    setTitle('');
    setEventDate('');
    setShortDescription('');
    setFullDescription('');
    setCoverImage(null);
    setGalleryImages([]);
    setView('form');
  };

  const handleEdit = (event: MyEvent) => {
    setEditingEvent(event);
    setTitle(event.title);
    setEventDate(event.event_date);
    setShortDescription(event.short_description);
    setFullDescription(event.full_description);
    setCoverImage(null);
    setGalleryImages([]);
    setView('form');
  };

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('site_events')
        .update({ ativo: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      
      toast.success(`Evento ${!currentStatus ? 'ativado' : 'desabilitado'} com sucesso!`);
      refetch();
    } catch (err: any) {
      toast.error('Erro ao alterar status: ' + err.message);
    }
  };

  const executeDeleteImage = async () => {
    if (!imageToDelete) return;
    
    try {
      const { error } = await supabase
        .from('site_event_images')
        .delete()
        .eq('id', imageToDelete);
        
      if (error) throw error;
      
      toast.success('Foto removida com sucesso!');
      if (editingEvent) {
        setEditingEvent({
          ...editingEvent,
          gallery: editingEvent.gallery.filter(img => img.id !== imageToDelete)
        });
      }
      refetch(); // Atualiza a lista por baixo dos panos
    } catch (err: any) {
      toast.error('Erro ao remover foto: ' + err.message);
    } finally {
      setImageToDelete(null);
    }
  };

  const convertHeicToJpeg = async (file: File): Promise<File> => {
    if (file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic') || file.type === 'image/heif' || file.name.toLowerCase().endsWith('.heif')) {
      toast.info(`Convertendo formato da imagem ${file.name}...`);
      try {
        const convertedBlob = await heic2any({
          blob: file,
          toType: 'image/jpeg',
          quality: 0.8,
        });
        const blob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
        return new File([blob], file.name.replace(/\.(heic|heif)$/i, '.jpg'), {
          type: 'image/jpeg',
        });
      } catch (err) {
        console.error('Erro na conversão HEIC:', err);
        toast.error(`Falha ao converter ${file.name}.`);
        return file;
      }
    }
    return file;
  };

  const handleCoverChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = await convertHeicToJpeg(e.target.files[0]);
      setCoverImage(file);
    }
  };

  const handleGalleryChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const hasHeic = filesArray.some(f => f.name.toLowerCase().endsWith('.heic') || f.name.toLowerCase().endsWith('.heif'));
      
      if (hasHeic) {
        toast.info('Processando imagens da Apple. Isso pode levar alguns segundos...');
      }
      
      const convertedFiles = await Promise.all(filesArray.map(convertHeicToJpeg));
      setGalleryImages(convertedFiles);
    }
  };

  const generateUniqueFileName = (originalName: string) => {
    const fileExt = originalName.split('.').pop();
    const uniqueId = Math.random().toString(36).substring(2, 15);
    return `${Date.now()}-${uniqueId}.${fileExt}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!editingEvent && !coverImage) {
      toast.error('A imagem de capa é obrigatória para novos eventos.');
      return;
    }

    let completedSteps = 0;
    const totalSteps = 1 + (coverImage ? 1 : 0) + galleryImages.length;
    
    const incrementProgress = (text: string) => {
      completedSteps++;
      setUploadState({
        progress: Math.min(100, Math.round((completedSteps / totalSteps) * 100)),
        text
      });
    };

    try {
      setIsSubmitting(true);
      setUploadState({ progress: 0, text: 'Preparando envio...' });

      let coverUrl = editingEvent?.cover_image || '';

      // 1. Upload da Capa (se houver nova)
      if (coverImage) {
        setUploadState(prev => ({ progress: prev?.progress || 0, text: 'Enviando imagem de capa...' }));
        const coverFileName = generateUniqueFileName(coverImage.name);
        const coverFilePath = `covers/${coverFileName}`;
        
        const { error: coverUploadError } = await supabase.storage
          .from('events')
          .upload(coverFilePath, coverImage);

        if (coverUploadError) throw new Error(`Erro ao enviar capa: ${coverUploadError.message}`);

        const { data: coverPublicUrlData } = supabase.storage
          .from('events')
          .getPublicUrl(coverFilePath);
        coverUrl = coverPublicUrlData.publicUrl;
        incrementProgress('Capa enviada com sucesso');
      }

      let eventId = editingEvent?.id;

      setUploadState(prev => ({ progress: prev?.progress || 0, text: 'Salvando informações do evento no banco de dados...' }));
      if (editingEvent) {
        // UPDATE
        const { error: updateError } = await supabase
          .from('site_events')
          .update({
            title,
            event_date: eventDate,
            short_description: shortDescription,
            full_description: fullDescription,
            cover_image: coverUrl,
          })
          .eq('id', eventId);
        
        if (updateError) throw new Error(`Erro ao atualizar evento: ${updateError.message}`);
      } else {
        // INSERT
        const { data: eventData, error: eventInsertError } = await supabase
          .from('site_events')
          .insert({
            title,
            event_date: eventDate,
            short_description: shortDescription,
            full_description: fullDescription,
            cover_image: coverUrl,
          })
          .select()
          .single();

        if (eventInsertError) throw new Error(`Erro ao criar evento: ${eventInsertError.message}`);
        eventId = eventData.id;
      }
      incrementProgress('Informações salvas com sucesso');

      // 3. Upload da Galeria (apenas as novas imagens)
      if (galleryImages.length > 0 && eventId) {
        setUploadState(prev => ({ progress: prev?.progress || 0, text: 'Iniciando upload da galeria...' }));
        
        const galleryUploadPromises = galleryImages.map(async (file) => {
          const fileName = generateUniqueFileName(file.name);
          const filePath = `gallery/${eventId}/${fileName}`;
          
          const { error: uploadError } = await supabase.storage
            .from('events')
            .upload(filePath, file);
            
          if (uploadError) throw new Error(`Erro no upload da galeria: ${uploadError.message}`);
          
          const { data: publicUrlData } = supabase.storage
            .from('events')
            .getPublicUrl(filePath);
            
          incrementProgress(`Enviando fotos da galeria...`);
          return publicUrlData.publicUrl;
        });

        const galleryUrls = await Promise.all(galleryUploadPromises);

        setUploadState(prev => ({ progress: prev?.progress || 0, text: 'Vinculando fotos ao evento...' }));
        const galleryInserts = galleryUrls.map(url => ({
          event_id: eventId,
          url: url
        }));

        const { error: galleryInsertError } = await supabase
          .from('site_event_images')
          .insert(galleryInserts);

        if (galleryInsertError) throw new Error(`Erro ao salvar galeria no BD: ${galleryInsertError.message}`);
      }

      setUploadState({ progress: 100, text: 'Tudo pronto! Finalizando...' });
      
      setTimeout(() => {
        toast.success(editingEvent ? 'Evento atualizado com sucesso!' : 'Evento cadastrado com sucesso!');
        refetch();
        setView('list');
        setIsSubmitting(false);
        setUploadState(null);
      }, 800);

    } catch (error: any) {
      console.error(error);
      toast.error(error.message || 'Ocorreu um erro inesperado.');
      setIsSubmitting(false);
      setUploadState(null);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black flex flex-col py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Top bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            {view === 'list' && (
              <Link to="/" className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-4 w-fit">
                <ArrowLeft size={16} />
                Ir para o site
              </Link>
            )}
            <h1 className="font-playfair text-3xl md:text-4xl text-white tracking-wide">
              Dashboard de <span className="text-brand-gold">Eventos</span>
            </h1>
          </div>
          
          {view === 'list' && (
            <button 
              onClick={handleAddNew}
              className="bg-brand-gold hover:bg-brand-orange-light text-brand-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
            >
              <Plus size={20} />
              Novo Evento
            </button>
          )}
          {view === 'form' && (
            <button 
              onClick={() => setView('list')}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors border border-white/10"
            >
              Cancelar
            </button>
          )}
        </div>

        {/* Views */}
        {view === 'list' ? (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm overflow-x-auto">
            {eventsLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-brand-gold" size={40} />
              </div>
            ) : events.length === 0 ? (
              <div className="text-center py-12 text-white/50">
                Nenhum evento cadastrado ainda.
              </div>
            ) : (
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-white/10 text-white/60 font-inter text-sm uppercase tracking-wider">
                    <th className="pb-4 font-medium pl-4">Evento</th>
                    <th className="pb-4 font-medium">Data</th>
                    <th className="pb-4 font-medium text-center">Status</th>
                    <th className="pb-4 font-medium text-right pr-4">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 pl-4 flex items-center gap-4">
                        <img 
                          src={event.cover_image} 
                          alt="Capa" 
                          className="w-16 h-16 rounded-lg object-cover border border-white/10"
                        />
                        <div className="max-w-[300px]">
                          <p className="text-white font-playfair font-semibold text-lg truncate">{event.title}</p>
                          <p className="text-white/50 text-xs truncate">{event.short_description}</p>
                        </div>
                      </td>
                      <td className="py-5 text-white/80 font-inter text-sm">{event.event_date}</td>
                      <td className="py-5 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${
                          event.ativo ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}>
                          {event.ativo ? 'Ativo' : 'Inativo'}
                        </span>
                      </td>
                      <td className="py-5 text-right pr-4">
                        <div className="flex items-center justify-end gap-3">
                          <button 
                            onClick={() => handleToggleStatus(event.id, event.ativo)}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                            title={event.ativo ? "Desabilitar Evento" : "Ativar Evento"}
                          >
                            {event.ativo ? <PowerOff size={18} className="text-red-400" /> : <Power size={18} className="text-green-400" />}
                          </button>
                          <button 
                            onClick={() => handleEdit(event)}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                            title="Editar Evento"
                          >
                            <Edit2 size={18} />
                          </button>
                          <Link
                            to={`/eventos/${event.id}`}
                            target="_blank"
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-brand-gold transition-colors"
                            title="Ver no site"
                          >
                            <Eye size={18} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-sm">
            <div className="mb-8">
              <h2 className="font-playfair text-2xl md:text-3xl text-white mb-2">
                {editingEvent ? 'Editar Evento' : 'Novo Evento'}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/80 font-inter text-sm font-medium">Título do Evento</label>
                  <input 
                    type="text" 
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 font-inter text-sm font-medium">Data do Evento</label>
                  <input 
                    type="text" 
                    required
                    value={eventDate}
                    onChange={e => setEventDate(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/80 font-inter text-sm font-medium">Descrição Curta (Resumo)</label>
                <textarea 
                  required
                  value={shortDescription}
                  onChange={e => setShortDescription(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors resize-none h-24"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white/80 font-inter text-sm font-medium">Descrição Completa</label>
                <textarea 
                  required
                  value={fullDescription}
                  onChange={e => setFullDescription(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors resize-none h-40"
                />
              </div>

              <div className="border-t border-white/10 pt-6 my-8" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Capa */}
                <div className="space-y-2">
                  <label className="text-white/80 font-inter text-sm font-medium">Foto de Capa {editingEvent && "(Opcional: Envie para trocar)"}</label>
                  <div className="relative border-2 border-dashed border-white/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-brand-gold transition-colors cursor-pointer bg-black/20 h-48">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleCoverChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                    />
                    <UploadCloud className="text-brand-gold mb-3" size={32} />
                    <p className="text-sm text-white/70 font-medium px-4">
                      {coverImage ? coverImage.name : "Clique ou arraste a nova foto de capa aqui"}
                    </p>
                  </div>
                </div>

                {/* Galeria */}
                <div className="space-y-2">
                  <label className="text-white/80 font-inter text-sm font-medium">Adicionar Fotos à Galeria {editingEvent && "(Serão somadas às atuais)"}</label>
                  <div className="relative border-2 border-dashed border-white/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-brand-gold transition-colors cursor-pointer bg-black/20 h-48">
                    <input 
                      type="file" 
                      accept="image/*"
                      multiple
                      onChange={handleGalleryChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                    />
                    <UploadCloud className="text-brand-gold mb-3" size={32} />
                    <p className="text-sm text-white/70 font-medium px-4">
                      {galleryImages.length > 0 
                        ? `${galleryImages.length} nova(s) foto(s) selecionada(s)` 
                        : "Selecione múltiplas fotos para adicionar à galeria"}
                    </p>
                  </div>
                </div>
              </div>

              {editingEvent && editingEvent.gallery.length > 0 && (
                <div className="space-y-4 pt-4">
                  <label className="text-white/80 font-inter text-sm font-medium">Fotos Atuais da Galeria</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {editingEvent.gallery.map((img) => (
                      <div key={img.id} className="relative group aspect-square rounded-xl overflow-hidden border border-white/10">
                        <img src={img.url} alt="Galeria" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button
                            type="button"
                            onClick={() => setImageToDelete(img.id)}
                            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                            title="Remover Foto"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-8">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-gold hover:bg-brand-orange-light text-brand-black font-semibold text-lg py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      Salvando Evento...
                    </>
                  ) : (
                    'Salvar Evento'
                  )}
                </button>
              </div>

            </form>
          </div>
        )}
      </div>

      {/* Delete Image Confirmation Modal */}
      {imageToDelete && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-brand-black border border-white/10 rounded-2xl p-6 md:p-8 max-w-sm w-full shadow-2xl">
            <div className="flex items-center gap-3 mb-4 text-red-500">
              <AlertTriangle size={24} />
              <h3 className="font-playfair text-2xl">Remover Foto</h3>
            </div>
            <p className="text-white/70 font-inter mb-8">
              Tem certeza que deseja remover permanentemente esta foto da galeria? Esta ação não pode ser desfeita.
            </p>
            <div className="flex gap-4">
              <button 
                type="button"
                onClick={() => setImageToDelete(null)}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button 
                type="button"
                onClick={executeDeleteImage}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Sim, remover
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Progress Modal */}
      {isSubmitting && uploadState && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="bg-brand-black border border-brand-gold/20 rounded-3xl p-10 max-w-md w-full shadow-[0_0_50px_rgba(212,175,55,0.1)] flex flex-col items-center text-center">
            <Loader2 className="animate-spin text-brand-gold mb-6" size={56} />
            <h3 className="font-playfair text-3xl text-white mb-2">Salvando Evento</h3>
            <p className="text-white/60 font-inter text-sm mb-10 min-h-[20px]">{uploadState.text}</p>
            
            <div className="w-full bg-white/10 rounded-full h-3 mb-4 overflow-hidden relative">
              <div 
                className="bg-brand-gold h-full rounded-full transition-all duration-500 ease-out absolute left-0 top-0"
                style={{ width: `${uploadState.progress}%` }}
              />
            </div>
            <div className="text-brand-gold font-inter font-bold text-xl tracking-wider">
              {uploadState.progress}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
