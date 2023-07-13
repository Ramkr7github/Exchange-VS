import React from 'react'

import Exch from "./Exch"
import ImageSlider from './ImageSlider'
import Services from './Services'
import Payment from './Payment'
import Trusted from './Trusted'

const Home = () => {
  return (
    <div>
      
      <Exch />
      <ImageSlider />
      <Services />
      <Payment />
      <Trusted />
      
    </div>
  )
}

export default Home
