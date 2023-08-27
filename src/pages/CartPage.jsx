import React from 'react';
import Header from '../components/Header/Header';
import Cart from '../components/Cart/Cart';
import Footer from '../components/Footer/Footer';

const CartPage = ({cart, setCart}) => {
    return (
        <>
          <Header/>
          <Cart cart={cart} setCart={setCart}/>
          <Footer/>  
        </>
    );
};

export default CartPage;