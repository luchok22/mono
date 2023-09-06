import React from "react";
import scss from "./PopularCategories.module.scss";
import { categories, news } from "../../constants/popularCategories";
import Button from "../Button/Button";
import ReusableComponents from "../ReusableComponent/ReusableComponent";
import { Link } from "react-router-dom";

const PopularCategories = () => {
  const renderCategories = categories.map((elem, index) => (
    <Link
      key={index}
      to={'/catalog'}
      className={`${scss[elem.name]} ${scss["category"]}`}
    >
      <img src={elem.img} alt={elem.name} />
      <div className={scss.background_dimming}></div>
      <h1>{elem.name}</h1>
    </Link>
  ));
  

  const renderNews = news.map((elem, index) => (
    <div key={index} className={scss.news}>
      <img src={elem.img} alt={elem.title} />
      <div>
        <h1>{elem.title}</h1>
        {elem.discount ? <h2>{elem.discount}%</h2> : ""}
        <p>{elem.description}</p>
        <Button title={elem.button} arrow />
      </div>
    </div>
  ));

  return (
    <article className={scss.PopularCategories}>
      <ReusableComponents title={"Популярные категории"} line={true}>
        <div className={scss.PopularCategories__wrapper}>
          <div className={scss.PopularCategories__categories}>
            {renderCategories}
          </div>
          <div className={scss.PopularCategories__news}>{renderNews}</div>
        </div>
      </ReusableComponents>
    </article>
  );
};

export default PopularCategories;
