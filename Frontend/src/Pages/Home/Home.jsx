import React from 'react'
import HeroSection from '../../components/HeroSection'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Menu'
import WhoAreWe from '../../components/WhoAreWe'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'
import AboutSection from '../../components/AboutSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation />
      <Footer/>
    </>
  )
}

export default Home