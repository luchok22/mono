import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import PopularCategories from "../components/PopularCategories/PopularCategories";
import NewsSlider from "../components/NewsSlider/NewsSlider";
import CompanyBlock from "../components/CompanyBlock/CompanyBlock";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
const HomePage = ({ handleFavoriteClick }) => {
  return (
    <>
      <Header />
      <Main />
      <PopularCategories />
      <NewsSlider handleFavoriteClick={handleFavoriteClick} />
      <CompanyBlock />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
