import React from 'react'
import Aboutme from './Aboutme'
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Projects'
import Skils from './Skils'

function Home() {
  return (
    <div>
      <Hero/>
      <Aboutme/>
      <Skils/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
