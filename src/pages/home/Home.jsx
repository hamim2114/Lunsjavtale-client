import React from 'react'
import Hero from '../../components/home/Hero'
import SoEasy from '../../components/home/SoEasy'
import LogoList from '../../components/home/LogoList'
import WhoAreYou from '../../components/home/WhoAreYou'
import LogoSlide from '../../components/home/LogoSlide'
import CategoryTab from '../../components/home/CategoryTab'

const Home = () => {
  return (
    <div>
      <Hero/>
      <SoEasy/>
      <LogoList/>
      <WhoAreYou/>
      <LogoSlide/>
      <CategoryTab/>
    </div>
  )
}

export default Home