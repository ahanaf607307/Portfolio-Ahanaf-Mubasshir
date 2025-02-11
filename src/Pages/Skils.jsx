import React from "react";
import { SiExpress } from "react-icons/si";
import bootstrap from '../assets/icons/bootstrap.png';
import mongodb from '../assets/icons/mongodb.png';
import nextjs from '../assets/icons/nextjs2.png';
import node from '../assets/icons/node.png';
import react from '../assets/icons/react.png';
import tailwind from '../assets/icons/tailwind.png';



function Skils() {
  return (
    <div className="my-20 w-full md:p-5 lg:p-0 max-w-7xl mx-auto relative z-30" id="skills">
      <h1 className="text-3xl md:text-5xl font-semibold text-center md:text-start">Coding Skills</h1>
      <p className="uppercase py-3 font-bold text-orange-500 my-4 text-center md:text-start">Developing on</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-4 justify-center px-4 md:px-0">
        
       
        {/* card */}
         <div className=' rounded-xl border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
        <img src={bootstrap} className="h-14" alt="" />
          <p className='text-2xl uppercase py-3 '>Bootstrap</p>
          
          </div>
        {/* card */}
         <div className='rounded-xl border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
        <img src={tailwind} className="h-14" alt="" />
          <p className='text-2xl uppercase py-3 '>Tailwind Css</p>
          
          </div>
        {/* card */}
         <div className=' rounded-xl  border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
        <img src={node} className="h-14" alt="" />
          <p className='text-2xl uppercase py-3 '>Node js</p>
          
          </div>
        {/* card */}
         <div className='  rounded-xl border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
        <img src={react} className="h-14" alt="" />
          <p className='text-2xl uppercase py-3 '>React Js</p>
          
          </div>
        {/* card */}
         <div className='  rounded-xl border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
        <img src={nextjs} className="h-14 text-white" alt="" />
          <p className='text-2xl uppercase py-3 '>NEXT Js</p>
          
          </div>
        {/* card */}
         <div className='  rounded-xl border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
        <img src={mongodb} className="h-14" alt="" />
          <p className='text-2xl uppercase py-3 '>MongoDB</p>
          
          </div>
        {/* card */}
         <div className=' rounded-xl  border-2 border-gray-500 p-4 flex flex-col justify-center items-center gap-y-5'>
         <SiExpress className="text-5xl text-white" />
          <p className='text-2xl uppercase py-3 '>Express Js</p>
          
          </div>
      </div>
    </div>
  );
}

export default Skils;
