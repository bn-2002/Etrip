import React from 'react';
import TrashIcon from '../icons/TrashIcon';

const Cart = ({ showAddToCart }) => {
  return (
    <div
      className={` ${
        showAddToCart ? 'max-h-[200px] scale-y-1 my-2' : 'max-h-0 scale-y-0'
      } transition-all duration-500 ease origin-top  border border-transparent  text-gray-700 rounded-[6px] py-0 flex justify-start items-center`}
    >
      <div className="flex flex-col items-center justify-around w-full h-full gap-4 px-4 py-4 border border-[#d8d8d8] rounded-lg sm:px-0 sm:items-stretch md:items-stretch lg:flex-row mt-2 mb-1">
        <div className="flex items-center justify-center w-full px-6 lg:justify-start lg:w-1/3 title">
          گشت جزیره VIP
        </div>
        <div className="flex items-center justify-around w-full px-4 lg:w-1/3 time-and-date-info">
          <span className="date">1401/06/05</span>
          <span className="time">23:59 - 03:00</span>
        </div>

        <div className="flex flex-col w-full gap-4 px-4 lg:gap-0 sm:flex-row justify-evenly lg:justify-between lg:w-1/3 ">
          <div className="flex flex-row justify-around mx-auto w-[50%] sm:w-1/2 sm:justify-around">
            <button className="flex items-center justify-center w-4 h-4 p-4 border shadow-3xl rounded-[6px] border-[#88e972] text-xlg">
              <span className="text-[30px] text-[#44c336]">+</span>
            </button>
            <div className="flex items-center justify-center ">
              <span>3</span>
            </div>
            <button className="flex items-center justify-center w-4 h-4 p-4 border border-[#d8d8d8] rounded-[6px] shadow-4xl  text-xlg">
              <span className="">
                <TrashIcon />
              </span>
            </button>
          </div>

          <div className="flex items-center justify-center w-full sm:w-1/2 px-8 lg:px-0 lg:py-0 py-2 bg-[#c4ffb6] border border-[#44c336] rounded-[6px]">
            <span className="text-[#44c336]">6000 ریال</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
