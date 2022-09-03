import React from 'react';
import CartItemPreview from './CartItemPreview';

const CartPreviewsList = ({ carts }) => {
  return (
    <div
      className={`transition-all duration-500 ease origin-top  border border-transparent  text-gray-700 rounded-[6px] py-0 flex justify-start items-center flex-col`}
    >
      {carts.map((cart) => {
        const uniqueIDString = `${cart.id}${cart.name}${cart.date}${cart.time}`;
        return <CartItemPreview cart={cart} key={uniqueIDString} />;
      })}
    </div>
  );
};

export default CartPreviewsList;
