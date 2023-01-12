import React from "react";
import Moon from ".././assets/images/moon.png";
import Sun from ".././assets/images/sun.png";

const Toggle = () => {
  const handleToggle = () => {};
  return (
    <div className="w-[50px] h-[25px] rounded-[20px] border-[1px] border-solid border-neutral-300 mr-auto flex justify-around items-center">
      <img src={Sun} alt="sun" className="w-[15px] h-[15px]" />
      <img src={Moon} alt="moon" className="w-[15px] h-[15px]" />
      <button className=" m-[10px] w-[25px] h-[25px] bg-neutral-300 rounded-[50%] absolute cursor-pointer left-0"></button>
    </div>
  );
};

export default Toggle;
