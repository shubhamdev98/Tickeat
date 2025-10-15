import React, { useState, useEffect } from 'react'
import MovieFilter from '../../../components/app/movie/MovieFilter'
import MovieList from '../../../components/app/movie/MovieList'
import { languages } from '../../../data/app_data/data'

interface Filters {
  genres: string[]
  ratings: number[]
  languages: string[]
  formats: string[]
}

const DisplayAllMovies: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    genres: [],
    ratings: [],
    languages: [],
    formats: [],
  })

  // ✅ Fixed: useEffect imported properly and simplified
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen py-6 md:py-10 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-6">
        {/* Sidebar Filter */}
        <div className="w-full md:w-1/5 flex-shrink-0">
          <MovieFilter
            genres={[
              'Action',
              'Comedy',
              'Drama',
              'Horror',
              'Romance',
              'Fantasy',
              'Thriller',
              'Mythological',
            ]}
            ratings={[5, 6, 7, 8, 9, 10]}
            languages={languages}
            formats={['2D', '3D', 'IMAX']}
            onFilter={(newFilters) => setFilters(newFilters)}
          />
        </div>

        {/* Movies Content */}
        <div className="w-full md:w-4/5 flex-1">
          <MovieList filters={filters} />
        </div>
      </div>
    </div>
  )
}

export default DisplayAllMovies
