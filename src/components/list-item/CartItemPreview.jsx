import React from 'react';
import TrashIcon from '../icons/TrashIcon';
import { useDispatchCart } from '../../store/CartContext';

const CartItemPreview = ({ cart }) => {
  const dispatchCart = useDispatchCart();

  const addToCartHandler = () => {
    dispatchCart({
      type: 'ADD',
      payload: { item: cart },
    });
  };

  const removeFromCartHandler = () => {
    dispatchCart({
      type: 'REMOVE',
      payload: { item: cart },
    });
  };

  return (
    <div className="flex text-black flex-col items-center justify-around w-full h-full gap-4 px-4 py-4 border border-[#d8d8d8] rounded-lg sm:px-0 sm:items-stretch md:items-stretch lg:flex-row mt-2 mb-1">
      <div className="flex items-center justify-center w-full px-6 lg:justify-start lg:w-1/3 title">
        {cart.name}
      </div>
      <div className="flex items-center justify-around w-full px-4 lg:w-1/3 time-and-date-info">
        <span className="date">{cart.date}</span>
        <span className="time">{cart.time}</span>
      </div>

      <div className="flex flex-col w-full gap-4 px-4 lg:gap-0 sm:flex-row justify-evenly lg:justify-between lg:w-1/3 ">
        <div className="flex flex-row justify-around mx-auto w-[50%] sm:w-1/2 sm:justify-around">
          <button
            onClick={addToCartHandler}
            className="flex items-center justify-center w-4 h-4 p-4 border shadow-3xl rounded-[6px] border-[#88e972] text-xlg"
          >
            <span className="text-[30px] text-[#44c336]">+</span>
          </button>
          <div className="flex items-center justify-center ">
            <span>{cart.count}</span>
          </div>
          <button
            onClick={removeFromCartHandler}
            className="flex items-center justify-center w-4 h-4 p-4 border border-[#d8d8d8] rounded-[6px] shadow-4xl  text-xlg"
          >
            <span className="text-[30px] text-gray-400">
              {cart.count > 1 ? '-' : <TrashIcon />}
            </span>
          </button>
        </div>

        <div className="flex items-center justify-center w-full sm:w-1/2 px-8 lg:px-0 lg:py-0 py-2 bg-[#c4ffb6] border border-[#44c336] rounded-[6px]">
          <span className="text-[#44c336]">{cart.finalPrice} ریال</span>
        </div>
      </div>
    </div>
  );
};

export default CartItemPreview;
