import React from 'react';
import { useCart } from '../store/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const items = useCart();
  return (
    <>
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
