import React, { useState } from "react";
import scss from "./Catalog.module.scss";
import Navbar from "../Navbar/Navbar";
import search from "../../assets/Catalog/search.svg";
import CatalogCard from "./CatalogCard/CatalogCard";
import useCatalog from "../../hooks/useCatalog";
import SimpleLoader from "../SimpleLoader/SimpleLoader";
import useCatalogLinks from "../../hooks/useCatalogLinks";

const Catalog = () => {
  const [selectedType, setSelectedType] = useState(null);
  const { catalog, getCatalog, isLoading } = useCatalog();
  const [searchText, setSearchText] = useState("");
  const { catalogLinks, getCatalogLinks } = useCatalogLinks();

  getCatalogLinks();
  getCatalog();

  const handleLinkClick = (type) => {
    setSelectedType(type);
  };

  if (isLoading) return <SimpleLoader />;
  return (
    <div className={scss.catalog}>
      <div className="container">
        <div className={scss.catalog__title}>
          <h1>Каталог</h1>
          <div className={scss.catalog__input}>
            <input
              type="text"
              placeholder="Поиск"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div>
              <img src={search} alt="search" width={24} height={24} />
            </div>
          </div>
        </div>
        <Navbar
          links={catalogLinks}
          selectedType={selectedType}
          onLinkClick={handleLinkClick}
        />
        <div className={scss.catalog__wrapper}>
          {catalog
            ?.filter(
              (product) =>
                (selectedType === null || product.type === selectedType) &&
                (searchText === "" ||
                  product.title
                    .toLowerCase()
                    .includes(searchText.toLowerCase()))
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
