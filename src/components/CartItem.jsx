import React from 'react';
import { useCart } from '../store/CartContext';
import TrashIcon from '../components/icons/TrashIcon';
import { useDarkMode } from '../store/DarkModeContext';

const CartItem = ({ product }) => {
  const cart = useCart();
  const {darkMode} = useDarkMode();

  const addToCartHandler = () => {
    cart.add(product);
  };

  const removeFromCartHandler = () => {
    cart.remove(product);
  };

  return (
    <div
      className={`transition-all border ${darkMode ? 'bg-slate-700 border-slate-700' : ' border-[#d9d9d9]'} text-gray-700 duration-500 ease origin-top w-[100%] p-5  rounded-[4px] gap-2 py-4 flex justify-start items-center flex-col shadow-6xl`}
    >
      <span className={`text-right text-xl ${darkMode? 'text-slate-200' : 'text-gray-800'} font-semibold flex-1 w-full  py-1 px-2   rounded-[4px]`}>
        {product.collectionName}
      </span>

      <div className="flex flex-col items-center w-full h-full gap-4  rounded-[4px] sm:px-0  md:items-stretch md:flex-row justify-between">
        <div className="flex flex-col w-full gap-4 lg:gap-0 sm:flex-row   justify-evenly lg:justify-between lg:w-1/2">
          <span className={`text-center flex-1 ${darkMode? 'bg-slate-600 text-slate-200' : 'border border-[#d9d9d9] bg-[#f6f6f6]'} py-1 px-2  rounded-[4px]`}>
            {product.name}
          </span>
        </div>
        <div className="flex flex-row w-full gap-4  lg:gap-2 justify-evenly lg:justify-between lg:w-1/2">
          <span className={`text-center flex-1 py-1 px-2 ${darkMode? 'bg-slate-600 text-slate-200' : 'border border-[#d9d9d9] bg-[#f6f6f6]'} rounded-[4px]`}>
            {product.date}
          </span>
          <span className= {`text-center flex-1 py-1 px-2 ${darkMode? 'bg-slate-600 text-slate-200' : 'border border-[#d9d9d9] bg-[#f6f6f6]'} rounded-[4px]`}>
            {product.time}
          </span>
        </div>
      </div>

      <div className="h-[.5px] w-full bg-[#d9d9d9] "></div>

      <div className="flex  flex-col  items-center justify-around w-full h-full gap-4 rounded-[4px] sm:px-0  md:items-stretch md:flex-row">
        <div className="flex flex-col w-full gap-4 lg:gap-2 sm:flex-row justify-evenly lg:justify-between lg:w-1/2 ">
          <div className={`flex  font-semibold items-center justify-between flex-1 p-5 ${darkMode? 'bg-slate-600 text-slate-200' : 'border border-[#d9d9d9] bg-[#f6f6f6]'} py-1 px-2  rounded-[4px]`}>
            <span>???????? :</span>
            <div className="relative">
              <span>{product.basePrice} ????????</span>
              <div className={`${darkMode ? 'bg-white' : 'bg-black'} w-full h-[.5px] top-[45%] absolute`}></div>
            </div>
          </div>

          <div className={`flex items-center font-semibold justify-between flex-1 py-1 px-2 ${darkMode? 'bg-slate-600 text-slate-200' : 'border border-[#d9d9d9] bg-[#f6f6f6]'} rounded-[4px]`}>
            <span>???????? :</span>
            <span>{product.finalPrice} ????????</span>
          </div>
        </div>

        <div className="flex flex-col-reverse w-full gap-4 lg:gap-2 sm:flex-row justify-evenly lg:justify-between  lg:w-1/2 ">
          <div className="flex flex-row items-center justify-around mx-auto w-[100%] sm:w-1/2 sm:justify-between ">
            <button
              onClick={addToCartHandler}
              className="flex items-center justify-center border-[#88e972] h-4 py-[1rem] border rounded-[4px]  text-xlg w-[36.36%]"
            >
              <div className="text-[30px] text-[#44c336]">+</div>
            </button>
            <div className={`flex items-center font-semibold justify-center w-[27.27%] ${darkMode ? 'text-white' : ''} `}>
              <span>{product.count}</span>
            </div>
            <button
              onClick={removeFromCartHandler}
              className="flex items-center justify-center w-[36.36%] h-4 py-[1rem] border border-[#d8d8d8] rounded-[4px] shadow-4xl  text-xlg"
            >
              <div className="text-[30px] text-gray-400">
                {product.count > 1 ? '-' : <TrashIcon />}
              </div>
            </button>
          </div>

          <div className="flex items-center justify-around font-semibold w-full sm:w-1/2 lg:px-0 lg:py-0 py-1 border-[#86d88f] bg-[#eefced] border  rounded-[4px]">
            <span>??????????</span>
            <span>{product.finalPrice * product.count} ????????</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
