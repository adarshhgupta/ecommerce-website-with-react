import React from 'react';
import Product from './Product';
import products from '../data';

const ProductList = () => (
  <div>
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
