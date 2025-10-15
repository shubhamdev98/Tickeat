import { useEffect, useState } from 'react'
import { MapPin, Calendar, Building2 } from 'lucide-react'

interface Venue {
  id: number
  name: string
  city: string
  capacity: number
  upcomingEvents: number
}

export default function Venues() {
  const [venues, setVenues] = useState<Venue[]>([])

  useEffect(() => {
    setVenues([
      { id: 1, name: 'Sardar Patel Stadium', city: 'Ahmedabad', capacity: 5000, upcomingEvents: 4 },
      { id: 2, name: 'Nehru Auditorium', city: 'Mumbai', capacity: 1200, upcomingEvents: 2 },
      { id: 3, name: 'City Hall', city: 'Pune', capacity: 800, upcomingEvents: 3 },
    ])
  }, [])

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 shadow-md">
          <Building2 className="text-white w-5 h-5" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white tracking-tight">
          Event Venues
        </h1>
      </div>

      {/* Venues Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 
            rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* Top Badge */}
            <div className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-sm">
              #{venue.id}
            </div>

            {/* Venue Info */}
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {venue.name}
            </h2>

            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              <MapPin className="w-4 h-4 mr-2 text-rose-500" /> {venue.city}
            </div>

            {/* Capacity */}
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Capacity:{' '}
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {venue.capacity.toLocaleString()}
              </span>
            </div>

            {/* Capacity Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 mb-3">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                style={{
                  width: `${Math.min((venue.capacity / 5000) * 100, 100)}%`,
                }}
              ></div>
            </div>

            {/* Upcoming Events */}
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <Calendar className="w-4 h-4 mr-2 text-green-500" /> {venue.upcomingEvents} upcoming
              events
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                ID: {venue.id}
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
