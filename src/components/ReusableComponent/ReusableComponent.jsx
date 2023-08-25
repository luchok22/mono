import React from "react";
import scss from "./ReusableComponent.module.scss";
const ReusableComponents = ({ title, line, children }) => {
    const lineElement = line && <div className={scss.line}></div>
    return (
    <div className={scss.wrapper}>
      <div className="container">
        <div className={scss.wrapper__title}>
        <h1>{title}</h1>
        {lineElement}
        </div>
        <div className={scss.wrapper__content}>{children}</div>
      </div>
    </div>
  );
};

export default ReusableComponents;
