import React from 'react';
import { useDispatchCart } from '../store/CartContext';
import TrashIcon from '../components/icons/TrashIcon';

const CartItem = ({ product }) => {
  const dispatchCart = useDispatchCart();

  const addToCartHandler = () => {
    dispatchCart({
      type: 'ADD',
      payload: { item: product },
    });
  };

  const removeFromCartHandler = () => {
    dispatchCart({
      type: 'REMOVE',
      payload: { item: product },
    });
  };

  return (
    <div
      className={`  transition-all duration-500 ease origin-top  my-4  border border-[#d9d9d9]  text-gray-700 rounded-[6px] gap-2 py-4 flex justify-start items-center flex-col`}
    >
      <span className="text-right  text-xl text-gray-800 font-medium flex-1 w-full  py-1 px-2   rounded-md">
        {product.collectionName}
      </span>

      <div className="flex flex-col items-center w-full h-full gap-4  rounded-lg sm:px-0  md:items-stretch md:flex-row justify-between">
        <div className="flex flex-col w-full gap-4 lg:gap-0 sm:flex-row   justify-evenly lg:justify-between lg:w-1/2">
          <span className="text-center flex-1  border py-1 px-2 border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
            {product.name}
          </span>
        </div>
        <div className="flex flex-row w-full gap-4  lg:gap-2 justify-evenly lg:justify-between lg:w-1/2">
          <span className="text-center flex-1  border py-1 px-2 border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
            {product.date}
          </span>
          <span className=" text-center flex-1  border py-1 px-2 border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
            {product.time}
          </span>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#d9d9d9] "></div>

      <div className="flex  flex-col  items-center justify-around w-full h-full gap-4 rounded-lg sm:px-0  md:items-stretch md:flex-row">
        <div className="flex flex-col w-full gap-4 lg:gap-2 sm:flex-row justify-evenly lg:justify-between lg:w-1/2 ">
          <div className="flex items-center justify-between flex-1  border py-1 px-2 border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
            <span>قیمت :</span>
            <div className="relative text-red-500">
              <span>{product.basePrice} ریال</span>
              <div className="bg-black w-full h-[.5px] top-[45%] absolute"></div>
            </div>
          </div>

          <div className="flex items-center justify-between flex-1  border py-1 px-2 border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
            <span>قیمت :</span>
            <span>{product.finalPrice} ریال</span>
          </div>
        </div>

        <div className="flex flex-col-reverse w-full gap-4 lg:gap-2 sm:flex-row justify-evenly lg:justify-between  lg:w-1/2 ">
          <div className="flex flex-row items-center justify-around mx-auto w-[100%] sm:w-1/2 sm:justify-between ">
            <button
              onClick={addToCartHandler}
              className="flex items-center justify-center h-4 p-4 border shadow-3xl rounded-[6px]  text-xlg w-[36.36%]"
            >
              <span className="text-[30px] text-[#44c336]">+</span>
            </button>
            <div className="flex items-center justify-center w-[27.27%] ">
              <span>{product.count}</span>
            </div>
            <button
              onClick={removeFromCartHandler}
              className="flex items-center justify-center w-[36.36%] h-4 p-4 border border-[#d8d8d8] rounded-[6px] shadow-4xl  text-xlg"
            >
              <span className="text-[30px] text-gray-400">
                {product.count > 1 ? '-' : <TrashIcon />}
              </span>
            </button>
          </div>

          <div className="flex items-center justify-center w-full sm:w-1/2 px-8 lg:px-0 lg:py-0 py-2 bg-[#c4ffb6] border border-[#44c336] rounded-[6px]">
            <span className="text-[#44c336]">
              {product.finalPrice * product.count} ریال
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
