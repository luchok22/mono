import React, { useEffect, useState } from "react";
import scss from "./Catalog.module.scss";
import Navbar from "../Navbar/Navbar";
import { navbar } from "../../constants/catalog";
import search from "../../assets/Catalog/search.svg";
import CatalogCard from "./CatalogCard/CatalogCard";
import useCatalog from "../../hooks/useCatalog";
import SimpleLoader from "../SimpleLoader/SimpleLoader";
import useCatalogLinks from "../../hooks/useCatalogLinks";
const Catalog = () => {
  const [selectedType, setSelectedType] = useState(null);
  const { catalog, getCatalog, isLoading } = useCatalog();
  const { catalogLinks, getCatalogLinks } = useCatalogLinks();

  getCatalogLinks();
  getCatalog();
  
  if (isLoading) return <SimpleLoader />;
  return (
    <div className={scss.catalog}>
      <div className="container">
        <div className={scss.catalog__title}>
          <h1>Каталог</h1>
          <div className={scss.catalog__input}>
            <input type="text" placeholder="Поиск" />
            <div>
              <img src={search} alt="search" width={24} height={24} />
            </div>
          </div>
        </div>
        <Navbar
          links={catalogLinks}
          onLinkClick={(type) => setSelectedType(type)}
        />
        <div className={scss.catalog__wrapper}>
          {catalog
            ?.filter(
              (product) =>
                selectedType === null || product.type === selectedType
            )
            .map((product) => (
              <CatalogCard {...product} key={product.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
