import React from 'react';
import './Product.css';

function Product(props) {
  const { title, price, description } = props;

  return (
    <div className="product">
      <h2 className="product-title">{title}</h2>
      <p className="product-price">${price}</p>
      <p className="product-description">{description}</p>
    </div>
  );
}

export default Product;
