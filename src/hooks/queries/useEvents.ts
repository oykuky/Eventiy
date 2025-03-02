import { getEventsService } from "@/services/eventService";
import { useQuery } from "@tanstack/react-query";

export function useEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: () => getEventsService(),
    staleTime: 1000 * 60 * 5, // 5 dakika boyunca veriyi cache'de tutar
  });
}
