import React from "react";
import herostyle from "../HeroImages/heroimage.module.css";

const Heroimage = ({ children, style }) => {
  return (
    <header className={`${herostyle.main_container} `} style={style}>
      {children}
    </header>
  );
};

export default Heroimage;
