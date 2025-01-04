import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div id='projects' className='px-4 lg:px-0'>
   <h1 className='text-center text-5xl font-bold my-16'>Projects</h1>

      <div className=" items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* card */}
      <div className="relative border bg-aElaven bg-no-repeat h-[500px] bg-cover bg-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
        >
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-4 rounded-lg">
          <Link
            to="https://assignment11-56371.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300"
          >
            Live Link
          </Link>
          <Link
            to="https://github.com/programming-hero-web-course2/b10a11-client-side-ahanaf607307"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300"
          >
            GitHub Link
          </Link>
         
        </div>
      </div>
        {/* card */}
      <div className="relative border bg-aTen bg-no-repeat h-[500px] bg-cover bg-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
        >
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-4 rounded-lg">
          <Link
            to="https://croud-funding-2024.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300"
          >
            Live Link
          </Link>
          <Link
            to="https://github.com/programming-hero-web-course2/b10-a10-client-side-ahanaf607307"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300"
          >
            GitHub Link
          </Link>
         
        </div>
      </div>
        {/* card */}
      <div className="relative border bg-aEight bg-no-repeat h-[500px] bg-cover bg-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
        >
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-4 rounded-lg">
          <Link
            to="https://buy-plus-2024.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300"
          >
            Live Link
          </Link>
          <Link
            to="https://github.com/ahanaf607307/assignment8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300"
          >
            GitHub Link
          </Link>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects
