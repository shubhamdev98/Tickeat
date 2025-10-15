import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard' // Your MovieCard component
import { movies } from '../../../data/app_data/data' // Your movies data

const AllMovie: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Conditional render: mobile (<640px) => show fewer movies if needed
  const displayedMovies = windowWidth < 640 ? movies.slice(0, 2) : movies.slice(0, 4)

  return (
    <section className="py-8">
      <div className="container-default">
        {/* Header with title and "More" link */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Upcoming Movies</h2>
          <Link to="/movies" className="text-sm text-orange-600 hover:underline font-light">
            More
          </Link>
        </div>

        {/* Movies grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedMovies.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllMovie
