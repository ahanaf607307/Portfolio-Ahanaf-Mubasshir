import React from "react";
import { SiExpress } from "react-icons/si";
import bootstrap from '../assets/icons/bootstrap.png';
import css from '../assets/icons/css.png';
import html from '../assets/icons/html.png';
import mongodb from '../assets/icons/mongodb.png';
import node from '../assets/icons/node.png';
import react from '../assets/icons/react.png';
import tailwind from '../assets/icons/tailwind.png';



function Skils() {
  return (
    <div className="my-20 w-full md:p-5 lg:p-0" id="skills">
      <h1 className="text-3xl md:text-5xl font-semibold text-center md:text-start">Coding Skills</h1>
      <p className="uppercase font-bold text-orange-500 my-4 text-center md:text-start">Developing on</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-4 justify-center px-4 md:px-0">
        {/* card */}
         <div className=' rounded-xl  border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
        <img src={html} className="h-14" alt="" />
          <p className='text-2xl uppercase '>Html</p>
          <progress className="progress progress-info bg-white   w-full" value="90" max="100"></progress>
          </div>
        {/* card */}
         <div className='  rounded-xl border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
        <img src={css} className="h-14" alt="" />
          <p className='text-2xl uppercase '>css</p>
          <progress className="progress progress-info bg-white   w-full" value="80" max="100"></progress>
          </div>
        {/* card */}
         <div className=' rounded-xl border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
        <img src={bootstrap} className="h-14" alt="" />
          <p className='text-2xl uppercase '>Bootstrap</p>
          <progress className="progress progress-info bg-white   w-full" value="70" max="100"></progress>
          </div>
        {/* card */}
         <div className='rounded-xl border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
        <img src={tailwind} className="h-14" alt="" />
          <p className='text-2xl uppercase '>Tailwind Css</p>
          <progress className="progress progress-info bg-white   w-full" value="85" max="100"></progress>
          </div>
        {/* card */}
         <div className=' rounded-xl  border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
        <img src={node} className="h-14" alt="" />
          <p className='text-2xl uppercase '>Node js</p>
          <progress className="progress progress-info bg-white   w-full" value="60" max="100"></progress>
          </div>
        {/* card */}
         <div className='  rounded-xl border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
        <img src={react} className="h-14" alt="" />
          <p className='text-2xl uppercase '>React Js</p>
          <progress className="progress progress-info bg-white   w-full" value="75" max="100"></progress>
          </div>
        {/* card */}
         <div className='  rounded-xl border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
        <img src={mongodb} className="h-14" alt="" />
          <p className='text-2xl uppercase '>MongoDB</p>
          <progress className="progress progress-info bg-white   w-full" value="70" max="100"></progress>
          </div>
        {/* card */}
         <div className=' rounded-xl  border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
         <SiExpress className="text-5xl text-white" />
          <p className='text-2xl uppercase '>Express Js</p>
          <progress className="progress progress-info bg-white   w-full" value="30" max="100"></progress>
          </div>
      </div>
    </div>
  );
}

export default Skils;
