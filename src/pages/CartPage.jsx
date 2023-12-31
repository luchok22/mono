import React from 'react';
import Header from '../components/Header/Header';
import Cart from '../components/Cart/Cart';
import Footer from '../components/Footer/Footer';

const CartPage = ({cart, setCart, handleCartClick}) => {
    return (
        <>
          <Header/>
          <Cart cart={cart} handleCartClick={handleCartClick} setCart={setCart}/>
          <Footer/>  
        </>
    );
};

export default CartPage;