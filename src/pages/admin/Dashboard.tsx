import { TrendingUp, Ticket, Calendar, Users, MapPin, Star, Tag, DollarSign } from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from 'recharts'
import { useState } from 'react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const cards = [
    {
      title: 'Total Revenue',
      value: '$2,890,590',
      change: '+24.5%',
      icon: TrendingUp,
      color: 'text-green-600',
      bg: 'bg-green-100/20',
    },
    {
      title: 'Total Bookings',
      value: '42,859',
      change: '+18.2%',
      icon: Ticket,
      color: 'text-blue-600',
      bg: 'bg-blue-100/20',
    },
    {
      title: 'Active Events',
      value: '1,356',
      change: '+12.8%',
      icon: Calendar,
      color: 'text-purple-600',
      bg: 'bg-purple-100/20',
    },
    {
      title: 'Total Users',
      value: '68,234',
      change: '+32.1%',
      icon: Users,
      color: 'text-orange-600',
      bg: 'bg-orange-100/20',
    },
  ]

  const topEvents = [
    {
      id: 1,
      name: 'Summer Music Festival',
      bookings: '2,450',
      revenue: '$122,500',
      growth: '+28%',
    },
    {
      id: 2,
      name: 'NBA Finals Game 5',
      bookings: '1,890',
      revenue: '$94,500',
      growth: '+22%',
    },
    {
      id: 3,
      name: 'Comedy Night Live',
      bookings: '1,560',
      revenue: '$78,000',
      growth: '+18%',
    },
    {
      id: 4,
      name: 'Broadway Musical',
      bookings: '1,340',
      revenue: '$67,000',
      growth: '+15%',
    },
    {
      id: 5,
      name: 'Rock Concert',
      bookings: '1,120',
      revenue: '$56,000',
      growth: '+12%',
    },
  ]

  const quickStats = [
    { label: 'Active Venues', value: '142', icon: MapPin },
    { label: 'Pending Reviews', value: '87', icon: Star },
    { label: 'Active Coupons', value: '23', icon: Tag },
    { label: 'Avg. Ticket Price', value: '$67.50', icon: DollarSign },
    { label: 'Customer Satisfaction', value: '4.8/5.0', icon: Star },
  ]

  const revenueData = [
    { name: 'Jan', revenue: 80000, profit: 20000 },
    { name: 'Feb', revenue: 110000, profit: 28000 },
    { name: 'Mar', revenue: 145000, profit: 36000 },
    { name: 'Apr', revenue: 190000, profit: 48000 },
    { name: 'May', revenue: 235000, profit: 59000 },
    { name: 'Jun', revenue: 275000, profit: 69000 },
    { name: 'Jul', revenue: 310000, profit: 78000 },
    { name: 'Aug', revenue: 340000, profit: 85000 },
    { name: 'Sep', revenue: 370000, profit: 92000 },
    { name: 'Oct', revenue: 395000, profit: 99000 },
    { name: 'Nov', revenue: 420000, profit: 105000 },
    { name: 'Dec', revenue: 440000, profit: 110000 },
  ]

  const bookingData = [
    { name: 'Jan', bookings: 3200, cancelled: 120 },
    { name: 'Feb', bookings: 4500, cancelled: 180 },
    { name: 'Mar', bookings: 5800, cancelled: 210 },
    { name: 'Apr', bookings: 7200, cancelled: 250 },
    { name: 'May', bookings: 8900, cancelled: 290 },
    { name: 'Jun', bookings: 10200, cancelled: 320 },
    { name: 'Jul', bookings: 11500, cancelled: 350 },
    { name: 'Aug', bookings: 12600, cancelled: 380 },
    { name: 'Sep', bookings: 13400, cancelled: 400 },
    { name: 'Oct', bookings: 14200, cancelled: 420 },
    { name: 'Nov', bookings: 14800, cancelled: 440 },
    { name: 'Dec', bookings: 15200, cancelled: 460 },
  ]

  const categoryData = [
    { name: 'Music Concerts', value: 35, bookings: 12500, revenue: 850000 },
    { name: 'Sports Events', value: 25, bookings: 8900, revenue: 620000 },
    { name: 'Comedy Shows', value: 18, bookings: 6400, revenue: 380000 },
    { name: 'Theater', value: 15, bookings: 5300, revenue: 320000 },
    { name: 'Others', value: 7, bookings: 2500, revenue: 150000 },
  ]

  const COLORS = ['#8b5cf6', '#6366f1', '#a855f7', '#c084fc', '#e9d5ff']

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'revenue', name: 'Revenue' },
    { id: 'bookings', name: 'Bookings' },
    { id: 'categories', name: 'Categories' },
  ]

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col justify-between p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-700 bg-white dark:bg-gray-900"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-medium text-gray-400">{card.title}</h2>
              <div className={`p-2 rounded-full ${card.bg}`}>
                <card.icon className={`${card.color} w-6 h-6`} />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{card.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {card.change} vs last period
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue + Category Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue Line Chart */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Revenue Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#9CA3AF" tickLine={false} />
              <YAxis stroke="#9CA3AF" tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#111827',
                  borderRadius: 8,
                  borderColor: '#374151',
                }}
                itemStyle={{ color: '#F9FAFB' }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 5, fill: '#6366f1' }}
                activeDot={{ r: 7 }}
              />
              <Area type="monotone" dataKey="revenue" stroke="none" fill="url(#lineGradient)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Pie Chart */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Category Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#6366f1"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={{ stroke: '#9CA3AF' }}
              >
                {categoryData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#111827',
                  borderRadius: 8,
                  borderColor: '#374151',
                }}
                itemStyle={{ color: '#F9FAFB' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Events + Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Events */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Top Performing Events
          </h3>
          <ul className="flex-1 overflow-y-auto space-y-4">
            {topEvents.map((event) => (
              <li
                key={event.id}
                className="flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold text-sm">
                    {event.id}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{event.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {event.bookings} bookings • {event.revenue}
                    </p>
                  </div>
                </div>
                <span className="text-green-600 font-medium">{event.growth}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Stats */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Stats</h3>
          <ul className="flex-1 overflow-y-auto space-y-3">
            {quickStats.map((stat, i) => (
              <li
                key={i}
                className="flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition"
              >
                <div className="flex items-center space-x-3">
                  <stat.icon className="text-gray-500 dark:text-gray-400 w-5 h-5" />
                  <span className="text-gray-700 dark:text-gray-200">{stat.label}</span>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">{stat.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

  const renderRevenue = () => (
    <div className="space-y-8">
      {/* Revenue Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Total Revenue',
            value: '$2,890,590',
            change: '+24.5%',
            changeColor: 'text-green-600',
          },
          {
            title: 'Average Ticket Price',
            value: '$67.50',
            change: '+8.2%',
            changeColor: 'text-green-600',
          },
          {
            title: 'Profit Margin',
            value: '25.8%',
            change: '+3.2%',
            changeColor: 'text-green-600',
          },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between"
          >
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              {card.title}
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{card.value}</p>
            <p className={`text-sm mt-1 ${card.changeColor}`}>{card.change} from last period</p>
          </div>
        ))}
      </div>

      {/* Revenue & Profit Analysis Chart */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Revenue & Profit Analysis
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={revenueData}>
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#111827',
                borderRadius: 8,
                borderColor: '#374151',
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue by Category */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Revenue by Category
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData}>
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#111827',
                borderRadius: 8,
                borderColor: '#374151',
              }}
            />
            <Bar dataKey="revenue" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )

  const renderBookings = () => {
    // Preprocess top events for vertical chart
    const topEventsData = topEvents.map((event) => ({
      name: event.name,
      bookings: parseInt(event.bookings.replace(/,/g, '')),
      revenue: parseInt(event.revenue.replace(/[$,]/g, '')),
    }))

    const gradientIdBookings = 'gradientBookings'
    const gradientIdCancelled = 'gradientCancelled'

    return (
      <div className="space-y-8">
        {/* Booking Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Total Bookings',
              value: '42,859',
              change: '+18.2%',
              changeColor: 'text-green-600',
            },
            {
              title: 'Cancellation Rate',
              value: '3.2%',
              change: '+0.4%',
              changeColor: 'text-red-600',
            },
            {
              title: 'Average Bookings per Day',
              value: '142',
              change: '+12.7%',
              changeColor: 'text-green-600',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md flex flex-col justify-between hover:shadow-xl transition"
            >
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                {card.title}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{card.value}</p>
              <p className={`text-sm mt-1 ${card.changeColor}`}>{card.change} from last period</p>
            </div>
          ))}
        </div>

        {/* Booking Trends Chart */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Booking Trends & Cancellations
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={bookingData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id={gradientIdBookings} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id={gradientIdCancelled} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#9CA3AF" tickLine={false} />
              <YAxis stroke="#9CA3AF" tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#111827',
                  borderRadius: 8,
                  borderColor: '#374151',
                }}
                itemStyle={{ color: '#F9FAFB' }}
              />
              <Bar
                dataKey="bookings"
                fill={`url(#${gradientIdBookings})`}
                radius={[6, 6, 0, 0]}
                animationDuration={1500}
              />
              <Bar
                dataKey="cancelled"
                fill={`url(#${gradientIdCancelled})`}
                radius={[6, 6, 0, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Events by Bookings */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Events by Booking Volume
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={topEventsData}
              layout="vertical"
              margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
            >
              <XAxis type="number" stroke="#9CA3AF" tickLine={false} />
              <YAxis type="category" dataKey="name" stroke="#9CA3AF" width={120} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#111827',
                  borderRadius: 8,
                  borderColor: '#374151',
                }}
                itemStyle={{ color: '#F9FAFB' }}
              />
              <Bar
                dataKey="bookings"
                fill="#8b5cf6"
                radius={[0, 6, 6, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  }

  const renderCategories = () => (
    <div className="space-y-8">
      {/* Category Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {categoryData.map((category, index) => (
          <div
            key={category.name}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm text-center"
          >
            <div
              className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
              style={{ backgroundColor: COLORS[index] + '20' }}
            >
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: COLORS[index] }} />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
              {category.value}%
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {category.bookings.toLocaleString()} bookings
            </p>
          </div>
        ))}
      </div>

      {/* Category Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Category Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) => (
                  <text
                    fill="#111827"
                    className="dark:fill-white"
                    style={{ fontSize: 12, fontWeight: 500 }}
                  >
                    {`${name} ${(percent * 100).toFixed(0)}%`}
                  </text>
                )}
              >
                {categoryData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#111827',
                  borderRadius: 8,
                  borderColor: '#374151',
                }}
                itemStyle={{ color: '#F9FAFB' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Category Performance Metrics
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <XAxis
                dataKey="name"
                stroke="#9CA3AF"
                dark:stroke="#9CA3AF"
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#111827',
                  borderRadius: 8,
                  borderColor: '#374151',
                }}
                itemStyle={{ color: '#F9FAFB' }}
              />
              <Bar dataKey="bookings" fill="#6366f1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Details Table */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Category Performance Details
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Category
                </th>
                <th className="text-right py-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Market Share
                </th>
                <th className="text-right py-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Bookings
                </th>
                <th className="text-right py-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Revenue
                </th>
                <th className="text-right py-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Avg. Price
                </th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((category, index) => (
                <tr
                  key={category.name}
                  className="border-b border-gray-100 dark:border-gray-700 last:border-0"
                >
                  <td className="py-3">
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-3"
                        style={{ backgroundColor: COLORS[index] }}
                      />
                      <span className="text-gray-900 dark:text-white">{category.name}</span>
                    </div>
                  </td>
                  <td className="text-right py-3 font-semibold text-gray-900 dark:text-white">
                    {category.value}%
                  </td>
                  <td className="text-right py-3 text-gray-900 dark:text-white">
                    {category.bookings.toLocaleString()}
                  </td>
                  <td className="text-right py-3 text-gray-900 dark:text-white">
                    ${category.revenue.toLocaleString()}
                  </td>
                  <td className="text-right py-3 text-gray-900 dark:text-white">
                    ${Math.round(category.revenue / category.bookings).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Welcome back! Here&apos;s what&apos;s happening with your platform.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'revenue' && renderRevenue()}
        {activeTab === 'bookings' && renderBookings()}
        {activeTab === 'categories' && renderCategories()}
      </div>
    </div>
  )
}
