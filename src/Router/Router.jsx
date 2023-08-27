import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import FavoritesPage from "../pages/FavoritesPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";

const Router = () => {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []; // Загружаем избранное из localStorage (если есть)
  const [favorites, setFavorites] = useState(storedFavorites);

  const storedCart = JSON.parse(localStorage.getItem("cart")) || []; // Загружаем избранное из localStorage (если есть)
  const [cart, setCart] = useState(storedCart);
  const handleFavoriteClick = (item) => {
    if (favorites.some((favoriteItem) => favoriteItem.id === item.id)) {
      return;
    }
    setFavorites([...favorites, item]);
  };
  const handleCartClick = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Сохраняем избранное в localStorage при каждом изменении
    localStorage.setItem("favorites", JSON.stringify(favorites)); // Сохраняем избранное в localStorage при каждом изменении
  }, [favorites, cart]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage handleFavoriteClick={handleFavoriteClick} />}
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              handleCartClick={handleCartClick}
              setFavorites={setFavorites}
            />
          }
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
      </Routes>
    </>
  );
};

export default Router;
