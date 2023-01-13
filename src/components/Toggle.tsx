import React from "react";
import Moon from ".././assets/images/moon.png";
import Sun from ".././assets/images/sun.png";
import { useContext } from "react";
import { ThemeContext } from ".././context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div
      className="w-[50px] h-[25px] rounded-full border-[1px] border-solid border-neutral-300 mr-auto flex justify-around items-center "
      onClick={handleClick}
    >
      <img src={Sun} alt="sun" className="w-[15px] h-[15px]" />
      <img src={Moon} alt="moon" className="w-[15px] h-[15px]" />
      <div
        className="w-[25px] h-[25px] rounded-[50%] bg-neutral-300 absolute transition-all duration-500 ease-in-out m-[11px]"
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
