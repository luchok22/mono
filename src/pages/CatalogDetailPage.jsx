import React from "react";
import Header from "../components/Header/Header";
import CardDetail from "../components/CardDetail/CardDetail";
import Footer from "../components/Footer/Footer";
import useCatalog from "../hooks/useCatalog";

const CatalogDetailPage = ({ handleCartClick }) => {
  const { getCatalogDetail, catalogDetail, isLoading, error } = useCatalog();
  return (
    <>
      <Header />
      <CardDetail
        arr={catalogDetail}
        error={error}
        isLoading={isLoading}
        setArr={getCatalogDetail}
        handleCartClick={handleCartClick}
      />
      <Footer />
    </>
  );
};

export default CatalogDetailPage;
