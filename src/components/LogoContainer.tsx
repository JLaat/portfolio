import React from "react";
import html from ".././assets/images/html.png";
import java from ".././assets/images/java.png";
import javascript from ".././assets/images/javascript.png";
import linux from ".././assets/images/linux.png";
import npm from ".././assets/images/npm.png";
import react from ".././assets/images/react.png";
import typescript from ".././assets/images/typescript.png";
import css3 from ".././assets/images/css3.png";
import tailwind from ".././assets/images/tailwind-css.png";
import jest from ".././assets/images/jest.png";

const LogoContainer = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center border-t-2 border-solid xl:mx-[40em] py-7 px-2">
      <img src={html} alt="css" />
      <img src={css3} alt="css" />
      <img src={java} alt="java" />
      <img src={javascript} alt="javascript" />
      <img src={typescript} alt="typescript" />
      <img src={react} alt="react" />
      <img src={linux} alt="linux" />
      <img src={npm} alt="npm" />
      <img src={tailwind} alt="tailwind" />
      <img src={jest} alt="jest" />
    </div>
  );
};

export default LogoContainer;
