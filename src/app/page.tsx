"use client";

import EventCard from "@/components/EventCard";
import SearchSection from "@/components/home/SearchSection";
import { useEvents } from "@/hooks/queries/useEvents";
import { Loader } from "lucide-react";

export default function Home() {
  const { data, isLoading, error } = useEvents();

  if (isLoading)
    return (
      <div className="mt-10 flex items-center justify-center">
        <Loader className="text-center text-green-700 animate-spin w-12 h-12" />
      </div>
    );
  if (error) return <p>Hata oluştu!</p>;
  if (!data?.items?.length) return <p>Etkinlik bulunamadı.</p>;

  return (
    <div className="flex items-center justify-center flex-col gap-8">
      <SearchSection />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.items.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
