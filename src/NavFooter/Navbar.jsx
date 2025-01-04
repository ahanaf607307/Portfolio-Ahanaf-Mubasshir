import React from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar text-white">
  <div className="navbar-start">
    
    <Link className="btn btn-ghost text-2xl flex items-center text-orange-600 font-logo ">AM</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <Link to='/'>Home</Link> </li>
      <li> <a href='#aboutMe'>About Me</a> </li>
      <li> <a href='#projects'>Projects</a> </li>
      <li> <a href='#skills'>Skills</a> </li>
      <li> <a href='#contact'>Contact</a> </li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="border-2 border-white/80 hover:border-orange-500 px-2 py-2 rounded-2xl flex items-center"><FaCloudDownloadAlt className='mr-2' /> Resume</Link>
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
        className="menu menu-sm dropdown-content bg-orange-600 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute right-5">
       <li> <Link to='/'>Home</Link> </li>
      <li> <a href='#aboutMe'>About Me</a> </li>
      <li> <a href='#projects'>Projects</a> </li>
      <li> <a href='#skills'>Skills</a> </li>
      <li> <a href='#contact'>Contact</a> </li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar
