import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import Dropdown from './Dropdown';
import { useList } from '../../store/ListContext';
import { useCart } from '../../store/CartContext';
import { useDarkMode } from '../../store/DarkModeContext';

const ProductInfo = ({ moreDetailsOnClick, productID }) => {
  const list = useList();
  const cart = useCart();
  const {darkMode} = useDarkMode();

  ////find index of current item in items list
  const i = list.availableItems.findIndex(
    (item) => item.productID === productID
  );

  let productFeatures;
  productFeatures = list.allItems[i]?.Feature;

  const addToCartHandler = () => {
    const item = {
      collectionName: list.allItems[i].Name,
      name: list.availableItems[i].selectedName,
      time: list.availableItems[i].selectedTime,
      date: list.availableItems[i].selectedDate,
      basePrice: list.availableItems[i].basePrice,
      finalPrice: list.availableItems[i].finalPrice,
      count: 1,
      id: productID,
    };

    //////It is specific ID for each product that we want to dispatch in cart items List
    const uniqueCartItemID = `${item.id}${item.name}${item.date}${item.time}`;

    const newCartItem = { ...item, uniqueCartItemID: uniqueCartItemID };

    cart.add(newCartItem);
  };

  return (
    <div className="flex flex-col justify-between gap-4 rounded-md lg:w-2/3 ">
      <div className="flex flex-col items-stretch justify-between flex-1 gap-2 sm:flex-row">
        <div className={`flex items-center justify-between flex-1  border py-1   ${darkMode? 'bg-slate-700 text-slate-200 border-slate-700' : 'border-[#d9d9d9] bg-[#f6f6f6] text-gray-600'} rounded-md`}>
          <span className="font-semibold text-[18px] mx-2 line-clamp-1">
            {`${list.allItems[i]?.Name} `}
          </span>
        </div>
        <div className={`flex items-center justify-between flex-1 border py-1 ${darkMode?'bg-slate-600 text-white border-slate-600' : 'text-gray-800 border-[#d9d9d9]'} rounded-md`}>
          <div className="w-full">
            {productFeatures && productFeatures.length === 1 && (
              <p className="mx-2">{list.availableItems[i].selectedName}</p>
            )}
            {productFeatures && productFeatures.length > 1 && (
              <Dropdown
                type={'name'}
                firstItem={list.availableItems[i].selectedName}
                menuItems={list.availableItems[i].namesArray}
                productID={productID}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch justify-between flex-1 gap-2 md:flex-row">
        <div className="flex flex-col sm:flex-row items-stretch justify-between flex-1 gap-2 md:gap-1 text-[1rem]">
          <div className={` ${darkMode? 'bg-slate-700 text-white border-slate-700' : 'border-[#d9d9d9] bg-[#f6f6f6]'} flex items-center flex-1 border py-1 justify-between px-2 md:px-1  rounded-md`}>
            <span className="">قیمت :</span>
            <div className="relative text-red-500">
              <span>{list.availableItems[i]?.basePrice} ریال</span>
              <div className={`${darkMode ? 'bg-red-300' : 'bg-black'} w-full h-[.5px] top-[45%] absolute`}></div>
            </div>
          </div>
          <div className={`flex ${darkMode? 'bg-slate-700 text-white border-slate-700' : 'border-[#d9d9d9] bg-[#f6f6f6]'} items-center flex-1  border py-1 justify-between px-2 md:px-1 rounded-md`}>
            <span className=""> با تخفیف :</span>
            <span className="text-green-500 ">
              {list.availableItems[i]?.finalPrice} ریال
            </span>
          </div>
        </div>

        {!(
          list.availableItems[i]?.datesArray.length === 1 &&
          list.availableItems[i]?.timesArray.length === 1
        ) && (
          <div className="flex items-stretch flex-col sm:flex-row justify-between flex-1 gap-2 md:gap-1">
            {
              <div className={`flex items-center flex-1 justify-between border  ${darkMode? 'bg-slate-700 border-slate-700' : 'border-[#d9d9d9] bg-[#f6f6f6]'} rounded-md`}>
                <Dropdown
                  type={'date'}
                  firstItem={list.availableItems[i]?.selectedDate}
                  menuItems={list.availableItems[i]?.datesArray}
                  productID={productID}
                />
              </div>
            }
            {
              <div className={`flex items-center flex-1 justify-between border  ${darkMode? 'bg-slate-700 border-slate-700' : 'bg-[#f6f6f6] border-[#d9d9d9]'} rounded-md`}>
                <Dropdown
                  type={'time'}
                  firstItem={list.availableItems[i]?.selectedTime}
                  menuItems={list.availableItems[i]?.timesArray}
                  productID={productID}
                />
              </div>
            }
          </div>
        )}
      </div>
      <div className="flex flex-col-reverse items-stretch justify-between flex-1 gap-2 sm:flex-row">
        <button onClick={moreDetailsOnClick} className="text-[#5377ed]">
          توضیحات بیشتر »{' '}
        </button>
        <button
          onClick={productFeatures !== null ? addToCartHandler : undefined}
          className={` ${
            productFeatures === null ||
            list.availableItems[i]?.timesArray.length === 0
              ? 'bg-[grey] hover:bg-[#5a5959] cursor-not-allowed'
              : 'bg-[#e92444] hover:bg-[#ca1d39] cursor-pointer'
          } px-6 py-1 text-base text-white rounded  transition-all  sm:py-1 lg:py-0 flex flex-row justify-center items-center gap-1`}
        >
          <AiFillPlusCircle />
          <span> افزودن به سبد خرید</span>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
