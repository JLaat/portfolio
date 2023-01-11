import React from "react";
import github from ".././assets/images/github.png";
import linkedin from ".././assets/images/linkedin.png";

const Socials = () => {
  return (
    <div className="flex justify-center items-center">
      <a href="https://github.com/JLaat">
        <img src={github} alt="githubi" />
      </a>
      <a href="https://www.linkedin.com/in/joni-laatikainen-a5061a221/">
        <img src={linkedin} alt="linkedin" />
      </a>
    </div>
  );
};

export default Socials;
