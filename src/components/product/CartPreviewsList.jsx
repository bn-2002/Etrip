import React from 'react';
import CartItemPreview from './CartItemPreview';

const CartPreviewsList = ({ items }) => {
  return (
    <div
      className={`transition-all duration-500 ease origin-top  border border-transparent  text-gray-700 rounded-[6px] py-0 flex justify-start items-center flex-col`}
    >
      {items.map((item) => {
        const uniqueIDString = `${item.id}${item.name}${item.date}${item.time}`;
        return <CartItemPreview item={item} key={uniqueIDString} />;
      })}
    </div>
  );
};

export default CartPreviewsList;
