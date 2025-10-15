import React, { useState } from 'react'
import type { FC, ChangeEvent } from 'react'
import { Crosshair } from 'lucide-react'
import HyderabadIcon from '../../assets/Location/building_2147011.png'
import KolkataIcon from '../../assets/Location/gate-india_317835.png'
import MumbaiIcon from '../../assets/Location/gate-india_4178958.png'
import PuneIcon from '../../assets/Location/mandalay_2321939.png'
import Bangalore from '../../assets/Location/banglore.png'
import Ahmadabad from '../../assets/Location/ahmedabad.png'
import { cities } from '../../data/app_data/city'
import { useLocation } from '../../context/LocationContext' // 👈 import context

interface LocationPopupProps {
  onClose: () => void
  onSelect: (city: string) => void
}

interface MajorCity {
  name: string
  icon: string
}

const LocationPopup: FC<LocationPopupProps> = ({ onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedLetter, setSelectedLetter] = useState<string>('A')

  // 👇 access context
  const { location, loading, error } = useLocation()

  const majorCities: MajorCity[] = [
    { name: 'Hyderabad', icon: HyderabadIcon },
    { name: 'Kolkata', icon: KolkataIcon },
    { name: 'Mumbai', icon: MumbaiIcon },
    { name: 'Pune', icon: PuneIcon },
    { name: 'Bangalore', icon: Bangalore },
    { name: 'Ahmadabad', icon: Ahmadabad },
  ]

  const allCities: string[] = cities

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter)
    setSearchTerm('')
  }

  // 👇 use current location
  const handleUseCurrentLocation = () => {
    if (loading) {
      alert('Detecting your location...')
      return
    }
    if (error) {
      alert(error)
      return
    }
    if (location) {
      onSelect(location)
      onClose()
    } else {
      alert('Unable to detect your location.')
    }
  }

  // filter cities
  const filteredCities = allCities
    .filter((city) => city.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((city) => city.toLowerCase().startsWith(selectedLetter.toLowerCase()))

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999] p-4">
      <div className="bg-white rounded-2xl w-full sm:w-[90%] md:w-[80%] lg:w-[60%] max-w-4xl p-4 sm:p-6 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base sm:text-lg font-semibold">Select Location</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black text-xl">
            ✕
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search city, area or locality"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm sm:text-base"
          value={searchTerm}
          onChange={handleSearch}
        />

        {/* Use current location */}
        <button
          onClick={handleUseCurrentLocation} // 👈 handle click
          className="flex items-center gap-2 text-orange-600 mb-4 text-sm sm:text-base"
        >
          <Crosshair className="h-4 w-4" />
          {loading ? 'Detecting...' : 'Use Current Location'}
        </button>

        {/* Major cities */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {majorCities.map((city) => (
            <button
              key={city.name}
              onClick={() => onSelect(city.name)}
              className="flex flex-col items-center p-2 sm:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-center"
            >
              <img
                src={city.icon}
                alt={city.name}
                className="h-8 w-8 sm:h-10 sm:w-10 mb-1 sm:mb-2"
              />
              <span className="text-xs sm:text-sm">{city.name}</span>
            </button>
          ))}
        </div>

        {/* All Cities */}
        <div>
          <h3 className="text-xs sm:text-sm font-medium mb-2">All Cities</h3>
          <div className="flex flex-wrap gap-1 sm:gap-2 text-[10px] sm:text-xs text-orange-600 mb-3">
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
              <span
                key={letter}
                onClick={() => handleLetterClick(letter)}
                className={`cursor-pointer hover:underline ${
                  selectedLetter === letter ? 'font-bold underline' : ''
                }`}
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 max-h-48 overflow-y-auto text-xs sm:text-sm">
            {filteredCities.map((city) => (
              <button
                key={city}
                onClick={() => onSelect(city)}
                className="text-left hover:underline"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationPopup
