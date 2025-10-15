import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import EventRoute from './EventRoute'
import AdminRoute from './AdminRoute'
import MovieRoute from './MovieRoute'
import Home from './HomeRoute'

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* User routes */}
        {/* <Route path="/event/*" element={<EventRoute/>}></Route> */}
        <Route path="/popular/events/*" element={<EventRoute />} />
        <Route path="/movies/*" element={<MovieRoute />} />

        {/* Admin routes */}
        <Route path="/admin/*" element={<AdminRoute />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
