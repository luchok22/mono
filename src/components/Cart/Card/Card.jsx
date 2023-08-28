import React from "react";
import scss from "./Card.module.scss";
import { Link } from "react-router-dom";
const Card = ({ img, title, id, price, quantity, handleRemove, handleCartClick }) => {
  const product = { img, title, id, price };
  return (
    <div className={scss.card}>
      <Link to={`/card/${id}`}>
        <div className={scss.card__desc}>
          <img src={img} alt={title} />
          <h1>{title}</h1>
          <div className={scss.desc__aq}>
            <p>{price}$</p>
            {quantity && <p>x{quantity}</p>}
          </div>
        </div>
      </Link>
      <div className={scss.card__btn}>
      <button onClick={() => handleCartClick(product)}>Добавить</button>
        <button onClick={() => handleRemove(product)}>Удалить</button>
      </div>
    </div>
  );
};

export default Card;
