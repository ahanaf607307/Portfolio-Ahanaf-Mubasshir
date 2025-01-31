import React from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar text-white bg-orange-600 fixed top-0 z-50 py-3 md:px-8">
  <div className="navbar-start">
    
    <Link className="btn btn-ghost text-2xl flex items-center text-white/90 font-logo ">AM</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <a href='#hero'>Home</a> </li>
      <li> <a href='#aboutMe'>About Me</a> </li>
      <li> <a href='#projects'>Projects</a> </li>
      <li> <a href='#skills'>Skills</a> </li>
      <li> <a href='#contact'>Contact</a> </li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='https://drive.google.com/drive/folders/1WNflCcEkJTQ_V_4imMq_XXYsX8D-xkbr?usp=sharing' target='_blank' className="border-2 border-white/80 hover:border-orange-500 px-2 py-2 rounded-2xl hidden md:flex items-center  "><FaCloudDownloadAlt className='mr-2' /> Resume</Link>
    <div className="dropdown relative">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-orange-600 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute right-2">
     <li> <a href='#hero'>Home</a> </li>
      <li> <a href='#aboutMe'>About Me</a> </li>
      <li> <a href='#projects'>Projects</a> </li>
      <li> <a href='#skills'>Skills</a> </li>
      <li> <a href='#contact'>Contact</a> </li>
      <li><Link to='https://drive.google.com/drive/folders/1WNflCcEkJTQ_V_4imMq_XXYsX8D-xkbr?usp=sharing' target='_blank' className="border-2 border-white/80 hover:border-orange-500 px-2 py-2 rounded-2xl flex items-center"><FaCloudDownloadAlt className='mr-2' /> Resume</Link></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar
