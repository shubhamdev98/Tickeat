import React from 'react'
import Carousel from '../../components/common/Carousel'
import CategorySlider from '../../components/common/CategorySlider'
import EventList from '../../components/app/event/UpcomingEvent'
import CastSwiper from '../../components/app/event/Cast'
import PopularEvents from '../../components/app/event/PopularEvent/AllPopularEvents'
import RecommendedEvents from '../../components/app/event/RecommendedEvent'
import OffersCard from '../../components/app/event/OfferEvent'
import SearchBar from '../../components/common/SearchBar'
import AllMovie from '../../components/app/movie/AllMovie'
const Home: React.FC = () => {
  return (
    <>
      {/* Mobile SearchBar */}
      <div className="block md:hidden">
        <SearchBar placeholder="Search events or location..." />
      </div>

      {/* Main Sections */}
      <Carousel />
      <CategorySlider />
      <EventList />
      <AllMovie />
      <PopularEvents />
      <CastSwiper />
      <RecommendedEvents />
      <OffersCard />
    </>
  )
}

export default Home
