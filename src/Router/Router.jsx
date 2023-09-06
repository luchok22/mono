import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import FavoritesPage from "../pages/FavoritesPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import CatalogPage from "../pages/CatalogPage";
import CatalogDetailPage from "../pages/CatalogDetailPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import NewsDetailPage from "../pages/NewsDetailPage";

const Router = () => {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favorites, setFavorites] = useState(storedFavorites);
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedCart);

  const handleFavoriteClick = (item) => {
    if (favorites.some((favoriteItem) => favoriteItem.id === item.id)) {
      return;
    }
    setFavorites([...favorites, item]);
    toast.success("Товар добавлен в избранное!");
  };

  const toastConfig = {
    autoClose: 3000,
    hideProgressBar: true,
  };
  const handleCartClick = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
      toast.success(
        `Товар ${item.name} добавлен в корзину! (x${updatedCart[itemIndex].quantity})`
      );
    } else {
      const updatedCart = [...cart, { ...item, quantity: 1 }];
      setCart(updatedCart);
      toast.success("Товар добавлен в корзину!");
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [cart, favorites]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage handleFavoriteClick={handleFavoriteClick} />}
        />
        <Route
          path="/news/:id"
          element={<NewsDetailPage handleCartClick={handleCartClick} />}
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
          element={
            <CartPage
              cart={cart}
              handleCartClick={handleCartClick}
              setCart={setCart}
            />
          }
        />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route
          path="/catalog/:id"
          element={<CatalogDetailPage handleCartClick={handleCartClick} />}
        />
      </Routes>
      <ToastContainer toastClassName="custom-toast" {...toastConfig} />
    </>
  );
};

export default Router;
