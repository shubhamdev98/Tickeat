// src/data.ts

// Banner Images
import banner1 from '../../assets/movie/banner1.jpg'
import banner2 from '../../assets/movie/banner2.avif'
import banner3 from '../../assets/movie/banner3.avif'
import banner4 from '../../assets/movie/banner4.avif'

// Movie Images
import m1 from '../../assets/movie/m1.avif'
import m2 from '../../assets/movie/m2.avif'
import m3 from '../../assets/movie/m3.avif'
import m4 from '../../assets/movie/m4.avif'
import m5 from '../../assets/movie/m5.avif'
import m6 from '../../assets/movie/m6.avif'
import m7 from '../../assets/movie/m7.avif'
import m8 from '../../assets/movie/m8.avif'
import m9 from '../../assets/movie/m9.avif'
import m10 from '../../assets/movie/m10.avif'
import m11 from '../../assets/movie/m11.avif'
import m12 from '../../assets/movie/m12.avif'
import m10

// Event Images (if needed)
import e1 from '../../assets/movie/e1.avif'
import e2 from '../../assets/movie/e2.avif'
import e3 from '../../assets/movie/e3.avif'
import e4 from '../../assets/movie/e4.avif'
import e5 from '../../assets/movie/e5.avif'

import inox from '../../assets/movie/inox.avif'
import pvr from '../../assets/movie/pvr.avif'
import cinepolis from '../../assets/movie/cinepolis.avif'

// ------------------ Types ------------------
export interface Movie {
  id: number
  title: string
  genre: string
  rating: number
  votes: string
  img: string
  promoted?: boolean
  languages?: string
  age?: string
}

export interface Event {
  id: number
  title: string
  subtitle: string
  img: string
  category: string
  rating: number
  location: string
  attendees: string
}

export interface Timing {
  time: string
  label: string
  highlight?: boolean
}

export interface Theatre {
  name: string
  distance: string
  cancellation: string
  img: string
  timings: Timing[]
}

export interface Order {
  id: string
  title: string
  format: string
  datetime: string
  cinema: string
  quantity: number
  seats: string
  bookingTime: string
  paymentMethod: string
  poster: string
  total: number
  ticket: number
  fee: number
}

export interface CountryCode {
  name: string
  code: string
  dial_code: string
}

// ------------------ Data ------------------
export const languages: string[] = [
  'Hindi',
  'English',
  'English 7D',
  'Bengali',
  'Punjabi',
  'Tamil',
  'Japanese',
  'Telugu',
]

export const banners: string[] = [banner1, banner2, banner3, banner4]

export const movies: Movie[] = [
  {
    id: 1,
    title: 'Maa',
    genre: 'Fantasy/Horror/Mythological/Thriller',
    rating: 7.2,
    votes: '2.7K',
    img: m1,
    promoted: true,
  },
  {
    id: 2,
    title: 'Kannappa',
    genre: 'Action/Drama/Fantasy/Period',
    rating: 7.3,
    votes: '10.7K',
    img: m2,
    promoted: true,
  },
  {
    id: 3,
    title: 'Mission: Impossible - The Final Reckoning',
    genre: 'Action/Adventure/Thriller',
    rating: 8.6,
    votes: '84.1K',
    img: m3,
  },
  {
    id: 4,
    title: 'F1: The Movie',
    genre: 'Action/Drama/Sports',
    rating: 9.5,
    votes: '6.8K',
    img: m4,
  },
  {
    id: 5,
    title: 'From the World of John Wick: Ballerina',
    genre: 'Action/Thriller',
    rating: 8.7,
    votes: '15.2K',
    img: m5,
  },
]

export const allMovies: Movie[] = [
  {
    id: 1,
    title: 'Maa',
    genre: 'Fantasy/Horror/Mythological/Thriller',
    rating: 7.2,
    votes: '2.7K',
    img: m1,
    promoted: true,
    languages: 'Hindi',
    age: 'UA16+',
  },
  {
    id: 2,
    title: 'Kannappa',
    genre: 'Action/Drama/Fantasy/Period',
    rating: 7.3,
    votes: '10.7K',
    img: m2,
    promoted: true,
    languages: 'Telugu, Hindi, Tamil, Malayalam',
    age: 'UA13+',
  },
  {
    id: 3,
    title: 'Mission: Impossible - The Final Reckoning',
    genre: 'Action/Adventure/Thriller',
    rating: 8.6,
    votes: '84.1K',
    img: m3,
    languages: 'English, Hindi, Telugu, Tamil',
    age: 'UA13+',
  },
  {
    id: 4,
    title: 'F1: The Movie',
    genre: 'Action/Drama/Sports',
    rating: 9.5,
    votes: '6.8K',
    img: m4,
    languages: 'English, Hindi, Tamil, Telugu',
    age: 'UA16+',
  },
  {
    id: 5,
    title: 'From the World of John Wick: Ballerina',
    genre: 'Action/Thriller',
    rating: 8.7,
    votes: '15.2K',
    img: m5,
    languages: 'English',
    age: 'A',
  },
  {
    id: 6,
    title: 'M3GAN 2.0',
    genre: 'Horror/Sci-Fi/Thriller',
    rating: 8.4,
    votes: '117',
    img: m6,
    languages: 'English, Hindi',
    age: 'UA16+',
  },
  {
    id: 7,
    title: 'Housefull 5',
    genre: 'Comedy/Thriller',
    rating: 6.1,
    votes: '56.3K',
    img: m7,
    languages: 'Hindi',
    age: 'U',
  },
  {
    id: 8,
    title: 'Sitaare Zameen Par',
    genre: 'Comedy/Drama/Sports',
    rating: 8.5,
    votes: '39.6K',
    img: m8,
    languages: 'Hindi',
    age: 'U',
  },
  {
    id: 9,
    title: 'Naruto the Movie: Ninja Clash in the Land of Snow',
    genre: 'Action/Adventure/Animation/Comedy',
    rating: 9.6,
    votes: '51',
    img: m9,
    languages: 'Japanese, Hindi',
    age: 'UA',
  },
  {
    id: 10,
    title: '28 Years Later',
    genre: 'Horror/Thriller',
    rating: 7.9,
    votes: '3.7K',
    img: m10,
    languages: 'English',
    age: 'A',
  },
]

export const events: Event[] = [
  {
    id: 1,
    title: 'COMEDY SHOWS',
    subtitle: '205+ Events',
    img: e1,
    category: 'Entertainment',
    rating: 4.6,
    location: 'Mumbai',
    attendees: '2.5K+',
  },
  {
    id: 2,
    title: 'AMUSEMENT PARK',
    subtitle: '20+ Events',
    img: e2,
    category: 'Adventure',
    rating: 4.3,
    location: 'Pune',
    attendees: '2.5K+',
  },
  {
    id: 3,
    title: 'THEATRE SHOWS',
    subtitle: '80+ Events',
    img: e3,
    category: 'Drama',
    rating: 4.7,
    location: 'Delhi',
    attendees: '2.5K+',
  },
  {
    id: 4,
    title: 'KIDS',
    subtitle: '25+ Events',
    img: e4,
    category: 'Family',
    rating: 4.5,
    location: 'Bangalore',
    attendees: '2.5K+',
  },
  {
    id: 5,
    title: 'ADVENTURE & FUN',
    subtitle: '10+ Events',
    img: e5,
    category: 'Outdoor',
    rating: 4.4,
    location: 'Goa',
    attendees: '2.5K+',
  },
  {
    id: 6,
    title: 'MUSIC CONCERTS',
    subtitle: '150+ Events',
    img: e5,
    category: 'Music',
    rating: 4.8,
    location: 'Hyderabad',
    attendees: '2.5K+',
  },
  {
    id: 7,
    title: 'SPORTS',
    subtitle: '60+ Events',
    img: e5,
    category: 'Sports',
    rating: 4.2,
    location: 'Chennai',
    attendees: '2.5K+',
  },
  {
    id: 8,
    title: 'WORKSHOPS',
    subtitle: '45+ Events',
    img: e5,
    category: 'Education',
    rating: 4.6,
    location: 'Ahmedabad',
    attendees: '2.5K+',
  },
  {
    id: 9,
    title: 'FESTIVALS',
    subtitle: '30+ Events',
    img: e5,
    category: 'Cultural',
    rating: 4.9,
    location: 'Kolkata',
    attendees: '2.5K+',
  },
  {
    id: 10,
    title: 'FOOD & DRINK',
    subtitle: '40+ Events',
    img: e5,
    category: 'Food',
    rating: 4.3,
    location: 'Jaipur',
    attendees: '2.5K+',
  },
]

export const theatres: Theatre[] = [
  {
    name: 'INOX Quest Mall, Ballygunge, Kolkata',
    distance: '2.0 km',
    cancellation: 'Allows cancellation',
    img: inox,
    timings: [
      { time: '10:15 AM', label: 'RECLINERS' },
      { time: '2:00 PM', label: 'RECLINERS' },
      { time: '6:45 PM', label: 'RECLINERS', highlight: true },
      { time: '11:35 PM', label: 'RECLINERS' },
      { time: '7:45 PM', label: 'RECLINERS' },
      { time: '12:35 PM', label: 'RECLINERS' },
    ],
  },
  {
    name: 'PVR Manisquare, Manisqare Mall, Kolkata',
    distance: '1.5 km',
    cancellation: 'Non-cancellable',
    img: pvr,
    timings: [
      { time: '10:30 AM', label: 'PVR PXL' },
      { time: '1:45 PM', label: 'PVR PXL' },
      { time: '5:15 PM', label: 'PVR PXL' },
      { time: '11:25 PM', label: 'PVR PXL', highlight: true },
    ],
  },
  {
    name: 'Cinepolis Acropolis Mall, Rajdanga Road, Kolkata',
    distance: '1.8 km',
    cancellation: 'Non-cancellable',
    img: cinepolis,
    timings: [
      { time: '08:10 PM', label: 'DOLBY 7.1' },
      { time: '11:30 PM', label: 'DOLBY 7.1' },
    ],
  },
]

export const ordersData: Order[] = [
  {
    id: 'TCAKJAB',
    title: 'Sinners',
    format: '2D',
    datetime: 'Tue, 29 Apr 2025 | 9:45 PM',
    cinema: 'PVR: Mani Square Mall, Kolkata',
    quantity: 5,
    seats: 'PE-P9,P10,P11,P12,P13',
    bookingTime: 'Apr 29 2025 07:46PM',
    paymentMethod: 'Credit/Debit Card',
    poster: m11,
    total: 607.1,
    ticket: 495.0,
    fee: 112.1,
  },
  {
    id: 'XYCKAJS',
    title: 'Kesari Chapter 2: The Untold Story of Jallianwala Bagh',
    format: '2D',
    datetime: 'Sat, 26 Apr 2025 | 2:45 PM',
    cinema: 'Miraj Cinemas: Newtown, Kolkata',
    quantity: 3,
    seats: 'PE-P9,P10,P11,P12,P13',
    bookingTime: 'Apr 25 2025 04:00PM',
    paymentMethod: 'Credit/Debit Card',
    poster: m12,
    total: 607.1,
    ticket: 495.0,
    fee: 112.1,
  },
]

export const filters: string[] = [
  '2D',
  '3D',
  'Wheelchair Friendly',
  'Premium Seats',
  'Recliners',
  'IMAX',
  'PVR PXL',
  '4DX',
  'Laser',
  'Dolby Atmos',
]
export const tabs: string[] = ['Profile', 'Your Orders']

export const countryCodes: CountryCode[] = [
  { name: 'India', code: 'IN', dial_code: '+91' },
  { name: 'United States', code: 'US', dial_code: '+1' },
  { name: 'United Kingdom', code: 'GB', dial_code: '+44' },
  { name: 'Australia', code: 'AU', dial_code: '+61' },
  { name: 'Canada', code: 'CA', dial_code: '+1' },
  { name: 'Germany', code: 'DE', dial_code: '+49' },
  { name: 'France', code: 'FR', dial_code: '+33' },
  { name: 'Japan', code: 'JP', dial_code: '+81' },
  { name: 'China', code: 'CN', dial_code: '+86' },
  { name: 'Brazil', code: 'BR', dial_code: '+55' },
  { name: 'United Arab Emirates', code: 'AE', dial_code: '+971' },
  { name: 'Bangladesh', code: 'BD', dial_code: '+880' },
  { name: 'Nepal', code: 'NP', dial_code: '+977' },
  { name: 'Pakistan', code: 'PK', dial_code: '+92' },
  { name: 'Russia', code: 'RU', dial_code: '+7' },
  { name: 'South Africa', code: 'ZA', dial_code: '+27' },
  { name: 'Sri Lanka', code: 'LK', dial_code: '+94' },
  { name: 'Thailand', code: 'TH', dial_code: '+66' },
  { name: 'Indonesia', code: 'ID', dial_code: '+62' },
  { name: 'Malaysia', code: 'MY', dial_code: '+60' },
]

export const cities: string[] = ['Ahmedabad', 'Mumbai', 'Pune', 'Delhi', 'Bangalore']
