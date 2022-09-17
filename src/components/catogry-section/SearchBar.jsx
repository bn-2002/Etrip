import React, { useState } from 'react';
import LocationIcon from '../icons/LocationIcon';
import MagnifireIcon from '../icons/MagnifireIcon';
import CartIcon from '../icons/CartIcon';
import PageFilterIcon from '../icons/PageFilterIcon';
import { useCart } from '../../store/CartContext';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal';
import FilterForm from '../filter-form/FilterForm';
import { useList, useDispatchList } from '../../store/ListContext';
import useDebounce from '../../hooks/useDebounce';

export const SearchBar = ({ style, iconColor }) => {
  const list = useList();
  const dispatchList = useDispatchList();
  const [isOpen, setIsOpen] = useState(true);
  const [cartClicked, setCartClicked] = useState(false);
  const cart = useCart();
  const debounce = useDebounce();

  /////////////CHANGE INPUT HANDLER FUNCTION
  const changeInputHandler = (value) => {
    debounce(() => {
      ///////////set loading true
      dispatchList({
        type: 'is-loading',
      });

      list.filterList(list.requestConfig, 'content', value);
    }, 1500);
  };

  const cartClickHandler = () => {
    setCartClicked((prevState) => !prevState);
  };

  return (
    <div
      className={`${style} flex items-center border border-t-0 border-x-0 border-b-[#e5e5ea] justify-evenly mt-2 py-[2px]`}
    >
      <div className="p-2 rounded-full hover:bg-[#e5e5ea] cursor-pointer transition-all">
        <LocationIcon />
      </div>
      <div className="p-2 rounded-full hover:bg-[#e5e5ea] cursor-pointer transition-all">
        <MagnifireIcon />
      </div>
      <input
        onChange={(event) => changeInputHandler(event.target.value)}
        className="w-3/4 px-4 py-2 outline-none"
        type="text"
        dir="rtl"
      />

      <Link
        onClick={cartClickHandler}
        to={`${cart.items.length === 0 ? '#' : '/cart'}`}
      >
        <div className="p-2 rounded-full hover:bg-[#e5e5ea] cursor-pointer flex  transition-all relative">
          <div
            className={`${
              cart.items.length > 0 ? 'bg-[#e92444] text-white' : ''
            } rounded-full text-center px-2 absolute -top-1 -right-2`}
          >
            {cart.items.length > 0 ? cart.items.length : ''}
          </div>

          {cart.items.length === 0 && cartClicked && (
            <>
              <div class="absolute top-[1.9rem] right-[.6rem] z-50">
                <div class="border-solid border-b-[#c51f3b] border-b-8 border-x-transparent border-x-8 border-t-0"></div>{' '}
                <div className="bg-[#c51f3b] p-2 text-white absolute top-[.5rem] w-[150px] -right-[3.7rem] text-center rounded">
                  سبد خرید شما خالی است
                </div>
              </div>
            </>
          )}

          <CartIcon />
        </div>
      </Link>

      {/* devider line */}
      <div className="w-[1px] h-6 bg-[#e5e5ea]"></div>
      <div
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
        className="p-2 rounded-full hover:bg-[#e5e5ea] cursor-pointer transition-all"
      >
        <PageFilterIcon color={iconColor} />
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(true);
          }}
        >
          <FilterForm />
        </Modal>
      </div>
    </div>
  );
};

export default SearchBar;

////close filter form
