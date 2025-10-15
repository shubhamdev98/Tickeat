import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PopularEventsDetails from '../pages/modules/event/PopularEventsDetails'
import OrganizerRequestForm from '../pages/modules/event/OrganizerRequestForm'
import DisplayAllPopulerEvents from '../pages/modules/event/DisplayAllPopulerEvents'

const EventRoute: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <DisplayAllPopulerEvents />
          </Layout>
        }
      />
      <Route
        path=":id"
        element={
          <Layout>
            <PopularEventsDetails />
          </Layout>
        }
      />
      <Route
        path="organizer-form"
        element={
          <Layout>
            <OrganizerRequestForm />
          </Layout>
        }
      />
    </Routes>
  )
}

export default EventRoute
