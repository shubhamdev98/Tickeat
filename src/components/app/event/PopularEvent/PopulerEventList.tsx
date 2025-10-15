import React from 'react'
import PopulerEventCard from './PopulerEventCard'
import { events } from '../../../../data/app_data/data' // assume you have event data

interface Filters {
  categories: string[]
  ratings: number[]
  locations: string[]
  dates: string[]
}

interface PopulerEventListProps {
  filters: Filters
}

const PopulerEventList: React.FC<PopulerEventListProps> = ({ filters }) => {
  const filteredEvents = events.filter((event) => {
    const categoryMatch =
      filters.categories.length === 0 || filters.categories.includes(event.category)

    const ratingMatch =
      filters.ratings.length === 0 || filters.ratings.some((r) => event.rating >= r)

    const locationMatch =
      filters.locations.length === 0 || filters.locations.includes(event.location)

    return categoryMatch && ratingMatch && locationMatch
  })

  return (
    <div className="w-full">
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md mb-4 flex-wrap">
        <h3 className="text-lg font-semibold">Popular Events</h3>
        <button className="text-blue-500 font-medium hover:underline text-sm mt-2 md:mt-0">
          Explore All Events
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredEvents.map((event) => (
          <PopulerEventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default PopulerEventList
