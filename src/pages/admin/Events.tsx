import { useEffect, useState } from 'react'
import { Calendar, MapPin, Users, Sparkles } from 'lucide-react'

interface Event {
  id: number
  title: string
  location: string
  attendees: number
  date: string
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    setEvents([
      { id: 1, title: 'Garba Night', location: 'Ahmedabad', attendees: 560, date: '2025-10-15' },
      { id: 2, title: 'Music Festival', location: 'Mumbai', attendees: 1220, date: '2025-11-02' },
      { id: 3, title: 'Comedy Night', location: 'Delhi', attendees: 340, date: '2025-11-20' },
    ])
  }, [])

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 shadow-md">
          <Sparkles className="text-white w-5 h-5" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white tracking-tight">
          Upcoming Events
        </h1>
      </div>

      {/* Grid of Events */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative group bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 
            rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* Badge */}
            <div className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-sm">
              #{event.id}
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {event.title}
            </h2>

            {/* Details */}
            <div className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>
                  {new Date(event.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{event.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-500" />
                <span>{event.attendees.toLocaleString()} attendees</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

            {/* Actions */}
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                ID: {event.id}
              </span>
              <button
                className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-full 
                hover:from-indigo-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
