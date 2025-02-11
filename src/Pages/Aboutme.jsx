import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import aboutImage from "../../src/assets/logo/okey2.png";
function Aboutme() {
  return (
    <div className="lg:px-10  relative z-30 max-w-7xl mx-auto" id="aboutMe">
      <p className="text-center text-xl font-semibold my-5">Introduction</p>
      <h1 className="text-center text-4xl font-bold mb-16">About me</h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-10">
        <div className="h-72 w-full md:h-80 lg:h-96 md:col-span-4 px-5 md:px-0">
          <img src={aboutImage} alt="" className="h-full w-full  rounded-2xl" />
        </div>

        {/* right */}
        <div className="md:col-span-8">
          <p className="text-lg font-light md:text-sm lg:text-xl text-white/90 px-1 lg:px-5 md:px-0">
            I discovered web development through late-night coding tutorials and
            instantly fell in love with the process of building and creating.
            For me, programming is like solving puzzles—it’s challenging, fun,
            and incredibly rewarding when everything clicks into place.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 md:gap-x-5 gap-y-5 md:gap-y-0">
            <div className="card md:col-span-4 w-full border-2 border-gray-500 p-3  md:p-4 lg:p-6 flex flex-col gap-y-5 md:gap-y-2 lg:gap-y-5">
              <FaBookOpenReader className="text-3xl mb-2" />
              <p className="text-2xl">Education</p>
              <p className="text-md text-white/80">
                Diploma in Computer Science & Techonology
              </p>
            </div>
            {/* about education */}
            <div className="md:col-span-8">
              <p className="px-3 md:px-0  md:text-sm  lg:text-xl">
                I am currently pursuing a Diploma in Computer Science and
                Technology at Rangpur Polytechnic Institute, which I started in
                late 2022 and will complete in 2025. Throughout the course, I
                have explored various aspects of computer science, including
                coding, database management, and system analysis. By 2025, I aim
                to graduate with the skills and knowledge required to contribute
                meaningfully to the tech industry and achieve my dream of
                becoming a professional developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
