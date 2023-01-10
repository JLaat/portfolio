import React from "react";
import Product from "./Product";
import { data } from "../data";

const ProductList = () => {
  return (
    <div className="px-[50px] py-[100px] flex flex-col items-center text-center">
      <div className="w-[65%]">
        <h1 className="font-poppins text-[50px]">My Little Projects</h1>
        <p>Projects that I've done besides my university studies</p>
      </div>
      <div className="flex flex-wrap justify-between w-[100%]">
        <Product
          img={data[0].img}
          name={data[0].name}
          github={data[0].github}
          live={data[0].live}
        />
        <Product
          img={data[1].img}
          name={data[1].name}
          github={data[1].github}
          live={data[1].live}
        />
        <Product
          img={data[2].img}
          name={data[2].name}
          github={data[2].github}
          live={data[2].live}
        />
        <Product
          img={data[0].img}
          name={data[0].name}
          github={data[0].github}
          live={data[0].live}
        />
        <Product
          img={data[0].img}
          name={data[0].name}
          github={data[0].github}
          live={data[0].live}
        />
        <Product
          img={data[0].img}
          name={data[0].name}
          github={data[0].github}
          live={data[0].live}
        />
      </div>
    </div>
  );
};

export default ProductList;
