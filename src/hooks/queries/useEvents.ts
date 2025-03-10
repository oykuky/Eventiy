import { getCategoryListService, getCityListService, getEventDetailsService, getEventsService, getFormatListService } from "@/services/eventService";
import { useQuery } from "@tanstack/react-query";

//Tüm etkinlikleri getirme
export function useEvents(cityId?: number) {
  return useQuery({
    queryKey: ["events",cityId],
    queryFn: () => getEventsService(undefined, cityId),
    staleTime: 1000 * 60 * 5, // 5 dakika boyunca veriyi cache'de tutar
  });
}

//Etkinlik detaylarını getirme
export function useEventDetails(eventId: number) {
  return useQuery({
    queryKey: ["eventDetails", eventId],
    queryFn: () => getEventDetailsService(eventId),
    enabled: !!eventId, // eventId varsa sorguyu yap
  });
}

//Tür listesini getirme 
export function useFormats() {
  return useQuery({
    queryKey: ["formats"],
    queryFn: () => getFormatListService(),
    staleTime: 1000 * 60 * 60, // 1 saat cache'de tut
  });
}

//Kategori listesini getirme
export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategoryListService(),
    staleTime: 1000 * 60 * 60, // 1 saat cache'de tut
  });
}

//Şehir listesini getirme
export function useCities() {
  return useQuery({
    queryKey: ["cities"],
    queryFn: () => getCityListService(),
    staleTime: 1000 * 60 * 60, // 1 saat cache'de tut
  });
}