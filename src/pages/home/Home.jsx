import React from 'react'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import KeyMetrics from './components/KeyMetrics'
import OurTeam from './ourTeam/OurTeam'
import OurPartners from './ourpartners/OurPartners'

const Home = () => {
  return (
    <div>
    <Hero/>
    <AboutUs/>
    <KeyMetrics/>
    <OurTeam/>
    <OurPartners/>
    </div>
  )
}

export default Home