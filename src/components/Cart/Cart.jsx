import React, { useState } from "react";
import scss from "./Cart.module.scss";
import ReusableComponents from "../ReusableComponent/ReusableComponent";
import Button from "../Button/Button";
import Card from "./Card/Card";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart, handleCartClick }) => {
  const [showProducts, setShowProducts] = useState(false);
  const handleRemove = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const totalPrice = cart.reduce(
    (total, item) =>
      total + parseFloat(item.price.replace(/\s/g, "")) * item.quantity,
    0
  );

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);


  const handleShowProducts = () => {
    setShowProducts(!showProducts);
  };
  return (
    <div className={scss.cart}>
      <ReusableComponents title={"Корзина"}>
        {cart.length ? (
          <div className={scss.card__prices}>
            <div className={scss.cart__wrapper}>
              {cart.map((item) => (
                <Card
                  handleRemove={handleRemove}
                  handleCartClick={handleCartClick}
                  {...item}
                  key={item.id}
                />
              ))}
            </div>
            <div className={scss.cart__price}>
              <div className={scss.price__products}>
                <h1>Сумма:</h1>
                <h1>{totalPrice}$</h1>
              </div>
              <div className={scss.price__products}>
                <p>Товары</p>
                <p>{totalQuantity}</p>
              </div>
              <div className={scss.price__items}>
                <div>
                  <p>Ваши товары</p>
                  <p onClick={handleShowProducts}>Посмотреть</p>
                </div>
                {showProducts && (
                  <div className={scss.productNames}>
                    {cart.map((item) => (
                      <p key={item.id}>{item.title}</p>
                    ))}
                  </div>
                )}
              </div>
              <div className={scss.price__btn}>
                <Button title={"Заказать"} variable={true} />
              </div>
            </div>
          </div>
        ) : (
          <div className={scss.cart__none}>
            <div className={scss.none__title}>
              <h1>Корзина пока пуста</h1>
            </div>
            <div className={scss.none__btn}>
              <Link to={"/catalog"}>
                <Button title={"Пополнить корзину"} />
              </Link>
              <Link to={"/favorites"}>
                <Button title={"Перейти в избранное"} />
              </Link>
            </div>
          </div>
        )}
      </ReusableComponents>
    </div>
  );
};

export default Cart;
