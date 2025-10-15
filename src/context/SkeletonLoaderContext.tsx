import React, { createContext, useContext, useState, ReactNode } from 'react'

interface LoaderContextType {
  setLoading: (value: boolean) => void
  loading: boolean
}

const LoaderContext = createContext<LoaderContextType>({
  setLoading: () => {},
  loading: false,
})

export const LoaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false)

  return <LoaderContext.Provider value={{ loading, setLoading }}>{children}</LoaderContext.Provider>
}

export const useLoader = () => useContext(LoaderContext)
