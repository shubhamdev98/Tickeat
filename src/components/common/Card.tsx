import React from 'react'

interface EventCardProps {
  image: string
  title: string
  date: string
  location: string
  price?: string
}

const Card: React.FC<EventCardProps> = ({ image, title, date, location, price }) => {
  return (
    <div className="bg-white border-1 border-gray-300 rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{date}</p>
        <p className="text-sm text-gray-500">{location}</p>
        {price ? (
          <p className="text-sm text-gray-900 font-medium mt-2">{price}</p>
        ) : (
          <p className="text-sm text-gray-900 font-medium mt-2">Free</p> // reserved space
        )}
      </div>
    </div>
  )
}

export default Card
