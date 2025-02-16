import React from "react";
import { SiExpress } from "react-icons/si";
import bootstrap from "../assets/icons/bootstrap.png";
import figma from "../assets/icons/figma.svg";
import firebase from "../assets/icons/firebase.svg";
import git from "../assets/icons/git.svg";
import mongodb from "../assets/icons/mongodb.png";
import nextjs from "../assets/icons/nextjs2.png";
import node from "../assets/icons/node.png";
import react from "../assets/icons/react.png";
import tailwind from "../assets/icons/tailwind.png";

function Skils() {
  return (
    <div
      className="my-20 w-full md:p-5 lg:p-0 max-w-7xl mx-auto relative z-30 flex flex-col justify-center items-center"
      id="skills"
    >
      <h1 className="text-3xl md:text-5xl font-semibold text-center md:text-start mb-20">
        Development Skill
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-10 justify-center px-4 md:px-0  items-center ">
        {/* card */}
        <div className="rounded-xl h-32 w-32 hover:scale-105 duration-200 cursor-pointer bg-[#250c44d2] ">
         <div className="p-1 h-full w-full  card-wrapper">
         <div className=" sticky z-30 bg-[#250c44d2]  h-full w-full rounded-xl flex flex-col justify-center items-center">
            <img src={react} className="h-14 z-10" alt="" />
            <p className="text-xl mt-2 uppercase">React Js</p>
          </div>
         </div>
        </div>

        {/* card */}
        <div className="rounded-xl h-32 w-32 bg-[#250c44d2] ">
         <div className="p-1 h-full w-full  card-wrapper">
         <div className=" sticky z-30 bg-[#250c44d2]  h-full w-full rounded-xl flex flex-col justify-center items-center">
         <img src={nextjs} className="h-14 text-white" alt="" />
         <p className="text-xl mt-2 uppercase">NEXT Js</p>
          </div>
         </div>
        </div>
      
        {/* card */}
        <div className="rounded-xl h-32 w-32 bg-[#250c44d2] ">
         <div className="p-1 h-full w-full  card-wrapper">
         <div className=" sticky z-30 bg-[#250c44d2]  h-full w-full rounded-xl flex flex-col justify-center items-center">
         <img src={bootstrap} className="h-14" alt="" />
          <p className="text-xl mt-2 uppercase">Bootstrap</p>
          </div>
         </div>
        </div>
        
        {/* card */}
        <div className="rounded-xl h-32 w-32 bg-[#250c44d2] ">
         <div className="p-1 h-full w-full  card-wrapper">
         <div className=" sticky z-30 bg-[#250c44d2]  h-full w-full rounded-xl flex flex-col justify-center items-center">
         <img src={tailwind} className="h-14" alt="" />
         <p className="text-md mt-2 uppercase">Tailwind Css</p>
          </div>
         </div>
        </div>
        
        {/* card */}
        <div className="rounded-xl h-32 w-32 bg-[#250c44d2] ">
         <div className="p-1 h-full w-full  card-wrapper">
         <div className=" sticky z-30 bg-[#250c44d2]  h-full w-full rounded-xl flex flex-col justify-center items-center">
         <img src={node} className="h-14" alt="" />
         <p className="text-xl mt-2 uppercase">Node js</p>
          </div>
         </div>
        </div>

        {/* card */}
        <div className="rounded-xl h-32 w-32 bg-[#250c44d2] ">
         <div className="p-1 h-full w-full  card-wrapper">
         <div className=" sticky z-30 bg-[#250c44d2]  h-full w-full rounded-xl flex flex-col justify-center items-center">
         <img src={mongodb} className="h-14" alt="" />
          <p className="text-xl mt-2 uppercase">MongoDB</p>
          </div>
         </div>
        </div>
       
        {/* card */}
        <div className="rounded-xl h-32 w-32 bg-[#250c44d2] ">
         <div className="p-1 h-full w-full  card-wrapper">
         <div className=" sticky z-30 bg-[#250c44d2]  h-full w-full rounded-xl flex flex-col justify-center items-center">
         <SiExpress className="text-5xl text-white" />
         <p className="text-xl mt-2 uppercase">Express Js</p>
          </div>
         </div>
        </div>


        {/* card */}
        <div className="rounded-xl h-32 w-32 bg-[#250c44d2] ">
         <div className="p-1 h-full w-full  card-wrapper">
         <div className=" sticky z-30 bg-[#250c44d2]  h-full w-full rounded-xl flex flex-col justify-center items-center">
        <img src={figma} className="h-14" alt="" />
         <p className="text-xl mt-2 uppercase">Figma</p>
          </div>
         </div>
        </div>
        {/* card */}
        <div className="rounded-xl h-32 w-32 bg-[#250c44d2] ">
         <div className="p-1 h-full w-full  card-wrapper">
         <div className=" sticky z-30 bg-[#250c44d2]  h-full w-full rounded-xl flex flex-col justify-center items-center">
         <img src={git} className="h-14" alt="" />
         <p className="text-xl mt-2 uppercase">Git</p>
          </div>
         </div>
        </div>
        {/* card */}
        <div className="rounded-xl h-32 w-32 bg-[#250c44d2] ">
         <div className="p-1 h-full w-full  card-wrapper">
         <div className=" sticky z-30 bg-[#250c44d2]  h-full w-full rounded-xl flex flex-col justify-center items-center">
         <img src={firebase} className="h-14" alt="" />
         <p className="text-xl mt-2 uppercase">Firebase</p>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Skils;
