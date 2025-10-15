import React from 'react'
import Slider, { Settings } from 'react-slick'
import { banners } from '../../data/app_data/data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const BannerCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '25%', // Show 25% of next/prev slides
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease-in-out',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablets & small laptops
        settings: {
          centerPadding: '15%',
        },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          centerPadding: '10%',
        },
      },
      {
        breakpoint: 480, // small mobile
        settings: {
          centerPadding: '5%',
        },
      },
    ],
  }

  return (
    <section className="w-full bg-white md:py-12">
      <div className="max-w-screen-2xl mx-auto px-0">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="px-2">
              <div className="relative w-full h-62 sm:h-64 md:h-[250px] rounded-xl overflow-hidden">
                <img
                  src={banner}
                  alt={`banner-${index}`}
                  className="w-full h-[250px] object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default BannerCarousel
