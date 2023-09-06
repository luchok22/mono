import React from "react";
import scss from "./Card.module.scss";
import { Link } from "react-router-dom";
const Card = ({ img, title, price, tid, handleFavoriteClick }) => {
  const product = { img, title, price, tid };
  return (
    <div className={scss.card}>
      <Link to={`/news/${tid}`}>
        <div className={scss.card__desc}>
          <img src={img} alt={title} width={328} height={338} />
          <h1>{title}</h1>
          <p>{price}$</p>
        </div>
      </Link>
      <div className={scss.card__btn}>
        <button onClick={() => handleFavoriteClick(product)}>Избранное</button>
      </div>
    </div>
  );
};

export default Card;
