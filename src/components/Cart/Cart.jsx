import React from "react";
import scss from "./Cart.module.scss";
import ReusableComponents from "../ReusableComponent/ReusableComponent";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Card from "./Card/Card";
const Cart = ({ cart, setCart }) => {
  const handleRemove = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

    setCart(updatedCart.filter((item) => item.quantity > 0));
  };
  return (
    <div className={scss.cart}>
      <ReusableComponents title={"Корзина"}>
        {cart.length ? (
          <div className={scss.cart__wrapper}>
            {cart.map((item) => (
              <Card handleRemove={handleRemove} {...item} key={item.id} />
            ))}
          </div>
        ) : (
          <div className={scss.cart__none}>
            <div className={scss.none__title}>
              <h1>Корзина пока пуста</h1>
              <div className={scss.none__btn}>
                <Link to={"/catalog"}>
                  <Button title={"Пополнить корзину"} />
                </Link>
                <Link to={"/favorites"}>
                  <Button title={"Перейти в изабранное"} variable={true} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </ReusableComponents>
    </div>
  );
};

export default Cart;
