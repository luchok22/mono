import React from "react";
import scss from "./NewsSlider.module.scss";
import Slider from "react-slick";
import Card from "../Card/Card";
import ReusableComponents from "../ReusableComponent/ReusableComponent";
import useNews from "../../hooks/useNews";
const NewsSlider = ({ handleFavoriteClick }) => {
  const { news, getNews } = useNews();
  
  getNews();

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        breakpoint: 997,
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
  
  return (
    <div className={scss.news} id="news">
      <ReusableComponents title={"Новинки"} line={true}>
        <div className={scss.news__slider}>
          <Slider {...settings}>
            {news.map((product) => (
              <Card
                handleFavoriteClick={handleFavoriteClick}
                key={product.tid}
                {...product}
              />
            ))}
          </Slider>
        </div>
      </ReusableComponents>
    </div>
  );
};

export default NewsSlider;
