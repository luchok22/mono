import React from "react";
import scss from "./Button.module.scss";
import arrowImg from "../../assets/Button/arrow.svg";

const Button = ({ title, variable, arrow }) => {
  const arrowElement = arrow && <img src={arrowImg} alt="arrow" />;

  return (
    <button className={variable ? scss.btn__dark : scss.btn__light}>
      {title}
      {arrowElement}
    </button>
  );
};

export default Button;
