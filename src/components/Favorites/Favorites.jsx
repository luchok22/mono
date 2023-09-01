import React from "react";
import scss from "./Favorites.module.scss";
import ReusableComponents from "../ReusableComponent/ReusableComponent";
import FavoritesCard from "./FavoritesCard/FavoritesCard";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Favorites = ({ favorites, setFavorites, handleCartClick }) => {
 
  const handleRemove = (id) => {
    const arr = favorites.filter((item) => item.id !== id);
    setFavorites(arr);
  };

  return (
    <div className={scss.favorites}>
      <ReusableComponents title={"Избранное"}>
        {favorites.length ? (
          <div className={scss.favorites__wrapper}>
            {favorites.map((item) => (
              <FavoritesCard
                handleRemove={handleRemove}
                handleCartClick={handleCartClick}
                {...item}
                key={item.id}
              />
            ))}
          </div>
        ) : (
          <div className={scss.favorites__none}>
            <div className={scss.none__title}>
              <h1>Избранное пока пусто</h1>
              <Link to={"/"}>
                <Button title={"Пополнить избранное"} />
              </Link>
            </div>
          </div>
        )}
      </ReusableComponents>
    </div>
  );
};

export default Favorites;
