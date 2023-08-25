import React, { useMemo } from "react";
import scss from "./Header.module.scss";
import { headerLinks } from "../../constants/header";
import { Link } from "react-router-dom";
import cart from "../../assets/Header/cart.svg";
import favorites from "../../assets/Header/favorites.svg";

const Header = () => {
  const renderLinks = useMemo(
    () => headerLinks.map((link) => <Link to={link.path}>{link.link}</Link>),
    [headerLinks]
  );
  return (
    <div className={scss.header}>
      <div className="container">
        <div className={scss.header__wrapper}>
          <div className={scss.header__logo}>
            <h1>Mono</h1>
          </div>
          <div className={scss.header__links}>{renderLinks}</div>
          <div className={scss.header__items}>
            <img src={cart} alt="cart" />
            <img src={favorites} alt="favorites" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
