import React, { useState, useEffect } from 'react'
import PopulerEventFilter from '../../.././components/app/event/PopularEvent/PopulerEventFilter'
import PopulerEventList from '../../../components/app/event/PopularEvent/PopulerEventList'

interface Filters {
  categories: string[]
  ratings: number[]
  locations: string[]
  dates: string[]
}

const DisplayAllPopulerEvents: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    ratings: [],
    locations: [],
    dates: [],
  })

  // ✅ Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen py-6 md:py-10 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-6">
        {/* Sidebar Filter */}
        <div className="w-full md:w-1/5 flex-shrink-0">
          <PopulerEventFilter
            categories={[
              'Comedy Shows',
              'Music Concerts',
              'Theatre Shows',
              'Adventure & Fun',
              'Kids',
              'Festivals',
              'Workshops',
            ]}
            ratings={[3, 4, 5]}
            locations={['Mumbai', 'Pune', 'Delhi', 'Bangalore', 'Goa', 'Ahmedabad']}
            onFilter={(newFilters) => setFilters(newFilters)}
          />
        </div>

        {/* Main Content */}
        <div className="w-full md:w-4/5 flex-1">
          <PopulerEventList filters={filters} />
        </div>
      </div>
    </div>
  )
}

export default DisplayAllPopulerEvents
