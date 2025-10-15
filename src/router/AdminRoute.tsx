import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from '../components/admin/layout/AdminLayout'
import ProtectedRoute from './ProtectedRoute'

// Pages
import Dashboard from '../pages/admin/Dashboard'
import Users from '../pages/admin/Users'
import Events from '../pages/admin/Events'
import Venues from '../pages/admin/Venues'
import Login from '../pages/admin/Login'

const AdminRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route
        path="*"
        element={
          <ProtectedRoute redirectTo="/admin/login">
            <AdminLayout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="events" element={<Events />} />
                <Route path="venues" element={<Venues />} />
                <Route path="*" element={<Navigate to="dashboard" />} />
              </Routes>
            </AdminLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default AdminRoute
