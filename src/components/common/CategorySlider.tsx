import React from 'react'

// Import your icons/images
import DiningIcon from '../../assets/Event/elevate-snnhGYNqm44-unsplash.jpg'
import MovieIcon from '../../assets/movie/banner1.jpg'
import EventIcon from '../../assets/Event/harrison-reilly-_E8MeAflKRY-unsplash.jpg'
import ActivityIcon from '../../assets/Event/samantha-weisburg-hFTcxZFsG6g-unsplash.jpg'
import drama from '../../assets/Cast/cast3.png'

interface Category {
  icon: string
  label: string
}

const categories: Category[] = [
  { icon: DiningIcon, label: 'Dining' },
  { icon: MovieIcon, label: 'Movie' },
  { icon: EventIcon, label: 'Event' },
  { icon: ActivityIcon, label: 'Activity' },
  { icon: drama, label: 'Drama' },
]

const CategorySlider: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Categories</h2>
        <a href="#" className="text-sm text-orange-600 hover:underline font-light underline">
          More
        </a>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-4 py-2">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-52 sm:w-60 h-24 rounded-xl overflow-hidden transition-transform cursor-pointer"
            >
              {/* Left: Image (cover side) */}
              <div className="absolute inset-0">
                <img src={cat.icon} alt={cat.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Right overlay text */}
              <div className="relative z-10 flex flex-col justify-center items-start h-full px-4">
                <h3 className="text-white font-semibold text-lg sm:text-xl">{cat.label}</h3>
                <p className="text-gray-200 text-sm">Explore Now →</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default CategorySlider
