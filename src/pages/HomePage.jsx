import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import PopularCategories from "../components/PopularCategories/PopularCategories";
import NewsSlider from "../components/NewsSlider/NewsSlider";
import CompanyBlock from "../components/CompanyBlock/CompanyBlock";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Main />
      <PopularCategories/>
      <NewsSlider/>
      <CompanyBlock/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default HomePage;
