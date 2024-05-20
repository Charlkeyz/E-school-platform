/* eslint-disable react/prop-types */
import React from "react";
import ButtonStyles from "../ButtonComponent/ButtonStyles.module.css";
const Button = ({ children, style, className }) => {
  return (
    <div>
      <button className={`${ButtonStyles.mybutton} ${className}`} style={style}>
        {children}
      </button>
    </div>
  );
};

export default Button;
