import React, { useState } from 'react';
import { img1, img2, img3 } from './data';
import './ListItem.css';
import ItemLable from '../icons/ItemLable';
import TrashIcon from '../icons/TrashIcon';

const ListItem = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [showAddToCart, setShowAddToCard] = useState(true);

  const toggleDetailsBtn = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  const toggleShowAddToCartBtn = () => {
    setShowAddToCard((prevShowAddToCart) => !prevShowAddToCart);
  };

  return (
    <div className="relative mx-auto  h-fit w-fit mt-14">
      <div className="relative mx-8 min-h-min sm:mx-16 md:mx-2 text-[17.5px]">
        <div className="absolute -top-[6px]  left-[70px] md:left-[30px] ">
          <div className="relative">
            <ItemLable />
            <span className="absolute top-[5px] text-white right-[37%]">
              کیش
            </span>
          </div>
        </div>

        <div className="min-h-min mt-[10px]">
          <div className="flex flex-col-reverse items-stretch justify-between gap-2 lg:flex-row">
            <div className="flex flex-col justify-between gap-4 rounded-md lg:w-2/3 ">
              <div className="flex flex-col items-stretch justify-between flex-1 gap-2 sm:flex-row">
                <div className="flex items-center justify-between flex-1 px-2 border py-1 border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
                  <span className="font-semibold text-[18px] text-gray-600">
                    گشت جزیره (ویژه) تور تفریحی
                  </span>
                </div>
                <div className="flex items-center justify-between flex-1 px-2 border py-1 border-[#d9d9d9] text-gray-800  rounded-md">
                  <span className="text-gray-600">گشت جزیره VIP</span>
                </div>
              </div>
              <div className="flex flex-col items-stretch justify-between flex-1 gap-2 sm:flex-row ">
                <div className="flex items-center justify-between flex-1 px-2 border py-1 border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
                  <span>قیمت :</span>
                  <div className="relative text-red-500">
                    <span>654,000 ریال</span>
                    <div className="bg-black w-full h-[.5px] top-[45%] absolute"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-1 px-2 border py-1 border-[#d9d9d9] bg-[#f6f6f6] rounded-md">
                  <span> با تخفیف :</span>
                  <span className="text-green-500">600,000 ریال</span>
                </div>
              </div>
              <div className="flex flex-col-reverse items-stretch justify-between flex-1 gap-2 sm:flex-row">
                <button onClick={toggleDetailsBtn} className="text-[#5377ed]">
                  توضیحات بیشتر »{' '}
                </button>
                <button
                  onClick={toggleShowAddToCartBtn}
                  className="px-6 py-2 text-base text-white rounded bg-[#e92444] sm:py-1 lg:py-0"
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>

            <div className="box-border rounded-md lg:w-1/3 image-wrapper">
              <div className="">
                <div>
                  <img
                    src={img1}
                    alt=""
                    className="box-border w-full h-full mx-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={` ${
              showDetails
                ? 'max-h-[400px] scale-y-1 opacity-1 my-2'
                : 'max-h-0 scale-y-0 opacity-0 '
            }  overflow-hidden transition-all duration-500 ease origin-top bg-[#f6f6f6] text-black rounded-lg`}
          >
            <div className="p-4 text-[16px]">
              لطفا پس از تهیه بلیت، جهت هماهنگی گشت جزیره با آقای قمری با شماره
              09121032854 تماس حاصل فرمایید و زمان مورد نظر خود برای گشت را
              هماهنگ نمایید.
              <br />
              مبلغ پرداختی نهایی است و زمان مراجعه جهت گشت جزیره، مبلغ دیگری
              پرداخت نخواهید کرد
            </div>
          </div>

          <div
            className={` ${
              showAddToCart
                ? 'max-h-[200px] scale-y-1 my-2'
                : 'max-h-0 scale-y-0'
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
        </div>
      </div>

      <div className=" h-[2px] w-full absolute -bottom-[30px]  ">
          <div className="h-[.7px] mx-auto w-[90%] bg-[#d8d8d8]"></div>
        </div>
    </div>
  );
};

export default ListItem;
