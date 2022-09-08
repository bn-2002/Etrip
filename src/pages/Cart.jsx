import React from 'react';
import { useCart } from '../store/CartContext';
import CartItem from '../components/CartItem';
import ListHeader from '../components/Layout/header/list-header/ListHeader';
import Catogries from '../components/catogry-section/Catogries';

const Cart = () => {
  const items = useCart();
  console.log(items)
  return (
    <>
      <ListHeader />
      <Catogries />
      <div className=" w-[95%] lg:w-[65%] mx-auto px-10 ">
        {items.map((product) => (
          <CartItem key={product.uniqueCartItemID} product={product} />
        ))}
        <button className="px-16 text-xl py-1 bg-[#dc3939] text-white rounded-[6px] ">
          پرداخت
        </button>
      </div>
    </>
  );
};

export default Cart;
