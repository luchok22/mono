import React from "react";
import scss from "./FavoritesCard.module.scss";
import { Link } from "react-router-dom";
const FavoritesCard = ({
  img,
  title,
  tid,
  price,
  handleRemove,
  handleCartClick,
}) => {
  const product = { img, title, tid, price };
  return (
    <Link to={`/news/${tid}`}>
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
          <button onClick={() => handleRemove(tid)}>Удалить</button>
        </div>
      </div>
    </Link>
  );
};

export default FavoritesCard;
