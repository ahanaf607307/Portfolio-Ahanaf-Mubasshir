import React from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import resumePdf from '../assets/pdf/ahanaf_resume_junior_mern.pdf'

function Navbar() {
const resumeLink = resumePdf

  const handleDownloadResume = (url) => {
const resumeName = url.split('/').pop()
const aTag = document.createElement('a')
aTag.href = url
aTag.setAttribute('Download' , resumeName)
aTag.click()
aTag.remove()
  }
  return (
    <div className="navbar text-white bg-[#250c44d2] fixed  top-0 backdrop-blur-3xl z-50 py-3 md:px-8">
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
    <button onClick={()=>handleDownloadResume(resumeLink)} target='_blank' className="hover:bg-purple-600  hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-600 hover:text-white/80 text-white/90 font-semibold hover:text-white py-2 lg:px-4 px-2 border  rounded duration-150  items-center gap-x-1 hidden md:flex  "><FaCloudDownloadAlt className='mr-2' /> Resume</button>
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
        className="menu menu-sm dropdown-content bg-purple-950 rounded-box z-[1] mt-3 w-32 p-2 shadow absolute right-1">
     <li> <a href='#hero'>Home</a> </li>
      <li> <a href='#aboutMe'>About Me</a> </li>
      <li> <a href='#projects'>Projects</a> </li>
      <li> <a href='#skills'>Skills</a> </li>
      <li> <a href='#contact'>Contact</a> </li>
      <li><button onClick={()=>handleDownloadResume(resumeLink)} target='_blank'   className="hover:bg-purple-600  hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-600 hover:text-white/80 text-white/90 font-semibold hover:text-white py-2 lg:px-4 px-2 border  rounded duration-150  items-center gap-x-1  "><FaCloudDownloadAlt className='' /> Resume</button></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar
