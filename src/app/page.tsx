"use client";

import { useEvents } from "@/hooks/queries/useEvents";

export default function Home() {
  const { data, isLoading, error } = useEvents();

  console.log("API Yanıtı:", data); // API yanıtını kontrol et

  if (isLoading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata oluştu!</p>;

  // Eğer API'den gelen data veya items undefined olursa hata olmasın diye kontrol ekledik
  if (!data || !data.items) {
    return <p>Etkinlik bulunamadı.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* {data.items.map((event) => (
        <div key={event.id} className="border p-4 rounded-md shadow">
          <img src={event.poster_url} alt={event.name} className="w-full h-40 object-cover" />
          <h3 className="text-lg font-semibold mt-2">{event.name}</h3>
          <p className="text-gray-600">{event.venue.city.name} - {event.venue.name}</p>
          <p className="text-sm">{event.start} - {event.end}</p>
          <a href={event.ticket_url} className="text-blue-500 underline">Bilet Al</a>
        </div>
      ))} */}
      home
    </div>
  );
}
