import React from "react";
import { BsBoxArrowInDown } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../../src/assets/logo/okey2.png";
import resumePDF from "../assets/pdf/next_mern_stack_ahanaf.pdf";
function Hero() {
  const resumeUrl = resumePDF;
  const handleResumeDownload = (url) => {
    const resumeName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("Download", resumeName);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className=" min-h-[calc(100vh-0px)] bg-hero-Back2 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center ">
      <div id="hero" className="z-30 h-full w-full pb-16 ">
        <div className="max-w-7xl mx-auto p-3 md:p-10 lg:p-0">
          <div className="grid grid-cols-1 lg:grid-cols-12  items-center w-full   pb-10  mt-24 gap-10">
            {/* left div */}
            <div className="leftDiv lg:col-span-8 lg:pr-44">
              <p className="text-2xl font-medium">My self,</p>
              <h1 className="text-4xl md:text-5xl font-semibold mt-4">Ahanaf Mubasshir</h1>
              <h1 className="text-3xl md:text-4xl text-purple-600 font-semibold mt-4 h-12">
                <Typewriter
                  words={[
                    "Junior Fullstack Web Developer",
                    "MERN Stack Web Developer",
                    " Front-End Developer",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>

              <p className="mt-8 md:mt-4 text-xl text-white/80 ">
                Passionate and creative Web Developer with a keen eye for detail
                and a strong understanding of user experience principles.
                Dedicated to staying up-to-date with the latest web design
                trends and technologies to deliver innovative and effective
                solutions.
              </p>

              <section className="flex gap-x-3 pt-10">
                <button
                  onClick={() => handleResumeDownload(resumeUrl)}
                  className="hover:bg-purple-600  hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-600 hover:text-white/80 text-white/90 font-semibold hover:text-white py-2 lg:px-4 px-2 border  rounded duration-150 flex items-center gap-x-3 "
                >
                  <FaCloudDownloadAlt />
                  Download Resume
                </button>
                <Link
                  className="border-2 hover:border-purple-600 duration-150 hover:bg-purple-600 hover:shadow-2xl hover:shadow-purple-600  lg:p-3 px-2 py-2 rounded-full text-purple-600 hover:text-white/90"
                  target="_blank"
                  to="https://github.com/ahanaf607307"
                >
                  <FiGithub className="text-2xl" />
                </Link>
                <Link
                  className="border-2 hover:border-purple-600 duration-150 hover:bg-purple-600 hover:shadow-2xl hover:shadow-purple-600  lg:p-3 px-2 py-2 rounded-full text-purple-600 hover:text-white/90"
                  target="_blank"
                  to="https://www.linkedin.com/in/ahanaf-mubasshir-ab1a02333/"
                >
                  <CiLinkedin className="text-2xl" />
                </Link>
              </section>
            </div>

            {/* right div */}
            <div className="lg:col-span-4  hover:animate-pulse  backdrop-blur-xl bg-blue-950 rounded-2xl ">
              <div className="card-wrapper p-2 flex items-center justify-center">
                <img
                  src={heroImage}
                  alt=""
                  className="h-[400px] z-20 w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden  lg:flex justify-center items-center text-center ">
        <BsBoxArrowInDown className="text-5xl  animate-bounce text-purple-600" />
      </div>
    </div>
  );
}

export default Hero;
