import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import Dropdown from './Dropdown';
import { useList } from '../../store/ListContext';
import { useDispatchCart } from '../../store/CartContext';

const ProductInfo = ({ moreDetailsOnClick, id }) => {
  const list = useList();
  ////find index of current item in items list
  const i = list.availableItems.findIndex((item) => item.id === id);

  let productFeatures;
  productFeatures = list.allItems[i].Feature;

  const dispatchCart = useDispatchCart();

  const addToCartHandler = () => {
    const item = {
      collectionName: list.allItems[i].Name,
      name: list.availableItems[i].selectedName,
      time: list.availableItems[i].selectedTime,
      date: list.availableItems[i].selectedDate,
      basePrice: list.availableItems[i].basePrice,
      finalPrice: list.availableItems[i].finalPrice,
      count: 1,
      id: id,
    };

    //////It is specific ID for each product that we want to dispatch in cart items List
    const uniqueCartItemID = `${item.id}${item.name}${item.date}${item.time}`;

    const newCartItem = { ...item, uniqueCartItemID: uniqueCartItemID };

    dispatchCart({
      type: 'ADD',
      payload: { item: newCartItem },
    });
  };

  return (
    <div className="flex flex-col justify-between gap-4 rounded-md lg:w-2/3 ">
      <div className="flex flex-col items-stretch justify-between flex-1 gap-2 sm:flex-row">
        <div className="flex items-center justify-between flex-1  border py-1  border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
          <span className="font-semibold text-[18px] mx-2 text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis ">
            {`${list.allItems[i].Name} `}
          </span>
        </div>
        <div className="flex items-center justify-between flex-1   border py-1 border-[#d9d9d9] text-gray-800  rounded-md">
          <div className="w-full text-gray-600 ">
            {productFeatures && productFeatures.length === 1 && (
              <p className="mx-2">{list.availableItems[i].selectedName}</p>
            )}
            {productFeatures && productFeatures.length > 1 && (
              <Dropdown
                type={'name'}
                firstItem={list.availableItems[i].selectedName}
                menuItems={list.availableItems[i].namesArray}
                productID={id}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch justify-between flex-1 gap-2 sm:flex-row ">
        <div className="flex flex-row items-stretch justify-between flex-1 gap-2 text-[1rem]">
          <div className="flex items-center  flex-1 border py-1 justify-between px-2  border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
            <span className="">قیمت :</span>
            <div className="relative text-red-500">
              <span>{list.availableItems[i].basePrice} ریال</span>
              <div className="bg-black w-full h-[.5px] top-[45%] absolute"></div>
            </div>
          </div>
          <div className="flex items-center   flex-1  border py-1 justify-between px-2 border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
            <span className=""> با تخفیف :</span>
            <span className="text-green-500 ">
              {list.availableItems[i].finalPrice} ریال
            </span>
          </div>
        </div>

        {!(
          list.availableItems[i].datesArray.length === 1 &&
          list.availableItems[i].timesArray.length === 1
        ) && (
          <div className="flex items-stretch justify-between flex-1 gap-2">
            {
              <div className="flex items-center flex-1 justify-between border   border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
                <Dropdown
                  type={'date'}
                  firstItem={list.availableItems[i].selectedDate}
                  menuItems={list.availableItems[i].datesArray}
                  productID={id}
                />
              </div>
            }
            {
              <div className="flex items-center flex-1 justify-between border border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
                <Dropdown
                  type={'time'}
                  firstItem={list.availableItems[i].selectedTime}
                  menuItems={list.availableItems[i].timesArray}
                  productID={id}
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
          onClick={addToCartHandler}
          className="px-6 py-1 text-base text-white rounded hover:bg-[#ca1d39] transition-all bg-[#e92444] sm:py-1 lg:py-0 flex flex-row justify-center items-center gap-1"
        >
          <AiFillPlusCircle />
          <span> افزودن به سبد خرید</span>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
