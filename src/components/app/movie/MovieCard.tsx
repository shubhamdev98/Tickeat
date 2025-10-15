import React from 'react'

interface Movie {
  id: number
  title: string
  genre: string
  rating: number
  votes: string
  img: string
  promoted?: boolean
  languages?: string
  age?: string
}

interface MovieCardProps {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 flex flex-col h-[420px]">
      {/* Fixed height for equal-sized cards */}

      {/* Movie Poster */}
      <div className="relative w-full h-2/3">
        <img src={movie.img} alt={movie.title} className="w-full h-full object-cover" />
        {movie.promoted && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            PROMOTED
          </span>
        )}
      </div>

      {/* Movie Info */}
      <div className="p-3 flex flex-col flex-1">
        <h2 className="text-base font-bold mb-1 line-clamp-2">{movie.title}</h2>
        <p className="text-sm text-gray-600 mb-1">{movie.genre}</p>
        {movie.languages && (
          <p className="text-sm text-gray-600 mb-1">Languages: {movie.languages}</p>
        )}
        {movie.age && <p className="text-sm text-gray-600 mb-2">Age: {movie.age}</p>}

        {/* Rating & Votes */}
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-yellow-500 font-bold text-sm">{movie.rating} ⭐</span>
          <span className="text-gray-500 text-sm">{movie.votes} votes</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
