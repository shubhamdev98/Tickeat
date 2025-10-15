import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../common/Card'
import one from '../../../../assets/Event/elevate-snnhGYNqm44-unsplash.jpg'
import two from '../../../../assets/Event/harrison-reilly-_E8MeAflKRY-unsplash.jpg'
import three from '../../../../assets/Event/israel-palacio-Y20JJ_ddy9M-unsplash.jpg'
import four from '../../../../assets/Event/samantha-weisburg-hFTcxZFsG6g-unsplash.jpg'

const AllPopularEvents: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  interface Event {
    id: number
    title: string
    date: string
    location: string
    image: string
    price?: string
  }

  const events: Event[] = [
    {
      id: 1,
      title: 'Coldplay Live Concert',
      date: 'Oct 15, 2025',
      location: 'Mumbai, India',
      image: one,
      price: '₹3500',
    },
    {
      id: 2,
      title: 'Stand-Up Comedy Night',
      date: 'Oct 20, 2025',
      location: 'Delhi, India',
      image: two,
      price: '₹1200',
    },
    {
      id: 3,
      title: 'Startup Meetup 2025',
      date: 'Oct 25, 2025',
      location: 'Bangalore, India',
      image: four,
    },
    {
      id: 4,
      title: 'Bollywood Dance Night',
      date: 'Nov 5, 2025',
      location: 'Pune, India',
      image: three,
      price: '₹1800',
    },
  ]

  // Conditional render: mobile (<640px) => 1 card, else all
  const displayedEvents = windowWidth < 640 ? events.slice(0, 1) : events

  return (
    <section className="py-8">
      <div className="container-default">
        {/* Heading + More link */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Popular Events</h2>
          <Link
            to="/popular/events" // ✅ navigate to full event page
            className="text-sm text-orange-600 hover:underline font-light"
          >
            More
          </Link>
        </div>

        {/* Event cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedEvents.map((event) => (
            <Link key={event.id} to={`/popular/events/${event.id}`}>
              <Card
                image={event.image}
                title={event.title}
                date={event.date}
                location={event.location}
                price={event.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllPopularEvents
