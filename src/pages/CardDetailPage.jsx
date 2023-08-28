import React from 'react';
import Header from '../components/Header/Header';
import CardDetail from '../components/CardDetail/CardDetail';
import Footer from '../components/Footer/Footer';

const CardDetailPage = ({ handleCartClick}) => {
    return (
        <>
          <Header/>
          <CardDetail handleCartClick={ handleCartClick}/>
          <Footer/>  
        </>
    );
};

export default CardDetailPage;