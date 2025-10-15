import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Navbar/logo.png'
import LocationIcon from '../../assets/Navbar/location.png'
import LocationPopup from './LocationPopup'
import AvatarImg from '../../assets/Avatar/profile.png'
import LoginPopup from './LoginPopup'
import SearchBar from './SearchBar'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [locationOpen, setLocationOpen] = useState(false)
  const [showLocationPopup, setShowLocationPopup] = useState(false)
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<string>('Ahmedabad, IN')
  const [avatar, setAvatar] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('Default User')

  const locations = ['Ahmedabad, IN', 'Mumbai, IN', 'Delhi, IN', 'Bangalore, IN', 'Chennai, IN']
  const menuItems = ['Home', 'Show Events', 'My Bookings', 'Create Event', 'Contact']

  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close location dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLocationOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Render desktop menu items
  const renderMenuItems = (className = '') =>
    menuItems.map((item) => {
      // Define route paths for each menu item
      const pathMap: Record<string, string> = {
        Home: '/',
        'Show Events': '/events',
        'My Bookings': '/bookings',
        'Create Event': avatar ? '/organizer-form' : '#',
        Contact: '/contact',
      }

      const path = pathMap[item] || '/'

      return (
        <Link
          key={item}
          to={path}
          className={`${className} hover:text-orange-500 transition duration-300 font-normal`}
          onClick={() => setIsOpen(false)} // close mobile if needed
        >
          {item}
        </Link>
      )
    })

  // Render mobile menu items
  const renderMobileMenuItems = () =>
    menuItems.map((item) => {
      const pathMap: Record<string, string> = {
        Home: '/',
        'Show Events': '/events',
        'My Bookings': '/bookings',
        'Create Event': avatar ? '/organizer-form' : '#',
        Contact: '/contact',
      }

      const path = pathMap[item] || '/'

      return (
        <Link
          key={item}
          to={path}
          className="text-left w-full px-4 py-1 rounded-md hover:bg-gray-200 transition duration-300 font-normal"
          onClick={() => setIsOpen(false)}
        >
          {item}
        </Link>
      )
    })

  return (
    <nav className="bg-white text-black border-b border-gray-300 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative w-full">
          {/* Left: Logo + Location */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img src={Logo} alt="PassBooking Logo" className="h-10 w-auto" />
              </Link>
            </div>
            <div className="h-8 border-l border-gray-300"></div>

            {/* Location Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center space-x-2 focus:outline-none"
                onClick={() => setLocationOpen((prev) => !prev)}
              >
                <img src={LocationIcon} alt="Location Icon" className="h-5 w-5" />
                <span className="text-sm font-normal">{selectedLocation}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${locationOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {locationOpen && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                  {locations.map((loc) => (
                    <div
                      key={loc}
                      onClick={() => {
                        setSelectedLocation(loc)
                        setLocationOpen(false)
                      }}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                    >
                      {loc}
                    </div>
                  ))}
                  <div
                    onClick={() => {
                      setShowLocationPopup(true)
                      setLocationOpen(false)
                    }}
                    className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 text-orange-600"
                  >
                    Choose other…
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center Menu */}
          <div className="hidden md:flex space-x-6 items-center">{renderMenuItems()}</div>

          {/* Right: Search + Avatar/Login */}
          <div className="hidden md:flex items-center">
            <SearchBar />
            {avatar ? (
              <img
                src={AvatarImg}
                alt="User Avatar"
                className="h-10 w-10 rounded-full cursor-pointer border border-gray-300"
              />
            ) : (
              <button
                onClick={() => setShowLoginPopup(true)}
                className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300 font-normal"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-2 rounded-md hover:bg-gray-200 transition"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed top-16 left-0 w-full bg-white z-40 shadow-lg">
            <div className="flex flex-col gap-4 p-4">
              {renderMobileMenuItems()}

              {!avatar && (
                <button
                  onClick={() => {
                    setShowLoginPopup(true)
                    setIsOpen(false)
                  }}
                  className="text-left w-full px-4 py-1 rounded-md hover:bg-gray-200 transition duration-300 font-normal"
                >
                  Login
                </button>
              )}

              {avatar && (
                <div className="flex px-4 items-center space-x-2 cursor-pointer">
                  <img
                    src={AvatarImg}
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full border border-gray-300"
                  />
                  <span className="text-sm font-medium">{username}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Popups */}
      {showLocationPopup && (
        <LocationPopup
          onClose={() => setShowLocationPopup(false)}
          onSelect={(loc: string) => {
            setSelectedLocation(loc)
            setShowLocationPopup(false)
          }}
        />
      )}
      {showLoginPopup && (
        <LoginPopup
          onClose={() => setShowLoginPopup(false)}
          onLoginSuccess={() => setAvatar(true)}
        />
      )}
    </nav>
  )
}

export default NavBar
