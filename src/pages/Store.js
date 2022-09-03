import React, { useState } from 'react';
import Product from '../components/Product';
import Header from '../components/Header';
import { useProducts } from '../components/ProductsContext';

export default function Store() {
  const allProducts = useProducts();
  console.log('allProducts : ' , allProducts)

  return (
    <main>
      <Header />
      {allProducts.map((product, index) => (
        <Product key={index} product={product} index={index} id={product.id} />
      ))}
    </main>
  );
}
