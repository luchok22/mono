import React, { useEffect } from "react";
import scss from "./CardDetail.module.scss";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";

const CardDetail = ({ handleCartClick, arr, setArr, isLoading, error }) => {
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setArr(id);
    }
  }, [id, setArr]);

  if (isLoading) return <h1>Загрузка</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div className={scss.card}>
      <div className="container">
        <div className={scss.card__wrapper}>
          <div className={scss.card__img}>
            <img src={arr.img} alt={arr.title} width={514} height={497} />
          </div>
          <div className={scss.card__about}>
            <h1>{arr.title}</h1>
            <p>{arr.desc}</p>
            <span>{arr.price}$</span>
            <Button
              onClick={handleCartClick}
              product={arr}
              title={"В корзину"}
            />
            <div className={scss.card__feature}>
              <h1>Характеристики</h1>
              <div className={scss.feature__wrapper}>
                {arr.feature.map((feat, index) => (
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
