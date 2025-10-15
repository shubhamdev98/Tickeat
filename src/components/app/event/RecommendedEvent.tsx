// RecommendedEvents.tsx
import React from 'react'
import one from '../../../assets/Event/elevate-snnhGYNqm44-unsplash.jpg'
import two from '../../../assets/Event/harrison-reilly-_E8MeAflKRY-unsplash.jpg'
import three from '../../../assets/Event/israel-palacio-Y20JJ_ddy9M-unsplash.jpg'
import four from '../../../assets/Event/samantha-weisburg-hFTcxZFsG6g-unsplash.jpg'
import five from '../../../assets/Event/israel-palacio-Y20JJ_ddy9M-unsplash.jpg'

interface Event {
  id: string
  title: string
  date: string
  venue: string
  image: string
  price: number
}

const events: Event[] = [
  {
    id: '1',
    title: 'Rock Concert 2025',
    date: 'Oct 15, 2025',
    venue: 'Mumbai Arena',
    image: one,
    price: 1200,
  },
  {
    id: '2',
    title: 'Stand-Up Comedy Night',
    date: 'Oct 20, 2025',
    venue: 'Delhi Comedy Club',
    image: two,
    price: 800,
  },
  {
    id: '3',
    title: 'Tech Workshop',
    date: 'Oct 25, 2025',
    venue: 'Bangalore Expo Center',
    image: three,
    price: 500,
  },
  {
    id: '4',
    title: 'Bollywood Dance Night',
    date: 'Nov 5, 2025',
    venue: 'Pune, India',
    image: four,
    price: 1800,
  },
  {
    id: '5',
    title: 'Bollywood Dance Night',
    date: 'Nov 5, 2025',
    venue: 'Pune, India',
    image: five,
    price: 1800,
  },
]

const RecommendedEvents: React.FC = () => {
  return (
    <div className="container-default">
      {/* Header with title and "More" link */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Recommended for You</h2>
        <a href="#" className="text-sm text-orange-600 hover:underline font-light underline">
          More
        </a>
      </div>

      {/* Horizontal scroll slider */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 w-64 bg-white border border-light-gray rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300"
            >
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray mt-1">{event.date}</p>
                <p className="text-sm text-gray">{event.venue}</p>
                <p className="text-sm text-black font-medium mt-2">₹{event.price}</p>
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

export default RecommendedEvents
