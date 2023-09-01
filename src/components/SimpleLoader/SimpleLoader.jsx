import React from "react";
import css from "./SimpleLoader.module.css";
import { useEffect } from "react";

const SimpleLoader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className={css.loader__container}>
      <div class={css.loader}></div>
    </div>
  );
};

export default SimpleLoader;