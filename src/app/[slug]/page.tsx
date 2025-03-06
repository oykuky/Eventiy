"use client";
import EventDetails from "@/components/EventDetails";
import { useEventDetails } from "@/hooks/queries/useEvents";
import { Loader } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

function EventsDetailPage() {
  const { slug } = useParams();
  const {
    data: eventDetails,
    isLoading,
    error,
  } = useEventDetails(Number(slug));

  if (isLoading)
    return (
      <div className="mt-10 flex items-center justify-center">
        <Loader className="text-center text-green-700 animate-spin w-12 h-12" />
      </div>
    );
  if (error) return <p>Hata oluştu!</p>;

  return (
    <div className="min-h-screen">
      {eventDetails ? (
        <EventDetails eventDetails={eventDetails} />
      ) : (
        <p>Etkinlik detayları bulunamadı.</p>
      )}
    </div>
  );
}

export default EventsDetailPage;
