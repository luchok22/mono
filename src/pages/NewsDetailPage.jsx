import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CardDetail from "../components/CardDetail/CardDetail";
import useNews from "../hooks/useNews";
const NewsDetailPage = ({ handleCartClick }) => {
  const { newsDetail, error, isLoading, getNewsDetail } = useNews();

  return (
    <>
      <Header />
      <CardDetail
        arr={newsDetail}
        setArr={getNewsDetail}
        error={error}
        isLoading={isLoading}
        handleCartClick={handleCartClick}
      />
      <Footer />
    </>
  );
};

export default NewsDetailPage;
