// OffersCard.tsx
import React from 'react'
import offerImg1 from '../../../assets/Preminum/10586788.jpg'
import offerImg2 from '../../../assets/Preminum/10640760.jpg'
import offerImg3 from '../../../assets/Preminum/11734441.jpg'

type Offer = {
  id: string
  title: string
  description: string
  image: string
}

const OffersCard: React.FC = () => {
  const offers: Offer[] = [
    {
      id: '1',
      title: 'Save ₹50 on Your First Booking',
      description: 'Use promo code FIRST50 and enjoy exclusive savings!',
      image: offerImg1,
    },
    {
      id: '2',
      title: 'Bank Offer: 10% Cashback',
      description: 'Pay with XYZ Bank Credit Card and get 10% cashback.',
      image: offerImg2,
    },
    {
      id: '3',
      title: 'Festive Discount',
      description: 'Celebrate with us! Get flat ₹100 off on select events.',
      image: offerImg3,
    },
  ]

  return (
    <section>
      <div className="container-default">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Offers & Discounts</h2>
          <a href="#" className="text-sm text-orange-600 underline font-light">
            More
          </a>
        </div>

        {/* Horizontal scroll slider */}
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex space-x-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="flex-shrink-0 w-64 bg-white border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Image */}
                <img src={offer.image} alt={offer.title} className="w-full h-40 object-cover" />
                {/* Content */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{offer.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{offer.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
    </section>
  )
}

export default OffersCard
