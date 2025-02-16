import React from 'react'
import Aboutme from './Aboutme'
import AllProject from './AllProject'
import Contact from './Contact'
import Hero from './Hero'
import Skils from './Skils'

function Home() {
  return (
    <div className='  '>
     
      <div >
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
