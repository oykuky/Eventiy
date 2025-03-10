This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

- Axios Generic Service ve Tanstack Query Entegrasyonu


📌 2. Next.js ile Etkinlik Platformu



````// src/types/eventTypes.ts
export type Event = {
  id: number;
  name: string;
  description: string;
  city: string;
};

// src/services/eventService.ts
import { createService } from "./generic";
import { Event } from "../types/eventTypes";

export const getEventsService = createService<Event[]>("/events?take=50", { method: "GET" });
// src/hooks/queries/useEvents.ts
import { useQuery } from "@tanstack/react-query";
import { getEventsService } from "@/services/eventService";

export function useEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: () => getEventsService(),
    staleTime: 1000 * 60 * 5,
  });
}````
🎨 4. UI Bileşenleri (Tailwind & ShadCN)

```// src/components/EventCard.tsx
import { Event } from "@/types/eventTypes";

export const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold">{event.name}</h2>
      <p>{event.description}</p>
      <span className="text-sm text-gray-500">{event.city}</span>
    </div>
  )
};```

```// src/components/EventList.tsx
import { useEvents } from "@/hooks/queries/useEvents";
import { EventCard } from "./EventCard";

export default function EventList() {
  const { data, isLoading } = useEvents();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {data?.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}```
📅 5. Yol Haritası (Roadmap)
``
1. Teknoloji Seçimi	Next.js, Tanstack Query, Axios, TailwindCSS, ShadCN kullanılacak.
2. Proje Kurulumu	Next.js projesini oluştur, gerekli bağımlılıkları yükle.
3. API Entegrasyonu	Axios instance ve generic createService fonksiyonunu oluştur.
4. Etkinlik Servisleri	getEventListService servisini tanımla.
5. Tanstack Query Kullanımı	useEventList hook’unu yaz, API çağrılarını yönet.
6. UI Tasarımı	ShadCN bileşenlerini kullanarak etkinlikleri listele.
7. Filtreleme & Arama	Kullanıcıların şehir, kategori, tarih filtresi ekleyerek arama yapmasını sağla.
8. Detay Sayfası	Kullanıcı bir etkinliğe tıkladığında detay sayfasına yönlendirme yap.
9. Bilet Alma Sistemi	Kullanıcıların etkinliklere bilet alabilmesini sağla (dummy ödeme entegrasyonu).
10. SEO & Performans	Next.js’in SSR ve ISR özelliklerini kullanarak SEO optimizasyonu yap.``

