import React, { useState, useEffect } from 'react'

interface MovieFilterProps {
  genres: string[]
  ratings: number[]
  languages: string[]
  formats?: string[]
  onFilter?: (filters: {
    genres: string[]
    ratings: number[]
    languages: string[]
    formats: string[]
  }) => void
}

const MovieFilter: React.FC<MovieFilterProps> = ({
  genres = [],
  ratings = [],
  languages = [],
  formats = [],
  onFilter,
}) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [selectedFormats, setSelectedFormats] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const toggleSelection = (
    item: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item])

  const clearSelection = (setList: React.Dispatch<React.SetStateAction<string[]>>) => setList([])

  useEffect(() => {
    onFilter?.({
      genres: selectedGenres,
      ratings: selectedRatings.map((r) => parseInt(r)),
      languages: selectedLanguages,
      formats: selectedFormats,
    })
  }, [selectedGenres, selectedRatings, selectedLanguages, selectedFormats, onFilter])

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

  const Divider = () => <div className="w-full border-b border-gray-200 my-2" />

  return (
    <>
      {/* Desktop layout */}
      <div className="hidden md:flex w-full bg-white p-3 rounded-lg border border-gray-200 flex-col gap-3 text-xs">
        <FilterGroup
          title="Genre"
          options={genres}
          selectedList={selectedGenres}
          setSelectedList={setSelectedGenres}
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
          title="Language"
          options={languages}
          selectedList={selectedLanguages}
          setSelectedList={setSelectedLanguages}
        />
        {formats.length > 0 && (
          <>
            <Divider />
            <FilterGroup
              title="Format"
              options={formats}
              selectedList={selectedFormats}
              setSelectedList={setSelectedFormats}
            />
          </>
        )}
      </div>

      {/* Mobile tabs */}
      <div className="md:hidden flex justify-between bg-white border-b border-gray-200 p-2 sticky top-0 z-10">
        {['Genre', 'Rating', 'Language', 'Format'].map((tab) => {
          // Determine if this tab has any selected filters
          const isUsed =
            (tab === 'Genre' && selectedGenres.length > 0) ||
            (tab === 'Rating' && selectedRatings.length > 0) ||
            (tab === 'Language' && selectedLanguages.length > 0) ||
            (tab === 'Format' && selectedFormats.length > 0)

          return (
            ((tab !== 'Format' && true) || formats.length > 0) && (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-center font-medium py-2 border-r last:border-r-0 border-gray-200 ${
                  activeTab === tab || isUsed
                    ? 'text-blue-600 border-blue-600' // Active or used tab is blue
                    : 'text-gray-700 hover:text-blue-500'
                }`}
              >
                {tab}
              </button>
            )
          )
        })}
      </div>

      {/* Mobile popup */}
      {activeTab && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-end z-50 md:hidden">
          <div className="bg-white w-full rounded-t-2xl p-4">
            {/* Header with title and close button */}
            <div className="flex justify-between items-center mb-3">
              <div className="font-medium text-sm">{activeTab}</div>
              <button
                onClick={() => setActiveTab(null)}
                className="text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>

            {activeTab === 'Genre' && (
              <FilterGroup
                title=""
                options={genres}
                selectedList={selectedGenres}
                setSelectedList={setSelectedGenres}
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
            {activeTab === 'Language' && (
              <FilterGroup
                title=""
                options={languages}
                selectedList={selectedLanguages}
                setSelectedList={setSelectedLanguages}
              />
            )}
            {activeTab === 'Format' && formats.length > 0 && (
              <FilterGroup
                title=""
                options={formats}
                selectedList={selectedFormats}
                setSelectedList={setSelectedFormats}
              />
            )}
          </div>
        </div>
      )}

      {/* Browse by Cinema button */}
      <div className="mt-3 md:mt-4">
        <button
          onClick={() => onFilter?.({ genres: [], ratings: [], languages: [], formats: [] })}
          className="w-full bg-white text-black py-2 border border-gray-200 rounded-md font-medium hover:bg-gray-100 transition-colors"
        >
          Browse by Cinema
        </button>
      </div>
    </>
  )
}

export default MovieFilter
