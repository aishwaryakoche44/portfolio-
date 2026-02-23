import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home  from './components/Home'
import Profile from './components/Profile'
import Education from './components/Education'
import Skills from './components/Skills'
import Courses from './components/Courses'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import AnimatedBackground from './components/AnimatedBackground'
const App = () => {
  return (
    <div className="dark bg-gray-900 min-h-screen text-gray-100">
      <AnimatedBackground/>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Certificates' element={<Certificates />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

