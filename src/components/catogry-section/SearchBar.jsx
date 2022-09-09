import React, { useState } from 'react';
import LocationIcon from '../icons/LocationIcon';
import MagnifireIcon from '../icons/MagnifireIcon';
import CartIcon from '../icons/CartIcon';
import PageFilterIcon from '../icons/PageFilterIcon';
import { useCart } from '../../store/CartContext';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal';
import FilterForm from './FilterForm';

export const SearchBar = ({ style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useCart();

  return (
    <div
      className={`${style} flex items-center border border-t-0 border-x-0 border-b-[#e5e5ea] justify-evenly mt-2 py-[2px]`}
    >
      <div className="p-2 rounded-full hover:bg-[#e5e5ea] cursor-pointer transition-all">
        <MagnifireIcon />
      </div>
      <div className="p-2 rounded-full hover:bg-[#e5e5ea] cursor-pointer transition-all">
        <LocationIcon />
      </div>
      <input className="w-3/4 px-4 py-2 outline-none" type="text" dir="rtl" />
      <Link to="/cart">
        <div className="p-2 rounded-full hover:bg-[#e5e5ea] cursor-pointer flex  transition-all relative">
          <div className="bg-[#e92444] text-white rounded-full text-center px-2 absolute -top-1 -right-2">
            {cartItems.length}
          </div>
          <CartIcon />
        </div>
      </Link>
      {/* devider line */}
      <div className="w-[1px] h-6 bg-[#e5e5ea]"></div>
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="p-2 rounded-full hover:bg-[#e5e5ea] cursor-pointer transition-all"
      >
        <PageFilterIcon />
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <FilterForm />
        </Modal>
      </div>
    </div>
  );
};

export default SearchBar;
