import React, { useMemo } from "react";
import scss from "./Footer.module.scss";
import ReusableComponents from "../ReusableComponent/ReusableComponent";
import {
  aboutArr,
  contactsArr,
  deliveryArr,
  icons,
  shopArr,
} from "../../constants/footer";
const Footer = () => {
  const renderAbout = useMemo(
    () =>
      aboutArr.map((el) => (
        <div className={scss.desc}>
          <div className={scss.desc__title}>{el.title}</div>
          <div className={scss.desc__description}>
            {el.desc.map((descItem, index) => (
              <a key={index}>{descItem}</a>
            ))}
          </div>
        </div>
      )),
    [aboutArr]
  );
  const renderShop = useMemo(
    () =>
      shopArr.map((el) => (
        <div className={scss.desc}>
          <div className={scss.desc__title}>{el.title}</div>
          <div className={scss.desc__description}>
            {el.desc.map((descItem, index) => (
              <a key={index}>{descItem}</a>
            ))}
          </div>
        </div>
      )),
    [shopArr]
  );
  const renderDelivery = useMemo(
    () =>
      deliveryArr.map((el) => (
        <div className={scss.desc}>
          <div className={scss.desc__title}>{el.title}</div>
          <div className={scss.desc__description}>
            {el.desc.map((descItem, index) => (
              <a key={index}>{descItem}</a>
            ))}
          </div>
        </div>
      )),
    [deliveryArr]
  );
  const renderIcons = useMemo(
    () => icons.map((icon) => <img src={icon} alt="icon" width={20} height={20} />),
    [icons]
  );
  const renderContacts = useMemo(
    () =>
      contactsArr.map((el) => (
        <div className={scss.desc}>
          <div className={scss.desc__title}>{el.title}</div>
          <div className={scss.desc__description}>
            {el.desc.map((descItem, index) => (
              <a key={index}>{descItem}</a>
            ))}
            <div className={scss.desc__icons}>{renderIcons}</div>
          </div>
        </div>
      )),
    [contactsArr]
  );
  return (
    <div className={scss.footer}>
      <div className="container">
        <div className={scss.footer__wrapper}>
          <div className={scss.footer__about}>{renderAbout}</div>
          <div className={scss.footer__shop}>{renderShop}</div>
          <div className={scss.footer__delivery}>{renderDelivery}</div>
          <div className={scss.footer__contact}>{renderContacts}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
