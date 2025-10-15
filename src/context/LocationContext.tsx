import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

// Define types for the context
interface LocationContextType {
  location: string | null
  loading: boolean
  error: string | null
}

// Define props for the provider
interface LocationProviderProps {
  children: ReactNode
}

// Create the context with a proper default type
const LocationContext = createContext<LocationContextType | undefined>(undefined)

export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [location, setLocation] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLocationData = async (latitude: number, longitude: number) => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        )
        const data = await response.json()
        const userLocation = data?.address?.city || data?.address?.state || 'Unknown'
        setLocation(userLocation)
      } catch (err) {
        console.error(err)
        setError('Failed to fetch location data')
      } finally {
        setLoading(false)
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          fetchLocationData(latitude, longitude)
        },
        () => {
          setError('Unable to retrieve location')
          setLoading(false)
        }
      )
    } else {
      setError('Geolocation not supported')
      setLoading(false)
    }
  }, [])

  return (
    <LocationContext.Provider value={{ location, loading, error }}>
      {children}
    </LocationContext.Provider>
  )
}

// Custom hook with type-safety
export const useLocation = (): LocationContextType => {
  const context = useContext(LocationContext)
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider')
  }
  return context
}
