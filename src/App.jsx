import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Dashboard from './pages/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'

const App = () => {


  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>

      </div>
      <Footer />
    </>

  )
}

export default App

