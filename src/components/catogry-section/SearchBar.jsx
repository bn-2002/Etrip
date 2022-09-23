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
import { useDarkMode } from '../../store/DarkModeContext';
import {BsMoonFill } from 'react-icons/bs';
import {TiWeatherSunny} from 'react-icons/ti'

export const SearchBar = ({ style, iconColor }) => {
  const list = useList();
  const dispatchList = useDispatchList();
  const [isOpen, setIsOpen] = useState(true);
  const [cartClicked, setCartClicked] = useState(false);
  const cart = useCart();
  const debounce = useDebounce();
  const {darkMode,setDarkMode} = useDarkMode();


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
      className={`${style} flex items-center border border-t-0 border-x-0 ${darkMode ? 'border-b-slate-500' : 'border-b-[#e5e5ea]'} justify-evenly mt-2 py-[2px]`}
    >
      
      {/* Toggle light/dark button */}
      <div className="duration-500 cursor-pointer" onClick={() => 
      {
        setDarkMode(!darkMode);
        localStorage.setItem('theme', !darkMode);
      }
      }>
        {darkMode && <TiWeatherSunny color="yellow" fontSize="35px" />}
        {!darkMode && <BsMoonFill color="#25316D" fontSize="27px"/> }
      </div>

      <div className={`p-2 rounded-full  ${darkMode?'hover:bg-slate-700' : 'hover:bg-[#e5e5ea]'}  cursor-pointer transition-all`}>
        <LocationIcon />
      </div>
      <div className={`p-2 rounded-full  ${darkMode?'hover:bg-slate-700' : 'hover:bg-[#e5e5ea]'}  cursor-pointer transition-all`}>
        <MagnifireIcon />
      </div>

      <input
        onChange={(event) => changeInputHandler(event.target.value)}
        className={`w-3/4 px-4 py-2 outline-none duration-500  ${darkMode? 'rounded-lg bg-slate-800 text-white' : ''}`}
        type="text"
        dir="rtl"
      />

      <Link
        onClick={cartClickHandler}
        to={`${cart.items.length === 0 ? '#' : '/cart'}`}
      >
        <div className={`p-2 rounded-full  ${darkMode?'hover:bg-slate-700' : 'hover:bg-[#e5e5ea]'}  cursor-pointer flex  transition-all relative`}>
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
      <div className={`w-[.7px] h-6  ${darkMode ? 'bg-slate-500'  : 'bg-[#e5e5ea]'} `}></div>
      <div
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
        className={`p-2 rounded-full ${darkMode?'hover:bg-slate-700' : 'hover:bg-[#e5e5ea]'} cursor-pointer transition-all`}
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