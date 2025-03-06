import { Event } from "@/types/events";
import React from "react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  event: Event;
}
 
const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formattedStartDate = format(
    new Date(event.start),
    "dd MMMM yyyy, HH:mm",
    { locale: tr }
  );

  return (
    <div className="group relative flex flex-col gap-2 border w-full max-h-full rounded-md shadow-lg shadow-gray-400 overflow-hidden z-10">
      {/* Etiket */}
      <div
        className="absolute top-0 left-0 z-20 bg-purple-600 text-white rounded-tl-md font-semibold text-xs uppercase px-2 py-2 flex items-center justify-center
       rotate-180 h-44 w-8"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 100% 100%, 0 100%, 0 12%)",
        }}
      >
        <span className="rotate-270">{event.format.name}</span>
      </div>

      {/* Resim */}
      <div className="group-hover:scale-110 transform duration-300 relative w-full h-48">
        <Image
          src={event.poster_url}
          alt={event.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-md"
        />
      </div>

     
      {/* İçerik */}
      <div className="flex flex-col gap-2 p-4 flex-grow">
        <h3 className="text-base md:text-lg font-semibold">{event.name}</h3>
        <p className="text-base text-emerald-600">
          {event.venue.city.name} - {event.venue.name}
        </p>
        <p className="text-sm text-gray-600">{formattedStartDate}</p>

        {/* Footer */}
        <div className="mt-auto text-sm sm:text-base lg:text-lg w-full flex items-center justify-between gap-2 pt-4 border-t">
          <Link
            href={`/${event.id}`}
            className="flex-shrink-0 text-blue-500/80 cursor-pointer underline"
          >
            Etkinlik detayı
          </Link>
          <Link
            href={event.ticket_url}
            className="flex-shrink-0 rounded-lg p-2 bg-blue-500/80 hover:bg-sky-400 text-white"
          >
            Bilet Al
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
