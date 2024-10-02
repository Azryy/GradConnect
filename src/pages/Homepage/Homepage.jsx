import React from 'react'
import './Homepage.css'
import Header from '../../components/Header/Header'
import ExploreHome from '../../components/ExploreHome/ExploreHome'
import Features from '../../components/Features/Features'
const Homepage = () => {
  return (
    <div>
      <Header/>
      <ExploreHome/>
      <Features/>
    </div>
  )
}

export default Homepage
