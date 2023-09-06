import sofasImg from "../assets/PopularCategories/categories_sofas.png";
import tablesImg from "../assets/PopularCategories/categories_tables.png";
import wardrobesImg from "../assets/PopularCategories/categories_wardrobes.png";
import kitchenSetImg from "../assets/PopularCategories/categories_kitchen-set.png";
import bedsImg from "../assets/PopularCategories/categories_beds.png";
import chairsImg from "../assets/PopularCategories/categories_chairs.png";
import newsImg1 from "../assets/PopularCategories/news-image1.png";
import newsImg2 from "../assets/PopularCategories/news-image2.png";

export const categories = [
  { name: "sofas", img: sofasImg, type: "Мягкая Мебель" },
  { name: "tables", img: tablesImg, type: "Мебель" },
  { name: "wardrobes", img: wardrobesImg, type: "Мебель" },
  { name: "kitchen-set", img: kitchenSetImg, type: "Кухня" },
  { name: "beds", img: bedsImg, type: "Детская" },
  { name: "chairs", img: chairsImg, type: "Мебель" },
];

export const news = [
  {
    img: newsImg1,
    title: "Летнее обновление",
    description: "Получите солнечные скидки до 30% на летние коллекции мебели для создания свежего и стильного летнего интерьера. Отличная возможность получить качественные предметы по привлекательным ценам.",
    button: "Подробнее",
  },
  {
    img: newsImg2,
    title: "Домашний оазис",
    discount: 40,
    description: "Мебель для создания домашнего уголка",
    button: "Перейти в коллекцию",
  },
];
