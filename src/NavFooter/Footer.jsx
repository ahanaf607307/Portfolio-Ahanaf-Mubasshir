import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-[#271046] text-neutral-content items-center py-4 px-4 md:px-10">
      <aside className="grid-flow-col items-center">
        <p className="text-lg">
          Ahanaf Mubasshir Rishad © {new Date().getFullYear()} - All right
          reserved
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link
          className="border-2 hover:border-orange-500 duration-150 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500  lg:p-3 px-2 py-2 rounded-full text-orange-500 hover:text-white/90"
          target="_blank"
          to="https://x.com/ahanaf607307"
        >
          <FiTwitter className="text-2xl" />
        </Link>
        <Link
          className="border-2 hover:border-orange-500 duration-150 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500  lg:p-3 px-2 py-2 rounded-full text-orange-500 hover:text-white/90"
          target="_blank"
          to="https://www.linkedin.com/in/ahanaf-mubasshir-ab1a02333/"
        >
          <CiLinkedin className="text-2xl" />
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
