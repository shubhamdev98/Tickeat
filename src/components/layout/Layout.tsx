// src/components/common/Layout.tsx
import React from 'react'
import NavBar from '../common/NavBar'
import Footer from '../common/Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <NavBar />

      {/* Push content below navbar */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout
