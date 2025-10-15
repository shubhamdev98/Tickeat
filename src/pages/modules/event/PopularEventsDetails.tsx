import React, { useState, useEffect, useRef } from 'react'

// Assets
import BannerImg from '../../../assets/EventDetail/Banner/garaba.webp'
import ArtistImg from '../../../assets/Cast/cast1.png'
import Gallery1 from '../../../assets/Event/elevate-snnhGYNqm44-unsplash.jpg'
import Gallery2 from '../../../assets/Event/harrison-reilly-_E8MeAflKRY-unsplash.jpg'
import Gallery3 from '../../../assets/Event/israel-palacio-Y20JJ_ddy9M-unsplash.jpg'

// Icons
import LangIcon from '../../../assets/icon/language_8462161.png'
import DurationIcon from '../../../assets/icon/future_11753771.png'
import TicketIcon from '../../../assets/icon/ticket_2067046.png'
import CalendarIcon from '../../../assets/icon/calendar_2693507.png'
import LocationIcon from '../../../assets/icon/location_3760076.png'

// Interfaces
interface EventInfo {
  title: string
  category: string
  date: string
  location: string
  price: string
}
interface EventGuide {
  icon: string
  label: string
  value: string
}
interface EventArtist {
  name: string
  role: string
  image: string
}
interface EventGalleryItem {
  src: string
  alt: string
  colSpan?: string
}
interface EventVenue {
  name: string
  address: string
  mapLink: string
}
interface EventData {
  banner: string
  info: EventInfo
  about: string
  guide: EventGuide[]
  artists: EventArtist[]
  gallery: EventGalleryItem[]
  venue: EventVenue
  faqs: string[]
  terms: string[]
}

// Event Data
const eventData: EventData = {
  banner: BannerImg,
  info: {
    title: 'Papon Live in Ahmedabad',
    category: 'Music, Concerts',
    date: 'Sat, 15 Nov, 8:00 PM',
    location: 'Karnavati Club, Ahmedabad',
    price: '₹499',
  },
  about: `An event is a planned occasion, gathering, or activity, often with a specific purpose such as celebration, education, or marketing, involving people coming together for a particular outcome. To describe an event, you should include its title, purpose, date, time, location, target audience, and key activities to help people understand what it is and why they should attend`,
  guide: [
    { icon: LangIcon, label: 'Language', value: 'English, Hindi' },
    { icon: DurationIcon, label: 'Duration', value: '5 Hours' },
    { icon: TicketIcon, label: 'Tickets Needed For', value: '8 yrs & above' },
    { icon: TicketIcon, label: 'Tickets Needed For', value: '8 yrs & above' },
    { icon: TicketIcon, label: 'Tickets Needed For', value: '8 yrs & above' },
    { icon: LangIcon, label: 'Language', value: 'English, Hindi' },
    { icon: DurationIcon, label: 'Duration', value: '5 Hours' },
    { icon: TicketIcon, label: 'Tickets Needed For', value: '8 yrs & above' },
    { icon: TicketIcon, label: 'Tickets Needed For', value: '8 yrs & above' },
    { icon: TicketIcon, label: 'Tickets Needed For', value: '8 yrs & above' },
  ],
  artists: [
    { name: 'Papon', role: 'Singer', image: ArtistImg },
    { name: 'Shreya Ghoshal', role: 'Singer', image: ArtistImg },
    { name: 'Arijit Singh', role: 'Singer', image: ArtistImg },
    { name: 'Neha Kakkar', role: 'Singer', image: ArtistImg },
  ],
  gallery: [
    { src: Gallery1, alt: 'Gallery 1', colSpan: 'col-span-2 md:col-span-2' },
    { src: Gallery2, alt: 'Gallery 2' },
    { src: Gallery3, alt: 'Gallery 3' },
    { src: Gallery1, alt: 'Gallery 4' },
    { src: Gallery2, alt: 'Gallery 5' },
    { src: Gallery3, alt: 'Gallery 6', colSpan: 'col-span-2 md:col-span-2' },
  ],
  venue: {
    name: 'Karnavati Club',
    address:
      'Sarkhej - Gandhinagar Hwy, opp. Shalby Hospital, Spring Valley, Mumatpura, Ahmedabad, Gujarat 380058, India',
    mapLink: 'https://maps.google.com/?q=Karnavati+Club+Ahmedabad',
  },
  faqs: ['What is the refund policy?', 'Are outside foods allowed?'],
  terms: ['1. Tickets are non-refundable.', '2. Organizer reserves the right of admission.'],
}

// Reusable Components
const AboutText: React.FC<{ text: string }> = ({ text }) => {
  const [showMore, setShowMore] = useState(false)
  const previewLength = 250
  const displayText = showMore ? text : `${text.slice(0, previewLength)}...`
  return (
    <div>
      <p className="text-gray-700 leading-relaxed text-justify text-base">{displayText}</p>
      {text.length > previewLength && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-orange hover:underline text-sm font-medium mt-2"
        >
          {showMore ? 'Show Less' : 'Read More'}
        </button>
      )}
    </div>
  )
}

const InfoItem: React.FC<{ icon: string; label: string; value: string }> = ({
  icon,
  label,
  value,
}) => (
  <p className="text-gray-700 flex items-center gap-2 text-sm">
    <img src={icon} alt={label} className="w-5 h-5" /> {value}
  </p>
)

const Accordion: React.FC<{ title: string; items: string[] }> = ({ title, items }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center font-medium text-gray-900"
      >
        {title} <span className="text-xl">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="mt-3 text-gray-600 text-sm space-y-2">
          {items.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      )}
    </div>
  )
}

const ArtistCard: React.FC<EventArtist> = ({ name, role, image }) => (
  <div className="flex-shrink-0 w-24 text-center">
    <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover mx-auto" />
    <p className="mt-2 text-sm font-semibold text-gray-900">{name}</p>
    <p className="text-xs text-gray-500">{role}</p>
  </div>
)

const GalleryItem: React.FC<EventGalleryItem> = ({ src, alt, colSpan }) => (
  <div className={`overflow-hidden rounded-xl ${colSpan || ''}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-48 sm:h-56 md:h-64 object-cover transform hover:scale-105 transition duration-300"
    />
  </div>
)

// Main Component
const PopularEventsDetails: React.FC = () => {
  const { banner, info, about, guide, artists, gallery, venue, faqs, terms } = eventData
  const bannerRef = useRef<HTMLDivElement>(null)
  const [bannerHeight, setBannerHeight] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const updateHeight = () =>
      setBannerHeight(
        bannerRef.current && window.innerWidth >= 768 ? bannerRef.current.clientHeight : null
      )
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  // Dynamic event info items
  const eventInfoItems = [
    { icon: CalendarIcon, label: 'Date & Time', value: info.date },
    { icon: LocationIcon, label: 'Location', value: info.location },
    // add more dynamically here
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-10 space-y-12 font-sans">
      {/* Banner + Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div ref={bannerRef} className="col-span-1 md:col-span-2">
          <img
            src={banner}
            alt="Event Banner"
            className="w-full h-56 sm:h-64 md:h-[420px] object-cover rounded-2xl"
          />
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4 md:sticky md:top-20 flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">{info.title}</h2>
          <p className="text-sm text-gray-500">{info.category}</p>
          {eventInfoItems.map((item, idx) => (
            <InfoItem key={idx} {...item} />
          ))}
          <hr className="my-4 hidden md:block border-gray-200" />
          <div className="mt-auto flex justify-between items-center">
            <div className="hidden md:block">
              <p className="text-gray-500 text-xs uppercase mb-1">Starts from</p>
              <p className="text-lg font-bold text-gray-900">{info.price}</p>
            </div>
            <button className="hidden md:block bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold transition">
              Book Tickets
            </button>
          </div>
        </div>
      </div>

      {/* Event Guide */}
      <section className="space-y-5">
        <div className="flex justify-between items-center">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900">Event Guide</h3>
          <button className="text-orange hover:underline text-sm font-medium">See all</button>
        </div>

        {/* Outer container with border */}
        <div className="overflow-x-auto py-4 bg-white rounded-2xl border border-gray-200 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex  divide-x divide-gray-200">
            {guide.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] flex items-start gap-3 px-4"
              >
                <img src={item.icon} alt={item.label} className="w-5 h-5" />
                <div>
                  <p className="text-gray-500 text-sm">{item.label}</p>
                  <p className="font-semibold text-gray-900 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="space-y-3">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">About the Event</h3>
        <AboutText text={about} />
      </section>

      {/* Artists */}
      <section className="space-y-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">Artists</h3>
        <div className="flex gap-6 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {artists.map((artist, idx) => (
            <ArtistCard key={idx} {...artist} />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="space-y-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">Gallery</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {gallery.map((img, idx) => (
            <GalleryItem key={idx} {...img} />
          ))}
        </div>
      </section>

      {/* Venue */}
      <section className="space-y-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">Venue</h3>
        <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <p className="font-semibold text-gray-900">{venue.name}</p>
            <p className="text-sm text-gray-600 leading-snug">{venue.address}</p>
          </div>
          <a
            href={venue.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* FAQ & Terms */}
      <section className="space-y-4 mb-16">
        <Accordion title="Frequently Asked Questions" items={faqs} />
        <Accordion title="Terms & Conditions" items={terms} />
      </section>

      {/* Mobile Price Bar */}
      <div className="sticky bottom-0 bg-white p-4 flex justify-between items-center md:hidden border-t border-gray-200 shadow-lg z-10 w-screen -mx-4">
        <div>
          <p className="text-xs text-gray-500">Starts from</p>
          <p className="text-lg font-bold text-gray-900">{info.price}</p>
        </div>
        <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold transition">
          Book Tickets
        </button>
      </div>
    </div>
  )
}

export default PopularEventsDetails
