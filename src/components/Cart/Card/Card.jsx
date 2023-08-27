import React from "react";
import scss from "./Card.module.scss";
const Card = ({ img, title, id, price, quantity, handleRemove,  }) => {
  const product = {img, title, id, price}
  return (
    <div className={scss.card}>
      <div className={scss.card__desc}>
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <div className={scss.desc__aq}>
          <p>{price}$</p>
          {quantity && <p>x{quantity}</p>}
        </div>
      </div>
      <div className={scss.card__btn}>
        <button onClick={() => handleRemove(product)}>Удалить</button>
      </div>
    </div>
  );
};

export default Card;
