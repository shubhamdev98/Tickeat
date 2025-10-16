import React, { useState, useEffect } from 'react'

interface EventFilterProps {
  categories: string[]
  ratings: number[]
  locations: string[]
  dates?: string[]
  onFilter?: (filters: {
    categories: string[]
    ratings: number[]
    locations: string[]
    dates: string[]
  }) => void
}

const PopulerEventFilter: React.FC<EventFilterProps> = ({
  categories = [],
  ratings = [],
  locations = [],
  onFilter,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedDates] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState<string | null>(null) // mobile popup state

  const toggleSelection = (
    item: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item])
  }

  const clearSelection = (setList: React.Dispatch<React.SetStateAction<string[]>>) => setList([])

  useEffect(() => {
    if (onFilter) {
      onFilter({
        categories: selectedCategories,
        ratings: selectedRatings.map((r) => parseInt(r)),
        locations: selectedLocations,
        dates: selectedDates,
      })
    }
  }, [selectedCategories, selectedRatings, selectedLocations, selectedDates, onFilter])

  const FilterGroup = ({
    title,
    options,
    selectedList,
    setSelectedList,
  }: {
    title: string
    options: string[]
    selectedList: string[]
    setSelectedList: React.Dispatch<React.SetStateAction<string[]>>
  }) => (
    <div className="flex flex-col gap-2 text-sm">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-gray-700">{title}</span>
        {selectedList.length > 0 && (
          <button
            onClick={() => clearSelection(setSelectedList)}
            className="text-blue-500 text-xs hover:underline"
          >
            Clear
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((item) => (
          <button
            key={item}
            onClick={() => toggleSelection(item, selectedList, setSelectedList)}
            className={`px-2 py-1 rounded-md border text-xs transition-all ${
              selectedList.includes(item)
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )

  // Divider component
  const Divider = () => <div className="w-full border-b border-gray-200 my-2"></div>

  return (
    <>
      {/* Desktop Filter View */}
      <div className="hidden md:flex w-full bg-white p-3 rounded-lg border border-gray-200 flex-col gap-3 text-xs">
        <FilterGroup
          title="Category"
          options={categories}
          selectedList={selectedCategories}
          setSelectedList={setSelectedCategories}
        />
        <Divider />
        <FilterGroup
          title="Rating"
          options={ratings.map((r) => `${r}+`)}
          selectedList={selectedRatings}
          setSelectedList={setSelectedRatings}
        />
        <Divider />
        <FilterGroup
          title="Location"
          options={locations}
          selectedList={selectedLocations}
          setSelectedList={setSelectedLocations}
        />
      </div>

      {/* Mobile Filter Tabs */}
      <div className="md:hidden flex justify-between bg-white rounded-2xl border-b border-gray-200 p-2 sticky top-0 z-10">
        {['Category', 'Rating', 'Location'].map((tab) => {
          const isUsed =
            (tab === 'Category' && selectedCategories.length > 0) ||
            (tab === 'Rating' && selectedRatings.length > 0) ||
            (tab === 'Location' && selectedLocations.length > 0)

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-center font-medium py-2 border-r last:border-r-0 border-gray-200 ${
                activeTab === tab || isUsed
                  ? 'text-blue-600 border-blue-600 '
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              {tab}
            </button>
          )
        })}
      </div>

      {/* Mobile Popup Modal */}
      {activeTab && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-end z-50 md:hidden">
          <div className="bg-white w-full rounded-t-2xl p-4">
            {/* Header with title and close button */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-semibold">{activeTab}</h2>
              <button
                onClick={() => setActiveTab(null)}
                className="text-gray-600 hover:text-gray-900 text-xl"
              >
                ✕
              </button>
            </div>

            {activeTab === 'Category' && (
              <FilterGroup
                title=""
                options={categories}
                selectedList={selectedCategories}
                setSelectedList={setSelectedCategories}
              />
            )}

            {activeTab === 'Rating' && (
              <FilterGroup
                title=""
                options={ratings.map((r) => `${r}+`)}
                selectedList={selectedRatings}
                setSelectedList={setSelectedRatings}
              />
            )}

            {activeTab === 'Location' && (
              <FilterGroup
                title=""
                options={locations}
                selectedList={selectedLocations}
                setSelectedList={setSelectedLocations}
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default PopulerEventFilter
