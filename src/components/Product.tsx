import React from "react";
import { data } from "../data";

const Product = (props: {
  img: string;
  name: string;
  github: string;
  live: string;
}) => {
  return (
    <div className="project w-[60%] h-[30vh] md:w-[30%] lg:w-[30%] md:h-[40vh] lg:h-[40vh] xl:h-[40vh] mx-[20px] my-[10px] border-neutral-200 border-solid border-2 rounded-t-lg overflow-hidden">
      <div className="browser-circles h-[20px] bg-neutral-200 flex items-center sticky z-[2]">
        <div className="circle w-[6px] h-[6px] bg-white rounded-[50%] m-1"></div>
        <div className="circle w-[6px] h-[6px] bg-white rounded-[50%] m-1"></div>
        <div className="circle w-[6px] h-[6px] bg-white rounded-[50%] m-1"></div>
      </div>
      <a href={data[0].github} target="_blank">
        <img
          src={props.img}
          alt="projectImage"
          className="projectImage w-[100%]"
        />
      </a>
    </div>
  );
};

export default Product;
