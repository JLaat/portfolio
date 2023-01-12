import React from "react";
import Toggle from "./Toggle";

const NavBar = () => {
  return (
    <div className="flex items-center p-3 gap-2 h-[8vh] bg-blue-600 sticky top-0 z-[3] md:justify-end justify-center">
      <Toggle />
      <button className="p-3 md:px-10 text-white font-poppins text-[.9em] md:text-[2em] hover:bg-opacity-5 hover:bg-white">
        About
      </button>
      <button className="p-5  md:px-10 text-white font-poppins text-[.9em] md:text-[2em] hover:bg-opacity-5 hover:bg-white">
        Projects
      </button>
      <button className="p-5 md:px-10 text-white font-poppins text-[.9em] md:text-[2em] hover:bg-opacity-5 hover:bg-white">
        Contact
      </button>
    </div>
  );
};

export default NavBar;
