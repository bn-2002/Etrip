import React from 'react';

const CartData = ({
  moreDetailsOnClick,
  addToCartOnClick,
  collectionName,
  name,
  basePrice,
  finalPrice,
}) => {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-md lg:w-2/3 ">
      <div className="flex flex-col items-stretch justify-between flex-1 gap-2 sm:flex-row">
        <div className="flex items-center justify-between flex-1  border py-1 px-2 border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
          <span className="font-semibold text-[18px] text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis ">
            {collectionName}
          </span>
        </div>
        <div className="flex items-center justify-between flex-1  border py-1 px-2 border-[#d9d9d9] text-gray-800  rounded-md">
          <span className="text-gray-600">{name}</span>
        </div>
      </div>
      <div className="flex flex-col items-stretch justify-between flex-1 gap-2 sm:flex-row ">
        <div className="flex items-center justify-between flex-1  border py-1 px-2 border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
          <span>قیمت :</span>
          <div className="relative text-red-500">
            <span>{basePrice} ریال</span>
            <div className="bg-black w-full h-[.5px] top-[45%] absolute"></div>
          </div>
        </div>
        <div className="flex items-center justify-between flex-1  border py-1 px-2 border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
          <span> با تخفیف :</span>
          <span className="text-green-500">{finalPrice} ریال</span>
        </div>
      </div>
      <div className="flex flex-col-reverse items-stretch justify-between flex-1 gap-2 sm:flex-row">
        <button onClick={moreDetailsOnClick} className="text-[#5377ed]">
          توضیحات بیشتر »{' '}
        </button>
        <button
          onClick={addToCartOnClick}
          className="px-6 py-2 text-base text-white rounded bg-[#e92444] sm:py-1 lg:py-0"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default CartData;
