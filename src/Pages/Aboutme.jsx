import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
function Aboutme() {
  return (
    <section
    id="aboutMe"
    className="relative z-30 max-w-7xl mx-auto px-5 lg:px-10 py-16"
  >
    {/* Title Section */}
    <p className="text-center text-xl font-semibold text-gray-300 uppercase tracking-wider py-4">
      Introduction
    </p>
    <h1 className="text-center text-4xl md:text-5xl font-bold text-white mb-12">
      About Me
    </h1>

    {/* Content Wrapper */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* About Text */}
      <div className="md:col-span-7 bg-white/10 backdrop-blur-md shadow-xl rounded-xl p-6 lg:p-8 border border-gray-700">
        <p className="text-lg font-light md:text-sm lg:text-xl text-gray-300 leading-relaxed">
          I discovered web development through late-night coding tutorials and
          instantly fell in love with the process of building and creating.
          For me, programming is like solving puzzles—it’s challenging, fun,
          and incredibly rewarding when everything clicks into place.
        </p>
      </div>

      {/* Education Card */}
      <div className="md:col-span-5 flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md shadow-xl rounded-xl p-6 lg:p-8 border border-gray-700">
        <FaBookOpenReader className="text-4xl text-yellow-300" />
        <h2 className="text-2xl font-bold text-white">Education</h2>
        <p className="text-md text-gray-300 text-center">
          Diploma in Computer Science & Technology  
          <br />
          <span className="text-gray-400 text-sm">
            Rangpur Polytechnic Institute (2022 - 2025)
          </span>
        </p>
      </div>
    </div>

    {/* Additional Education Details */}
    <div className="mt-10 bg-white/10 backdrop-blur-md shadow-xl rounded-xl p-6 lg:p-8 border border-gray-700">
      <p className="text-lg md:text-sm lg:text-xl text-gray-300 leading-relaxed">
        I am currently pursuing a Diploma in Computer Science and Technology
        at Rangpur Polytechnic Institute. Since 2022, I have been diving deep
        into various aspects of computer science, including coding, database
        management, and system analysis.  
        <br />
        <br />
        By 2025, I aim to graduate with the skills and knowledge required to
        contribute meaningfully to the tech industry and achieve my dream of
        becoming a professional developer.
      </p>
    </div>
  </section>
  );
}

export default Aboutme;
