import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Calendar,
  MapPin,
  CreditCard,
  Star,
  Tag,
  Bell,
  Headphones,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from 'lucide-react'

const menu = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
  { name: 'Users', icon: Users, path: '/admin/users' },
  { name: 'Events', icon: Calendar, path: '/admin/events' },
  { name: 'Venues', icon: MapPin, path: '/admin/venues' },
  { name: 'Payments', icon: CreditCard, path: '/admin/payment' },
  { name: 'Reviews', icon: Star, path: '/admin/reviews' },
  { name: 'Offers & Coupons', icon: Tag, path: '/admin/offers' },
  { name: 'Notifications', icon: Bell, path: '/admin/notifications' },
  { name: 'Support', icon: Headphones, path: '/admin/support' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`${
        collapsed ? 'w-17' : 'w-64'
      } bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300 ease-in-out`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">EventBooking</h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-1 px-3 overflow-y-auto">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `group relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`
            }
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>{item.name}</span>}

            {/* Tooltip on hover (when collapsed) */}
            {collapsed && (
              <span className="absolute left-16 z-50 bg-gray-900 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                {item.name}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer / Admin Info */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
        {!collapsed && (
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Admin User</p>
            <p className="text-xs text-gray-400">admin@eventbooking.com</p>
          </div>
        )}
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition">
          <LogOut className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </aside>
  )
}
