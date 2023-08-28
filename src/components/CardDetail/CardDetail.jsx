import React from "react";
import { useParams } from "react-router-dom";
import scss from "./CardDetail.module.scss";
import Button from "../Button/Button";
import { newsArr } from "../../constants/newsSlider"; // Импортируйте массив newsArr

const CardDetail = ({ handleCartClick }) => {
  const { id } = useParams();
  const selectedItem = newsArr.find((item) => item.id === parseInt(id)); // Найти элемент по id

  if (!selectedItem) {
    return <div>Загрузка...</div>; // Обработка, если элемент не найден
  }

  const { img, title, price, desc, feature } = selectedItem;
  return (
    <div className={scss.card}>
      <div className="container">
        <div className={scss.card__wrapper}>
          <div className={scss.card__img}>
            <img src={img} alt={title} width={514} height={497} />
          </div>
          <div className={scss.card__about}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <span>{price}$</span>
            <Button
              onClick={handleCartClick}
              product={selectedItem}
              title={"В корзину"}
            />
            <div className={scss.card__feature}>
              <h1>Характеристики</h1>
              <div className={scss.feature__wrapper}>
                {feature.map((feat, index) => (
                  <div className={scss.feature} key={index}>
                    <h1>{feat.name}:</h1>
                    <p>{feat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
