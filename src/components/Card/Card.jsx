import React from "react";
import scss from "./Card.module.scss";
const Card = ({ img, title, price, id, handleFavoriteClick }) => {
  const product = { img, title, price, id };
  return (
    <div className={scss.card}>
      <div className={scss.card__desc}>
        <img src={img} alt={title} width={328} height={338} />
        <h1>{title}</h1>
        <p>{price}$</p>
      </div>
      <div className={scss.card__btn}>
        <button onClick={() => handleFavoriteClick(product)}>Избранное</button>
      </div>
    </div>
  );
};

export default Card;
