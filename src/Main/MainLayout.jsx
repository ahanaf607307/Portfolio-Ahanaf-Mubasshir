import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../NavFooter/Footer'
import Navbar from '../NavFooter/Navbar'

function MainLayout() {
  return (
    <div className='flex flex-col text-white bg-[#250c44d2]  font-Finlandica '>
      <div>
        <Navbar/>
      </div>
      <div className=' flex-1'>
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MainLayout
