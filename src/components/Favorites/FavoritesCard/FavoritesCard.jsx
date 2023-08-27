import React from "react";
import scss from "./FavoritesCard.module.scss";
const FavoritesCard = ({ img, title, id, price, handleRemove, handleCartClick }) => {
  const product = {img, title, id, price}
  return (
    <div className={scss.card}>
      <div className={scss.card__desc}>
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <div className={scss.desc__aq}>
          <p>{price}$</p>
        </div>
      </div>
      <div className={scss.card__btn}>
        <button onClick={() => handleCartClick(product)}>В корзину</button>
        <button onClick={() => handleRemove(id)}>Удалить</button>
      </div>
    </div>
  );
};

export default FavoritesCard;
