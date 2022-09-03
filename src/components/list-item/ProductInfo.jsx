import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import Dropdown from './Dropdown';
import { useItemsInfo } from '../../store/ItemsInfoContext';
import { useDispatchCart } from '../../store/CartContext';

const ProductInfo = ({
  moreDetailsOnClick,
  id,
}) => {
  const itemsInfo = useItemsInfo();
  ////find index of current item in items list
  const i = itemsInfo.availableITems.findIndex((item) => item.id === id);

  const productFeatures = itemsInfo.allItems[i].Feature;

  const dispatchCart = useDispatchCart();

  const addToCartHandler = () => {
    const item = {
      collectionName : itemsInfo.allItems[i].Name,
      name: itemsInfo.availableITems[i].selectedName,
      time: itemsInfo.availableITems[i].selectedTime,
      date: itemsInfo.availableITems[i].selectedDate,
      basePrice: itemsInfo.availableITems[i].basePrice,
      finalPrice: itemsInfo.availableITems[i].finalPrice,
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
            {`${itemsInfo.allItems[i].Name} `}
          </span>
        </div>
        <div className="flex items-center justify-between flex-1   border py-1 border-[#d9d9d9] text-gray-800  rounded-md">
          <div className="w-full text-gray-600 ">
            {productFeatures && productFeatures.length === 1 && (
              <p className="mx-2">{itemsInfo.availableITems[i].selectedName}</p>
            )}
            {productFeatures && productFeatures.length > 1 && (
              <Dropdown
                type={'name'}
                firstItem={itemsInfo.availableITems[i].selectedName}
                menuItems={itemsInfo.availableITems[i].namesArray}
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
              <span>{itemsInfo.availableITems[i].basePrice} ریال</span>
              <div className="bg-black w-full h-[.5px] top-[45%] absolute"></div>
            </div>
          </div>
          <div className="flex items-center   flex-1  border py-1 justify-between px-2 border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
            <span className=""> با تخفیف :</span>
            <span className="text-green-500 ">
              {itemsInfo.availableITems[i].finalPrice} ریال
            </span>
          </div>
        </div>

        {!(
          itemsInfo.availableITems[i].datesArray.length === 1 &&
          itemsInfo.availableITems[i].timesArray.length === 1
        ) && (
          <div className="flex items-stretch justify-between flex-1 gap-2">
            {
              <div className="flex items-center flex-1 justify-between border   border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
                <Dropdown
                  type={'date'}
                  firstItem={itemsInfo.availableITems[i].selectedDate}
                  menuItems={itemsInfo.availableITems[i].datesArray}
                  productID={id}
                />
              </div>
            }
            {
              <div className="flex items-center flex-1 justify-between border border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
                <Dropdown
                  type={'time'}
                  firstItem={itemsInfo.availableITems[i].selectedTime}
                  menuItems={itemsInfo.availableITems[i].timesArray}
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
