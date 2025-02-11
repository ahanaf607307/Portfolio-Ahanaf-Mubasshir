import React from 'react'
import Aboutme from './Aboutme'
import AllProject from './AllProject'
import Contact from './Contact'
import Hero from './Hero'
import LottieGif from './LottieGif'
import Skils from './Skils'

function Home() {
  return (
    <div className=' relative'>
      <div className=' top-0 z-0 fixed'>
        <LottieGif/>
      </div>
      <div className='backdrop-blur-md'>
      <Hero/>
      <Aboutme/>
      <Skils/>

      <AllProject/>
      <Contact/>
      </div>
    </div>
  )
}

export default Home
