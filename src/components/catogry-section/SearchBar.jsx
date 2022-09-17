import React, { useState, useEffect } from 'react';
import LocationIcon from '../icons/LocationIcon';
import MagnifireIcon from '../icons/MagnifireIcon';
import CartIcon from '../icons/CartIcon';
import PageFilterIcon from '../icons/PageFilterIcon';
import { useCart } from '../../store/CartContext';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal';
import FilterForm from '../filter-form/FilterForm';
import { useList  , useDispatchList} from '../../store/ListContext';
import useDebounce from '../../hooks/useDebounce';

export const SearchBar = ({ style, iconColor }) => {
  const list = useList();
  const dispatchList = useDispatchList();
  const [isOpen, setIsOpen] = useState(false);
  const [count, setcount] = useState(false);
  const cart = useCart();
  const cartItems = cart.items;
  const debounce = useDebounce();

  // useEffect(() => console.log('is open = ', count), [count]);

  /////////////CHANGE INPUT HANDLER FUNCTION
  const changeInputHandler = (value) => {
    debounce(() => {
      ///////////set loading true
      dispatchList({
        type: 'is-loading',
      });

      list.filterList(list.requestConfig, 'content', value);
    }, 2500);
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

      <Link to={`${cartItems.length === 0 ? './' : '/cart'}`}>
        <div className="p-2 rounded-full hover:bg-[#e5e5ea] cursor-pointer flex  transition-all relative">
          <div
            className={`${
              cartItems.length > 0 ? 'bg-[#e92444] text-white' : ''
            } rounded-full text-center px-2 absolute -top-1 -right-2`}
          >
            {cartItems.length > 0 ? cartItems.length : ''}
          </div>
          <CartIcon />
        </div>
      </Link>

      {/* devider line */}
      <div className="w-[1px] h-6 bg-[#e5e5ea]"></div>
      <div
        // onClick={() => setIsOpen((prevState) => !prevState)}
        onClick={() => setcount((prevState) => !prevState)}
        className="p-2 rounded-full hover:bg-[#e5e5ea] cursor-pointer transition-all"
      >
        <PageFilterIcon color={iconColor} />
        {/* <Modal open={isOpen} onClose={() => setIsOpen(false)}> */}
        <Modal open={count} onClose={() => setcount(false)}>
          <FilterForm
          // open={count}
          // onClose={() => {
          //   console.log('hereeeeee');
          //   // setIsOpen((x) => !x);
          //   setcount((x) => !x);
          // }}
          />
        </Modal>
      </div>
    </div>
  );
};

export default SearchBar;

////close filter form
