import React from "react";
import scss from "./Card.module.scss";
const Card = ({
  img,
  title,
  price,
  quantity,
  handleRemove,
  handleCartClick,
}) => {
  const product = { img, title, price };
  return (
    <div className={scss.card}>
      <div className={scss.card__desc}>
        <img src={img} alt={title} width={250} height={200} />
        <h1>{title}</h1>
        <div className={scss.desc__aq}>
          <p>{price}$</p>
          {quantity && <p>x{quantity}</p>}
        </div>
      </div>
      <div className={scss.card__btn}>
        <button onClick={() => handleCartClick(product)}>Добавить</button>
        <button onClick={() => handleRemove(product)}>Удалить</button>
      </div>
    </div>
  );
};

export default Card;
