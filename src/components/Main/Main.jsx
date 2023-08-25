import React from "react";
import scss from "./Main.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className={scss.main}>
      <div className="container">
        <div className={scss.main__wrapper}>
          <div className={scss.main__text}>
            <h1>
              Стильная мебель для <br /> вашего дома
            </h1>
            <div className={scss.line}></div>
            <p>
              Mono - компания специализирующаяся на продаже <br />
              высококачественной мебели. Где вы можете самостоятельно <br />
              распологать мебель в различных стилях интерьера.
            </p>
          </div>
          <div className={scss.main__btns}>
            <Link to={'/catalog'}>
            <Button title={"В каталог"}  />
            </Link>
            <a href="#contact">
            <Button title={"Оставить заявку"} variable={true} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
