import React from "react";
import Product from "./Product";
import { data } from "../data";

const ProductList = () => {
  return (
    <div className="px-[50px] py-[100px] flex flex-col items-center text-center">
      <div className="w-[65%] p-10 flex flex-col justify-center items-center">
        <h1 className="font-poppins text-[50px]">Projects</h1>
      </div>
      <div className="flex flex-wrap justify-around w-[100%]">
        <Product
          img={data[5].img}
          name={data[5].name}
          github={data[5].github}
          live={data[5].live}
        />
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
          img={data[3].img}
          name={data[3].name}
          github={data[3].github}
          live={data[3].live}
        />
        <Product
          img={data[4].img}
          name={data[4].name}
          github={data[4].github}
          live={data[4].live}
        />
      </div>
    </div>
  );
};

export default ProductList;
