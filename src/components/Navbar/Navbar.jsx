import React from "react";
import scss from "./Navbar.module.scss";
const Navbar = ({ links, onLinkClick }) => {
  return (
    <div className={scss.navbar}>
      <div className={scss.navbar__wrapper}>
        {links.map((link) => (
          <div className={scss.navbar__link} onClick={() => onLinkClick(link.type)}>
            <img src={link.img} alt={link} width={100} height={100} />
            <p>{link.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
