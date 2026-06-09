import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface EventImage {
  id: string;
  url: string;
}

export interface MyEvent {
  id: string;
  title: string;
  event_date: string;
  short_description: string;
  full_description: string;
  cover_image: string;
  ativo: boolean;
  gallery: EventImage[];
}

export const useEvents = (onlyActive: boolean = true) => {
  const [events, setEvents] = useState<MyEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      
      let query = supabase
        .from('site_events')
        .select(`
          id, title, event_date, short_description, full_description, cover_image, ativo, created_at,
          site_event_images ( id, url )
        `)
        .order('created_at', { ascending: false });

      if (onlyActive) {
        query = query.eq('ativo', true);
      }

      const { data, error } = await query;

      if (error) throw error;

      // Transform the data to match our MyEvent interface
      const formattedEvents: MyEvent[] = (data || []).map(event => ({
        id: event.id,
        title: event.title,
        event_date: event.event_date,
        short_description: event.short_description,
        full_description: event.full_description,
        cover_image: event.cover_image,
        ativo: event.ativo !== false, // Defaults to true if null
        gallery: event.site_event_images.map((img: any) => ({
          id: img.id,
          url: img.url
        }))
      }));

      setEvents(formattedEvents);
    } catch (err: any) {
      console.error('Error fetching events:', err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [onlyActive]);

  return { events, isLoading, error, refetch: fetchEvents };
};
