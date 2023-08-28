import React, { useState } from "react";
import scss from "./Catalog.module.scss";
import Navbar from "../Navbar/Navbar";
import { navbar } from "../../constants/catalog";
import search from "../../assets/Catalog/search.svg";
import { newsArr } from "../../constants/newsSlider";
import CatalogCard from "./CatalogCard/CatalogCard";
const Catalog = () => {
  const [selectedType, setSelectedType] = useState(null);
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
        <Navbar links={navbar} onLinkClick={(type) => setSelectedType(type)} />
        <div className={scss.catalog__wrapper}>
          {newsArr
            .filter(
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
