import React from "react";
import scss from "./Button.module.scss";
import arrowImg from "../../assets/Button/arrow.svg";

const Button = ({ title, variable, arrow, onClick, product }) => {
  const arrowElement = arrow && <img src={arrowImg} alt="arrow" />;

  return (
    <button className={variable ? scss.btn__dark : scss.btn__light} onClick={() => onClick(product)}>
      {title}
      {arrowElement}
    </button>
  );
};

export default Button;
