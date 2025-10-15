import React from 'react'
import MovieCard from './MovieCard'
import { movies } from '../../../data/app_data/data'

interface Filters {
  genres: string[]
  ratings: number[]
  languages: string[]
  formats: string[]
}

interface MovieListProps {
  filters: Filters
}

const MovieList: React.FC<MovieListProps> = ({ filters }) => {
  const filteredMovies = movies.filter((movie) => {
    // Genre filter
    const genreMatch =
      filters.genres.length === 0 ||
      movie.genre.split('/').some((g) => filters.genres.includes(g.trim()))

    // Rating filter
    const ratingMatch =
      filters.ratings.length === 0 || filters.ratings.some((r) => movie.rating >= r)

    // Language filter
    const languageMatch =
      !movie.languages ||
      filters.languages.length === 0 ||
      filters.languages.some((lang) => movie.languages?.includes(lang))

    return genreMatch && ratingMatch && languageMatch
  })

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md mb-4 flex-wrap">
        <h3 className="text-lg font-semibold">Coming Soon Movies</h3>
        <button className="text-blue-500 font-medium hover:underline text-sm mt-2 md:mt-0">
          Explore Coming Soon Movies
        </button>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
