import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../../src/assets/icons/banner.png";
function Hero() {
  return (
    <div id="hero" className="flex flex-col items-center w-full  my-10 lg:px-64 mt-24">
      {/* right div */}
      <div className="h-36 mt-10">
        <img
          src={heroImage}
          className=" h-full border-2 border-orange-500 rounded-full"
        />
      </div>
      {/* left div */}
      <div className="leftDiv flex flex-col justify-center items-center text-center mt-5">
        <p className="text-xl font-medium">Hi, I am</p>
        <h1 className="text-3xl font-semibold mt-2">
          <Typewriter
            words={["Ahanaf Mubasshir"]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={120}
            delaySpeed={3000}
          />
        </h1>
        <h1 className="lg:text-6xl  my-4 text-orange-500">
          Frontend Web Developer based in Rangpur,Bangladesh.
        </h1>
        <p className="mt-8 text-md text-white/80 px-4">
          Passionate and creative Web Developer with a keen eye for detail and a
          strong understanding of user experience principles. Dedicated to
          staying up-to-date with the latest web design trends and technologies
          to deliver innovative and effective solutions.
        </p>

        <section className="flex gap-x-3 mt-5">
          <button className="hover:bg-orange-500  hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500 hover:text-white/80 text-orange-600 font-semibold hover:text-white py-2 lg:px-4 px-2 py-2 border  rounded duration-150 flex items-center gap-x-3 ">
            <FaCloudDownloadAlt />
            Download Resume
          </button>
          <Link
            className="border-2 hover:border-orange-500 duration-150 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500  lg:p-3 px-2 py-2 rounded-full text-orange-500 hover:text-white/90"
            target="_blank"
            to="https://github.com/ahanaf607307"
          >
            <FiGithub className="text-2xl" />
          </Link>
          <Link
            className="border-2 hover:border-orange-500 duration-150 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500  lg:p-3 px-2 py-2 rounded-full text-orange-500 hover:text-white/90"
            target="_blank"
            to="https://www.linkedin.com/in/ahanaf-mubasshir-ab1a02333/"
          >
            <CiLinkedin className="text-2xl" />
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Hero;
