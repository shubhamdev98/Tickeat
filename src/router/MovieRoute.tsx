import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'

// Pages
import DisplayAllMovies from '../pages/modules/movie/DisplayAllMovies'

const MovieRoute: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <DisplayAllMovies />
          </Layout>
        }
      />
    </Routes>
  )
}

export default MovieRoute
