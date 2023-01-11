import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center gap-5 h-[8vh] bg-blue-600 p-5 sticky top-0 z-[3]">
      <button className="text-white font-poppins text-[1.5em]">About</button>
      <button className="text-white font-poppins text-[1.5em]">Projects</button>
      <button className="text-white font-poppins text-[1.5em]">Contact</button>
    </div>
  );
};

export default NavBar;
