import React from 'react'

interface Event {
  id: number
  title: string
  category: string
  rating: number
  attendees: string
  img: string
  promoted?: boolean
  location?: string
  date?: string
}

interface PopulerEventCardProps {
  event: Event
}

const PopulerEventCard: React.FC<PopulerEventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 flex flex-col h-[420px]">
      {/* Event Image */}
      <div className="relative w-full h-2/3">
        <img src={event.img} alt={event.title} className="w-full h-full object-cover" />
        {event.promoted && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            PROMOTED
          </span>
        )}
      </div>

      {/* Event Info */}
      <div className="p-3 flex flex-col flex-1">
        <h2 className="text-base font-bold mb-1 line-clamp-2">{event.title}</h2>
        <p className="text-sm text-gray-600 mb-1">{event.category}</p>
        {event.location && <p className="text-sm text-gray-600 mb-1">{event.location}</p>}
        {event.date && <p className="text-sm text-gray-600 mb-2">Date: {event.date}</p>}

        {/* Rating & Attendees */}
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-yellow-500 font-bold text-sm">{event.rating} ⭐</span>
          <span className="text-gray-500 text-sm">{event.attendees} Attendees</span>
        </div>
      </div>
    </div>
  )
}

export default PopulerEventCard
