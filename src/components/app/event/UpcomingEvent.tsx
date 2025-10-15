import React from 'react'
import UpcomingEvents from '../../common/Card'
import LiveMusice from '../../../assets/Event/israel-palacio-Y20JJ_ddy9M-unsplash.jpg'
import FootFes from '../../../assets/Event/elevate-snnhGYNqm44-unsplash.jpg'
import DramaNight from '../../../assets/Event/samantha-weisburg-hFTcxZFsG6g-unsplash.jpg'
import SportsEvent from '../../../assets/Event/harrison-reilly-_E8MeAflKRY-unsplash.jpg'

interface Event {
  image: string
  title: string
  date: string
  location: string
  price: string
}

const events: Event[] = [
  {
    image: LiveMusice,
    title: 'Live Music Concert',
    date: 'Oct 15, 2025',
    location: 'Ahmedabad, IN',
    price: '$25',
  },
  {
    image: FootFes,
    title: 'Food Festival',
    date: 'Nov 5, 2025',
    location: 'Mumbai, IN',
    price: 'Free',
  },
  {
    image: DramaNight,
    title: 'Drama Night',
    date: 'Dec 1, 2025',
    location: 'Delhi, IN',
    price: '$15',
  },
  {
    image: SportsEvent,
    title: 'Sports Event',
    date: 'Jan 20, 2026',
    location: 'Bangalore, IN',
    price: '$10',
  },
]

const EventList: React.FC = () => {
  return (
    <div className="container-default">
      {/* Header with title and "More" link */}
      <div className="flex justify-between items-center mb-6">
        <h2 className=" text-xl font-semibold text-gray-800">Upcoming Events</h2>
        <a href="#" className="text-sm text-orange-600 hover:underline font-light underline">
          More
        </a>
      </div>

      {/* Event grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events.map((event, idx) => (
          <UpcomingEvents
            key={idx}
            image={event.image}
            title={event.title}
            date={event.date}
            location={event.location}
            price={event.price}
          />
        ))}
      </div>
    </div>
  )
}

export default EventList
