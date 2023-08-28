import React, { useState } from "react";
import scss from "./CatalogCard.module.scss";
import { Link } from "react-router-dom";

const CatalogCard = ({ img, id, title, price, desc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/card/${id}`}>
      <div
        className={scss.card}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={img} alt={title} width={328} height={338} />
        <h1>{title}</h1>
        <p>{price}$</p>
        {isHovered && <div className={scss.card__desc}>
            <p>{desc}</p>
          </div>}
      </div>
    </Link>
  );
};

export default CatalogCard;
