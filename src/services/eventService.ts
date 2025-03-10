import { endpoints } from "@/constants/endpoints";
import { createService } from "./generic";
import { EventDetail } from "@/types/events";

export type GetEventsResponse = {
  meta: {
    total_count: number;
  };
  items: {
    id: number;
    name: string;
    start: string;
    end: string;
    content: string;
    phone: string;
    hashtag: string;
    slug: string;
    format: {
      id: number;
      name: string;
      slug: string;
    };
    category: {
      id: number;
      name: string;
      slug: string;
    };
    venue: {
      id: number;
      name: string;
      about: string;
      address: string;
      slug: string;
      city: {
        id: number;
        name: string;
      };
    };
    poster_url: string;
    ticket_url: string;
    tags: [{ id: number; name: string }];
  }[];
};

// export const getEventsService = createService<GetEventsResponse>(
//   endpoints.events,
//   { method: "GET" }
// );

export const getEventsService = async (searchTerm?: string, cityId?: number) => {
  const today = new Date().toISOString().split("T")[0];
  let endpoint = `${endpoints.events}&start=${today}`;

  if (searchTerm) {
    endpoint += `&format_ids=${encodeURIComponent(searchTerm)}`;
  }

  if (cityId) {
    endpoint += `&city_ids=${cityId}`;
  }

  return createService<GetEventsResponse>(endpoint, { method: "GET" })();
};
//Etkinlik detaylarını getirme servisi
export const getEventDetailsService = (eventId: number) =>
  createService<EventDetail>(`${endpoints.eventsDetails}/${eventId}`, { method: "GET" })();


//Tür listesini getirme servisi
export const getFormatListService = createService<{ id: number; name: string }[]>(
  endpoints.formatLists,
  { method: "GET" }
);

//Kategori listesini getirme servisi
export const getCategoryListService = createService<{ id: number; name: string }[]>(
  endpoints.categoryLists,
  { method: "GET" }
);

//Şehir listesini getirme servisi
export const getCityListService = createService<{ id: number; name: string }[]>(
  endpoints.citiesList,
  { method: "GET" }
);