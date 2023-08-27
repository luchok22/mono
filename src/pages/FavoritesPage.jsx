import React from "react";
import Favorites from "../components/Favorites/Favorites";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const FavoritesPage = ({ favorites, setFavorites, handleCartClick }) => {
  return (
    <>
      <Header />
      <Favorites favorites={favorites}  handleCartClick={handleCartClick} setFavorites={setFavorites} />
      <Footer />
    </>
  );
};

export default FavoritesPage;
