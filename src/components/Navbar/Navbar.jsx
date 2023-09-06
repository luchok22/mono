import React, { useState } from "react";
import scss from "./Navbar.module.scss";

const Navbar = ({ links, selectedType, onLinkClick, onResetClick }) => {
  const [showLinks, setShowLinks] = useState(false);
  const handleShow = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className={scss.navbar}>
      <div className={scss.navbar__wrapper}>
        {links.map((link) => (
          <div
            key={link.type}
            className={`${scss.navbar__link} ${
              selectedType === link.type ? scss.active : ""
            }`}
            onClick={() => onLinkClick(link.type)}
          >
            <img src={link.img} alt={link.title} width={100} height={100} />
            <p>{link.title}</p>
          </div>
        ))}
        <button onClick={onResetClick}>Сбросить</button>
      </div>
      <div className={scss.navbar__adaptive}>
        <button onClick={handleShow}>Посмотреть</button>
        <div className={scss.adaptive__links}>
          {showLinks &&
            links.map((link) => (
              <div
                className={scss.navbar__link}
                onClick={() => onLinkClick(link.type)}
              >
                <p>{link.title}</p>
              </div>
            ))}
          <button onClick={onResetClick}>Сбросить</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
