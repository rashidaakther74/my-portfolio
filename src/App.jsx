import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { Outlet } from 'react-router'
import Skills from './components/home/Skills'
import AboutRead from './components/about/AboutRead'

const App = () => {
  return (
    <div className="bg-[#0b0f1a] min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
