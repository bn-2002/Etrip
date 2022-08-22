import React from 'react';
import LocationIcon from '../icons/LocationIcon';
import MagnifireIcon from '../icons/MagnifireIcon';
import CartIcon from '../icons/CartIcon';
import PageFilterIcon from '../icons/PageFilterIcon';

export const SearchBar = () => {
  return (
    <div className="flex items-center border border-t-0 border-x-0 border-b-[#e5e5ea] justify-evenly mt-2 py-[2px] ">
      <div className="p-2 rounded-full hover:bg-[#e5e5ea] cursor-pointer transition-all">
        <PageFilterIcon />
      </div>
      <div className="w-[1px] h-6 bg-[#e5e5ea]"></div>
      <div className="p-2 rounded-full hover:bg-[#e5e5ea] cursor-pointer transition-all">
        <CartIcon />
      </div>
      <input
        className="w-3/4 px-4 py-2 outline-none"
        type="text"
        // placeholder="Search.."
        dir='rtl'
      />
      <div className="p-2 rounded-full hover:bg-[#e5e5ea] cursor-pointer transition-all">
        <MagnifireIcon />
      </div>
      <div className="p-2 rounded-full hover:bg-[#e5e5ea] cursor-pointer transition-all">
        <LocationIcon />
      </div>
    </div>
  );
};

export default SearchBar;
