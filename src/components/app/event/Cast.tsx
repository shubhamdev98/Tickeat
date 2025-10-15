import React from 'react'
import SectionHeader from '../../common/SectionHeader' // adjust path accordingly

// Example images (replace with your own)
import Cast1 from '../../../assets/Cast/cast1.png'
import Cast2 from '../../../assets/Cast/cast2.jpg'
import Cast3 from '../../../assets/Cast/cast3.png'
import Cast4 from '../../../assets/Cast/cast4.jpg'
import Cast5 from '../../../assets/Cast/cast5.jpg'
import Cast6 from '../../../assets/Cast/cast6.jpg'

interface CastItem {
  image: string
  name: string
}

const castList: CastItem[] = [
  { image: Cast1, name: 'John Doe' },
  { image: Cast2, name: 'Jane Smith' },
  { image: Cast3, name: 'Mike Johnson' },
  { image: Cast4, name: 'Emily Davis' },
  { image: Cast5, name: 'Chris Lee' },
  { image: Cast6, name: 'Sarah Brown' },
]

const Cast: React.FC = () => {
  return (
    <div className="container-default">
      {/* Header using the reusable component */}
      <SectionHeader title="Artists in your District" linkText="More" linkHref="/artists" />

      {/* Horizontal swiper */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-6 sm:space-x-8 lg:space-x-10 py-2">
          {castList.map((cast, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-gray-200">
                <img src={cast.image} alt={cast.name} className="w-full h-full object-cover" />
              </div>
              <span className="mt-2 text-xs sm:text-sm text-center text-gray-700">{cast.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cast
