import React from 'react';

const Product = ({ product }) => (
  <div className="product">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.price}</p>
  </div>
);

export default Product;
