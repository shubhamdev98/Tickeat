import React, { useState } from 'react'

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string, type: string) => void
  fullWidthMobile?: boolean
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  onSearch,
  fullWidthMobile = false,
}) => {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    if (onSearch) onSearch(value, 'event')
  }

  return (
    <div className={`container-default flex ${fullWidthMobile ? 'w-full' : 'w-auto'}`}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className={`
          border border-gray-900 rounded-full px-4 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-gray-400
          w-full sm:w-64 md:w-50 transition-all
        `}
      />
    </div>
  )
}

export default SearchBar
