import React, { useMemo } from "react";
import scss from "./NewsSlider.module.scss";
import Slider from "react-slick";
import { newsArr } from "../../constants/newsSlider";
import Card from "../Card/Card";
import ReusableComponents from "../ReusableComponent/ReusableComponent";
const NewsSlider = ({ handleFavoriteClick }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 4.5,
    initialSlide: 0,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const renderCards = useMemo(
    () =>
      newsArr.map((product) => (
        <Card handleFavoriteClick={handleFavoriteClick} key={product.id} {...product} />
      )),
    [handleFavoriteClick]
  );
  return (
    <div className={scss.news} id="news">
      <ReusableComponents title={"Новинки"} line={true}>
        <div className={scss.news__slider}>
          <Slider {...settings}>{renderCards}</Slider>
        </div>
      </ReusableComponents>
    </div>
  );
};

export default NewsSlider;
