import React from 'react';
import scss from './Card.module.scss';
const Card = ({img, title, price}) => {
    return (
        <div className={scss.card}>
            <img src={img} alt={title} width={328} height={338} />
            <h1>{title}</h1>
            <p>{price}$</p>
        </div>
    );
};

export default Card;