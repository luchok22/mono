import React, { useMemo, useState } from "react";
import scss from "./Header.module.scss";
import { headerLinks } from "../../constants/header";
import { Link } from "react-router-dom";
import cart from "../../assets/Header/cart.svg";
import favorites from "../../assets/Header/favorites.svg";
import menu from "../../assets/Header/menu.svg";
import { icons } from "../../constants/footer";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsBackdropVisible(!isBackdropVisible); // Переключение видимости заднего фона
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsBackdropVisible(false);
  };

  const renderLinks = useMemo(
    () => headerLinks.map((link, index) => <Link key={index} to={link.path}>{link.link}</Link>),
    []
  );
  const renderBurgerLinks = useMemo(
    () => headerLinks.map((link, index) => <Link key={index} to={link.path}>{link.link}</Link>),
    []
  );
  const renderIcons = useMemo(
    () => icons.map((icon, index) =><img src={icon} key={index} alt="icon" width={20} height={20} />),
    []
  );
  return (
    <div className={scss.header}>
      <div className="container">
        <div className={scss.header__wrapper}>
          <div className={scss.header__logo}>
            <Link to={"/"}>
              <h1>Mono</h1>
            </Link>
          </div>
          <div className={scss.header__links}>{renderLinks}</div>
          <div className={scss.header__items}>
            <Link to={"/cart"}>
              <img src={cart} alt="cart" />
            </Link>
            <Link to={"/favorites"}>
              <img src={favorites} alt="favorites" />
            </Link>
            <div className={scss.burger__menu}>
              <img
                src={menu}
                alt="menu"
                width={32}
                height={32}
                onClick={toggleMenu}
              />
              <div
                className={`${scss.backdrop} ${
                  isBackdropVisible ? scss.visible : ""
                }`}
                onClick={closeMenu}
              ></div>
              <div
                className={`${scss.menuWrapper} ${
                  isMenuOpen ? scss.menuOpen : ""
                }`}
              >
                {renderBurgerLinks}
                <div className={scss.burger__icons}>
                {renderIcons}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
