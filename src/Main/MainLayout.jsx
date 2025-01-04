import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../NavFooter/Footer'
import Navbar from '../NavFooter/Navbar'

function MainLayout() {
  return (
    <div className='flex flex-col text-white font-Finlandica'>
      <div>
        <Navbar/>
      </div>
      <div className='max-w-7xl mx-auto flex-1'>
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MainLayout
