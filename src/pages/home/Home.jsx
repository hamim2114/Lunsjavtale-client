import React from 'react'
import Hero from '../../components/home/Hero'
import SoEasy from '../../components/home/SoEasy'
import LogoList from '../../components/home/LogoList'
import WhoAreYou from '../../components/home/WhoAreYou'

const Home = () => {
  return (
    <div>
      <Hero/>
      <SoEasy/>
      <LogoList/>
      <WhoAreYou/>
    </div>
  )
}

export default Home