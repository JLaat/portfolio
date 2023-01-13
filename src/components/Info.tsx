import React from "react";
import LogoContainer from "./LogoContainer";

const Info = () => {
  return (
    <div className="infoWrapper flex flex-1 flex-col">
      <div className="infoLeft flex-1 basis-1/2 p-10 h-[75vh]">
        <h2 className="flex-1 text-[4em] font-poppins">Hello 👋</h2>
        <h2 className="flex-1 text-[3.5em] font-poppins">I'm Joni</h2>
        <div className="title h-[50px] overflow-hidden">
          <div className="titleWrapper flex-1">
            <h3 className="titleItem flex-1 flex items-center justify-center text-blue-600 text-[30px] h-[50px]">
              Student
            </h3>
            <h3 className="titleItem flex-1 flex items-center justify-center text-blue-600 text-[30px] h-[50px]">
              Career Changer
            </h3>
            <h3 className="titleItem flex-1 flex items-center justify-center text-blue-600 text-[30px] h-[50px]">
              Future Dev
            </h3>
            <h3 className="titleItem flex-1 flex items-center justify-center text-blue-600 text-[30px] h-[50px]">
              Nice Guy
            </h3>
            <h3 className="titleItem flex-1 flex items-center justify-center text-blue-600 text-[30px] h-[50px]">
              Roofer
            </h3>
          </div>
        </div>
      </div>
      <LogoContainer />
    </div>
  );
};

export default Info;
