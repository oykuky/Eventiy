import { EventDetail } from "@/types/events";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { ArrowRight, CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type EventDetailProps = {
  eventDetails: EventDetail;
};

const EventDetails: React.FC<EventDetailProps> = ({ eventDetails }) => {
  const startDate = new Date(eventDetails.start);
  const endDate = new Date(eventDetails.end);

  const formattedMonth = format(startDate, "MMM", { locale: tr }).toUpperCase();
  const formattedDay = format(startDate, "dd", { locale: tr });

  const formattedStartTime = format(startDate, "HH:mm", { locale: tr });
  const formattedEndTime = format(endDate, "HH:mm", { locale: tr });

  return (
    <div className="container p-6 md:p-16 mx-auto flex items-start flex-col gap-12">
      {/* Image */}
      <div className="relative w-full h-64 md:w-3/4">
        <div
          className="absolute top-0 left-0 z-20 bg-purple-600 text-white rounded-tl-md font-semibold text-xs uppercase px-2 py-2 flex items-center justify-center
            rotate-180 h-56 w-8"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 100% 100%, 0 100%, 0 12%)",
          }}
        >
          <span className="rotate-270">{eventDetails.format.name}</span>
        </div>
        <Image
          src={eventDetails?.poster_url}
          alt={eventDetails?.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-md"
        />
      </div>

      <div className="flex flex-col gap-5 p-3">
        {/* Title */}
        <h1 className="text-lg md:text-2xl font-bold">{eventDetails?.name}</h1>
        <div className="flex justify-between gap-2">
          <p className="text-green-600 font-medium">
            {eventDetails.venue.city.name} - {eventDetails.venue.name}
          </p>
          <div className="bg-gray-300/20 rounded-xl p-2 text-orange-400 font-medium">
            {eventDetails.category.name}
          </div>
        </div>

        {/* Time and Content */}
        <div className="border-2 border-gray-200 rounded-lg p-3 flex items-center gap-4">
          {/* Date */}
          <div className="flex flex-col items-center">
            <CalendarClock className="text-orange-200" />
            <span className="text-orange-400 font-bold text-sm">
              {formattedMonth}
            </span>
            <span className="text-gray-800 text-2xl font-semibold">
              {formattedDay}
            </span>
          </div>
          {/* time */}
          <div className="flex flex-col">
            <span className="text-gray-700 font-medium">
              {formattedStartTime} - {formattedEndTime}
            </span>
          </div>
        </div>

        {/* About Event */}
        <div className="flex flex-col gap-4 bg-white shadow-xl rounded-xl p-3">
          <h2 className="text-lg">Etkinlik Hakkında</h2>
          {/* Use dangerouslySetInnerHTML to render the content as HTML */}
          <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: eventDetails.content }} />
          <p className="text-gray-700">{eventDetails.venue.about}</p>
        </div>

        <div className="flex flex-col gap-4 bg-white shadow-xl rounded-xl p-3">
          <p className="bg-[#f2f4f8] w-fit rounded-lg p-2">Nasıl Bilet Alırım</p>
          <Link
            href={eventDetails.ticket_url}
            className="text-base font-medium text-blue-500/80 hover:underline"
          >
            <span className="flex gap-1"><ArrowRight />Bilet Al</span>
          </Link>
        </div>

        {/* tags */}
        <div className="flex flex-wrap gap-4 bg-white shadow-xl rounded-xl p-3">
            {eventDetails.tags.map((tag,index) => (
                <p key={index} className="bg-[#f2f4f8] w-fit rounded-lg p-2">{tag.name}</p>
            ))}
        </div>
        
      </div>
    </div>
  );
};

export default EventDetails;
